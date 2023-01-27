// let max=20;
// let min=1;
// value = Math.floor(Math.random()*19)+1;
// console.log(value);
// kok=Math.sqrt(value);
// console.log(kok);
// let tam;
// let kesr;
// tam=Math.floor(kok)
// console.log(tam)
// kesr=kok-tam;
// console.log(kesr)
// console.log(tam-kesr)

////////////////////////////////////////////
// Date.prototype.getDate()
// Date.prototype.setDate(11/12/2024)

let birthdate = new Date('11/12/2001');
let nowdate =new Date()
let nextbirthday =birthdate.setFullYear('2023')
let differencetime =Math.abs(nextbirthday-nowdate)
console.log(differencetime)
let differenceday=differencetime/(1000*3600*24)
console.log(differenceday) //tarixler arasindaki ferq
let exactday=Math.floor(differenceday)
console.log(exactday)//deqiq gun
// let kesrtime =Math.floor(differenceday-exactday)
// console.log(kesrtime)
let differencehours=nextbirthday-nowdate/(1000*60*60)
console.log(Math.round(differencehours))//tarixler arsindaki saat ferqi
let differencemonth=differencetime/(1000*60*60*24*7*4)
console.log(Math.round(differencemonth))//tarixler arasindaki ay ferqi
let differenceminute=differencetime/(1000*60)
console.log(Math.round(differenceminute))//tarixler arasindaki deqiqe ferqi
let differencesecond=(Math.round(differencetime/1000))
console.log(differencesecond)//tarixler arasindaki saniye ferqi

