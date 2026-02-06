const express = require('express');
const app = express();

app.use(express.json());

let cridentials = [
    { email: "dabbu@gmail.com", password: "12345678" },
    { email: "manish@gmail.com", password: "741" }

];

app.get('/auth/users', (req, res) => {
    res.json({ message: "user fetched succesfully", cridentials });
});

//reset paassword route

app.put('/auth/reset', (req, res) => {
    const { email, password, newPassword } = req.body;
    // find user 

    const user = cridentials.find(
        (cred) => cred.email == email && cred.password == password
    );

    if (user) {
        user.password=newPassword;
        res.json({message:"password updated succesfuly",user});
    } else {
        res.status(400).json({ message: "invalid email or password" });
    }
});

//forgot password

app.put('/auth/forget',(req,res)=>{
    const {email,newPassword}=req.body;
    const user=cridentials.find(
        (cred)=>cred.email==email
   );
   if(user){
        user.password=newPassword;
        res.json({message:"password changed succesfully ",user});

   }else{
    res.status(400).json({message:"invalid user "});
   }
});

//change email using password 
app.put('/auth/resetEmail',(req,res)=>{
    const {email,password,newEmail}=req.body;
    const user=cridentials.find(
        (cred)=>cred.password==password
    );
    if(user)
    {
        user.email=newEmail;
        res.json({mesage:"email changed"});
    }else{
        res.status(400).json({message:"Invalid cridentials"});
    }

});


app.listen(8000,()=>{
    console.log("servaer started at 8000");
});