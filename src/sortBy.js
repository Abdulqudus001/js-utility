/**
 * Sorts an array of objects
 * @param {object} array The array to be sorted
 * @param {string} sortby The parameter to sort the array with
 * @returns {object} Returns the sorted array
 * 
 */
function sortBy (array, sortby) {
 function _compare(a,b) {
  if (a[sortby] < b[sortby])
    return -1;
  if (a[sortby] > b[sortby])
    return 1;
  return 0;
}
 array.sort(_compare);
 return array;
}

module.exports = sortBy;