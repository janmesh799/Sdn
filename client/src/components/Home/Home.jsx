import { Typography } from '@mui/material'
import axios from "axios"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import router from "../../images/router.jpg"

const Home = () => {
const [data,setdata] = useState({});
  const fetchdata = async ()=>{

    const temp = await axios.get("http://localho.st:8080/router/all/all");
    console.log(temp.data)
    setdata(temp.data);

  }
  useEffect(()=>{
    fetchdata();
  })

  return (
    <div style={{ margin: "5rem 1rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div >
        <img alt="router" style={{ width: "20em", borderRadius: "5%" }} src={router} />
      </div>
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" >
          Name of Controller
        </Typography>
        <Typography>no. of devices connected: </Typography> 
        <Typography>
          {data.length}
        </Typography>
      </div>
    </div >
  )
}

export default Home