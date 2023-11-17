"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create an instance of the Express application
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// routers
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
// create user route
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
// create course route
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log();
    res.json({
        success: true,
        message: "Course is created successfully",
        data: course,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
//get route root URL ("/")
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello developers");
});
//get route root URL ("/:userId")
app.get("/:userId/:subId", (req, res) => {
    console.log(req.params);
    res.send("Dynamic world is here");
});
// post route root url('/')
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "data received",
    });
});
exports.default = app;
