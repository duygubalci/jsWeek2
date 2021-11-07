//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function findPerfectNumber(number){
    let total = 0;

    for (let i = 1; i < number; i++) {
        for (let j = 1; j <= i; j++) {
            if(i % j == 0){
                total = total + j
            }             
        }
        if(total == 2*i){
            console.log(i + ": Mükemmel sayıdır")
        }
        total=0       
    }
}
findPerfectNumber(1000)