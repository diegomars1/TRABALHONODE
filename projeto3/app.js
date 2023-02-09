var http = require('http');

http.createServer(function(req,res){
    res.write("Ola mundo!!");
    res.end();
})

.listen(8080);