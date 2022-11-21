import React from 'react'

import './Tile.css'

export const Tile = (props) => {
  const object = props.object;
  let array = Object.values(object);
  console.log(array);
  return (
    <div className='tile-container'>
      {array.map((value, index) => {
        if(index === 0) {
          return (
            <p key={index} className='tile-title'>{value}</p>
          )
        } else {
          return (
            <p key={index} className='tile'>{value}</p>
          )
        }
      })}
    </div>
  )
  
}
