"use client"
import { useState } from 'react';

interface boxProps {
}

const UsernameInput: React.FC<boxProps> = () => {
    return(
    <input className="w-full h-10 p-2 bg-lime-400 rounded-lg" type="text" placeholder="Username:"></input>
    )
}

export default UsernameInput