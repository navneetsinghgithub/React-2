import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


function New() {
    const [dataa, setDataa] = useState()
    const data = () => {
        const userdata = axios.get("http://localhost:2323/getUsers", dataa)
            .then((res) => {
                // console.log(res);
                setDataa(res.data.body)
                // console.log(res, "tttttttttttttttttttt");
            }).catch((error) => {
                // console.log(error, "error");
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataa?.map((dataa, index) => (
                            <tr key={index}>
                                <td>{dataa?.name}</td>
                                <td>{dataa?.email}</td>
                                <td>{dataa?.phone}</td>
                                <td><Link to={`/getSingle/${dataa?._id}`}><button>Click</button></Link></td>
                                <td><Link to={`/Update/${dataa?._id}`}><button>Update</button></Link></td>


                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default New


