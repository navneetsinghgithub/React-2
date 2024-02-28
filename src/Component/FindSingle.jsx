import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function FindSingle() {
  const [data, setData] = useState()

  const { id } = useParams()
  const getSingle = () => {
    try {
      axios.get(`http://localhost:6789/findSingleUser/${id}`, data).then((res) => {
        setData(res, data.body)
      }).catch((err) => {
        console.log(err, "err");
      })
    } catch (error) {
      console.log(error, "error");
    }
  }
  useEffect(() => {
    getSingle()
  }, [])



  return (
    <>
      <div className='container'>
        <label for='name'><b>Name</b></label>
        <input type='text' name='name' id='name' value={data?.name} />

        <label for='email'><b>Email</b></label>
        <input type='text' name='email' id='email' value={data?.email} />

        <button type='submit'>Login</button>

      </div>
    </>
  )
}

export default FindSingle
