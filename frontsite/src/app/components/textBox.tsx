"use client"
import { ChangeEventHandler, useState } from 'react';

interface boxProps {
    placeholder: string;
    type: "text" | "password";
}

const PersonalizedInput: React.FC<boxProps> = ({
    placeholder,
    type,
}) => {
    return(
    <input className="w-full h-10 p-2 bg-lime-400 rounded-lg" type={type} placeholder={placeholder}></input>
    )
}

export default PersonalizedInput;