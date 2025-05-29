import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
   
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, beatae voluptatum similique aperiam corporis error, magnam facere libero rerum laborum eius suscipit deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla recusandae perspiciatis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, omnis non quas laborum ea repellendus. Nostrum doloribus reprehenderit eveniet atque repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum, placeat voluptatem fugit soluta porro quae maiores amet beatae harum. </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit blanditiis, odit exercitationem sint sunt, provident dolorum dignissimos perspiciatis cupiditate eaque magnam incidunt ipsum magni placeat aliquam.</p>
      </div>
    </div>

    <div className='text-4xl py-4 '>
      <Title text1={('WHY')} text2={'CHOODE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text:sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam delectus consequatur autem?</p>

      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convienecnce</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam delectus consequatur autem?</p>

      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exception Customer Service</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam delectus consequatur autem?</p>
      </div>
      
    </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
    
  )
}

export default About
