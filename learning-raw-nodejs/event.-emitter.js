const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// listener - 1
myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

// listener - 1
myEmitter.on("birthday", (gift) => {
  console.log(`I will send you a ${gift}`);
});

// listener - 2
myEmitter.emit("birthday", "bike");
