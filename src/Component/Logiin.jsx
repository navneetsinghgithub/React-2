import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Logiin() {
    const [data, setData] = useState()

    const navigate = useNavigate()
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const getDatae = (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:6789/login", data).then((res) => {
                if (res.data.status != 400) {
                    setData(res.data.body)
                    navigate("/dasb")
                } else {
                    alert("email or password is not correct")
                }

            }).catch((er) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }

    return (
        <>
            <form onSubmit={getDatae} onChange={handlechange}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" name='email' placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="text" class="form-control" id="password" name='password' placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Logiin
