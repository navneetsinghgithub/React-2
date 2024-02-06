import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


function Get() {
  const [data, setData] = useState()

  const dataa = () => {
    try {
      axios.get("http://localhost:6789/getUsers").then((res) => {
        setData(res.data.body)
      }).catch((error) => {
        console.log(error, "error");
      })
    } catch (error) {
      console.log(error, "error");
    }
  }
  useEffect(() => {
    dataa()
  }, [])


  return (
    <>
      <div>
        <h3>hello friends</h3>
        <table>
          <Link to='/create'><button>Add user</button></Link>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, Create) => (
              <tr key={Create}>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
                <td><Link to={`/getsingle/${data?._id}`}> <button>press</button></Link></td>
                <td><Link to={`/update/${data?._id}`}> <button>update</button></Link></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


    </>
  )
}

export default Get