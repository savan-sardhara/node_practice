
const fs=require('fs')
// const express=require('express')
var http = require('http')


let mess=[]
fs.readFile(`${__dirname}/message.json`,"utf8",(err,data)=>{
    if(err){
        console.error("failed to get error ",err);
    }else{
        mess=JSON.parse(data)
    }
});

const server=http.createServer( (req, res) => {
    if(req.url=='/' && req.method=='get'){
        res.end("homepage ")
    }
    else if(req.url=="/mystry"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let rnd=Math.floor(Math.random()*mess.length)
        let mes=mess[rnd]
        res.end(JSON.stringify({"message":mes}));
    }else{

        res.end("opps page not found");
    }


}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');