// Exec method in child process
const {exec} = require("child_process");

/* "exec" metodu, sistemde çalışan diğer işlemleri kontrol etmek için
kullanılan bir API'dir. "exec" metodu, sistemde bir komut satırı komutunu çalıştırmak için
kullanılır. Bu metod, komut satırı komutunun çıktısını döndürür ve
belli bir zaman aşımı süresi geçtiğinde işlemi durdurur. exec metodu çalıştırılan 
sistem komutunun çıktısını stdout (standart çıktı) ve stderr (standart hata) olarak iki farklı değişkene atar.
stdout değişkeni, sistem komutunun normal çıktısını tutar. Örneğin, dosya listesi gibi.
stderr değişkeni ise, sistem komutunun hata çıktısını tutar. Örneğin, bulunamayan dosya gibi.
exec metodunun callback fonksiyonu, bu iki değişkeni (ve ayrıca bir hata nesnesi) alır ve 
bunları işlemek veya kullanmak için kullanabilirsiniz:*/

exec('ls -lh', (error, stdout, stderr)=> {
    // eğer hata olursa
    if(error){
        console.log(`error: ${error.message}`);
        return 
    };
    console.log(stdout);
    console.log(stderr);
});

/* Örneğin, bir dosyayı sıkıştırmak veya dosya boyutunu kontrol etmek için gzip komutunu çalıştırabilirsiniz: */
exec("gzip example.txt", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

/*Zaman ayarı koymak için, çalıştırılan komutun süresini belirlemek için setTimeout veya setInterval 
fonksiyonlarını kullanabilirsiniz. Örneğin, belirli aralıklarla bir dosyayı taramak için setInterval 
kullanabilirsiniz:*/
setInterval(() => {
    exec("ls -l", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
}, 5000);

