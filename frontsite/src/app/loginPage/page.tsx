import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'

const loginPage = () => {
    return (
        <>
            <body className={styles.window}>
                <div className={styles.mainContainer}>
                    <img src="/images/imageDemoLogin.png" className={styles.loginImage}></img>
                    <div className={styles.subContainer}>
                        batata
                    </div>
                </div>
            </body >
        </>
    )
}

export default loginPage