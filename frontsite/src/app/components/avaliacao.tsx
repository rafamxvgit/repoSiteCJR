"use client"
import { useState } from "react";
import { AvaliacaoDTO } from "./interfacesGlobais";
import axios from "axios";
import { ComentarioDTO } from "./interfacesGlobais";
import Comentario from "./comentario";
import { Formik, Form, Field } from "formik";

interface PropsAvaliacao { dados: AvaliacaoDTO, loged: number }

const Avaliacao: React.FC<PropsAvaliacao> = ({ dados, loged }) => {
    
    let BotaoExcluir: () => React.JSX.Element;
    let NovoComentario: () => React.JSX.Element;

    const [comentarios, setComentarios] = useState<ComentarioDTO[]>(dados.comentarios)

    const clickExcluir = async () => {
        await axios.delete(`http://localhost:3005/post/${dados.id}`)
        window.location.reload()
    }

    const clickComentarios = () => {
        if (comentarios.length == 0) {
            setComentarios(dados.comentarios)
        }
        else {
            setComentarios([])
        }
    }

    if (loged == dados.idAutor) {
        BotaoExcluir = () => {
            return (
                <div>
                    <button className="bg-lime-200 p-1 rounded-md" onClick={clickExcluir}>excluir</button>
                </div>)
        }
    }
    else {
        BotaoExcluir = () => { return (<></>) }
    }
    
    if (loged != -1) {
        NovoComentario = () => {
            const initVals = {conteudo: ''}
            const submit = async ({conteudo}: typeof initVals) => {
                const Value = {idAlvo: dados.id, idAutor: loged, conteudo: conteudo, data: Date.now().toString()}
                console.log(Value)
                await axios.post('http://localhost:3005/comentario', Value)
                window.location.reload()
            }
            return(
                <div>
                    <div className="h-1 bg-black"/>
                    <p className="my-2">fazer um comentario:</p>
                    <Formik initialValues={initVals} onSubmit={submit}>
                    <Form>
                        <Field id="conteudo" type="text" name="conteudo" placeholder="deixe seu comentário" className="w-full h-10 rounded-lg p-3"/>
                        <button type="submit" className="h-10 bg-lime-300 mt-3 p-2 rounded-lg"> enviar </button>
                    </Form>
                </Formik>
                </div>
            )
        }
    }
    else {
        NovoComentario = () => {
            return(<></>)
        }
    }

    const BotaoComentarios = () => {
        return (
            <div>
                <button onClick={clickComentarios} className="bg-lime-200 p-1 rounded-md">comentarios</button>
            </div>
        )
    }


    const createComentario = (comentario: ComentarioDTO) => {
        return(
            <Comentario comentario={comentario} loged={loged}/>
        )
    }

    const Comentarios = () => {
        return(
        <div>
            {comentarios.reverse().map(createComentario)}
        </div>
        )
    }

    return (
        <div className="w-full h-fit flex flex-col gap-3 bg-lime-500 p-3 rounded-lg">
            <div className="h-16 flex">
                <div className="w-1/2"><img className="h-full aspect-square rounded-full" src={dados.foto} alt="" /></div>
                <div className="w-1/2 flex gap-6 justify-end">
                    <p>autor: {dados.nomeAutor}</p>
                    <p>sobre: {dados.nomeAlvo}</p>
                    <p>data: {dados.data}</p>

                </div>
            </div>
            <div className="h-fit bg-white p-2 rounded-lg">
                <p>{dados.conteudo}</p>
            </div>
            <div className="flex justify-start gap-3">
                <BotaoExcluir />
                <BotaoComentarios />
            </div>
            <div>
                <NovoComentario/>
            </div>
            <div>
                <Comentarios/>
            </div>
        </div>
    );
};

export default Avaliacao