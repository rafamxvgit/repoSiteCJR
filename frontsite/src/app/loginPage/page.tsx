"use client"

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Link from "next/link";
import TextInpBox from '../components/inputTextBox';

const loginPage = () => {

    const formatado = "flex flex-col text-red-200"
    const [text, setText] = useState("");

    return (
        <>
            <main>
                <div className='flex'>
                    <div className="w-1/2 h-screen overflow-hidden">
                        <img src="/images/imageDemoLogin.png" alt="Imagem da tela de Login" />
                    </div>
                    <div className="w-1/2 h-screen flex overflow-hidden justify-center">
                        <div className="w-3/4 h-full flex justify-evenly flex-col gap-2">
                            <TextInpBox texto='nome'></TextInpBox>
                            <TextInpBox texto='username'></TextInpBox>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default loginPage