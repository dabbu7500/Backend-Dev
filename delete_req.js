const express=require('express');
const app=express();

app.use(express.json());

let students=[
    {id:1,name:"dabbu",marks:90,city:"mathura"},
    {id:2,name:"himanshu",marks:70,city:"tundla"},
    {id:3,name:"himanshu1",marks:75,city:"tundla"},
    {id:4,name:"himanshu2",marks:45,city:"tundla"},
    {id:5,name:"himanshu3",marks:60,city:"tundla"}
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
    //splice = remove/delete/make the array  in chunks  (1==count )
    // deletedStudent array me lega delete hone wale students

    // const deletedStudent=students.splice(index,2);

    // res.json({message:"student delte successfully",deletedStudent}); //ye sare deleted students dedega arrya me 

    // res.json({message:"student delete successfully",deletedStudent}); // ye buss ek hi dega 0 index wala


    
    // task to delte students who have marks 70 or above 
    console.log(index)
    if(students[index].marks<70){
        const deletedStudent =students.splice(index,1);
        res.json({Message:"student delte successfully",deletedStudent:deletedStudent[0]});
    }
    else{
        res.status(400).json("Studnet can't delted marks of student is 70 or above ");
    }
});
app.listen(8000,()=>{
    console.log("Server started at 8000");
});