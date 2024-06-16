import React from "react";

//! passar o link de perfil como um parâmentro do componente
interface HeaderProps { logado: number }

const HeaderComp: React.FC<HeaderProps> = ({ logado }) => {
    let Buttons: () => JSX.Element

    if (logado != -1) {
        Buttons = () => {
            return (
                <>

                    <div className="flex w-1/3 justify-center font-serif">
                        <a href={`/log/${logado}/perfil`}>
                            <button
                                className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md mr-2 ml-48"
                                type="submit"
                            >
                                Perfil
                            </button>
                        </a>
                        {/*Trocar o link após a pagina de perfil ser criada*/}
                        <a href="/noLog/register">
                            <button
                                className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md ml-2"
                                type="submit"
                            >
                                Sair
                            </button>
                        </a>
                    </div>
                </>
            )
        }
    }
    else {
        Buttons = () => {
            return (
                <>

                    <div className="flex w-1/3 justify-end font-serif">
                        <a href="/noLog/login">
                            <button
                                className="h-12 w-32 border border-black hover:bg-lime-400 hover:shadow hover:shadow-black hover:translate-y-1 rounded-md mr-10"
                                type="submit"
                            >
                                Login
                            </button>
                        </a>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <nav className="bg-lime-300 flex items-center h-20 p-2 w-screen border-b-4 border-lime-400">
                <div className="w-1/3">
                    <a href="./feed">
                        <img
                            className="ml-5 h-8 w-16"
                            src="/images/LogoUnB.svg"
                            alt="logo UnB"
                        />
                    </a>
                </div>
                <div className="w-1/3 justify-center">
                    <h1 className="text-center text-2xl font-serif border-8 border-double border-lime-400 shadow-md shadow-lime-400 p-2">
                        Sistema de avaliação de professores
                    </h1>
                </div>
                <Buttons />
            </nav>
        </>
    );
};

export default HeaderComp;