import axios from "axios";
import HeaderLogado from "@/app/components/headerLogado";
import PerfilMain from "@/app/components/perfilMain";
import { AvaliacaoDTO } from "@/app/components/interfacesGlobais";
import { UserDTO } from "@/app/components/interfacesGlobais";

let coments: AvaliacaoDTO[];
let autor: UserDTO;

const getComentarios = async (id: string) => {
  const comentarios = await axios.get(`http://localhost:3005/post/autor${id}`);
  coments = comentarios.data;
}

const getUser = async (id: string) => {
  const auth = await axios.get(`http://localhost:3005/user/${id}`);
  autor = auth.data;
}

const Perfil = async ({ params }: {params: { userID: string}}) => { 
  await getComentarios(params.userID)
  await getUser(params.userID)

  return (
    <>
      <HeaderLogado/>
      <PerfilMain loged={true} user={autor} avals={coments}/>
    </>
  );
};

export default Perfil;
