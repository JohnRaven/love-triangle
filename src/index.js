/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let x, y, z, count = 0;

  for (let i = 0; i < preferences.length; i++) {
    x = preferences[i];
    y = preferences[x - 1];
    z = preferences[y - 1];
    if (x != y && y != z && z == (i+1)) {
      count++;
    }
  }
  return count/3;
};
