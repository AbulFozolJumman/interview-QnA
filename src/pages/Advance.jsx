/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const Advance = () => {
  return (
    <Container>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-3xl">
          1.Promise, Callback Function
        </div>
        <div className="collapse-content text-3xl">
          <p>
            A callback function is a function that is passed as an argument to
            another function, with the intention of being called or executed
            later, usually after some asynchronous operation or event occurs.
            The purpose of a callback function is to provide a mechanism for
            handling tasks that cannot be performed immediately or
            synchronously. Here's a breakdown of how callback functions work:
            Passing as an Argument: In languages that support higher-order
            functions (functions that can accept other functions as arguments),
            you can pass a function as an argument to another function.
            Execution Later: The function receiving the callback will typically
            perform some operation or task that might take some time to
            complete, such as fetching data from a server, reading a file, or
            executing a time-consuming computation. Calling the Callback: Once
            the task is completed or the event occurs, the function that
            received the callback will call or invoke it, passing any necessary
            data as arguments. Handling Asynchronous Operations: Callbacks are
            often used to handle asynchronous operations in programming, where
            the program can continue executing while waiting for a response from
            an external system or for some other operation to complete. Error
            Handling: Callbacks can also be used for error handling, where a
            callback function can be invoked with an error object if something
            goes wrong during the asynchronous operation.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-3xl">2. Array Methods</div>
        <div className="collapse-content text-3xl">
          <p>
            Array methods in React are utilized for managing and manipulating
            data efficiently within components. Here's a brief overview of their
            purposes: Rendering Lists: Array methods like map() are commonly
            employed to iterate through arrays of data and generate
            corresponding UI elements dynamically. Filtering Data: Methods such
            as filter() enable the selective extraction of data based on
            specified conditions, allowing for the rendering of subsets of data
            or filtering out irrelevant information. Manipulating Data: Array
            methods like reduce(), slice(), and concat() facilitate various data
            manipulation tasks, such as combining arrays, extracting subsets of
            data, or aggregating values, which can be crucial for preparing data
            before rendering. Event Handling: Array methods can also be utilized
            for handling events associated with lists, such as adding or
            removing items from an array based on user interactions, thus
            updating the UI dynamically. In essence, array methods in React play
            a vital role in managing data efficiently and dynamically rendering
            UI components based on that data, contributing to the creation of
            interactive and responsive user interfaces.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          3. Async/Await, Asynchronous Task
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Certainly! Let's break down Async/Await and asynchronous tasks
            without using code examples: Async/Await: Async/Await is a syntax
            feature in JavaScript that simplifies asynchronous code execution.
            It allows you to write asynchronous code that looks and behaves more
            like synchronous code, making it easier to understand and maintain.
            Async Functions: Async/Await revolves around the use of async
            functions, which are declared with the async keyword. When a
            function is declared as async, it automatically returns a Promise,
            enabling the use of the await keyword inside it. Await Keyword:
            Within an async function, the await keyword is used to pause the
            execution of the function until a Promise is resolved. This allows
            asynchronous operations to be performed in a sequential and
            synchronous-like manner. Asynchronous Tasks: Asynchronous tasks are
            operations that may take some time to complete, such as fetching
            data from an API, reading files, or waiting for a timer to expire.
            Async/Await simplifies working with these tasks by allowing you to
            write code that waits for their completion without blocking the main
            thread. Error Handling: Async/Await also simplifies error handling
            in asynchronous code. Errors can be caught using standard try/catch
            blocks, providing a more intuitive way to handle errors that may
            occur during asynchronous operations. Synchronous Look and Feel: One
            of the key benefits of Async/Await is that it provides a
            synchronous-like programming experience while still leveraging the
            asynchronous nature of JavaScript. This makes code easier to read,
            write, and reason about, especially for developers who are more
            accustomed to synchronous programming paradigms. Overall,
            Async/Await is a powerful feature in JavaScript that streamlines
            asynchronous programming, leading to cleaner, more readable, and
            more maintainable code. It's widely used in modern JavaScript
            development, particularly in frameworks and libraries like React,
            Node.js, and Express.js.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          4. DOM (Document Object Model)
        </div>
        <div className="collapse-content text-3xl">
          <p>
            The DOM is a programming interface for web documents. It represents
            the structure of HTML documents as a tree of objects, where each
            object corresponds to a node in the document. <br />
            JavaScript can manipulate the DOM to dynamically change the content,
            structure, and style of web pages in response to user interactions
            or other events.
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">5. Lifting State Up</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              Lifting state up is a pattern used in React for managing shared
              state among multiple components by moving it to their closest
              common ancestor.
            </li>
            <li>
              By lifting state up, you can ensure that multiple components stay
              in sync with each other and maintain a single source of truth for
              the shared state.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">7. This Keyword</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              In JavaScript, the this keyword refers to the object that is
              currently executing the function.
            </li>
            <li>
              Its value depends on how a function is called: in global scope,
              this refers to the global object; in a method, this refers to the
              object the method belongs to; in a function, this refers to the
              global object (in non-strict mode) or undefined (in strict mode).
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">7. Ajax in JavaScript.</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              AJAX (Asynchronous JavaScript and XML) is a technique used in web
              development to send and receive data from a server asynchronously
              without interfering with the current page.
            </li>
            <li>
              It allows for dynamic updating of content without requiring a full
              page reload, improving user experience and interactivity.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">8. Prototype Inheritance</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              Prototype inheritance is a mechanism in JavaScript where objects
              can inherit properties and methods from other objects via a
              prototype chain.
            </li>
            <li>
              Each object has a prototype object, and when a property or method
              is accessed on an object, JavaScript searches the object's
              prototype chain to find the property or method.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">9. Strict Mode</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              Strict mode is a feature in JavaScript that enables a stricter set
              of rules and behaviors for code execution.
            </li>
            <li>
              It helps catch common coding mistakes, prevents certain actions,
              and promotes writing more secure and optimized code.
            </li>
          </p>
        </div>
      </div>
      <div className="collapse bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">10. React Hooks</div>
        <div className="collapse-content text-3xl">
          <p>
            <li>
              React Hooks are functions that allow functional components to use
              state and other React features without writing a class.
            </li>
            <li>
              They enable the use of state and lifecycle methods in functional
              components, promoting code reuse and improving component
              encapsulation.
            </li>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Advance;
