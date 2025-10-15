const fs = require("fs/promises")
// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში


async function sumNumbers() {
    let nums = [1, 2, 3, 4, 5]
    await fs.writeFile("numbers.txt", JSON.stringify(nums))
    let data = await fs.readFile("numbers.txt", "utf-8")
    let numbers = JSON.parse(data)
    let sum = numbers.reduce((acc, num) => acc + num, 0)
    await fs.writeFile("sum.txt", `Sum is: ${sum}`)
    console.log(`Sum is: ${sum}`)
}
sumNumbers()


// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
async function reverseText() {
    let text = "Hello, World!"
    await fs.writeFile("text.txt", text)
    let data = await fs.readFile("text.txt", "utf-8")
    let reversed = data.split("").reverse().join("")
    await fs.writeFile("reversed.txt", reversed)
    console.log(`Reversed text is "${reversed}"`)
}
reverseText()

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში

async function createUsers() {
    let users = [
        { name: "Gio", age: 25, email: "gio@giomail.com" },
        { name: "Nika", age: 30, email: "nika@mail.com" },
        { name: "Mariam", age: 22, email: "mm@mail.com" }
    ]
    await fs.writeFile("data.txt", JSON.stringify(users))
    let readJSON = await fs.readFile("data.txt", "utf-8")
    let textTOJSon = JSON.parse(readJSON)
    console.log(textTOJSon)
}
createUsers()

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
async function mergeFiles() {
    let file1 = "file1.txt"
    let file2 = "file2.txt"
    await fs.writeFile(file1, "This is file 1.")
    await fs.writeFile(file2, "This is file 2.")
    let data1 = await fs.readFile(file1, "utf-8")
    let data2 = await fs.readFile(file2, "utf-8")
    let mergedData = `${data1}\n${data2}`
    await fs.writeFile("merged.txt", mergedData)
    console.log("Files merged into merged.txt")
}
mergeFiles()

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
async function countWords() {
    let text = "This is a sample text with several words."
    await fs.writeFile("wordcount.txt", text)
    let data = await fs.readFile("wordcount.txt", "utf-8")
    let wordCount = data.split(" ").length
    console.log(`Word count: ${wordCount}`)
}
countWords()

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
async function filterAdults() {
    let users = [
        { name: "Gio", age: 25, email: "gio@giomail.com" },
        { name: "Nika", age: 15, email: "nika@mail.com" },
        { name: "Mariam", age: 18, email: "mm@mail.com" },
        { name: "Lasha", age: 20, email: "Lasha@mail.com" }
    ]
    await fs.writeFile("users.txt", JSON.stringify(users))
    let data = await fs.readFile("users.txt", "utf-8")
    let userList = JSON.parse(data)
    let adults = userList.filter(user => user.age > 18)
    await fs.writeFile("adults.txt", JSON.stringify(adults))
    console.log("Filtered adults written to adults.json")
}
filterAdults()
// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
async function filterPassedStudents() {
    let students = [
        { name: "Gio", score: 75, passed: true },
        { name: "Nika", score: 45, passed: false },
        { name: "Mariam", score: 85, passed: true },
        { name: "Lasha", score: 30, passed: false }
    ]
    await fs.writeFile("students.txt", JSON.stringify(students))
    let data = await fs.readFile("students.txt", "utf-8")
    let studentList = JSON.parse(data)
    let passedStudents = studentList.filter(student => student.score > 50)
    await fs.writeFile("passed.txt", JSON.stringify(passedStudents))
    console.log("Filtered passed students written to passed.json")
}
filterPassedStudents()

// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
async function removeInvalidEmails() {
    let users = [
        { "name": "Gio", "email": "gio@gmail.com" },
        { "name": "Nika", "email": "nikaexample.com" },
        { "name": "Mariam", "email": "mariam@reeducate.ge" },
        { "name": "Lasha", "email": "lashareeducate.ge" },
        { "name": "Ana", "email": "ana@mail.com" }
    ]
    await fs.writeFile("allusers.txt", JSON.stringify(users))
    let data = await fs.readFile("allusers.txt", "utf-8")
    let userList = JSON.parse(data)
    let validUsers = userList.filter(user => user.email.includes("@"))
    await fs.writeFile("validusers.txt", JSON.stringify(validUsers))
    console.log("Filtered users with valid emails written to validusers.json")
}
removeInvalidEmails()