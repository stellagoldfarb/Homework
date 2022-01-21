//write a function to convert USD to another currency

let usd = 95
let pesos = 20  

function currencyConverter(curr1,curr2){
    conversion = curr1 * (curr1/curr2)
    console.log (` ${curr1} dollars is equivalent to ${conversion} pesos`)
    
}

currencyConverter(usd, pesos)



//const tempC=8.5
//function to convert C to F