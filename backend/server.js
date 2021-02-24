import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import productsRouter from "./routes/productRoutes.js";

dotenv.config();
connectDb();

const app = express();
app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Health Ok");
});

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
