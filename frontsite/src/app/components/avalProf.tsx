"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

interface objComment {
  conteudo: string;
}

const initVals = { conteudo: "" };

interface parametros {
  idAutor: string;
  idAlvo: string;
}

const CampoAvaliacao: React.FC<parametros> = ({ idAutor, idAlvo }) => {
  const submit = async (values: objComment) => {
    const comment = {
      idAutor: +idAutor,
      idAlvo: +idAlvo,
      conteudo: values.conteudo,
      data: Date().toString(),
    };
    console.log(comment);
    await axios.post("http://localhost:3005/post", comment);
    window.location.reload();
  };

  return (
    <>
      <div className="h-fit w-full flex flex-col gap-3 bg-customWhite rounded-md my-3 p-3 items-center">
        <div className="h-14 w-1/2 flex justify-center rounded-md bg-lime-300 font-serif border-8 border-double border-lime-400 shadow-md shadow-lime-400">
          <h3 className="h-full content-center text-2xl">
            Avalie este Professor
          </h3>
        </div>
      </div>
      <div className="h-fit w-full flex flex-col gap-3 bg-lime-500 rounded-md mb-3 p-4">
        <Formik initialValues={initVals} onSubmit={submit}>
          <Form>
            <Field
              id="conteudo"
              type="text"
              name="conteudo"
              placeholder="Deixe seu comentário"
              className="w-full h-10 rounded-md p-3"
            />
            <button
              type="submit"
              className="h-10 mt-3 bg-lime-200 px-6 py-1 rounded-md border border-black hover:bg-lime-400 hover:shadow hover:shadow-lime-400"
            >
              {" "}
              Enviar{" "}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default CampoAvaliacao;
