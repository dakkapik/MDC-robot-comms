const express = require("express")
const {networkInterfaces} = require("os")
const app = express()
const PORT = process.env.PORT || 3000

const nets = networkInterfaces();
const results = Object.create(null);

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

app.get("/", (req, res) => {
    console.log("HELLO")
    res.send("HELLO")
})

app.listen(PORT, ()=> console.log("app listening: ",PORT, results ))