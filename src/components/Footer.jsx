import React from 'react';
import styles from './Footer.module.scss';

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.attribution}>
                Challenge by 
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer"> Frontend Mentor </a>
                Coded by 
                <a href="https://github.com/jesyn" target="_blank" rel="noopener noreferrer"> Jesyn </a>
            </div>
        </footer>
    )
}

export default Footer;