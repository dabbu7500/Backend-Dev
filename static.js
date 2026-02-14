const express=require('express');
const app=express();

//serve files from 'public' directory

//absolut path: CD\USER\DESKTOP\FILENAME

//relative path: ./public

// const staticPath=__dirname+"/public";
//or 
// const fullPath=Path2D.join()

app.use(express.static("public"));
app.listen(8000,()=>console.log("Server started"));
