import React from 'react'
import logo from '@/public/loremlogo.png'
import Image from 'next/image'

type Props = {}

export default function Slide({}: Props) {
  return (
    <div className="relative w-[70%] flex items-center justify-center overflow-hidden self-center">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      
      <div className="flex gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Image key={index} src={logo} alt="logo" width={125} height={100} />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
