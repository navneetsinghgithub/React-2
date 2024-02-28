import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Swal from "sweetalert2"

function Find() {
  const [data, setData] = useState()

  const getData = () => {
    try {
      axios.get("http://localhost:6789/findUser", data).then((res) => {
        setData(res.data.body)
      }).catch((err) => {
        console.log(err, "err");
      })
    } catch (error) {
      console.log(error, "error");
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const deletehandler = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:6789/deleteUser/${id}`, data).then((res) => {
            setData(res.data.body)
          })
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

    } catch (error) {
      console.log(error, "error");
    }
  }



  return (
    <>
      <h2>hello </h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((dataa, create) => (
            <tr key={create}>
              <td>{dataa?.name}</td>
              <td>{dataa?.email}</td>
              <td>{dataa?.phone}</td>
              <td><Link to={`/findsingle/${dataa?._id}`}><button>press</button></Link></td>
              <td><Link to={`/updated/${dataa?._id}`}>  <button>update</button></Link> </td>
              <td><button type='submit' onClick={() => {
                deletehandler(dataa?._id)
              }}  >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Find
