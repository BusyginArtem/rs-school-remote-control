import { WebSocketServer } from "ws";
import { httpServer } from "./src/http_server/index.js";
import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
//   console.log("Ws", ws);
  wss.on("message", function message(data) {
    console.log("received: %s", data);
  });
  
  ws.send("hello");
});
