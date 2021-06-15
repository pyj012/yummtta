//imports
const express=require('express')
const app=express()
const port=8080

//static files
app.use(express.static('public'))
app.use(express.static('./img'))
app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html')
})
app.get('/about',function(req,res){
    res.sendfile(__dirname+'/about.html')
})

//listen on port 3000
app.listen(port,()=> console.info(`listening on port${port}`))