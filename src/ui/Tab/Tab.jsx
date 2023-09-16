import React from 'react';
import './Tab.scss';

const Tab = ({children}) => {
  return (
    <div className='tab'>
        {children}
    </div>
  )
}

export default Tab