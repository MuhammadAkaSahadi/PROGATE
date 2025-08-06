// Loop While
let num = 0;
while(num < 5) {
    console.log(num +=1);
}
console.log("");


// Loop For
// for (pendefinisian variable; kondisi; mengupdate variable) {}
for(let numb = 1; numb <= 5; numb +=1) {
    console.log(numb);
}
console.log("");

for(let numb = 1; numb <= 12; numb+=1) {
    if(numb%3===0) {
        console.log(numb + " adalah Kelipatan 3");
        } else {
            console.log(numb);
        }
}
console.log("");


// Array
// ["nilai1", "nilai2", "nilai3"]
const buah = ["apel","pisang","mangga"];
console.log(buah);
console.log(buah[0]);

buah[2]= "salak";
console.log(buah[2]);
console.log("");


// Loop Array
const fruit = ["manggis","durian","nanas","apel"];
for(let i = 0; i < 3; i+=1) {
    console.log(fruit[i]);
}
console.log("");


// Properti Lenght (Jumlah keseluruhan variable )
const car = ["lamborghini","ferrari","mercedes"];
// console.log(car.length);
for(let i = 0; i < car.length; i+=1) {
    console.log(car[i]);
}
console.log("");


// Object
// {property1: nilai1, property2: nilai2}
const item = {nama: "Motor", harga:"Rp 1.000.000"};
console.log(item);
item.harga = "Rp 500.000"
console.log(item.harga);
console.log("");


// Object sebagai Element Array
const wepon = [
    {gun: "Ak-47", price:"100"},
    {gun: "Glock 17", price:"50"},
    {gun: "Bazooka", price:"1000"}
];
console.log(wepon[1]);
console.log(wepon[2].gun);
console.log("");


// Iterasi Array Object = fuck
const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 100},
    {name: "Baby Ninja Ben", age: 5},
];
for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    const character = characters[i];
    console.log(`Nama saya adalah ${character.name}`);
    console.log(`Saya berusia ${character.age} tahun`);
}
console.log("");


// Undifined
const karakters = [
    {hero: "Zilong", role: "Exp"},
    {hero: "Ling", role: "Jungle"},
    {hero: "Wanwan", role: "Marksman", build: "Atk Speed"}
];
console.log(karakters.build);
console.log("");


// Mencegah Undefined
for(let i=0; i<karakters.length; i++) {
    const karakter = karakters[i];
    console.log(`Hero ini bernama ${karakter.hero}`);
    console.log(`Rolenya adalah ${karakter.role}`);

    if(karakter.build === undefined) {
        console.log("Buildnya Rahasia!");
    } else {
        console.log(`Buildnya ${karakter.build} , mudah bukan!`);
    }
    console.log("");
} 


// Object Bersarang
const pc = {
        versi: "Lenovo",
        intel: "Core i5 10TH Gen",
        grp: {
            ver: "Nvidia",
            no: ["GTX 330", "MX 550", "RTX 1050"]
        }
    }
console.log(`Nama Laptop : ${pc.versi}`);
console.log(`Graphic Card : ${pc.grp.ver} ${pc.grp.no[0]}`);
console.log("");
