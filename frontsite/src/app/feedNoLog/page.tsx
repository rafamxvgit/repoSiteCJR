import React from "react";
import SearchBoxFeed from "../components/searchBoxFeed";
import TeacherIcon from "../components/teacherIcon";
import HeaderDeslogado from "../components/headerDeslogado";
import axios from "axios";


const todosProfessores = [{id:4, nome:"batata", foto:"/images/sad.png"},{id:5, nome:"joão", foto:"/images/sad.png"},{id:6, nome:"mais", foto:"/images/sad.png"}];

//essa interfaçe define as propriedade de um objeto professor
interface TeacherObject {
    id: number,
    nome: string,
    foto: string
}

//essa função cria um card de professor
const CreateTeacherCard = (obj: TeacherObject, estilo: string) => {
    return(<TeacherIcon estilo={estilo} nome={obj.nome} foto={obj.foto}/>);
}

const getTeachers = () => {
    const professores = axios.get('http://localhost:xxxx/teacher');
    console.log(professores);
    //!falta formatar a variável 'professores' para adequa-la à interface TeacherObject
}

const FeedNoLog = () => {
    return(
    <>
        <HeaderDeslogado></HeaderDeslogado> 
        <main className="w-screen h-full flex justify-center">
            <div className="w-5/6">
                
                {/*barra de pesquisa com o título "Novos professores"*/}
                <div className="w-full h-1/6 flex">
                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="h-2/5 w-full">
                            <h2 className="h-full w-full text-3xl content-end">Novos Professores:</h2>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex">
                        <div className="h-2/5 w-full self-center flex justify-end">
                            <SearchBoxFeed aparencia="w-2/3 h-full bg-lime-300 rounded-lg p-3"></SearchBoxFeed>
                        </div>
                    </div>
                </div>

                {/*seção de novos professores*/}
                <section className="w-full h-1/4 flex gap-6 overflow-scroll my-3">
                    {todosProfessores.map(professor => {return CreateTeacherCard(professor, "h-full aspect-square bg-lime-400 rounded-lg p-3")})}
                </section>

                <div className="h-0.5 w-full bg-black"></div>
                
                {/*botão ordenar e título "Novos professores"*/}
                <div className="w-full h-1/6 flex">
                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="h-2/5 w-full">
                            <h2 className="h-full w-full text-3xl content-end">Todos os Professores:</h2>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex">
                        <div className="h-2/5 w-full self-center flex justify-end">
                            <button className="w-1/2 bg-lime-400 rounded-lg text-2xl">Ordenar</button>
                        </div>
                    </div>
                </div>

                {/*seção todos os professores*/}
                <section className="w-full h-dvh">
                    <div className="grid grid-cols-4 h-dvh gap-4">
                        {todosProfessores.map(professor => {return CreateTeacherCard(professor, "w-full aspect-square bg-lime-400 rounded-lg p-3")})}
                    </div>
                </section>
            </div>
        </main>
    </>
    )
}

export default FeedNoLog;