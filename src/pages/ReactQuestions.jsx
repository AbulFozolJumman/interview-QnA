/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ReactQuestions = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">React js?</span> Tell us about
          <span className="font-bold"> advantages and disadvantages</span> of
          using react js.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          React is an open-source JavaScript library, particularly used for
          single-page applications where the user interface needs to be highly
          dynamic and responsive. React allows developers to create reusable UI
          components. <br />
          <span className="font-bold">Advantages:</span> <br />
          - React's component-based architecture and declarative nature make it
          easier to develop web applications. <br />
          - React code is easy to read and understand, making it easier to
          maintain our application. <br />
          - React's virtual DOM improves the performance of our application,
          making it run faster and smoother. <br />
          - React has a large and active community of developers, which means
          there are many resources available to help us learn and use the
          library. <br />
          <span className="font-bold">Disadvantages:</span> <br />
          - React is just a library, not a full framework. <br />
          - Its library is very large and takes time to understand.It can be
          little difficult for the new programmers to understand. <br />
          - Coding gets complex as it uses inline templating and JSX. <br />-
          Does Not Support SEO. React, by design, was not built with SEO in
          mind.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. Why will you <span className="font-bold"> select ReactJS?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - React is very fast and easy to use. <br />
          - React has the advantage of creating reusable components that make up
          the larger UI. <br />
          - React also integrates well with other libraries and frameworks,
          making it a versatile tool for Front-end development. <br />- React
          has a large and active community of developers, which means there are
          many resources available to help me learn and use the library.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. What is <span className="font-bold"> Virtual dom?</span> What are
          the differences between virtual and real dom?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Virtual DOM stands for Virtual Document Object Model, is a lightweight
          representation of the Real DOM. <br />
          <span className="font-bold">Real DOM vs Virtual DOM</span> <br />-
          Real DOM is The actual representation of our web page's structure in
          the browser consists of HTML elements and attributes arranged in a
          tree. Virtual DOM is a lightweight representation of the Real DOM.
          Essentially a tree data structure mirroring the Real DOM layout.
          <br />
          - Manipulating the Real DOM is expensive and can cause performance
          issues. But in virtual DOM When our UI state changes, React creates a
          new Virtual DOM tree reflecting the update. React compares the old and
          new Virtual DOM trees to identify the minimal changes needed. Only the
          minimum necessary changes are applied to the Real DOM, optimizing
          performance. <br />- Real DOM directly interacts with the user and
          responds to events. Virtual DOM doesn't directly interact with the
          user or handle events.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. Differences between
          <span className="font-bold"> props and state?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In React, props and state are two different concepts that are used to
          manage data in a component. Here's a breakdown of the key differences:{" "}
          <br />
          - Props are used to pass data from a parent component to a child
          component. On the other hand, State manage data within a specific
          component. <br />- Props are immutable, meaning that they cannot be
          changed by the child component. Child component can only access and
          use the prop values. State is mutable, meaning that it can be changed
          by the component itself using the `setState` method.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is the purpose of{" "}
          <span className="font-bold">useState?</span>
          When and why will you use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The useState is a React hook used to manage states within functional
          components. useState store and update data dynamically. I would use
          useState when I need to track user interaction like clicking on a
          button, to display dynamic data, for conditional rendering, for
          managing user input value data etc.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. What is a <span className="font-bold">context API?</span> How does
          it work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Context API allows data to be passed through a component tree without
          having to pass props manually at every level. It's like creating
          global variables that any component within our app can access. <br />
          <span className="font-bold">How it works:</span> <br />
          Creating Context: We start by creating a context using
          React.createContext(). This creates an object that contains a Provider
          and a Consumer.
          <br />
          Provider: The Provider component is used to wrap around the part of
          the component tree where we want to make the data available. It
          accepts a value prop which is the data we want to share.
          <br />
          Using Context: Components that need access to the shared data can
          access it by using useContext() hook. This allows components to access
          the context value.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. Difference between
          <span className="font-bold"> useEffect and useState?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - The useEffect Hook allows us to perform side effects in our
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. <br /> - The useState Hook allows us to
          add state to a functional component. It returns an array with two
          values: the current state and a function to update it.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is <span className="font-bold">JSX?</span> How does it work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JSX is a syntax extension that lets developers write HTML-like code in
          their JavaScript code. It's commonly used with React to build user
          interfaces, making it easier to create and manipulate HTML elements in
          JavaScript code. <br />
          <span className="font-bold">How does it work?</span> <br />
          JSX code is not directly understood by web browsers, as they only
          understand JavaScript. Therefore, JSX code needs to be transformed
          into regular JavaScript before it can be executed in the browser. JSX
          gets transpiled into regular JavaScript for browser interpretation
          typically handled by tools like Babel, which converts JSX syntax into
          function calls.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. Tell us about React
          <span className="font-bold"> Component lifecycle?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The three phases of React component lifecycle are: Mounting, Updating,
          and Unmounting.
          <br />
          - componentDidMount called after the initial rendering. Which used for
          setup like fetching data or initializing the component.
          <br />
          - componentDidUpdate triggered after updates. Which useful for tasks
          like fetching new data or updating the DOM.
          <br />- componentWillUnmount executed before component removal for
          cleanup tasks like clearing resources or event listeners.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What is the purpose of a
          <span className="font-bold"> custom hook?</span> How will you create a
          custom hook?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Custom hooks allow us to extract and reuse stateful logic from
          components. They enable us to create reusable pieces of code that
          encapsulate logic related to state management, side effects, or any
          other functionality that we want to share across multiple components.{" "}
          <br />
          How we create a custom hook: <br />
          Define the Hook: Create a JavaScript function starting with the word
          "use" (this is a convention) that encapsulates the logic we want to
          reuse. Inside this function, we can use React hooks like useState,
          useEffect, useContext, etc., just like we do in a regular component.{" "}
          <br />
          Return Values: Ensure that our custom hook returns whatever values or
          functions we want to expose to components that use it.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. How would you <span className="font-bold">optimize</span> a react
          js application?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          To optimize the performance of a React application, we can follow the
          techniques and best practices: <br />
          - Implement virtualization libraries for efficient rendering of large
          lists. <br />
          - Use React lazy and Suspense features to lazily load components only
          when they're needed. This helps reduce the initial load time of our
          application. <br />
          - Keeping component state local where necessary. <br />- Memoizing
          React components to prevent unnecessary re-renders.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. How will you send data from a
          <span className="font-bold">
            {" "}
            Child Component to the parent component?
          </span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In React, you can send data from a child component to a parent
          component following this systems:
          <br />
          Lifting state up: Lifting state up in React involves moving the state
          from a child component to its parent component. This allows multiple
          child components to share and update the same state, ensuring
          synchronization. <br />
          Use Callbacks: Instead of passing a function directly as a prop, we
          can also define a callback function in the parent component and pass
          it down to the child component as a prop. The child component can then
          call this callback function with the data to be sent to the parent.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What is the best way to send
          <span className="font-bold"> 4 or more</span> props to a child
          component?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          When 4 or more props need to pass from parent component to a child
          component, the best way is to use Context API. Context API allows data
          to be passed through a component tree without having to pass props
          manually at every level. This makes it easier to share data between
          components.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. What is <span className="font-bold">React Router Dom?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          React Router Dom is a popular library for declaratively routing in
          React applications, allowing developers to define dynamic client-side
          routing in a single-page application (SPA). It provides a set of
          components, such as BrowserRouter, Route, Switch, and Link, which
          enable navigation between different views or pages based on the URL
          without the need for a full page reload. React Router Dom helps
          organize and manage application routes, handle URL parameters, nested
          routes, and provide seamless navigation experiences, making it an
          essential tool for building complex React applications with multiple
          views.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse15">
          15. What is the <span className="font-bold"> State?</span> How does it
          work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse15"
          id="collapse15"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          State is used to manage data within a component itself. When the state
          of a component changes, React will automatically re-render the
          component and any child components that depend on that state.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse16">
          16. What is <span className="font-bold"> props drilling</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse16"
          id="collapse16"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Prop drilling occurs when a parent component passes data down to its
          children and then those children pass the same data down to their own
          children. This process can continue indefinitely.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse17">
          17. Why do we <span className="font-bold">inject dependency </span>
          inside a UseEffect hook?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse17"
          id="collapse17"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In a useEffect hook in React, dependency injection is done to specify
          which variables or state values the effect depends on. This ensures
          that the effect runs only when those dependencies change, helping to
          manage side effects.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse18">
          18. What is the <span className="font-bold">react memo()</span>? And
          why will you use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse18"
          id="collapse18"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          React.memo() is a higher-order component in React used for
          memoization. It memorizes functional components to prevent unnecessary
          re-rendering when the component's props remain the same. <br />
          Usage: We use React memo() when we want to avoid re-rendering a
          component unless its props change.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse19">
          19. What are the
          <span className="font-bold"> controlled components </span> in React
          JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse19"
          id="collapse19"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Controlled Components are those in which the form’s data is handled by
          the component's state. A controlled component is under the control of
          the component's state.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse20">
          20. What is the
          <span className="font-bold"> Lifting State up method in react? </span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse20"
          id="collapse20"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Lifting state up in React involves moving the state from a child
          component to its parent component. This allows multiple child
          components to share and update the same state, ensuring
          synchronization.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse21">
          21. What are
          <span className="font-bold"> stateful and stateless components?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse21"
          id="collapse21"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - A stateless component in React is a lightweight component that
          doesn't have its own internal state. <br />- A stateful (class)
          component, on the other hand, has its own internal state.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse22">
          22.
          <span className="font-bold"> Authentication Vs Authorization.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse22"
          id="collapse22"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Here are some key differences between authentication and
          authorization: <br />
          - Authentication verifies the identity of a user or service, and
          authorization determines their access rights. <br />- Authentication
          typically occurs first, followed by authorization. <br />-
          Authentication confirms "who you are," while authorization answers the
          question "What can you do?"
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse23">
          23. What is the <span className="font-bold">diff algorithm?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse23"
          id="collapse23"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A diff algorithm is a method for comparing two sets of data and
          finding the differences between them. It is commonly used in web
          development to make the rendering of dynamic user interfaces more
          efficient by only updating the parts of the interface that have
          changed.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse24">
          24. Significance of the
          <span className="font-bold"> key in react?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse24"
          id="collapse24"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In React, the key attribute is crucial for efficient list rendering.
          It optimizes updates, maintains component identity, prevents
          unnecessary re-renders, and contributes to overall performance.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse25">
          25. What is <span className="font-bold">JWT?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse25"
          id="collapse25"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JWT stands for JSON Web Token. JWT is an open standard for securely
          transmitting information between parties as a JSON object. It is
          commonly used for authorization purposes.
        </div>
      </div>
    </Container>
  );
};

export default ReactQuestions;
