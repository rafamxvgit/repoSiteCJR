"use client"
import { MouseEventHandler, useState } from 'react';

interface boxProps {
    estilo: string
}

const ButtRegister: React.FC<boxProps> = ({estilo}) => {
    return(
    <button className={estilo} onClick={(event) => {console.log("Cadastrar-se")}}>Cadastrar-se</button>
    )
}

export default ButtRegister

