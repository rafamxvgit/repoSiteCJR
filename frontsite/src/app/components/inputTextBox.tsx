interface boxProps {
    texto: string
}

const TextInpBox: React.FC<boxProps> = ({texto}) => {
    return(
    <input className="w-full h-10 p-2 bg-lime-400 rounded-lg" placeholder={texto}></input>
    )
}

export default TextInpBox