/**
 * A module to create a very simple stack implementation.
 * @module SimpleStack
 */

/**
 * Represents a stack.
 * @constructor
 * @param ...arguments - [Optional] Initial elements in the stack.
 */
function SimpleStack() {
	var argumentsStore = parseArgs(arguments);
	this.dataStore = argumentsStore;
	this.top       = argumentsStore.length;
	this.push      = push;
	this.pop       = pop;
	this.peek      = peek;
	this.clear     = clear;
	this.length    = length;
	this.clone     = clone;
}

/**
 * Parses functional arguments into flattened array.
 * @param ...args - [Optional] Arguments to parse.
 * @private
 */
function parseArgs(args) {
	var parsedArgs = [];
	if (args.length > 0) {
		for (var i=0;i<args.length;i++) {
			if (Array.isArray(args[i])) { // Flatten array arguments
				args[i].forEach(function (argument) {
					parsedArgs.push(argument);
				});
			} else {
				parsedArgs.push(args[i]);
			}
		}
	}
	return parsedArgs;
}

/**
 * Pushes an element onto the stack.
 * @param element - An element.
 * @throws Will throw an error if an element is not supplied.
 */
function push(element) {
	if (element) {
		this.dataStore[this.top++] = element;
	} else {
		throw Error("Cannot push empty element");
	}
}

/**
 * Returns the element at the top of the stack.
 * @returns {Object} Element at the top of the stack
 * @throws Will throw an error if the stack is empty.
 */
function peek() {
	var element = this.dataStore[this.top-1];
	if (element) {
		return element;
	} else {
		throw Error("Stack is empty");
	}
}

/**
 * Pops (removes) the element at the top of the stack.
 * @returns {Object} Popped element
 * @throws Will throw an error when the stack is empty.
 */
function pop() {
	var element = this.dataStore[this.top-1];
	if (element) {
		this.top--;
		return element;
	} else {
		throw Error("Stack is empty");
	}
}

/**
 * Clears the current stack.
 */
function clear() {
	this.top = 0;
	this.dataStore = [];
}

/**
 * Returns the length of the current stack.
 * @returns {Number} Stack length
 */
function length() {
	return this.top;
}

/**
	* Returns a copy of the current stack.
	* @returns {Object} Cloned new SimpleStack object
	*/
function clone() {
	return new SimpleStack(this.dataStore);
}

/**
 * Overrides Object.prototype.toString to throw errors.
 * @throws Will throw an error in lieu of coercing stack into a string.
 * @throws Will throw an error if the stack is empty.
 */
SimpleStack.prototype.toString = function() {
	if (this.dataStore.length > 0) {
		throw Error("Stack has no string representation");
	} else {
		throw Error("Stack is empty");
	}
}

module.exports = SimpleStack;