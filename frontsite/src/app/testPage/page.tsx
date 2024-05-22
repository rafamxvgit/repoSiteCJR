"use client"
import axios from 'axios';
import React, { MouseEventHandler } from 'react';
import { Formik, Form, Field } from "formik";
import { use } from "react";
import * as yup from "yup";

const testPage = () => {
    const initialValues = { name: ''};

    const validation = yup.object({
        name: yup.string().required("Required"),
    })

    const submit = async (values: any) => {
        //const user = await axios.post('http://localhost:3003/user', values)
        console.log(values)
        const sla = 'http://localhost:3003/user/'+values.name
        console.log(sla)
        const user: string = await axios.get(sla)
        console.log(user)
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validation}>
                <Form className="h-full w-full flex flex-col justify-evenly">
                    <Field id="name" type="name" name="name" placeholder="name:" className="w-full h-10 bg-lime-400 rounded-lg p-3"></Field>
                    <div className="w-full h-12 flex justify-center">
                        <button className= "h-full w-1/2 bg-lime-400 rounded-xl" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default testPage;