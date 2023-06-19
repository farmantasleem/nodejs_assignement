const http=require("http");
const men = require("./men.json")
const womenData = require("./women.json")

http.createServer(function(req,res){

    if(req.url=="/"){
        res.write("Welcome to Men & Women Dummy Data")
    }else if(req.url=="/men"){
        res.end(JSON.stringify(men))
    }else if(req.url=="/women"){
        res.end(JSON.stringify(womenData))
    }else{
        res.write("404 Not Found")
    }

    res.end()
}).listen(8081)

