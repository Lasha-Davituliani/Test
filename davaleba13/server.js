const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Lasha" },
    { id: 2, name: "Nino" },
    { id: 3, name: "Giorgi" },
    { id: 4, name: "Ana" },
    { id: 5, name: "David" },
];

let posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
    { id: 4, title: "Fourth Post" },
    { id: 5, title: "Fifth Post" },
];

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

app.get("/users", (req, res) => {
    const { page = 1, limit = 3, name } = req.query;
    let filteredUsers = users;

    if (name) {
        filteredUsers = filteredUsers.filter((u) =>
            u.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    const start = (page - 1) * limit;
    const end = page * limit;
    res.json(filteredUsers.slice(start, end));
});

app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

app.get("/posts", (req, res) => {
    const { page = 1, limit = 2 } = req.query;
    const start = (page - 1) * limit;
    const end = page * limit;
    res.json(posts.slice(start, end));
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
