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
          ES6, also called ECMAScript 2015, is a major update to JavaScript that
          introduced many useful features to make coding easier, cleaner, and
          more powerful.
          <br />
          Some ES6 features I regularly use:
          <br />
          1. `let` and `const` – for better variable declaration instead of
          `var`. `const` for constant values, `let` for block-scoped variables.
          <br />
          2. Arrow functions – shorter syntax for writing functions and keeping
          `this` context.
          <br />
          3. Template literals (`\`\${}\`\`) – for creating strings with
          variables easily using backticks.
          <br />
          4. Destructuring – to extract values from arrays or objects directly.
          <br />
          5. Spread (`...`) and Rest operators – for copying arrays/objects or
          handling function arguments.
          <br />
          6. Default parameters – to set default values in functions.
          <br />
          7. Modules (import/export) – to organize code into separate reusable
          files.
          <br />
          8. Promises – for handling asynchronous operations more cleanly.
          <br />
          9. Classes – for object-oriented programming, replacing constructor
          functions.
          <br />
          <br />
          ES6, যাকে ECMAScript 2015 ও বলা হয়, এটি JavaScript-এর একটি বড় আপডেট।
          এতে অনেক নতুন ফিচার এসেছে যা কোড লেখা সহজ, পরিষ্কার এবং শক্তিশালী
          করেছে।
          <br />
          আমি যেসব ES6 ফিচার নিয়মিত ব্যবহার করি:
          <br />
          1. `let` এবং `const` – আগে `var` ব্যবহার করতাম, এখন ব্লক-স্কোপ এবং
          কনস্ট্যান্ট ভ্যালু রাখার জন্য `let` ও `const` ব্যবহার করি।
          <br />
          2. Arrow Function – ছোট ও পরিষ্কার ফাংশন লেখার জন্য, এবং `this` ঠিক
          রাখে।
          <br />
          3. Template Literals (`\`\${}\`\`) – ব্যাকটিক ব্যবহার করে স্ট্রিং এ
          ভেরিয়েবল সহজে বসানো যায়।
          <br />
          4. Destructuring – অবজেক্ট বা অ্যারে থেকে সরাসরি মান বের করতে ব্যবহার
          করি।
          <br />
          5. Spread ও Rest Operator (`...`) – অ্যারে বা অবজেক্ট কপি, এবং ফাংশনের
          অনেক আর্গুমেন্ট ধরতে ব্যবহার করি।
          <br />
          6. Default Parameters – ফাংশনে ডিফল্ট ভ্যালু সেট করার জন্য।
          <br />
          7. Modules (import/export) – বড় প্রজেক্টে কোড আলাদা আলাদা ফাইলে ভাগ
          করার জন্য ব্যবহার করি।
          <br />
          8. Promises – অ্যাসিনক্রোনাস কাজ সহজভাবে হ্যান্ডেল করতে ব্যবহার করি।
          <br />
          9. Classes – অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং এর জন্য `class` ব্যবহার
          করি।
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
          In JavaScript, `var`, `let`, and `const` are used to declare
          variables, but they work differently.
          <br />
          * First, `var` is function-scoped, which means it's accessible
          throughout the function where it's declared. It also gets hoisted, but
          initialized as `undefined`. It's also re-declarable, which can cause
          bugs. That’s why we usually avoid using `var` in modern JavaScript.
          <br />* `let` is block-scoped, meaning it only exists inside the block
          `{}` where it is declared. It also gets hoisted but is not
          initialized, so using it before declaration causes an error. Unlike
          `var`, `let` can’t be re-declared in the same scope, but it can be
          reassigned, so it's useful for variables that change.
          <br />
          * `const` is also block-scoped, but once you assign a value, it cannot
          be reassigned. It’s ideal for constants or fixed values. However, for
          objects and arrays, the reference stays constant, but internal values
          can change.
          <br />
          In short: I use `let` when I expect the value to change, and `const`
          when the value should remain fixed. I avoid `var` completely in my
          codebase.
          <br />
          <br />
          JavaScript-এ `var`, `let`, আর `const` তিনটিই ভেরিয়েবল ডিক্লেয়ার করার
          জন্য ব্যবহার হয়, কিন্তু এদের আচরণ আলাদা।
          <br />
          * প্রথমত, `var` ফাংশন স্কোপড, মানে এটি পুরো ফাংশনের মধ্যে
          অ্যাক্সেসযোগ্য। এটি hoist হয় এবং `undefined` হিসেবে initialize হয়।
          আবার একই স্কোপে পুনরায় ডিক্লেয়ার করা যায়, যেটা অনেক সময় ভুলের কারণ হয়।
          তাই আমি `var` ব্যবহার এড়িয়ে চলি।
          <br />* `let` ব্লক স্কোপড, মানে এটি যেই `{}` ব্লকের ভিতরে আছে, শুধু
          সেখানে অ্যাক্সেস করা যায়। এটাও hoist হয়, কিন্তু initialize হয় না—তাই
          ডিক্লেয়ারেশনের আগে ব্যবহার করলে error হয়। এটা re-declare করা যায় না,
          তবে reassign করা যায়, মানে মান পরিবর্তন করা যায়।
          <br />
          * `const` ব্লক স্কোপড, কিন্তু একবার মান সেট করলে পরে আর সেটি পরিবর্তন
          করা যায় না। এটি আমি ব্যবহার করি যখন আমি জানি মান কখনও বদলাবে না। তবে
          যদি `const` দিয়ে object বা array ডিক্লেয়ার করি, তাহলে সেই object বা
          array এর ভিতরের ভ্যালু পরিবর্তন করা যায়, কিন্তু reference পরিবর্তন করা
          যায় না।
          <br />
          সংক্ষেপে বললে: আমি `let` ব্যবহার করি যেসব ভেরিয়েবলের মান পরিবর্তন হতে
          পারে, এবং `const` ব্যবহার করি যেগুলো ফিক্সড থাকে। `var` আমি ব্যবহার
          করি না।
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
          I use default parameters in JavaScript to handle situations where a
          function might be called without passing all the arguments.
          <br />
          If a parameter is not provided, the default value will be used
          automatically, which helps avoid undefined errors and makes the code
          more reliable and readable.
          <br />
          In short, default parameters make functions more flexible and safer to
          use, especially when working with optional arguments or API calls.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751793685/default_parameter_b2sqjq.png"
            alt=""
          />
          আমি default parameters ব্যবহার করি তখন, যখন কোনো ফাংশনে সব আর্গুমেন্ট
          না আসলেও যেন ফাংশন ঠিকভাবে কাজ করে।
          <br />
          যদি কোনো প্যারামিটার না দেওয়া হয়, তাহলে default value অটোমেটিকভাবে
          নেয়। এতে করে undefined error থেকে রক্ষা পাওয়া যায় এবং কোডটা আরও রিডেবল
          ও রিলায়েবল হয়।
          <br />
          সংক্ষেপে, default parameters কোডকে করে সহজ, নিরাপদ, এবং optional
          arguments ব্যবহারে খুব উপকারি।
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
          The spread operator in JavaScript is written as three dots: `...`
          <br />
          It is used to "spread out" elements from an array or properties from
          an object into a new array or object.
          <br />
          I mainly use it for three purposes:
          <br />
          1. Copying arrays or objects without reference.
          <br />
          2. Combining multiple arrays or objects.
          <br />
          3. Passing multiple values as arguments to a function.
          <br />
          So, the spread operator helps to create clean and immutable code,
          especially when working with state in React or managing data
          structures.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751794071/spread_operator_bgazex.png"
            alt=""
          />
          JavaScript-এ spread operator লেখা হয় `...` তিনটি ডট দিয়ে।
          <br />
          এর কাজ হলো array বা object-এর ভিতরের সব উপাদানকে আলাদা করে "ছড়িয়ে
          দেওয়া" নতুন array বা object-এর মধ্যে।
          <br />
          আমি এটি সাধারণত তিনটি কাজে ব্যবহার করি:
          <br />
          1. কোনো array বা object কপি করতে (reference ছাড়া)।
          <br />
          2. একাধিক array বা object একত্র করতে।
          <br />
          3. function-এ একসাথে অনেক ভ্যালু পাঠাতে।
          <br />
          সারাংশে বললে, spread operator কোডকে করে পরিষ্কার, সহজ এবং ইমিউটেবল,
          বিশেষ করে React-এর মতো লাইব্রেরিতে state ম্যানেজ করার সময়।
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
          In JavaScript, the prototype chain is a mechanism that allows objects
          to inherit properties and methods from other objects.
          <br />
          Every object in JavaScript has a hidden internal property called
          `[[Prototype]]`, which refers to another object. This forms a chain of
          prototypes, and it's used for property lookup.
          <br />
          For example, if we try to access a property on an object, and it
          doesn’t exist there, JavaScript will look up the chain to see if that
          property exists in its prototype.
          <br />
          This continues until it reaches `null`, which is the end of the chain.
          <br />
          So, the prototype chain is the base of inheritance in JavaScript. It
          makes code reusable without duplicating methods in every object.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751794640/pc_ldv1ns.png"
            alt=""
          />
          JavaScript-এ prototype chain হলো এমন একটি ব্যবস্থা, যার মাধ্যমে এক
          object আরেক object থেকে প্রপার্টি এবং মেথড ইনহেরিট করতে পারে।
          <br />
          প্রতিটি object-এর মধ্যে একটি hidden প্রপার্টি থাকে, যাকে
          `[[Prototype]]` বলা হয়, যেটা আরেকটি object-এর দিকে রেফার করে। এভাবে
          একের পর এক object রেফার করতে করতে একটি চেইন তৈরি হয়, যেটাকে আমরা
          prototype chain বলি।
          <br />
          যখন আমরা কোনো প্রপার্টি বা মেথড অ্যাক্সেস করি এবং সেটা ওই object-এ না
          পাই, তখন JavaScript তার prototype-এ খোঁজে। যদি সেখানেও না পায়, তাহলে
          উপরের লেভেলগুলোতে খুঁজতে খুঁজতে `null` পর্যন্ত যায়, যেটা চেইনের শেষ।
          <br />
          সংক্ষেপে, prototype chain হচ্ছে JavaScript-এ inheritance বা
          উত্তরাধিকার করার মূল ভিত্তি। এটি কোডকে reusable এবং efficient করে
          তোলে।
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
          A class is a blueprint or template that defines how an object should
          be structured. It defines the properties and methods, but it doesn’t
          hold any actual data.
          <br />
          An object is a real instance created from that class. It has actual
          values and can use the methods defined in the class.
          <br />
          So, in short:
          <br />
          * Class defines the structure,
          <br />
          * Object holds the actual data and behavior.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751795033/class_vs_object_hplrze.png"
            alt=""
          />
          Class হচ্ছে একটি নকশা বা ছাঁচ, যেখানে আমরা বলি একটা object-এর মধ্যে কী
          কী প্রপার্টি আর মেথড থাকবে। কিন্তু class নিজে কোনো ডাটা ধরে না।
          <br />
          আর Object হচ্ছে সেই class থেকে তৈরি হওয়া বাস্তব instance, যার মধ্যে
          আসল ভ্যালু আর মেথড থাকে।
          <br />
          সংক্ষেপে:
          <br />
          * Class বলে কী কী থাকবে,
          <br />* আর Object আসল ডাটা আর আচরণ নিয়ে কাজ করে।
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
          In JavaScript, when we pass data to a function, it happens in two
          ways: Call by Value and Call by Reference.
          <br />
          🔹 Call by Value is used for primitive data types like numbers,
          strings, booleans. That means a copy of the value is passed to the
          function. So, any change made inside the function doesn’t affect the
          original value.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751795458/call_by_value_bhp3za.png"
            alt=""
          />
          🔹 Call by Reference is used for non-primitive types like objects and
          arrays. Here, a reference (memory address) is passed to the function.
          So, changes inside the function do affect the original data.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751795457/call_by_ref_qkyhoa.png"
            alt=""
          />
          In short:
          <br />
          * Call by Value → Copy of value passed → Original value doesn’t
          change.
          <br />
          * Call by Reference → Reference passed → Original does change.
          <br />
          <br />
          JavaScript-এ যখন আমরা ফাংশনে ডাটা পাঠাই, তখন সেটা দুইভাবে হয় — Call by
          Value আর Call by Reference।
          <br />
          🔹 Call by Value হয় primitive data type যেমন: number, string, boolean
          ইত্যাদির জন্য। এখানে ভ্যালুর একটা কপি ফাংশনে পাঠানো হয়। তাই ফাংশনের
          ভিতরে কোনো পরিবর্তন করলে, মূল ভ্যালু বদলায় না।
          <br />
          🔹 Call by Reference হয় object বা array-এর মতো non-primitive type-এর
          জন্য। এখানে original object-এর reference (ঠিকানা) ফাংশনে পাঠানো হয়।
          তাই ভিতরে কিছু পরিবর্তন করলে মূল ডাটাও বদলে যায়।
          <br />
          সারাংশে বললে:
          <br />
          * Call by Value → ভ্যালুর কপি যায় → আসল ভ্যালু থাকে আগের মতো।
          <br />* Call by Reference → Reference যায় → আসল ডাটা বদলে যায়।
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
          A higher-order function is a function that either:
          <br />
          1. Takes another function as an argument, or
          <br />
          2. Returns a function as a result, or
          <br />
          3. Does both.
          <br />
          In JavaScript, functions are treated like values. So we can pass them
          to other functions or return them from functions, and that’s what
          makes higher-order functions possible.
          <br />
          Common examples are:
          <br />
          * `map()`, `filter()`, and `forEach()` – they take a function as an
          argument.
          <br />
          * We can also write custom functions that return other functions.
          <br />
          <br />
          Higher-order functions make JavaScript more powerful, flexible, and
          are heavily used in functional programming, especially with arrays,
          callbacks, and React hooks.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751803744/higher_order_func_lxocdm.png"
            alt=""
          />
          JavaScript-এ higher-order function মানে এমন একটি ফাংশন যেটা:
          <br />
          1. অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে নেয়, অথবা
          <br />
          2. ফলাফল হিসেবে আরেকটি ফাংশন রিটার্ন করে, অথবা
          <br />
          3. উভয়টাই করে।
          <br />
          JavaScript-এ ফাংশনকে ভ্যালু হিসেবে ধরা হয়, তাই আমরা ফাংশনকে পাস করতে
          পারি অথবা ফাংশন থেকে রিটার্ন করতে পারি। এই ফিচার দিয়েই higher-order
          function কাজ করে।
          <br />
          সাধারণ উদাহরণ:
          <br />
          * `map()`, `filter()`, `forEach()` – এরা ফাংশনকে আর্গুমেন্ট হিসেবে
          নেয়।
          <br />* আবার আমরা নিজেরাও এমন ফাংশন বানাতে পারি যেটা অন্য ফাংশন
          রিটার্ন করে।
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
          Both Local Storage and Session Storage are part of the Web Storage API
          in JavaScript, and they are used to store data on the client-side,
          inside the user's browser.
          <br />
          But there are some key differences:
          <br />
          1. Lifetime:
          <br />
          * Local Storage stores data permanently, until it's manually cleared
          by the user or by code.
          <br />
          * Session Storage stores data only for the current browser tab or
          session. Once the tab is closed, the data is gone.
          <br />
          2. Scope:
          <br />
          * Local Storage is shared across all tabs and windows of the same
          origin.
          <br />
          * Session Storage is tab-specific – it’s isolated per tab.
          <br />
          3. Capacity:
          <br />
          * Both usually store around 5–10 MB, but it may vary by browser.
          <br />
          In summary:
          <br />
          * Use Local Storage when you want to persist data even after the
          browser is closed.
          <br />
          * Use Session Storage when data is only needed temporarily during a
          single tab session.
          <br />
          <br />
          Local Storage এবং Session Storage – দুটোই JavaScript-এর Web Storage
          API-এর অংশ, এবং এগুলো ব্যবহার হয় ব্রাউজারে ক্লায়েন্ট-সাইডে ডাটা
          সংরক্ষণ করার জন্য।
          <br />
          তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:
          <br />
          1. স্থায়িত্ব (Lifetime):
          <br />
          * Local Storage-এ ডাটা থাকে স্থায়ীভাবে, যতক্ষণ না ইউজার বা কোড থেকে
          মুছে ফেলা হয়।
          <br />
          * Session Storage-এ ডাটা থাকে শুধু ওই ব্রাউজার ট্যাব বন্ধ হওয়া
          পর্যন্ত।
          <br />
          2. স্কোপ (Scope):
          <br />
          * Local Storage সব ট্যাব এবং উইন্ডোতে শেয়ার হয় যদি একই origin হয়।
          <br />
          * Session Storage শুধুমাত্র ওই নির্দিষ্ট ট্যাবে সীমাবদ্ধ।
          <br />
          3. স্টোরেজ সীমা:
          <br />
          * সাধারণত ৫ থেকে ১০ MB পর্যন্ত ডাটা রাখতে পারে, ব্রাউজার ভেদে ভিন্ন
          হতে পারে।
          <br />
          সংক্ষেপে বললে:
          <br />
          * যদি আপনি চান ডাটা ব্রাউজার বন্ধ করলেও থেকে যাক, তাহলে Local Storage
          ব্যবহার করুন।
          <br />* আর যদি শুধু একটা সেশনের জন্য ডাটা দরকার হয়, তাহলে Session
          Storage ভালো।
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
          Cookies are small pieces of data that a website stores on the user's
          browser. They are sent to the server with every HTTP request, which
          makes them useful for tracking and session management.
          <br />
          Each cookie typically has a name, value, and expiration time, and we
          can set options like domain, path, and whether it's accessible via
          JavaScript or only on the server (using `HttpOnly`).
          <br />
          I would use cookies mainly for:
          <br />
          1. Authentication – to store login tokens like JWT securely.
          <br />
          2. Session tracking – to keep the user logged in or remember user
          activity.
          <br />
          3. User preferences – like theme, language, or other settings.
          <br />
          For example, in a login system, we can store the token in an `HttpOnly
          cookie` to keep it secure from JavaScript attacks like XSS.
          <br />
          Unlike localStorage, cookies are automatically sent to the server with
          every request, so they are ideal for server-side authentication.
          <br />
          <br />
          Cookies হলো ছোট ছোট ডাটা, যেগুলো একটি ওয়েবসাইট ইউজারের ব্রাউজারে
          সংরক্ষণ করে। প্রতিটি HTTP request-এর সঙ্গে এই cookies অটো সার্ভারে
          পাঠানো হয়, এজন্য এগুলো session tracking এবং authentication-এর জন্য
          খুবই দরকারি।
          <br />
          প্রতিটি cookie-তে থাকে name, value, এবং expiration time। এছাড়া আমরা
          domain, path, এবং `HttpOnly` বা `Secure` এর মতো অপশনও সেট করতে পারি।
          <br />
          আমি cookies সাধারণত যেসব ক্ষেত্রে ব্যবহার করি:
          <br />
          1. Authentication – লগইন টোকেন বা JWT সিকিউরলি সংরক্ষণ করতে।
          <br />
          2. Session tracking – ইউজারকে লগইন রাখা বা তাদের কার্যকলাপ ট্র্যাক
          করতে।
          <br />
          3. User preferences – যেমন থিম, ভাষা বা অন্য সেটিংস মনে রাখতে।
          <br />
          উদাহরণস্বরূপ, আমরা যদি JWT token `HttpOnly cookie`-তে রাখি, তাহলে সেটা
          JavaScript থেকে access করা যায় না, ফলে XSS অ্যাটাক থেকে সুরক্ষা পাওয়া
          যায়।
          <br />
          Cookies-এর সুবিধা হলো, এগুলো অটো সার্ভারে পাঠানো হয়, তাই server-side
          authentication-এর ক্ষেত্রে এগুলো সবচেয়ে কার্যকর।
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
          Object-Oriented Programming, or OOP, is a programming style based on
          the concept of objects. These objects represent real-world entities
          and contain both data (properties) and functions (methods) that work
          on that data.
          <br />
          OOP helps to write structured, reusable, and maintainable code,
          especially in large projects.
          <br />
          There are four main principles of OOP:
          <br />
          1. Encapsulation – Wrapping data and functions together inside an
          object, so internal details are hidden from outside.
          <br />
          2. Inheritance – One class can inherit properties and methods from
          another class, which promotes code reuse.
          <br />
          3. Polymorphism – Same function or method behaves differently based on
          context or data type.
          <br />
          4. Abstraction – Hiding complex logic and showing only essential
          features to the user.
          <br />
          So, in short, OOP makes code modular, organized, and easier to manage.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751804927/OOP_uqgk5w.png"
            alt=""
          />
          Object-Oriented Programming, সংক্ষেপে OOP, হলো এমন একটি প্রোগ্রামিং
          স্টাইল, যেখানে কোড লেখা হয় object বা বস্তুকে ভিত্তি করে। প্রতিটি
          object-এ থাকে data (property) এবং সেই data-র উপর কাজ করার function
          (method)।
          <br />
          OOP-এর মাধ্যমে আমরা খুবই structured, reusable, এবং maintainable কোড
          লিখতে পারি, বিশেষ করে বড় প্রজেক্টে।
          <br />
          OOP-এর চারটি মূল বৈশিষ্ট্য আছে:
          <br />
          1. Encapsulation – ডাটা ও ফাংশনকে একসাথে object-এর ভিতরে রাখে এবং
          বাইরের থেকে কিছু লুকিয়ে রাখে।
          <br />
          2. Inheritance – এক class অন্য class থেকে property ও method নিতে পারে।
          এতে কোড পুনর্ব্যবহার করা যায়।
          <br />
          3. Polymorphism – একই method বা function বিভিন্নভাবে ব্যবহার করা যায়,
          context অনুযায়ী।
          <br />
          4. Abstraction – জটিল বিষয়গুলো লুকিয়ে রেখে শুধু প্রয়োজনীয় অংশ ইউজারকে
          দেখায়।
          <br />
          সংক্ষেপে বললে:
          <br />
          OOP কোডকে করে আরও পরিচ্ছন্ন, মডুলার এবং সহজে ব্যবস্থাপনা যোগ্য।
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
          Array and Linked List are both linear data structures used to store a
          collection of elements, but they work in very different ways.
          <br />
          Here are the key differences:
          <br />
          1. Memory Allocation:
          <br />
          * Arrays use contiguous memory – all elements are stored next to each
          other.
          <br />
          * Linked Lists use non-contiguous memory – each element (called a
          node) points to the next.
          <br />
          2. Access Time:
          <br />
          * Arrays allow fast access using indexes (O(1)).
          <br />
          * Linked Lists require sequential traversal (O(n)) to access elements.
          <br />
          3. Insertion & Deletion:
          <br />
          * In Arrays, inserting or deleting in the middle is costly because we
          need to shift elements.
          <br />
          * In Linked Lists, insertion and deletion are faster as we just update
          pointers.
          <br />
          4. Size:
          <br />
          * Arrays have fixed size (unless you use dynamic arrays).
          <br />
          * Linked Lists are dynamic, they can grow or shrink as needed.
          <br />
          Summary:
          <br />
          * Use arrays when you need fast access.
          <br />
          * Use linked lists when you need fast insertion/deletion or dynamic
          size.
          <br />
          <br />
          Array এবং Linked List – দুটোই লিনিয়ার ডাটা স্ট্রাকচার, অর্থাৎ একটার পর
          একটা ডাটা রাখে। তবে এদের কাজ করার পদ্ধতিতে অনেক পার্থক্য আছে।
          <br />
          মূল পার্থক্যগুলো হলো:
          <br />
          1. মেমোরি অ্যলোকেশন:
          <br />
          * Array-এ সব উপাদান একটানা (contiguous) মেমোরিতে থাকে।
          <br />
          * Linked List-এ প্রতিটি node আলাদা জায়গায় থাকে, এবং পয়েন্টার দিয়ে একে
          অপরের সাথে যুক্ত থাকে।
          <br />
          2. এক্সেস টাইম:
          <br />
          * Array-তে index দিয়ে দ্রুত access (O(1)) করা যায়।
          <br />
          * Linked List-এ sequentially traverse করে ধীরে access (O(n)) করতে হয়।
          <br />
          3. ইনসার্ট এবং ডিলিট:
          <br />
          * Array-তে মাঝখানে কিছু insert বা delete করলে অনেক শিফট করতে হয়, তাই
          ব্যয়বহুল।
          <br />
          * Linked List-এ শুধু pointer update করলেই হয়, তাই insert/delete দ্রুত
          হয়।
          <br />
          4. সাইজ:
          <br />
          * Array-র সাইজ সাধারণত fixed থাকে।
          <br />
          * Linked List-র সাইজ dynamic, যত ইচ্ছা বাড়ানো বা কমানো যায়।
          <br />
          সংক্ষেপে বললে:
          <br />
          * যদি দ্রুত access দরকার হয়, তাহলে Array ভালো।
          <br />* যদি frequent insert/delete বা dynamic size দরকার হয়, তাহলে
          Linked List ব্যবহার করা ভালো।
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
          When I need to debug a JavaScript application, I usually follow a
          step-by-step process to identify and fix the issue effectively.
          <br />
          1. Use `console.log()` –<br />
          First, I check the flow or variable values using `console.log()`
          statements. This is quick and helps narrow down where the bug is
          happening.
          <br />
          2. Browser Developer Tools –<br />
          I use Chrome DevTools or Firefox Developer Tools to:
          <br />
          * Inspect elements,
          <br />
          * Check console errors,
          <br />
          * Use the Sources tab to add breakpoints and step through the code
          line-by-line.
          <br />
          3. Debugger Statement –<br />
          I sometimes insert the `debugger;` keyword in my code. When DevTools
          is open, it pauses execution at that point so I can inspect variable
          values.
          <br />
          4. Check Network Tab –<br />
          For frontend-backend issues, I check the Network tab to see API
          requests and responses, status codes, and payloads.
          <br />
          5. Linting Tools –<br />
          I use tools like ESLint to catch syntax or logic errors early while
          writing the code.
          <br />
          6. Try-Catch Blocks –<br />
          For asynchronous code or API errors, I use `try-catch` to safely catch
          and log exceptions.
          <br />
          7. Stack Traces & Error Messages –<br />
          I always read the full error message and check the stack trace to
          trace where the problem is coming from.
          <br />
          In short, I try to understand the bug logically, then use the right
          tools to trace and fix it.
          <br />
          <br />
          আমি যখন একটি JavaScript অ্যাপ্লিকেশন ডিবাগ করি, তখন একটা ধারাবাহিক
          ধাপে ধাপে পদ্ধতি অনুসরণ করি যাতে সমস্যাটা সঠিকভাবে চিহ্নিত ও সমাধান
          করা যায়।
          <br />
          1. `console.log()` ব্যবহার করি –<br />
          শুরুতে আমি বিভিন্ন ভ্যারিয়েবল বা কোডের flow বোঝার জন্য `console.log()`
          ব্যবহার করি। এটা খুব দ্রুত এবং সহজে সমস্যা খুঁজে বের করতে সাহায্য করে।
          <br />
          2. Browser-এর Developer Tools –<br />
          আমি Chrome বা Firefox-এর DevTools ব্যবহার করি:
          <br />
          * Console-এর error চেক করতে,
          <br />
          * Sources tab থেকে breakpoint বসিয়ে এক একটি লাইন দেখে বুঝতে,
          <br />
          * DOM বা element structure চেক করতে।
          <br />
          3. `debugger` ব্যবহার করি –<br />
          আমি মাঝে মাঝে কোডে `debugger;` লিখে দিই, যাতে DevTools খোলা থাকলে কোড
          সেই লাইনে এসে pause হয়। তখন আমি ভ্যারিয়েবলগুলো সহজে দেখতে পারি।
          <br />
          4. Network Tab দেখছি –<br />
          ফ্রন্টএন্ড ও ব্যাকএন্ড issue হলে আমি Network tab থেকে:
          <br />
          * API call ঠিক হচ্ছে কিনা,
          <br />
          * Status code কী আসছে,
          <br />
          * Data ঠিকভাবে যাচ্ছে কিনা – সব চেক করি।
          <br />
          5. Linting Tools ব্যবহার করি –<br />
          আমি ESLint-এর মতো tool ব্যবহার করি যাতে syntax বা logic error আগেই ধরা
          পড়ে।
          <br />
          6. Try-Catch Block –<br />
          Async ফাংশন বা API call ডিবাগ করতে `try-catch` দিয়ে error ধরার
          ব্যবস্থা করি।
          <br />
          7. Error message ও stack trace ভালো করে পড়ি –<br />
          আমি পুরো error message পড়ি এবং stack trace থেকে বুঝে নেই কোন লাইনে ও
          কোন ফাংশনে সমস্যা হচ্ছে।
          <br />
          সংক্ষেপে বললে:
          <br />
          আমি সমস্যাটাকে ভালোভাবে বুঝে, তারপর উপযুক্ত টুল বা পদ্ধতি দিয়ে সেটাকে
          track ও fix করার চেষ্টা করি।
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
          In ES6, template literals are a new way to work with strings.
          <br />
          They are defined using backticks `` instead of regular quotes (`' '`
          or `" "`).
          <br />
          The biggest advantages of template literals are:
          <br />
          1. String Interpolation –<br />
          We can easily insert variables or expressions inside a string using `$
          {}` syntax.
          <br />
          2. Multi-line Strings –<br />
          We can write strings in multiple lines without using `\n` or
          concatenation.
          <br />
          So, template literals make string handling cleaner, easier, and more
          readable, especially when combining multiple variables or HTML
          structures in JavaScript.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751809708/tl_qmsfoi.png"
            alt=""
          />
          <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751809784/tl2_wdvmcb.png"
            alt=""
          />
          ES6-এ template literal হলো নতুনভাবে string নিয়ে কাজ করার একটি সহজ
          পদ্ধতি।
          <br />
          এটি আমরা backtick (``) দিয়ে লিখি, সাধারণ কোট (`' '`বা`" "\`) এর বদলে।
          <br />
          Template literal-এর মূল সুবিধাগুলো হলো:
          <br />
          1. String Interpolation –<br />
          আমরা `${}` এর ভিতরে ভ্যারিয়েবল বা এক্সপ্রেশন রেখে সরাসরি string-এর
          ভিতর বসাতে পারি।
          <br />
          2. Multi-line String –<br />
          একাধিক লাইনে string লিখতে পারি, `\n` বা `+` ব্যবহার না করেই।
          <br />
          সংক্ষেপে, template literal আমাদের string manage করতে সহজ, ক্লিন, এবং
          রিডেবল করে তোলে, বিশেষ করে যখন অনেক ভ্যারিয়েবল একসাথে বসাতে হয় বা বড়
          HTML বানাতে হয়।
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
          Both spread and rest operators use the same syntax — three dots
          (`...`) — but they are used in different contexts and behave
          differently.
          <br />
          🔹 Spread Operator (`...`)
          <br />
          Purpose: To expand or unpack elements from an array or object.
          <br />
          Used in: Function arguments, array/object cloning, merging.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751810445/spread_operators_fpljzm.png"
            alt=""
          />
          🔹 Rest Operator (`...`)
          <br />
          Purpose: To collect or pack multiple elements into a single array or
          object.
          <br />
          Used in: Function parameters or destructuring.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751810445/rest_w2gaio.png"
            alt=""
          />
          In short:
          <br />
          * Spread: Break things apart
          <br />
          * Rest: Gather things together
          <br />
          Same syntax, opposite purpose.
          <br />
          <br />
          Spread আর Rest — দুইটাতেই `...` তিনটি ডট ব্যবহার হয়, কিন্তু ওদের কাজ
          একেবারে উল্টো।
          <br />
          🔹 Spread Operator (`...`)
          <br />
          কাজ: কোনো array বা object-এর ভিতরের উপাদানগুলোকে ভেঙে বাইরে বের করে
          আনে।
          <br />
          ব্যবহার হয়: নতুন array/object বানাতে, combine করতে, function-এ
          multiple argument পাঠাতে।
          <br />
          🔹 Rest Operator (`...`)
          <br />
          কাজ: অনেক ভ্যালু বা উপাদানকে একসাথে একটি array বা object-এর মধ্যে নিয়ে
          আসে।
          <br />
          ব্যবহার হয়: ফাংশনের parameter-এ, destructuring-এ।
          <br />
          সংক্ষেপে:
          <br />
          * Spread → ভেঙে ফেলে
          <br />
          * Rest → জমা করে
          <br />
          একই `...` চিহ্ন হলেও, কাজ একদম বিপরীত।
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
          Destructuring is a feature introduced in ES6 that allows us to extract
          values from arrays or objects and assign them to variables in a clean
          and simple way.
          <br />
          It helps write shorter, more readable code when we need to access
          multiple values.
          <br />
          We can also rename variables and use default values during
          destructuring.
          <br />
          Destructuring is widely used in React props, function parameters, and
          working with APIs.
          <br />
          In short:
          <br />
          Destructuring is a clean syntax to extract multiple values from arrays
          or objects.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751811042/Array_destructuring_bcdun5.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751811040/Object_destructuring_wyookk.png"
            alt=""
          />
          Destructuring হলো ES6-এর একটি সুবিধা, যেটার মাধ্যমে আমরা array বা
          object থেকে এক বা একাধিক ভ্যালু সহজভাবে আলাদা করে ভ্যারিয়েবল-এ রাখতে
          পারি।
          <br />
          এটা কোডকে সংক্ষিপ্ত এবং রিডেবল করে তোলে।
          <br />
          আমরা চাইলে ভ্যারিয়েবলের নাম পুনঃনামকরণ বা ডিফল্ট ভ্যালু-ও দিতে পারি।
          <br />
          Destructuring সাধারণত React props, function parameters, API response
          handle করার সময় অনেক ব্যবহৃত হয়।
          <br />
          সংক্ষেপে:
          <br />
          Destructuring মানে হচ্ছে array বা object থেকে ডাটা বের করে নেওয়া সহজ
          এবং পরিষ্কার উপায়ে।
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
          The ternary operator is a short-hand way of writing an if-else
          condition in JavaScript. It’s called “ternary” because it takes three
          parts: a condition, a true expression, and a false expression.
          <br />
          The syntax is:
          <br />
          condition ? expressionIfTrue : expressionIfFalse;
          <br />
          It makes code shorter, cleaner, especially when returning values based
          on a condition.
          <br />
          I often use ternary in places like JSX (in React), return statements,
          or inline conditional rendering.
          <br />
          <br />
          Ternary operator হলো JavaScript-এ if-else-এর সংক্ষিপ্ত রূপ, যেটা আমরা
          এক লাইনেই কন্ডিশন চেক করতে ব্যবহার করি।
          <br />
          এটা “ternary” বলা হয় কারণ এতে তিনটি অংশ থাকে:
          <br />
          একটি condition, একটি true হলে কী হবে, এবং একটি false হলে কী হবে।
          <br />
          এর syntax হলো:
          <br />
          condition ? expressionIfTrue : expressionIfFalse;
          <br />
          এটা কোডকে ছোট, পরিষ্কার এবং পাঠযোগ্য করে তোলে, বিশেষ করে যখন রিটার্ন
          বা condition অনুযায়ী কিছু দেখাতে হয় – যেমন React JSX-এ।
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
          In JavaScript, both regular functions and arrow functions are used to
          define functions, but they have some important differences.
          <br />
          Arrow functions are shorter and cleaner, especially for one-liners.
          <br />
          🔹 1. `this` Keyword Behavior
          <br />
          * The most important difference is how they handle the `this` keyword.
          <br />
          * In a regular function, `this` refers to the calling object.
          <br />
          * In an arrow function, `this` is lexically bound, meaning it uses
          `this` from its parent scope.
          <br />
          🔹 2. Use Cases
          <br />
          * Use arrow functions for short callbacks, array methods, or when we
          don’t need `this`.
          <br />
          * Use regular functions when you need access to `this`, or you're
          defining methods in objects or classes.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751811720/regular_vs_arrow_function_n0sxca.png"
            alt=""
          />
          JavaScript-এ Regular Function আর Arrow Function দুইভাবেই ফাংশন লেখা
          যায়, কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।
          <br />
          🔹 1. `this` কীভাবে কাজ করে
          <br />
          * Regular Function-এ `this` মানে হলো যে object ফাংশনকে কল করছে, সেই
          object।
          <br />
          * Arrow Function-এ `this` হয় parent scope থেকে নেওয়া — একে বলে lexical
          `this`।
          <br />
          🔹 2. কোথায় কোনটা ব্যবহার করব
          <br />
          * ছোট কাজ বা callback function-এ Arrow Function ভালো।
          <br />* Object বা class method-এ Regular Function ব্যবহার করা উচিত,
          কারণ `this` দরকার হয়।
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
          IIFE stands for Immediately Invoked Function Expression. <br />
          It’s a function that runs as soon as it is defined. <br />
          The main purpose of using IIFE is to create a private scope, so that
          variables inside it don’t pollute the global scope.
          <br />
          🔹 Why use IIFE?
          <br />
          1. Avoid polluting global variables <br />
          2. Create isolated, private logic <br />
          3. Used in older JavaScript to simulate block scope
          <br />
          Summary:
          <br />
          * IIFE = function that runs immediately after it’s created <br />
          * Used to encapsulate logic and protect variables from global access
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751823248/IIFE_v5hyh9.png"
            alt=""
          />
          IIFE মানে হলো Immediately Invoked Function Expression। <br />
          এটি এমন একটি ফাংশন যেটা ডিক্লেয়ার করার সাথে সাথে এক্সিকিউট হয়ে যায়।{" "}
          <br />
          এর প্রধান উদ্দেশ্য হলো নিজস্ব scope তৈরি করা, যাতে ভেতরের
          ভ্যারিয়েবলগুলো বাইরের থেকে access না করা যায়।
          <br />
          🔹 কেন ব্যবহার করব?
          <br />
          1. Global scope নোংরা হওয়া থেকে বাঁচায় <br />
          2. Private scope তৈরি করে <br />
          3. পুরানো JavaScript-এ block scope না থাকায় এইভাবে ব্যবহার হতো
          <br />
          সংক্ষেপে:
          <br />
          * IIFE = সাথে সাথে চলে এমন function <br />* ব্যবহার হয় scope আলাদা
          রাখতে, global variable বাঁচাতে
        </div>
      </div>
    </Container>
  );
};

export default ES6Questions;

{
  /* <span className="font-bold"></span> */
}
