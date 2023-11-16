import express, { Request, Response, Application } from "express";

// Create an instance of the Express application
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

//get route root URL ("/")
app.get("/", (req: Request, res: Response) => {
  res.send("Hello developers");
});

// post route root url('/')
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "data received",
  });
});

export default app;
