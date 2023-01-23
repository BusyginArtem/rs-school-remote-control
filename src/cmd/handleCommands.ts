import { createWebSocketStream, WebSocket } from "ws";
//
import { ICommands, COMMANDS } from "../types.js";
import commands from "./index.js";

const COMMAND_HANDLERS: ICommands = {
  [COMMANDS.MOUSE_UP]: commands.mouseUp,
  [COMMANDS.MOUSE_DOWN]: commands.mouseDown,
  [COMMANDS.MOUSE_LEFT]: commands.mouseLeft,
  [COMMANDS.MOUSE_RIGHT]: commands.mouseRight,
  [COMMANDS.MOUSE_POSITION]: commands.mousePosition,
  [COMMANDS.DRAW_CIRCLE]: commands.drawCircle,
  [COMMANDS.DRAW_RECTANGLE]: commands.drawRectangle,
  [COMMANDS.DRAW_SQUARE]: commands.drawSquare,
  [COMMANDS.PRINT_SCRN]: commands.printScreen,
};

const handleCommands = async (ws: WebSocket) => {
  try {
    const wsStream = createWebSocketStream(ws, {
      encoding: "utf8",
      decodeStrings: false,
    });

    wsStream.on("data", async (message) => {
      const [cmd, ...args] = message.split(" ");

      const result = await COMMAND_HANDLERS[cmd as keyof ICommands](args);

      wsStream.write(`${cmd}${result ? ` ${result}` : ""}`);

      console.log(`Executed: ${message}`);
    });
  } catch (error) {
    ws.send(`Error: Something went wrong!`);
  }
};

export default handleCommands;
