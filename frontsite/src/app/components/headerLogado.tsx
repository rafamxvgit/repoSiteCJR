import React from 'react'

interface vazia {

}

const HeaderLogado: React.FC<vazia> = () => {
  return (
    <>
    <nav className='bg-lime-400 flex justify-between items-center h-20 p-2'>
    <img className='h-8 w-16'src="/images/LogoUnB.svg" alt="logo UNb" />
      <h1>Sistema de avaliação de professores</h1>
      <div className='flex justify-between'>
        <a href='/perfilPage'><button className= "h-full w-full bg-lime-400 rounded-xl p-4" type="submit">Perfil</button></a>{/*Trocar o link após a pagina de perfil ser criada*/}
        <a href='/registerPage'><button className= "h-full w-full bg-lime-400 rounded-xl p-4" type="submit">Sair</button></a>{/*Trocar O link da página main com o header deslogado*/}
      </div>
    </nav>
    </>
  )
}

export default HeaderLogado