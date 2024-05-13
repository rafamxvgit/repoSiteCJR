import {Formik, Form, Field} from "formik";
import * as yup from "yup";
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import Link from "next/link";
import PersonalizedInput from '../components/textBox';

const handleSubmit = (values: any) => {
    console.log(values)
}

const registerPage = () => {
    const initialValues = {email: "", password: ""};

    const validation = yup.object({
        email: yup.string().email("invalid email adress").required("Required"),
        password: yup.string().required("Required")
    })

    const submit = (values: any) => {
        console.log(values);
    }
    return (
        <>
            <main>
                <div className='flex'>
                    <div className="w-1/2 h-screen overflow-hidden">
                        <img src="/images/imageDemoLogin.png" alt="Imagem da tela de Login" />
                    </div>
                    <div className="w-1/2 h-screen flex overflow-hidden justify-center">
                        <div className="w-3/4 h-full flex justify-evenly flex-col gap-2">
                            <h2 className="text-center text-3xl">Cadastro de usuário:</h2>
                            <PersonalizedInput type="text" placeholder="Nome"></PersonalizedInput>
                            <PersonalizedInput type="password" placeholder="Password"></PersonalizedInput>
                            <PersonalizedInput type="text" placeholder="Email"></PersonalizedInput>
                            <PersonalizedInput type="text" placeholder="Curso"></PersonalizedInput>
                            <PersonalizedInput type="text" placeholder="Departamento"></PersonalizedInput>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default registerPage