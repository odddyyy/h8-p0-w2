//Melakukan Looping Menggunakan While
console.log(`Looping Pertama`);
var i = 2;
while(i<=20){
    console.log(`${i} - I love coding`);
    i+=2;
}

console.log(`Looping Kedua`);
var x = 20;
while(x>0){
    console.log(`${x} - I will become full-stack developer`);
    x-=2;
}

console.log();

//Melakukan Looping Menggunakan For
console.log(`Looping Pertama`);
for (i = 1; i<=20; i++){
    console.log(`${i} - I love coding`);
}

console.log(`Looping Kedua`);
for (i = 20; i>0; i--){
    console.log(`${i} - I will become full-stack developer`);
}

console.log();

//Angka Ganjil dan Genap
for(i=1;i<=100;i++){
    if(i%2 === 0){
        console.log(`${i} - Genap`);
    }
    else{
        console.log(`${i} - Ganjil`);
    }
}

console.log();

for(i=1;i<=100;i+=2){
    if (i%3 === 0){
        console.log(`${i} ini kelipatan 3`);
    }
}

console.log();

for(i=1;i<=100;i+=5){
    if (i%6 === 0){
        console.log(`${i} ini kelipatan 6`);
    }
}

console.log();

for(i=1;i<=100;i+=9){
    if (i%10 === 0){
        console.log(`${i} ini kelipatan 10`);
    }
}