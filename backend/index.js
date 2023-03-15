const express = require('express');
const app = express();

// app.use(express.json());
// const port = process.env.PORT || 4000;

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send({ data: [{ id: "1", name: "kim" }] });
  });

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

// app.listen(port, function () {
//   console.log(`Running on port ${port}`);
// });
