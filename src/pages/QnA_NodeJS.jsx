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
          Node.js is a runtime environment that allows JavaScript to run outside
          the browser mainly on servers. <br />
          It is built on Google Chrome’s V8 JavaScript engine and uses an
          event-driven, non-blocking I/O model which makes it very fast and
          efficient.
          <br />
          In simple terms, with Node.js, we can use JavaScript to build backend
          (server-side) applications like APIs, web servers, real-time chat
          apps, and more.
          <br />
          It’s widely used because it’s fast, lightweight, and uses JavaScript
          which many developers already know from frontend development.
          <br />
          <br />
          Node.js একটি runtime environment, যা ব্রাউজারের বাইরে JavaScript
          চালাতে দেয় মূলত সার্ভারে।
          <br />
          এটি Google Chrome-এর V8 JavaScript engine এর উপর ভিত্তি করে তৈরি এবং
          এটি event-driven ও non-blocking I/O ব্যবহার করে, যার ফলে এটি দ্রুত এবং
          efficient হয়।
          <br />
          সহজভাবে বললে, Node.js এর মাধ্যমে আমরা JavaScript ব্যবহার করে backend
          (server-side) অ্যাপ্লিকেশন বানাতে পারি যেমন API, ওয়েব সার্ভার, চ্যাট
          অ্যাপ ইত্যাদি।
          <br />
          এটি জনপ্রিয় কারণ এটি খুব দ্রুত কাজ করে, হালকা, এবং JavaScript ব্যবহার
          করে যেটা অনেক ডেভেলপার আগে থেকেই জানে।
          <br />
          ✅ Bonus Point
          <br />
          Why is Node.js popular?
          <br />
          Because it's fast, uses a single programming language (JavaScript) for
          both frontend and backend, supports asynchronous programming, and has
          a huge ecosystem (NPM – Node Package Manager) with thousands of
          reusable libraries.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What is the difference between{" "}
          <span className="font-bold"> Node.js and JavaScript?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript is a programming language mainly used to build interactive
          websites. It runs in the browser and helps us control the webpage like
          buttons, forms, animations, and other UI elements.
          <br />
          Node.js is not a language it’s a runtime environment that allows us to
          run JavaScript outside the browser, usually on a server. With Node.js,
          we can use JavaScript to build server-side applications like APIs,
          databases, file systems, etc.
          <br />
          So, the main difference is that JavaScript runs in the browser, while
          Node.js runs on the server. JavaScript is the language, and Node.js
          gives that language a backend environment. <br />
          ✅ Bonus Point: <br />
          Can we run the same JavaScript code in both browser and Node.js?
          <br />
          Some JavaScript code (like logic, loops, and functions) will run in
          both. But DOM-related code (like document.getElementById) only works
          in browsers, not in Node.js.
          <br /> <br />
          JavaScript হলো একটি প্রোগ্রামিং ভাষা, যেটা সাধারণত ওয়েবসাইটকে
          ইন্টারঅ্যাকটিভ বা ডাইনামিক করার জন্য ব্রাউজারে চলে। আমরা এর মাধ্যমে
          বাটন, ফর্ম, অ্যানিমেশন ইত্যাদি কন্ট্রোল করতে পারি।
          <br />
          Node.js কোনো প্রোগ্রামিং ভাষা না এটা একটা runtime environment, যেটার
          মাধ্যমে আমরা ব্রাউজারের বাইরে, সার্ভারে JavaScript চালাতে পারি।
          Node.js দিয়ে আমরা backend অ্যাপ্লিকেশন বানাতে পারি যেমন API তৈরি,
          ডেটাবেজ কানেকশন, ফাইল সিস্টেম এক্সেস ইত্যাদি।
          <br />
          সংক্ষেপে, JavaScript হলো ভাষা, আর Node.js সেই ভাষাকে সার্ভারে চালানোর
          জন্য পরিবেশ তৈরি করে।
          <br />
          ✅ বোনাস পয়েন্ট: <br /> আমরা কি একই JavaScript কোড ব্রাউজার এবং
          Node.js উভয়ই চালাতে পারি? <br /> কিছু JavaScript কোড (যেমন লজিক, লুপ
          এবং ফাংশন) উভয় জায়গায় চলে। কিন্তু DOM-সম্পর্কিত কোড (যেমন
          document.getElementById) শুধুমাত্র ব্রাউজারে কাজ করে, Node.js-এ নয়.
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
          Node.js is single-threaded by default. <br />
          That means it uses one main thread to handle all incoming client
          requests.
          <br />
          But the way Node.js works makes it different from traditional
          single-threaded systems. <br />
          It uses an event loop and asynchronous (non-blocking) operations. So
          even with one thread, it can handle thousands of requests at the same
          time without waiting for one to finish before starting the next.
          <br />
          For example, when Node.js reads a file or accesses a database, it does
          that in the background (using internal threads from a module called
          libuv), and continues to serve other users. When the work is done, it
          picks up the result and sends it back.
          <br />
          So while Node.js uses a single thread in the main execution, it can
          offload heavy tasks to background threads internally. That’s why it's
          fast and efficient for I/O-heavy tasks like APIs, file servers, or
          real-time chat apps. <br />
          Using a single thread with event-driven architecture makes Node.js
          lightweight and highly scalable perfect for handling many users at
          once.
          <br /> <br />
          Node.js মূলত single-threaded, মানে এটা একটা thread দিয়েই সব রিকোয়েস্ট
          হ্যান্ডেল করে।
          <br />
          কিন্তু Node.js এর কাজ করার পদ্ধতি traditional single-thread এর মতো না।{" "}
          <br />
          এটা event loop আর asynchronous (non-blocking) system ব্যবহার করে, যার
          মাধ্যমে একই সময়ে হাজার হাজার রিকোয়েস্ট efficiently manage করতে পারে।
          <br />
          যখন Node.js ফাইল পড়ে বা ডেটাবেজ অ্যাকসেস করে, তখন এই কাজগুলো
          ব্যাকগ্রাউন্ডে পাঠিয়ে দেয় (ভিতরের কিছু থ্রেড, যেমন libuv ব্যবহার করে),
          আর একসাথে অন্য ইউজারের রিকোয়েস্ট সার্ভ করতে থাকে। কাজ শেষ হলে আবার
          ফলাফল তুলে আনে।
          <br />
          তাই, যদিও Node.js এর main execution একটা thread এ চলে, কিন্তু ভিতরে
          ভিতরে কিছু background thread ব্যবহার করে বড় বড় কাজ efficiently manage
          করে।
          <br />
          একটা থ্রেড ব্যবহার করেও Node.js এর event-driven system একে খুব হালকা ও
          স্কেলেবল করে তোলে অনেক ইউজার একসাথে হ্যান্ডেল করতে পারার জন্য এটা
          পারফেক্ট।
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
          Node.js is non-blocking.
          <br />
          That means when it performs a task — like reading a file or calling a
          database — it doesn't wait for that task to finish before moving on to
          the next one.
          <br />
          Instead, it starts the task in the background and continues handling
          other requests.
          <br />
          When the result is ready, Node.js comes back and handles it using
          something called a callback or promise.
          <br />
          This non-blocking behavior makes Node.js very fast and efficient —
          especially for web servers, APIs, or real-time apps — because it can
          handle many users at once without being stuck waiting.
          <br />
          Node.js uses non-blocking I/O operations with an event loop, which
          makes it perfect for I/O-heavy applications like REST APIs, chat apps,
          or file uploads.
          <br />
          <br />
          Node.js non-blocking হয়।
          <br />
          মানে, যখন এটা কোনো কাজ করে — যেমন ফাইল পড়া বা ডেটাবেজে রিকোয়েস্ট
          পাঠানো — তখন এটা অপেক্ষা করে না সেই কাজ শেষ হওয়া পর্যন্ত অপেক্ষা করে
          না।
          <br />
          বরং, কাজটা ব্যাকগ্রাউন্ডে দিয়ে দেয় এবং অন্য কাজ করতে থাকে।
          <br />
          পরে যখন কাজ শেষ হয়, তখন Node.js আবার ফিরে এসে সেই ফলাফল নিয়ে কাজ করে —
          একে বলে callback বা promise দিয়ে হ্যান্ডেল করা।
          <br />
          এই non-blocking system এর জন্য Node.js অনেক দ্রুত কাজ করতে পারে —
          বিশেষ করে ওয়েব সার্ভার, API বা রিয়েল-টাইম অ্যাপের জন্য — কারণ এটা
          একসাথে অনেক রিকোয়েস্ট হ্যান্ডেল করতে পারে, এক জায়গায় আটকে থাকে না।
          <br />
          Node.js non-blocking I/O আর event loop ব্যবহার করে, যা একে I/O-heavy
          অ্যাপ — যেমন REST API, চ্যাট অ্যাপ বা ফাইল আপলোড — এর জন্য আদর্শ করে
          তোলে।
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
          NPM stands for Node Package Manager. <br />
          It is the default package manager for Node.js.
          <br />
          With NPM, we can install, manage, and share reusable code packages
          (called modules or libraries) made by other developers or created by
          ourselves. <br />
          For example, if you want to use Express.js, you don’t have to write it
          from scratch — you can just install it using NPM.
          <br />
          It also helps manage project dependencies, meaning it keeps track of
          which packages your project needs and their versions.
          <br />
          To use NPM, we run commands like npm install express, and it downloads
          the package into your project.
          <br />
          NPM has the largest ecosystem of open-source libraries in the world.
          It allows developers to save time and avoid writing everything from
          scratch.
          <br /> <br />
          NPM এর ফুল ফর্ম হলো Node Package Manager। <br />
          এটা হলো Node.js এর default package manager। <br />
          NPM এর মাধ্যমে আমরা অন্য ডেভেলপারদের বানানো ready-made কোড প্যাকেজ
          (modules/libraries) সহজে install, manage, এবং ব্যবহার করতে পারি।{" "}
          <br />
          যেমন ধরুন, আপনি Express.js ব্যবহার করতে চান — তাহলে আপনাকে নিজে কোড
          লিখতে হবে না, শুধু npm install express কমান্ড চালালেই হবে।
          <br />
          NPM আমাদের প্রজেক্টের dependencies (যে প্যাকেজগুলা দরকার) গুলো manage
          করে এবং কোন ভার্সন লাগবে তা ট্র্যাক করে রাখে।
          <br />
          NPM হলো পৃথিবীর সবচেয়ে বড় open-source লাইব্রেরির collection। এটা
          ডেভেলপারদের সময় বাঁচাতে সাহায্য করে, কারণ অনেক কিছু আগেই তৈরি করা আছে
          — নিজে নতুন করে লিখতে হয় না।
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
          SQL and NoSQL are two types of databases.
          <br />
          * SQL databases are relational, which means they store data in tables
          with rows and columns.
          <br />
          They use a structured language called SQL (Structured Query Language)
          to read and write data.
          <br />
          Examples: MySQL, PostgreSQL, Microsoft SQL Server.
          <br />
          * NoSQL databases are non-relational, which means they store data in
          different formats — like documents, key-value pairs, graphs, or
          wide-columns.
          <br />
          They are more flexible and handle unstructured or changing data
          easily.
          <br />
          Examples: MongoDB, Firebase, Cassandra, Redis.
          <br />
          The main difference is:
          <br />
          * SQL databases need a fixed schema (structure), and are better for
          complex queries.
          <br />
          * NoSQL databases are schema-less, and are better for scalability and
          fast development.
          <br />
          * If your data has a clear structure and relationships, SQL is a
          better choice.
          <br />
          * If your data is flexible or needs to scale fast, NoSQL is more
          suitable.
          <br />
          <br />
          SQL আর NoSQL হলো দুই ধরনের ডেটাবেজ।
          <br />
          * SQL ডেটাবেজ হলো relational, মানে এতে ডেটা টেবিলের মধ্যে সারি ও কলাম
          আকারে রাখা হয়।
          <br />
          এগুলোতে ডেটা ম্যানেজ করার জন্য SQL ভাষা ব্যবহার করা হয়।
          <br />
          উদাহরণ: MySQL, PostgreSQL, SQL Server।
          <br />
          * NoSQL ডেটাবেজ হলো non-relational, মানে এতে ডেটা বিভিন্নভাবে রাখা যায়
          — যেমন ডকুমেন্ট, key-value pair, গ্রাফ বা wide-column ফরম্যাটে।
          <br />
          এগুলো বেশি flexible এবং unstructured বা পরিবর্তনশীল ডেটা সহজে
          হ্যান্ডেল করতে পারে।
          <br />
          উদাহরণ: MongoDB, Firebase, Redis, Cassandra।
          <br />
          মূল পার্থক্য হলো:
          <br />
          * SQL ডেটাবেজে fixed schema দরকার হয় এবং জটিল query-র জন্য ভালো।
          <br />
          * NoSQL ডেটাবেজে schema লাগে না, আর এটা scalability ও দ্রুত
          development এর জন্য ভালো।
          <br />
          * যদি ডেটার structure পরিষ্কার ও সম্পর্কযুক্ত হয়, তাহলে SQL ব্যবহার
          করা ভালো।
          <br />* আর যদি ডেটা flexible হয় বা খুব দ্রুত বাড়ানো লাগে, তাহলে NoSQL
          ভালো অপশন।
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
          If the server crashes, the first thing I will do is check the server
          logs or error messages to understand what caused the crash. <br />
          It could be due to code bugs, memory overload, high traffic, database
          failure, or dependency issues. <br />
          Next, I will:
          <br />
          1. Restart the server to restore service quickly (if allowed). <br />
          2. Check monitoring tools like PM2, logs, or dashboards to find the
          root cause. <br />
          3. Fix the issue — for example, code errors, memory leaks, or
          unhandled exceptions. <br />
          4. If needed, I’ll roll back to the last stable version of the code.{" "}
          <br />
          5. Then I’ll test everything locally and in staging to make sure the
          issue is fixed. <br />
          6. Finally, I will add proper logging, error handling, and monitoring
          so that similar issues don’t happen again. <br />
          So, my focus is to first recover the server, then analyze the cause,
          and finally prevent it in future.
          <br />
          To avoid future crashes, I always prefer using process managers like
          PM2 and set up auto-restart, health checks, and proper try-catch in
          the code.
          <br /> <br />
          যদি সার্ভার ক্র্যাশ করে, তাহলে প্রথমে আমি সার্ভারের লগ বা এরর মেসেজ
          চেক করব, সমস্যা কোথা থেকে হয়েছে সেটা বুঝতে। <br />
          সমস্যা হতে পারে কোডের বাগ, মেমোরি ওভারলোড, অতিরিক্ত ট্রাফিক, ডেটাবেজ
          ডাউন বা ডিপেনডেন্সি সমস্যা থেকে। <br />
          তারপর আমি:
          <br />
          1. সার্ভার রিস্টার্ট করব যেন দ্রুত সার্ভিস চালু হয়। <br />
          2. Monitoring tools বা লগ ব্যবহার করে root cause খুঁজব। <br />
          3. সমস্যাটা ফিক্স করব — যেমন কোড এরর, মেমোরি লিক, বা unhandled error।{" "}
          <br />
          4. যদি দরকার হয়, তাহলে শেষ stable ভার্সনে কোড rollback করব। <br />
          5. এরপর লোকালি ও স্টেজিং-এ ভালোভাবে টেস্ট করব। <br />
          6. আর ভবিষ্যতে যাতে না হয়, সে জন্য ভালো error handling, লগিং ও
          monitoring সেট করব।
          <br />
          সারসংক্ষেপে, আমার প্রথম কাজ হলো সার্ভার ঠিক করা, তারপর সমস্যার কারণ
          খোঁজা, এবং পুনরাবৃত্তি রোধ করা।
          <br />
          ভবিষ্যতে সমস্যা না হয়, সে জন্য আমি PM2-এর মতো process manager ব্যবহার
          করি, auto-restart, health check এবং কোডে try-catch ব্যবহার করে নিরাপদ
          করি।
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
          API stands for Application Programming Interface. <br />
          It works like a messenger between two systems — for example, between
          frontend and backend. <br />
          When a user does something on the frontend — like clicking a button —
          the frontend sends a request to the API (usually through HTTP methods
          like GET, POST, etc.). <br />
          The API receives that request, talks to the database or server,
          processes the data, and then sends a response back to the frontend.{" "}
          <br />
          <br />
          For example, when you log in to a website, your email and password are
          sent to the API. The API checks your info in the database and sends
          back a success or error message.
          <br />
          So, in simple words — API helps two systems talk to each other and
          exchange data safely and efficiently.
          <br />
          APIs follow standards like REST or GraphQL, which help developers
          create scalable and consistent systems.
          <br /> <br />
          API এর ফুল ফর্ম হলো Application Programming Interface। <br />
          এটা দুইটি সিস্টেমের মাঝে একজন বার্তাবাহক (messenger) এর মতো কাজ করে —
          যেমন frontend আর backend এর মধ্যে।
          <br />
          যখন একজন ইউজার ওয়েবসাইটে কোনো কাজ করে — যেমন একটা বাটনে ক্লিক করে —
          তখন frontend থেকে একটা request API-তে যায় (GET, POST এর মতো HTTP
          method দিয়ে)। <br />
          API সেই রিকোয়েস্ট নিয়ে ডেটাবেজ বা সার্ভারের সাথে কথা বলে, ডেটা প্রসেস
          করে, তারপর একটা response ফেরত পাঠায় frontend-এ।
          <br />
          যেমন, আপনি যদি লগইন করেন, তাহলে আপনার ইমেইল ও পাসওয়ার্ড API তে যাবে,
          API ডেটাবেজে মিলিয়ে দেখে সফল হলে লগইন করে দিবে, না হলে এরর দিবে।
          <br />
          সোজা কথায় — API দুইটা সিস্টেমের মধ্যে যোগাযোগ করিয়ে দেয় এবং ডেটা
          আদান-প্রদান করে নিরাপদ ও সহজভাবে।
          <br />
          API সাধারণত REST বা GraphQL এর মতো standard ফলো করে, যাতে করে
          ডেভেলপাররা সহজে স্কেলযোগ্য ও consistent সিস্টেম তৈরি করতে পারে।
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
          CRUD stands for Create, Read, Update, and Delete. <br />
          These are the four basic operations used to manage data in a database
          or an application. <br />
          * Create means adding new data. <br />
          * Read means getting or viewing data. <br />
          * Update means changing existing data. <br />
          * Delete means removing data.
          <br />
          For example, in a user management system:
          <br />
          * Creating a new user is Create <br />
          * Viewing a user profile is Read <br />
          * Editing user info is Update <br />
          * Removing a user is Delete
          <br />
          In web development, we perform CRUD operations using APIs and connect
          them with the database using technologies like Node.js, MongoDB,
          MySQL, etc. <br />
          CRUD operations are the foundation of backend development and are
          commonly connected to HTTP methods like POST, GET, PUT, and DELETE.
          <br /> <br />
          CRUD এর পূর্ণরূপ হলো Create, Read, Update, এবং Delete। <br />
          এই চারটি হলো যেকোনো অ্যাপ বা ডেটাবেজে ডেটা ব্যবস্থাপনার মৌলিক কাজ।{" "}
          <br />
          * Create মানে নতুন ডেটা যোগ করা <br />
          * Read মানে ডেটা দেখা বা রিড করা <br />
          * Update মানে আগের ডেটা পরিবর্তন করা <br />
          * Delete মানে ডেটা মুছে ফেলা
          <br />
          যেমন, একজন ইউজারের ক্ষেত্রে:
          <br />
          * নতুন ইউজার তৈরি করলে সেটা Create <br />
          * ইউজারের প্রোফাইল দেখলে সেটা Read <br />
          * ইউজারের ইনফো পরিবর্তন করলে সেটা Update <br />
          * ইউজারকে ডিলিট করলে সেটা Delete
          <br />
          ওয়েব ডেভেলপমেন্টে আমরা API ব্যবহার করে CRUD কাজগুলো করি, এবং backend এ
          MongoDB বা MySQL দিয়ে ডেটাবেজ হ্যান্ডেল করি।
          <br />
          CRUD হলো backend ডেভেলপমেন্টের ভিত্তি, আর HTTP method যেমন POST, GET,
          PUT, DELETE — এর সাথেও CRUD এর কাজগুলো মিলে যায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What is the difference between{" "}
          <span className="font-bold"> GET and POST?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          GET and POST are two common HTTP methods used in APIs. <br />
          * GET is used to request or fetch data from the server. <br />
          It is read-only, meaning it does not change anything on the server.{" "}
          <br />
          The data in a GET request is usually sent through the URL as query
          parameters.
          <br />* POST is used to send data to the server — usually to create
          something new, like submitting a form or saving data to the database.{" "}
          <br />
          The data in a POST request is sent in the request body, not in the
          URL.
          <br />
          Also, GET requests can be cached, bookmarked, and are visible in the
          browser URL. <br />
          But POST requests are more secure for sending sensitive data because
          they are not shown in the URL.
          <br />
          GET is best for reading or displaying data. <br />
          POST is better when you need to send data securely or create something
          new.
          <br /> <br />
          GET এবং POST হলো API-তে ব্যবহৃত দুইটি সাধারণ HTTP method।
          <br />
          * GET ব্যবহার করা হয় সার্ভার থেকে ডেটা চাওয়ার জন্য। <br />
          এটা শুধু ডেটা পড়ে, কিছু পরিবর্তন করে না। <br />
          GET এর ডেটা সাধারণত URL এর মধ্যে পাঠানো হয় (query parameter দিয়ে)।
          <br />
          * POST ব্যবহার করা হয় সার্ভারে ডেটা পাঠানোর জন্য — যেমন নতুন কিছু তৈরি
          করা, ফর্ম সাবমিট করা বা ডেটাবেজে সেভ করা। <br />
          POST এর ডেটা পাঠানো হয় body এর মধ্যে, URL-এ নয়।
          <br />
          GET রিকোয়েস্টকে আমরা cache করতে পারি, bookmark করতে পারি, আর এটা
          ব্রাউজারে URL-এ দেখা যায়। <br />
          কিন্তু POST সিকিউর, কারণ sensitive ডেটা URL-এ দেখা যায় না — এটা
          body-তে থাকে।
          <br />
          GET ভালো হয় যখন শুধু ডেটা দেখাতে বা পড়তে হয়। <br />
          আর POST ভালো যখন নতুন কিছু তৈরি করতে হয় বা সিকিউর ভাবে ডেটা পাঠাতে হয়।
          <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. What is the difference between{" "}
          <span className="font-bold">PUT and PATCH?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          PUT and PATCH are both HTTP methods used to update data on the server,
          but there is a key difference between them.
          <br />
          * PUT is used to completely replace an existing resource.
          <br />
          If you send a PUT request, you must send all the data — even if you
          are updating only one part.
          <br />
          If some fields are missing, they may be overwritten or removed.
          <br />
          * PATCH is used to partially update a resource.
          <br />
          You only send the specific field(s) you want to update. The rest of
          the data stays the same.
          <br />
          Example:
          <br />
          If you have a user with name and email —<br />
          Using PUT, you must send both name and email.
          <br />
          Using PATCH, you can send just the name, and only the name will be
          updated.
          <br />
          PUT is idempotent — calling it multiple times with the same data gives
          the same result. PATCH may or may not be idempotent depending on the
          use case.
          <br />
          <br />
          PUT আর PATCH — দুইটাই HTTP method, যা সার্ভারে ডেটা আপডেট করার জন্য
          ব্যবহৃত হয়, কিন্তু এদের মধ্যে একটা গুরুত্বপূর্ণ পার্থক্য আছে।
          <br />
          * PUT দিয়ে আমরা পুরো ডেটা একসাথে পরিবর্তন করি।
          <br />
          মানে, আপনি যদি শুধু একটা ফিল্ড পরিবর্তন করতে চান, তারপরও সব ফিল্ড
          পাঠাতে হবে।
          <br />
          যদি কোনো ফিল্ড বাদ দেন, সেটা মুছে যেতে পারে বা null হয়ে যেতে পারে।
          <br />
          * PATCH দিয়ে আমরা আংশিকভাবে (partial) আপডেট করি।
          <br />
          আপনি শুধু যেই ফিল্ডটা পরিবর্তন করতে চান, শুধু সেটাই পাঠাতে পারেন। বাকি
          সব ডেটা আগের মতোই থাকবে।
          <br />
          উদাহরণ:
          <br />
          ধরুন একজন ইউজারের name আর email আছে —<br />
          PUT দিয়ে আপডেট করতে চাইলে name আর email — দুইটাই পাঠাতে হবে।
          <br />
          PATCH দিলে শুধু name দিলেই হবে, শুধু name আপডেট হবে।
          <br />
          PUT হলো idempotent — মানে এক জিনিস বারবার পাঠালে একই ফলাফল পাওয়া যাবে।
          কিন্তু PATCH সবসময় idempotent না — সেটা context এর ওপর নির্ভর করে।
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
          To secure an API, I follow several steps to make sure only authorized
          users can access the data, and the system stays protected from
          attacks.
          <br />
          1. Authentication – First, I make sure the user is verified. I use
          methods like JWT (JSON Web Token) or OAuth to check the user's
          identity.
          <br />
          2. Authorization – After authentication, I check what the user is
          allowed to do. For example, a regular user can’t access admin routes.
          <br />
          3. HTTPS – I always use HTTPS instead of HTTP to make sure the data is
          encrypted while sending between client and server.
          <br />
          4. Rate Limiting – I set a limit on how many requests a user can send
          in a given time to prevent abuse or DDoS attacks.
          <br />
          5. Input Validation – I validate all incoming data to avoid SQL
          injection, XSS, or other malicious inputs.
          <br />
          6. Use API keys or tokens – For third-party access, I use API keys or
          access tokens and keep them private.
          <br />
          7. CORS Policy – I configure CORS properly so only trusted domains can
          access the API.
          <br />
          8. Error Handling – I avoid exposing sensitive error messages that may
          help attackers.
          <br />
          So, I combine these best practices to secure the API from unauthorized
          access and common security threats.
          <br />
          Security is not just one feature — it’s a combination of small steps.
          So I always follow security best practices from day one of
          development.
          <br />
          <br />
          একটি API সিকিউর করতে হলে আমি কিছু গুরুত্বপূর্ণ ধাপ অনুসরণ করি, যাতে
          শুধুমাত্র অনুমোদিত ইউজার ডেটা অ্যাকসেস করতে পারে এবং সার্ভার নিরাপদ
          থাকে।
          <br />
          1. Authentication (প্রমাণীকরণ) – প্রথমে আমি নিশ্চিত করি ইউজার আসল
          কিনা। আমি সাধারণত JWT বা OAuth ব্যবহার করি ইউজার verify করার জন্য।
          <br />
          2. Authorization (অনুমোদন) – ইউজার লগইন করলেও সে কী করতে পারবে, সেটা
          চেক করি। যেমন সাধারণ ইউজার যেন admin রুট অ্যাকসেস করতে না পারে।
          <br />
          3. HTTPS ব্যবহার – সবসময় HTTPS ব্যবহার করি, যাতে ডেটা encrypt হয়ে
          client ও server এর মধ্যে যায়।
          <br />
          4. Rate Limiting – প্রতিটি ইউজার কতবার request পাঠাতে পারবে, সেটা
          লিমিট করে দিই — এতে করে DDoS বা abuse রোধ হয়।
          <br />
          5. Input Validation – API-তে আসা সব ইনপুট ভালোভাবে validate করি যাতে
          SQL injection, XSS এর মতো আক্রমণ প্রতিরোধ করা যায়।
          <br />
          6. API Key বা Token – থার্ড পার্টি অ্যাকসেসের জন্য API key বা token
          ব্যবহার করি এবং এগুলো গোপন রাখি।
          <br />
          7. CORS Policy – CORS ঠিকভাবে কনফিগার করি, যাতে শুধু নির্দিষ্ট
          ট্রাস্টেড ডোমেইন থেকে API অ্যাকসেস করা যায়।
          <br />
          8. Proper Error Handling – এমন error মেসেজ দিই না যেটা হ্যাকারদের
          সাহায্য করতে পারে।
          <br />
          এইভাবে আমি authentication, validation, rate limiting, encryption সহ
          অন্যান্য পদ্ধতি ব্যবহার করে API কে নিরাপদ রাখি।
          <br />
          সিকিউরিটি একটা ফিচার না — এটা অনেকগুলো ছোট ছোট স্টেপের সমন্বয়। তাই আমি
          ডেভেলপমেন্টের শুরু থেকেই best security practices অনুসরণ করি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What is <span className="font-bold">REST API?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A REST API (Representational State Transfer Application Programming
          Interface) is a standardized way for applications to communicate over
          HTTP/HTTPS using simple, stateless requests. It follows client-server
          architecture, where: <br />- The client (frontend/mobile app) sends
          requests (GET, POST, etc.). <br />
          - The server (backend) processes requests and returns structured data
          (usually JSON or XML). <br />
          <br />
          🔹 Key Principles of REST APIs: <br />
          1. Stateless – Each request contains all needed info; the server
          doesn’t store session data. <br />
          2. Resource-Based – Data is treated as resources (e.g., /users,
          /products). <br />
          3. HTTP Methods – Uses standard HTTP verbs: <br />
          - GET – Retrieve data <br />
          - POST – Create data <br />
          - PUT/PATCH – Update data <br />
          - DELETE – Remove data <br />
          4. Uniform Interface – Consistent URL structures (e.g.,
          /api/users/123). <br />
          5. Cacheable – Responses can be cached for performance. <br />
          <br />
          🔹 REST API Example (Node.js + Express): <br />✅ 1. Basic Server
          Setup
          <pre>
            {`
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mock database
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
`}
          </pre>
          <br />✅ 2. Implement Endpoints:
          <pre>
            {`
// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST (Create) a user
app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (Update) a user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.name = req.body.name;
  res.json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send(); // 204 = No Content
});
`}
          </pre>
          <br />
          🔹 How to Test the API? <br />
          Use tools like: <br />
          - Postman (GUI) <br />
          - cURL (Command Line) <br />
          - Fetch API (JavaScript) <br />
          <br />
          🔹 REST API Best Practices <br />
          1. Use Nouns, Not Verbs in URLs (e.g., /users, not /getUsers). <br />
          2. Versioning: Prefix APIs with /v1/ (e.g., /api/v1/users). <br />
          3. Status Codes: <br />
          - 200 OK (Success) <br />
          - 201 Created (POST success) <br />
          - 400 Bad Request (Client error) <br />
          - 404 Not Found <br />
          - 500 Server Error <br />
          4. Authentication: Use JWT/OAuth for secure APIs. <br />
          <br />
          🔹 When to Use REST? <br />
          - Simple, cacheable data (e.g., blogs, e-commerce). <br />
          - Public APIs (easy to document and consume). <br />- Legacy system
          integration.
          <br />
          <br />
          REST API (Representational State Transfer Application Programming
          Interface) হলো একটি স্ট্যান্ডার্ড পদ্ধতি যার মাধ্যমে অ্যাপ্লিকেশনগুলো
          HTTP/HTTPS ব্যবহার করে সহজভাবে কমিউনিকেট করে। এটি ক্লায়েন্ট-সার্ভার
          আর্কিটেকচার অনুসরণ করে: <br />
          - ক্লায়েন্ট (ফ্রন্টএন্ড/মোবাইল অ্যাপ) রিকোয়েস্ট পাঠায় (GET, POST
          ইত্যাদি)। <br />
          - সার্ভার (ব্যাকএন্ড) রিকোয়েস্ট প্রসেস করে এবং স্ট্রাকচার্ড ডেটা
          রিটার্ন করে (সাধারণত JSON বা XML ফরম্যাটে)।
          <br />
          <br />
          🔹 REST API-র মূল নীতিমালাঃ <br />
          1. স্টেটলেস – প্রতিটি রিকোয়েস্টে প্রয়োজনীয় সমস্ত তথ্য থাকে; সার্ভার
          সেশন ডেটা স্টোর করে না। <br />
          2. রিসোর্স-ভিত্তিক – ডেটাকে রিসোর্স হিসেবে ট্রিট করা হয় (যেমন,
          `/users`, `/products`)। <br />
          3. HTTP মেথড – স্ট্যান্ডার্ড HTTP ভার্ব ব্যবহার করে: <br />
          - `GET` – ডেটা রিট্রিভ <br />
          - `POST` – ডেটা ক্রিয়েট <br />
          - `PUT`/`PATCH` – ডেটা আপডেট <br />
          - `DELETE` – ডেটা ডিলিট <br />
          4. ইউনিফর্ম ইন্টারফেস – কনসিস্টেন্ট URL স্ট্রাকচার (যেমন,
          `/api/users/123`)। <br />
          5. ক্যাশেএবল – রেসপন্স ক্যাশড করে পারফরম্যান্স ইম্প্রুভ করে। <br />
          <br />
          🔹 API টেস্ট টুলসঃ <br />
          - Postman (GUI) <br />
          - cURL (কমান্ড লাইন) <br />
          - Fetch API (জাভাস্ক্রিপ্ট) <br />
          <br />
          🔹 REST API বেস্ট প্র্যাকটিসঃ <br />
          1. URL-এ ক্রিয়াপদ নয়, বিশেষ্য ব্যবহার করুন (যেমন, `/users`,
          `/getUsers` না)। <br />
          2. ভার্সনিং: API-এর শুরুতে `/v1/` দিন (যেমন, `/api/v1/users`)। <br />
          3. স্ট্যাটাস কোড: <br />
          - `200` OK (সাকসেস)
          <br />
          - `201` ক্রিয়েটেড (POST সাকসেস) <br />
          - `400` ব্যাড রিকোয়েস্ট (ক্লায়েন্ট এরর) <br />
          - `404` নট ফাউন্ড <br />
          - `500` সার্ভার এরর <br />
          4. অথেন্টিকেশন: সিকিউর API-এর জন্য JWT/OAuth ব্যবহার করুন।
          <br />
          <br />
          🔹 কখন REST ব্যবহার করা উচিতঃ <br />
          - সহজ, ক্যাশেএবল ডেটার জন্য (যেমন, ব্লগ, ই-কমার্স)। <br />
          - পাবলিক API (ডকুমেন্টেশন সহজ)। <br />- লিগ্যাসি সিস্টেম ইন্টিগ্রেশন।
        </div>
      </div>
    </Container>
  );
};

export default QnA_NodeJS;
