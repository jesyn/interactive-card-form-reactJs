import React from 'react'
import styles from './Card.module.scss'

function Card() {
    return (
        <>
            <figure className={styles.background}>
                <figure className={styles.card_back}></figure>
                <figure className={styles.card_front}></figure>
            </figure>
            
        </>
    )
}

export default Card