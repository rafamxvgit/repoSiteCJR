import React from "react";
import axios from "axios";
import HeaderLogado from "@/app/components/headerLogado";
import Comentario from "@/app/components/comentario";
import CampoAvaliacao from "@/app/components/avalProf";


let teacher: Teacher = {id:0, nome: '', email: '', senha: '', curso: '', departamento: '', foto: '', }
let comments: Comentario[];

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
    nomeAutor: string,
    nomeAlvo: string,
    data: string
    conteudo: string
}

const getTeacher = async (id: string) => {
    const professor = await axios.get(`http://localhost:3005/professor/${id}`);
    teacher = professor.data;
}

const getComentarios = async (id: string) => {
    const comentarios = await axios.get(`http://localhost:3005/post/alvo${id}`);
    comments = comentarios.data;
    comments.reverse()
}

const CriarComentario = (obj: Comentario) => {
    return <Comentario autor={obj.nomeAutor} professor={obj.nomeAlvo} data={obj.data} conteudo={obj.conteudo} imagem="/images/LogoUnB.svg"/>
}
  

const LogTeacherPage = async ({ params }: {params: {userID: string, teacherID: string}}) => {
    
    await getComentarios(params.teacherID)
    await getTeacher(params.teacherID)
    return(
    <>
        <HeaderLogado/>
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

                {/*fazer um comentário*/}
                <CampoAvaliacao idAutor={params.userID} idAlvo={params.teacherID}/>
                <div className="h-1 bg-black mb-2"/>

                {/*comentários sobre o professor*/}
                <section className="flex flex-col gap-6 my-2">
                    {comments.map(CriarComentario)}
                </section>


            </div>
        </main>
    </>
    )
}

export default LogTeacherPage;