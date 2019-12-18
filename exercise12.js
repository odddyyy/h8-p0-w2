function konversiMenit(menit) {
  // you can only write your code here!
  var x = menit;
  var jam = x/60;
  var displayJam = Math.floor(jam);
  var displayMinute = x%60;

  if (displayMinute<10){
    displayMinute = `0` + displayMinute;
  }
  return displayJam + `:` + displayMinute;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00