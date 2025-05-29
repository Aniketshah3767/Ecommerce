// //function to add product
// import {v2 as cloudinary} from 'cloudinary'
// import productModel from '../models/productModel.js';

// const addProduct = async (req,res) =>{
//     try {
//         const {name,description ,price, category,subCategory, sizes, bestseller} = req.body

//         const image1 =req.files.image1 && req.files.image1[0];
//         const image2 =req.files.image2 && req.files.image2[0];
//         const image3 =req.files.image3 && req.files.image3[0];
//         const image4 =req.files.image4 && req.files.image4[0];

//         //touplad image in cloudinart

//         // const images = [image1,image2,image3,image4].filter(()=>item !== undefined)
//         const images = [image1,image2,image3,image4].filter((item)=>item !== undefined)

//         const imagesUrl = await Promise.all(
//             images.map(async (item) =>{
//                 let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
//                 return result.secure_url
//             })
//         )

        
//         const productData = {
//             name,
//             description,
//             category,
//             price : Number(price),
//             subCategory,
//             bestseller : bestseller === 'true' ? true : false,
//             sizes : JSON.parse(sizes),
//             image: imagesUrl,
//             date : Date.now()
//         }

//         console.log(productData)

//         const product = new productModel(productData);
//         await product.save()

//         res.json({success:true,message:'Product added'})
        

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// //function for list product
// const listProduct = async (req,res) =>{
    
// }


// //fcuntion for removing product
// const removeProduct = async (req,res) =>{


// }


// //function for single product info
// const singleProduct = async (req,res) =>{
    
// }


// export {listProduct,addProduct,removeProduct,singleProduct};



//function to add product
import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';

const addProduct = async (req,res) =>{
    try {
        console.log('=== ADD PRODUCT DEBUG START ===');
        console.log('Request body:', req.body);
        console.log('Request files:', req.files);

        const {name,description ,price, category,subCategory, sizes, bestseller} = req.body

        // Add validation for required fields
        if (!name || !description || !price || !category) {
            return res.json({success: false, message: 'Missing required fields: name, description, price, category'});
        }

        const image1 =req.files.image1 && req.files.image1[0];
        const image2 =req.files.image2 && req.files.image2[0];
        const image3 =req.files.image3 && req.files.image3[0];
        const image4 =req.files.image4 && req.files.image4[0];

        console.log('Images found:', {
            image1: !!image1,
            image2: !!image2,
            image3: !!image3,
            image4: !!image4
        });

        //to upload image in cloudinary
        const images = [image1, image2, image3, image4].filter(item => item !== undefined);
        
        console.log('Filtered images count:', images.length);

        let imagesUrl = [];
        
        if (images.length > 0) {
            try {
                imagesUrl = await Promise.all(
                    images.map(async (item) =>{
                        console.log('Uploading image:', item.path);
                        let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                        console.log('Upload result:', result.secure_url);
                        return result.secure_url
                    })
                )
                console.log('All images uploaded successfully:', imagesUrl);
            } catch (uploadError) {
                console.error('Image upload error:', uploadError);
                return res.json({success: false, message: 'Image upload failed: ' + uploadError.message});
            }
        } else {
            console.log('No images to upload');
        }

        // Parse sizes with error handling
        let parsedSizes;
        try {
            parsedSizes = sizes ? JSON.parse(sizes) : [];
        } catch (parseError) {
            console.error('Sizes parsing error:', parseError);
            return res.json({success: false, message: 'Invalid sizes format'});
        }

        const productData = {
            name,
            description,
            category,
            price : Number(price),
            subCategory,
            bestseller : bestseller === 'true' ? true : false,
            sizes : parsedSizes,
            image: imagesUrl,
            date : Date.now()
        }

        console.log('Product data to save:', productData);

        // Check if productModel is properly imported
        if (!productModel) {
            console.error('Product model is not imported properly');
            return res.json({success: false, message: 'Product model not found'});
        }

        const product = new productModel(productData);
        console.log('Product instance created:', product);
        
        const savedProduct = await product.save();
        console.log('Product saved successfully:', savedProduct._id);
        console.log('=== ADD PRODUCT DEBUG END ===');

        res.json({success:true,message:'Product added', productId: savedProduct._id})
        

    } catch (error) {
        console.error('=== ADD PRODUCT ERROR ===');
        console.error('Error details:', error);
        console.error('Error stack:', error.stack);
        res.json({success:false,message:error.message})
    }
}

//function for list product
const listProduct = async (req,res) =>{
    try {
        const products = await productModel.find({});
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//function for removing product
const removeProduct = async (req,res) =>{
    try {
        const {id} = req.body;
        await productModel.findByIdAndDelete(id);
        res.json({success: true, message: "Product removed"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//function for single product info
const singleProduct = async (req,res) =>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {listProduct,addProduct,removeProduct,singleProduct};