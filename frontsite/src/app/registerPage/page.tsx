"use client"

import React from 'react';
import styles from './page.module.css';
import { symlink } from 'fs';

const registerPage = () => {
    return(
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
                        <ul className={styles.loginContainer} >
                            <li className={styles.inputBox}>
                                <h2 className={styles.inputTitle}>
                                    Novo Usuário:
                                </h2>
                            </li>
                            <li className={styles.inputBox}>
                                Nome de usuário:
                                <input className={styles.input} type="text" onChange={(event) => console.log("Nome")}/>
                            </li>
                            <li className={styles.inputBox}>
                                Email:
                                <input className={styles.input} type="text" onChange={(event) => console.log("senha")}/>
                            </li>
                            <li className={styles.inputBox}>
                                Senha:
                                <input className={styles.input} type="text" onChange={(event) => console.log("senha")}/>
                            </li>
                            <li className={styles.inputBox}>
                                Curso:
                                <input className={styles.input} type="text" onChange={(event) => console.log("senha")}/>
                            </li>
                            <li className={styles.inputBox}>
                                Departamento:
                                <input className={styles.input} type="text" onChange={(event) => console.log("senha")}/>
                            </li>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={(event) => console.log("cadastrar")}>Cadastrar</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </body>
        </>
    )
}

export default registerPage