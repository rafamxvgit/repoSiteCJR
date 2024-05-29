import { AvaliacaoDTO } from "./interfacesGlobais";

interface PropsAvaliacao { dados: AvaliacaoDTO, loged: boolean }
const Avaliacao: React.FC<PropsAvaliacao> = ({ dados, loged }) => {
    let BotaoExcluir: () => React.JSX.Element;
    if (loged) {
        BotaoExcluir = () => {
            return(
                <div className="w-1/12">
                    <button className="bg-lime-200 p-1 rounded-md">excluir</button>
                </div>)
        }
    }
    else {
        BotaoExcluir = () => {return(<></>)}
    }
    return (
        <div className="w-full h-fit flex flex-col gap-3 bg-lime-500 p-3 rounded-lg">
            <div className="h-16 flex">
                <div className="w-1/2"><img className="h-full aspect-square rounded-full" src={dados.imagem} alt="" /></div>
                <div className="w-1/2 flex gap-6 justify-end">
                    <p>autor: {dados.nomeAutor}</p>
                    <p>sobre: {dados.nomeAlvo}</p>
                    <p>data: {dados.data}</p>

                </div>
            </div>
            <div className="h-fit bg-white p-2 rounded-lg">
                <p>{dados.conteudo}</p>
            </div>
            <BotaoExcluir/>
        </div>
    );
};

export default Avaliacao