import { KaboomCtx } from "kaboom";

export const setBackgroundColor = (
  kaboom: KaboomCtx,
  color: string | number
) => {
  kaboom.add([
    kaboom.rect(kaboom.width(), kaboom.height()),
    kaboom.color(kaboom.Color.fromHex(color)),
    kaboom.fixed(),
  ]);
};
