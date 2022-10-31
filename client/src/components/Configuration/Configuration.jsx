import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Typography } from '@mui/material'

const Configuration = () => {
  const [data, setdata] = useState([])
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:8080/router/all/all", {})
    setdata(res.data)
  }
  useEffect(() => {
    fetchdata()
    // eslint-disable-next-line
  }, [1 == 1])
  return (
    <div>
      {JSON.stringify(data)}
      <Typography>Total no. of devices Connected : {data.length}</Typography>
      <Typography> Details</Typography>
      {data.map((elem) => {
       return (<div key={elem.switch_id}>
         <Typography>Switch_id: {elem.switch_id}</Typography>
       </div>)
     })}
    </div>
  )
}

export default Configuration