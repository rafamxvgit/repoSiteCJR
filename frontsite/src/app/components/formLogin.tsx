"use client";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

interface boxProps {}

interface Usuario {
  email: string;
  senha: string;
}

const FormLogin: React.FC<boxProps> = () => {
  const router = useRouter();
  const initialValues = { email: "", senha: "" };

  const validation = yup.object({
    email: yup.string().email("invalid email adress").required("Required"),
    senha: yup.string().required("Required"),
  });

  const submit = async (values: Usuario) => {
    const userData = await axios.post(
      "http://localhost:3005/user/login",
      values
    );
    if (userData.data.id != undefined) {
      router.push(`/log/${userData.data.id}/feed`);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validation}
      >
        <Form className="size-full flex flex-col justify-evenly font-serif">
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            className="w-full h-10 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <Field
            id="senha"
            type="password"
            name="senha"
            placeholder="Senha:"
            className="w-full h-10 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <div className="w-full h-12 flex justify-center">
            <button
              className="font-serif h-full w-1/3 mr-3 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:translate-y-1 hover:bg-lime-400"
              type="submit"
            >
              Entrar
            </button>
            <a
              href="./register"
              className="font-serif h-full w-1/3 ml-3 bg-lime-300 rounded-md text-center content-center border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:translate-y-1 hover:bg-lime-400"
              type="button"
            >
              Registrar
            </a>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormLogin;
