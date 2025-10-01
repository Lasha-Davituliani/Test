// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected");
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1500);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 2500);
});

let promises = [promise1, promise2, promise3, promise4];

Promise.allSettled(promises)
    .then((results) => {
        let successCount = 0;
        let failureCount = 0;
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                successCount++;
            } else {
                failureCount++;
            }
        });
        console.log(`Successful: ${successCount}, Failed: ${failureCount}`);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად
