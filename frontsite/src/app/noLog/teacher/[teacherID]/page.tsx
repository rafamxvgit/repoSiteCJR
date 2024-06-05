import React from "react";
import axios from "axios";
import HeaderComp from "@/app/components/headerComplete";  
import { AvaliacaoDTO, TeacherDTO } from "@/app/components/interfacesGlobais";
import Avaliacao from "@/app/components/avaliacao";

let teacher: TeacherDTO
let avals: AvaliacaoDTO[];

const getTeacher = async (id: string) => {
    const professor = await axios.get(`http://localhost:3005/professor/${id}`);
    teacher = professor.data;
}

const getComentarios = async (id: string) => {
    const comentarios = await axios.get(`http://localhost:3005/post/alvo${id}`);
    avals = comentarios.data;
    avals.reverse()
}

const CriarComentario = (obj: AvaliacaoDTO) => {
    return <Avaliacao dados={obj} loged={-1}/>
}
  
const NoLogTeacherPage = async ({ params }: {params: {userID: string, teacherID: string}}) => {
    
    await getComentarios(params.teacherID)
    await getTeacher(params.teacherID)
    return(
    <>
        <HeaderComp logado={-1}/>
        <main className="w-screen h-svh flex justify-center">
            <div className="w-5/6">
                
                {/* parte da foto e do banner*/}
                <section className="h-80">
                    <div className="h-1/4 bg-lime-500"/>

                    <div className="h-1/4 flex bg-lime-500">
                        <div className="w-32"></div>
                        <img src={teacher.foto} alt="imagem perfil" className="h-48 rounded-full border-lime-950 border-2 aspect-square"/>
                    </div>
                    
                    <div className="h-1/2 flex content-around">
                        <div className="w-96"></div>
                        <div className="w-96 flex flex-col justify-evenly content-around">
                            <div className="bg-lime-200 rounded-lg p-2">
                                <p className="text-xl">professor:</p>
                                <p>nome: {teacher.nome}</p>
                                <p>curso: {teacher.curso}</p>
                                <p>email: {teacher.email}</p>
                            </div>
                        </div>
                    </div>
                    
                </section>
                
                <div className="h-1 bg-black"/>

                {/*comentários sobre o professor*/}
                <section className="flex flex-col gap-6 my-2">
                    {avals.map(CriarComentario)}
                </section>


            </div>
        </main>
    </>
    )
}

export default NoLogTeacherPage;