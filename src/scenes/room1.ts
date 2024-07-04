import { KaboomCtx } from "kaboom";

export const room1 = (kaboom: KaboomCtx) => {
  kaboom.add([
    kaboom.text("Hello, World!", { font: "glyphmesss" }),
    kaboom.pos(100, 100),
  ]);
};
