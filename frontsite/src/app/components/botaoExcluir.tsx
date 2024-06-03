"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

interface Estilo {
  estilo: string;
  userID: string;
}

const ButExcluir: React.FC<Estilo> = ({ estilo, userID }) => {
  const router = useRouter();
  const excluirPerfil = async () => {
    const perfil = await axios.delete(`http://localhost:3005/user/${+userID}`);
    if (perfil.status == 200) {
      router.push("/noLog/register");
    }
  };
  return (
    <>
      <button className={estilo} onClick={excluirPerfil}>
        Excluir perfil
      </button>
    </>
  );
};

export default ButExcluir;
