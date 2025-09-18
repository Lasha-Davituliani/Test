// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

let arr = [1, 2, 3];
let newArr = arr.map((item) => item * 3);
console.log(newArr);



// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredArr = arr2.filter((x) => x % 3 === 0);
console.log(filteredArr);

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი

let arr3 = [1, -2, 3, 4, -5, 6, -7, 8, 9];
let positiveSum = arr3
    .filter((x) => x > 0)
    .reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum);


// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]
let namesArr = ["giorgi", "nika", "mariami"];
let modifiedNames = namesArr.map((name) => name.slice(0, -1));
console.log(modifiedNames);



// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
let processedArr = numsArr
    .map((num) => num * 2)
    .filter((num) => num % 3 === 0);
console.log(processedArr);




// 6)გაქვთ მასივი - let arr = [
//     {
//         category:"pizza",
//         price:20
//     },
//     {
//         category:"pizza",
//         price:20
//     },
//     {
//         category:"sushi",
//         price:30
//     },
//     {
//         category:"sushi",
//         price:30
//     },
// ]

// თქვენი მიზანია  დააჯგუფოთ შემდეგნაირად - {
//   '20': [
//     { category: 'pizza', price: 20 },
//     { category: 'pizza', price: 20 }
//   ],
//   '30': [
//     { category: 'sushi', price: 30 },
//     { category: 'sushi', price: 30 }
//   ]
// }
let items = [
    {
        category: "pizza",
        price: 20,
    },
    {
        category: "pizza",
        price: 20,
    },
    {
        category: "sushi",
        price: 30,
    },
    {

        category: "sushi",
        price: 30,
    },
];
let groupedItems = items.reduce((acc, item) => {
    if (!acc[item.price]) {
        acc[item.price] = [];
    }
    acc[item.price].push(item);
    return acc;
}, {});
console.log(groupedItems);




// 7) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]

let numsArr1 = [1, -1, -2, -10, 111, 3, 2, 5]
let sortedArr = numsArr1.sort((a, b) => a - b);
console.log(sortedArr);





// 8)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.

let numsArr2 = [1, -1, -2, -10, 111, 3, 2, 5];
let resultArr = numsArr2
    .map((num) => num * 2)
    .filter((num) => num > 5);
console.log(resultArr);




// 9)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
let arr4 = [1, 1, 1, 1, 2, 2, 3, 3, 3];
// let unique = [...new Set(arr4)];
// console.log(unique);
let unique = [];
arr4.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }

});
console.log(unique);



// 10), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
let arr5 = [-1, 20, 90, 4, 5, 111];
arr5.sort((a, b) => a - b);
let sumOfTwoSmallest = arr5[0] + arr5[1];
console.log(sumOfTwoSmallest);

