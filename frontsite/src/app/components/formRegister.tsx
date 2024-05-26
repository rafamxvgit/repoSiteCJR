"use client"
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Vazia {
}

const FormRegister: React.FC<Vazia> = () => {
    const router = useRouter()
    const initialValues = { email: "", senha: ""};

    const validation = yup.object({
        email: yup.string().email("invalid email adress").required("Required"),
        senha: yup.string().required("Required"),
        nome: yup.string().required("Required"),
        curso: yup.string().required("Required"),
        departamento: yup.string().required("Required")
    })

    const submit = async (values: any) => {
        const user = await axios.post('http://localhost:3005/user', values)
        if (user.status == 201){
            return router.push(`/log/${user.data.id}/feed`)
        }
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validation}>
                <Form className="h-full w-full flex flex-col justify-evenly">
                    <h2 className="text-center text-2xl">Registro de usuário</h2>
                    <Field id="nome" type="text" name="nome" placeholder="name:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="email" type="email" name="email" placeholder="email:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <Field id="senha" type="password" name="senha" placeholder="senha:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
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