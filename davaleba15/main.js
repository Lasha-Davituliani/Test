const express = require("express");
const apiRouter = require("./api/api");
const secretRouter = require("./api/secret/secret.route.js");
const logger = require("./middleware/logger.middleware.js");
const app = express();

const PORT = 3030;

app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/api/secret", secretRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
