const express = require('express')
const app = express()
const port = 3000
        //request //response    
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Maruf');
})

app.get('/login', (req,res) =>{
    res.send('<h1>plz login maruf </h1>')
})
app.get('/cp',(req,res)=>{
   // res.send('<h3>plz pratices regular</h3>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})