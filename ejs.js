const express=require('express');
const app=express();
//built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));//url se jo data ayega use string ki baje object me convert krta h 

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
});
app.listen(8000,()=>console.log("Server started at 8000"));



