// -პრაქტიკა-
// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-დ
// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე - "Foo"
// თუ იყოფა 5-ზე - "Bar"
// თუ იყოფა ორივეზე - "FooBar"
// თუ არა - უბრალოდ რიცხვი
// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.


// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
// 3)რა მოვალეობა აქვს სკოუპის მეგობარ left hand side search - ს და right side search - ს.(პასუხი თეორიულად გაეცი)
// 4) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
// 5) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
// 6)რა განსხვავებაა == და === - შორის


console.log("-------პრაქტიკა-------");

//1)
let fullName = "Lika Mamaladze";
let arr = fullName.split(" ");
let answer = arr[0][0] + "." + arr[1][0] + ".";
console.log(answer);
//2)
let email = "EXAMPLE@MAIL.COM ";
let cleanedEmail = email.trim().toLowerCase();
let containsAtSymbol = cleanedEmail.includes("@");
console.log(cleanedEmail);
console.log(containsAtSymbol);
//3)
let str = "luka";
let lastChar = str.charAt(str.length - 1).toUpperCase();
console.log(lastChar);
//4)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}
//5)
let text = "JS is stupid but sometimes cool";
let newText = text.replace("stupid", "s****d");
console.log(newText);
console.log("-------თეორია-------");
//1)ჯავასკრიპტში გვაქვს 3 ტიპის ცვლადი: var, let, const.
//2)ჯავასკრიპტში გვაქვს 7 ძირითადი ტიპი: Number, String, Boolean, Null, Undefined, Object, Symbol.
//3)Left hand side search - გამოიყენება ცვლადის მნიშვნელობის განსაზღვრისას (მარცხენა მხარე), ხოლო right side search - გამოიყენება ცვლადის მნიშვნელობის წაკითხვისას (მარჯვენა მხარე).
//4)სტრინგს მასივად აქცევს split() მეთოდი.
//5)დიახ, სტრინგი არის პრიმიტიული ტიპი ჯავასკრიპტში.
//6)== იყენებს ტიპების კონვერტაციას და მხოლოდ მნიშვნელობას ამოწმებს, ხოლო === ამოწმებს როგორც მნიშვნელობას, ასევე ტიპს (სტრიქონი თუ რიცხვი).    