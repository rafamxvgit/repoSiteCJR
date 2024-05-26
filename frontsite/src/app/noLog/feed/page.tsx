import axios from "axios";
import SearchBoxFeed from "@/app/components/searchBoxFeed";
import TeacherIcon from "@/app/components/teacherIcon";
import HeaderDeslogado from "@/app/components/headerDeslogado";

//essa interfaçe define as propriedade de um objeto professor
interface TeacherObject {
    id: number,
    nome: string,
    email: string
    senha: string
    curso: string
    departamento: string
    foto: string
}

let todosProfessores : TeacherObject[];

const getProf = async () => {
    const professores = await axios.get('http://localhost:3005/professor');
    todosProfessores = professores.data
    //professores.then(response => {todosProfessores = response.data})
}

//essa função cria um card de professor
    const CreateTeacherCard = (obj: TeacherObject, estilo: string) => {
        return(<TeacherIcon estilo={estilo} teacherID={obj.id} nome={obj.nome} foto={obj.foto}/>);
    }


const FeedNoLog = async () => {
    await getProf();
    return(
    <>
        <HeaderDeslogado/>
        <main className="w-screen h-full flex justify-center">
            <div className="w-5/6">
                
                {/*barra de pesquisa com o título "Novos professores"*/}
                <div className="w-full h-32 flex">
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
                <section className="w-full h-fit grid grid-cols-5 gap-6 overflow-scroll my-3 p-3 bg-lime-100 rounded-lg">
                    {todosProfessores.slice(0, 5).map(professor => {return CreateTeacherCard(professor, "w-full aspect-square bg-lime-400 rounded-lg p-3")})}
                </section>

                <div className="h-0.5 w-full bg-black"></div>
                
                {/*botão ordenar e título "Novos professores"*/}
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

                {/*seção todos os professores*/}
                <section className="w-full h-dvh">
                    <div className="grid grid-cols-5 h-fit gap-6 p-3 bg-lime-100 rounded-lg">
                        {todosProfessores.map(professor => {return CreateTeacherCard(professor, "w-full aspect-square bg-lime-400 rounded-lg p-3")})}
                    </div>
                </section>
            </div>
        </main>
    </>
    )
}

export default FeedNoLog;