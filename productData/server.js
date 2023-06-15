const http=require("http");

http.createServer(function(req,res){
    if(req.url=="/"){
        res.write("Home Page")
    }else if(req.url=="/about"){
        res.write("About Page")
    }else if(req.url=="/product"){
        res.write("Product Page")
    }else{
        res.write("404 Not Found")
    }

    res.end()
}).listen(8081)

