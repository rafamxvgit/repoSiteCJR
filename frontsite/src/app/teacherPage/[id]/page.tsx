import React from "react";
import SearchBoxFeed from "../../components/searchBoxFeed";
import TeacherIcon from "../../components/teacherIcon";
import HeaderDeslogado from "../../components/headerDeslogado";
import axios from "axios";


const TeacherPage = ({ params }: {params: { id: string}}) => {
    return(
    <>
        <HeaderDeslogado></HeaderDeslogado> 
        {params.id}
    </>
    )
}

export default TeacherPage;