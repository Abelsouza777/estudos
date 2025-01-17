const express = require("express")
const app = express()
app.use(express.json())

//getsimples endpoint
app.get("/",(req,res) => {
  res.send("meu servidor")
})

app.get("/hello",(req,res) => {
   res.send("oi")
})

app.post("/hello",(req,res) => {
  const nome = req.body.nome
  res.send("oi" + nome)
})

// rodar o servidor
app.listen(3000,() =>{
    console.log("servidor rodando na port 3000")
})