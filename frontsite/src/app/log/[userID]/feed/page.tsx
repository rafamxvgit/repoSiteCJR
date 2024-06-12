import HeaderComp from "@/app/components/headerComplete";
import FeedMain from "@/app/components/feedMain";
import axios from "axios";

interface TeacherDto {
    id: number,
    nome: string,
    email: string
    senha: string
    curso: string
    departamento: string
    foto: string
}

let todosProfessores: TeacherDto[] = [];

const getTeachers = async () => {
    const professores = await axios.get('http://localhost:3005/professor');
    todosProfessores = professores.data;
}

const FeedLog = async ({ params }: {params: { userID: number}}) => {
    
    await getTeachers()
    return(
    <>
        <HeaderComp logado={+params.userID}/>
        <FeedMain todosProfessores={todosProfessores}/>
    </>
    )
}

export default FeedLog;