const wordSearch = (letters, word) => { 
  if(letters === undefined || word === undefined) return false;
  if(letters.length === 0) {
    return false;
  }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    return checkWordHorizontally(horizontalJoin,word) || checkWordHorizontally(verticalJoin, word);
}

//transpose and check again.
const transpose = function (matrix) {
  // Put your solution here 
  let results = [];
  const columns = matrix[0].length;

  for (const array of matrix) {
    for(let j = 0; j<columns;j++) {
      if (results[j] === undefined) results.push([]);
      results[j].push(array[j]);
    }
  }
  return results;
};
const checkWordHorizontally = (check,word) => {
  for (l of check) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
}


//backwards -> reverse string and run again

//diagonally -> 
module.exports = wordSearch