// 1. 
let nums = [1, 2, 3, 4, 5]
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 2.  დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით

let arr = [1, 2, 2, 3, 4, 4, 5]
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// 3 // იპოვე სტუდენტი სახელად ნიკა
let students = [
    { name: "Giorgi", age: 20 },
    { name: "Nika", age: 22 },
    { name: "Ana", age: 19 }
]
let answer = students.find(student => student.name === "Nika");
console.log(answer);

// 4.

let people = [
    { name: "Gio", age: 30 },
    { name: "Luka", age: 25 },
    { name: "Ana", age: 28 }
]
let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);

// დაალაგე სტუდენტები ასაკის მიხედვით

// 5.  let sentence = "apple orange apple banana apple orange kiwi" 
// შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
let sentence = "apple orange apple banana apple orange kiwi";
let fruits = sentence.split(" ");
let fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად