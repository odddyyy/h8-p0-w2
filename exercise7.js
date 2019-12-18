//Menyusun barisan bintang
console.log(`Menyusun barisan bintang`);
var rows1 = 5;
for (i=0;i<rows1;i++){
    console.log(`*`)
}
console.log();

//Menyusun Barisan Bintang Dengan Nested Looping
console.log(`Menyusun Barisan Bintang Dengan Nested Looping`);
var rows2 = 5;
var display = ``;
for(i=0;i<rows2;i++){
    for(x=0;x<rows2;x++){
        display += `*`;
    }
    console.log(display);
    display = ``;
}
console.log();

//Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log(`Menyusun Barisan Tangga Bintang Dengan Nested Looping`);
var rows3 = 5;
var display1 = ``;

for(i=0;i<rows3;i++){
    for(x=0;x<=i;x++){
        display1 += `*`;
    }
    console.log(display1);
    display1  =``;
}
