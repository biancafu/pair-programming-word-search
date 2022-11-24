const transpose = function (matrix) {
  let results = [];
  const columns = matrix[0].length;
  for (const array of matrix) {
    for (let j = 0; j < columns; j++) {
      if (results[j] === undefined) results.push([]);
      results[j].push(array[j]);
    }
  }
  return results;
};
const checkWordHorizontally = (check, word) => {
  for (l of check) {
    if (l.includes(word) || l.includes(reverse(word))) {
      return true;
    }
  }
  return false;
}
//diagonally
const checkPoints = (arr) => {
  let results = [];
  for(let i = 0; i < arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      if (i===0 && j===0) {
        results.push([i,j]);
      } else if (i === 0 || j === 0) {
        results.push([i,j]);
      }
    }
  }
  return results;
}

const reverse = (string) => {
  let re = string.split("").reverse();
  return re.join("");
}
const checkDiagonal = (arr, word) => {
  for (const check of checkPoints(arr)) {
    let i = check[0];
    let j = check[1];
    let string = "";
    while (i < arr.length && j < arr[0].length) {
      string += arr[i][j];
      i++;
      j++;
    }
    if (string.includes(word) || string.includes(reverse(word))) return true;
  }
  return false;
}
const mirror = (arr) => {
  let results = [];
  for (const subarr of arr) {
    results.push(subarr.reverse())
  }
  console.log(results);
  return results;
}

const wordSearch = (letters, word) => {
  if (letters === undefined || word === undefined) return false;
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const diagonal = checkDiagonal(letters, word);
  const diagonal2 = checkDiagonal(mirror(letters), word);
  return checkWordHorizontally(horizontalJoin, word) || checkWordHorizontally(verticalJoin, word) || diagonal || diagonal2;
}
module.exports = wordSearch