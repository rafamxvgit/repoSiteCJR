import React from "react";

interface vazia {
  autor: string;
  data: string;
  professor: string;
  imagem: string;
  conteudo: string;
}

const Comentario: React.FC<vazia> = ({imagem,autor,data,professor,conteudo,}) => {
  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-lime-500 p-3 rounded-lg">
      <div className="h-16 flex">
        <div className="w-1/2"><img className="h-full aspect-square rounded-full" src={imagem} alt="" /></div>
        <div className="w-1/2 flex gap-6 justify-end">
          <p>autor: {autor}</p>
          <p>sobre: {professor}</p>
          <p>data: {data}</p>
          
        </div>
      </div>
      <div className="h-fit bg-white p-2 rounded-lg">
        <p>{conteudo}</p>
      </div>
    </div>
  );
};

export default Comentario;
