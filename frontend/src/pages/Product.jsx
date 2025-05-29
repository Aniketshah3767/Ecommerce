import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  const [size, setSize] = useState('');

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  }, [products, productId]);

  if (!productData) return <div className="opacity-0" />;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-8">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:h-[500px] sm:w-[100px] w-full gap-3 sm:gap-3">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className={`w-[200px] h-[200px] object-cover rounded cursor-pointer border ${
                  image === item ? "border-black" : "border-gray-300"
                }`}
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-full max-w-md object-contain"
              src={image}
              alt="Main Product"
            />
          </div>
        </div>

        {/* Product Details (optional placeholder) */}
      

            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex item-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_dull_icon} alt="" className="w-5 h-5" />
                <p className="pl-2">{122}</p>
              </div>
              <p className="font-medium text-3xl mt-5">{currency}{productData.price}</p>
              <p className="mt-5 text-gray-600 md:w-4/5 ">{productData.description}</p>
              <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>(setSize(item))} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-yellow-500': ''}`} key={index}>{item}</button>
                ))}
              </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"> Add to Cart</button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Orginal Product</p>
                <p>Cash on Delivery </p>
                <p>Easy Return</p>

              </div>
            </div>
      </div>
    </div>
  );
};

export default Product;
