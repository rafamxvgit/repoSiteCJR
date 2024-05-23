import axios from "axios";
import React from "react";
import Comentario from "@/app/components/comentario";
import HeaderLogado from "@/app/components/headerLogado";

interface Comentario {
  autor: string,
  professor: string
  data: string
  conteudo: string
  imagem: string
}

//! variáveis temporárias
const comentarios = [{autor: 'fernando', professor: 'maurício', data: '11/12/2023', conteudo: 'a aula foi boa', imagem: '/images/sad.png'},{autor: 'fernando', professor: 'marcio', data: '11/12/2023', conteudo: 'a aula foi ruim', imagem: '/images/sad.png'}]
const autor = {nome: 'rafael', email:'rafaelmonteiroximenes@gmail.com', departamento: 'exatas', curso: 'ciência da computação'}

const CriarComentario = (obj: Comentario) => {
  return <Comentario autor={obj.autor} professor={obj.professor} data={obj.data} conteudo={obj.conteudo} imagem={obj.imagem}/>
}

const Perfil = ({ params }: {params: { userID: string}}) => {
  
  //const comments = axios.get('http://localhost:xxxx/comentarios/<id do autor>')
  //const autor = axios.get('http://localhost:xxxx/user/<id do usuário>')

  return (
    <>
      <HeaderLogado/>
      <main className="w-dvw h-dvh flex justify-center">
        <div className="w-5/6">
          <section className="h-96">
            
            {/* parte da foto e do banner*/}
            <div className="h-2/3">
              <div className="h-1/4 bg-lime-500"></div>
              <div className="h-1/4 flex bg-lime-500">
                  <div className="w-1/12"></div>
                  <img src="/images/sad.png" alt="imagem perfil" className="h-48 rounded-full border-lime-950 border-2"/>
              </div>
              <div className="h-1/2 flex justify-end">
                <div className="w-1/2 flex flex-col justify-evenly content-around">
                  <div className="h-fit w-full flex justify-evenly">
                    <button className="h-12 w-1/4 bg-lime-500 rounded-lg">editar perfil</button>
                    <button className="h-12 w-1/4 bg-lime-500 rounded-lg">excluir perfil</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/*parte das informações do usuário*/}
            <div className="h-1/3 flex">
              <div className="w-1/12"></div>
              <div className="w-11/12 content-around">
                <p>-{autor.nome}</p>
                <p>-{autor.curso}</p>
                <p>-{autor.email}</p>
              </div>
            </div>

          </section>
          
          {/*divisória e texto 'posts'*/}
          <div className="h-1 bg-black mt-3"></div>
          <div className="flex h-24">
            <div className="w-1/12"></div>
            <div className="content-center"><h3 className="text-3xl">Posts:</h3></div>
          </div>

          {/*os posts*/}
          <section className="h-full flex flex-col gap-12">
            {comentarios.map(CriarComentario)}
          </section>

        </div>
      </main>
    </>
  );
};

export default Perfil;
