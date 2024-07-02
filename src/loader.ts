import kaboom from "kaboom";

export const SCALE = 2;

export const k = kaboom({
  width: 640 * SCALE,
  height: 360 * SCALE,
  scale: SCALE,
  letterbox: true,
  global: false,
});

k.loadFont("glyphmesss", "./assets/glyphmesss.ttf");

k.loadSprite("player", "./assets/sprites/u.png", {
  sliceX: 8,
  sliceY: 9,
  anims: {
    idle: { from: 0, to: 7, loop: true },
    run: { from: 8, to: 13, loop: true },
    jump: { from: 51, to: 51, loop: true },
    fall: { from: 54, to: 54, loop: true },
    explode: { from: 64, to: 69 },
    attack: { from: 24, to: 28, speed: 16 },
  },
});

k.loadSprite("drone", "./assets/sprites/dr0ne.png", {
  sliceX: 6,
  sliceY: 3,
  anims: {
    flying: { from: 0, to: 3, loop: true },
    attack: { from: 6, to: 11, loop: true },
    explode: { from: 12, to: 17 },
  },
});
