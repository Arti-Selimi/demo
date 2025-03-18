import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {title: string, text: string, icon: IconProp}

export default function Card({title, text, icon}: Props) {
  return (
    <div className='flex flex-col items-start justify-between gap-3 p-5 border-2 border-[#F7F9F6] rounded-2xl bg-[#F9FDFA]'>
        <FontAwesomeIcon icon={icon} className='size-5'/>
        <h3 className='font-black'>{title}</h3>
        <p>{text}</p>
    </div>
  )
}