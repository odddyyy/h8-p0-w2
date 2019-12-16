var nama = ``;
var peran = `Ksatria`;

if (nama && peran === `Penyihir`){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
else if (nama && peran === `Ksatria`){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
}
else if (nama && peran === `Tabib`){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka!`);
}
else if(!nama){
    console.log(`Tolong input nama mu`);
}
else{
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`)
}