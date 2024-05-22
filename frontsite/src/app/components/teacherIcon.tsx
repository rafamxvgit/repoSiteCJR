import React from "react";

interface teachIcon {
    teacherID: number
    nome: string,
    foto: string
    estilo: string
}

const TeacherIcon: React.FC<teachIcon> = ({nome, foto, estilo, teacherID}) => {
    return(
        <a href={"./teacher/" + teacherID} className={estilo}>
            <div className="h-4/5 w-full overflow-hidden rounded-lg">
                <img className="w-full rounded-lg" src={foto} alt={foto} />
            </div>
            <div className="h-1/5 w-full content-center text-2xl">
                {nome}
            </div>
        </a>
    )
}

export default TeacherIcon;