exports.min = function min (array) {
if(!array || array.length == 0) {
return 0;
}

array.sort(function(x,y) {
      return x-y;
    });

return array[0];
  //return 0;
}

exports.max = function max (array) {

if(!array || array.length ==0) {
return 0;
}

array.sort((y,x) => y-x);

return array[array.length - 1];
  //return 0;
}

exports.avg = function avg (array) {
if(!array || array.length == 0) {
return 0;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

return array.reduce(reducer) / array.length;
  //return 0;
}
