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
