import http from "http";
import fs from "fs";
import {Server} from "socket.io";

const server =http.createServer((req,res)=> {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(fs.readFileSync("./index.html", "utf-8"));
  res.end();
});

// const io = new Server(server);
// console.log(io)
// 소켓 서버를 http에 연결
const io = new Server(server);
// !연결 되면
io.on("connection", (socket)=> {
  console.log("유저가 접속했다");
  //! 메시지 받으면
  socket.on("send Message",(data)=> {
    console.log(data);
    io.emit("send Message", data);
  });
  //! 연결 끊기면
  socket.on("discconnect",()=> {
    console.log("유저가 탈주했다.");
  });
});
server.listen(8080, (err)=> {
  if(err) {
    console.log(err);
  }
  console.log("서버 생성")
})