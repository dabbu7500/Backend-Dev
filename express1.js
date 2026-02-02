const express=require('express');
const app=express();

app.get('/',(req,res)=>{
        res.send("home page ");
});
app.get("/attendence",(res,req)=>{
    const present=req.query.present;
    if(present==="yes")
    {
        res.send(req.query.name+"is present");
    }
    else{
        res.send(req.query.name+"is Absent");
    }
});
const port=5000;
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});