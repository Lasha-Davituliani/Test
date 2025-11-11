const { default: mongoose } = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:Admin123%21@cluster1.jck1a59.mongodb.net/TestProject?retryWrites=true&w=majority&appName=TestProject"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error, "cound not connect mongoDb");
  }
};
