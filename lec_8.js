// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
let flatArr = [];

function flattenAndUnique(input) {
    for (let i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])) {
            flattenAndUnique(input[i]);
        } else {
            if (!flatArr.includes(input[i])) {
                flatArr.push(input[i]);
            }
        }
    }
    return flatArr;
}
flattenAndUnique(arr);
flatArr.sort((a, b) => a - b);
console.log(flatArr);

// 2)// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

let products = [
    { name: "Phone", price: 1200, rating: 4.5 },
    { name: "Laptop", price: 2500, rating: 4.8 },
    { name: "Book", price: 30, rating: 4.9 },
    { name: "TV", price: 800, rating: 4.0 }
]
let highestRatedUnder1000 = null;
for (let i = 0; i < products.length; i++) {
    if (products[i].price < 1000) {
        if (highestRatedUnder1000 === null || products[i].rating > highestRatedUnder1000.rating) {
            highestRatedUnder1000 = products[i];
        }
    }
}
console.log(highestRatedUnder1000);


// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
let sentence2 = "dog cat dog bird cat dog fish bird";
let words = sentence2.split(" ");
let wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

let mostFrequentWord = null;
let maxCount = 0;
for (let word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        mostFrequentWord = word;
    }
}
console.log(mostFrequentWord, maxCount);





// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("hello world", "o"));

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("hello"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
function mergeAndSum(arr1, arr2) {
    let merged = [...new Set([...arr1, ...arr2])];
    let sum = 0;
    for (let i = 0; i < merged.length; i++) {
        sum += merged[i];
    }
    return sum;
}
console.log(mergeAndSum([1, 2, 3], [3, 4, 5]));


//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));


// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
