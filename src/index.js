module.exports = function multiply(first, second) {
  if (first.length > second.length) {
    let arrFirst = first.split(' ');
    //let arrSecond = second.split(' ');
  } else {
    let arrFirst = second.split('');
    //let arrSecond = first.split('');
  }
  let result = [];
  let memory = 0;
  for (let i = arrSecond.length - 1; i >= 0; i--) {
    let product = arrFirst * arrSecond + memory;
    result.push(product % 10);
    memory = product / 10;
  }




  return String(product.reverse());
}
