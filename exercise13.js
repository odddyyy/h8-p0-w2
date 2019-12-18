function xo(str) {
  // you can only write your code here!
  countX = 0;
  countO = 0;
  for (i=0 ; i<str.length ; i++){
    if(str.charAt(i) === `x`){
        countX +=1;
    }
    else{
        countO +=1;
    }
  }
  if(countX === countO){
      return true;
  }
  else{
      return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true