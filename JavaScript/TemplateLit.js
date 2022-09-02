
let username = "Ali"
const domain = "fb@gmail.com"

let fullname = username + " " + domain ;

console.log(fullname)

// console.log("Adınız:", username , "Domain : " , 

let info = `Merhaba ${username} sitemize hoşgeldiniz . 
Üye olmak için ${username+ "" + domain} kullanabilirsiniz.
${fullname} tekrar yazdık 
borcunu : ${(3*2)*5}TL 
günün saat bilgisi : ${new Date().getHours()}
kısa isminiz : ${username[3]}.
`
console.log(info);

