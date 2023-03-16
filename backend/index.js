const express = require('express');
const axios = require('axios')
const app = express();

var cors = require("cors");
app.use(cors());

const accessKey = "hbSGOSaMAaqMfWsUI6glgL3fSCCQbqaM80v6sWJ1xj8";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/?per_page=24&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
        console.log(response.data); 
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
