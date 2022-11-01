import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Typography } from '@mui/material'
import Card from './Card'

const Configuration = () => {
  const [data, setdata] = useState([])
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/router/all/all", {})
    setdata(res.data)
  }
  useEffect(() => {
    fetchdata()
    // eslint-disable-next-line
  }, [1 == 1])
  return (
    <div>
      {JSON.stringify(data)}
      <Typography sx={{ textAlign: "center" }} variant="h3">Total no. of devices Connected : {data.length}</Typography>
      <hr />
      <div style={{display:"flex",flexWrap:"wrap"}}>

        {data.map((elem) => {
          return (<div key={elem.switch_id}>
            <Card elem={elem} />

          </div>)
        })}
      </div>
    </div>
  )
}

export default Configuration