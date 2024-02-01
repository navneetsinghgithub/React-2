import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function GetSingle() {

    const [data, setData] = useState()

    const id = useParams().id
    // console.log(id, "id")

    const getData =  () => {
         axios.get(`http://localhost:2323/getSingleUsers/${id}`).then((res) => {
            setData(res.data.body)
        }).catch((err) => {
            // console.log(err, "err")
        })

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div class="container">
            <h1>Normal Page</h1>
            <label for="name"><b>Name</b></label>
            <input type="text" name="name" id="name" value={data?.name} />
            <label for="email"><b>Email</b></label>
            <input type="text" name="email" id="email" value={data?.email} />
        </div>
    )
}

export default GetSingle