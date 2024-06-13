import Ship from "./ship";

export default function Gameboard() {
  const gameboardTable = {};
  const ships = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrol: Ship(2),
  };

  const stringCharShift = 96;
  for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 9; j++) {
      const coordinateLetter = String.fromCharCode(i + stringCharShift);
      gameboardTable[`${coordinateLetter}${j}`] = {
        coord: `${coordinateLetter}${j}`,
        isFreeToPlace: true,
        isHittable: true,
        isNearShip: false,
      };
    }
  }

  return {
    placeShip(coord, direction = "vertical", shipType) {
      if (!gameboardTable[coord].isFreeToPlace) new Error("ss");
      else {
        if (direction === "vertical" && coord[0].charCodeAt()) {
        }
      }
    },
    getCoordinate() {},
    ships,
  };
}
