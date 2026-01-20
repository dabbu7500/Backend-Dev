const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
    let responseText="";
    switch(req.url){
        case '/':
            responseText="this is a home page ";
            res.end("Home page");
            break;
        case '/about':
            responseText="this is a about page ";
            res.end("about page");
            break;
        case '/contect':
            responseText="this is a contect page ";
            res.end("contect page");
            break;
        default:
            res.end("status 404 not found");
    }
    const text=`Date = ${Date.now()} , request = ${req.url} ,text = ${responseText} \n`;
    fs.appendFile("log.txt",text,(err)=>{
        if(err)
        {
                    console.log("log not added"); 

        }
    })
})

myServer.listen(3000,()=>{
    console.log("server startd at 3000");
})
 