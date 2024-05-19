import React from "react";
import HeaderDeslogado from "../components/headerDeslogado";
import Comentario from "../components/comentario";
import UserInfo from "../components/userInfo";

const Perfil = () => {
  return (
    <>
      <HeaderDeslogado />
      <div className="w-dvw h-dvh flex justify-center">
        <div className="h-full w-5/6 flex flex-col gap-4">
          <div className="h-1/2 w-full relative">
            <div className="h-1/2 w-full bg-lime-600">
                <div className="h-1/2 w-full"></div>
                <div className="h-full w-1/3 flex justify-center">
                  <img src="/images/sad.png" alt="imagem perfil" className="h-full rounded-full border-lime-950 border-2"/>
                </div>
            </div>
            <div className="h-1/2 w-full">
              <div className="h-1/2 w-full"></div>
              <div className="w-1/4 flex justify-center p-3">
                <UserInfo nome="Nome" email="email" instituicao="instituicao" estilo=""/>
              </div>
            </div>
            
          </div>
          <div className="bg-black h-0.5 w-full"></div>
          <div className="h-1/2 w-full flex flex-col gap-4">
            <Comentario
              nome="Rafael"
              data="12:48, 08/05/24"
              professor="Aurelio"
              imagem="/images/sad.png"
              conteudo="Ola adorei a aula"
            ></Comentario>
            <Comentario
              nome="Rafael"
              data="12:48, 08/05/24"
              professor="Aurelio"
              imagem="/images/sad.png"
              conteudo="Ola adorei a aula"
            ></Comentario>
            <Comentario
              nome="Rafael"
              data="12:48, 08/05/24"
              professor="Aurelio"
              imagem="/images/sad.png"
              conteudo="Ola adorei a aula"
            ></Comentario>
            <Comentario
              nome="Rafael"
              data="12:48, 08/05/24"
              professor="Aurelio"
              imagem="/images/sad.png"
              conteudo="Ola adorei a aula"
            ></Comentario>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
