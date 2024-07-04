import kaboom from "./loader";
import { room1, room2 } from "./scenes";

kaboom.scene("room1", () => {
  room1(kaboom);
});

kaboom.scene("room2", () => {
  room2(kaboom);
});

kaboom.scene("intro", () => {});

kaboom.go("intro");
