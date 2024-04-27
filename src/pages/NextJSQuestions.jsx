/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const NextJSQuestions = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">Next.js</span>? And what are
          its main <span className="font-bold">features</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Next.js is a powerful React framework designed for building full-stack
          web applications. It combines the flexibility of React components with
          additional features and optimizations provided by Next.js. <br />
          <span className="font-bold">Features:</span> <br />
          <span className="font-bold">Built-in Optimizations:</span> Next.js
          automatically optimizes images, fonts, and scripts to enhance user
          experience. It handles these optimizations out of the box, so we don't
          need to configure them manually. <br />
          <span className="font-bold">Data Fetching:</span> Next.js supports
          both server-side and client-side data fetching.
          <br />
          <span className="font-bold">Server Actions:</span> Next.js execute
          server code directly by calling functions within your Next.js
          application. Skip the API layer and efficiently revalidate cached
          data, updating the UI in a single network roundtrip. <br />
          <span className="font-bold">
            Advanced Routing & Nested Layouts:
          </span>{" "}
          Next.js supports more advanced routing patterns and allows us to
          create complex UI layouts. <br />
          Dynamic HTML Streaming: Next.js instantly stream UI content from the
          server, tightly integrated with the App Router and React Suspense.{" "}
          <br />
          <span className="font-bold">CSS Support:</span> Next.js style our
          application using our preferred tools, including CSS Modules, Tailwind
          CSS, and popular community libraries. <br />
          <span className="font-bold">Route Handlers:</span> Next.js build API
          endpoints to securely connect with third-party services, handle
          authentication, or listen for webhooks. <br />
          <span className="font-bold">Middleware:</span> Next.js take control of
          incoming requests by defining routing and access rules. Use middleware
          for tasks like authentication, experimentation, and
          internationalization. <br />
          <span className="font-bold">Client and Server Rendering:</span>{" "}
          Next.js offers flexible rendering and caching options, including
          Incremental Static Regeneration (ISR) on a per-page level
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. How does{" "}
          <span className="font-bold">
            Next.js differ from create react app
          </span>
          ?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Next.js and Create React App (CRA) are both popular tools for building
          React applications, but they have distinct features and use cases.
          Let's compare them: <br />
          <span className="font-bold">Server-Side Rendering (SSR):</span>{" "}
          Next.js provides built-in support for SSR. CRA does not support SSR
          out of the box. We can configure it manually. <br />
          <span className="font-bold">Static Site Generation (SSG):</span>{" "}
          Next.js supports SSG. It generates HTML at build time, resulting in
          fast loading times. CRA focuses on client-side rendering (CSR) and
          does not offer SSG. <br />
          <span className="font-bold">Configurability:</span> Next.js allows
          flexibility in configuration. We can customize webpack, Babel, and
          other settings to tailor the build process to our needs. CRA provides
          a straightforward setup with minimal configuration. It abstracts away
          complex build configurations, making it beginner-friendly. <br />
          <span className="font-bold">Learning Curve:</span> Next.js have a
          steeper learning curve due to its additional features and options.
          However, it offers more control for advanced developers. CRA
          simplifies the development experience by hiding most of the
          configuration details. It's great for beginners or those who prefer a
          streamlined setup.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. What is Next.js and is it
          <span className="font-bold"> different from react</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Next.js is a React framework for building full-stack web applications.
          It extends React's capabilities by providing features like server-side
          rendering (SSR), static site generation (SSG), built-in routing, and
          backend functionality. React, on the other hand, is a JavaScript
          library focused solely on building user interfaces (UIs) in the
          browser. While React handles the view layer, Next.js adds server-side
          capabilities and optimizations, making it a versatile choice for web
          development.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. What is <span className="font-bold">SSR</span> and when to use it
          in Next.js applications?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          SSR - Server-Side Rendering, is a method used in Next.js applications
          where the page HTML is generated on the server for each request. This
          is particularly useful when our page needs to pre-render data that is
          frequently updated, such as data fetched from an external API.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What are the different{" "}
          <span className="font-bold">data fetching methods</span> in Next.js?
          And would you use each one?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Next.js, there are several methods for fetching data, each suited
          for different use cases. They are: <br />
          <span className="font-bold">getStaticProps: </span> Fetches data at
          build time. It's used for static generation when the data required to
          render the page is available at build time ahead of a user's request.{" "}
          <br />
          <span className="font-bold">getServerSideProps: </span> Fetches data
          on each request to the server. It's used for server-side rendering
          when you need to fetch data per request, and the data changes often.{" "}
          <br />
          <span className="font-bold">getStaticPaths: </span> Used with dynamic
          routes to define a list of paths that have to be rendered to HTML at
          build time. <br />
          <span className="font-bold">Client-side fetching: </span> Using React
          hooks like useEffect and useState, we can fetch data on the client
          side, after the page has been rendered. <br />
          <span className="font-bold">
            Incremental Static Regeneration (ISR):{" "}
          </span>{" "}
          Allow us to update static content after it has been deployed without
          needing to rebuild the entire site
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. What is the significance of{" "}
          <span className="font-bold">app.js and document.js</span> files in the
          Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Next.js, app.js and document.js are two special files that have
          distinct roles in the framework: <br />
          <span className="font-bold">app.js </span>file acts as the main entry
          point for all pages in a Next.js application. It's used to initialize
          pages and allow us to apply shared layouts, global styles, or
          additional page properties across our entire application. Essentially,
          app.js wraps around each page and can be thought of as a component
          that receives the actual page as a child component. <br />
          <span className="font-bold">document.js </span>file is used to augment
          the html and body tags of our Next.js application. It's only rendered
          on the server side and is where we can modify the server-side rendered
          HTML document structure. This is particularly useful for adding things
          like custom meta tags, fonts, or scripts that are common across all
          pages
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. How do you handle <span className="font-bold">routing </span>in
          the Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Next.js, routing is handled primarily through the file system, but
          there are several key features and methods to manage routes
          effectively: <br />
          <span className="font-bold">File-System Based Routing: </span>
          Next.js automatically treats files inside the pages directory as
          routes. The file path corresponds to the route path. For example, a
          file at pages/about.js would be accessible at /about. <br />
          <span className="font-bold">Dynamic Routing: </span>
          We can create dynamic routes by adding square brackets to a file name,
          like pages/posts/[id].js. This would match a route like /posts/1.{" "}
          <br />
          Nested
          <span className="font-bold">Routes: </span>
          By nesting folders within the pages directory, we can create nested
          routes. For instance, a file at pages/blog/first-post.js corresponds
          to the route /blog/first-post. <br />
          <span className="font-bold">Link Component: </span>
          To navigate between pages, we use the Link component from Next.js,
          which allows client-side transitions without a full page reload.{" "}
          <br />
          <span className="font-bold">App Router: </span>
          In version 13, Next.js introduced the App Router built on React Server
          Components, supporting shared layouts, nested routing, loading states,
          and error handling.
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
    </Container>
  );
};

export default NextJSQuestions;
