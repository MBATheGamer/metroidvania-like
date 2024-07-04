import { KaboomCtx } from "kaboom";
import TiledMap, { TiledLayerObjectgroup, TiledObject } from "tiled-types";
import { setBackgroundColor, setMapColliders } from "./room-utils";

export const room1 = (kaboom: KaboomCtx, data: TiledMap) => {
  setBackgroundColor(kaboom, 0xa2aed5);

  const layers = data.layers;

  const map = kaboom.add([kaboom.pos(0, 0), kaboom.sprite("room1")]);

  const colliders: TiledObject[] = [];

  for (const layer of layers) {
    if (layer.name === "colliders") {
      colliders.push(...(layer as TiledLayerObjectgroup).objects);
      break;
    }
  }

  setMapColliders(kaboom, map, colliders);
};
