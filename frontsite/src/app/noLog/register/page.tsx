import React, { MouseEventHandler } from 'react';
import FormRegister from '@/app/components/formRegister';

const handleSubmit = (values: any) => {
    console.log(values)
}

const registerPage = () => { 
    return (
        <>
            <main>
                <div className='flex'>
                    <div className="w-1/2 h-screen overflow-hidden">
                        <img src="/images/imageDemoLogin.png" alt="Imagem da tela de Login" />
                    </div>
                    <div className="w-1/2 h-screen flex overflow-hidden justify-center">
                        <div className="w-3/4 h-full flex">
                            <FormRegister></FormRegister>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default registerPage