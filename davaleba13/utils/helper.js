// 1) Capital Letter
function toCapitalLetter(str) {
    return str.toUpperCase();
}

// 2) პალინდრომის შემოწმება
function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// 3) ყველაზე გრძელი სიტყვის პოვნა
function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

module.exports = { toCapitalLetter, isPalindrome, findLongestWord };
