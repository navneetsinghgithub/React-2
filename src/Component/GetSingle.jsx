import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"


function GetSingle() {
    const [data, setData] = useState()
    console.log(data, "daaaaaaaa");

    const { id } = useParams()
    console.log(id, "idddddddddddd");

    const getData = () => {
        try {
            axios.get(`http://localhost:6789/getSingleUsers/${id}`, data).then((res) => {
                setData(res.data.body)
            }).catch((error) => {
                console.log(error, "error");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div class="container">
            <label for="name"><b>name</b></label>
            <input type="text" name="name" value={data?.name} />

            <label for="email"><b>email</b></label>
            <input type="text" name="email" id="email" value={data?.email} />



            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
        </div>
    )
}

export default GetSingle