import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Testin = () => {
    const [link, setlink] = useState("")
    const [method, setmethod] = useState("")
    const [output, setoutput] = useState({ msg: "nothing to show" })
    const linkHandler = (e) => {
        setlink(e.target.value)
    }
    const methodHandler = (e) => {
        setmethod(e.target.value)
    }
    const showOutput = async () => {


        if (method === 'GET') {
            const res = await axios.get(link);
            setoutput(res.data);
        }
        

    }
    return (
        <div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", margin: " 10rem 20rem" }}>
                <input placeholder='link' style={{ width: "50%", alignSelf: "center", height: "10%" }} value={link} onChange={linkHandler} type="text" />
                <input placeholder='method (in capital)' style={{ width: "50%", alignSelf: "center", height: "10%" }} value={method} onChange={methodHandler} type="text" />
                <Button onClick={showOutput} variant='outlined' sx={{ width: "15%", margin: "0rem 2rem" }} >Check output</Button>

            </div>
            <p>
                {JSON.stringify(output)}
            </p>
        </div>
    )
}

export default Testin