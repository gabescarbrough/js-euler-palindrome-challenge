'use strict';

const reversed = function(num){
  num = num.toString().split('').reverse().join('');
  return Number(num);
};

const convertToBinary = function(num) {
  num = Number((num).toString(2));
  return num;
};

const palindromeSum = function(){

  let sum = 0;

  for (var i = 0; i < 1000000; i++) {
    if (i === reversed(i) && convertToBinary(i) === reversed(convertToBinary(i))) {
      console.log(i);
      sum += i;
    }
  } return sum;
};

module.exports = () => {
  return true;
};
