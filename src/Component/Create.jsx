import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Create() {
const [data ,setData]=useState()

const navigate = useNavigate()
const handlechange=(e)=>{
    setData({...data ,[e.target.name]:e.target.value})
}

const CreateData=(e)=>{
    e.preventDefault()
    try {
        axios.post("http://localhost:6789/createUser",data).then((res)=>{
            setData(res.data.body)
            navigate("/find")
        }).catch((err)=>{
            console.log(err,"err");
        })
    } catch (error) {
        console.log(error,"error");
    }
}

    return (
        <>
            <form onSubmit={CreateData} onChange={handlechange}>

                <div class="container">
                    <h1>Register</h1>
                    <p>Kindly fill in this form to register.</p>
                    <label for="username"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        id="username"
                        required
                    />

                    <label for="email"><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        id="email"
                        required
                    />

                    <label for="pwd"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="pwd"
                        id="pwd"
                        required
                    />
                    <button type="submit">Register</button>
                </div>

            </form>


        </>
    )
}

export default Create
