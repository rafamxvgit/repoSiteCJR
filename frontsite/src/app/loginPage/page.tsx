"use client"

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

const loginPage = () => {
    
    const [text, setText] = useState("");

    return (
        <>
            <body className={styles.window}>
                <div className={styles.mainContainer}>
                    <div className={styles.subContainer}>
                        <img src="/images/imageDemoLogin.png" className={styles.loginImage}></img>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.loginContainer} >
                            <div className={styles.userNameBox}>
                                Nome de usuário:
                                <input className={styles.input} type="text" onChange={(event) => setText(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default loginPage