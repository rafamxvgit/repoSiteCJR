import HeaderComp from "@/app/components/headerComplete";
import PerfilMain from "@/app/components/perfilMain";
import { UserDTO, AvaliacaoDTO } from "@/app/components/interfacesGlobais";
import axios from "axios";

let user: UserDTO;
let avals: AvaliacaoDTO[];
const getUser = async (id: string) => {
  const auth = await axios.get(`http://localhost:3005/user/${id}`);
  user = auth.data;
};

const getAvals = async (id: string) => {
  const getAvals = await axios.get(`http://localhost:3005/post/autor${id}`);
  avals = getAvals.data;
};

const PerfilNoLog = async ({params}: {params: {userID: string, otherUserID: string}}) => {

    await getUser(params.otherUserID)
    await getAvals(params.otherUserID)
    return(
        <>
        <HeaderComp logado={-1}/>
        <PerfilMain loged={-1} user={user} avals={avals}/>
        </>
    )
}

export default PerfilNoLog