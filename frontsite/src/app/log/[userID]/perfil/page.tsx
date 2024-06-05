import axios from "axios";
import HeaderComp from "@/app/components/headerComplete";
import PerfilMain from "@/app/components/perfilMain";
import { AvaliacaoDTO } from "@/app/components/interfacesGlobais";
import { UserDTO } from "@/app/components/interfacesGlobais";

let avals: AvaliacaoDTO[];
let autor: UserDTO;

const getAvals = async (id: string) => {
  const getAvals = await axios.get(`http://localhost:3005/post/autor${id}`);
  avals = getAvals.data;
};

const getUser = async (id: string) => {
  const auth = await axios.get(`http://localhost:3005/user/${id}`);
  autor = auth.data;
};

const Perfil = async ({ params }: { params: { userID: string } }) => {
  await getAvals(params.userID);
  await getUser(params.userID);

  return (
    <>
      <div className="w-screen flex flex-col">
        <HeaderComp logado={+params.userID} />
        <PerfilMain loged={+params.userID} user={autor} avals={avals} />
      </div>
    </>
  );
};

export default Perfil;
