import Express from "express";
import listEndpoints from "express-list-endpoints";
import productsRouter from "./api/products/index.js";
import reviewsRouter from "./api/reviews/index.js";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const server = Express();
const port = 3009;

// Global middlewares

server.use(Express.json());

const imagesFolderPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "./public/images"
);

server.use(Express.static(imagesFolderPath));

// Endpoints

server.use("/products", productsRouter);
server.use("/products", reviewsRouter);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on ${port}`);
});

// server.get(
//   "/hello",
//   (req, res, next) => {
//     console.log("Hello world!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Hi world!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("3rd");
//     res.send("Hi");
//   }
// );

// method, route, middleware
// multiple middlewares for method and routes
// middlewares run one by one, in order
// if send res on 1st one next will not run
