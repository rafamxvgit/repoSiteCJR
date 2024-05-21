"use client"

import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
interface boxProps {

}

const FormRegister: React.FC<boxProps> = () => {
    const initialValues = { email: "", password: "" };

    const validation = yup.object({
        email: yup.string().email("invalid email adress").required("Required"),
        password: yup.string().required("Required"),
        name: yup.string().required("Required"),
        curso: yup.string().required("Required"),
        departamento: yup.string().required("Required")
    })

    const submit = async (values: any) => {
        const user = await axios.post('http://localhost:3003/user', values)
        console.log(user);
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validation}>
                <Form className="h-full w-full flex flex-col justify-evenly">
                    <h2 className="text-center text-2xl">Registro de usuário</h2>
                    <Field id="name" type="name" name="name" placeholder="name:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="email" type="email" name="email" placeholder="email:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="password" type="password" name="password" placeholder="password:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="curso" name="curso" placeholder="curso:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="departamento "type="departamento" name="departamento" placeholder="departamento:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <div className="w-full h-12 flex justify-center">
                        <button className= "h-full w-1/2 bg-lime-400 rounded-xl" type="submit">Entrar</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormRegister;