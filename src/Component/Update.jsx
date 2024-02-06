import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const [data, setData] = useState()
    // console.log(data,"datttttttttaaaaaaa");

    const { id } = useParams()
    const nav = useNavigate()
    const HandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const getData = () => {
        try {
            axios.get(`http://localhost:6789/getSingleUsers/${id}`, data).then((res) => {
                setData(res.data.body)
                // console.log(res,"rrrrrrrrrrrrrrrrrrrrrrrrr");
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
    const Updatedata = (e) => {
        e.preventDefault()
        try {
            axios.put(`http://localhost:6789/updateUser/${id}`, data).then((res) => {
                setData(res.data.body)
                nav("/get")
            }).catch((error) => {
                console.log(error, "error");
            })
        } catch (error) {
            console.log(error, "error");
            console.log(error, "error");

        }
    }




    return (
        <>
            <form onChange={HandleChange} onSubmit={Updatedata}>
                <div class="form-group">
                    <label for="exampleInputName">Name </label>
                    <input type="text" name='name' class="form-control" id="name" value={data?.name} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail">Email</label>
                    <input type="text" name='email' class="form-control" id="email" value={data?.email} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </>
    )
}

export default Update