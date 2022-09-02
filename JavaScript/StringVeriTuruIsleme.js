// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

const Name = "Ali"
const Surname ="Cukur"
const domain = "alicukur.fb@gmail.com"

// string karakter sayisi -> length

var IsımUzunlugu = Name.length
console.log(IsımUzunlugu)

// Ilk Karakteri Bulmak -> [0]: charat // index numarasına göre buluyo
console.log(Name.charAt(0))

console.log(Surname.indexOf("Cu"))

// buyuk harf / kucuk harf :
console.log(Name.toUpperCase())
console.log(Name.toLowerCase())
console.log(Surname.toLowerCase())


// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:

console.log(domain.search("cuk"))
console.log(domain.search("@"))


// belli bir yere kadar al -> slice :  (domain bilgisi)
console.log(domain.slice(12))


// bilgiyi degistir -> replace :
console.log(Surname.replace("Cukur","samil"))

// istedigim bilgi var mi ? -> includes :
let Fullname = Name.concat( " " + Surname)
console.log(Fullname)

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :

// Ilk Harflerini Buyuk Yapmak
