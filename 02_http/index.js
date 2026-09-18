// http
const { log } = require('console')
const http = require('http')
const { join } = require('path')
const { json } = require('stream/consumers')

const firstServer = http.createServer((req, res) => {
        //kya kya allowed hai 
        res.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:5173"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

     if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
    }











    if (req.method === "GET" && req.url === "/products") {
        
        res.statusCode=200
        res.end("i am sending some product")
    }
    
    
    
    
    
    
    
    
    
    
    
    

    //


    // email
    // password
   
    
    // else if(req.method==="POST"&&req.url === "/login"){
    //     const data=''
    //     res.on("data",(chunk)=>{
    //         data=data+chunk.toString()

    //     })


        
    //     const actualData=JSON.parse(data)
    //     console.log(actualData.email)
    //     console.log(actualData.password)
    //     res.end({email:actualData.email,password:actualData.password})



        
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    else{
        res.statusCode===404
        res.end("not found")
    }
})

firstServer.listen(3000,()=>{
     console.log("i am listening ")
})