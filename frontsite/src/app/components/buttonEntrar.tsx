"use client"
import { MouseEventHandler, useState } from 'react';

interface boxProps {
    estilo: string
}

const ButtInpBoxEnter: React.FC<boxProps> = ({estilo}) => {
    return(
    <button className={estilo} onClick={(event) => {console.log("Entrar")}}>Entrar</button>
    )
}

export default ButtInpBoxEnter
