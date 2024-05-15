import React from "react";
import SearchBoxFeed from "../components/searchBoxFeed";
import TeacherIcon from "../components/teacherIcon";

const FeedLog = () => {

    return(
    <>
        <main className="w-screen flex justify-center">
            <div className="w-5/6">
                
                <div className="w-full h-1/6 flex">
                    <div className="w-1/2 h-full ">
                        <h2 className="h-full w-full text-3xl text-center content-around">Novos Professores:</h2>
                    </div>

                    <div className="w-1/2 h-full flex">
                        <div className="h-1/2 w-full self-center flex justify-end">
                            <SearchBoxFeed aparencia="w-2/3 h-full bg-lime-300 rounded-lg p-3"></SearchBoxFeed>
                        </div>
                    </div>
                </div>

                <div className="w-full h-dvh">
                    <section className="w-full h-1/2 flex gap-6 p-6 overflow-scroll">
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
                    <section className="w-full h-dvh">
                        <div className="w-full h-1/6 flex">
                            <div className="h-full w-1/2">
                                <h2 className="text-3xl w-full h-full text-center content-around">Todos os professores:</h2>
                            </div>
                            <div className="h-full w-1/2 flex justify-end">
                                <button className="h-2/3 w-1/2 bg-lime-400 self-center text-2xl rounded-lg">Orndenar:</button>
                            </div>
                        </div>
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

            </div>
        </main>
    </>
    )
}

export default FeedLog;