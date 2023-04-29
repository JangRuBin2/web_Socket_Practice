import http from "http";

const server =http.createServer((req,res)=> {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end();
});
server.listen(8080, (err)=> {
  if(err) {
    console.log(err);
  }
  console.log("서버 생성")
})