import React from 'react'
import './Card.scss';

const Card = ({children, colunm}) => {
  
  return (
    <div className='card' style={colunm &&
      {
        'flexDirection': 'column',
        'justifyContent': 'start',
        'alignItems': 'stretch',
        'gap': '30px',
        'paddingLeft': '4.3rem',
      }
    }>
        {children}
    </div>
  )
}

export default Card