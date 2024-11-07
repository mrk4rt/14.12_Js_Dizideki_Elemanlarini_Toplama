# Dizi Elemanlarını Toplama Projesi

## Proje Amacı

Bu proje, JavaScript'te bir dizi içerisindeki sayıların toplamını `for` döngüsü kullanarak hesaplamayı amaçlamaktadır. Proje, dizi yapısını ve `for` döngüsünü kullanarak toplam hesaplamayı pekiştirmeyi hedefler.

## Kullanılan Yapılar

- **Dizi (Array):** İçerisinde rastgele sayılardan oluşan bir dizi tanımlanacaktır.
- **For Döngüsü:** Dizi elemanları üzerinde iterasyon yapmak ve her elemanı toplam değişkenine eklemek için kullanılır.

## Değişkenler

- `sayilar`: Rastgele sayılardan oluşan bir dizi. Örneğin `[4, 8, 15, 16, 23, 42]`.
- `toplam`: Dizi elemanlarının toplamını saklayacak olan değişken. Başlangıç değeri `0` olarak tanımlanır.

## Anahtar Kelimeler

- **Array:** Dizi tanımlaması için kullanılır.
- **for loop:** Dizi elemanları üzerinde tek tek dolaşmak için kullanılır.
- **+= operatörü:** Her bir dizi elemanını toplama eklemek için kullanılır.

## Adımlar

1. **Dizi Tanımlama:** `sayilar` adlı bir dizi tanımlayın ve içine rastgele sayılar ekleyin.
2. **Toplam Değişkeni Tanımlama:** `toplam` adında bir değişken oluşturun ve başlangıç değerini `0` olarak atayın.
3. **Döngü ile Toplama İşlemi:** `for` döngüsü kullanarak, `sayilar` dizisinin her bir elemanını `toplam` değişkenine ekleyin.
   - Döngü `i` indeksini `0`dan dizinin son indeksine kadar artırarak ilerler.
   - Döngü sırasında `toplam += sayilar[i]` ifadesini kullanarak `toplam`a her elemanı ekleyin.
4. **Sonucu Yazdırma:** Döngü tamamlandığında `toplam` değişkeninin değerini ekrana yazdırarak sonucu gösterin.

