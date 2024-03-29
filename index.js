// console.log("Welcome to Expressjs");
import express from 'express'
// create an express app
const app = express()
const port = +process.env.PORT || 4000

// Router
app.get('/',(req, res)=>{
// res.status(200).json({
//   msg: 'You\ are home ' 
// })
res.json({
    status: res.statusCode,
    msg: 'You\'re home'
})
})

app.get('/about',(req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About page'  
    }) 
})

app.all('*',(req, res)=>{
   res.json({
    status: 404,
    msg: '404 page'
   })
    })

app.listen(port)
  
