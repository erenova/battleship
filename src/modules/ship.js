export default function Ship(size) {
  let hits = 0;
  return {
    size,
    hit() {
      hits += 1;
    },
    getHits() {
      return hits;
    },
    isSunk() {
      return hits >= size;
    },
    isPlaced: false,
  };
}
