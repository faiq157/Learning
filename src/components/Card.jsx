import React from 'react'
import Avator from './Avator'

const Card = ({headtext,Des,Img}) => {
  return (
    <div className='h-80 w-80 bg-gray-700 text-amber-50 rounded-lg m-2.5 shadow-md  '>
        <Avator className={"bg-amber-200 rounded-full m-4"} Img={Img}/>
        <h4 className='m-4 p-2'>{headtext}</h4>
        <p className='m-4 p-2'>{Des}</p>
    </div>
  )
}

export default Card