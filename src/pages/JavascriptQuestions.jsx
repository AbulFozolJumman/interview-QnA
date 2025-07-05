import Container from "../components/Shared/Container/Container";
/* eslint-disable react/no-unescaped-entities */
const JavascriptQuestions = () => {
  return (
    <Container id="javaScript">
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">JavaScript?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript is a high-level, interpreted programming language primarily
          used to create interactive and dynamic content on websites. It is one
          of the core technologies of the web, alongside HTML and CSS.
          JavaScript enables developers to implement features like interactive
          forms, animations, real-time updates, and more. It runs in the browser
          using JavaScript engines like V8 (in Chrome) and can also run on the
          server using environments like Node.js. <br />
          <span className="font-bold">Key Points:</span> <br />
          - High-level, interpreted scripting language <br />
          - Mainly used for client-side interactivity <br />
          - Can also be used for server-side programming using Node.js <br />-
          Supports object-oriented, functional, and event-driven programming{" "}
          <br /> <br />
          জাভাস্ক্রিপ্ট একটি হাই-লেভেল, ইন্টারপ্রেটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ
          যা মূলত ওয়েবসাইটে ইন্টার‌অ্যাকটিভ ও ডায়নামিক কনটেন্ট তৈরির জন্য
          ব্যবহৃত হয়। এটি HTML ও CSS-এর সাথে ওয়েবের প্রধান তিনটি প্রযুক্তির
          একটি। জাভাস্ক্রিপ্ট ব্যবহার করে ডেভেলপাররা ইন্টার‌অ্যাকটিভ ফর্ম,
          অ্যানিমেশন, রিয়েল-টাইম আপডেট ইত্যাদি ফিচার যুক্ত করতে পারেন। এটি
          ব্রাউজারে রান করে জাভাস্ক্রিপ্ট ইঞ্জিন(যেমন: Chrome-এর V8 ইঞ্জিন)
          ব্যাবহার করে, আবার Node.js এর মাধ্যমে সার্ভারেও রান করানো যায়। <br />
          <span className="font-bold">মূল পয়েন্টগুলো:</span> <br />
          - হাই-লেভেল ও ইন্টারপ্রেটেড স্ক্রিপ্টিং ল্যাঙ্গুয়েজ <br />
          - ক্লায়েন্ট-সাইড ইন্টার‌অ্যাকশন তৈরিতে ব্যবহৃত হয় <br />
          - Node.js দিয়ে সার্ভার-সাইডেও ব্যবহৃত হয় <br />-
          অবজেক্ট-ওরিয়েন্টেড, ফাংশনাল ও ইভেন্ট-ড্রিভেন প্রোগ্রামিং সাপোর্ট করে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. How does JavaScript <span className="font-bold">work?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript works by being interpreted and executed by the browser’s
          JavaScript engine (such as V8 in Chrome, SpiderMonkey in Firefox).
          When a web page loads, the browser reads the HTML and CSS first, then
          parses and executes the JavaScript code line by line. JavaScript
          follows a single-threaded, non-blocking event-driven model, which uses
          an event loop to handle asynchronous tasks like user input, API
          requests, or timers. <br />
          JavaScript code is often embedded in the HTML or included as separate
          `.js` files. It interacts with the DOM (Document Object Model) to
          manipulate web page content dynamically. <br />
          <span className="font-bold">Key Concepts:</span> <br />
          * JavaScript Engine (e.g., V8) interprets and runs the code <br />
          * Single-threaded with asynchronous capabilities <br />
          * Uses Call Stack, Web APIs, Callback Queue, and Event Loop <br />
          * Directly interacts with the browser's DOM <br /> <br />
          জাভাস্ক্রিপ্ট ব্রাউজারের জাভাস্ক্রিপ্ট ইঞ্জিন (যেমন: Chrome-এর V8,
          Firefox-এর SpiderMonkey) দ্বারা ইন্টারপ্রেট ও এক্সিকিউট হয়। যখন একটি
          ওয়েব পেজ লোড হয়, তখন ব্রাউজার প্রথমে HTML ও CSS পড়ে, এরপর
          জাভাস্ক্রিপ্ট কোড লাইন বাই লাইন পড়ে ও চালায়। জাভাস্ক্রিপ্ট একটি
          সিঙ্গেল-থ্রেডেড ল্যাঙ্গুয়েজ হলেও এটি ইভেন্ট-ড্রিভেন ও অ্যাসিনক্রোনাস
          আচরণ করে। এটি ইভেন্ট লুপ ব্যবহারের মাধ্যমে ব্যাকগ্রাউন্ড টাস্ক যেমন
          ইউজার ইন্টার‌অ্যাকশন, API কল, টাইমার ইত্যাদি হ্যান্ডেল করে। <br />
          জাভাস্ক্রিপ্ট কোড সাধারণত HTML-এর মধ্যে লেখা হয় বা আলাদা `.js` ফাইল
          হিসেবে যুক্ত করা হয়। এটি DOM (Document Object Model) এর সাথে
          ইন্টার‌অ্যাক্ট করে ওয়েব পেজ ডায়নামিকভাবে পরিবর্তন করতে পারে। <br />
          <span className="font-bold">মূল কনসেপ্টগুলো:</span> <br />
          * জাভাস্ক্রিপ্ট ইঞ্জিন কোডকে ইন্টারপ্রেট করে <br />
          * সিঙ্গেল-থ্রেডেড কিন্তু অ্যাসিনক্রোনাস <br />* Call Stack, Web APIs,
          Callback Queue, Event Loop নিয়ে কাজ করে <br />
          * DOM-এর সাথে সরাসরি ইন্টার‌অ্যাকশন করে <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. How does JavaScript code is{" "}
          <span className="font-bold">executed in the Browser?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript code is executed in the browser using the browser’s
          built-in JavaScript engine (like V8 in Chrome, SpiderMonkey in
          Firefox). When a web page is loaded, the browser parses the HTML and
          CSS first, and then the JavaScript code is sent to the engine. The
          execution happens in several steps: <br />
          1. Parsing: The engine parses the JavaScript code and converts it into
          Abstract Syntax Tree (AST). <br />
          2. Compilation: Modern engines use Just-In-Time (JIT) compilation to
          convert JavaScript into optimized machine code. <br />
          3. Execution: The compiled code is then executed line by line using a
          single-threaded model. <br />
          4. Memory Management: The engine handles memory allocation and garbage
          collection. <br />
          5. Event Loop: For asynchronous tasks (like API calls), the event loop
          coordinates between the call stack, web APIs, and callback queue.{" "}
          <br />
          JavaScript interacts with the DOM and BOM during execution to
          manipulate the web page dynamically. <br /> <br />
          জাভাস্ক্রিপ্ট কোড ব্রাউজারে এক্সিকিউট হয় ব্রাউজারের বিল্ট-ইন
          জাভাস্ক্রিপ্ট ইঞ্জিনের মাধ্যমে (যেমন Chrome-এর V8, Firefox-এর
          SpiderMonkey)। যখন একটি ওয়েব পেজ লোড হয়, তখন ব্রাউজার প্রথমে HTML ও
          CSS পার্স করে, তারপর জাভাস্ক্রিপ্ট কোড ইঞ্জিনে পাঠানো হয়। কোড
          এক্সিকিউশন কয়েকটি ধাপে সম্পন্ন হয়: <br />
          1. Parsing (পার্সিং): কোডকে পার্স করে Abstract Syntax Tree (AST) এ
          রূপান্তর করা হয়। <br />
          2. Compilation (কম্পাইলেশন): JIT (Just-In-Time) কম্পাইলার কোডকে
          অপটিমাইজড মেশিন কোডে রূপান্তর করে। <br />
          3. Execution (এক্সিকিউশন): কম্পাইল করা কোড সিঙ্গেল-থ্রেডেডভাবে
          এক্সিকিউট করা হয়। <br />
          4. Memory Management (মেমোরি ব্যবস্থাপনা): ইঞ্জিন মেমোরি এলোকেশন ও
          গারবেজ কালেকশন করে। <br />
          5. Event Loop (ইভেন্ট লুপ): অ্যাসিনক্রোনাস টাস্ক যেমন API কল বা
          টাইমারের জন্য ইভেন্ট লুপ কল স্ট্যাক, ওয়েব API ও কলব্যাক কিউ-এর মধ্যে
          সমন্বয় করে। <br />
          এক্সিকিউশনের সময় জাভাস্ক্রিপ্ট DOM (Document Object Model) এবং BOM
          (Browser Object Model)-এর সাথে ইন্টার‌অ্যাক্ট করে ওয়েব পেজকে
          ডায়নামিকভাবে পরিবর্তন করে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. What are the differences between{" "}
          <span className="font-bold">“==” and “===” ?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          * `==` is the loose equality operator. It compares two values for
          equality after converting them to a common type if necessary. <br />
          * `===` is the strict equality operator. It compares both value and
          data type without performing any type conversion. <br />
          it’s best to prefer `===` to avoid unexpected behavior due to implicit
          type coercion. <br />
          Code Example: <br />
          console.log(5 == '5'); // true → value is equal, type is coerced{" "}
          <br />
          console.log(5 === '5'); // false → value is equal, but type is
          different
          <br />
          * Always use `===` unless type coercion is intentional
          <br /> <br />
          * `==` হল loose equality operator, যা প্রয়োজনে দুই ভ্যালুকে একই টাইপে
          রূপান্তর করে তুলনা করে। <br />
          * `===` হল strict equality operator, যা ভ্যালু ও টাইপ উভয়কেই তুলনা
          করে, কোন টাইপ কনভার্শন করে না। <br />
          `===` ব্যবহার করাই ভালো, কারণ এটি বেশি নির্ভরযোগ্য এবং টাইপ মিসম্যাচের
          সম্ভাবনা কমায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is a <span className="font-bold">callback</span> function?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A callback function in JavaScript is a function that is passed as an
          argument to another function, and is executed after the completion of
          that function’s task. Callbacks are commonly used to handle
          asynchronous operations such as data fetching, timers, or event
          handling. <br />
          JavaScript uses callbacks to maintain non-blocking behavior,
          especially in operations that take time, like network requests or file
          reading. <br />
          Code Example: <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751557332/JavaScript-Overview-in-Bengali-07-03-2025_09_32_PM_ponl0o.png"
            alt=""
          />
          Output: <br />
          Fetching data... <br />
          Data fetched. <br />
          Displaying data. <br /> <br />
          Key Points: <br /> * A callback is a function passed as an argument{" "}
          <br /> * It allows control after an async task finishes <br /> * Helps
          in non-blocking, event-driven programming <br /> <br />
          জাভাস্ক্রিপ্টে callback function হলো এমন একটি ফাংশন, যেটিকে অন্য একটি
          ফাংশনের আর্গুমেন্ট হিসেবে পাঠানো হয়, এবং সেটি ঐ ফাংশনের কাজ শেষ
          হওয়ার পর এক্সিকিউট হয়। এটি সাধারণত অ্যাসিনক্রোনাস কাজ (যেমন: API কল,
          টাইমার, ইভেন্ট) সম্পন্ন হওয়ার পর ফলাফল ব্যবহারের জন্য ব্যবহৃত হয়।{" "}
          <br /> জাভাস্ক্রিপ্টে কলব্যাক ব্যবহারের মাধ্যমে non-blocking আচরণ
          বজায় রাখা যায়, ফলে ব্রাউজার হ্যাং না করে অন্য কাজ চালিয়ে যেতে পারে।{" "}
          <br /> <br /> মূল পয়েন্টসমূহ: <br /> * কলব্যাক হলো একটি ফাংশন, যেটিকে
          আর্গুমেন্ট হিসেবে পাঠানো হয় <br /> * এটি অ্যাসিনক্রোনাস কাজ শেষ
          হওয়ার পর এক্সিকিউট হয় <br /> * ইভেন্ট-ড্রিভেন ও নন-ব্লকিং
          প্রোগ্রামিংয়ে গুরুত্বপূর্ণ ভূমিকা রাখে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. When will you <span className="font-bold">return</span> something
          from a function?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, you return something from a function when you want to
          pass data or a result back to the caller of the function. The `return`
          statement is used to send a value out of the function, so that it can
          be stored, logged, or used elsewhere.
          <br />
          A function without a `return` statement will return `undefined` by
          default. Returning values is crucial when you want your function to
          produce output rather than just perform actions.
          <br />
          Code Example:
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751558085/JavaScript-Overview-in-Bengali-07-03-2025_09_54_PM_wnsdpo.png"
            alt=""
          />
          Key Points:
          <br />
          * `return` sends a value back to the function caller
          <br />
          * Function execution stops immediately after `return`
          <br />
          * If `return` is omitted, the function returns `undefined` by default
          <br />
          * Useful for functions that calculate or fetch data
          <br />
          <br />
          জাভাস্ক্রিপ্টে আপনি যখন চান একটি ফাংশন কোনো ডেটা বা ফলাফল ফিরিয়ে দিক,
          তখন `return` ব্যবহার করা হয়। `return` স্টেটমেন্ট একটি ভ্যালু ফাংশনের
          বাইরে পাঠায়, যাতে সেটিকে অন্য কোথাও ব্যবহার, সংরক্ষণ বা প্রিন্ট করা
          যায়।
          <br />
          যদি কোনো ফাংশনে `return` না থাকে, তাহলে এটি ডিফল্টভাবে `undefined`
          রিটার্ন করে। এমন ফাংশনের জন্য `return` গুরুত্বপূর্ণ, যেগুলোর উদ্দেশ্য
          শুধু কাজ করা নয়, ফলাফল প্রদান করাও।
          <br />
          মূল পয়েন্টসমূহ:
          <br />
          * `return` দ্বারা একটি ভ্যালু ফাংশনের কলারকে ফেরত পাঠানো হয়
          <br />
          * `return` এর পরপরই ফাংশন এক্সিকিউশন বন্ধ হয়ে যায়
          <br />
          * `return` না থাকলে ফাংশন `undefined` রিটার্ন করে
          <br />
          * গণনা বা ডেটা ফেচ করার জন্য ব্যবহৃত ফাংশনে `return` অপরিহার্য
          <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. Tell me about{" "}
          <span className="font-bold">bind, call, and apply.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, `bind()`, `call()`, and `apply()` are used to
          explicitly set the `this` context of a function. All three are methods
          available on JavaScript functions and are very useful when working
          with objects and function borrowing. <br />
          🔹 `call()` Invokes the function immediately with a specified `this`
          value and arguments passed individually. <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751566460/call_vy7rd4.png"
            alt=""
          />
          🔹 `apply()` Same as `call()`, but takes arguments as an array. <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751566460/apply_v5hkpe.png"
            alt=""
          />
          🔹 `bind()` Returns a new function with a bound `this` context. It
          does not execute immediately. <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751566460/bind_r5dotb.png"
            alt=""
          />
          Key Points: <br />
          * `call` → immediate invocation with arguments separated <br />
          * `apply` → immediate invocation with arguments as array <br />
          * `bind` → returns a new function, can be called later <br /> <br />
          জাভাস্ক্রিপ্টে `bind()`, `call()` এবং `apply()` ব্যবহার করা হয় একটি
          ফাংশনের `this` কনটেক্সট নির্দিষ্টভাবে সেট করার জন্য। এগুলো ফাংশনের
          বিল্ট-ইন মেথড এবং অবজেক্ট হ্যান্ডলিং বা ফাংশন বোরো করার ক্ষেত্রে
          অত্যন্ত গুরুত্বপূর্ণ। <br />
          🔹 `call()` ফাংশনকে সাথেসাথেই এক্সিকিউট করে, এবং আর্গুমেন্টগুলো আলাদা
          আলাদাভাবে পাঠানো হয়। <br />
          🔹 `apply()` `call()` এর মতোই কাজ করে, তবে আর্গুমেন্টগুলো একটি array
          হিসেবে পাঠানো হয়। <br />
          🔹 `bind()` একটি নতুন ফাংশন রিটার্ন করে, যেখানে `this` কনটেক্সট বেঁধে
          দেওয়া হয়, তবে তা সাথে সাথে এক্সিকিউট হয় না। <br />
          মূল পয়েন্টসমূহ: <br />
          * `call` → সাথে সাথে কল করে, আর্গুমেন্ট আলাদা করে পাঠানো হয় <br />*
          `apply` → সাথে সাথে কল করে, আর্গুমেন্ট array হিসেবে পাঠানো হয় <br />*
          `bind` → একটি নতুন ফাংশন দেয়, পরে কল করা যায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is a <span className="font-bold">Closure</span> in
          JavaScript? How does it work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A closure in JavaScript is a function that remembers and has access to
          variables from its outer lexical scope, even after the outer function
          has finished executing. Closures are created every time a function is
          defined inside another function and is returned or assigned. <br />
          Closures allow data encapsulation, meaning you can keep variables
          private and only accessible through a controlled interface. <br />
          🔹 How it works: <br />
          When a function is returned from another function, it retains access
          to the scope in which it was created. JavaScript uses lexical scoping,
          meaning a function looks to the scope where it was defined, not where
          it was called from. <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751617858/closure_pswtqi.png"
            alt=""
          />
          JavaScript-এ closure হল এমন একটি ফাংশন, যেটি তার বাইরের স্কোপের
          ভ্যারিয়েবলগুলো মনে রাখে এবং এক্সেস করতে পারে, এমনকি যখন বাইরের
          ফাংশনটি এক্সিকিউশন শেষ করে ফেলেছে। <br />
          Closure ব্যবহার করে আমরা ডেটা প্রাইভেসি বজায় রাখতে পারি, কারণ বাইরের
          ভ্যারিয়েবল গুলো শুধুমাত্র ওই ইননার ফাংশনের মাধ্যমেই এক্সেসযোগ্য হয়।{" "}
          <br />
          🔹 কিভাবে কাজ করে: <br />
          যখন একটি ফাংশন অন্য একটি ফাংশনের ভিতরে ডিফাইন হয় এবং সেটি রিটার্ন করা
          হয়, তখন এটি নিজের তৈরি হওয়া স্কোপকে মনে রাখে। জাভাস্ক্রিপ্টে lexical
          scoping ব্যবহৃত হয়, অর্থাৎ ফাংশনটি যেখানে ডিফাইন হয়েছে সেটি দেখে
          স্কোপ নির্ধারণ করে—not যেখানে কল করা হয়েছে। <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          - Closure = ফাংশন + তার লেক্সিকাল স্কোপ <br />
          - ভ্যারিয়েবলকে প্রাইভেট রাখতে সাহায্য করে <br />- ফাংশনাল
          প্রোগ্রামিং, কলব্যাক ও ইভেন্ট হ্যান্ডলারে খুব গুরুত্বপূর্ণ
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. What does the <span className="font-bold">“this”</span> keyword
          indicate in JavaScript?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, the this keyword refers to the object from which the
          function is called, and its value depends on the context in which it
          is used. It does not refer to the function itself, but to the object
          that owns the function during execution. <br />
          🔹 Explanation: <br />
          The value of this changes based on how a function is invoked: <br />
          - In a regular function → this refers to the global object (window in
          browsers). <br />- Inside a method → this refers to the object that
          owns the method. <br />
          - In arrow functions → this is lexically scoped (it uses the this from
          the surrounding scope). <br />
          - In event handlers → this refers to the DOM element that triggered
          the event. <br />
          - With call(), apply(), or bind() → you can explicitly define what
          this should refer to. <br />
          🔹 Key Points: <br />
          - this refers to the execution context <br />
          - Arrow functions do not bind their own this <br />
          - Context can be controlled using call, apply, or bind
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751618883/this_1_mtsyvx.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751618911/this_2_zs8lpi.png"
            alt=""
          />
          JavaScript-এ this কীওয়ার্ডটি সেই অবজেক্টকে নির্দেশ করে যেটি থেকে
          ফাংশনটি কল করা হয়েছে। এটি কখনই ফাংশন নিজেকে বোঝায় না, বরং যেই
          কনটেক্সটে ফাংশনটি চলছে, সেই অবজেক্টকে বোঝায়। <br />
          🔹 ব্যাখ্যা: <br />
          this এর মান নির্ভর করে ফাংশনটি কিভাবে কল করা হয়েছে তার ওপর: <br />-
          সাধারণ ফাংশনে → this গ্লোবাল অবজেক্টকে বোঝায় (ব্রাউজারে window){" "}
          <br />
          - অবজেক্ট মেথডে → this ঐ অবজেক্টকেই নির্দেশ করে <br />- Arrow ফাংশনে →
          this লেক্সিক্যাল স্কোপ থেকে আসে, অর্থাৎ বাইরের this <br />
          - Event Handler-এ → this ইভেন্ট টার্গেট DOM এলিমেন্ট বোঝায় <br />
          - call(), apply(), bind() দিয়ে → this কে ইচ্ছেমতো সেট করা যায় <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          - this এক্সিকিউশন কনটেক্সটকে বোঝায় <br />
          - Arrow ফাংশনের নিজস্ব this থাকে না <br />- call, apply, bind দিয়ে
          this কনট্রোল করা যায়
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What is <span className="font-bold">Event bubbling</span> in js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Event bubbling in JavaScript is a type of event propagation where an
          event starts from the deepest (innermost) target element and then
          bubbles up to its ancestor elements in the DOM tree. It means that if
          a child element triggers an event, that same event will also propagate
          to its parent, grandparent, and so on—unless it’s explicitly stopped.{" "}
          <br />
          🔹 Explanation: <br />
          When an event occurs on an element (e.g., a button), the event handler
          for that element runs first. Then the event bubbles up to the parent
          element, and its handler runs (if defined), and continues up to the
          root (document). <br />
          This behavior allows event delegation, where a single event handler
          can be placed on a parent to manage events for multiple children.{" "}
          <br />
          🔹 Key Points: <br />
          - Event flows from child to parent → called bubbling <br />
          - Useful for event delegation <br />
          - Use event.stopPropagation() to prevent bubbling
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751619243/eb1_se1wnu.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751619242/eb2_pwselq.png"
            alt=""
          />
          Event bubbling হল জাভাস্ক্রিপ্টের একটি ইভেন্ট propagation প্রক্রিয়া,
          যেখানে কোনো ইভেন্ট সবার প্রথমে ইননার/চাইল্ড এলিমেন্টে শুরু হয় এবং
          তারপর ধাপে ধাপে উপরের প্যারেন্ট এলিমেন্টে পৌঁছায়। <br />
          🔹 ব্যাখ্যা: <br />
          যখন আপনি একটি ইননার এলিমেন্টে (যেমন: বাটন) ক্লিক করেন, তখন সেই
          এলিমেন্টের ইভেন্ট হ্যান্ডলার প্রথম এক্সিকিউট হয়। এরপর ইভেন্টটি উপরের
          প্যারেন্ট এলিমেন্টে যায় এবং সেখানকার ইভেন্ট হ্যান্ডলার চালু হয়, এবং
          এভাবে এটি পুরো DOM tree-তে উপরের দিকে যেতে থাকে—যদি না তা থামানো হয়।{" "}
          <br />
          এই মেকানিজম ইভেন্ট ডেলিগেশনের জন্য খুব উপযোগী, যেখানে প্যারেন্টের উপর
          একটি ইভেন্ট হ্যান্ডলার বসিয়েই চাইল্ডদের ইভেন্ট হ্যান্ডল করা যায়।{" "}
          <br />
          🔹 মূল পয়েন্টসমূহ: <br />- চাইল্ড এলিমেন্ট থেকে প্যারেন্টে ইভেন্ট
          ছড়িয়ে পড়ে → এটিই bubbling <br />
          - ইভেন্ট ডেলিগেশনের জন্য খুব কার্যকর <br />- event.stopPropagation()
          দিয়ে ইভেন্ট বাবলিং বন্ধ করা যায়
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. What is an <span className="font-bold">Event Loop?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The Event Loop in JavaScript is a fundamental concept that enables
          non-blocking, asynchronous behavior, even though JavaScript is
          single-threaded. It allows the JavaScript runtime to handle multiple
          operations concurrently without blocking the main thread. <br />
          🔹 Explanation: <br />
          JavaScript has: <br />
          - A Call Stack for executing synchronous code <br />- A Web API
          environment (provided by the browser) for handling asynchronous tasks
          (like setTimeout, DOM events, or fetch requests) <br />
          - A Callback Queue where asynchronous callbacks wait <br />
          - The Event Loop, which constantly checks if the call stack is empty,
          and if so, it pushes the next callback from the queue to the stack for
          execution <br />
          This is how JavaScript executes asynchronous code without blocking the
          UI or other logic. <br />
          🔹 Key Points: <br />
          - JavaScript is single-threaded but non-blocking <br />
          - Event loop moves async callbacks to the call stack <br />
          - Enables concurrency using queue and timing mechanisms <br />
          <br />
          🔹 Code Explanation: Even though the timer is 0 ms, the setTimeout
          callback goes to the Web API, then to the queue, and is only executed
          after the call stack is empty (i.e., after "End" is printed). This
          shows how the Event Loop works.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751619711/el_tpycrg.png"
            alt=""
          />
          🔹 কোডের ব্যাখ্যা: setTimeout এ 0 ms দিলেও সেটি Call Stack-এ এক্সিকিউট
          হয় না। প্রথমে এটি Web API তে যায়, তারপর Callback Queue-তে, এবং
          সবশেষে Call Stack খালি হলে Event Loop সেটিকে Stack-এ আনে। তাই "Inside
          setTimeout" পরে আসে। <br /> <br /> Event Loop হল জাভাস্ক্রিপ্টের একটি
          মৌলিক কনসেপ্ট, যা একক থ্রেডে চলেও অ্যাসিনক্রোনাস ও নন-ব্লকিং আচরণ
          সম্ভব করে। এটি একাধিক অপারেশন একসাথে পরিচালনা করতে সাহায্য করে, মূল
          থ্রেডকে ব্লক না করেই। <br />
          🔹 ব্যাখ্যা: <br />
          JavaScript এ থাকে: <br />
          - একটি Call Stack, যা সিঙ্ক্রোনাস কোড এক্সিকিউট করে <br />
          - একটি Web API Environment (ব্রাউজার প্রদান করে), যা টাইমার, ইভেন্ট,
          ফেচ ইত্যাদি অ্যাসিনক্রোনাস টাস্ক পরিচালনা করে <br />
          - একটি Callback Queue, যেখানে অ্যাসিনক্রোনাস ফাংশনগুলোর কলব্যাক
          অপেক্ষা করে <br />
          - একটি Event Loop, যা সারাক্ষণ চেক করে Call Stack খালি কিনা। খালি হলে
          Callback Queue থেকে ফাংশন তুলে এনে Stack-এ রাখে এক্সিকিউশনের জন্য
          <br />
          এই প্রক্রিয়ার মাধ্যমে JavaScript UI ব্লক না করেই অ্যাসিনক্রোনাস কোড
          চালাতে পারে। <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          - JavaScript একক থ্রেডে চলে, কিন্তু নন-ব্লকিং <br />- Event Loop Call
          Stack খালি হলে Callback Queue থেকে কোড এনে চালায় <br />- এটি
          অ্যাসিনক্রোনাস ও কনকারেন্ট আচরণ নিশ্চিত করে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. Explain <span className="font-bold">hoisting</span> in JavaScript.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Hoisting in JavaScript is a default behavior where variable and
          function declarations are moved to the top of their scope (either the
          global scope or the function scope) during the compilation
          phase—before code execution begins. <br />
          This means you can use functions and variables before they are
          actually declared in the code. However, only the declarations are
          hoisted, not the initializations. <br />
          🔹 Explanation: <br />
          JavaScript's engine processes the code in two phases: <br />
          - Compilation phase – All variable and function declarations are
          hoisted to the top of their scope. <br />
          - Execution phase – Code is executed line by line. <br />
          - Function declarations are fully hoisted with their body. <br />
          - Variables declared with var are hoisted with undefined as initial
          value. <br />
          - Variables declared with let and const are also hoisted, but stay in
          a Temporal Dead Zone (TDZ) and throw a ReferenceError if accessed
          before declaration. <br />
          🔹 Key Points: <br />
          - Hoisting moves declarations (not initializations) to top <br />
          - var is hoisted with undefined <br />
          - let and const are hoisted but not accessible before declaration
          (TDZ) <br />
          - Function declarations are fully hoisted <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751620815/h1_wa2ij9.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751620815/h1_wa2ij9.png"
            alt=""
          />
          JavaScript-এ Hoisting হলো একটি ডিফল্ট আচরণ, যেখানে ভ্যারিয়েবল এবং
          ফাংশন ডিক্লারেশনগুলো তাদের স্কোপের উপরে তুলে নেওয়া হয়—কোড
          এক্সিকিউশনের আগেই (কম্পাইলেশন ফেজে)। <br />
          এর মানে হলো আপনি কোডে যেখানেই ভ্যারিয়েবল বা ফাংশন ডিক্লার করেন না
          কেন, JavaScript ইঞ্জিন তা উপরে নিয়ে যায়। তবে মনে রাখতে হবে,
          ডিক্লারেশন ওঠে, ভ্যালু অ্যাসাইনমেন্ট ওঠে না। <br />
          🔹 ব্যাখ্যা: <br />
          JavaScript ইঞ্জিন দুই ধাপে কোড প্রসেস করে: <br />
          - কম্পাইলেশন ফেজ: ডিক্লারেশনগুলো স্কোপের উপরে ওঠানো হয় <br />
          - এক্সিকিউশন ফেজ: কোড লাইন বাই লাইন চালানো হয় <br />
          - Function declarations পুরোপুরি hoist হয় (বডিসহ) <br />
          - var hoist হয় undefined নিয়ে <br />
          - let ও const hoist হয় কিন্তু TDZ (Temporal Dead Zone) এ থাকে, এবং
          আগে অ্যাক্সেস করলে ReferenceError দেয় <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          - Hoisting মানে ডিক্লারেশনগুলো উপরে তোলা হয় <br />
          - var → hoist হয় undefined দিয়ে <br />
          - let, const → hoist হয় কিন্তু আগে অ্যাক্সেস করলে error <br />
          - Function declarations পুরোপুরি hoist হয় <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What is a <span className="font-bold">recursive function?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A recursive function is a function that calls itself directly or
          indirectly in order to solve a problem by breaking it down into
          smaller sub-problems of the same type. It is commonly used for tasks
          like tree traversal, factorial calculation, Fibonacci sequence, etc.{" "}
          <br />
          Every recursive function must have: <br />
          - A base case – a condition under which the recursion stops <br />
          - A recursive case – where the function calls itself with a smaller or
          simpler input <br />
          🔹 Explanation: <br />
          Recursion works by pushing function calls onto the call stack until
          the base condition is met, and then resolving them in reverse order
          (LIFO – Last In, First Out).
          <br />
          🔹 Key Points: <br />
          - Function that calls itself <br />
          - Must include a base case to prevent infinite recursion <br />
          - Useful in divide-and-conquer problems <br />
          - Can be memory intensive if not optimized (e.g., tail call) <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751621474/recursion_iyhmt4.png"
            alt=""
          />
          Recursive function হলো একটি ফাংশন, যা নিজেই নিজেকে কল করে, যাতে একটি
          বড় সমস্যা ছোট ছোট একই ধরনের সাব-সমস্যায় ভাগ করে সমাধান করা যায়। এটি
          সাধারণত ব্যবহার করা হয় ট্রি ট্রাভার্সাল, ফ্যাক্টোরিয়াল, ফিবোনাচ্চি
          সিরিজ ইত্যাদি ক্ষেত্রে।
          <br />
          প্রতিটি recursive function-এর দুটি অংশ থাকা বাধ্যতামূলক:
          <br />
          - Base case – যেটি recursion থামাবে <br />
          - Recursive case – যেটি ফাংশনকে নিজেই আবার কল করবে <br />
          🔹 ব্যাখ্যা: <br />
          Recursion কাজ করে Call Stack এর মাধ্যমে। যতক্ষণ না base case মিলে,
          ফাংশন একাধিকবার stack-এ push হয়, এবং base case পাওয়ার পর ধাপে ধাপে
          রেজাল্ট রিটার্ন হতে থাকে (LIFO পদ্ধতিতে)।
          <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          - নিজেকে নিজেই কল করে এমন ফাংশন <br />
          - Base case থাকতে হবে না হলে infinite recursion হবে <br />
          - Divide-and-conquer সমস্যায় খুব কার্যকর <br />- সঠিকভাবে ব্যবহৃত না
          হলে Stack Overflow হতে পারে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. Difference between{" "}
          <span className="font-bold">undefined and null.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, both undefined and null represent the absence of a
          value, but they are not the same and are used in different contexts.{" "}
          <br />
          - undefined means a variable that has been declared but not assigned a
          value. <br />- null means an intentional absence of any object value.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751622099/uxn_fcruqp.png"
            alt=""
          />
          JavaScript-এ undefined এবং null দুটোই ভ্যালু অনুপস্থিতির নির্দেশ দেয়,
          তবে এদের অর্থ এবং ব্যবহার আলাদা। <br />
          - undefined অর্থ ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু ভ্যালু
          অ্যাসাইন করা হয়নি <br />- null ইচ্ছাকৃতভাবে "কোনো ভ্যালু নেই" বোঝাতে
          ব্যবহার করা হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse15">
          15. What are the{" "}
          <span className="font-bold">different data types</span> in JavaScript?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse15"
          id="collapse15"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript provides two categories of data types: <br />
          🔹 1. Primitive Data Types <br />
          These are immutable and store single values. <br />
          String – Text data <br />
          Number – Integer or floating-point
          <br />
          Boolean – true or false
          <br />
          Undefined – Declared but not assigned
          <br />
          Null – Explicitly no value
          <br />
          Symbol – Unique identifiers (ES6)
          <br />
          BigInt – For large integers (ES2020)
          <br />
          🔹 2. Non-Primitive (Reference) Data Types
          <br />
          These hold collections or complex values.
          <br />
          Object – Collection of key-value pairs
          <br />
          Array – Ordered list of values
          <br />
          Function – Callable object
          <br />
          <br />
          JavaScript-এ মোট দুই ধরনের ডেটা টাইপ রয়েছে: <br />
          🔹 ১. Primitive Data Types <br />
          এগুলো অপরিবর্তনযোগ্য (immutable) এবং একক মান ধারণ করে। <br />
          String – টেক্সট ডেটা
          <br />
          Number – সংখ্যা (ইনটিজার বা দশমিক)
          <br />
          Boolean – true বা false
          <br />
          Undefined – ডিক্লেয়ার করা হয়েছে কিন্তু ভ্যালু অ্যাসাইন হয়নি
          <br />
          Null – ইচ্ছাকৃতভাবে ফাঁকা ভ্যালু
          <br />
          Symbol – ইউনিক আইডেন্টিফায়ার (ES6)
          <br />
          BigInt – অনেক বড় সংখ্যা ধারণের জন্য (ES2020)
          <br />
          🔹 ২. Non-Primitive (Reference) Data Types <br />
          এগুলো জটিল বা একাধিক মান ধারণ করে।
          <br />
          Object – কী-ভ্যালু জোড়ার সংগ্রহ
          <br />
          Array – একাধিক মানের লিস্ট
          <br />
          Function – কলযোগ্য অবজেক্ট
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse16">
          16. What is <span className="font-bold">DOM?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse16"
          id="collapse16"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          DOM stands for Document Object Model. It is a tree-like structure that
          the browser creates from your HTML. Every tag in HTML (like `div`,
          `p`, `h1`) becomes a node or object in this tree.
          <br />
          With JavaScript, we can use the DOM to:
          <br />
          * Read or change the text on a web page
          <br />
          * Add or remove elements
          <br />
          * Change styles (like color, size)
          <br />
          * Handle user actions like clicks
          <br />
          The DOM lets JavaScript control and change the content and structure
          of a web page while it's running, without needing to reload the page.
          <br />
          🔹 Key Points:
          <br />
          * DOM is the way a web page is shown in the browser as objects
          <br />
          * JavaScript uses DOM to change the page without reloading
          <br />
          * It helps make websites dynamic and interactive
          <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751638047/dom_zb8qqa.png"
            alt=""
          />
          DOM বা Document Object Model হলো একটি গাছের (tree) মতো গঠন, যেটি
          ব্রাউজার HTML কোড থেকে তৈরি করে। প্রতিটি HTML ট্যাগ (যেমন `div`, p`,
          `h1`) DOM-এ একটি নোড (node) বা অবজেক্ট হিসেবে থাকে।
          <br />
          JavaScript ব্যবহার করে DOM-এর মাধ্যমে আমরা:
          <br />
          * কোনো টেক্সট পড়তে বা পরিবর্তন করতে পারি
          <br />
          * নতুন HTML এলিমেন্ট যোগ বা মুছতে পারি
          <br />
          * স্টাইল (যেমন রঙ, সাইজ) পরিবর্তন করতে পারি
          <br />
          * ক্লিক বা টাইপ করার মতো ইউজার অ্যাকশনের প্রতিক্রিয়া জানাতে পারি
          <br />
          এইভাবে DOM ও JavaScript একসাথে ওয়েবসাইটকে ডাইনামিক এবং ইন্টারঅ্যাকটিভ
          করে তোলে।
          <br />
          🔹 মূল পয়েন্টসমূহ:
          <br />
          * DOM হলো ব্রাউজারের তৈরি HTML কাঠামোর একটি গাছের মতো রূপ
          <br />
          * JavaScript দিয়ে DOM ব্যবহার করে পেজ রিলোড না করেই কনটেন্ট ও স্টাইল
          পরিবর্তন করা যায়
          <br />* এটি ওয়েবপেজকে ডাইনামিক ও ইন্টারঅ্যাকটিভ করতে সাহায্য করে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse17">
          17. Is JavaScript a{" "}
          <span className="font-bold">static type or a dynamic type?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse17"
          id="collapse17"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          JavaScript is a *dynamic* type language. <br />
          This means you don’t have to define the data type of a variable when
          you declare it. The type is automatically decided at runtime, based on
          the value assigned.
          <br />
          🔹 Explanation:
          <br />
          In dynamic typing, the variable type can change during execution.{" "}
          <br />
          You can assign a string to a variable, and later assign a number to
          the same variable without any error.
          <br />
          🔹 Key Points:
          <br />
          * JavaScript is dynamically typed <br />
          * Variable type is decided at runtime, not at compile time <br />
          * More flexible but can cause type-related bugs <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751638299/js_dynamic_k4lck4.png"
            alt=""
          />
          JavaScript একটি *dynamic* type ভাষা। <br />
          এর মানে হলো, ভ্যারিয়েবল ডিক্লেয়ার করার সময় ডেটা টাইপ বলে দিতে হয়
          না। JavaScript নিজে থেকেই ভ্যালু দেখে টাইপ নির্ধারণ করে।
          <br />
          🔹 ব্যাখ্যা:
          <br />
          Dynamic typing এ, একটি ভ্যারিয়েবলের টাইপ এক্সিকিউশনের সময় পরিবর্তন
          হতে পারে। <br />
          আপনি একই ভ্যারিয়েবলে কখনো স্ট্রিং, আবার কখনো সংখ্যা রাখতে পারেন।{" "}
          <br />
          🔹 মূল পয়েন্টসমূহ: <br />
          * JavaScript হল dynamically typed <br />
          * টাইপ নির্ধারিত হয় রানটাইমে, কম্পাইল টাইমে নয় <br />* ব্যবহার সহজ,
          তবে টাইপ সম্পর্কিত বাগের ঝুঁকি থাকে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse18">
          18. What is a <span className="font-bold">variable?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse18"
          id="collapse18"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A variable in programming is like a container that holds a value or
          data. It has a name and can store different information, allowing
          developers to work with and manipulate data in their programs. <br />
          প্রোগ্রামিংয়ে ভেরিয়েবল একটি কন্টেইনার হিসেবে কাজ করে যা একটি ভেলু বা
          ডেটা ধারণ করে। এর একটি নাম থাকে এবং এটি বিভিন্ন তথ্য সংরক্ষণ করতে
          পারে, যা ডেভেলপারদের তাদের প্রোগ্রামে ডেটার সাথে কাজ করতে এবং তা
          পরিবর্তন করতে সহায়তা করে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse19">
          19. What are{" "}
          <span className="font-bold">compilers and interpreters?</span> And
          what is the difference between them?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse19"
          id="collapse19"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Compiler and interpreter are two types of programs that translate
          source code (written by humans) into machine code (understood by
          computers), but they do it in different ways.
          <br />
          🔹 Compiler:
          <br />
          * A compiler translates the entire code at once before running it
          <br />
          * If there are errors, it shows them all at once before execution
          <br />
          * After compiling, it creates a separate executable file
          <br />
          ✅ Example languages: C, C++, Java (uses both)
          <br />
          🔹 Interpreter:
          <br />
          * An interpreter executes the code line-by-line
          <br />
          * It stops immediately when an error is found
          <br />
          * No separate executable file is created
          <br />
          ✅ Example languages: JavaScript, Python
          <br />
          🔹 JavaScript is interpreted. When you run JavaScript in the browser,
          it reads and runs one line at a time. If a line has an error, the rest
          is not executed.
          <br />
          <br />
          Compiler এবং Interpreter হলো দুটি প্রোগ্রাম, যেগুলো মানুষের লেখা সোর্স
          কোডকে মেশিন কোডে রূপান্তর করে। তবে, তারা কাজটি ভিন্নভাবে করে।
          <br />
          🔹 Compiler:
          <br />
          * পুরো কোড একবারে অনুবাদ করে রান করার আগে
          <br />
          * সবগুলো ভুল একসাথে দেখায়
          <br />
          * একটি আলাদা executable ফাইল তৈরি করে
          <br />
          ✅ উদাহরণ: C, C++, Java (দুটোই ব্যবহার করে)
          <br />
          🔹 Interpreter:
          <br />
          * কোডটি লাইন বাই লাইন এক্সিকিউট করে
          <br />
          * ভুল পেলে সেখানেই থেমে যায়
          <br />
          * কোনো ফাইল তৈরি হয় না, সরাসরি এক্সিকিউশন হয়
          <br />
          ✅ উদাহরণ: JavaScript, Python
          <br />
          🔹 JavaScript একটি interpreted language। যখন আপনি ব্রাউজারে JavaScript
          চালান, তখন এটি লাইন বাই লাইন পড়ে এবং চালায়। কোনো লাইনে ভুল থাকলে
          সেখানেই থেমে যায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse20">
          20. What is <span className="font-bold">scope?</span> And what are
          block scope, global scope, and function scope?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse20"
          id="collapse20"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Scope means where a variable is accessible in your code. <br />
          It defines the visibility or lifetime of a variable—where you can use
          it and where you cannot.
          <br />
          There are three main types of scope in JavaScript:
          <br />
          🔹 1. Global Scope
          <br />
          * Variables declared outside of any function or block <br />
          * Can be accessed from anywhere in the code
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751725433/scope1_pvkfol.png"
            alt=""
          />
          🔹 2. Function Scope
          <br />
          * Variables declared inside a function <br />
          * Can only be accessed within that function
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751725434/scope2_ueu9td.png"
            alt=""
          />
          🔹 3. Block Scope <br />* Variables declared with `let` or `const`
          inside `{}` <br />
          * Accessible only inside that block <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751725433/scope3_bttpbc.png"
            alt=""
          />
          🔹 Key Points:
          <br />
          * Global scope → accessible everywhere <br />
          * Function scope → accessible only inside the function <br />* Block
          scope → accessible only inside `{}` with `let` or `const` <br />*
          `var` is not block-scoped, use `let` or `const` for safer code <br />
          <br />
          Scope মানে হলো, কোথা থেকে কোনো ভ্যারিয়েবল অ্যাক্সেস করা যাবে।
          <br />
          Scope নির্ধারণ করে ভ্যারিয়েবল কতটুকু জায়গায় কাজ করবে বা দেখা যাবে।
          <br />
          JavaScript-এ তিন ধরণের Scope আছে:
          <br />
          🔹 ১. Global Scope
          <br />
          * যখন ভ্যারিয়েবল ফাংশনের বাইরে ডিক্লেয়ার করা হয় <br />
          * এটি সব জায়গা থেকে অ্যাক্সেস করা যায় <br />
          🔹 ২. Function Scope <br />
          * যখন ভ্যারিয়েবল ফাংশনের ভিতরে ডিক্লেয়ার করা হয় <br />
          * এটি শুধু সেই ফাংশনের ভিতরেই কাজ করে <br />
          🔹 ৩. Block Scope
          <br />* `let` বা `const` দিয়ে কোনো ভ্যারিয়েবল `{}` এর ভিতরে
          ডিক্লেয়ার করলে <br />
          * সেটি শুধু ঐ ব্লকের ভিতরেই কাজ করে <br />
          🔹 মূল পয়েন্টসমূহ:
          <br />
          * Global scope → সব জায়গা থেকে অ্যাক্সেস করা যায় <br />
          * Function scope → শুধুমাত্র ফাংশনের ভিতরে <br />* Block scope → `{}`
          এর ভিতরে, শুধুমাত্র `let` ও `const` দিয়ে <br />* `var` block scope
          follow করে না, সাবধানে ব্যবহার করতে হয়
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse21">
          21. <span className="font-bold">find() vs filter().</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse21"
          id="collapse21"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          * The find method returns the first element in an array that passes a
          specific condition. The output is a single element, not an array. If
          no element passes the condition, undefined is returned. <br />
          * The filter method creates a new array with all elements that pass a
          specific condition. If no elements pass the condition, an empty array
          is returned.
          <br /> <br />* ফাইন্ড মেথড একটি অ্যারেতে প্রথম উপাদানটি প্রদান করে যা
          একটি নির্দিষ্ট শর্ত পূরণ করে। আউটপুট একটি একক উপাদান, কোনো অ্যারে নয়।
          যদি কোনো উপাদান শর্তটি পূরণ না করে, তাহলে 'undefined' ফিরিয়ে দেওয়া
          হয়। <br />* ফিল্টার মেথড একটি নতুন অ্যারে তৈরি করে সমস্ত উপাদান নিয়ে
          যা একটি নির্দিষ্ট শর্ত পূরণ করে। যদি কোন উপাদান শর্তটি পূরণ না করে,
          তাহলে একটি খালি অ্যারে ফিরিয়ে দেওয়া হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse22">
          22. <span className="font-bold">map() vs forEach().</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse22"
          id="collapse22"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Map: Creates a new array by applying a callback function to each
          element of the original array. It is used when you want to transform
          or derive a new array from the existing one. ForEach: Executes a
          callback function for each element in the array but does not return a
          new array. It is typically used for performing side effects (e.g.,
          logging, updating variables). <br />
          <br />{" "}
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751732192/map-vs-forEach-Search-07-05-2025_10_16_PM_ou9ly5.png"
            alt=""
          />
          ম্যাপ: একটি নতুন অ্যারে তৈরি করে মূল অ্যারের প্রতিটি উপাদানের উপর একটি
          কলব্যাক ফাংশন প্রয়োগ করে। এটি ব্যবহৃত হয় যখন আপনি একটি নতুন অ্যারে
          বানাতে চান যা পূর্বের অ্যারে থেকে পরিবর্তিত বা প্রাপ্ত হয়। <br />{" "}
          ফরইচ: অ্যারের প্রতিটি উপাদানের জন্য একটি কলব্যাক ফাংশন সম্পাদন করে
          কিন্তু নতুন একটি অ্যারে ফিরিয়ে দেয় না। এটি সাধারণত সাইড ইফেক্ট
          (যেমন, লগ করা, ভেরিয়েবল আপডেট করা) সম্পাদনের জন্য ব্যবহৃত হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse23">
          23. What is a <span className="font-bold">function</span> in
          Javascript?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse23"
          id="collapse23"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A function in JavaScript is a reusable block of code that performs a
          specific task. It takes inputs (parameters), processes them, and can
          return an output. Functions help avoid code repetition and make
          programs more organized. <br />
          <br />
          জাভাস্ক্রিপ্টে ফাংশন হলো কোডের একটি পুনরায় ব্যবহারযোগ্য ব্লক যা একটি
          নির্দিষ্ট কাজ করে। এটি ইনপুট (প্যারামিটার) নেয়, প্রসেস করে এবং আউটপুট
          দিতে পারে। ফাংশন কোডের পুনরাবৃত্তি রোধ করে এবং প্রোগ্রামকে সংগঠিত করে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse24">
          24.{" "}
          <span className="font-bold">
            Function declaration vs function expression.
          </span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse24"
          id="collapse24"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, there are two main ways to define a function: <br />
          🔹 1. Function Declaration <br />
          * Starts with the `function` keyword <br />
          * The function has a name <br />
          * It is hoisted, meaning you can call it before it is defined <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751733490/fd_ccht4q.png"
            alt=""
          />
          🔹 2. Function Expression
          <br />
          * A function assigned to a variable <br />
          * Can be named or anonymous <br />
          * Not hoisted, so you must define it before calling
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751733489/fe_hrsh0j.png"
            alt=""
          />
          JavaScript-এ ফাংশন লেখার দুইটি প্রধান পদ্ধতি আছে:
          <br />
          🔹 ১. Function Declaration
          <br />
          * `function` কীওয়ার্ড দিয়ে শুরু হয় <br />
          * ফাংশনের নাম থাকে <br />
          * এটি hoisted হয়, অর্থাৎ আগে কল করলেও চলে
          <br />
          🔹 ২. Function Expression
          <br />
          * একটি ফাংশনকে ভ্যারিয়েবলে অ্যাসাইন করা হয় <br />
          * এটি নেইমড বা অ্যানোনিমাস হতে পারে <br />* এটি hoist হয় না, অর্থাৎ
          আগে কল করলে এরর হবে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse25">
          25. What are the{" "}
          <span className="font-bold">break and continue statements?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse25"
          id="collapse25"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          `break` and `continue` are two control statements used in loops
          (`for`, `while`, etc.) to control how the loop runs.
          <br />
          🔹 1. `break` Statement
          <br />
          * `break` is used to immediately exit the loop
          <br />
          * The loop stops running as soon as `break` is called
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751734418/break_qshyip.png"
            alt=""
          />
          🔹 2. `continue` Statement
          <br />
          * `continue` is used to skip the current iteration and move to the
          next one
          <br />
          * The loop does not stop, it just skips the rest of the code for that
          iteration
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751734418/continue_k74cgi.png"
            alt=""
          />
          `break` এবং `continue` হলো loop control statements, যেগুলো দিয়ে আপনি
          loop এর flow নিয়ন্ত্রণ করতে পারেন (`for`, `while`, ইত্যাদিতে)।
          <br />
          🔹 ১. `break` স্টেটমেন্ট
          <br />
          * `break` ব্যবহার করলে পুরো loop থেমে যায়
          <br />
          * যখন শর্ত পূরণ হয়, তখনই loop থেকে বেরিয়ে যায়
          <br />
          🔹 ২. `continue` স্টেটমেন্ট
          <br />
          * `continue` ব্যবহার করলে সেই iteration স্কিপ হয়
          <br />* লুপ চলতে থাকে, শুধু ওইবারের কোড আর চলে না
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse26">
          26. What is the <span className="font-bold">global variable?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse26"
          id="collapse26"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A global variable is a variable that is defined outside of all
          functions or blocks in a program and can be accessed or modified from
          anywhere in the code. <br />
          <br />
          গ্লোবাল ভেরিয়েবল হল এমন একটি ভেরিয়েবল যা কোনো ফাংশন বা ব্লকের ভিতরে
          না থেকে বাইরে ডিফাইন করা হয়, এবং প্রোগ্রামের যেকোনো জায়গা থেকে এটিকে
          অ্যাকসেস বা পরিবর্তন করা যায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse27">
          27. How to handle an{" "}
          <span className="font-bold">asynchronous program?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse27"
          id="collapse27"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In JavaScript, some operations (like API calls, file loading, timers)
          are asynchronous, meaning they take time and don’t stop the rest of
          the code from running.
          <br />
          To handle these delays properly, JavaScript provides 3 main ways:
          <br />
          🔹 1. Callback Functions
          <br />
          * A function passed as a parameter and called after the task is
          finished
          <br />
          * Can lead to callback hell (nested callbacks)
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751735324/callback_sbwurm.png"
            alt=""
          />
          🔹 2. Promises
          <br />
          * A cleaner way to handle async code
          <br />
          * Uses `.then()` and `.catch()` for success and error handling
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751735325/promises_fotzeb.png"
            alt=""
          />
          🔹 3. Async/Await
          <br />
          * Modern, simple, and cleaner syntax
          <br />
          * Looks like regular code but handles async under the hood
          <br />
          * Must be used inside an `async` function
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751735323/async-await_sd1xvg.png"
            alt=""
          />
          🔹 Key Points:
          <br />
          * Use callbacks for basic async control
          <br />
          * Use promises for better readability
          <br />
          * Use async/await for clean, readable, and modern code
          <br />
          * Always handle errors using `try/catch` or `.catch()`
          <br />
          <br />
          JavaScript-এ কিছু কাজ (যেমন API call, ফাইল লোড, টাইমার) সময় নেয়,
          কিন্তু এই সময়ের জন্য বাকি কোড থেমে থাকে না — একে বলে asynchronous
          behavior।
          <br />
          এই ধরনের কোড সঠিকভাবে হ্যান্ডল করতে JavaScript এ ৩টি উপায় আছে:
          <br />
          🔹 ১. Callback Function
          <br />
          * একটি ফাংশন, যেটি কাজ শেষে কল করা হয়
          <br />
          * বেশি nested হলে callback hell হয়ে যেতে পারে
          <br />
          🔹 ২. Promises
          <br />
          * asynchronous কাজের ভালো ও পরিষ্কার উপায়
          <br />
          * `.then()` এবং `.catch()` ব্যবহার করে রেজাল্ট ও এরর হ্যান্ডল করা হয়
          <br />
          🔹 ৩. Async/Await
          <br />
          * সবচেয়ে আধুনিক এবং সহজ পদ্ধতি
          <br />
          * দেখতে সাধারণ কোডের মতো, কিন্তু ভিতরে async কাজ করে
          <br />
          * `async` ফাংশনের ভিতরে ব্যবহার করতে হয়
          <br />
          🔹 মূল পয়েন্টসমূহ:
          <br />
          * Callback সহজ কিন্তু কোড জটিল হতে পারে
          <br />
          * Promise পরিষ্কার ও ব্যবস্থাপনাযোগ্য
          <br />
          * Async/Await সবচেয়ে ক্লিন এবং আধুনিক পদ্ধতি
          <br />* এরর হ্যান্ডল করার জন্য `try/catch` বা `.catch()` ব্যবহার করা
          উচিত।
        </div>
      </div>
    </Container>
  );
};

export default JavascriptQuestions;
