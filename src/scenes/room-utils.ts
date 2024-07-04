import { GameObj, KaboomCtx, Vec2 } from "kaboom";
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
    if (collider.polygon) {
      const coordinates: Vec2[] = [];

      for (const point of collider.polygon) {
        coordinates.push(kaboom.vec2(point.x, point.y));
      }

      map.add([
        kaboom.pos(collider.x, collider.y),
        kaboom.area({
          shape: new kaboom.Polygon(coordinates),
          collisionIgnore: ["collider"],
        }),
        "collider",
        collider.type,
      ]);
      continue;
    }

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
