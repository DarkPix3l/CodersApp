import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';
console.log('PORT from env:', process.env.PORT);

const app = express();
app.use(express.json());

app.use(cors({ origin: FRONTEND_ORIGIN })); 

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
