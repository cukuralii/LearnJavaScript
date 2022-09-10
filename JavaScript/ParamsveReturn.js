 // ! 
 

//  let firstname = "aasd" // eğer böyle tanımlarsak fonksiyonu dışa bağımlılıgını arttııyoeuz cok yaparsak öncelik bağımlılıkları kaldırmak. o yüzdne parametre vermek daha mantıklı 

 
function Greeting(id,mesaj){
    let Bildiri = document.getElementById(`${id}`)
    Bildiri.innerHTML = mesaj;
}

Greeting("Baslık","Merhaba Dünyalı")
