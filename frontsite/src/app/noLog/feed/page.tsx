import axios from "axios";
import HeaderDeslogado from "@/app/components/headerDeslogado";
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
        <HeaderDeslogado/>
        <FeedMain todosProfessores={todosProfessores}/>
    </>
    )
}

export default FeedNoLog;