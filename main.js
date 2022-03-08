const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    console.log("HELLO")
    res.send("HELLO")
})

app.listen(PORT, ()=> console.log("app listening: ",PORT ))