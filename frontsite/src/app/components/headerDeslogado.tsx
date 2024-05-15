import React from 'react'

interface vazia {

}

const HeaderDeslogado: React.FC<vazia> = () => {
  return (
    <>
    <nav className='bg-lime-400 flex justify-between items-center h-20 p-2'>
    <img className='h-8 w-16'src="/images/LogoUnB.svg" alt="logo UNb" />
      <h1>Sistema de avaliação de professores</h1>
      <div>
            <a href='/loginPage'><button className= "h-full w-full bg-lime-400 rounded-xl p-4" type="submit">Login</button></a>
        </div>
    </nav>
    </>
  )
}

export default HeaderDeslogado