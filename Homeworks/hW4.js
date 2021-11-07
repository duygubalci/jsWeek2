//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeNumbers(number){

    for (let index = 1; index < number; index++) {
        let isPrime = true;

        for (let j = 2; j < index; j++) {
            if(index % j == 0){
                isPrime = false
                break
            }
        }

        if(isPrime==true){
            console.log(index + ": Asal bir sayıdır..")
        }
    }    
}

findPrimeNumbers(1000)