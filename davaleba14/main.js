// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის მიხედვით ინფორმაციის წამოღება,
// ფეჯინეიშენი,სექრეთ როუტი, age და name იყოს აუცილებელი ფილდი, ხოლო email და eyecolor ოფშენალი.
// ასევე არუნდა შეეძლოს 30 წელზე მეტის დარექვესტება და 10 წელზე ნაკლების.
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "Lasha", age: 25, email: "test@gmail.com", eyecolor: "blue" },
  { id: 2, name: "Nika", age: 28, email: "nika@gmail.com", eyecolor: "black" },
  { id: 3, name: "Ana", age: 22, email: "ana@gmail.com", eyecolor: "green" },
  { id: 4, name: "Giorgi", age: 29, email: "gio@gmail.com", eyecolor: "gray" },
  { id: 5, name: "Saba", age: 24, email: "saba@gmail.com", eyecolor: "brown" },
  {
    id: 6,
    name: "Mariam",
    age: 27,
    email: "mariam@gmail.com",
    eyecolor: "blue",
  },
  { id: 7, name: "Tako", age: 21, email: "tako@gmail.com", eyecolor: "green" },
  { id: 8, name: "Nino", age: 30, email: "nino@gmail.com", eyecolor: "black" },
  { id: 9, name: "Dato", age: 19, email: "dato@gmail.com", eyecolor: "blue" },
  { id: 10, name: "Luka", age: 26, email: "luka@gmail.com", eyecolor: "brown" },
];

app.get("/users", (req, res) => {
  let { page = 1, limit = 13 } = req.query;
  page = Number(page);
  limit = Number(limit);

  const start = (page - 1) * limit;
  const end = page * limit;
  const paginatedUsers = users.slice(start, end);

  res.json({
    page,
    limit,
    total: users.length,
    users: paginatedUsers,
  });
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/users", (req, res) => {
  const { name, age, email, eyecolor } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({ message: "Age must be between 10 and 30" });
  }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
    email: email || null,
    eyecolor: eyecolor || null,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age, email, eyecolor } = req.body;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({ message: "Age must be between 10 and 30" });
  }

  user.name = name;
  user.age = age;
  user.email = email || user.email;
  user.eyecolor = eyecolor || user.eyecolor;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.get("/secret", (req, res) => {
  const secretKey = req.headers.secret;
  if (!secretKey || secretKey !== "12345") {
    return res
      .status(403)
      .json({ message: "unauth", data: "ar gaqvs dashveba secretze" });
  }
  res.json("secret info");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
