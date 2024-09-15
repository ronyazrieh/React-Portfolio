import React from 'react'
import styles from "./IconList.module.css";
import { getImageUrl } from '../../utils'
import { motion } from 'framer-motion';


export const IconList = (props) => {
  return (
    <motion.div className={styles.container} transition={'duration: .3'}
    whileHover={{
      scale: 1.03,
    }}>
        <img src={getImageUrl('icons/' + props.icon + '.png')}
                    className={styles.image}></img>
        <h4>{props.software}</h4>
    </motion.div>
  )
}
