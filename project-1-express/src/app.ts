import express, { Request, Response, Application, NextFunction } from "express";

// Create an instance of the Express application
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// routers

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

// create user route
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

// create course route

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log();

  res.json({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

//get route root URL ("/")
app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.query);
      res.send(something);
    } catch (err) {
      next(err);
    }
  }
);

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

// route error handler
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default app;
