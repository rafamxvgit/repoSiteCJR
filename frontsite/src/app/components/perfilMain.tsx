import ButExcluir from "./botaoExcluir"
import { AvaliacaoDTO } from "./interfacesGlobais"
import { UserDTO } from "./interfacesGlobais"
import Avaliacao from "./avaliacao"



interface PropsInfoSection { user: UserDTO, loged: boolean }
const UserInfoSection: React.FC<PropsInfoSection> = ({ user, loged }) => {
    let Opts: () => React.JSX.Element;
    if (loged) {
        Opts = () => {
            return (
                <div className="h-fit w-full flex justify-evenly">
                    <a href={`/log/${user.id}/editPerfil`} className="h-12 w-1/4 bg-lime-500 rounded-lg text-center content-center">editar perfil</a>
                    <ButExcluir userID={user.id.toString()} estilo="h-12 w-1/4 bg-lime-500 rounded-lg"></ButExcluir>
                </div>
            )
        }
    }
    else {
        Opts = () => { return (<></>) }
    }

    return (
        <section className="h-96">

            {/* parte da foto e do banner*/}
            <div className="h-2/3">
                <div className="h-1/4 bg-lime-500"></div>
                <div className="h-1/4 flex bg-lime-500">
                    <div className="w-1/12"></div>
                    <img src={user.foto} alt="imagem perfil" className="h-48 rounded-full border-lime-950 aspect-square border-2" />
                </div>
                <div className="h-1/2 flex justify-end">
                    <div className="w-1/2 flex flex-col justify-evenly content-around">
                        <Opts></Opts>
                    </div>
                </div>
            </div>

            {/*parte das informações do usuário*/}
            <div className="h-1/3 flex">
                <div className="w-1/12"></div>
                <div className="w-11/12 content-around">
                    <p>-{user.nome}</p>
                    <p>-{user.curso}</p>
                    <p>-{user.email}</p>
                </div>
            </div>

        </section>
    )
}

interface PropsPostSection { posts: AvaliacaoDTO[], loged: boolean }
const PostSection: React.FC<PropsPostSection> = ({ posts, loged }) => {

    const CriarPost = (obj: AvaliacaoDTO) => {
        return <Avaliacao dados={obj} loged={loged} />
    }
    return (
        <section className="h-full flex flex-col gap-12">
            {posts.map(CriarPost)}
        </section>
    )
}

interface PropsPerfil { loged: boolean, user: UserDTO, avals: AvaliacaoDTO[] }
const PerfilMain: React.FC<PropsPerfil> = ({ loged, user, avals }) => {
    if (loged) { }

    return (
        <div className="w-dvw h-dvh flex justify-center">
            <div className="w-5/6">
                
                <UserInfoSection user={user} loged={loged} />
                
                {/*divisória e texto 'posts'*/}
                <div className="h-1 bg-black mt-3"></div>
                <div className="flex h-24">
                    <div className="w-1/12"></div>
                    <div className="content-center"><h3 className="text-3xl">Posts:</h3></div>
                </div>

                <PostSection posts={avals} loged={loged}/>
            </div>
        </div>


    )
}

export default PerfilMain;