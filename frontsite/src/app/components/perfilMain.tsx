import ButExcluir from "./botaoExcluir";
import { AvaliacaoDTO, ComentarioDTO } from "./interfacesGlobais";
import { UserDTO } from "./interfacesGlobais";
import Avaliacao from "./avaliacao";
import Comentario from "./comentario";

interface PropsInfoSection {
  user: UserDTO;
  loged: number;
}
const UserInfoSection: React.FC<PropsInfoSection> = ({ user, loged }) => {
  let Opts: () => React.JSX.Element;
  if (loged == user.id) {
    Opts = () => {
      return (
        <div className="h-fit w-full flex justify-end">
          <a
            href={`/log/${user.id}/editPerfil`}
            className="h-12 w-1/4 mr-2 text-center content-center bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:translate-y-1 hover:bg-lime-400 "
          >
            Editar perfil
          </a>
          <ButExcluir
            userID={user.id.toString()}
            estilo="h-12 w-1/4 ml-2 mr-2 bg-lime-300 rounded-md border border-black hover:border-2 hover:border-black hover:shadow hover:shadow-black hover:translate-y-1 hover:bg-lime-400"
          ></ButExcluir>
        </div>
      );
    };
  } else {
    Opts = () => {
      return <></>;
    };
  }

  return (
    <section className="h-96 bg-customGray border-x-4 border-b-4 border-lime-400">
      {/* parte da foto e do banner*/}
      <div className="h-2/3">
        <div className="h-1/4 bg-lime-300"></div>
        <div className="h-1/4 flex bg-lime-300">
          <div className="w-1/12"></div>
          <img
            src={user.foto}
            alt="imagem perfil"
            className="h-48 rounded-full border-solid border-lime-400 shadow-md shadow-lime-400 aspect-square border-2"
          />
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
          <ul className="list-disc text-lime-400">
            <li className="font-serif font-normal text-base">{user.nome}</li>
            <li className="font-serif font-normal text-base">{user.curso}</li>
            <li className="font-serif font-normal text-base">{user.departamento}</li>
            <li className="font-serif font-normal text-base">Bio: {user.bio}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

interface PropsPostSection {
  posts: AvaliacaoDTO[];
  loged: number;
}
const PostSection: React.FC<PropsPostSection> = ({ posts, loged }) => {
  if (posts == undefined) { posts = [] }
  const CriarPost = (obj: AvaliacaoDTO) => {
    return <Avaliacao dados={obj} loged={loged} />;
  };
  return (
    <section className="h-fit flex flex-col gap-12">
      {posts.map(CriarPost)}
    </section>
  );
};

interface PropsComSection {
  coments?: ComentarioDTO[];
  loged: number
}
const ComentariosSection: React.FC<PropsComSection> = ({ coments, loged }) => {
  if (coments == undefined) { coments = [] }
  const CriarComentario = (obj: ComentarioDTO) => {
    return <Comentario comentario={obj} loged={loged} />
  }

  return (
    <>
      <section className="flex flex-col gap-12">
        {coments.map(CriarComentario)}
      </section>
    </>
  )
}

interface PropsPerfil {
  loged: number;
  user: UserDTO;
  avals: AvaliacaoDTO[];
  comentarios?: ComentarioDTO[]
}
const PerfilMain: React.FC<PropsPerfil> = ({ loged, user, avals, comentarios }) => {
  return (
    <div className="w-dvw flex justify-center bg-customWhite">
      <div className="w-5/6">
        <UserInfoSection user={user} loged={loged} />

        {/*divisória e texto 'posts'*/}
        <div className="h-1 bg-black mt-3"></div>
        <div className="flex h-24">
          <div className="w-1/12"></div>
          <div className="content-center">
            <h3 className="font-serif text-2xl">Posts:</h3>
          </div>
        </div>
        <PostSection posts={avals} loged={loged} />

        {/*divisória e texto 'posts'*/}
        <div className="h-1 bg-black mt-3"></div>
        <div className="flex h-24">
          <div className="w-1/12"></div>
          <div className="content-center">
            <h3 className="font-serif text-2xl">Comentários:</h3>
          </div>
        </div>
        <ComentariosSection coments={comentarios} loged={loged} />
      </div>
    </div>
  );
};

export default PerfilMain;
