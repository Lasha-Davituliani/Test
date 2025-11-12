const { default: mongoose } = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:Admin123!@cluster1.jck1a59.mongodb.net/?appName=Cluster1"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error, "cound not connect mongoDb");
  }
};
