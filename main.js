let numeri_dispari = 0;
let sommaNumDispari = 0;

for (let i = 1; i <=20; i++){
    
    if( i % 2 == 0 ){
        console.log(i);
    } else{
        sommaNumDispari = sommaNumDispari + i;
        
        numeri_dispari ++;
        
    }
}
let media = sommaNumDispari / numeri_dispari

console.log(`La media dei numeri dispari è: ${media}`);



