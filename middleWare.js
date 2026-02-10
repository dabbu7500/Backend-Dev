// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//     console.log("middleWare1");
//     next(); //jab tak next call nahi hoga to cliet side se req nahi jayegi

// });
// app.use((req,res,next)=>{
//     console.log("middleWare2 ");
//     next();
// });

// app.get("/test",(req,res)=>{
//     res.send("route executed");
// });

// app.listen(5000,()=>console.log("serbver started at 5000"));

//application-level middle ware 

// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//     console.log("Request Url :",req.url);
//     console.log("Request Method :",req.method);
//     next();
// });

// //built in MiddleWare

// app.use(express.json());
// app.use(express.urlencoded({extended:true})); // used for req.body /params wagera 

// app.get("/home",(Req,res)=>{
//     res.send("Home page");
// });

// //router level MiddleWare

// const checkLogin=(req,res,next)=>{
//     const isLogin=false;
//     if(!isLogin){
//         return res.status(401).send("please login first");
//     }
//     next();

// };
// app.get("/deshboard",checkLogin,(req,res)=>{
//     res.send("welcome to dashboard");
// })

// //authentication middleware

// const authMiddleWare=(req,res,next)=>{
//     const token=req.headers.authorization;
//     if(!token){
//         return res.status(403).json({mesaage:"token required"});
//     }
//     if(token!="dabbu"){ // dabbu is secret token

//         return res.status(401).json({mesaage:"Invalid token"});
//     }
//     next();

// }
// app.get("/profile",authMiddleWare,(req,res)=>{
//     res.json({message:"Profile data"});
// })

// //error-handling middleWare

// app.get("/error",(req,res)=>{
//     throw new Error("something went wrong");
// });
// app.use((err,req,res,next)=>{
//     console.error("Error middleWare = :",err.message);
//     res.status(500).json({message:"Internal Server Error"});
// })




// app.listen(8000,()=>console.log("serbver started at 8000"));


// course and morgan

const express=require("express");
const app=express();

const cors=require('cors');

app.use(cors());

app.get("/data",(req,res)=>{
    res.json({message:"CORS working"});
});
app.listen(8000,()=>console.log("serbver started at 8000"));


//custom cors 
//frontend allow

app.use(
    cors({
        origin:"http://localhost:5173" //ham react ka isi pr chalate h 
    })
);

//multiple frontend allow

const allowedOrigins=["http://localhost:5173","http://localhost:3001"];

app.use(
    cors({
        origin:allowedOrigins
    })
);
