import React from "react";
import HeaderDeslogado from "../components/headerDeslogado";
import Comentario from "../components/comentario";

const Perfil = () => {
  return (
    <>
      <HeaderDeslogado />
      <div className="w-dvw h-dvh flex justify-center">
        <div className="h-full w-5/6 flex flex-col gap-4">
          <div className="h-1/2 w-full"></div>
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
