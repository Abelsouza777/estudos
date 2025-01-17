const express = require("express")
const app = express()
app.use(express.json())

//getsimples endpoint
app.get("/hello",(req,res) => {
    res.send("oi")
})

app.listen(3000,() =>{
    console.log("servidor rodando na port 3000")
})