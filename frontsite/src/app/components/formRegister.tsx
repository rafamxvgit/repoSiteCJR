"use client";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Vazia {}

const FormRegister: React.FC<Vazia> = () => {
  const router = useRouter();
  const initialValues = { email: "", senha: "" };

  const validation = yup.object({
    email: yup.string().email("invalid email adress").required("Required"),
    senha: yup.string().required("Required"),
    nome: yup.string().required("Required"),
    curso: yup.string().required("Required"),
    departamento: yup.string().required("Required"),
  });

  const submit = async (values: any) => {
    const user = await axios.post("http://localhost:3005/user", values);
    if (user.status == 201) {
      return router.push(`/log/${user.data.id}/feed`);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validation}
      >
        <Form className="size-full flex flex-col justify-evenly">
          <Field
            id="nome"
            type="text"
            name="nome"
            placeholder="Nome:"
            className="w-full h-10 mt-1 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            className="w-full h-10 mt-1 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <Field
            id="senha"
            type="password"
            name="senha"
            placeholder="Senha:"
            className="w-full h-10 mt-1 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <Field
            id="curso"
            name="curso"
            placeholder="Curso:"
            className="w-full h-10 mt-1 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <Field
            id="departamento "
            type="departamento"
            name="departamento"
            placeholder="Departamento:"
            className="mb-3 w-full h-10 mt-1 bg-lime-300 rounded-md p-6 outline-none border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
          ></Field>
          <div className="w-full h-12 flex justify-center">
            <button
              className="h-full w-1/3 bg-lime-300 rounded-md border border-black focus:border-2 focus:border-black focus:shadow focus:shadow-black"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormRegister;
