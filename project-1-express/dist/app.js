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
//get route root URL ("/")
app.get("/", (req, res) => {
    res.send("Hello developers");
});
// post route root url('/')
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "data received",
    });
});
exports.default = app;
