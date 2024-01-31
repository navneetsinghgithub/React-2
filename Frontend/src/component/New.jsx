import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

function New() {
    const [dataa, setDataa] = useState()
    const data = () => {
        const userdata = axios.get("http://localhost:2323/getUsers", dataa)
            .then((res) => {
                setDataa(res.data.body)
                // console.log(res, "tttttttttttttttttttt");
            }).catch((error) => {
                console.log(error, "error");
            })
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <>
            <div>
                <h3>hello friends</h3>
                <table>
                    <Link to='/Index'><button>Add User</button></Link>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataa?.map((e) => {
                            <tr>
                                <td>{e?.name}</td>
                                <td>{e?.email}</td>
                                <td>{e?.phone}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default New