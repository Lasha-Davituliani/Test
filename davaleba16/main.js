const express = require("express");
const apiRouter = require("./api/api.route.js");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
