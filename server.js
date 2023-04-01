import http from "http";
import fs from "fs";
import WebSocket from "ws";
const app = http.createServer((request,response)=> {
    // let filePath = '.' + request.url;
    // if(filePath == './') {
    //     filePath = './index.html';
    // }
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html')
    response.end(fs.readFileSync("./index.html"))
   
});


app.listen(8080);

const socket = new WebSocket.Server({port:8081}
    
);
socket.on('connection', (ws,req)=> {
    ws.on('message',(msg)=> {
        console.log(msg);
    })
})


