 // ! **Ilk Fonksiyonumuzu tanımlamak

//  function hello(){
//     console.log("merhaba dünya")
//     merhaba()

// }

// function merhaba(){
//     console.log("merhaba")
// }

// hello()

// var add = function(sayı1,sayı2){
//     console.log(sayı1+sayı2)
// }

// function addition(sayı1,sayı2)
// {
//     return sayı1+sayı2
// }

// var add = addition(5,7)
// console.log(add);

// function printScreen1(){
//     console.log("ilk ekran çıktısı")
// }

// function printScreen2(){
//     setTimeout(function(){
//         console.log("ikinci ekran cıksıtısı")
//     },3000);
// }

// function printScreen3(){
//     console.log("ucuncu ekran cıktısı")
// }

// printScreen1();
// printScreen2();
// printScreen3();

// !! Callback fonksiyonlar


//  function printScreen1(){
//      console.log("ilk ekran çıktısı")
//  }



// function printScreen2(Callback1,Callback2)
// {
//     setTimeout(()=>{
//         Callback1();
//         console.log("Ikıncı ekran")
//         Callback2();
//     }, 3000);

// }


//   function printScreen3(){
//     console.log("ucuncu ekran cıktısı")
//  }

// printScreen2(printScreen1,printScreen3);

// !! Arrow function


let func= function(sayı1,sayı2)
{
    return sayı1*sayı2;
}
console.log(func(2,5))



//arrow yöntemiyle bunu yaparsak tek satırda iş tamam oluyo . ES6 ile birlikte gelen bir yapı. 

let functi = (sayı1,sayı2)=> sayı1*sayı2 
console.log(functi(5,10));

// !! Recursion Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion func yapıları diyoruz 

function SayınınDegeri(x,y){

    let result =  1 ;

    for (i = 0; i < y; i++) {
        result *=x
    }

    return result;
}

console.log(SayınınDegeri(2,3))

// !! Recursiyon yöntemi içinde döndürme

function Sayılar(x,y){

    if(y==1) {
        return x;
    }
    else{
        return x* Sayılar(x,y-1)
    }
}

console.log(Sayılar(2,3))


// ! ornek 

function pow(x, y) {
    return y == 1 ? x : x * pow(x, y - 1);
  }
  console.log(pow(2,3))



// ! arrow olarak yazmak istediğimizde 

function bok(x,y){
    if(y==1)
    {
        return x; 
    }
    else{
        return x* bok(x,y-1);
    }

}
console.log(bok(2,3))

let sonuc = (x,y) => ( (y==1 ? x : x*sonuc(x,y-1)) )
console.log(sonuc(2,4))

if(true){
    let message = "merhaba"
    
}

// ! Code block kullanmamının onemi


function stringFormat(str) {
    {
      let part1 = str.slice(0, 3);
      let part2 = str.slice(3);
      str = part1.toUpperCase() + part2;
    }
    //part1 ve part2 kullanılamaz.
    //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
    if(true){
        return (str)
    }
    
  }
  console.log((stringFormat("mehmet")))

  // ! Nested Function ( iç içe fonksiyonlar )


  function programDetayi(bootcamp, organizasyon) {
    // nested yardımcı fonk
    const tumProgram = () => bootcamp + ' ' + organizasyon;
  
    console.log(tumProgram() + ' Basladi');
    console.log(tumProgram() + ' Bitti');
  }
  console.log(programDetayi("JavaScript","Patika"));


 function sayacarttır(){
      var sayac = 0
    return 
       
 }
 let counter = sayacarttır();

console.log(counter);
console.log(counter);
console.log(counter);
console.log(counter);

