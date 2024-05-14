import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import FormLogin from '../components/formLogin';


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
                            <FormLogin></FormLogin>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default loginPage