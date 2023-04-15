require('dotenv').config();
const express = require('express');
const axios = require('axios')
const app = express();

var cors = require("cors");
app.use(cors());

const accessKey = process.env.UNSPLASH_ACCESS_KEY
const PORT = process.env.PORT

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/?per_page=24&client_id=${accessKey}`);
        // https://api.unsplash.com/search/photos/?query=${query}&client_id=${accessKey}
        console.log(response.data); 
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})
