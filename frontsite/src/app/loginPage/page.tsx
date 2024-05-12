"use client"

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

const loginPage = () => {
    
    const [text, setText] = useState("");

    return (
        <>  
            <header className={styles.header}>
                <div>
                    <h1>Site de avaliação de professores</h1>
                </div>
            </header>
            <body className={styles.window}>
                <div className={styles.mainContainer}>
                    <div className={styles.subContainer}>
                        <img src="/images/imageDemoLogin.png" className={styles.loginImage}></img>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.loginContainer} >
                            <h2 className = {styles.inputTitle}>Login:</h2>
                            <div className={styles.inputBox}>
                                Nome de usuário:
                                <input className={styles.input} type="text" onChange={(event) => console.log("Nome")}/>
                            </div>
                            <div className={styles.inputBox}>
                                Senha:
                                <input className={styles.input} type="text" onChange={(event) => console.log("senha")}/>
                            </div>
                            <div className={styles.buttonsContainer}>
                                <button className={styles.button} onClick={(event) => console.log("entrar")}>Entrar</button>
                                <button className={styles.button} onClick={(event) => console.log("cadastrar")}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default loginPage