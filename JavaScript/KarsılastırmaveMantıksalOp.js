
// ! == Esitse

let price = 100;
let user ="guest"


console.log(price==1)
console.log(price==100)

// ! === Hem degeri hemde türü esitmi

console.log(price===1) // false
console.log(price===100) // false türü string yukarıdaki price let price="100" oldugu durumda böyle.

// != eşit değilse 

console.log(user != "guest") 

// ! < Kücükse
console.log(price < 200)
// ! <= Kücük ve esitse
console.log(price <= 100)

// ! < Büyükse
console.log(price > 200)
// ! <= Büyük ve esitse
console.log(price >= 100)

// ! && ve demektir iki durumda karsılanmalıdır

var price1=0
console.log(price1>50 && price1<15)  // ilk durum true dönsedee ikinci durum false döndüğünden && iki durumdada aynı olması gerektiğinden bu durum bunu karsılamamıstır bu yüzden false döndü

// ! || veya operratörü de iki durumdan bir tanesi dogru olsa bile true döndürmektedir. 

price=0
console.log(price>50 || price<15)

// ! degil (tersi) operatörü
