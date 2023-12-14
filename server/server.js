const express = require("express")
const answers = require("./models/magic8ball")

const app = express()

//Greeting

app.get('/greeting',(req,res) => {
    res.send("<h1>Hello Stranger</h1>")
})

//Greeting with name in the parameter

app.get('/greeting/:name',(req,res) => {
    res.send(`<h2>Hello ${req.params.name}, Nice to meet you!</h2> `)
})

//Tip Calculator
app.get('/tip/:total/:tippercent',(req,res) => {
    let totalamt = req.params.total;
    let percent = req.params.tippercent;
    let tipamount = (totalamt*percent)/100;
    res.send(`<h3>Tip amount is calaculated as ${tipamount}</h3>`)
})

app.get('/magic/:question',(req,res) => {
    let randnum = Math.floor(Math.random() * (20 - 0+1)+0)
    res.send(`<h1>${req.params.question}</h1><br><h3>${answers[randnum]}</h3>`)
})


app.get('/',(req,res) => {
    res.send("<h1>Home Page</h1>")
})









app.listen('3001',(req,res) => {
    console.log("Server is up and running at port 3001")
})