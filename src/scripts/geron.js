"use strict";
// let agesToNumber = ages.map((e) => parseInt (e))
// agesToNumber.sort((a,b) =>{
//     return b - a
// })
// console.log(agesToNumber)
let products = [
    {
        category: "laptop",
        price: 2000000,
        count: 100
    },
    {
        category: "smartphone",
        price: 200000,
        count: 10
    },
    {
        category: "smartphone",
        price: 2000000,
        count: 100
    }
];
// сщздать массивы с категориями(отфилтровать исходный массив)
let smartphones = products.filter((e) => e.category === "smartphone");
let laptops = products.filter((e) => e.category === "laptop");
// отсортировать массивы по убыванию(по цене)
smartphones.sort((a, b) => {
    return b.price - a.price;
});
laptops.sort((a, b) => {
    return b.price - a.price;
});
console.log(laptops);
console.log(smartphones);
let arr = [smartphones, laptops];
arr.push(laptops);
let newArray = [...laptops, ...smartphones];
