import { Typography } from '@mui/material'
import React from 'react'
import router from "../../images/router.jpg"

const Home = () => {
  return (
    <div style={{ margin: "5rem 1rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div >
        <img alt="router" style={{ width: "20em", borderRadius: "5%" }} src={router} />
      </div>
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" >
          Name of Controller
        </Typography>
      </div>
    </div >
  )
}

export default Home