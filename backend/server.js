import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import productsRouter from "./routes/productRoutes.js";
import { handleError, notFound } from "./middlewares/errorHandlers.js";
const app = express();
const port = process.env.PORT;

connectDb();

app.get("/", (req, res) => {
  res.send("Health Ok");
});

app.use("/api/products", productsRouter);
app.use(notFound);
app.use(handleError);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
