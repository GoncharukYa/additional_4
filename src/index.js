module.exports = function multiply(first, second) {
  let arrFirst = first.split('').reverse();
  let arrSecond = second.split('').reverse();
  let length = arrFirst.length + arrSecond.length + 1;
  let product = [];

  for (let i = 0; i < arrFirst.length; i++) {
    for (let j = 0, memory = 0; j < arrSecond.length || memory; j++) {
      let current = (product[i+j] ? product[i+j] : 0) + arrFirst[i] *(j < arrSecond.length ? arrSecond[j] : 0) + memory;
      product[i + j] = current % 10;
      memory = Math.floor(current / 10);
    }
  }
  while (!(product[length - 1])) {
    length--;
  }
  product.length = length;
  return product.reverse().join('');
}
