import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConn = connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database error", err.message);
  });
