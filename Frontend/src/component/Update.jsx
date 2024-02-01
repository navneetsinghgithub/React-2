import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Update() {
    const [data, setData] = useState()

    const { id } = useParams()
    // console.log(id, "idddddddddddddddddd");

    const Updatedata = () => {
        axios.put(`http://localhost:2323/updateUser/${id}`).then((res) => {
            setData(res.data.body)
        }).catch((error) => {
            console.log(error, "error");
        })
    }
    useEffect(() => {
        Updatedata()
    }, [])

    return (
        <div>Update</div>
    )
}

export default Update