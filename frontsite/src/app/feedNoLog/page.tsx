import React from "react";
import SearchBoxFeed from "../components/searchBoxFeed";
import TeacherIcon from "../components/teacherIcon";
import HeaderDeslogado from "../components/headerDeslogado";


const FeedNoLog = () => {

    return(
    <>
        <HeaderDeslogado></HeaderDeslogado> 
        <main className="w-screen h-full flex justify-center">
            <div className="w-5/6">
                
                {/*barra de pesquisa com o título "Novos professores"*/}
                <div className="w-full h-1/6 flex">
                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="h-3/5 w-full">
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
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                </section>

                <div className="h-0.5 w-full bg-black"></div>
                
                {/*botão ordenar e título "Novos professores"*/}
                <div className="w-full h-1/6 flex">
                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="h-3/5 w-full">
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
                    <div className="grid grid-cols-5 h-dvh gap-4">
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                        <TeacherIcon nome="Bach" foto="/images/sad.png"/>
                    </div>
                </section>
            </div>
        </main>
    </>
    )
}

export default FeedNoLog;