import React from "react";
import { ComentarioDTO } from "./interfacesGlobais";
import axios from "axios";

interface CometnarioProps { comentario: ComentarioDTO, loged: number }
const Comentario: React.FC<CometnarioProps> = ({ comentario, loged }) => {

  let BotaoExcluir: () => JSX.Element;

  const removerComentario = async () => {
    await axios.delete(`http://localhost:3005/comentario/${comentario.id+''}`)
    window.location.reload()
  }

  if (comentario.idAutor == loged) {
    BotaoExcluir = () => {
      return(
        <div>
          <button className="bg-lime-200 p-1 rounded-lg" onClick={removerComentario}>excluir</button>
        </div>
      )
    }
  }
  else {
    BotaoExcluir = () => {
      return(<></>)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="h-1 bg-black my-3"></div>
      <div className="flex gap-2">
        <img className="h-10 aspect-square rounded-full" src={comentario.foto} alt="" />
        <p className="self-center">{comentario.nomeAutor.toString()} comentou:</p>
      </div>
      <div className="flex">
        <p className="bg-blue-200 w-full rounded-lg p-2">{comentario.conteudo}</p>
      </div>
      <div>
        <BotaoExcluir/>
      </div>
    </div>
  )
}
export default Comentario;