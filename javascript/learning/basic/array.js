const array = [1, 2, 3]

// map
const mapArray = array.map((num) => num ** 2)
console.log(mapArray) // [1,4,9]

// filter
const filterArray = array.filter((num) => num > 2)
console.log(filterArray) // [3]

// reduce
const reduceArray = array.reduce((acc, num) => {
  return acc + num
}, 10)
console.log(reduceArray) // 16
