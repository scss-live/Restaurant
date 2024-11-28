

// function salary(){
//     const gross = 500000;
//     if (gross >= 300000 && gross <= 600000) {
//         const ded = gross * 0.05;
//         const net_y = (gross - ded);
//         const net = (gross - ded) / 12;
//         console.log("Your Yearly gross amount is " + gross);
//         console.log("Your year deduction is " + net + " and Net amount is " + net_y);    
//     }
//     else if (gross > 600000 && gross <= 900000) {
//         const ded = gross * 0.1;
//         const net_y = (gross - ded);
//         const net = (gross - ded) / 12;
//         console.log("Your Yearly gross amount is " + gross);
//         console.log("Your year deduction is " + net + "and Net amount is " + net_y);    
    
//     }
//     else if (gross > 900000 && gross <= 1200000) {
//         const ded = gross * 0.15;
//         const net_y = (gross - ded);
//         const net = (gross - ded) / 12;
//         console.log("Your Yearly gross amount is " + gross);
//         console.log("Your year deduction is " + net + "and Net amount is " + net_y);    
    
//     }
//     else if (gross > 1200000 && gross <= 1500000) {
//         const ded = gross * 0.20;
//         const net_y = (gross - ded);
//         const net = (gross - ded) / 12;
//         console.log("Your Yearly gross amount is " + gross);
//         console.log("Your year deduction is " + net + "and Net amount is " + net_y);    
    
//     }
//     else if (gross >1500000) {
//         const ded = gross * 0.30;
//         const net_y = (gross - ded);
//         const net = (gross - ded) / 12;
//         console.log("Your Yearly gross amount is " + gross);
//         console.log("Your year deduction is " + net + "and Net amount is " + net_y);    
    
//     }
//     else {
//         console.log("Below ABP");
//     }
// }
// salary();

// let txt = "I can eat bananas all day";
// let x = txt.slice(3,17);
// console.log(x);

const  addNumbers = () =>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML= num1+num2;
}