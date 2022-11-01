const express = require("express");
const axios = require('axios')
const router = express.Router();

router.get("/:switch_id", async (req, res) => {
    const switch_id = req.params.switch_id;
    const response = await axios.get(`http://localhost:8080/router/${switch_id}`);
    res.json(response.data);
});
router.post("/:switch_id", async (req, res) => {
    const switch_id = req.params.switch_id;
    const data = req.body;
    const response = await axios.post(`http://localhost:8080/router/${switch_id}`, data);
    res.json(response.data);
})
router.delete("/:switch_id", async (req, res) => {
    const switch_id = req.params.switch_id;
    const address_id = req.body.address_id;
    const data = { "address_id": address_id }

    const response = await axios.delete(`http://localhost:8080/router/${switch_id}`, { data: data })
    res.json(response.data);
})
router.get("/all/all", async (req, res) => {
    const response = await axios.get("http://localhost:8080/router/all/all");
    res.json(response.data);
})
module.exports = router;