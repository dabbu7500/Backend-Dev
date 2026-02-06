const express=require('express');
const app=express();

app.use(express.json());

let students=[
    {id:1,name:"dabbu",marks:90,city:"mathura"},
    {id:2,name:"himanshu",marks:70,city:"tundla"},
    {id:3,name:"himanshu",marks:70,city:"tundla"},
    {id:4,name:"himanshu",marks:70,city:"tundla"},
    {id:5,name:"himanshu",marks:70,city:"tundla"}
];

app.get('/students',(req,res)=>{
    res.json(students);
});

// remove students by id 
app.delete('/students/:id',(req,res)=>{
    const id=req.params.id;
    const index=students.findIndex(
        (S)=>S.id==id
    );
    if(index==-1){
        return res.status(400).json({message:"student not found"});
    }
    //splice = add/remove (1==count )
    const deletedStudent=students.splice(index,2);
    res.json({message:"student delte successfully",deletedStudent:deletedStudent[0]});
});
app.listen(8000,()=>{
    console.log("Server started at 8000");
})