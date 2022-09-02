

//* Veri turunu ogrenmek ve veri turlerini değistirme *//

let price = 111
let stringPrice = "111"
let haspassword = true

console.log(
    "stringprice: ",
    typeof(price)

)

console.log(
    "price: ",
    typeof(price)
    
)

console.log(
    "haspassword: ",
    typeof(haspassword)
    
)

// strging (metinsel) bilgileri int ve float donusturmek

// string değeri numaraya cevirdik.
let number1="11"
number1=parseInt(number1)
console.log(
       "number1 in Turu :",
       number1 , typeof(number1), 
         
    )


    let number2="11px"
    number2=parseInt(number2)
    console.log(
           "number2 in Turu :",
           number2 , typeof(number2),        
    )

    let number3="11 "
    number3=Number(number3)
    console.log(
           "number3 in Turu :",
           number3 , typeof(number3),        
    )

    let number4="11.4px "
    number4=parseFloat(number4)
    console.log(
           "number4 in Turu :",
           number4 , typeof(number4),        
    )

    // strging (metinsel) bilgileri int ve float donusturmek

    let number5 = 55
    number5=number5.toString()
    console.log(number5 , typeof(number5))
