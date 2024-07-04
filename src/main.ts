import kaboom from "./loader";
import { room1, room2 } from "./scenes";

const main = async () => {
  const room1Data = await (await fetch("./maps/room1.json")).json();

  const room2Data = await (await fetch("./maps/room2.json")).json();

  kaboom.scene("room1", () => {
    room1(kaboom, room1Data);
  });

  kaboom.scene("room2", () => {
    room2(kaboom, room2Data);
  });
};

main();

kaboom.scene("intro", () => {
  kaboom.onKeyPress("enter", () => {
    kaboom.go("room1");
  });
});

kaboom.go("intro");
