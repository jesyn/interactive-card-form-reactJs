import React from 'react';
import styles from './Form.module.scss';

function Form({ name, number, month, year, cvc }) {
    return (
        <div className={styles.container}>
            <form className={styles.form_container}>
                <section className={styles.form_data}>
                    <label> cardholder name </label>
                    <input
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        name='name'
                        onChange={name.onChange}
                        value={name.value}
                        required
                    />
                    <label> card number </label>
                    <input
                        type='text'
                        placeholder='e.g. 1234 5678 9123 0000'
                        name='number'
                        onChange={(e) => {
                            e.target.value =
                                e.target.value
                                    .replace(/\D/g, '')
                                    .replaceAll(' ', '')
                                    .match(/.{1,4}/g)
                                    ?.join(' ') || '';
                            number.onChange(e);
                        }}
                        value={number.value}
                        required
                    />
                </section>
                <section className={styles.form_info}>
                    <div className={styles.form_date}>
                        <label className={styles.exp_date_title}>
                            {' '}
                            exp. date (mm/yy){' '}
                        </label>
                        <label className={styles.cvc_title}> cvc </label>
                    </div>
                    <div className={styles.form_exp}>
                        <div className={styles.date}>
                            <input
                                className={styles.month}
                                type='number'
                                placeholder='MM'
                                name='month'
                                onChange={month.onChange}
                                value={month.value}
                                required
                            />
                            <input
                                className={styles.year}
                                type='number'
                                placeholder='YY'
                                name='year'
                                pattern='[0-9]{0,2}'
                                onChange={year.onChange}
                                value={year.value}
                                required
                            />
                        </div>
                        <input
                            className={styles.cvc}
                            type='number'
                            placeholder='e.g. 123'
                            name='cvc'
                            pattern='[0-9]{0,3}'
                            onChange={cvc.onChange}
                            value={cvc.value}
                            required
                        />
                    </div>
                </section>
                <button /* onClick={submit} */> Confirm </button>
            </form>
        </div>
    );
}

export default Form;
