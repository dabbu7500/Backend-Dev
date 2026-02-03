const express=require('express');
const app=express();
app.use(express.json());
// const loginData={userName:"",password:""
// }; 
//loginData ===credentials
const loginData=[
    {userName:"dabbu",password:"9521"},
    {userName:"fghjk",password:"9851"},
    {userName:"vbghjk",password:"98541"},
]
app.get('/',(req,res)=>{
    res.send('home page');
});
app.post("/auth/register",(req,res)=>{
    // loginData.userName=req.body.userName;  
    // loginData.password=req.body.password;

    // check if user is already exist or not 
    const existingUser=loginData.find(
        (cred)=>cred.userName==req.body.userName
    );
    if(existingUser)
    {
        return res.status(400).send("user already exist");
    }
    loginData.push(req.body);
    res.send("register succesfull");
});

app.post("/auth/login",(req,res)=>{
    const {userName,password}=req.body;
    const user=loginData.find(
        (cred)=>cred.userName==userName && cred.password==password
    );

    if(user)
    {
        res.send({message:"login succesfull"});
        console.log(user);
    }else{
        res.send("invalid cridential");
    }
})
app.listen(5000,()=>{
    console.log("server started at 5000");
});