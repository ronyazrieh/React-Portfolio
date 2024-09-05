import React from 'react'
import styles from "./IconList.module.css";
import { getImageUrl } from '../../utils'


export const IconList = (props) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl('icons/' + props.icon + '.png')}
                    className={styles.image}></img>
        <h4>{props.software}</h4>
    </div>
  )
}
