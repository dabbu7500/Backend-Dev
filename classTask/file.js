const fs=require("fs");
// fs.writeFileSync("./example.txt","hello himanshu");
// const result=fs.readFileSync("./unknown.txt","utf-8");
// console.log(result);

fs.readFile('./unknown.txt',"utf-8",(err,result)=>{
    if(err){
        console.log("error found ",err);

    }
    else{
        console.log("file content",result);
    }
});
