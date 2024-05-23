import React from "react";
import HeaderLogado from "@/app/components/headerLogado";
import axios from "axios";


const TeacherPage = ({ params }: {params: { userID: string, teacherID: string}}) => {
    return(
    <>
        <HeaderLogado/>
        {params.userID + params.teacherID}
    </>
    )
}

export default TeacherPage;