import React from 'react'
import { Tile } from '../Tile/Tile';

import './TileList.css';

export const TileList = (props) => {
    const objects = props.objects;

  return (
    <ul className='contact-list'>
        {objects.map((object, index) => {
                return (
                    <Tile key={index} item={index} object={object} />
                );
          })
        }
    </ul>
  )
}
