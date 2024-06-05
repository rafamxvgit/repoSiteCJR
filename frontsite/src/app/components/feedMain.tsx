"use client"
import TeacherIcon from "./teacherIcon"
import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import { TeacherDTO } from "./interfacesGlobais"

interface feedProps {todosProfessores: TeacherDTO[]}

const FeedMain: React.FC<feedProps> = ({todosProfessores}) => {

    const [visibleTeachers, setVisTeachers] = useState<TeacherDTO[]>(todosProfessores);

    const PesquisarProfessor = (entrada: {valor: string}) => {

        const newValue = entrada.valor.toLocaleLowerCase();
        const lenVal = newValue.length;

        const isMatch = (professor: TeacherDTO) => {
            const sliceNomeProfessor = professor.nome.toLowerCase().slice(0, lenVal)
            return(newValue == sliceNomeProfessor)
        }
        
        if (newValue == '') {
            setVisTeachers(todosProfessores);
        }
        else {
            setVisTeachers(todosProfessores.filter(isMatch))
        }
    }

    const CreateTeacherCard = (obj: TeacherDTO, estilo: string) => {
        return(<TeacherIcon estilo={estilo} teacherID={obj.id} nome={obj.nome} foto={obj.foto}/>);
    }

    //**componentes
    function BarraPesquisa() {
        const initVals = {valor: ''}
        return(
            /*barra de pesquisa com o título "Novos professores"*/
            <div className="w-full h-32 flex">
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <div className="h-2/5 w-full">
                        <h2 className="h-full w-full text-3xl content-end">Novos Professores:</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full flex">
                    <Formik initialValues={initVals} onSubmit={PesquisarProfessor}>
                        <Form className="h-2/5 w-full self-center flex justify-end gap-3">
                            <Field id='valor' type='text' placeholder='nome do professor' name='valor' className="w-2/3 h-full bg-lime-300 rounded-lg p-3"></Field>
                            <button type='submit' className="w-1/5 bg-lime-200 rounded-lg">pesquisar</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
    
    function BotaoOrdenar() {
    return (
        /*botão ordenar e título "todos os Professores"*/
        <div className="w-full h-32 flex">
            <div className="w-1/2 h-full flex flex-col justify-center">
                <div className="h-2/5 w-full">
                    <h2 className="h-full w-full text-3xl content-end">Todos os Professores:</h2>
                </div>
            </div>
            <div className="w-1/2 h-full flex">
                <div className="h-2/5 w-full self-center flex justify-end gap-6">
                    <button className="w-1/3 bg-lime-400 rounded-lg text-2xl">Ordenar</button>
                </div>
            </div>
        </div>       
    )
}

    return(
        <main className="w-screen h-full flex justify-center">
            <div className="w-5/6">
                
                <BarraPesquisa/>

                {/*seção de novos professores*/}
                <section className="w-full h-fit grid grid-cols-5 gap-6 overflow-scroll my-3 p-3 bg-lime-100 rounded-lg">
                    {visibleTeachers.slice(0, 5).map(professor => {return CreateTeacherCard(professor, "w-full aspect-square bg-lime-400 rounded-lg p-3")})}
                </section>

                <div className="h-0.5 w-full bg-black"></div>
                
                <BotaoOrdenar/>

                {/*seção todos os professores*/}
                <section className="w-full h-dvh">
                    <div className="grid grid-cols-5 h-fit gap-6 p-3 bg-lime-100 rounded-lg">
                        {visibleTeachers.map(professor => {return CreateTeacherCard(professor, "w-full aspect-square bg-lime-400 rounded-lg p-3")})}
                    </div>
                </section>

            </div>
        </main>
    )
}

export default FeedMain;