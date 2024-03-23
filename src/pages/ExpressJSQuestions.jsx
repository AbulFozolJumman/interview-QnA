/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ExpressJSQuestions = () => {
  return (
    <Container>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-3xl">
          1. What is <span className="font-bold">Express</span> js?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Express.js is a back end web application framework for building
            RESTful APIs with Node.js. It provides features such as middleware,
            routing, template engines, and error handling.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          2. What are <span className="font-bold">queries</span> in Express JS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Queries in Express JS are the key-value pairs that are appended to
            the URL after the question mark (?). They are used to send small
            amounts of information to the server, such as parameters for
            filtering results or querying a database. Express JS automatically
            parses the query strings and stores them in the req.query object,
            which we can access in our route handlers.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          3. Why Do you use <span className="font-bold">try catch</span> in
          Express JS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Try catch is a way of handling errors in JavaScript. It allows us to
            execute some code and catch any errors that may occur, without
            stopping the program. In Express JS, try catch can be useful for
            catching errors in asynchronous code. By using try catch, we can
            send a proper response to the client, or pass the error to a global
            error handler.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          4. Mention some <span className="font-bold">features</span> of Express
          JS.
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Some of the features of Express JS are: <br />
            - Routing: It allows us to define application routes using HTTP
            methods and URLs, and handle different requests with different
            callback functions. <br />
            - Middleware: It enables us to execute additional functions between
            the request and the response, such as logging, authentication, error
            handling, etc. <br />
            - Template engines: It supports various template engines, such as
            EJS, Pug, Handlebars, etc., that allow us to render dynamic HTML
            pages with data from the server. <br />
            - Error handling: It provides a built-in error handler and a way to
            define custom error handlers for different types of errors. <br />
            - Security: It helps us to secure our web applications by providing
            features such as HTTPS support, CSRF protection, helmet middleware,
            etc. <br />- Ease of use: It is easy to install, set up, and
            customize, and it has a large and active community that provides
            documentation, tutorials, and support.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          5. Why do we <span className="font-bold">use</span> Express JS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Some of the reasons why we use Express JS are: <br />
            - It is fast and easy to set up and customize. <br />
            - It supports RESTful APIs, which are a standard way of
            communicating data between web services. <br />
            - It has a large and active community that provides support and
            resources. <br />- It is compatible with many other Node.js modules
            and frameworks, such as MongoDB, Angular, React, etc.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          6. Difference between{" "}
          <span className="font-bold">Node JS and Express JS?</span>
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Node.js is the runtime environment that allows us to run JavaScript
            on the server side, while Express.js is a framework built on top of
            Node.js to simplify the process of building web applications and
            APIs. Express.js is not mandatory when using Node.js, but it is a
            popular choice due to its simplicity and efficiency in handling
            web-related tasks.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          7. What is <span className="font-bold">Middleware</span> in Express
          JS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Middleware in Express.js are functions that are executed in the
            middle of the request-response cycle. They can access and modify the
            request and response objects, perform some processing, and call the
            next middleware function in the chain. Middleware functions can be
            used for various purposes, such as logging, authentication, error
            handling, or performance optimization.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          8. Explain what is <span className="font-bold">CORS</span> in Express
          jS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            CORS stands for Cross-Origin Resource Sharing, which is a mechanism
            that allows web browsers to request resources from different origins
            such as different domains, protocols, or ports. CORS is useful for
            enabling web applications to access data from external APIs or
            services.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          9. What are the different types of{" "}
          <span className="font-bold">HTTP requests?</span>
        </div>
        <div className="collapse-content text-3xl">
          <p>
            Some of the most common ones are: <br />- GET: This request is used
            to retrieve data from a web server. <br />
            - POST: This request is used to send data to a web server. <br />
            - PUT: This request is used to update or replace data on a web
            server. <br />
            - PATCH: This request is similar to PUT, but it only updates or
            modifies a part of the data on a web server. <br />- DELETE: This
            request is used to delete data from a web server.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-3xl">
          10. What is the use of <span className="font-bold">app.use</span> in
          Express JS?
        </div>
        <div className="collapse-content text-3xl">
          <p>
            The app.use function in Express JS is a way to add middleware
            functions to our application. It's crucial for setting up middleware
            and defining how our Express application should handle various
            aspects of the request-response cycle.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ExpressJSQuestions;
