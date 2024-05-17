import React from "react";

interface vazia {
  nome: string;
  data: string;
  professor: string;
  imagem: string;
  conteudo: string;
}

const Comentario: React.FC<vazia> = ({
  imagem,
  nome,
  data,
  professor,
  conteudo,
}) => {
  return (
    <>
      <div className="w-full h-1/2 bg-lime-400 p-3 rounded-xl">
        <div className="w-full h-1/3 flex justify-evenly">
          <div className="w-1/2 flex justify-start p-2">
            <img
              src={imagem}
              alt="foto_de_perfil"
              className="rounded-full"
            ></img>
          </div>
          <div className="w-1/2 flex justify-evenly">
            <h4 className="content-around">{nome}</h4>
            <h4 className="content-around">{data}</h4>
            <h4 className="content-around">{professor}</h4>
          </div>
        </div>
        <div className="h-2/3 w-full p-3 bg-lime-500 rounded-xl overflow-hidden">
          <h3 className="">{conteudo}</h3>
        </div>
      </div>
    </>
  );
};

export default Comentario;
