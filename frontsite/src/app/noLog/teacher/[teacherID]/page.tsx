import React from "react";
import axios from "axios";
import HeaderDeslogado from "@/app/components/headerDeslogado";
import Comentario from "@/app/components/comentario";

interface Teacher {
    id: number
    nome: string,
    email: string,
    senha: string,
    curso: string,
    foto: string,
    departamento: string
}
interface Comentario {
    id: number
    idAutor: number,
    idAlvo: number,
    data: string
    conteudo: string
}

let teacher: Teacher;
let comments: Comentario[]; 

const getTeacher = async (id: string) => {
    const professor = await axios.get(`http://localhost:3005/professor/${id}`)
    teacher = professor.data;
}

const getComentarios = async (id: string) => {
    const comentarios = await axios.get(`http://localhost:3005/post/alvo${id}`);
    comments = comentarios.data;
}

const CriarComentario = (obj: Comentario) => {
    return <Comentario autor={obj.idAutor+""} professor={obj.idAlvo+""} data={obj.data} conteudo={obj.conteudo} imagem="/images/LogoUnB.svg"/>
}
  

const NoLogTeacherPage = async ({ params }: {params: {teacherID: string}}) => {
    
    await getComentarios(params.teacherID)
    await getTeacher(params.teacherID)
    return(
    <>
        <HeaderDeslogado/>
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
                    {comments.map(CriarComentario)}
                </section>

                <div className="h-1 bg-black mb-2"/>

            </div>
        </main>
    </>
    )
}

export default NoLogTeacherPage;