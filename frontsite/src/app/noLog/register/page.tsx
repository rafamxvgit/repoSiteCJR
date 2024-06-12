import React, { MouseEventHandler } from "react";
import FormRegister from "@/app/components/formRegister";

const handleSubmit = (values: any) => {
  console.log(values);
};

const registerPage = () => {
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
            <div className="w-8/12 h-1/3 flex flex-col items-center">
              <h2 className="p-2 mt-2 text-2xl font-serif font-extrabold border-8 border-double border-black shadow-md shadow-black">
                Cadastre-se e faça parte!
              </h2>
              <img
                className="w-10/12 h-full"
                src="/images/register_image2.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center">
              <FormRegister></FormRegister>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default registerPage;
