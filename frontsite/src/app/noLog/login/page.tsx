import React, { ChangeEventHandler, MouseEventHandler } from "react";
import FormLogin from "@/app/components/formLogin";

const loginPage = () => {
  return (
    <>
      <main>
        <div className="flex">
          <div className="w-1/2 h-screen border-r-4 border-lime-400 bg-lime-300">
            <img
              src="/images/login_animate.svg"
              alt="Imagem da tela de Login"
              className="size-full"
            />
          </div>
          <div className="w-1/2 h-screen flex flex-col items-center bg-customWhite">
            <div className="w-2/3 h-full flex flex-col items-center">
              <h2 className="p-3 mt-4 text-2xl font-serif font-extrabold border-8 border-double border-black shadow-md shadow-black">
                Avalie professores em tempo real!
              </h2>
              <img src="/images/login_image1.svg" alt="" />
            </div>
            <div className="w-1/2 h-screen flex flex-col items-center">
              <FormLogin></FormLogin>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default loginPage;
