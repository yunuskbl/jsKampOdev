// FIND PRIME NUMBERS BETWEEN 1 - 1000
console.log("1000'e Kadar Olan Asal Sayılar")
let sayiDizisi = [];

for (let i = 1; i <= 1000; i++) {
    sayiDizisi.push(i);
}

sayilar(...sayiDizisi)

function sayilar(...sayiDizisi){

    for(let i = 0; i < sayiDizisi.length; i++){

        let sayac = 0;

        for(let j = 2; j < sayiDizisi[i]; j++){
            if(sayiDizisi[i] % j == 0){
                sayac++
            }
        }
        if(sayac == 0){
            console.log(sayiDizisi[i] + " asal sayı")
        }
    }
}

sayilar()
