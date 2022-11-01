import { Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from 'axios'

const Card = (props) => {
    const [show_add_address, setshow_add_address] = useState(false);


    const elem = props.elem;
    return (
        <div style={{ width: "30vw", border: "2px solid black", margin: "0.5rem", padding: "0.5rem" }}>
            {   //   {JSON.stringify(props)}
            }
            <Typography variant="h5"> switch_id:  {elem.switch_id}</Typography>
            {elem.internal_network[0].address ? <div>
                {elem.internal_network[0].address.map((add) => {
                    return (<div style={{ display: "flex", flexDirection: "row", alignContent: "center" }} key={add.address_id}>
                        <Typography sx={{ alignSelf: "center" }}><b> address_id:</b> {add.address_id}, &nbsp; <b>address:</b> <u> {add.address}</u>  </Typography>
                        <Button onClick={async () => {
                            const data = { "address_id": add.address_id };
                            const res = await axios.delete(`http://localhost:5000/router/${elem.switch_id}`, { data: data })
                            console.log(res.data);
                            window.location.reload();
                        }} color="error" sx={{ margin: "0rem 0.25rem" }}>Delete</Button>
                    </div>)
                })}
            </div> : <div>No registerd address</div>}
            {show_add_address ? (<div>
                <Add_address elem={elem} />
            </div>) : (<Button onClick={() => setshow_add_address(true)}>add address</Button>)}


        </div>)

}
const Add_address = (props) => {
    const [add, setadd] = useState("");
    const handleId = (e) => {
        setadd(e.target.value)
    }
    const handleSubmit = () => {
        const data = {
            "address": add
        }
        axios.post(`http://localhost:5000/router/${props.elem.switch_id}`, data);

        window.location.reload();
    }
    return (
        <div>
            <input onChange={handleId} value={add} type="text" name="id" placeholder="000.00.00.0/00" />
            <Button onClick={handleSubmit}>Add</Button>
        </div>
    )
}

export default Card;