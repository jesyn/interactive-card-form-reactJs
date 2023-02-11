import React from 'react';
import styles from './Form.module.scss'

function Form() {


    return (
        <div className={styles.container}>
            <form className={styles.form_container}>
                <section className={styles.form_data}>
                    <label> cardholder name </label>
                    <input type="text" placeholder="e.g. Jane Appleseed" required /> 
                    <label> card number </label>
                    <input type="number" placeholder="e.g. 1234 5678 9123 0000" required />
                </section>
                <section className={styles.form_info}>
                    <div className={styles.form_date}>
                        <label> exp. date (mm/yy) </label>
                        <label> cvc </label>{/* <br/> */}
                        
                    </div>
                    <div className={styles.form_exp}>
                        <div className={styles.date}>
                            <input className={styles.month} type="number" placeholder="MM" />
                            <input className={styles.year} type="number" placeholder="YY"/> 
                        </div>
                        <div>
                            <input className={styles.cvc} type="number" placeholder="e.g. 123"/> 
                        </div>
                    </div>
                </section>
                <button> Confirm </button>
            </form>
        </div>
    )
}

export default Form;