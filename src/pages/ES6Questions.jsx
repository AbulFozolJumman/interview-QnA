/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ES6Questions = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. Tell me about <span className="font-bold">ES6</span>. What ES6{" "}
          <span className="font-bold">features</span> did you use?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          ES6 is Ecmascript 2015,6th new version of Javascript programming
          language. <br />
          Features: <br />
          1. let and const Declarations: let allows block-scoped variable
          declarations while const allows declaring constant variable. <br />
          2. Destructuring: Destructuring is a great way to “destructure” or
          separate the values of arrays or objects into variables. <br />
          3. Modules: ES6 introduced native support for modular JavaScript with
          import and export statements, allowing developers to organize code
          into reusable modules. <br />
          4. Default Parameters: we can set default values for function
          parameters. If no value is provided, the default value is used. <br />
          5. Arrow Functions: Arrow functions provide a shorter syntax for
          defining functions. They automatically bind the value of this based on
          the surrounding context. <br />
          6. Template Literals: Template literals use backticks (`) and allow
          embedding expressions within strings. <br />
          7. Rest and Spread Operators: The rest operator (...) allows gathering
          multiple function arguments into an array, while the spread operator
          (...) allows expanding arrays and objects into individual elements.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What are the differences between{" "}
          <span className="font-bold">var, let, and const</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, let and const are block-scoped variables introduced in
          ECMAScript 6 (ES6), while var is global scope or function scope. Let
          allows reassigning values, whereas const is used for variables that
          should not be reassigned. Var allows reassigning values and can be
          hoisted.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. Why will you use
          <span className="font-bold"> default parameters</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Default parameters allow us to specify a default value for a function
          parameter. This is useful when we want to provide a fallback value in
          case the parameter is not provided when the function is called. It
          helps prevent errors that may occur when attempting to use undefined
          values in function logic.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. How does the<span className="font-bold"> Spread operator</span>{" "}
          work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The spread operator (...) in JavaScript is used to expand iterable
          objects (like arrays) into individual elements. It allows you to
          unpack elements from an array or object and use them in places where
          multiple elements or key-value pairs are expected. The spread operator
          is commonly used for tasks like copying arrays, merging arrays,
          passing function arguments, and creating new arrays or objects with
          modified elements.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is a <span className="font-bold">Prototype chain</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The prototype chain is a fundamental concept in JavaScript where
          objects inherit properties and methods from their prototype objects.
          When accessing a property or method on an object, JavaScript first
          checks if it exists on the object itself. If not, it looks up the
          prototype chain until it finds the property or reaches the end of the
          chain.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. Difference between{" "}
          <span className="font-bold">class and object</span>.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A class defines the structure and behavior of objects, while an object
          is an instance of a class with specific state and behavior defined by
          that class. Classes are used to create and organize objects with
          similar characteristics and behaviors.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. Explain{" "}
          <span className="font-bold">Call by value vs call by reference.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In call by value, a copy of the value of the actual parameter is
          passed to the function, so modifications to the parameter inside the
          function do not affect the original value outside the function. This
          method is commonly used for primitive data types like numbers and
          strings. <br />
          Conversely, call by reference involves passing a reference or memory
          address to the original parameter, allowing modifications made inside
          the function to directly affect the original value outside the
          function. This approach is often used for complex data types like
          arrays and objects.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is a{" "}
          <span className="font-bold">Higher-order Function?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A higher-order function is a function that either takes another
          function as an argument or returns a function as its result.
          Higher-order functions allow us to create more modular, reusable, and
          flexible code. Common examples of higher-order functions include map,
          filter, and reduce in JavaScript.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. Difference between{" "}
          <span className="font-bold">local storage and Session storage.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          1. local storage provides persistent storage across browser
          sessions,tabs and windows, while session storage offers temporary
          storage limited to the current session within a single tab or window.{" "}
          <br />
          2. Data stored in local storage remains available across page reloads
          and across different browser sessions until the user manually clears
          the browser cache or until your web app explicitly clears the data. On
          the other hand, Session storage is temporary and exists only for the
          duration of a single browsing session. It is automatically cleared
          when the user closes the tab or window.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What are <span className="font-bold">cookies</span>? And why will
          you use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Cookies are small pieces of data stored on a user's device by websites
          they visit. These data are sent back to the originating website or
          another website that recognizes that cookie. <br />
          We use cookies for enabling features like user authentication,
          remembering user preferences, tracking user behavior, and
          personalizing website content.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. What is{" "}
          <span className="font-bold">object-oriented programming?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Object-Oriented Programming (OOP) is a fundamental programming
          paradigm used in computer science. It revolves around the concept of
          classes and objects. Classes define shared properties and methods,
          while objects represent specific instances with unique values. OOP
          emphasizes encapsulation, inheritance, polymorphism, and abstraction
          to organize and manage code efficiently, promote reusability.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. Difference between{" "}
          <span className="font-bold">Array vs LinkedList.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Arrays store elements in contiguous memory locations, allowing fast
          access to an element at a specific index. They have a fixed size and
          are efficient for direct access. In contrast, linked lists are less
          rigid, with elements not stored contiguously. They use pointers to
          reference the next element, making them dynamic and suitable for
          frequent insertions and deletions. While arrays excel in access time,
          linked lists offer flexibility
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. How will you <span className="font-bold">debug</span> a JavaScript
          application?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Debugging a JavaScript application involves several techniques. First,
          use breakpoints in your code to pause execution at specific lines and
          inspect variables. Visual Studio supports server-side debugging, while
          the debugger keyword in JavaScript allows you to pause execution
          directly in the browser. Secondly, using browser developer tools like
          Chrome DevTools or Firefox Developer Tools provides powerful debugging
          features such as breakpoints, stepping through code, inspecting
          variables, and monitoring network activity. Additionally, console.log
          statements are useful for logging information to the browser console
          to track the flow of execution and inspect variable values at
          different points in the code. Using debugger statements within the
          code allows pausing execution and transferring control to the browser
          debugger when reached. Furthermore, leveraging third-party tools like
          ESLint or TypeScript for static code analysis can help catch syntax
          errors and potential bugs early in the development process. Lastly,
          testing frameworks such as Jest or Mocha combined with tools like
          Selenium or Cypress for automated testing can help identify and fix
          issues systematically across different parts of the application.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. What is <span className="font-bold">template literal</span> in
          ES6?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Template literals, introduced in ES6, allow for creating strings with
          backticks (` `) instead of single or double quotes. They support
          embedded expressions using `${}` syntax and preserve white space and
          line breaks, making it easier to create dynamic and multi-line strings
          in JavaScript.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse15">
          15. Difference between{" "}
          <span className="font-bold">Spread Operator and rest operator.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse15"
          id="collapse15"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The spread operator (...) is used to expand arrays and objects into
          individual elements, while the rest operator (...) gathers multiple
          function arguments into an array. <br />
          Spread operator spreads elements out, enabling easy copying or
          merging, while rest operator gathers elements into a single variable,
          useful for handling variable function arguments or destructuring.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse16">
          16. What is <span className="font-bold">destructuring</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse16"
          id="collapse16"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Destructuring is a great way to “destructure” or separate the values
          of arrays or objects into variables. It simplifies the process of
          accessing specific elements or properties.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse17">
          17. Tell me about
          <span className="font-bold"> Ternary Operators.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse17"
          id="collapse17"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Ternary operators, also known as conditional operators, provide a
          compact way to express conditional logic in JavaScript. The ternary
          operator consists of three parts: a condition, a value to be returned
          if the condition is true, and a value to be returned if the condition
          is false. Its syntax is <br />
          condition ? valueIfTrue : valueIfFalse
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse18">
          18. Difference between
          <span className="font-bold">
            {" "}
            regular function and arrow function.
          </span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse18"
          id="collapse18"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Regular functions are defined using the function keyword and have
          their own this context, which depends on how they are called. They
          also have access to the arguments object and can be used as
          constructor functions with new. <br />
          On the other hand, arrow functions are defined with arrow notation and
          don't have their own this context. instead, they inherit this from the
          surrounding scope. They do not have access to the arguments object and
          cannot be used as constructor functions with new. Arrow functions
          offer a more concise syntax and are commonly used for simple,
          one-liner functions or when lexical scoping of this is desired.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse19">
          19. What do you mean by<span className="font-bold"> IIFE</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse19"
          id="collapse19"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          IIFE stands for Immediately Invoked Function Expression, is a
          JavaScript construct that combines the power of function expressions,
          closures, and immediate execution. It's a function expression that is
          defined and invoked immediately after its declaration. It prevents
          variables and functions from polluting the global scope. It useful
          when we have initialization code that won't be reused elsewhere.
        </div>
      </div>
    </Container>
  );
};

export default ES6Questions;

{
  /* <span className="font-bold"></span> */
}
