import React from 'react'
import Slide from './Slide'
import img from '../../public/placeholder.png'

export default function SlidesMain() {
  return (
    <div className='flex items-center justify-around bg-main w-full h-full mt-20'>
        <Slide image={img}  className='rotate-5 relative -left-20 -top-5'/>
        <Slide image={img} />
        <Slide image={img} className='-rotate-5 relative -right-20 -top-5' />
    </div>
  )
}