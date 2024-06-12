import React from "react";
import axios from "axios";
import HeaderComp from "@/app/components/headerComplete";
import CampoAvaliacao from "@/app/components/avalProf";
import { AvaliacaoDTO, TeacherDTO } from "@/app/components/interfacesGlobais";
import Avaliacao from "@/app/components/avaliacao";

let teacher: TeacherDTO;
let avals: AvaliacaoDTO[];

const getTeacher = async (id: string) => {
  const professor = await axios.get(`http://localhost:3005/professor/${id}`);
  teacher = professor.data;
};

const getComentarios = async (id: string) => {
  const comentarios = await axios.get(`http://localhost:3005/post/alvo${id}`);
  avals = comentarios.data;
  avals.reverse();
};

const LogTeacherPage = async ({
  params,
}: {
  params: { userID: string; teacherID: string };
}) => {
  const CriarComentario = (obj: AvaliacaoDTO) => {
    return <Avaliacao dados={obj} loged={+params.userID} />;
  };

  await getComentarios(params.teacherID);
  await getTeacher(params.teacherID);
  return (
    <>
      <HeaderComp logado={+params.userID} />
      <main className="w-screen h-svh flex justify-center bg-customWhite font-serif">
        {/* parte da foto e do banner*/}
        <div className="w-4/6">
          <section className="h-96 bg-customGray border-x-4 border-b-4 border-lime-400">
            <div className="h-1/6 bg-lime-300"></div>
            <div className="h-1/6 flex bg-lime-300">
              <div className="w-1/12"></div>
              <img
                src={teacher.foto}
                alt="imagem perfil"
                className="h-48 rounded-full border-solid border-lime-400 shadow-md shadow-lime-400 aspect-square border-2"
              />
            </div>

            <div className="h-1/2 flex content-around">
              <div className="w-96"></div>
              <div className="w-96 flex flex-col justify-evenly content-around">
                <div className="bg-lime-200 rounded-lg p-2">
                  <p className="text-xl mb-4">Informações</p>
                  <p>- Nome: {teacher.nome}</p>
                  <p>- Curso: {teacher.curso}</p>
                  <p>- Email: {teacher.email}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-1 bg-black mt-3" />

          {/*fazer um comentário*/}
          <CampoAvaliacao idAutor={params.userID} idAlvo={params.teacherID} />
          <div className="h-1 bg-black mb-2" />

          {/*comentários sobre o professor*/}
          <section className="flex flex-col gap-6 my-2 bg-customWhite">
            {avals.map(CriarComentario)}
          </section>
        </div>
      </main>
    </>
  );
};

export default LogTeacherPage;
