"use client"

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

interface boxProps {

}

const FormLogin: React.FC<boxProps> = () => {
    const initialValues = { email: "", password: "" };

    const validation = yup.object({
        email: yup.string().email("invalid email adress").required("Required"),
        password: yup.string().required("Required"),
    })

    const submit = (values: any) => {
        console.log(values);
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validation}>
                <Form className="h-full w-full flex flex-col justify-evenly">
                    <h2 className="text-center text-2xl">Página de login:</h2>
                    <Field id="email" type="email" name="email" placeholder="email:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="password" type="password" name="password" placeholder="password:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <div className="w-full h-12 flex justify-between">
                        <button className= "h-full w-1/3 bg-lime-400 rounded-xl" type="submit">Entrar</button>
                        <a href="./registerPage" className= "h-full w-1/3 bg-lime-400 rounded-xl text-center content-center" type="button">
                            registrar
                        </a>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormLogin;