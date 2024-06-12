import Ship from "../modules/ship";

describe("Ship", () => {
  test("should have a size as given in parameter", () => {
    const newShip = Ship(5);
    expect(newShip.size).toBe(5);
  });

  test("should hit function increase hits of ship", () => {
    const newShip = Ship(4);
    newShip.hit();
    newShip.hit();
    expect(newShip.getHits()).toBe(2);
  });

  test("should return correct value when isSunk called", () => {
    const newShip = Ship(2);
    expect(newShip.isSunk()).toBe(false);
    newShip.hit();
    expect(newShip.isSunk()).toBe(false);
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});
