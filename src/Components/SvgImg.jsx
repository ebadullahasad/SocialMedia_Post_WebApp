import React from 'react'
import icon1 from "../../public/svg"
const SvgImg = ({color, path}) => {
  return (
   <svg className=''>
    <path d={path}  fill={color}/>
   </svg>
  )
}

export default SvgImg