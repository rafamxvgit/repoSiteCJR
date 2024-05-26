"use client"
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

interface boxProps {
}

interface Usuario{
    email: string
    senha: string
}

const FormLogin: React.FC<boxProps> = () => {
    const router = useRouter();
    const initialValues = { email: "", senha: "" };

    const validation = yup.object({
        email: yup.string().email("invalid email adress").required("Required"),
        senha: yup.string().required("Required"),
    })

    const submit =async (values: Usuario) => {
        const userData = await axios.post('http://localhost:3005/user/login', values)
        router.push(`/log/${userData.data.id}/feed`)
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validation}>
                <Form className="h-full w-full flex flex-col justify-evenly">
                    <h2 className="text-center text-2xl">Página de login:</h2>
                    <Field id="email" type="email" name="email" placeholder="email:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="senha" type="password" name="senha" placeholder="senha:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <div className="w-full h-12 flex justify-between">
                        <button className= "h-full w-1/3 bg-lime-400 rounded-xl" type="submit">Entrar</button>
                        <a href="./register" className= "h-full w-1/3 bg-lime-400 rounded-xl text-center content-center" type="button">
                            registrar
                        </a>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormLogin;