import express, { Request, Response, Application, NextFunction } from "express";

// Create an instance of the Express application
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

//get route root URL ("/")
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello developers");
});

//get route root URL ("/:userId")
app.get("/:userId/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Dynamic world is here");
});

// post route root url('/')
app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "data received",
  });
});

export default app;
