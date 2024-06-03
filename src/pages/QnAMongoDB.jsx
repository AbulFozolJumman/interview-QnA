/* eslint-disable react/no-unescaped-entities */

import Container from "../components/Shared/Container/Container";

const QnAMongoDB = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is the <span className="font-bold">$set</span> in MongoDB?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Ans: In MongoDB, the $set operator is used to replace the value of a
          field with a specified value. $set is to update or create fields
          within a document. <br />
          Behavior: <br />
          i. If the field already exists, $set replaces its value with the
          specified value. <br />
          ii. If the field does not exist, $set creates a new field with the
          specified value. <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What is the{" "}
          <span className="font-bold">purpose of a database</span>?
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
          03. What do you mean by{" "}
          <span className="font-bold">
            database design and database schema design?
          </span>
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
          04. What is <span className="font-bold">mongoose?</span> How does it
          work? Have you ever used it?
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
    </Container>
  );
};

export default QnAMongoDB;
