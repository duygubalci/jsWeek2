//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrimeNumber(...numbers){
    for (let index = 0; index < numbers.length; index++) {
        let isPrime = true;

        if(numbers[index] < 0){
            console.log(numbers[index] +": Pozitif bir sayı değildir..")
            continue;
        }

        for (let j = 2; j < numbers[index]; j++) {
            if(numbers[index] % j == 0){
                isPrime = false
                break
            }
        }

        if(isPrime==true){
            console.log(numbers[index] + ": Asal bir sayıdır..")
        }else{
            console.log(numbers[index] + ": Asal bir sayı değildir..")
        }
    }
}
findPrimeNumber(-5,12,14,89,-9)