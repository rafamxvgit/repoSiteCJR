import HeaderLogado from "@/app/components/headerLogado";
import FormEdit from "@/app/components/formEdit";
import { UserDTO } from "@/app/components/interfacesGlobais";
import axios from "axios";

let user: UserDTO;
const getUser = async (id: string) => {
  const auth = await axios.get(`http://localhost:3005/user/${id}`);
  user = auth.data;
};

const EditPerfil = async ({ params }: { params: { userID: string } }) => {
  await getUser(params.userID);
  return (
    <>
      <div className="h-screen flex flex-col">
        <HeaderLogado />
        <div className="w-screen h-screen flex">
          <div className="w-1/2 h-full flex flex-col border-r-4 border-lime-400 bg-customGray">
            <div className="h-2/6 w-full flex border-b-4 border-lime-400">
              <div className="mt-3 ml-8 w-64 h-44 relative overflow-hidden border-solid border-4 border-lime-400 rounded-full flex flex-col justify-center items-center shadow-md shadow-lime-400">
                <img
                  className="object-cover size-full"
                  src={user.foto}
                  alt=""
                />
                <input
                  id="image-field"
                  className="opacity-0 cursor-pointer size-52 absolute m-auto "
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="h-full w-full rounded-md flex ml-14 items-center">
                <ul className="list-disc text-lime-400">
                  <li className="font-serif p-3 font-normal text-base">
                    Nome: {user.nome}
                  </li>
                  <li className="font-serif p-3 font-normal text-base">
                    Curso: {user.curso}
                  </li>
                  <li className="font-serif p-3 font-normal text-base">
                    Departamento: {user.departamento}
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h1 className="w-1/2 mt-6 ml-44 py-1 text-center text-lg font-medium font-serif text-lime-400 border-8 border-double border-black shadow-md shadow-black">
                Sobre:
              </h1>
              <h2 className="text-left w-3/4 mt-14 ml-20 font-serif text-lime-400 border-2 border-black p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis quo modi quidem nihil earum incidunt voluptas magni
                voluptatibus nobis harum eum itaque quia facere, tempora vero,
                ipsa illo, quis enim.
              </h2>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center bg-customWhite">
            <FormEdit userID={+params.userID} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPerfil;
