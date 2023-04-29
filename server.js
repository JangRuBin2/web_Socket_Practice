import http from "http";
import fs from "fs";
import io from "socket.io";

const server =http.createServer((req,res)=> {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(fs.readFileSync("./index.html", "utf-8"));
  res.end();
});

// const io = new Server(server);
// console.log(io)
// 소켓 서버를 http에 연결
io.listen(server);
server.listen(8080, (err)=> {
  if(err) {
    console.log(err);
  }
  console.log("서버 생성")
})