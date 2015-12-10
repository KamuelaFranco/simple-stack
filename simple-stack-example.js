"use strict";
const SimpleStack = require('./simple-stack');

let s = new SimpleStack();

let list1 = ["David", "Raymond", "Bryan"];
let list2 = ["Cynthia", "Clayton"];

console.log("---Begin initial stack test---");
list1.forEach(name => s.push(name));
console.log(`Length of stack: ${s.length()}`);
console.log(`Element popped: ${s.pop()}`);
console.log(`Peek result: ${s.peek()}`);
list2.forEach(name => s.push(name));
console.log(`Peek result: ${s.peek()}`);
s.clear();
console.log(`Length of stack after clear: ${s.length()}`);
try {
	console.log(`Peek result: ${s.peek()}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
try {
	console.log(`Element popped: ${s.pop()}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
try {
	console.log(`Result of toString: ${String(s)}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
list1.forEach(name => s.push(name));
list2.forEach(name => s.push(name));
console.log("---End initial stack test---");

console.log('---Begin clone stack test---');
let s2 = s.clone();
console.log(`Result of clone toString: ${String(s2)}`);
console.log(`Length of stack: ${s2.length()}`);
s2.push("Roger");
s2.push("Felix");
console.log(String(s2));
console.log(`Element popped: ${s2.pop()}`);
console.log(`Peek result: ${s2.peek()}`);
s2.clear();
console.log(`Length of stack after clear: ${s2.length()}`);
try {
	console.log(`Peek result: ${s2.peek()}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
try {
	console.log(`Element popped: ${s2.pop()}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
try {
	console.log(`Result of toString: ${String(s2)}`);
} catch (error) {
	console.error(`Error: ${error.message}`);
}
console.log('---End clone stack test---');

console.log('---Begin new stack test---');
let s3 = new SimpleStack("Sally", "John", ["Harold", "Kumar", "James"]);
console.log(String(s3));
console.log(s3.pop());
console.log(String(s3));
console.log('---End new stack test---');
