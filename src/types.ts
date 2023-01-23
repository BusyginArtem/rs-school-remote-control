export enum COMMANDS {
  MOUSE_UP = "mouse_up",
  MOUSE_DOWN = "mouse_down",
  MOUSE_LEFT = "mouse_left",
  MOUSE_RIGHT = "mouse_right",
  MOUSE_POSITION = "mouse_position",
  DRAW_CIRCLE = "draw_circle",
  DRAW_RECTANGLE = "draw_rectangle",
  DRAW_SQUARE = "draw_square",
  PRINT_SCRN = "prnt_scrn",
}

export interface ICommands {
  [COMMANDS.MOUSE_UP]: (args: number[]) => void;
  [COMMANDS.MOUSE_DOWN]: (args: number[]) => void;
  [COMMANDS.MOUSE_LEFT]: (args: number[]) => void;
  [COMMANDS.MOUSE_RIGHT]: (args: number[]) => void;
  [COMMANDS.MOUSE_POSITION]: () => Promise<string>;
  [COMMANDS.DRAW_CIRCLE]: (args: number[]) => void;
  [COMMANDS.DRAW_RECTANGLE]: (args: number[]) => void;
  [COMMANDS.DRAW_SQUARE]: (args: number[]) => void;
  [COMMANDS.PRINT_SCRN]: () => void;
}
