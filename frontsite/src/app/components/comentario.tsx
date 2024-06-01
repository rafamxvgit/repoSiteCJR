import React from "react";
import { ComentarioDTO } from "./interfacesGlobais";

interface CometnarioProps {comentario: ComentarioDTO, loged: boolean}
const Comentario: React.FC<CometnarioProps> = ({comentario, loged}) => {
  return(
    <div >
        <p>{comentario.idAutor.toString()} comentou:</p>
        <p className="bg-blue-200 w-full rounded-lg p-2">{comentario.conteudo}</p>
    </div>
  )
}
export default Comentario;