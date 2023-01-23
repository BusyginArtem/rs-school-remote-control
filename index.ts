import * as dotenv from "dotenv";
import { WebSocketServer } from "ws";
//
import { httpServer } from "./src/http_server/index.js";
import handleCommands from "./src/cmd/handleCommands.js";

dotenv.config();

const HTTP_PORT = process.env.HTTP_PORT;
const WS_PORT = Number(process.env.WS_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", (ws, req) => {
  const client = req.headers["origin"];

  console.log(`Client ${client} connected!`);

  console.log(`WS server on the ${WS_PORT} port!`);

  handleCommands(ws);

  ws.on("close", () => {
    ws.close();
    console.log(`Client ${client} disconnected!`);
  });
});
