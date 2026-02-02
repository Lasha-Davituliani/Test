// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
function averageOfEvens(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    let sum = evens.reduce((acc, num) => acc + num, 0);
    return evens.length ? sum / evens.length : 0;
}
console.log(averageOfEvens([1, 2, 3, 4, 5, 6]));


// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
}
console.log(countWords("I love JavaScript"));

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა
function longestWord(words) {
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord(["dog", "elephant", "cat", "hippopotamus"]));
// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
function mostFrequent(arr) {
    let countMap = {};
    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    let mostFrequentNum = null;
    let maxCount = 0;
    for (let num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostFrequentNum = num;
        }
    }
    return mostFrequentNum;
}
console.log(mostFrequent([3, 5, 3, 2, 5, 5, 3, 5]));
// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
function countEvensAndOdds(arr) {
    let evens = 0;
    let odds = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return { evens, odds };
}
console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7, 8]));
// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
function findMin(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log(findMin([10, 2, 33, 5, 7]));

