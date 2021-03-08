import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import { handleError, notFound } from "./middlewares/errorHandlers.js";
const port = process.env.PORT;
const app = express();

connectDb();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use(notFound);
app.use(handleError);

app.get("/", (req, res) => {
  res.send("Health Ok");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
