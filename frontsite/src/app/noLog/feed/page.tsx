import axios from "axios";
import HeaderDeslogado from "@/app/components/headerDeslogado";
import FeedMain from "@/app/components/feedMain";

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

const FeedNoLog = async () => {
    await getProf();
    return(
    <>
        <HeaderDeslogado/>
        <FeedMain todosProfessores={todosProfessores}/>
    </>
    )
}

export default FeedNoLog;