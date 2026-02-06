const express=require("express");
const app=express();

app.use(express.json());

let students=[
    {id:1,name:"dabbu",marks:90,city:"mathura",status:"Active"},
    {id:2,name:"himanshu",marks:70,city:"tundla",status:"Inactive"}
];

//view students 

app.get('/students',(req,res)=>{
    res.json(students);
});

// patch - update any ione field
// req = http local host ,params=students

// fetching ke time :id ke badle id dalenge ham 1,2 ...\
// :id is dynamic value (1,2,3,4,5)
app.patch('/students/:id',(req,res)=>{
    const id=req.params.id; // store value from the path
    const update=req.body;
    const student=students.find(
        (s)=>s.id==id
    );
    if(student)
    {
        //apply partial update 
        Object.assign(student,update);
        res.json({
            message:"student updsted successfully",
            student
        });
        
    }else{
        res.status(400).json("student not found ");

    }
});

// chek stsus using patch request

app.patch('/students/:id/status',(req,res)=>{
    const status=req.body;
    const id=req.params.id;
    const student=students.find(
        (s)=>s.id==id
    );
    if(student){
        if(student.status!="Active" && student.status!="Inactive"){
            res.status(400).json("user must be Active or Inactive");
        }else{
            student.status=status;
            res.json({message:"status updates succesfully",student});
        }
    }else{
        res.status(400).json("student not found");
    }
})


app.listen(8000,()=>{
    console.log("server started at 8000");
});

