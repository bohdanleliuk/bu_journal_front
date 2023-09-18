import React from 'react'
import styles from './Card.module.scss';

const Card = ({children, colunm}) => {
  
  return (
    <div className={styles.card} style={colunm &&
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