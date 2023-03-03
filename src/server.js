import Express from "express";

const server = Express();

const port = 3005;

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
