/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const QnA_NodeJS = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">Nodejs?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Node.js is an open-source, server-side JavaScript runtime environment
          built on Chrome's V8 JavaScript engine. It allows developers to run
          JavaScript code outside of a browser and execute server-side
          applications.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. <span className="font-bold"> Node vs javascript.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - JavaScript is a programming language for scripting within web
          browsers whereas NodeJS is a runtime environment enabling server-side
          JavaScript execution. <br />
          - Javascript executes client-side, handling interactions and dynamic
          content. NodeJS is used for building server-side applications.
          <br />- JavaScript is used for front-end development, including user
          interface interactions. Node.js is commonly used for back-end
          development, powering web servers, APIs, and real-time applications.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. Nodejs{" "}
          <span className="font-bold">single threaded or multi threaded?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Node.js is single-threaded by default. This means that it operates on
          a single thread to handle all client requests. However, it utilizes
          asynchronous, event-driven architecture, allowing it to handle many
          connections simultaneously without blocking the execution flow.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. NodeJs is{" "}
          <span className="font-bold">blocking or non-blocking?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Node.js is non-blocking, meaning that it doesn't wait for I/O
          operations (such as reading files or making network requests) to
          complete before moving on to execute other code. Instead, it utilizes
          an event-driven, asynchronous architecture.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is <span className="font-bold">Npm?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          NPM stands for Node Package Manager, npm is a package manager for
          Node.js that allows developers to easily install, manage, and share
          reusable JavaScript code packages.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. <span className="font-bold">SQL vs NoSQL.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - SQL is Relational databases, meaning data is organized in tables
          with rows and columns. NoSQL is Non-relational databases, offering
          more flexibility. Data can be stored in various formats like key-value
          pairs, documents(JSON) or graphs. <br />
          - SQL requires a predefined and fixed schema for the data. But NoSQL
          Schema is often flexible and dynamic. <br />
          - SQL Uses Structured Query Language (SQL) for querying and
          manipulating data. NoSQL doesn't rely on a single language. Each type
          of NoSQL database might have its own query language or API for
          accessing data. <br />- SQL is typically vertically scalable whereas
          NoSQL is often horizontally scalable.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What will you do if the{" "}
          <span className="font-bold">server side crushes?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          If the server-side crashes in a Node.js application, the first step is
          to identify the root cause of the crash by checking server logs for
          error messages. Once the issue is understood, I will immediately
          restart the server. Then I will implement error handling and recovery
          mechanisms in the code to gracefully handle errors and prevent future
          crashes.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. How does the <span className="font-bold">API work?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          API stands for application programming interface. API works like a
          waiter taking orders at a restaurant from the customer. APIs act like
          that waiter, relaying on requests to a server and bringing back the
          prepared data for the app. It's a simple exchange of requests and
          responses that power the magic behind many online features.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. What is <span className="font-bold">CRUD?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          CRUD stands for Create, Read, Update, and Delete, which are the four
          basic operations performed on data in a database. <br />
          - Create means inserting new data into a database. <br />
          - Read means retrieving existing data from a database. <br />
          - Update means modifying existing data in a database. <br />- Delete
          means removing existing data from a database.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. <span className="font-bold"> Get vs post.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - GET means asking a librarian for a specific book. It retrieves data
          from existing data without modifying anything. GET data travels in the
          URL itself, limited in size and visible to everyone. <br />- POST
          means giving the librarian a new book to add to the collection. It
          sends data to create or update something on the server. POST data goes
          hidden in the request body, offering larger capacity and security.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. What is the difference between{" "}
          <span className="font-bold">PUT and Patch?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Both PUT and PATCH used to update data, but they approach differently.{" "}
          <br />
          - PUT means completely replacing a book on a shelf with a new one. It
          replaces the entire resource with the data we provide. PUT requests
          require sending the complete data, even for just changing a small
          part. <br />- PATCH means carefully fixing a specific page in a book.
          It applies specific changes to specific parts of a resource without
          needing the entire data. PATCH requests only send the details of what
          needs to be modified, making them more efficient for partial updates.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. How will you <span className="font-bold">secure an API?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          To secure an API I can take steps like: <br />
          - Implement robust mechanisms like OAuth, API keys, or JWTs to verify
          user identity and access rights. <br />
          - I will grant users only the minimum permissions required for their
          specific tasks. <br />
          - I will sanitize and validate all user input to prevent injection
          attacks. <br />- I will follow secure coding practices to avoid common
          vulnerabilities.
        </div>
      </div>
    </Container>
  );
};

export default QnA_NodeJS;
