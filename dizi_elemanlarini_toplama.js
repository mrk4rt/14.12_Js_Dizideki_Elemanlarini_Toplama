// Dizi tanımlama
let sayilar = [4, 8, 15, 16, 23, 42];

// Toplam değişkenini tanımlama
let toplam = 0;

// For döngüsü ile dizi elemanlarını toplama
for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}

// Sonucu yazdırma
console.log("Dizideki sayıların toplamı:", toplam);
