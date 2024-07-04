import { GameObj, KaboomCtx } from "kaboom";
import { TiledObject } from "tiled-types";

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

export const setMapColliders = (
  kaboom: KaboomCtx,
  map: GameObj,
  colliders: TiledObject[]
) => {
  for (const collider of colliders) {
    map.add([
      kaboom.pos(collider.x, collider.y),
      kaboom.area({
        shape: new kaboom.Rect(kaboom.vec2(0), collider.width, collider.height),
        collisionIgnore: ["collider"],
      }),
      kaboom.body({ isStatic: true }),
      "collider",
      collider.type,
    ]);
  }
};
