/* iterating through one of the array
O(n)
O(n^2)
result = []
for each element e of a do:
  search for e in b
  if e is found in b
     add e to the result array if it isn't already there
return result 

===============================

initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
convert the Set to an array and return

*/



function intersection(a, b) {
    const map = new Map();
    const resultSet = new Set();

    // Store elements of 'a' in the Map
    for (const e of a) {
        // use two arguments because Map() use key value pairs
        map.set(e, true);
    }

    // Check elements of 'b' in the Map and add them to the Set
    for (const e of b) {
        if (map.has(e)) {
            resultSet.add(e);
        }
    }

    // convert the set into a an array
    return [...resultSet];
}



module.exports = intersection;
