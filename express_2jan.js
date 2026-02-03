const express=require('express');
const app=express();

app.use(express.json());
const student=[
    {name:"himanhsu",id:1,branch:"cse"},
    {name:"dabbu",id:2,branch:"cse"},
    {name:"lucky",id:3,branch:"cse"}

];

app.get('/',(req,res)=>{
    res.send("hoame page ")
});


app.post("/student/add",async(req,res)=>{
    const data=req.body;
    student.push({name:data.name,id:data.id,branch:data.branch});
    res.send(student);
});
app.get('/student/add',(req,res)=>{
    res.send(students);
});
app.listen(5000,()=>{
    console.log("server started at 5000");
})