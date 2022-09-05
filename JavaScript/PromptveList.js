

// let fullname = prompt("Lütfen adınızı giriniz")  // prompt içerisine direk kullanıcıdan gelicek

// console.log(fullname)



// list yapısı kullanarak içerisine erişmek 

// let lastChild = document.querySelector("ul#list>li:last-child") 
// lastChild.innerHTML="Merhaba Dünya"

// let firstChild = document.querySelector("ul#list>li:first-child") 
// firstChild.innerHTML="Selam"

// // yeni öğe eklemek istersek 

// let Uldom = document.querySelector("#list")

// let lidom = document.createElement('li')
// lidom.append("Lazzali25")

// Uldom.prepend(lidom) // firs ekleme

// Uldom.append(lidom) 
//  // last ekleme


// document.querySelector(("ul#list>li").style.color="green")


// Exercies


// let one = document.querySelector("#One")
// console.log(one.innerHTML)

// let two = document.getElementsByClassName("Two") // getElementsByClassName bide nodelist olarak dönmektedir.
// for (let i = 0; i < two.length; i++) {
     
//     two[i].style.color="red";
    
// }

// let liste = document.querySelector("ul");

// let urun = document.querySelector("#Veri");

// let ekle = document.querySelector("#Ekle");

// ekle.addEventListener("click",function(){

//     var li=document.createElement("li"); 
//     li.textContent=urun.value;
//     liste.appendChild(li);

//     urun.value = "";
//   });


  let baslık = document.querySelector("#Baslık")

  baslık.classList.add("title") 
  baslık.classList.add("oneclass","twoclass","threeclass")

  console.log(baslık.innerHTML)