import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Updated() {
    const [data, setData] = useState()

    const navigate = useNavigate()
    const { id } = useParams()

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getDataa = () => {
        try {
            axios.get(`http://localhost:6789/findSingleUser/${id}`, data).then((res) => {
                console.log(res,"resss");
                setData(res.data.body)
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        getDataa()
    }, [])
    const updateData = (e) => {
        e.preventDefault()
        try {
            axios.put(`http://localhost:6789/updateUser/${id}`,data).then((res) => {
                setData(res.data.body)
                navigate("/find")
            }).catch((err) => {
                console.log(err, "err");
            })
        } catch (error) {
            console.log(error, "error");
        }
    }


    return (
        <>
            <form onSubmit={updateData} onChange={handlechange}>
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

export default Updated
