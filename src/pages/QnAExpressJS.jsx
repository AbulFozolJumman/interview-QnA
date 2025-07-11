/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const QnAExpressJS = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">Express.js?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Express.js is a minimal and flexible Node.js web application framework
          that helps developers build web servers and APIs easily.
          <br />
          It provides built-in tools to handle routes, HTTP requests/responses,
          and middleware, so we don’t need to write raw Node.js code for
          everything.
          <br />
          For example, instead of writing 10 lines in Node.js just to create a
          server, Express lets us do it in just 2-3 lines. It's very popular
          because it's fast, easy to learn, and has a huge community.
          <br />
          I personally use Express in most of my backend projects to create REST
          APIs, handle routes, and connect to databases like MongoDB.
          <br />
          <br />
          Express.js হলো Node.js-এর উপরে তৈরি একটি লাইটওয়েট ও ফ্লেক্সিবল ওয়েব
          ফ্রেমওয়ার্ক, যা দিয়ে আমরা খুব সহজে ওয়েব সার্ভার ও API বানাতে পারি।
          <br />
          এটা রাউট, HTTP রিকোয়েস্ট-রেসপন্স, এবং মিডলওয়্যার হ্যান্ডেল করার জন্য
          অনেক সহজ ও ছোট কোডে সব কিছু করে দেয়।
          <br />
          যেমন, যেখানে Node.js-এ ১০ লাইন কোড লিখে সার্ভার বানাতে হয়, সেখানে
          Express.js দিয়ে ২-৩ লাইনে সেটা করা যায়।
          <br />
          আমি নিজে Express.js ব্যবহার করে অনেক REST API তৈরি করেছি এবং MongoDB
          এর সঙ্গে সংযুক্ত করে ডেটা ম্যানেজ করেছি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What are <span className="font-bold">queries</span> in Express JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Express.js, queries refer to the query parameters that are sent
          through the URL — usually after a `?` symbol.
          <br />
          They are used to filter, sort, or search data from the backend. We can
          access them in Express using `req.query`.
          <br />
          For example, if the URL is:
          <br />
          /products?category=men&sort=price
          <br />
          Then in Express, we can get the values like this:
          <br />
          req.query.category // "men"
          <br />
          req.query.sort // "price"
          <br />
          So, queries help us make our API more dynamic and flexible.
          <br />
          <br />
          Express.js-এ queries বলতে আমরা যেটা বুঝি, সেটা হলো query parameters —
          যেগুলো URL-এর `?` চিহ্নের পরে পাঠানো হয়।
          <br />
          এই কোয়েরি ব্যবহার করে আমরা ডেটা filter, search, বা sort করতে পারি।
          Express-এ এগুলো আমরা `req.query` দিয়ে পাই।
          <br />
          যেমন URL যদি হয়:
          <br />
          /products?category=men&sort=price
          <br />
          তাহলে আমরা Express কোডে লিখতে পারি:
          <br />
          req.query.category // "men"
          <br />
          req.query.sort // "price"
          <br />
          মানে, কোয়েরি প্যারামিটার আমাদের API কে অনেক বেশি ডায়নামিক করে তোলে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. Why Do you use <span className="font-bold">try-catch</span> in
          Express JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          We use `try-catch` in Express.js to handle errors safely — especially
          inside `async/await` functions.
          <br />
          Whenever we write backend logic like database queries or API calls,
          things can go wrong — for example, database may not respond, or input
          might be invalid.
          <br />
          If we don’t use `try-catch`, the server may crash or send unhelpful
          errors to the user.
          <br />
          Using `try-catch`, we can:
          <br />
          * Catch the error,
          <br />
          * Log it,
          <br />
          * Send a proper error response to the client (like status `500` with a
          message),
          <br />
          * And make sure the server keeps running.
          <br />
          So overall, `try-catch` makes our Express app more reliable and
          user-friendly.
          <pre>
            {`
// Here’s a small example:
app.get("/user", async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
`}
          </pre>
          <br />
          Express.js-এ আমরা `try-catch` ব্যবহার করি error ধরতে এবং সেগুলোকে
          সঠিকভাবে হ্যান্ডেল করতে — বিশেষ করে যখন `async/await` ব্যবহার করি।
          <br />
          যেমন ধরুন, ডেটাবেজে কিছু খুঁজতে গিয়ে কোনো ভুল হলে, বা কোনো ইনপুট
          ইনভ্যালিড হলে, তখন যদি আমরা `try-catch` না দিই, তাহলে সার্ভার ক্র্যাশ
          করে যেতে পারে।
          <br />
          কিন্তু `try-catch` দিয়ে আমরা:
          <br />
          * error ধরতে পারি,
          <br />
          * লগ করে রাখতে পারি,
          <br />
          * ক্লায়েন্টকে সুন্দরভাবে error response দিতে পারি (যেমন: 500 স্ট্যাটাস
          + বার্তা),
          <br />
          * এবং সার্ভারকে চালু রাখতে পারি।
          <br />
          মানে, `try-catch` আমাদের অ্যাপকে রিলায়েবল এবং ইউজার-ফ্রেন্ডলি করে
          তোলে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. Mention some <span className="font-bold">features</span> of
          Express JS.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Express.js has several important features that make it one of the most
          popular backend frameworks for Node.js. Here are some key features:
          <br />
          1. Routing: Express provides a powerful and flexible routing system
          that lets us handle different HTTP methods like GET, POST, PUT, DELETE
          very easily.
          <br />
          2. Middleware Support: We can use built-in or custom middleware to
          process requests — for example, logging, authentication, validation,
          or error handling.
          <br />
          3. Fast & Minimal: Express is lightweight. It doesn’t force any
          structure — so we can build small or large applications with full
          control.
          <br />
          4. Built-in Error Handling: It has a mechanism to catch and handle
          errors gracefully using middleware.
          <br />
          5. Support for Templating Engines: It supports template engines like
          EJS, Pug, or Handlebars to render dynamic HTML.
          <br />
          6. Easy Integration with Databases: Express can easily connect with
          MongoDB, MySQL, PostgreSQL, etc., using tools like Mongoose or
          Sequelize.
          <br />
          7. Highly Extensible: Express allows us to use third-party packages
          from npm to add any feature we need — like file upload,
          authentication, etc.
          <br />
          <br />
          Express.js-এর কিছু গুরুত্বপূর্ণ ফিচার আছে, যেগুলো এটিকে অনেক জনপ্রিয়
          করেছে Node.js-এর জন্য। নিচে কিছু মূল ফিচার দিচ্ছি:
          <br />
          1. Routing System: Express-এর রাউটিং সিস্টেম খুব শক্তিশালী। GET, POST,
          PUT, DELETE — সব ধরনের রিকোয়েস্ট সহজে হ্যান্ডেল করা যায়।
          <br />
          2. Middleware সাপোর্ট: আমরা কাস্টম বা বিল্ট-ইন মিডলওয়্যার ব্যবহার করে
          রিকোয়েস্ট প্রসেস করতে পারি — যেমন লগিং, অথেন্টিকেশন, ভ্যালিডেশন,
          ইত্যাদি।
          <br />
          3. Fast & Lightweight: Express খুবই হালকা এবং কোন নির্দিষ্ট স্ট্রাকচার
          চাপিয়ে দেয় না — আমরা নিজের মতো করে ছোট বা বড় অ্যাপ বানাতে পারি।
          <br />
          4. Error Handling: Express নিজে থেকে এরর ধরার ব্যবস্থা রাখে, এবং
          কাস্টম এরর হ্যান্ডলিংও করা যায় মিডলওয়্যারের মাধ্যমে।
          <br />
          5. Template Engine Support: EJS, Pug, Handlebars এর মতো টেমপ্লেট
          ইঞ্জিন ব্যবহার করে ডাইনামিক HTML রেন্ডার করা যায়।
          <br />
          6. ডেটাবেজ Integration: MongoDB, MySQL, PostgreSQL-এর মতো ডেটাবেজের
          সাথে সহজে কানেক্ট করা যায়।
          <br />
          7. Extensible Architecture: আমরা চাইলে npm থেকে যে কোনো প্যাকেজ যুক্ত
          করে নতুন ফিচার সহজে যোগ করতে পারি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. Why do we <span className="font-bold">use</span> Express JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          I use Express.js because it makes backend development with Node.js
          much simpler and faster.
          <br />
          🔹 It gives me a clean and organized structure to build RESTful APIs.
          For example, instead of manually handling routes or parsing requests
          like in raw Node.js, Express provides built-in support such as
          routing, JSON parsing, and request handling.
          <br />
          🔹 It also supports middleware, which allows me to add extra
          functionality like authentication, logging, or error handling in a
          clean and reusable way.
          <br />
          🔹 Another reason I prefer Express is because of its flexibility — it
          doesn’t force a strict structure, so I can scale my project the way I
          want, whether it's a small app or a large backend system.
          <br />
          🔹 Also, since it has a huge ecosystem, I can use ready-made packages
          to add features like file upload, CORS, validation, etc.
          <br />
          So overall, Express helps me write clean, efficient, and maintainable
          backend code, and that’s why I use it in almost all my Node.js
          projects.
          <br />
          <br />
          আমি Express.js ব্যবহার করি কারণ এটি Node.js দিয়ে ব্যাকএন্ড তৈরি করা
          অনেক সহজ ও দ্রুত করে তোলে।
          <br />
          🔹 Express.js আমাকে organized ও clean way তে REST API বানানোর সুযোগ
          দেয়। Raw Node.js-এ অনেক কিছু ম্যানুয়ালি করতে হয়, কিন্তু Express এসব
          জিনিস বিল্ট-ইনভাবে সাপোর্ট করে — যেমন routing, JSON parsing, বা
          request handle করা।
          <br />
          🔹 এর middleware system আমার খুব পছন্দ — আমি আলাদা ফাংশনের মতো করে
          authentication, error handling, logging ইত্যাদি handle করতে পারি।
          <br />
          🔹 Express.js অনেক flexible, কোনো জটিল boilerplate নেই — আমি আমার
          নিজের মতো করে স্ট্রাকচার তৈরি করতে পারি, ছোট বা বড় যে কোন প্রজেক্টে।
          <br />
          🔹 এছাড়া, Express এর ecosystem অনেক বড় — npm থেকে বিভিন্ন প্যাকেজ
          ব্যবহার করে আমি ফিচার যোগ করতে পারি — যেমন CORS, file upload, বা
          validation।
          <br />
          সব মিলিয়ে, Express আমাকে clean, efficient, এবং maintainable কোড লিখতে
          সাহায্য করে — তাই আমি প্রায় সব Node.js প্রজেক্টেই Express.js ব্যবহার
          করি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. Difference between{" "}
          <span className="font-bold">Node JS and Express JS?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Node.js and Express.js are related, but they are not the same. Here's
          how they differ:
          <br />
          🔹 Node.js is a runtime environment that allows us to run JavaScript
          on the server side.
          <br />
          🔹 Express.js is a web framework built on top of Node.js to make
          building web servers and APIs easier.
          <br />
          <br />
          🔹 Node.js gives us the core tools like HTTP module to create a server
          manually.
          <br />
          🔹 Express.js gives us ready-made features like routing, middleware,
          request handling, etc.
          <br />
          <br />
          🔹 Without Express, using Node.js directly means writing more
          boilerplate code to handle requests.
          <br />
          🔹 With Express, we can write cleaner and shorter code with less
          effort.
          <br />
          <br />
          🔹 Node.js is the foundation, and Express.js is the toolkit that makes
          backend development with Node faster and easier.
          <br />
          So in short, Node.js runs the server, and Express.js helps build the
          server efficiently.
          <br />
          <br />
          Node.js আর Express.js একসাথে কাজ করে, কিন্তু এরা আলাদা জিনিস। নিচে
          পার্থক্যগুলো বলছি:
          <br />
          🔹 Node.js হলো একটি runtime environment যা দিয়ে আমরা সার্ভারে
          JavaScript চালাতে পারি।
          <br />
          🔹 Express.js হলো Node.js-এর উপর তৈরি একটি ফ্রেমওয়ার্ক, যা দিয়ে ওয়েব
          সার্ভার বা API বানানো সহজ হয়।
          <br />
          <br />
          🔹 Node.js শুধু core modules দেয়, যেমন HTTP server তৈরি করার জন্য।
          <br />
          🔹 Express.js অনেক ready-made feature দেয় — যেমন routing, middleware,
          response handling ইত্যাদি।
          <br />
          <br />
          🔹 Node.js দিয়ে সব কিছু ম্যানুয়ালি করতে হয় — কোড বেশি লাগে।
          <br />
          🔹 Express.js দিয়ে কম কোডে বেশি কাজ করা যায় — কোড পরিষ্কার থাকে।
          <br />
          <br />
          🔹 Node.js হলো বেস প্ল্যাটফর্ম, আর Express.js হলো toolkit, যেটা দিয়ে
          আমরা backend ডেভেলপমেন্টকে সহজ করি।
          <br />
          সংক্ষেপে বললে, Node.js সার্ভার চালায়, আর Express.js দিয়ে সেই সার্ভার
          বানানো সহজ হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is <span className="font-bold">Middleware</span> in Express
          JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Express.js, middleware is a function that runs between the request
          and the response.
          <br />
          When a user sends a request to the server, middleware can do things
          before sending the final response — like:
          <br />
          🔹 Checking if the user is logged in
          <br />
          🔹 Validating data
          <br />
          🔹 Logging the request
          <br />
          🔹 Catching errors
          <br />
          🔹 Or even modifying the request or response
          <br />
          In Express, middleware functions receive `req`, `res`, and `next`. We
          call `next()` to pass control to the next middleware or route handler.
          <br />
          So, middleware helps us write cleaner, reusable code, and keeps the
          app organized.
          <br />
          <pre>{`
🔹 Here’s a small example:
const myLogger = (req, res, next) => {
  console.log("Request received at:", new Date());
  next(); // move to next
};

app.use(myLogger);
`}</pre>
          <br />
          Express.js-এ middleware হলো এমন একটি function, যা রিকোয়েস্ট আর
          রেসপন্সের মাঝে চলে।
          <br />
          মানে, যখন ইউজার কোনো রিকোয়েস্ট পাঠায়, middleware সেই রিকোয়েস্ট process
          করতে পারে, চেক করতে পারে, বা modify করতে পারে, রেসপন্স পাঠানোর আগেই।
          <br />
          middleware দিয়ে আমরা যেসব করতে পারি:
          <br />
          🔹 ইউজার লগইন করা আছে কি না, সেটা চেক করা
          <br />
          🔹 ডেটা ভ্যালিডেশন
          <br />
          🔹 লগ রাখা
          <br />
          🔹 এরর ধরার কাজ
          <br />
          🔹 রিকোয়েস্ট বা রেসপন্সের কোনো অংশ পরিবর্তন করা
          <br />
          Middleware আমাদের কোডকে পরিষ্কার, রিইউজেবল ও সহজে মেইনটেইনযোগ্য করে
          তোলে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. Explain what is <span className="font-bold">CORS</span> in Express
          jS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          CORS stands for Cross-Origin Resource Sharing. <br />
          In simple terms, it's a security feature that controls which websites
          are allowed to access data from your server.
          <br />
          By default, browsers block requests coming from different origins
          (like frontend on `http://localhost:3000` trying to access API on
          `http://localhost:5000`).
          <br />
          If we don’t enable CORS, the browser will block the request, even if
          our server is working fine.
          <br />
          In Express.js, we can enable CORS easily by using the `cors` package:
          <pre>{`
const cors = require("cors");
app.use(cors());
`}</pre>
          <br />
          We can also configure it to allow specific origins like this:
          <pre>{`
app.use(cors({
  origin: "http://localhost:3000"
}));
`}</pre>
          <br />
          So, we use CORS in Express to allow frontend and backend to talk
          securely when they are on different domains or ports.
          <br /> <br />
          CORS এর পূর্ণরূপ হলো Cross-Origin Resource Sharing <br />
          এটা এক ধরনের সিকিউরিটি মেকানিজম, যা ঠিক করে কোন কোন ওয়েবসাইট আপনার
          সার্ভার থেকে ডেটা নিতে পারবে।
          <br />
          ডিফল্টভাবে ব্রাউজার এমন রিকোয়েস্ট ব্লক করে দেয়, যদি রিকোয়েস্টটি ভিন্ন
          origin থেকে আসে। যেমনঃ <br />
          আপনার ফ্রন্টএন্ড `http://localhost:3000` আর ব্যাকএন্ড
          `http://localhost:5000` — এটা হলে ব্রাউজার রিকোয়েস্ট ব্লক করবে যদি
          CORS না থাকে।
          <br />
          Express.js-এ আমরা `cors` প্যাকেজ ব্যবহার করে খুব সহজেই এটা এনাবল করতে
          পারি:
          <pre>{`
const cors = require("cors");
app.use(cors());
`}</pre>
          <br />
          নির্দিষ্ট কোনো origin অনুমতি দিতে চাইলে এমনভাবে কনফিগার করা যায়:
          <pre>{`
app.use(cors({
  origin: "http://localhost:3000"
}));
`}</pre>
          <br />
          সুতরাং, আমরা CORS ব্যবহার করি যাতে frontend আর backend আলাদা origin-এ
          থেকেও একে অপরের সাথে নিরাপদে যোগাযোগ করতে পারে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. What are the different types of{" "}
          <span className="font-bold">HTTP requests?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          There are several types of HTTP request methods, but in backend
          development — especially with Express.js — we mostly use the following
          five common types:
          <br />
          🔹 GET – This is used to read or fetch data from the server.
          <br />
          *Example: Getting all products from `/api/products`.*
          <br />
          🔹 POST – This is used to send or create new data on the server.
          <br />
          *Example: Creating a new user with data sent in the body.*
          <br />
          🔹 PUT – This is used to update existing data completely.
          <br />
          *Example: Updating a product's details by replacing all fields.*
          <br />
          🔹 PATCH – This is used to partially update data.
          <br />
          *Example: Updating just the price of a product.*
          <br />
          🔹 DELETE – This is used to remove data from the server.
          <br />
          *Example: Deleting a user by their ID.*
          <br />
          Each of these methods has its own purpose and is used based on what
          action we want to perform on the data.
          <br />
          <br />
          HTTP রিকোয়েস্টের বিভিন্ন টাইপ আছে, কিন্তু আমরা যেগুলো সবচেয়ে বেশি
          ব্যবহার করি, সেগুলো হলো:
          <br />
          🔹 GET – সার্ভার থেকে ডেটা রিড বা আনতে ব্যবহার হয়।
          <br />
          *উদাহরণ: `/api/products` থেকে সব প্রোডাক্ট আনা।*
          <br />
          🔹 POST – সার্ভারে নতুন ডেটা পাঠাতে বা তৈরি করতে ব্যবহার হয়।
          <br />
          *উদাহরণ: নতুন ইউজার রেজিস্টার করা।*
          <br />
          🔹 PUT – কোনো ডেটা সম্পূর্ণভাবে আপডেট করতে ব্যবহার হয়।
          <br />
          *উদাহরণ: একটি প্রোডাক্টের সব ইনফো একসাথে আপডেট করা।*
          <br />
          🔹 PATCH – কোনো ডেটার একটা অংশ আপডেট করতে ব্যবহার হয়।
          <br />
          *উদাহরণ: শুধু প্রোডাক্টের দাম আপডেট করা।*
          <br />
          🔹 DELETE – সার্ভার থেকে ডেটা মুছে ফেলতে ব্যবহার হয়।
          <br />
          *উদাহরণ: কোনো ইউজারকে ডিলিট করা।*
          <br />
          এই প্রতিটি রিকোয়েস্ট টাইপের নিজস্ব কাজ আছে, এবং আমরা প্রয়োজন অনুযায়ী
          সেগুলো ব্যবহার করি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What is the use of <span className="font-bold">app.use</span> in
          Express JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Express.js, `app.use()` is used to apply middleware or set up
          routes that should run for every incoming request or a specific path.
          <br />
          We mostly use `app.use()` for:
          <br />
          🔹 Registering Middleware – like logging, authentication, body
          parsing, CORS, etc.
          <br />
          🔹 Serving static files – like images, CSS, or JS files from a folder.
          <br />
          🔹 Using routers – to group routes under a common path.
          <br />
          Here are a few examples:
          <br />
          1️⃣ Using middleware:
          <br />
          app.use(express.json()); // to parse JSON data
          <br />
          2️⃣ Using routers:
          <br />
          app.use("/api/products", productRoutes);
          <br />
          3️⃣ Serving static files:
          <br />
          app.use(express.static("public"));
          <br />
          So basically, `app.use()` is a universal method to apply something
          globally or to specific paths.
          <br />
          <br />
          Express.js-এ `app.use()` ব্যবহার করা হয় middleware অ্যাপ্লাই করার জন্য
          বা কোনো নির্দিষ্ট path-এর নিচে কোড চালানোর জন্য।
          <br />
          আমরা `app.use()` সাধারণত যেসব কাজে ব্যবহার করি:
          <br />
          🔹 Middleware রেজিস্টার করা – যেমন logging, authentication, body
          parsing ইত্যাদি।
          <br />
          🔹 Static ফাইল সার্ভ করা – যেমন CSS, JS, image ইত্যাদি।
          <br />
          🔹 Router ব্যবহার করা – যাতে বড় প্রজেক্টে রাউটগুলো আলাদা আলাদা ফাইলে
          রাখা যায়।
          <br />
          উদাহরণ:
          <br />
          1️⃣ Middleware ব্যবহার করতে:
          <br />
          app.use(express.json()); // JSON ডেটা পার্স করার জন্য
          <br />
          2️⃣ Router যুক্ত করতে:
          <br />
          app.use("/api/products", productRoutes);
          <br />
          3️⃣ Static ফাইল সার্ভ করতে:
          <br />
          app.use(express.static("public"));
          <br />
          সংক্ষেপে, `app.use()` হচ্ছে এমন একটা মেথড, যেটা দিয়ে আমরা গ্লোবালি
          middleware বা router অ্যাপ্লাই করতে পারি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. What is the difference between{" "}
          <span className="font-bold"> app.use() and app.set()</span> in Express
          JS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Both `app.use` and `app.set` are important methods in Express, but
          they are used for different purposes.
          <br />
          🔹 `app.use()` is used to apply middleware or mount routers.
          <br />
          It tells Express to use a function or a route handler for incoming
          requests.
          <br />
          📌 Example:
          <br />
          app.use(express.json()); // middleware to parse JSON
          <br />
          app.use("/api/users", userRoutes); // mount a router
          <br />
          🔹 `app.set()` is used to configure settings or variables in the
          Express app.
          <br />
          We use it for setting things like the view engine, port, or app name.
          <br />
          📌 Example:
          <br />
          app.set("view engine", "ejs"); // setting view engine
          <br />
          app.set("title", "My App"); // custom app setting
          <br />
          📌 In short:
          <br />
          🔹 `app.use` = For middleware and routing
          <br />
          🔹 `app.set` = For configuration and application-level settings
          <br />
          <br />
          `app.use` আর `app.set` — দুইটাই Express.js-এর মেথড, কিন্তু দু’টার কাজ
          আলাদা।
          <br />
          🔹 `app.use()` ব্যবহার করা হয় middleware বা router apply করার জন্য।
          <br />
          মানে, এটা বলে দেয় — এই ফাংশন বা রাউট সব incoming request-এ কাজ করবে।
          <br />
          🔹 `app.set()` ব্যবহার করা হয় configuration বা app settings সেট করার
          জন্য।
          <br />
          আমরা এটা দিয়ে view engine, custom নাম, বা যেকোনো কনফিগারেশন সেট করতে
          পারি।
          <br />
          📌 সংক্ষেপে:
          <br />
          🔹 `app.use` = Middleware বা রাউট অ্যাপ্লাই করতে
          <br />
          🔹 `app.set` = App-এর ভেতরের configuration সেট করতে
        </div>
      </div>
    </Container>
  );
};

export default QnAExpressJS;
