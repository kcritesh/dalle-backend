import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch(() => {
      console.warn("Error : MongoDB not Connected");
    });
};

export default connectDB;
