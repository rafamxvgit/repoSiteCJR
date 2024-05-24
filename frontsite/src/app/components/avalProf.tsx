"use client"
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

interface objComment {conteudo: string}

const initVals = {conteudo: ''}



interface parametros {
    idAutor: string
    idAlvo: string
}



const CampoAvaliacao: React.FC<parametros> = ({idAutor, idAlvo}) => {

    const submit = async (values: objComment) => {
        const comment = {idAutor: +idAutor, idAlvo: +idAlvo, conteudo: values.conteudo, data: Date().toString()}
        console.log(comment)
        await axios.post("http://localhost:3005/post", comment)
    }

    return (
        <>
            <div className="h-fit w-full flex flex-col gap-3 bg-lime-500 rounded-lg my-3 p-3">
                <div className="h-12 flex justify-center rounded-lg bg-lime-300">
                    <h3 className="h-full content-center text-2xl">Avalie esse professor</h3>
                </div>
                <Formik initialValues={initVals} onSubmit={submit}>
                    <Form>
                        <Field id="conteudo" type="text" name="conteudo" placeholder="deixe seu comentário" className="w-full h-10 rounded-lg p-3"/>
                        <button type="submit" className="h-10 bg-lime-300 mt-3 p-2 rounded-lg"> enviar </button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default CampoAvaliacao;