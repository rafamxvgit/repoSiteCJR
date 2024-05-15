import React from "react";

interface teachIcon {
    nome: string,
    foto: string
}

const TeacherIcon: React.FC<teachIcon> = ({nome, foto}) => {
    return(
        <button className="h-full aspect-square bg-lime-400 rounded-lg p-3">
            <div className="h-4/5 w-full overflow-hidden rounded-lg">
                <img className="w-full rounded-lg" src={foto} alt={foto} />
            </div>
            <div className="h-1/5 w-full content-center text-2xl">
                {nome}
            </div>
        </button>
    )
}

export default TeacherIcon;