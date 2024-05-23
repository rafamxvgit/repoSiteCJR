import React from "react";
import HeaderLogado from "@/app/components/headerLogado";
import axios from "axios";


const NoLogTeacherPage = ({ params }: {params: {teacherID: string}}) => {
    return(
    <>
        <HeaderLogado/>
        {params.teacherID}
    </>
    )
}

export default NoLogTeacherPage;