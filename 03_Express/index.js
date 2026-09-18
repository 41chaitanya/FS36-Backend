// express
const express=require("express")

const app=express()

app.get("/users",(req,res)=>{
    res.send("hello")

})
app.listen(3000,()=>{
    console.log("i am listening")
})


