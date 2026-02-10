// const fs=require('fs');
// const http=require('http');
// const url=require('url');

// const myServer=http.createServer((req,res)=>{
    
    
//     const myUrl=url.parse(req.url,true);
//     switch(myUrl.pathname){
//         case '/':
//             console.log(req.method);
//             if(req.method==="GET")
//                 res.end("home page");
//             break;
//         case "/about":
//                console.log(req.method);
//             if(req.method==="GET")
//                 res.end("about page");
//             break;
//         case "/signup":
//                         console.log(req.method);

//             if(req.method==="GET")
//                 res.end("sign up page ");
//             if(req.method==="POST")
//                 res.end("success");
//             break;
//         default:
//             console.log(req.method);
//             res.end("404 papge not found");
            
//     }
// })
// myServer.listen(5000,()=>{
//     console.log("server started ");
// })



// express

const express=require('express');
// const http=require("http");

const app=express();


app.get('/',(req,res)=>{
    return res.send("home page");
});

app.get('/about',(req,res)=>{
    
    //ese nahi dega name wagera kyu ki multiple name hunge to nahi dega ye 
    
    // const name=req.query.name;
    // const age=req.query.age;
    //  return res.send(`name : ${name} \n age :${age}`);

    //ese dedega ye output 
    res.send("about page \n"+"name ="+req.query.name+"\n"+"age ="+req.query.age);


})
// const myServer=http.createServer(app);
// myServer.listen(5000,()=>{
//     console.log("server started");
// })

app.listen(5000,()=>{
    console.log("server started");
})