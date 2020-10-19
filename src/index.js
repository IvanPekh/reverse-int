module.exports = function reverse (n) {
let IntToStr = Math.abs(n).toString();
let i = IntToStr.length-1;
let result=" ";
    
    while (i >= 0) {
          result += IntToStr[i];
          i = i - 1;
    }

return result;
}
