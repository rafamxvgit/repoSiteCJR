import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import Image from 'next/image';
import Link from "next/link";
import ButtInpBoxEnter from '../components/buttonEntrar';
import ButtRegister from '../components/buttonCadastrar';
import PersonalizedInput from '../components/textBox';



const loginPage = () => {

    return (
        <>
            <main>
                <div className='flex'>
                    <div className="w-1/2 h-screen overflow-hidden">    
                        <img src="/images/imageDemoLogin.png" alt="Imagem da tela de Login" />
                    </div>
                    <div className="w-1/2 h-screen flex overflow-hidden justify-center">
                        <div className="w-3/4 h-full flex justify-evenly flex-col gap-2">
                            <PersonalizedInput type='text' placeholder='Username'></PersonalizedInput>
                            <PersonalizedInput type='password' placeholder='Password' ></PersonalizedInput>
                            <div className=' h-10 w-full flex justify-evenly'>
                                <ButtInpBoxEnter estilo="h-full w-1/3 bg-lime-400 rounded-xl" ></ButtInpBoxEnter>
                                <ButtRegister estilo="h-full w-1/3 bg-lime-400 rounded-xl" ></ButtRegister>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default loginPage