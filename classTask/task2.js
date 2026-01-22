const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true);
    switch(myUrl.pathname)
    {
        case '/':res.end("<h1>Home page</h2>");break;
        case '/about':res.end("<h1>About page</h2>");break;
        case '/user':

            const user={
                name:myUrl.query.name ||"name not given",
                age:myUrl.query.age || "Age not given"
            };
            res.end(JSON.stringify(user));
             break;
        default:
            res.end("404 page not found");

    }      

})

server.listen(3000,()=>{
    console.log("server connected at 3000");
})