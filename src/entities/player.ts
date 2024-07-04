import kaboom from "../loader";

export const makePlayer = () => {
  return kaboom.make([
    kaboom.pos(),
    kaboom.sprite("player"),
    kaboom.area({
      shape: new kaboom.Rect(kaboom.vec2(0, 18), 12, 12),
    }),
    kaboom.anchor("center"),
    kaboom.body({
      mass: 100,
      jumpForce: 320,
    }),
    kaboom.doubleJump(),
    {},
  ]);
};
