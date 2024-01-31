import React, { useState } from 'react'
import "../App.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Index() {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const handlechange = () => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const getData = (e) => {
        e.priventDefault()
        try {
            axios.post("http://localhost:2323/addUser", data).then((res) => {
                setData(res.data.body)
                navigate("/New")
            }).catch((error) => {
                console.log(error, "error")
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    return (
        <>
            <div>
                <form onSubmit={getData} onChange={handlechange}>
                    <div class="container">
                        <h2>Register</h2>
                        <p>please fill in this form to create an account</p>

                        <label for="Name"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="Name" id="Name" required />

                        <label for="Email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="Email" id="Email" required />


                        <label for="Phone"><b>Phone</b></label>
                        <input type="text" placeholder="Enter Phone" name="Phone" id="phone" required />

                        <label for="Password"><b>Password</b></label>
                        <input type="text" placeholder="Enter Password" name="Password" id="Password" required />

                        <button type="submit" class="Registration">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Index