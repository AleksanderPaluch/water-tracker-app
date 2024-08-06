import mongoose from "mongoose";

// console.log('dotenv.config(): ', dotenv.config());
// console.log(process.env);

const DB_URI = process.env.DB_URI


mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connection success"))
  .catch((error) => {
    console.error("Database connection failure:", error)
    process.exit(1)
});

