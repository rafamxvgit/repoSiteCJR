import React from "react";

interface vazia {
    estilo: string,
    nome: string,
    instituicao: string,
    email: string
}

const UserInfo: React.FC<vazia> = ({nome, instituicao, email, estilo}) => {
  return (
    <>
    <div className={estilo}>
        <h4>{nome}</h4>
        <h4>{instituicao}</h4>
        <h4>{email}</h4>
    </div>
    </>
  );
}

export default UserInfo;