require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData ={
    "login":"AkashYadav",
    "id":22331123,
    "node_id":"MCSDFSDFSDF",
    "avatar_url":"ABCD",
    "gravatar_id":"",
}

app.get('/github',(req,res)=>{
res.json(githubData)
})


app.get('/', (req, res) => {
    res.send('Hello World Akash Yadav!')
})

app.get('/Instagram',(req,res)=>{
    res.send('mr.akash_000')
})
app.get('/login',(req,res)=>{
    res.send("<h1>please login in app</h1>")
})


app.get('/youtube',(req ,res)=>{
    res.send("<h2>Akash Yadav</h2>")

})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})