    // !!!!    1- Promp ile aldıgın bilgiye göre asağıdaki yapıyı kullanarak notun bilgisini   #info yazdırma     !!!!//
   
    


   document.getElementById("submit").onclick = function() {
      
    var Sınav1 = document.getElementById("sınavilk").value; 
    var Sınav2 = document.getElementById("Ikıncısınav").value; 
    var ortalama = (parseInt(Sınav1)+parseInt(Sınav2))/2
    

    if(ortalama>=90 && ortalama<=100)
    {
       var sonuc = `Ortalamanız : ${ortalama} AA Başarı ile tamamladınız.`
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
    else if(ortalama>=85 && ortalama<=89)
    {
       var sonuc = `Ortalamanız : ${ortalama} BA Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>=80 && ortalama<=84)
    {
       var sonuc = `Ortalamanız : ${ortalama} BB Başarı ile tamamladınız ` 
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>=75 && ortalama<=79)
    {
       var sonuc = `Ortalamanız : ${ortalama} CB Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>=70 && ortalama<=74)
    {
       var sonuc = `Ortalamanız : ${ortalama} CC Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>=65 && ortalama<=69)
    {
       var sonuc = `Ortalamanız : ${ortalama} DC Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>60 && ortalama<64)
    {
       var sonuc = `Ortalamanız : ${ortalama} DD Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
     else if(ortalama>=50 && ortalama<=59)
    {
       var sonuc = `Ortalamanız : ${ortalama} FD Başarı ile tamamladınız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
    else
    {
       var sonuc = `Ortalamanız : ${ortalama} FF Başarısız `
       var Info = document.querySelector("#info")
       Info.innerHTML = sonuc
    }
   
};

   

  