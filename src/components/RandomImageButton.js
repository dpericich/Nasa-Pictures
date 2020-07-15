import React from 'react';
import styles from './RandomImageButton.module.css'

const RandomImageButton = (props) => {
    return (
        <button 
            className={styles.randomImageButton}
            onClick={props.getRandomDaysPicture}>Random Image</button>
    )
};

export default RandomImageButton;