const express = require('express')
const app = express() 
const port = 5000

app.get( '/' , (req, res) => {
res.send("Hello this is fahima'a first ever server")
} )

app.get( '/data' , (req, res) => {
    res.send("This is data")
} )

app.get( '/files', (req,res) => {
    res.send("This is the file you are looking for")
} )

app.listen( port, () => {
    console.log(`My first ever port : ${port}`)
} )