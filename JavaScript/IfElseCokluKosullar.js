

// let Username = prompt("Lütfen bir kullanıcı adı giriniz.")
// if(Username.length>0)
// {
//     console.log(`Hosgeldin dünyalı  ${Username}`)
// }
// else
// {
//     alert("Kullanıcı adı girmediniz.")

// }

// ! Eger kullanıcı bilgisi varsa ekrana yazdır

// var RandomSayı = Math.floor(Math.random()*10)

// var Tahminedilensayı = prompt("0-10 arasında bir sayı tutunuz")

// if (Tahminedilensayı==RandomSayı && Tahminedilensayı !=null) {
     
//     alert("tebrikler")
    
// } 

// else if(Tahminedilensayı==null) 
// {
//     alert("Boş bırakma aslanım")

// }
// else {
//     alert("Bir daha denee :( Random sayi: " + RandomSayı);
//   }

// let BirimciSınav = 80
// let İkinciSınav = 50
//  let ortalama = (BirimciSınav+İkinciSınav)/2


// if (BirimciSınav != null && İkinciSınav != null) {
    
//     if(ortalama < 30)
//     {
//         alert("SANAYİ")
//     }  
//     else if(ortalama >=30 && ortalama <= 50)
//     {
//        alert("cc ile gectin kereta")
//     }

//     else if(ortalama >=50 && ortalama <= 65)
//     {
//        alert("cb ile gectin kereta")
//     }

//     else if(ortalama >=65 && ortalama <= 75)
//     {
//        alert("bb ile gectin kereta")
//     }

//     else if(ortalama >=75 && ortalama <= 100)
//     {
//        alert("aa ile gectin kereta")
//     }

//     else
//     {
//         alert("kaldın yaz okulu")
//     }

// } 

// else{
//     alert("Lüften alanları eksiksiz doldurunuz")
// }



// // ! Çoklu koşulları kullanma 

// let Username = prompt("Kullanıcı adı giriniz :")
// let Age = prompt("Yasınızı giriniz")


// if(Username,Age !=null && Age>=18)
// {
//     console.log("Ehliyet alabilrisiniz")
// }
// else if (!(Age>=18))
// {
//     console.log("Yas bilgisi girilmedi yada 18 yasından kücüksünüz")
// }
// else{
//   console.log("Daha kcuuksun " , Username)    
// }


// ! Ternary Operatörü

// let Username= prompt ("kullanıcı adı giriniz")
// let info = document.querySelector("#info")


//  ! ternary kullanımı :
//  ! kosul ? dogruysa : yanlıssa

// info.innerHTML = `${Username.length < 0 ? Username : "Eksik bilgi girisi "}` 


// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue)
// >> false

// console.log(boolean)


// let firstCity = "Ankara";

// let secondCity = "İstanbul";

// const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

// console.log(isEqual)