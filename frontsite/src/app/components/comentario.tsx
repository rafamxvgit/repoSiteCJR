import React from "react";
import { ComentarioDTO } from "./interfacesGlobais";

interface CometnarioProps { comentario: ComentarioDTO, loged: boolean }
const Comentario: React.FC<CometnarioProps> = ({ comentario, loged }) => {
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
    </div>
  )
}
export default Comentario;