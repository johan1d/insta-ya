const express = require ('express')
const res = require('express/lib/response')
constapp = express()

app.get('/',(req, res) => {
  res.send("express App")
})

app.listen(5000, () => {
  console.log('server runing on port 5000')
})