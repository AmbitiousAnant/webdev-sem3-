const EventEmitter = require('events');

const studentActivity = new EventEmitter();

studentActivity.on('login', () => {
    console.log('Student logged in successfully');
});

studentActivity.on('assignment', () => {
    console.log('Assignment submitted');
});

studentActivity.on('logout', () => {
    console.log('Student logged out');
});

studentActivity.on('exit', () => {
    console.log('Exiting application');
});

studentActivity.emit('login');
studentActivity.emit('assignment');
studentActivity.emit('logout');
studentActivity.emit('exit');

console.log("Starting task...");
setTimeout(() => {
console.log("setTimeout: Task completed after delay");
}, 0);
setImmediate(() => {
console.log("setImmediate: Task is ready");
});
process.nextTick(() => {
console.log("nextTick: Checking task status");
});
console.log("Task is being processed...");