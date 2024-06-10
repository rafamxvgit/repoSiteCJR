"use client"
import React from "react";
import { ComentarioDTO } from "./interfacesGlobais";
import axios from "axios";

interface CometnarioProps { comentario: ComentarioDTO, loged: number }
const Comentario: React.FC<CometnarioProps> = ({ comentario, loged }) => {

  let BotaoExcluir: () => JSX.Element;
  let Descricao: () => JSX.Element;
  let theLink: string;
  let theOtherLink: string;

  const removerComentario = async () => {
    await axios.delete(`http://localhost:3005/comentario/${comentario.id + ''}`)
    window.location.reload();
  }

  if (loged != -1) {
    theLink = `/log/${loged}/perfil/${comentario.idAutor}`
    theOtherLink = `/log/${loged}/perfil/${comentario.idUserAlvo + ''}`
  }
  else {
    theLink = `/noLog/perfil/${comentario.idAutor}`
    theOtherLink = `/noLog/perfil/${comentario.idUserAlvo}`
  }

  if (comentario.idAutor == loged) {
    BotaoExcluir = () => {
      return (
        <div>
          <button className="bg-lime-200 p-1 rounded-lg" onClick={removerComentario}>excluir</button>
        </div>
      )
    }
  }
  else {
    BotaoExcluir = () => {
      return (<></>)
    }
  }

  if (comentario.nomeAlvo != undefined) {
    Descricao = () => {
      return (<>
        <div className=" w-full flex flex-col gap-2">
          <div className="flex gap-2">
            <a className="flex gap-2" href={theOtherLink}>
              <img className="h-10 aspect-square rounded-full" src={comentario.fotoAlvo} alt="" />
            </a>
            <p>sobre avaliação de {comentario.nomeAlvo}</p>
          </div>
          <p className="w-full bg-white my-2 p-2 rounded-lg">{comentario.conteudoAlvo}</p>
          <div className="flex w-full">
            <div className="w-12 h-2"></div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-2 w-full">
                <a className="flex gap-2" href={theLink}>
                  <img className="h-10 aspect-square rounded-full" src={comentario.foto} alt="" />
                </a>
                <p>{comentario.nomeAutor.toString()} comentou:</p>
              </div>
              <p className="w-full bg-white my-2 p-2 rounded-lg">{comentario.conteudo}</p>
              <div>
                <BotaoExcluir />
              </div>
            </div>
          </div>

        </div>
      </>)
    }
  }
  else {
    Descricao = () => {
      return (<>
        <div className="w-full">
          <div className="flex gap-3">

            <a className="flex gap-2" href={theLink}>
              <img className="h-10 aspect-square rounded-full" src={comentario.foto} alt="" />
            </a>
            <p className="self-center">{comentario.nomeAutor.toString()} comentou:</p>
          </div>
          <p className="w-full bg-white my-2 p-2 rounded-lg">{comentario.conteudo}</p>
          <div>
            <BotaoExcluir />
          </div>
        </div>
      </>)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="h-1 bg-black my-3"></div>
      <div className="bg-lime-500 p-3 rounded-lg">
        <div className="flex">
          <Descricao />
        </div>

      </div>
    </div>
  )
}
export default Comentario;