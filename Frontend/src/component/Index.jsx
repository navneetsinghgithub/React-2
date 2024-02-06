import React, { useState } from 'react'
import "../App.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Index() {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const getData = (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:2323/addUser", data).then((res) => {
                // console.log(res, "vnsdjbvhdlfjbvdcv ")
                setData(res.data.body)
                navigate("/New")
            }).catch((error) => {
                // console.log(error, "error")
            })
        } catch (error) {
            // console.log(error, "error");
        }
    }
    return (
        <>
            <div>
                <form onSubmit={getData} onChange={handlechange}>
                    <div className="container">
                        <h2>Register</h2>
                        <p>please fill in this form to create an account</p>

                        <label for="Name"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" id="name" required />

                        <label for="Email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />


                        <label for="Password"><b>Password</b></label>
                        <input type="text" placeholder="Enter Password" name="password" id="password" required />

                        <button type="submit" class="Registration">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Index