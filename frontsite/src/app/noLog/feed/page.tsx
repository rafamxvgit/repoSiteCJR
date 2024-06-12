import axios from "axios";
import HeaderComp from "@/app/components/headerComplete";
import FeedMain from "@/app/components/feedMain";
import { TeacherDTO } from "@/app/components/interfacesGlobais";

let todosProfessores : TeacherDTO[];

const getProf = async () => {
    const professores = await axios.get('http://localhost:3005/professor');
    todosProfessores = professores.data
}

const FeedNoLog = async () => {
    await getProf();
    return(
    <>
        <HeaderComp logado={-1}/>
        <FeedMain todosProfessores={todosProfessores}/>
    </>
    )
}

export default FeedNoLog;