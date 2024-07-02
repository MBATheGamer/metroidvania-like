import kaboom from "kaboom";

export const SCALE = 2;

export const k = kaboom({
  width: 640 * SCALE,
  height: 360 * SCALE,
  scale: SCALE,
  letterbox: true,
  global: false,
});
