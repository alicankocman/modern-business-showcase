import React from 'react'
import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  linkText: string;
}

const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div>
     <Image 
     src={image} 
     alt={title} 
     width={80} 
     height={80}
     className='object-contain mx-auto'/>
     <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
     <p className='text-gray-600 text-center font-medium text-sm mb-7'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae fugiat deserunt exercitationem hic quasi mollitia ipsum atque et inventore, quae illo quos tempore deleniti nihil voluptas voluptates quidem molestiae repudiandae!
     </p>
    </div>
  )
}

export default WhyChooseCard
