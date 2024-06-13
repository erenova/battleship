import Gameboard from "../modules/gameboard";

describe("Gameboard Function", () => {
  test("should place ship to specified coordinate", () => {
    const newGameboard = Gameboard();
    newGameboard.placeShip("f5", "vertical", newGameboard.ships.carrier);
    expect(newGameboard.getCoordinate("f5")).toMatchObject({ coord: "f5" });
  });
});
