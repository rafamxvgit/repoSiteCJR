import React from "react";

interface vazia {}

const HeaderDeslogado: React.FC<vazia> = () => {
  return (
    <>
      <header className="bg-lime-300 flex items-center h-20 p-2 w-screen">
        <div className="w-1/3">
          <a href="/noLog/feed">
            <img
              className="ml-5 h-8 w-16"
              src="/images/LogoUnB.svg"
              alt="logo UNb"
            />
          </a>
        </div>
        <div className="w-1/3 justify-center">
          <h1 className="text-center text-2xl font-serif border-8 border-double border-lime-400 shadow-md shadow-lime-400 p-2">
            Sistema de avaliação de professores
          </h1>
        </div>
        <div className="flex w-1/3 justify-end font-serif">
          <a href="/noLog/login">
            <button
              className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md mr-10"
              type="submit"
            >
              Login
            </button>
          </a>
        </div>
      </header>
    </>
  );
};

export default HeaderDeslogado;
