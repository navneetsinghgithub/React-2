import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from "react-router-dom"

function Update() {
    const [data, setData] = useState()
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id, "idddddddddddddddddd");


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getData = () => {
        const data = axios.get(`http://localhost:2323/getSingleUsers/${id}`)
            .then((res) => {

                setData(res.data.body)
            }).catch((error) => {
                console.log(error, "error");
            })
    }
    useEffect(() => {
        getData()
    }, [])

    const Updatedata = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:2323/updateUser/${id}`, data).then((res) => {
            console.log(res)
            setData(res.data.body)
            navigate("/new")
        }).catch((error) => {
            console.log(error, "error");
        })
    }
 

    return (
        <>
            <form onChange={handleChange} onSubmit={Updatedata}>
                <div class="container">
                    <label for="name"><b>Name</b></label>
                    <input type="text" name="name" value={data?.name} />
                    <label for="email"><b>Email</b></label>
                    <input type="text" name="email" id="email" value={data?.email} />
                   <button type="submit">Update</button>

                </div>
            </form>
        </>
    )
}

export default Update