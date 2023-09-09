import React, { useState } from 'react'
import './Title.scss';


export const Title = ({children}) => {

  return (
    <h1 className='title'>{children}</h1>
 )
}
