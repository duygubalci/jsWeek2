//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function findFriendNumber(number1,number2){
    let totalNum1 = 0;
    let totalNum2 = 0;

    for (let index = 0; index <number1; index++) {
       
        if(number1 % index == 0){
            totalNum1 = totalNum1 + index
        }   
    }

    for (let index = 0; index <number2; index++) {
       
        if(number2 % index == 0){
            totalNum2 = totalNum2 + index
        }   
    }

    if(totalNum1 == number2 && totalNum2 == number1){
        console.log(number1 + " ve " + number2 + " Arkadaş sayılardır..")
    }else{
        console.log(number1 + " ve " + number2 + " Arkadaş sayı değildir..")
    }
}

findFriendNumber(220,284)