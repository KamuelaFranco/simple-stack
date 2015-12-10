<a name="module_SimpleStack"></a>
## SimpleStack
A module to create a very simple stack implementation.


* [SimpleStack](#module_SimpleStack)
    * [~SimpleStack](#module_SimpleStack..SimpleStack)
        * [new SimpleStack()](#new_module_SimpleStack..SimpleStack_new)
        * [.toString()](#module_SimpleStack..SimpleStack+toString)
    * [~push(element)](#module_SimpleStack..push)
    * [~peek()](#module_SimpleStack..peek) ⇒ <code>Object</code>
    * [~pop()](#module_SimpleStack..pop) ⇒ <code>Object</code>
    * [~clear()](#module_SimpleStack..clear)
    * [~length()](#module_SimpleStack..length) ⇒ <code>Number</code>
    * [~clone()](#module_SimpleStack..clone) ⇒ <code>Object</code>

<a name="module_SimpleStack..SimpleStack"></a>
### SimpleStack~SimpleStack
**Kind**: inner class of <code>[SimpleStack](#module_SimpleStack)</code>  

* [~SimpleStack](#module_SimpleStack..SimpleStack)
    * [new SimpleStack()](#new_module_SimpleStack..SimpleStack_new)
    * [.toString()](#module_SimpleStack..SimpleStack+toString)

<a name="new_module_SimpleStack..SimpleStack_new"></a>
#### new SimpleStack()
Represents a stack.


| Param | Description |
| --- | --- |
| ...arguments | [Optional] Initial elements in the stack. |

<a name="module_SimpleStack..SimpleStack+toString"></a>
#### simpleStack.toString()
Overrides Object.prototype.toString to throw errors.

**Kind**: instance method of <code>[SimpleStack](#module_SimpleStack..SimpleStack)</code>  
**Throws**:

- Will throw an error in lieu of coercing stack into a string.
- Will throw an error if the stack is empty.

<a name="module_SimpleStack..push"></a>
### SimpleStack~push(element)
Pushes an element onto the stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
**Throws**:

- Will throw an error if an element is not supplied.


| Param | Description |
| --- | --- |
| element | An element. |

<a name="module_SimpleStack..peek"></a>
### SimpleStack~peek() ⇒ <code>Object</code>
Returns the element at the top of the stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
**Returns**: <code>Object</code> - Element at the top of the stack  
**Throws**:

- Will throw an error if the stack is empty.

<a name="module_SimpleStack..pop"></a>
### SimpleStack~pop() ⇒ <code>Object</code>
Pops (removes) the element at the top of the stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
**Returns**: <code>Object</code> - Popped element  
**Throws**:

- Will throw an error when the stack is empty.

<a name="module_SimpleStack..clear"></a>
### SimpleStack~clear()
Clears the current stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
<a name="module_SimpleStack..length"></a>
### SimpleStack~length() ⇒ <code>Number</code>
Returns the length of the current stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
**Returns**: <code>Number</code> - Stack length  
<a name="module_SimpleStack..clone"></a>
### SimpleStack~clone() ⇒ <code>Object</code>
Returns a copy of the current stack.

**Kind**: inner method of <code>[SimpleStack](#module_SimpleStack)</code>  
**Returns**: <code>Object</code> - Cloned new SimpleStack object  
