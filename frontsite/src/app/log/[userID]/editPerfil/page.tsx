import HeaderLogado from "@/app/components/headerLogado";
import FormEdit from "@/app/components/formEdit";
import { UserDTO } from "@/app/components/interfacesGlobais";
import axios from "axios";

let user: UserDTO;
const getUser = async (id: string) => {
    const auth = await axios.get(`http://localhost:3005/user/${id}`);
    user = auth.data;
}

const EditPerfil = async ({ params }: { params: { userID: string } }) => {

    await getUser(params.userID)
    return (
        <>
            <HeaderLogado />
            <main className='w-svw flex'>
                <div className='w-1/2 h-svh flex flex-col overflow-hidden'>
                    <div className="h-1/4 w-full">
                        <img src="/images/imageDemoLogin.png" alt="" />
                    </div>
                    <div className="h-1/2 w-full flex justify-center gap-5">
                        <img src="/images/sad.png" alt="" className="h-2/3 rounded-full border-4 aspect-square" />
                        <div className="h-2/3 bg-lime-200 p-3 rounded-lg flex flex-col justify-evenly">
                            <div>
                                <h3 className="text-2xl">nome:</h3>
                                <h3>{user.nome}</h3>
                            </div>
                            <div>
                                <h3 className="text-2xl">curso:</h3>
                                <h3>{user.curso}</h3>
                            </div>
                            <div>
                                <h3 className="text-2xl">departamento:</h3>
                                <h3>{user.departamento}</h3>
                            </div>
                            <div>
                                <h3 className="text-2xl">senha:</h3>
                                <h3>{user.senha}</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-1/2 h-svh flex justify-center">
                    <FormEdit userID={+params.userID} />
                </div>
            </main>
        </>
    );
}

export default EditPerfil;