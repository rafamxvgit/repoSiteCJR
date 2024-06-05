"use client";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as yup from "yup";

const initSenha = { senha: "" };
const initFoto = { imagem: "" };
const initNome = { nome: "" };
const initBio = { bio: "" };

const validationSenha = yup.object({
  senha: yup.string().required("Required"),
});
const validationFoto = yup.object({
  imagem: yup.string().required("Required"),
});
const validationBio = yup.object({
  bio: yup.string().required("Required"),
});

const validationNome = yup.object({ nome: yup.string().required("Required") });

interface Valores {
  userID: number;
}

const FormEdit: React.FC<Valores> = ({ userID }) => {
  const submitSenha = async (values: { senha: string }) => {
    await axios.patch(`http://localhost:3005/user/senha${userID}`, values);
    window.location.reload();
  };

  const submitFoto = async (values: { imagem: string }) => {
    await axios.patch(`http://localhost:3005/user/imagem${userID}`, values);
    window.location.reload();
  };

  const submitNome = async (values: { nome: string }) => {
    await axios.patch(`http://localhost:3005/user/nome${userID}`, values);
    window.location.reload();
  };

  const submitBio = async (values: { bio: string }) => {
    await axios.patch(`http://localhost:3005/user/bio${userID}`, values)
    window.location.reload();
  }

  return (
    <>
      <div className="w-full h-1/2 flex items-center justify-center">
        <img className="mt-6 size-96" src="/images/perfil_image.svg" alt="" />
      </div>
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center text-center font-serif">
        <div className="flex flex-col w-full">
          <Formik
            initialValues={initSenha}
            validationSchema={validationSenha}
            onSubmit={submitSenha}
          >
            <Form className="w-full flex justify-center">
              <div className="w-5/6">
                <Field
                  id="senha"
                  type="password"
                  name="senha"
                  placeholder="Mudar Senha"
                  className="w-full h-12 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
                />
              </div>
              <div className="w-2/6">
                <button
                  className="h-12 w-full ml-3 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:bg-lime-400"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="flex flex-col w-full my-6">
          <Formik
            initialValues={initFoto}
            validationSchema={validationFoto}
            onSubmit={submitFoto}
          >
            <Form className="w-full flex justify-center">
              <div className="w-5/6">
                <Field
                  id="imagem"
                  type="text"
                  name="imagem"
                  placeholder="Mudar Foto"
                  className="w-full h-12 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
                />
              </div>
              <div className="w-2/6">
                <button
                  className="h-12 w-full ml-3 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:bg-lime-400"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        
        <div className="flex flex-col w-full my-6">
          <Formik
            initialValues={initBio}
            validationSchema={validationBio}
            onSubmit={submitBio}
          >
            <Form className="w-full flex justify-center">
              <div className="w-5/6">
                <Field
                  id="bio"
                  type="text"
                  name="bio"
                  placeholder="Mudar Bio"
                  className="w-full h-12 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
                />
              </div>
              <div className="w-2/6">
                <button
                  className="h-12 w-full ml-3 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:bg-lime-400"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="flex flex-col w-full">
          <Formik
            initialValues={initNome}
            validationSchema={validationNome}
            onSubmit={submitNome}
          >
            <Form className="w-full flex justify-center">
              <div className="w-5/6">
                <Field
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Mudar Nome"
                  className="w-full h-12 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
                />
              </div>
              <div className="w-2/6">
                <button
                  className="h-12 w-full ml-3 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:bg-lime-400"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormEdit;
