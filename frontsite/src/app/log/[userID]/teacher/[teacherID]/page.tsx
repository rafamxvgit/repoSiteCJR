import React from "react";
import axios from "axios";
import HeaderLogado from "@/app/components/headerLogado";
import Comentario from "@/app/components/comentario";
import CampoAvaliacao from "@/app/components/avalProf";

const teacher = {nome: 'fernando', email: 'batata@gmail.com', curso: 'matemática', imagem: '/images/sad.png'}
const comments = [{autor: 'rafael', professor: 'fernando', imagem: '/images/sad.png', conteudo: 'legal a aula', data: '20/04/2023'},{autor: 'rafael', professor: 'fernando', imagem: '/images/sad.png', conteudo: 'legal a aula', data: '20/04/2023'},{autor: 'rafael', professor: 'fernando', imagem: '/images/sad.png', conteudo: 'legal a aula', data: '20/04/2023'}]

interface Comentario {
    autor: string,
    professor: string
    data: string
    conteudo: string
    imagem: string
  }
  
const CriarComentario = (obj: Comentario) => {
    return <Comentario autor={obj.autor} professor={obj.professor} data={obj.data} conteudo={obj.conteudo} imagem={obj.imagem}/>
}
  

const LogTeacherPage = ({ params }: {params: {teacherID: string}}) => {
    //const teacher = axios.get('http://localhost:xxxx/teacher/<id do professor>')
    //!descobrir como eu vou pegar os comentários dos professores
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
                        <img src="/images/sad.png" alt="imagem perfil" className="h-48 rounded-full border-lime-950 border-2"/>
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

                {/*fazer um comentário*/}
                <CampoAvaliacao/>
                {params.teacherID}
            </div>
        </main>
    </>
    )
}

export default LogTeacherPage;