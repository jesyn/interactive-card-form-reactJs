import React from 'react';
import styles from './Card.module.scss';

function Card({ number, name, month, year, cvc }) {
    return (
        <>
            <figure className={styles.background}>
                <figure className={styles.card_back}>
                    <p className={styles.cvc}>{cvc || '000'} </p>
                </figure>
                <figure className={styles.card_front}>
                    <div className={styles.bigCircle}> </div>
                    <div className={styles.smallCircle}></div>
                    <p className={styles.number}>
                        {number || ' 0000 0000 0000 0000 '}{' '}
                    </p>
                    <p className={styles.name}>
                        {name || ' nombre apellido '}{' '}
                    </p>
                    <p className={styles.date}>
                        {month || '00'} / {year || '00'}{' '}
                    </p>
                </figure>
            </figure>
        </>
    );
}

export default Card;
