let nilai =prompt("masukan nilai nilai yang anda inginkan");
console.log(nilai);

let a = 20
let b = 10

var hasil = b + a;
console.log(hasil);

var hasil1 = b - a;
console.log(hasil1);

var hasil2 = b * a;
console.log(hasil2);

var hasil3 = b / a;
console.log(hasil3);

var hasil4 = b ** a;
console.log(hasil4);

var hasil5 = b % a;
console.log(hasil5);

if(nilai == "10 + 20"){
    document.write(`<h1>${hasil}</h1>`)
}else if(nilai == "10 - 20"){
    document.write(`<h1>${hasil1}</h1>`)
}else if(nilai == "10 * 20"){
    document.write(`<h1>${hasil2}</h1>`)
}else if(nilai == "10 / 20"){
    document.write(`<h1>${hasil3}</h1>`)
}else if(nilai == "10 ** 20"){
    document.write(`<h1>${hasil4}</h1>`)
}else if(nilai == "10 % 20"){
    document.write(`<h1>${hasil5}</h1>`)
}