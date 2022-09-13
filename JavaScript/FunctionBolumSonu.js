
// let Counter= 0 ;
// let CounterDom = document.querySelector('#counter')
// let AzaltDom = document.querySelector('#Azaltma')
// let ArttırDom = document.querySelector('#Arttırma')

// CounterDom.innerHTML = Counter;
// ArttırDom.addEventListener("click", eventislem)
// AzaltDom.addEventListener("click", eventislem)

// function eventislem(){

//     if(this.id == "Arttırma")
//     { 
//         CounterDom.innerHTML = Counter +=1;
//     }
//     else
//     {
//         CounterDom.innerHTML = Counter -= 1  ;
//     }
    

// }

// function mySave()
// {
//     let mycontent = document.querySelector('#mytextarea').value;
//     localStorage.setItem('mycontent', mycontent)
// }
// function myLoad() {
//     myContent = document.querySelector("#mytextarea").value
//     localStorage.getItem("myContent", myContent);
//   }

//   console.log(localStorage.getItem('mycontent')) 


// ! local storage  ve session storage

// let user = {username:"Lazzali", sıfre :"1234" , isActive : true } // komplex bir yapı olusturuyoruz. 
// // console.log(user)

// localStorage.setItem('UserInfo', JSON.stringify(user))  // daha komlex yapılarda json ile sttringe çevirmek zorundayız yoksa erişemeyiz.
// console.log(localStorage.getItem('UserInfo'))


// let UserInfo = localStorage.getItem('UserInfo')
// UserInfo = JSON.parse(UserInfo)
// console.log(UserInfo);


let Counter = localStorage.getItem('counter') ?  Number(localStorage.getItem('counter')) : 0
let CounterDom = document.querySelector('#counter')
let Arttırma = document.querySelector('#Arttırma')
let Azaltma = document.querySelector('#Azaltma')

CounterDom.innerHTML = Counter;

Arttırma.addEventListener('click' ,sayıdurumu)
Azaltma.addEventListener('click' , sayıdurumu)

function sayıdurumu() {
    
    this.id == "Arttırma" ? Counter +=1 : Counter -=1 
    localStorage.setItem('counter', Counter)
    CounterDom.innerHTML = Counter;
}

