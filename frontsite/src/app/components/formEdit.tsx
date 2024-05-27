"use client"
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
interface Valores{}

const initSenha = {senha: ''}
const initFoto = {foto: ''}
const initNome = {nome: ''}
const validationSenha = yup.object({senha: yup.string().required('Required')})
const validationFoto = yup.object({foto: yup.string().required('Required')})
const validationNome = yup.object({nome: yup.string().required('Required')})
const submitSenha = async () => {console.log("Senha")}
const submitFoto = async () => {console.log("Foto")}
const submitNome = async () => {console.log("Nome")}



const FormEdit: React.FC<Valores> = () => {
    return(
    <>
        <div className="self-center w-5/6 h-dvh text-center flex flex-col justify-evenly">
            <div className="flex flex-col w-full gap-3">
                <h2 className="text-3xl">Mudar Senha</h2>
                <Formik initialValues={initSenha} validationSchema={validationSenha} onSubmit={submitSenha}>
                    <Form className="w-full flex justify-center gap-2">
                        <div className="w-5/6">
                            <Field id='senha' type='password' name='senha' placeholder='Mudar Senha' className='w-full h-12 text-lg rounded-lg p-3 bg-lime-200'/>
                        </div>
                        <div className="w-1/6">
                            <button className="h-12 w-full bg-lime-400 rounded-lg" type="submit">submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            
            <div className="flex flex-col w-full gap-3">
                <h2 className="text-3xl">Mudar Foto</h2>
                <Formik initialValues={initFoto} validationSchema={validationFoto} onSubmit={submitFoto}>
                    <Form className="w-full flex justify-center gap-2">
                        <div className="w-5/6">
                            <Field id='foto' type='text' name='foto' placeholder='Mudar Foto' className='w-full h-12 text-lg rounded-lg p-3 bg-lime-200'/>
                        </div>
                        <div className="w-1/6">
                            <button className="h-12 w-full bg-lime-400 rounded-lg" type='submit'>submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>

            <div className="flex flex-col w-full gap-3">
                <h2 className="text-3xl">Mudar Nome</h2>
                <Formik initialValues={initNome} validationSchema={validationNome} onSubmit={submitNome}>
                    <Form className="w-full flex justify-center gap-2">
                        <div className="w-5/6">
                            <Field id='nome' type='text' name='nome' placeholder='Mudar nome'className='w-full h-12 text-lg rounded-lg p-3 bg-lime-200'/>
                        </div>
                        <div className="w-1/6">
                            <button className="h-12 w-full bg-lime-400 rounded-lg " type='submit'>submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        
    </>
    )
}

export default FormEdit;