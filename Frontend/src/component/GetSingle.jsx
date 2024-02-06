// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function GetSingle() {

//     const [data, setData] = useState()

//     const id = useParams().id
//     // console.log(id, "id")

//     const getData =  () => {
//          axios.get(`http://localhost:2323/getSingleUsers/${id}`).then((res) => {
//             setData(res.data.body)
//         }).catch((err) => {
//             // console.log(err, "err")
//         })

//     }
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <div class="container">
//             <h1>Normal Page</h1>
//             <label for="name"><b>Name</b></label>
//             <input type="text" name="name" id="name" value={data?.name} />
//             <label for="email"><b>Email</b></label>
//             <input type="text" name="email" id="email" value={data?.email} />
//         </div>
//     )
// }

// export default GetSingle


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


function GetSingle() {
    const [data, setData] = useState()
    console.log(data, "oooooooooooooooooo");

    const { id } = useParams()
    console.log(id, "idddddd")

    const getData = () => {
        const data = axios.get(`http://localhost:2323/getSingleUsers/${id}`)
            .then((res) => {
                console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>>");

                setData(res.data.body)
            }).catch((error) => {
                console.log(error, "error");
            })
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>

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
        </>
    )
}

export default GetSingle