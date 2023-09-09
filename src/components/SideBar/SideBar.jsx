import React from 'react'
import './SideBar.scss';
import {Title} from '../Title/Title'

const SideBar = () => {
  return (
    <div className='side-bar'>
        <div className='flex-container'>
            <Title>Hello</Title>
            <Title>Bay</Title>
        </div>
    </div>
  )
}

export default SideBar