// 1)// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი


function block() {
    for (let i = 0; i < 1000000000; i++) { } // მძიმე ოპერაცია
    console.log("block finished");
}

console.log("one");
Promise.resolve().then(() => block());
console.log("two");





// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// let promise1 = new Promise((res, rej) => {
//     res("Promise 1 resolved");
// });

// let promise2 = new Promise((res, rej) => {
//     rej("Promise 2 rejected");
// });


// promise1.then(res => console.log(res)).catch(err => console.log(err));
// promise2.then(res => console.log(res)).catch(err => console.log(err));


// Promise.allSettled([promise1, promise2]).then(results => console.log(results));

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// let p1 = new Promise((res, rej) => setTimeout(() => rej("p1 rejected"), 1000));
// let p2 = new Promise((res, rej) => setTimeout(() => res("p2 resolved"), 2000));
// let p3 = new Promise((res, rej) => setTimeout(() => res("p3 resolved"), 1500));
// let p4 = new Promise((res, rej) => setTimeout(() => rej("p4 rejected"), 500));

// Promise.any([p1, p2, p3, p4])
//     .then(res => console.log("First resolved:", res))
//     .catch(err => console.log("All rejected", err));


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
let p1 = Promise.resolve("ok1");
let p2 = Promise.reject("fail2");
let p3 = Promise.resolve("ok3");
let p4 = Promise.reject("fail4");
let p5 = Promise.reject("fail5");

Promise.allSettled([p1, p2, p3, p4, p5])
    .then(results => {
        let rejected = results.filter(r => r.status === "rejected");
        console.log("Only rejected:", rejected);
    });


// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

async function fetchUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
}

async function fetchPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
}

Promise.all([fetchUsers(), fetchPosts()])
    .then(([users, posts]) => {
        console.log("Users:", users[0]);
        console.log("Posts:", posts[0]);
    })
    .catch(err => console.log("Error:", err));

