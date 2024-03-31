import Container from "../components/Shared/Container/Container";
/* eslint-disable react/no-unescaped-entities */
const JavascriptQuestions = () => {
  return (
    <Container id="javaScript">
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title bg-white text-3xl">
          1. What is <span className="font-bold">JavaScript?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            JavaScript is a high-level, interpreted programming language
            primarily used for adding interactivity to web pages. It runs on the
            client-side and allows for dynamic content, form validation, and
            other interactive features.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          2. How does JavaScript <span className="font-bold">work?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            JavaScript works by running code in the browser. JavaScript engines
            (like V8, SpiderMonkey, and JavaScriptCore) parse, optimize, and
            execute the code. JavaScript interacts with the Document Object
            Model (DOM) to modify web page elements, respond to user actions,
            and handle asynchronous tasks. It allows variable declarations,
            function creation, and object manipulation.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          3. How does JavaScript code is{" "}
          <span className="font-bold">executed in the Browser?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            In a webpage, the browser reads and runs JavaScript code. It
            executes the code line by line, handling tasks like interacting with
            the page, responding to events, and making requests to servers. This
            happens on the user's device, making web pages dynamic and
            interactive.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          4. What are the differences between{" "}
          <span className="font-bold">“==” and “===” ?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            The double equal(‘==’) It compares only values without considering
            the data type. <br />
            The triple equal(‘===’) It compares both values and data types.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          5. What is a <span className="font-bold">callback</span> function?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Any function that is passed as an argument to another function so
            that it can be executed in that other function is called a callback
            function. In JavaScript, the way to create a callback function is to
            pass it as a parameter to another function and then call it back
            after the task is completed. <br />
            How it works: <br />
            Callbacks are commonly used when handling asynchronous events. They
            allow us to control the flow of execution and handle tasks that take
            time to complete without blocking other code execution <br />
            Usage Example: <br />
            Suppose we have two functions: myFirst and mySecond. We want
            mySecond to run only after myFirst has finished executing.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          6. When will you <span className="font-bold">return</span> something
          from a function?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            When the function completes (finishes running), it returns a value,
            which is a new string with the replacement made. The return
            statement ends the function execution and specifies a value to be
            returned to the function caller.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          7. Tell me about{" "}
          <span className="font-bold">bind, call, and apply.</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            call(): Invokes a function with a specified this value and
            individual arguments provided as comma-separated values. <br />
            apply(): Invokes a function with a specified this value and
            arguments provided as an array or an array-like object. <br />
            bind(): Returns a new function with a bound this value and optional
            initial arguments. The bound function can be invoked later.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          8. What is a <span className="font-bold">Closure</span> in JavaScript?
          How does it work?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Closures are created whenever a variable that is defined outside the
            current scope is accessed from within some inner scope. It gives you
            access to an outer function’s scope from an inner function
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          9. What does the <span className="font-bold">“this”</span> keyword
          indicate in JavaScript?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            The “this” keyword refers to the current object in a method or
            constructor. It references the object that is executing the current
            function. If the function being referenced is a regular function,
            “this” references the global object.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          10.What is Event <span className="font-bold">bubbling</span> in js?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Event Bubbling is a concept in the DOM. It happens when an element
            receives an event, and that event bubbles up to its parent and
            ancestor elements in the DOM tree until it gets to the root element.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          11. What is an Event <span className="font-bold">Loop?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            JavaScript has a runtime model based on an event loop, which is
            responsible for executing the code, collecting and processing
            events, and executing queued sub-tasks. This model is quite
            different from models in other languages like C and Java.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          12. Explain <span className="font-bold">hoisting</span> in JavaScript.
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Hoisting is JavaScript's default behavior of moving all declarations
            to the top of the current scope. In JavaScript, hoisting allows you
            to use functions and variables before they're declared.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          13. What is a <span className="font-bold">recursive function?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            A Recursive function can be defined as a routine that calls itself
            directly or indirectly. And, this technique is known as recursion.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          14. Difference between{" "}
          <span className="font-bold">undefined and null.</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            undefined: A variable that has not been assigned a value is of type
            undefined. A method or statement also returns undefined if the
            variable that is being evaluated does not have an assigned value.{" "}
            <br />
            null: In JavaScript, null is a special value that represents an
            empty or unknown value. It is used to indicate that a variable has
            no value or that it has been explicitly set to nothing.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          15. What are the{" "}
          <span className="font-bold">different data types</span> in JavaScript?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            There are two types of data in JavaScript. <br />
            1. Primitive data types: The predefined data types provided by
            JavaScript language are known as primitive data types. Below is a
            list of Primitive Data Types: Number, String, Boolean, Undefined,
            Null, BigInt, and Symbol. <br />
            2. Non-primitive data types: The data types that are derived from
            primitive data types of the JavaScript language are known as
            non-primitive data types. Below is a list of Non-primitive data
            types: Object, Array.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          16. What is <span className="font-bold">DOM?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            The Document Object Model (DOM) is a programming interface for web
            documents. It allows programs and scripts to dynamically access and
            update the content, structure, and style of a document.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          17. Is JavaScript a{" "}
          <span className="font-bold">static type or a dynamic type?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            JavaScript is a dynamically typed language. In a dynamically typed
            language, the type of a variable is checked during run-time in
            contrast to a statically typed language, where the type of a
            variable is checked during compile-time.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          18. What is a <span className="font-bold"></span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            A variable in programming is like a container that holds a value or
            data. It has a name and can store different information, allowing
            developers to work with and manipulate data in their programs.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          19. What are{" "}
          <span className="font-bold">compilers and interpreters?</span> And
          what is the difference between them?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Compiler: Translates entire source code into machine code before
            execution, resulting in separate executable files. Examples include
            C, C++, and Java. <br />
            Interpreter: Translates and executes source code line by line,
            without producing separate executable files. Examples include
            Python, JavaScript, and Ruby.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          20. What is <span className="font-bold">scope?</span> And what are
          block scope, global scope, and function scope?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Scope determines the accessibility of variables, objects, and
            functions from different parts of the code. <br />
            Block scope: A block scope is created by enclosing statements or
            code within curly braces {}. Variables declared within a block
            scope, using let or const, are only accessible within that block and
            any nested blocks. <br />
            Global scope/Function Scope: The global scope is the outermost scope
            in JavaScript, where variables are declared without any specific
            block scope. It is accessible from anywhere within the program.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          21. <span className="font-bold">find() vs filter().</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            The find method returns the first element in an array that passes a
            specific condition. The output is a single element, not an array. If
            no element passes the condition, undefined is returned. <br />
            The filter method creates a new array with all elements that pass a
            specific condition. If no elements pass the condition, an empty
            array is returned.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          22. <span className="font-bold">map() vs forEach().</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Map: It transforms each element of an array by applying a given
            function and returns a new array with the transformed elements.{" "}
            <br />
            ForEach: It applies a function to each element of an array, but
            doesn't modify the original array, and doesn't return anything.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          23. What is a <span className="font-bold">function</span> in
          Javascript?
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            In JavaScript, a function is a reusable block of code that performs
            a specific task or set of tasks. It is defined with a name, and it
            can take input values (parameters) and return a result. Functions
            help organize and structure code, making it modular and easier to
            maintain.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          24.{" "}
          <span className="font-bold">
            Function declaration vs function expression.
          </span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Function Declaration: Uses the function keyword followed by the
            function name, parameter list, and function body. Function
            declarations are hoisted, meaning they are available throughout the
            entire scope, even before their actual declaration in the code.{" "}
            <br />
            Function Expression: Assigns a function to a variable or property.
            Function expressions are not hoisted and must be defined before they
            are used.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          25. What are the{" "}
          <span className="font-bold">break and continue statements?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            The break statement terminates a while or for loop completely. The
            continue statement terminates the execution of the statements within
            a while or for loop and continues the loop in the next iteration.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          26. What is the <span className="font-bold">global variable?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Global variables are variables that are defined outside of any
            function or block scope in a JavaScript program. They have a global
            scope, meaning they can be accessed from anywhere within the
            program, including inside functions and blocks.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-white text-3xl">
          27. How to handle an{" "}
          <span className="font-bold">asynchronous program?</span>
        </div>
        <div className="collapse-content bg-white text-3xl">
          <p>
            Asynchronous operations in JavaScript can be handled using
            callbacks, promises, or async/await. Callbacks are functions passed
            as arguments to other functions and called when an operation
            completes. Promises provide a more structured way to handle
            asynchronous operations. Async/await is a syntax introduced in ES8
            that allows writing asynchronous code in a more synchronous manner.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default JavascriptQuestions;
