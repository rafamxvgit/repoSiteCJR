import React from "react";

//! passar o link de perfil como um parâmentro do componente
interface vazia {}

const HeaderLogado: React.FC<vazia> = () => {
  return (
    <>
      <nav className="bg-lime-300 flex items-center h-20 p-2 w-screen">
        <div className="w-1/3">
          <img
            className="ml-5 h-8 w-16"
            src="/images/LogoUnB.svg"
            alt="logo UnB"
          />
        </div>
        <div className="w-1/3 justify-center">
          <h1 className="text-center text-2xl font-serif border-8 border-double border-lime-400 shadow-md shadow-lime-400 p-2">
            Sistema de avaliação de professores
          </h1>
        </div>
        <div className="flex w-1/3 justify-center font-serif">
          <a href="./perfil">
            <button
              className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md mr-2 ml-48"
              type="submit"
            >
              Perfil
            </button>
          </a>
          {/*Trocar o link após a pagina de perfil ser criada*/}
          <a href="/noLog/register">
            <button
              className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md ml-2"
              type="submit"
            >
              Sair
            </button>
          </a>
          {/*Trocar O link da página main com o header deslogado*/}
        </div>
      </nav>
    </>
  );
};

export default HeaderLogado;
