var http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    if(req.url=='/'){
        res.write('Hello World!')
    }else if(req.url=='/insert'){
        res.write('insert')
    }else if(req.url=='/select'){
        res.write('select')
    }else if(req.url=='/update'){
        res.write('update')
    }else if(req.url=='/delete'){
        res.write('delete')
    }
    res.end()
}).listen(8085)
