/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const ReactQuestions = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">React JS?</span> Tell us about
          <span className="font-bold"> advantages and disadvantages</span> of
          using React JS.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          React JS is a JavaScript library used for building user interfaces,
          especially for single-page applications. It was developed by Facebook
          and it helps in creating fast, interactive, and reusable UI
          components.
          <br />
          It uses a concept called Virtual DOM which improves the performance of
          web applications. React follows a component-based architecture, which
          means the UI is built by combining small reusable pieces.
          <br />
          ✅ Advantages of React JS:
          <br />
          1. Reusable Components – We can reuse components across different
          parts of the application, which makes development faster and more
          organized.
          <br />
          2. Virtual DOM – React updates only the changed parts of the UI, which
          improves performance.
          <br />
          3. Fast Rendering – It makes apps faster and smoother because of its
          efficient updating process.
          <br />
          4. Strong Community Support – Since it's maintained by Meta (Facebook)
          and the community, we get regular updates, tools, and third-party
          libraries.
          <br />
          5. SEO Friendly – Compared to some other JS frameworks, React can be
          more SEO-friendly when used with SSR (like Next.js).
          <br />
          6. One-Way Data Binding – Makes data flow more predictable and easier
          to debug.
          <br />
          ❌ Disadvantages of React JS:
          <br />
          1. JSX Learning Curve – JSX syntax might be confusing for beginners as
          it mixes HTML with JavaScript.
          <br />
          2. Too Many Choices – React is just the "V" in MVC. So we have to
          choose routing, state management, and other tools separately.
          <br />
          3. Frequent Updates – React and its ecosystem change often, which can
          be hard to keep up with.
          <br />
          4. Boilerplate Code – For simple tasks, sometimes we need to write too
          much code.
          <br />
          <br />
          <br />
          React JS একটি JavaScript লাইব্রেরি, যা মূলত ইউজার ইন্টারফেস (UI) তৈরি
          করার জন্য ব্যবহার করা হয়। এটি Facebook দ্বারা তৈরি করা হয়েছে। এটি
          সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA) তৈরি করতে খুবই উপযোগী এবং দ্রুত,
          ইন্টার‌্যাকটিভ ও পুনর্ব্যবহারযোগ্য কম্পোনেন্ট তৈরি করতে সহায়তা করে।
          <br />
          React এ Virtual DOM ব্যবহৃত হয়, যা অ্যাপ্লিকেশনের পারফর্মেন্স উন্নত
          করে। এটি একটি component-based architecture অনুসরণ করে, যেখানে UI ছোট
          ছোট reusable কম্পোনেন্ট দিয়ে তৈরি হয়।
          <br />
          ✅ React JS-এর সুবিধা:
          <br />
          1. Reusable Components – একবার তৈরি করা কম্পোনেন্ট বারবার ব্যবহার করা
          যায়, এতে সময় বাঁচে এবং কোড পরিষ্কার থাকে।
          <br />
          2. Virtual DOM – শুধুমাত্র পরিবর্তিত অংশ আপডেট হয়, ফলে পারফর্মেন্স
          ভালো হয়।
          <br />
          3. Fast Rendering – ইউআই দ্রুত রেন্ডার হয়, ফলে ইউজার এক্সপেরিয়েন্স
          ভালো হয়।
          <br />
          4. Strong Community Support – Meta এবং কমিউনিটি মিলে ভালো সাপোর্ট,
          লাইব্রেরি ও আপডেট দেয়।
          <br />
          5. SEO Friendly – SSR (যেমন Next.js) ব্যবহার করলে React অ্যাপ SEO
          ফ্রেন্ডলি হয়।
          <br />
          6. One-Way Data Binding – ডাটা ফ্লো সহজ ও ডিবাগিং সুবিধাজনক হয়।
          <br />
          ❌ React JS-এর অসুবিধা:
          <br />
          1. JSX শেখা কঠিন হতে পারে – HTML আর JS একসাথে লেখা নতুনদের জন্য
          কনফিউসিং হতে পারে।
          <br />
          2. সব কিছু আলাদাভাবে সেটআপ করতে হয় – React শুধু UI তৈরির জন্য, তাই
          রাউটিং, স্টেট ম্যানেজমেন্ট ইত্যাদি আলাদাভাবে নিতে হয়।
          <br />
          3. বারবার আপডেট হয় – নতুন ফিচার আর লাইব্রেরির কারণে সবসময় আপডেট
          থাকতে হয়, যা ঝামেলার হতে পারে।
          <br />
          4. বেশি কোড লিখতে হয় – সহজ কাজেও অনেক boilerplate কোড লিখতে হয় অনেক
          সময়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. Why will you <span className="font-bold"> select React JS?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          I would select React JS because it is efficient, scalable, and
          developer-friendly. It allows me to build reusable components, which
          helps in keeping my code clean and organized. React also offers high
          performance through its Virtual DOM, which makes updates faster and
          smoother for the user.
          <br />
          Another reason is its strong ecosystem and community support. There
          are lots of ready-to-use libraries and tools available. Also, React
          works very well with modern frameworks like Next.js, which gives me
          the power to handle server-side rendering (SSR) and improve SEO.
          <br />
          In short, I prefer React because it makes front-end development
          faster, more maintainable, and future-ready.
          <br />
          <br />
          আমি React JS বেছে নেব কারণ এটি দ্রুত, স্কেলযোগ্য এবং
          ডেভেলপার-ফ্রেন্ডলি একটি লাইব্রেরি। এর মাধ্যমে আমি reusable components
          তৈরি করতে পারি, যেটা কোডকে পরিষ্কার ও মেইনটেইনযোগ্য রাখে। React-এর
          Virtual DOM ব্যবহার করে ইউজার ইন্টারফেস খুব দ্রুত আপডেট হয়, ফলে
          পারফর্মেন্স অনেক ভালো হয়।
          <br />
          আরো একটি গুরুত্বপূর্ণ কারণ হলো এর বড় কমিউনিটি ও ecosystem। প্রচুর
          লাইব্রেরি ও টুলস সহজেই পাওয়া যায়। এছাড়া, React Next.js এর মতো
          আধুনিক ফ্রেমওয়ার্কের সাথে খুব ভালোভাবে কাজ করে, যা SEO এবং
          Server-Side Rendering (SSR) এর সুবিধা দেয়।
          <br />
          সংক্ষেপে বললে, React JS ব্যবহারে আমি ফ্রন্টএন্ড ডেভেলপমেন্টকে দ্রুত,
          সহজ এবং futuristic করতে পারি।
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
          Virtual DOM (V-DOM) is a lightweight copy of the real DOM (Document
          Object Model) used in React. It is not shown on the screen but exists
          in memory. When we update the UI, React first updates the Virtual DOM
          instead of the Real DOM. Then, it compares the updated Virtual DOM
          with the previous version using a technique called diffing. After
          that, it updates only the changed parts in the Real DOM. This process
          makes the application faster and more efficient.
          <br />
          <br />
          ভার্চুয়াল DOM হলো Real DOM-এর একটি হালকা ভার্সনের কপি, যেটা ব্রাউজারে
          দেখা যায় না, শুধু মেমোরিতে থাকে। যখন UI তে কোনো পরিবর্তন হয়, React
          সরাসরি Real DOM এ পরিবর্তন করে না। বরং, প্রথমে Virtual DOM আপডেট করে
          এবং আগের ভার্সনের সাথে তুলনা করে (diffing নামে পরিচিত)। এরপর শুধুমাত্র
          যেসব অংশে পরিবর্তন হয়েছে, সেগুলা Real DOM-এ আপডেট করে। এই পদ্ধতি
          অ্যাপ্লিকেশনকে দ্রুত এবং কার্যকর করে তোলে।
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
          In React, both props and state are used to manage data, but they work
          differently.
          <br />
          Props are used to pass data from a parent component to a child
          component. Props are read-only — that means the child component cannot
          change them. The parent controls the data.
          <br />
          On the other hand, state is a local data storage inside a component.
          It is used to handle dynamic changes like user inputs, toggles, or
          counters. State is mutable, meaning we can change it using hooks like
          `useState`. When state changes, the component re-renders.
          <br />
          So in short:
          <br />
          * Props are passed from parent to child and cannot be changed by the
          child.
          <br />
          * State is managed and updated inside the component itself.
          <br />
          <br />
          React-এ props আর state—দুটোই ডাটা ম্যানেজ করার জন্য ব্যবহৃত হয়,
          কিন্তু এদের কাজ আলাদা।
          <br />
          Props মানে হচ্ছে properties, যেটা parent component থেকে child
          component এ ডাটা পাঠানোর জন্য ব্যবহৃত হয়। Props read-only, মানে child
          component এটাকে পরিবর্তন করতে পারে না। কন্ট্রোল থাকে parent এর হাতে।
          <br />
          অন্যদিকে, state হলো component এর নিজস্ব data, যেটা সে নিজে manage এবং
          update করে। যখন state চেঞ্জ হয়, তখন component আবার render হয়। আমরা
          সাধারণত `useState` এর মাধ্যমে state ব্যবহার করি।
          <br />
          সংক্ষেপে বললে:
          <br />
          * Props parent থেকে আসে, child শুধু ব্যবহার করে।
          <br />* State component নিজে রাখে এবং প্রয়োজনে চেঞ্জ করে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is the purpose of{" "}
          <span className="font-bold">useState?</span> When and why will you use
          it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The `useState` hook is used in React functional components to create
          and manage local state.
          <br />
          In simple terms, if I need to store some data inside a component that
          can change over time, I will use `useState`. For example, counting a
          number, showing or hiding a dropdown, or handling user inputs — all
          these need state.
          <br />
          When I call `useState`, it returns two things:
          <br />
          1. The current value of the state
          <br />
          2. A function to update that state
          <br />
          So, whenever the state is updated, React automatically re-renders the
          component to reflect the latest value on the UI.
          <br />
          I will use `useState` when:
          <br />
          * I need to store and update values inside a component
          <br />
          * The value may change based on user actions or internal logic
          <br /> * I want the component to re-render when the value changes
          <br />
          This is one of the most commonly used hooks in React for dynamic UI.
          <br />
          <br />
          `useState` হচ্ছে React-এর একটি hook, যেটা আমরা functional component এর
          ভিতরে local state তৈরি ও ম্যানেজ করার জন্য ব্যবহার করি।
          <br />
          সহজভাবে বললে, যদি আমি component-এর ভিতরে এমন কোনো ডাটা রাখতে চাই যা
          পরিবর্তিত হতে পারে, তখন আমি `useState` ব্যবহার করব। যেমন: কাউন্টার
          ভ্যালু, বাটন ক্লিক করে কিছু দেখা বা লুকানো, ইনপুট ফিল্ডের ভ্যালু —
          এগুলা সবই state দিয়ে হ্যান্ডেল করতে হয়।
          <br />
          `useState` ব্যবহার করলে আমি দুইটা জিনিস পাই:
          <br />
          1. বর্তমান state এর ভ্যালু
          <br />
          2. সেই state আপডেট করার একটা ফাংশন
          <br />
          যখনই state আপডেট করি, React কম্পোনেন্টকে আবার রেন্ডার করে, যাতে নতুন
          মান UI-তে দেখা যায়।
          <br />
          আমি `useState` ব্যবহার করব যখন:
          <br />
          * Component-এর ভিতরে ডাটা সংরক্ষণ ও পরিবর্তন করতে হবে
          <br />
          * ইউজারের action এর উপর ভিত্তি করে ডাটা চেঞ্জ হতে পারে
          <br />
          * চেঞ্জ হওয়ার সাথে সাথে UI-ও আপডেট হওয়া দরকার
          <br />
          এটি React-এর সবচেয়ে গুরুত্বপূর্ণ ও সবচেয়ে বেশি ব্যবহৃত hook গুলোর
          একটি।
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
          The Context API in React is a built-in feature that allows us to share
          data globally across components without passing props manually at
          every level.
          <br />
          Normally in React, if I want to pass data from a parent to a deeply
          nested child component, I have to pass it through every middle
          component as props. This is called "prop drilling", and it can make
          the code messy.
          <br />
          To solve this, React introduced the Context API. With Context, I can
          create a context object and wrap my component tree with a provider.
          Then, any child component inside that tree can directly access the
          data using the `useContext` hook — no need to pass props step-by-step.
          <br />
          🔧 How it works
          <br />
          1. First, I create a context using `createContext()`.
          <br />
          2. Then, I wrap my component tree with a `Context.Provider` and pass
          the value I want to share.
          <br />
          3. Any component inside can then use `useContext(MyContext)` to access
          the shared value.
          <br />
          This is very useful when we need to share auth info, themes, user
          roles, language settings, or other global states.
          <br />
          <br />
          Context API হলো React-এর একটি built-in system, যা দিয়ে আমরা কোনো ডাটা
          একাধিক কম্পোনেন্টে শেয়ার করতে পারি—তাও আবার props না পাঠিয়েই।
          <br />
          সাধারণভাবে, যদি আমি কোনো ডাটা parent থেকে deep child পর্যন্ত পাঠাতে
          চাই, তাহলে আমাকে সেই ডাটা প্রতিটি কম্পোনেন্টে props হিসেবে পাঠাতে হয়।
          একে বলে prop drilling, এবং এটা কোডকে জটিল করে তোলে।
          <br />
          এই সমস্যা সমাধানের জন্য React-এ এসেছে Context API। এর মাধ্যমে আমি একটা
          context তৈরি করি এবং পুরো কম্পোনেন্ট tree কে একটি provider দিয়ে ঘিরে
          ফেলি। এরপর ভিতরের যেকোনো কম্পোনেন্ট সহজে সেই ডাটা useContext দিয়ে
          নিতে পারে।
          <br />
          🔧 কাজ করার পদ্ধতি:
          <br />
          1. প্রথমে `createContext()` দিয়ে একটা context তৈরি করি।
          <br />
          2. তারপর `Context.Provider` দিয়ে আমার কম্পোনেন্ট গুলা ঘিরে ফেলি এবং
          যেটা শেয়ার করতে চাই সেটা value হিসেবে দেই।
          <br />
          3. যেকোনো চাইল্ড কম্পোনেন্ট `useContext(MyContext)` ব্যবহার করে সেই
          value অ্যাক্সেস করতে পারে।
          <br />
          এটা বিশেষভাবে কাজ দেয় যখন আমাকে auth info, theme, language, বা user
          role এর মতো ডাটা অ্যাপজুড়ে শেয়ার করতে হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is the purpose of
          <span className="font-bold"> useEffect?</span> When and why will you
          use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The purpose of the `useEffect` hook in React is to handle side effects
          in a functional component.
          <br />
          Side effects mean anything that happens outside the normal flow of
          rendering — for example:
          <br />
          * Fetching data from an API
          <br />
          * Setting up event listeners
          <br />
          * Updating the document title
          <br />
          * Running timers
          <br />
          * Or even cleaning up resources when a component unmounts
          <br />
          In class components, we used lifecycle methods like
          `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
          In functional components, `useEffect` replaces all of them.
          <br />
          ✅ When and Why I Will Use `useEffect`:
          <br />
          * I will use `useEffect` when I want to run code after the component
          has rendered.
          <br />
          * I will also use it when I want to run something only once, like on
          initial page load — for that, I’ll use an empty dependency array.
          <br />
          * And if I want to run it when a value changes, I’ll add that value in
          the dependency array.
          <br />
          So, in short:
          <br />
          Whenever I need to perform a task outside the component’s render logic
          — I use `useEffect`.
          <br />
          <br />
          `useEffect` এর মূল উদ্দেশ্য হলো React-এর functional component-এর মধ্যে
          side effects হ্যান্ডেল করা।
          <br />
          Side effect মানে এমন কাজ, যেটা কম্পোনেন্ট রেন্ডার হবার পরে বাইরে থেকে
          ঘটে। যেমন:
          <br />
          * API থেকে ডাটা আনা
          <br />
          * ইভেন্ট লিসেনার বসানো
          <br />
          * Document title আপডেট করা
          <br />
          * টাইমার চালানো
          <br />
          * অথবা component unmount হওয়ার সময় কোনো cleanup করা
          <br />
          আগে class component এ এসব কাজ করার জন্য `componentDidMount`,
          `componentDidUpdate`, আর `componentWillUnmount` ছিল। এখন আমরা এগুলা সব
          `useEffect` দিয়েই করতে পারি।
          <br />
          ✅ কখন এবং কেন `useEffect` ব্যবহার করব:
          <br />
          * যদি আমি চাই কোনো কোড রেন্ডার হওয়ার পর চলুক, তাহলে `useEffect`
          ব্যবহার করব।
          <br />
          * যদি শুধু একবার চালাতে চাই, যেমন পেজ লোড হবার পর, তাহলে আমি empty
          dependency array দিব।
          <br />
          * আর যদি চাই কোনো স্পেসিফিক ভ্যালু পরিবর্তনে চলুক, তখন সেই ভ্যালুকে
          dependency array-তে দিব।
          <br />
          সংক্ষেপে বললে, যখনই রেন্ডার লজিকের বাইরে কোনো কাজ করতে হবে — আমি
          `useEffect` ব্যবহার করব।
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
          JSX stands for JavaScript XML. It is a syntax extension for JavaScript
          that allows us to write HTML-like code inside JavaScript.
          <br />
          In React, instead of writing plain `React.createElement()` calls, we
          write UI code using JSX.
          <br />
          Behind the scenes, JSX is not HTML — it gets compiled into regular
          JavaScript using tools like Babel.
          <br />
          So, JSX makes the code easier to read and write, especially when
          dealing with complex UIs. It also supports embedding JavaScript
          expressions using curly braces inside the markup.
          <br />
          So in short:
          <br />
          * JSX helps write UI code in a cleaner, more readable way.
          <br />
          * It gets converted into JavaScript at build time.
          <br />
          <br />
          JSX এর পূর্ণরূপ হলো JavaScript XML। এটা JavaScript-এর জন্য একটা syntax
          extension, যার মাধ্যমে আমরা HTML-এর মতো কোড JavaScript এর ভিতরেই লিখতে
          পারি।
          <br />
          React-এ UI বানানোর সময় আমরা JSX ব্যবহার করি। <br />
          JSX কোডকে Babel নামের একটি tool কম্পাইল করে React-compatible কোডে
          রূপান্তর করে।
          <br />
          JSX আমাদের কোডকে clean, readable, এবং সহজভাবে UI design করার সুযোগ
          দেয়। JSX-এর ভিতরে আমরা curly braces ব্যবহার করে JavaScript
          expressions-ও লিখতে পারি।
          <br />
          সংক্ষেপে:
          <br />
          * JSX দিয়ে আমরা HTML-এর মতো syntax-এ UI লিখি
          <br />* এরপর সেটা build time-এ JavaScript-এ রূপান্তর হয়
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
          The React Component Lifecycle refers to the stages a component goes
          through from the time it is created, updated, and finally removed from
          the DOM.
          <br />
          This concept mainly applies to class components, because functional
          components use hooks instead.
          <br />
          There are three main phases in the lifecycle of a class component:
          <br />
          1. Mounting – When the component is being created and inserted into
          the DOM.
          <br />
          * `constructor()` – called first to initialize the component
          <br />
          * `render()` – returns the JSX
          <br />
          * `componentDidMount()` – called after the component is rendered for
          the first time; good for API calls or DOM manipulation
          <br />
          2. Updating – When the component re-renders due to state or props
          change.
          <br />
          * `shouldComponentUpdate()` – decides whether the component should
          update
          <br />
          * `render()` – called again
          <br />
          * `componentDidUpdate()` – runs after the update is done
          <br />
          3. Unmounting – When the component is being removed from the DOM.
          <br />
          * `componentWillUnmount()` – useful for cleanup (like clearing
          intervals, event listeners)
          <br />
          In functional components, we handle lifecycle with useEffect() hooks
          <br />
          <br />
          React Component Lifecycle বলতে বোঝানো হয় — একটি কম্পোনেন্ট তার জন্ম
          (create) থেকে শুরু করে আপডেট (update) এবং শেষে ডিলিট (remove/unmount)
          হওয়া পর্যন্ত যে ধাপগুলো পার করে।
          <br />
          এই ধারণাটি মূলত class component-এর জন্য প্রযোজ্য। Functional
          component-এ আমরা lifecycle হ্যান্ডেল করি hooks দিয়ে।
          <br />
          React-এর lifecycle মূলত ৩টি ধাপে ভাগ করা যায়:
          <br />
          ১. Mounting Phase – যখন component তৈরি হয়ে DOM-এ ঢোকে।
          <br />
          * `constructor()` – শুরুতে কল হয়, initial setup এর জন্য
          <br />
          * `render()` – JSX রেন্ডার করে
          <br />
          * `componentDidMount()` – প্রথমবার render হওয়ার পর কল হয়; এখানে API
          call বা DOM manipulation করা ভালো
          <br />
          ২. Updating Phase – যখন props বা state চেঞ্জ হয় এবং component আবার
          রেন্ডার হয়।
          <br />
          * `shouldComponentUpdate()` – update হবে কিনা তা ঠিক করে
          <br />
          * `render()` – আবার রেন্ডার হয়
          <br />
          * `componentDidUpdate()` – আপডেট হয়ে গেলে কল হয়
          <br />
          ৩. Unmounting Phase – যখন component DOM থেকে সরানো হয়।
          <br />
          * `componentWillUnmount()` – যেকোনো cleanup এর জন্য, যেমন interval
          clear, event listener remove ইত্যাদি
          <br />
          Functional component এ আমরা `useEffect()` দিয়ে এই lifecycle গুলা
          হ্যান্ডেল করি:
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
          The purpose of a custom hook in React is to reuse logic across
          multiple components. When I notice that some logic — like handling
          forms, fetching data from an API, or tracking window size — is being
          repeated in multiple components, I move that logic into a custom hook
          to avoid repetition and keep my code clean.
          <br />
          A custom hook is simply a JavaScript function that uses one or more
          built-in React hooks like `useState`, `useEffect`, or others.
          <br />
          To create a custom hook:
          <br />
          * I give it a name that starts with “use”. This is required by React
          so it knows it’s a hook.
          <br />
          * Inside that function, I place whatever logic I want to reuse — like
          setting state, using effects, or any custom behavior.
          <br />
          * Then, I return whatever value or function I need from that hook.
          <br />
          * After that, I can import and use that hook in any component just
          like a regular built-in hook.
          <br />
          So instead of repeating the same logic in different components, I
          write it once inside a custom hook and reuse it wherever needed.
          <br />
          This improves readability, reusability, and maintainability of the
          code.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751906093/custom_hook_auk0do.png"
            alt=""
          />
          React-এ custom hook ব্যবহারের উদ্দেশ্য হলো — যদি কোনো লজিক আমি বারবার
          একাধিক কম্পোনেন্টে ব্যবহার করি, তাহলে সেটা আলাদা করে একটা custom hook
          হিসেবে লিখে নেই, যাতে কোড পরিষ্কার থাকে এবং পুনরায় ব্যবহার করা যায়।
          <br />
          Custom hook আসলে একটা সাধারণ জাভাস্ক্রিপ্ট ফাংশন, যেখানে আমরা
          `useState`, `useEffect` বা অন্য কোনো built-in hook ব্যবহার করতে পারি।
          <br />
          Custom hook বানাতে হলে:
          <br />
          * প্রথমে আমি ফাংশনের নাম দেই "use" দিয়ে শুরু করে, যেমন `useForm` বা
          `useWindowWidth`। এটা React-এর নিয়ম।
          <br />
          * এরপর আমি ওই ফাংশনের ভিতরে আমার প্রয়োজনীয় লজিক রাখি — যেমন স্টেট
          ম্যানেজমেন্ট, API কল, বা DOM ইভেন্ট হ্যান্ডলিং।
          <br />
          * শেষে আমি যেটা দরকার, সেটা return করি — হতে পারে কোনো ভ্যালু, ফাংশন
          বা অবজেক্ট।
          <br />
          * এরপর আমি সেই hook-টা যেকোনো কম্পোনেন্টে গিয়ে ব্যবহার করতে পারি ঠিক
          built-in hook-এর মতো।
          <br />
          এইভাবে custom hook ব্যবহার করলে কোড হয় clean, reusable এবং organized।
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
          To optimize a React JS application, I follow these techniques:
          <br />
          1. I use `React.memo` to avoid unnecessary re-rendering of components
          if their props haven’t changed.
          <br />
          2. I use `useCallback` to memoize functions and prevent them from
          being recreated on every render.
          <br />
          3. I use `useMemo` to cache expensive computations and avoid
          recalculating them unnecessarily.
          <br />
          4. I apply code splitting and lazy loading to load components only
          when needed, reducing initial load time.
          <br />
          5. I implement pagination or infinite scroll to fetch data in smaller
          chunks instead of all at once.
          <br />
          6. I use compressed and lazy-loaded images to improve image loading
          performance.
          <br />
          7. I always assign unique keys when rendering lists to help React
          track items efficiently.
          <br />
          8. I keep state local to the component when possible instead of using
          global state unnecessarily.
          <br />
          9. I use React DevTools and Profiler to detect and fix performance
          bottlenecks.
          <br />
          These steps help me make the application faster, more efficient, and
          user-friendly.
          <br />
          <br />
          React অ্যাপ অপ্টিমাইজ করার জন্য আমি নিচের টেকনিকগুলো অনুসরণ করি:
          <br />
          1. আমি `React.memo` ব্যবহার করি যেন props না বদলালে component আবার
          রেন্ডার না হয়।
          <br />
          2. আমি `useCallback` ব্যবহার করি যেন ফাংশন বারবার recreate না হয়।
          <br />
          3. আমি `useMemo` ব্যবহার করি যাতে ভারী কাজ বারবার না চলে, আগেই
          ক্যালকুলেট করে রাখি।
          <br />
          4. আমি lazy loading এবং code splitting ব্যবহার করি যেন কম্পোনেন্ট
          প্রয়োজনে লোড হয়।
          <br />
          5. আমি pagination বা infinite scroll ব্যবহার করি যেন সব ডাটা একসাথে না
          এনে ধাপে ধাপে আনি।
          <br />
          6. আমি compressed এবং lazy-loaded image ব্যবহার করি যেন ইমেজ দ্রুত লোড
          হয়।
          <br />
          7. আমি unique key ব্যবহার করি list render করার সময় যেন React
          efficiently কাজ করতে পারে।
          <br />
          8. আমি local state রাখি যেখানে সম্ভব, যত্রতত্র global state এ না নিয়ে
          গিয়ে।
          <br />
          9. আমি React DevTools ও Profiler ব্যবহার করি পারফর্মেন্স সমস্যা খুঁজে
          বের করতে।
          <br />
          এইসব টেকনিক ব্যবহার করে আমি অ্যাপটিকে দ্রুত, স্মুথ এবং স্কেলযোগ্য
          রাখি।
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
          In React, if I want to send data from a child to the parent, I can do
          it in two ways: lifting state up and using a callback function.
          <br />
          1. Lifting State Up:
          <br />
          It means I move the state from the child to the parent.
          <br />
          So, the parent creates the state and gives the child the value and the
          update function.
          <br />
          When something happens in the child (like user types something), the
          child calls the update function.
          <br />
          This way, the parent gets the new data and can update the state.
          <br />
          This helps when more than one child needs the same data.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751908775/lsu_hrl3hi.png"
            alt=""
          />{" "}
          <br />
          2. Using Callback Function:
          <br />
          Here, I create a function in the parent and send it to the child as a
          prop.
          <br />
          When the child wants to send data to the parent, it just calls that
          function with the data.
          <br />
          Then the parent gets the data and uses it.
          <br />
          This is a simple and clean way to send data from child to parent.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751908776/callback_vws98a.png"
            alt=""
          />
          <br />
          So, both lifting state up and callbacks help us to send data from
          child to parent in React.
          <br />
          <br />
          React-এ যদি আমি child থেকে parent এ ডাটা পাঠাতে চাই, তাহলে দুইভাবে
          করতে পারি:
          <br />
          lifting state up এবং callback function দিয়ে।
          <br />
          ১. Lifting State Up:
          <br />
          এর মানে হচ্ছে, আমি state টা child থেকে parent-এ নিয়ে যাই।
          <br />
          Parent কম্পোনেন্টে আমি state রাখি, আর child কে সেই state আর সেট করার
          function পাঠাই।
          <br />
          Child যখন কিছু পরিবর্তন করে, তখন সেই function কল করে।
          <br />
          এইভাবে parent ডাটাটা পায় এবং update করে।
          <br />
          এটা দরকার হয় যখন একাধিক child একই ডাটা শেয়ার করে।
          <br />
          ২. Callback Function দিয়ে:
          <br />
          এখানে আমি একটা ফাংশন parent-এ বানাই এবং child-এ পাঠাই।
          <br />
          Child যখন parent কে ডাটা পাঠাতে চায়, তখন সে ফাংশনটা কল করে এবং ডাটা
          পাঠায়।
          <br />
          Parent সেই ডাটাটা পেয়ে কাজ করে।
          <br />
          এই দুইটা উপায় — lifting state up আর callback function — React-এ child
          থেকে parent এ ডাটা পাঠানোর জন্য সবচেয়ে সহজ ও কাজের উপায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What is the best way to send
          <span className="font-bold"> multiple props</span> to a child
          component?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The best way to send multiple props to a child component is to use an
          object. <br />
          Instead of sending many individual props, I can group them in an
          object and send that object as a single prop. <br />
          It keeps the code clean and easy to manage, especially when there are
          too many values to pass.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751909342/mp_to_c_uxs6m1.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751909343/mp_to_c_c_luqree.png"
            alt=""
          />
          React-এ অনেকগুলো props পাঠানোর সবচেয়ে ভালো উপায় হলো — সব ভ্যালুগুলো
          একটা object-এর মধ্যে রেখে সেটা একটি prop হিসেবে পাঠানো।
          <br />
          এতে কোড পরিষ্কার থাকে এবং manage করতেও সহজ হয়।
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
          React Router DOM is a popular library in React that helps us to create
          navigation between different pages in a React application — without
          reloading the browser.
          <br />
          React itself is a single-page application, but using React Router DOM,
          we can build multi-page behavior.
          <br />
          With this library:
          <br />
          * I can create routes, like `/home`, `/about`, `/products`, etc.
          <br />
          * I can switch pages using components like `Link`, `Route`,
          `BrowserRouter`, and `Navigate`.
          <br />
          * It keeps the URL and the UI in sync, so the user feels like they are
          visiting real pages.
          <br />
          This helps us make SPA (Single Page Application) look and feel like a
          multi-page website, with smooth transitions and no full reload.
          <br />
          <br />
          React Router DOM হলো React-এর একটি popular লাইব্রেরি, যেটা আমাদের
          অ্যাপে পেজের মধ্যে navigation বা চলাচল করতে সাহায্য করে, তাও আবার
          ব্রাউজার রিলোড ছাড়াই।
          <br />
          React স্বাভাবিকভাবে একটা single page application। কিন্তু React Router
          DOM ব্যবহার করে আমরা অ্যাপটাকে multi-page এর মতো বানাতে পারি।
          <br />
          এই লাইব্রেরি দিয়ে আমরা:
          <br />
          * আলাদা আলাদা route বানাতে পারি — যেমন `/home`, `/about`, `/contact`
          <br />
          * `Link`, `Route`, `BrowserRouter`, `Navigate` ব্যবহার করে এক পেজ থেকে
          আরেক পেজে যেতে পারি
          <br />
          * এটা URL আর UI এর সাথে sync করে, তাই user বুঝতেই পারে না যে এটা এক
          পেজের ভেতরে হচ্ছে
          <br />
          এইভাবে আমরা single page application-কে multi-page site এর মতো ইউজার
          ফ্রেন্ডলি করে তুলতে পারি।
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
          In React, state is a way to store and manage data inside a component.
          <br />
          When the state changes, React automatically re-renders the component
          to show the updated data on the screen.
          <br />
          For example, if I have a counter app, I can store the count value in
          state. When I click a button to increase the count, the state updates,
          and React shows the new value.
          <br />
          In functional components, I use the `useState` hook to create and
          update state.
          <br />
          So, state helps us to build dynamic and interactive UI — where data
          can change based on user actions.
          <br />
          <br />
          React-এ state হলো এমন একটি জায়গা, যেখানে আমরা কম্পোনেন্টের ভিতরের
          ডাটা সংরক্ষণ করি এবং নিয়ন্ত্রণ করি।
          <br />
          যখন state-এর মান বদলায়, তখন React নিজে থেকে সেই কম্পোনেন্টকে আবার
          রেন্ডার করে — মানে নতুন ডাটা স্ক্রিনে দেখায়।
          <br />
          যেমন, যদি আমি একটা কাউন্টার অ্যাপ বানাই, তাহলে count-এর মান state-এ
          রাখি। যখন আমি বাটনে ক্লিক করি, state আপডেট হয় এবং নতুন মান স্ক্রিনে
          দেখায়।
          <br />
          Functional component-এ আমরা `useState` hook ব্যবহার করে state বানাই
          এবং আপডেট করি।
          <br />
          State আমাদের ডায়নামিক এবং ইন্টারঅ্যাকটিভ অ্যাপ বানাতে সাহায্য করে।
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
          Props drilling happens when we pass data from a top-level component to
          a deeply nested child component through many layers — even if some of
          the middle components don’t use that data.
          <br />
          For example, if I want to send some data from a parent to a
          grandchild, I must pass it through the child, even if the child
          doesn’t need it. This is called props drilling.
          <br />
          It can make the code hard to read and manage, especially in large
          applications.
          <br />
          To solve this, we can use tools like Context API or state management
          libraries like Redux, so we don’t need to pass props step by step.
          <br />
          <br />
          Props drilling হলো এমন একটি সমস্যা, যেখানে আমরা parent থেকে অনেক নিচের
          একটা কম্পোনেন্টে ডাটা পাঠাতে চাই, কিন্তু আমাদের সেই ডাটা প্রতিটা
          মাঝখানের কম্পোনেন্টের মধ্য দিয়ে পাঠাতে হয় — যদিও তারা সেই ডাটা
          ব্যবহার করে না।
          <br />
          যেমন: আমি যদি parent থেকে grandchild-এ ডাটা পাঠাতে চাই, তাহলে আমাকে
          সেটা আগে child-এ পাঠাতে হবে, তারপর grandchild-এ।
          <br />
          এটাই হলো props drilling।
          <br />
          এতে কোড অনেক বড় হয়ে যায় এবং মেইনটেইন করাও কষ্ট হয়।
          <br />
          এই সমস্যা সমাধানে আমরা Context API বা Redux এর মতো টুল ব্যবহার করতে
          পারি, যেন সরাসরি যেই কম্পোনেন্ট দরকার, তাকে ডাটা পাঠানো যায়।
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
          We inject dependencies inside the `useEffect` hook to tell React when
          to run the effect.
          <br />
          The dependency array is the second argument of `useEffect`. It lets
          React know what values to watch for changes.
          <br />
          * If a value in the dependency array changes, React will re-run the
          code inside useEffect.
          <br />
          * If nothing changes, React will not run it again.
          <br />
          This helps us avoid unnecessary runs and also keeps our code efficient
          and correct.
          <br />
          For example, if I pass `[count]` as a dependency, the effect will run
          only when `count` changes.
          <br />
          So, we inject dependencies to control when the effect runs and to
          prevent bugs or performance issues.
          <br />
          <br />
          আমরা `useEffect` এর ভিতরে dependency array ব্যবহার করি যাতে React
          বুঝতে পারে — কখন effect চলবে।
          <br />
          এই dependency array `useEffect` এর দ্বিতীয় প্যারামিটার। এর মধ্যে আমরা
          যেসব ভ্যালু দেই, React সেগুলোর উপর নজর রাখে।
          <br />
          * যদি ওই ভ্যালুগুলোর কোনোটা বদলে যায়, তখন React আবার `useEffect`
          চালায়।
          <br />
          * আর যদি না বদলায়, তাহলে আর `useEffect` চালায় না।
          <br />
          এতে করে আমাদের কোড বিপর্যয় থেকে বাঁচে, অপ্রয়োজনীয় রান বন্ধ হয়, এবং
          পারফর্মেন্স ভালো থাকে।
          <br />
          উদাহরণ হিসেবে, যদি আমি dependency `[count]` দেই, তাহলে effect
          শুধুমাত্র `count` বদলালে চলবে।
          <br />
          তাই, dependency inject করার মূল উদ্দেশ্য হলো — control করা কখন effect
          চলবে।
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
          `React.memo()` is a built-in function in React that is used to stop a
          component from re-rendering if its props haven’t changed.
          <br />
          Normally, when a parent component re-renders, all of its child
          components also re-render — even if their data (props) didn’t change.
          This can slow down the app.
          <br />
          When I wrap a component with `React.memo()`, React will check if the
          props are the same as before.
          <br />
          * If the props didn’t change, it will skip re-rendering.
          <br />
          * If the props changed, then it will re-render as usual.
          <br />
          I use `React.memo()` to improve performance, especially when I have
          large or slow components that don’t need to update every time.
          <br />
          <br />
          `React.memo()` হলো React-এর একটা ফাংশন, যেটা ব্যবহার করি কম্পোনেন্ট
          অপ্রয়োজনীয় রেন্ডার হওয়া বন্ধ করতে।
          <br />
          সাধারণভাবে, যখন parent কম্পোনেন্ট রেন্ডার হয়, তখন তার সব child
          কম্পোনেন্টও রেন্ডার হয়—even যদি তাদের props না বদলায়।
          <br />
          কিন্তু আমি যদি কোনো কম্পোনেন্টকে `React.memo()` দিয়ে র‍্যাপ করি, তাহলে
          React দেখবে আগের props আর নতুন props একই আছে কি না।
          <br />
          * যদি না বদলায়, তাহলে React আর রেন্ডার করবে না।
          <br />
          * আর যদি বদলায়, তাহলে রেন্ডার করবে।
          <br />
          আমি `React.memo()` ব্যবহার করি অ্যাপকে দ্রুত করার জন্য, বিশেষ করে যখন
          বড় বা ধীরগতির কম্পোনেন্ট থাকে, যেগুলোর সব সময় রেন্ডার হওয়া দরকার নেই।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse19">
          19. Tell us about
          <span className="font-bold">
            {" "}
            controlled components and uncontrolled component{" "}
          </span>{" "}
          in React JS.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse19"
          id="collapse19"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In React, there are two types of form components: controlled and
          uncontrolled.
          <br />
          🔹 Controlled Component:
          <br />
          A controlled component means the form input is fully controlled by
          React state.
          <br />
          * The value of the input comes from the state.
          <br />
          * Whenever the user types something, we update the state using
          `onChange`.
          <br />
          * The state holds the current value, not the DOM.
          <br />
          This way, React controls the data, and we can easily validate, reset,
          or track the input.
          <br />
          🔹 Uncontrolled Component:
          <br />
          An uncontrolled component means the input keeps its own value in the
          DOM, not in React state.
          <br />
          * We use a `ref` to read the value when needed.
          <br />
          * React doesn’t control the data — the browser does.
          <br />
          This is useful when we don’t need to track the input on every change.
          <br />
          🔹 Summary:
          <br />
          * Controlled = React handles the input using state.
          <br />
          * Uncontrolled = DOM handles the input, React uses ref to access the
          value.
          <br />
          <br />
          React-এ দুই ধরণের form component থাকে: controlled এবং uncontrolled।
          <br />
          🔹 Controlled Component:
          <br />
          Controlled component মানে — input field এর মান React-এর state এর
          মাধ্যমে নিয়ন্ত্রিত হয়।
          <br />
          * Input-এর value আসে state থেকে।
          <br />
          * ইউজার কিছু টাইপ করলে, আমরা `onChange` দিয়ে সেই মান state-এ আপডেট
          করি।
          <br />
          * React সব সময় জানে input-এর ভ্যালু কী।
          <br />
          এইভাবে আমরা সহজে validation, reset বা tracking করতে পারি।
          <br />
          🔹 Uncontrolled Component:
          <br />
          Uncontrolled component মানে — input field এর মান ব্রাউজার নিজে রাখে,
          React না।
          <br />
          * আমরা শুধু ref দিয়ে মানটা পড়ি যখন দরকার হয়।
          <br />
          * এখানে React কন্ট্রোল করে না, DOM নিজেই ভ্যালু ম্যানেজ করে।
          <br />
          এই পদ্ধতি তখন ব্যবহার করি যখন input-এর মান প্রতি মুহূর্তে track করার
          দরকার নেই।
          <br />
          🔹 সংক্ষেপে:
          <br />
          * Controlled = React state দিয়ে input কন্ট্রোল হয়
          <br />* Uncontrolled = DOM নিজে input কন্ট্রোল করে, React শুধু value
          পড়ে
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
          In React, lifting state up means moving the state from a child
          component to its parent.
          <br />
          We do this when two or more child components need to share the same
          data, or when a child needs to send data to the parent.
          <br />
          Instead of keeping the state inside the child, we move it to the
          parent and pass it down as props.
          <br />
          The child can then send data back by calling a function given by the
          parent.
          <br />
          This way, the parent becomes the single source of truth, and the data
          stays in one place.
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751908775/lsu_hrl3hi.png"
            alt=""
          />
          React-এ lifting state up মানে হলো — child component থেকে state টা
          parent component এ নিয়ে যাওয়া।
          <br />
          এই কাজটা আমরা তখন করি যখন একাধিক child একই ডাটা শেয়ার করে, অথবা child
          থেকে parent এ ডাটা পাঠাতে হয়।
          <br />
          State কে child-এর ভিতরে না রেখে আমরা parent-এ রাখি এবং props দিয়ে
          নিচে পাঠাই।
          <br />
          Child তখন parent থেকে পাওয়া function কল করে উপরে ডাটা পাঠায়।
          <br />
          এইভাবে parent component ডাটার একমাত্র মালিক হয়, আর অ্যাপ clean এবং
          manageable থাকে।
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
          In React, components are of two types based on how they manage data:
          stateful and stateless.
          <br />
          🔹 Stateful Component:
          <br />
          A stateful component is a component that has state.
          <br />
          It can store and manage data, and it changes when the state changes.
          <br />
          For example, if I use `useState` inside a component, it becomes a
          stateful component.
          <br />
          These components are used when we need to handle dynamic data or user
          interaction.
          <br />
          🔹 Stateless Component:
          <br />
          A stateless component is a component that does not have any state.
          <br />
          It only receives data through props and displays it.
          <br />
          It doesn’t manage any internal data.
          <br />
          These are simple components — just used to show static content or UI
          layout.
          <br />
          🔹 Summary:
          <br />
          * Stateful = has state, dynamic
          <br />
          * Stateless = no state, only shows data
          <br />
          <br />
          React-এ কম্পোনেন্টকে দুই ভাগে ভাগ করা যায়: stateful আর stateless —
          এটা নির্ভর করে তারা state ব্যবহার করে কি না।
          <br />
          🔹 Stateful Component:
          <br />
          Stateful component মানে, যেই কম্পোনেন্টের ভেতরে state থাকে।
          <br />
          এগুলো ডাটা ধরে রাখে, এবং state বদলালে কম্পোনেন্ট রেন্ডার হয়।
          <br />
          যেমন, যদি আমি `useState` ব্যবহার করি, তাহলে সেটা Stateful হয়ে যায়।
          <br />
          এগুলো ব্যবহার করি যখন ইউজার ইন্টারঅ্যাকশন বা ডাইনামিক ডাটা হ্যান্ডেল
          করতে হয়।
          <br />
          🔹 Stateless Component:
          <br />
          Stateless component মানে, যেই কম্পোনেন্টের নিজস্ব কোনো state নেই।
          <br />
          এরা শুধু props থেকে ডাটা নিয়ে সেটা display করে।
          <br />
          এগুলো সাধারণত UI দেখানোর জন্য বা static layout এর জন্য ব্যবহৃত হয়।
          <br />
          🔹 সংক্ষেপে:
          <br />
          * Stateful = state আছে, ডাটা বদলাতে পারে
          <br />* Stateless = state নেই, শুধু দেখায়
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
          Authentication and Authorization are two different things in web
          security.
          <br />
          🔹 Authentication:
          <br />
          Authentication means checking who the user is.
          <br />
          * It verifies the user's identity — like login with email and
          password.
          <br />
          * If the identity is correct, the user gets access to the system.
          <br />
          So, authentication answers the question:
          <br />
          👉 "Who are you?"
          <br />
          🔹 Authorization:
          <br />
          Authorization means checking what the user is allowed to do.
          <br />
          * After the user is logged in, authorization decides what pages,
          features, or actions the user can access — like admin panel or edit
          button.
          <br />
          * It depends on the user's role or permissions.
          <br />
          So, authorization answers the question:
          <br />
          👉 "What can you do?"
          <br />
          ✅ In short:
          <br />
          * Authentication = Are you a valid user?
          <br />
          * Authorization = What are you allowed to access?
          <br />
          <br />
          Authentication আর Authorization — এই দুইটা হলো আলাদা জিনিস, কিন্তু
          অনেকেই গুলিয়ে ফেলে।
          <br />
          🔹 Authentication (অথেনটিকেশন):
          <br />
          Authentication মানে হলো — আপনি কে, সেটা যাচাই করা।
          <br />
          * এটা দেখে আপনি ভ্যালিড ইউজার কিনা — যেমন: ইমেইল ও পাসওয়ার্ড দিয়ে
          লগইন।
          <br />
          * ঠিক থাকলে, আপনাকে অ্যাপে ঢুকতে দেয়।
          <br />
          সোজা কথায়, authentication জিজ্ঞেস করে:
          <br />
          👉 "আপনি কে?"
          <br />
          🔹 Authorization (অথোরাইজেশন):
          <br />
          Authorization মানে হলো — আপনি কী করতে পারবেন সেটা ঠিক করা।
          <br />
          * লগইনের পর, এটা দেখে আপনি কোন পেজ দেখতে পারবেন, কোন কাজ করতে পারবেন —
          যেমন: admin কি না, delete করতে পারবেন কি না।
          <br />
          * এটা নির্ভর করে আপনার role বা permission এর ওপর।
          <br />
          সোজা কথায়, authorization জিজ্ঞেস করে:
          <br />
          👉 "আপনি কী করতে পারবেন?"
          <br />
          ✅ সংক্ষেপে:
          <br />
          * Authentication = আপনি ইউজার কিনা যাচাই
          <br />* Authorization = আপনি কী করতে পারবেন সেটার অনুমতি
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
          In React, the diff algorithm is a method used to compare the old
          virtual DOM with the new virtual DOM.
          <br />
          React uses this to find out what has changed on the screen after a
          state or prop update.
          <br />
          Instead of re-rendering everything, the diff algorithm looks at the
          differences between the old and new trees, and updates only the parts
          that changed.
          <br />
          This makes React very fast and efficient.
          <br />
          The process of updating only the changed part is called
          reconciliation.
          <br />
          So, the diff algorithm is the smart system that helps React update the
          UI quickly and correctly, without reloading the full page.
          <br />
          ✅ In Short:
          <br />
          * Diff Algorithm = compares old and new virtual DOM
          <br />
          * Updates only the changed part
          <br />
          * Makes React fast and optimized
          <br />
          <br />
          React-এ diff algorithm হলো একটা পদ্ধতি, যেটা পুরানো virtual DOM আর
          নতুন virtual DOM এর মধ্যে পার্থক্য খুঁজে বের করে।
          <br />
          যখনই কোন state বা props আপডেট হয়, React পুরো UI রেন্ডার না করে, শুধু
          দেখে কোথায় পরিবর্তন হয়েছে।
          <br />
          এই পরিবর্তনগুলো React বের করে diff algorithm এর মাধ্যমে, তারপর শুধু ওই
          অংশটাই আপডেট করে।
          <br />
          এই পুরো প্রক্রিয়াটাকেই বলে reconciliation।
          <br />
          এইভাবে, React খুব দ্রুত ও স্মার্ট উপায়ে UI আপডেট করে — যেটা
          performance এর জন্য খুবই ভালো।
          <br />
          ✅ সংক্ষেপে:
          <br /> * ডিফ এলগরিদম = পুরনো এবং নতুন ভার্চুয়াল DOM তুলনা করে
          <br /> * কেবল পরিবর্তিত অংশকে আপডেট করে
          <br /> * রিঅ্যাক্টকে দ্রুত এবং অপ্টিমাইজড করে
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
          In React, the `key` is a special prop that we use when showing lists
          of elements — like with `.map()`. <br />
          The `key` helps React find out which items are changed, added, or
          removed from the list. <br />
          If we don’t use a proper key, React may update the wrong item, which
          can cause bugs or wrong output. <br />
          A good key should be unique and fixed — for example, an `id` from the
          database. <br />
          Using `key` makes list rendering faster and more accurate. <br />
          ✅ In Short: <br />
          * `key` helps React track list items
          <br />
          * It must be unique
          <br />
          * Makes performance better and prevents bugs
          <br />
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1751996002/key_r5ssvc.png"
            alt="React Key Illustration"
          />
          React-এ আমরা যখন list বা একাধিক item দেখাই, তখন প্রতিটা item-এ একটা
          `key` prop দিতে হয়। <br />
          এই `key` React-কে বুঝতে সাহায্য করে কোন item আপডেট হয়েছে, কোনটা এড
          হয়েছে, আর কোনটা ডিলিট হয়ে গেছে। <br />
          যদি ঠিকভাবে key না দেই, তাহলে React ভুল item আপডেট করতে পারে — তাতে
          bug বা ভুল দেখাতে পারে। <br />
          ভালো key হচ্ছে — unique (একটাই) আর fixed থাকা উচিত, যেমন: database-এর
          `id`। <br />
          `key` ব্যবহার করলে list ঠিকমতো রেন্ডার করে ও দ্রুত হয়। <br />
          ✅ সংক্ষেপে: <br />
          * `key` React-কে item চিনতে সাহায্য করে
          <br />
          * এটা অবশ্যই unique হতে হবে
          <br />* এটা পারফরম্যান্স ভালো করে এবং bug কমায়
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
          JWT stands for JSON Web Token. It is a secure way to send user data
          between the client and the server.
          <br />
          It is mostly used for user authentication.
          <br />
          When a user logs in, the server creates a JWT using the user’s
          information (like ID or email) and sends it to the client.
          <br />
          The client then stores the token (usually in localStorage or cookie)
          and sends it with every request to prove who they are.
          <br />
          The server checks the token, and if it’s valid, it allows access to
          protected data or pages.
          <br />
          JWT is small, secure, and stateless, meaning the server does not need
          to store session data.
          <br />
          ✅ In Short:
          <br />
          * JWT = JSON Web Token
          <br />
          * Used for authentication
          <br />
          * Token contains user data
          <br />
          * Sent with each request to prove identity
          <br />
          * No need for session storage on the server
          <br />
          <br />
          JWT এর পূর্ণরূপ হলো JSON Web Token। এটি একটি নিরাপদ উপায় client ও
          server এর মধ্যে ইউজারের ডাটা আদান-প্রদান করার।
          <br />
          এটি মূলত authentication এর জন্য ব্যবহৃত হয়।
          <br />
          যখন ইউজার লগইন করে, তখন server একটি JWT বানায় — যার মধ্যে ইউজারের
          তথ্য (যেমন ID, email) থাকে — এবং client কে পাঠিয়ে দেয়।
          <br />
          Client সেই টোকেনটা localStorage বা cookie-তে রেখে দেয় এবং পরবর্তী সব
          request-এর সাথে সেই টোকেন পাঠায়।
          <br />
          Server সেই টোকেন যাচাই করে, এবং টোকেন সঠিক হলে protected data দেখতে
          দেয়।
          <br />
          JWT হচ্ছে ছোট, নিরাপদ, এবং stateless, মানে server-এ কোনো session data
          রাখা লাগে না।
          <br />
          ✅ সংক্ষেপে
          <br />
          * JWT = JSON Web Token
          <br />
          * এটি সাধারণত authentication-এর জন্য ব্যবহৃত হয়
          <br />
          * টোকেনে ইউজারের তথ্য থাকে
          <br />
          * প্রতিটি request-এর সঙ্গে token পাঠানো হয় ইউজারের পরিচয় প্রমাণ করার
          জন্য
          <br />* Server-এ session data রাখার দরকার হয় না (stateless system)
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse26">
          26. What are <span className="font-bold"> React Hooks?</span> Explain.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse26"
          id="collapse26"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Hooks are special functions in React that let us “hook into” features
          like state, lifecycle, context, refs, etc., using only functional
          components.
          <br />
          🧠 Why hooks?
          <br />
          - Hooks make React code shorter, cleaner, reusable, and easier to
          test. They removed the need to use class components for complex logic.
          <br />
          🔹 1. `useState()`
          <br />
          🔸 Purpose: To store and manage data (state) inside a functional
          component.
          <br />
          🔸 Use case: Counter, form input value, toggle states, etc.
          <pre>{`
 ✅ Code Example:
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
`}</pre>
          <br />
          🔹 2. `useEffect()`
          <br />
          🔸 Purpose: To handle side effects in React — things like fetching
          data, setting up timers, listening to events, etc.
          <br />
          🔸 Use case: Data fetch, API call, DOM event setup, etc.
          <pre>{`
 ✅ Code Example:
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty array means run only once (like componentDidMount)

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
`}</pre>
          <br />
          🔹 3. `useContext()`
          <br />
          🔸 Purpose: To access global data from React Context without props
          drilling.
          <br />
          🔸 Use case: Theme, user info, language, cart data, etc.
          <pre>{`
 ✅ Code Example:
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme === "dark" ? "#333" : "#fff" }}>Navbar</div>;
}
`}</pre>
          <br />
          🔹 4. `useRef()`
          <br />
          🔸 Purpose: To access DOM elements or store a mutable value that
          doesn't trigger re-renders.
          <br />
          🔸 Use case: Focus an input, hold previous value, timers, etc.
          <pre>{`
 ✅ Code Example:
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // access the DOM element
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
`}</pre>
          <br />
          🔹 5. `useMemo()`
          <br />
          🔸 Purpose: To cache a computed value and only recalculate it when
          dependencies change — for performance optimization.
          <br />
          🔸 Use case: Heavy calculations or filtered data.
          <pre>{`
 ✅ Code Example:
import { useMemo, useState } from "react";

function ExpensiveCalc({ num }) {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}
`}</pre>
          <br />
          🔹 6. `useCallback()`
          <br />
          🔸 Purpose: To cache a function and avoid recreating it unless needed
          — helps prevent unnecessary re-renders of child components.
          <br />
          🔸 Use case: When passing functions to `React.memo` child components.
          <pre>{`
 ✅ Code Example:
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // recreated only when dependencies change

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});
`}</pre>
          <br />
          🔹 7. `useReducer()`
          <br />
          🔸 Purpose: Used for managing complex state with many conditions —
          similar to Redux reducer.
          <br />
          🔸 Use case: Todo app, form state, multi-step forms.
          <pre>{`
 ✅ Code Example:
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
`}</pre>
          <br />
          🔹 8. `useLayoutEffect()`
          <br />
          🔸 Purpose: Like `useEffect`, but it runs synchronously after DOM
          updates, before the browser paints.
          <br />
          🔸 Use case: For measuring layout size, scroll position, etc.
          <pre>{`
 ✅ Code Example:
import { useLayoutEffect, useRef } from "react";

function LayoutExample() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log("Box width:", boxRef.current.offsetWidth);
  }, []);

  return <div ref={boxRef} style={{ width: "100px" }}>Box</div>;
}
`}</pre>
          <br />
          🔹 9. `useImperativeHandle()`
          <br />
          🔸 Purpose: Used with `forwardRef` to expose certain methods from
          child to parent.
          <br />
          🔸 Use case: Custom input components, modal open/close from parent.
          <pre>{`
 ✅ Code Example:
import { useImperativeHandle, forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus</button>
    </>
  );
}
`}</pre>
          <br />
          🔹 10. `useId()` (React 18+)
          <br />
          🔸 Purpose: To generate a unique and stable ID — useful for forms and
          accessibility.
          <pre>{`
 ✅ Code Example:
import { useId } from "react";

function FormField() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name</label>
      <input id={id} type="text" />
    </div>
  );
}
`}</pre>
          <br />
          React-এ Hooks হলো কিছু বিশেষ function, যেগুলোর মাধ্যমে আমরা state,
          lifecycle, context, reference ইত্যাদি ফিচারগুলো functional
          component-এর মধ্যে ব্যবহার করতে পারি।
          <br />
          আগে এই সব জিনিস ব্যবহারের জন্য class component লাগত। কিন্তু এখন
          শুধুমাত্র functional component দিয়েই সবকিছু করা যায়, শুধু hook ব্যবহার
          করলেই হয়।
          <br />
          🔹 ১. `useState()`
          <br />
          🟢 এই hook দিয়ে আমরা কম্পোনেন্টের ভিতরে state তৈরি এবং আপডেট করতে
          পারি। <br />
          🟢 যেমন: input field-এর মান রাখা, counter বানানো ইত্যাদি।
          <br />
          🔹 ২. `useEffect()`
          <br />
          🟢 এটি দিয়ে আমরা side effect কাজ করতে পারি। <br />
          🟢 যেমন: API থেকে data আনা, ইভেন্ট লিসেনার যোগ করা, timer সেট করা
          ইত্যাদি।
          <br />
          🔹 ৩. `useContext()`
          <br />
          🟢 এটা দিয়ে আমরা Context API থেকে ডাটা নিতে পারি, props না পাঠিয়েই।{" "}
          <br />
          🟢 এটা props drilling কমিয়ে দেয় এবং global data সহজে ব্যবস্থাপনা করতে
          সাহায্য করে।
          <br />
          🔹 ৪. `useRef()`
          <br />
          🟢 এটা দিয়ে আমরা DOM element-এর reference রাখতে পারি, যেমন কোনো input
          element-এ focus করা। <br />
          🟢 এটা এমন মান রাখতেও ব্যবহৃত হয় যেটা রেন্ডার ছাড়াই বদলানো যায়।
          <br />
          🔹 ৫. `useMemo()`
          <br />
          🟢 এটি একটি মানকে স্মরণ (memorize) করে রাখে যাতে রেন্ডার হলে বারবার
          নতুন করে হিসাব না করতে হয়। <br />
          🟢 এটি performance optimization-এর জন্য ভালো, বিশেষ করে বড় গণনার
          ক্ষেত্রে।
          <br />
          🔹 ৬. `useCallback()`
          <br />
          🟢 এটি একটি function স্মরণ করে রাখে যাতে প্রতিবার রেন্ডারে নতুন
          function তৈরি না হয়। <br />
          🟢 এটি child কম্পোনেন্টে function পাঠানোর সময় helpful হয়।
          <br />
          🔹 ৭. `useReducer()`
          <br />
          🟢 এটি state ম্যানেজ করার একটি বিকল্প, যেটা জটিল state লজিক হ্যান্ডেল
          করতে বেশি ব্যবহার হয়। <br />
          🟢 Redux-এর মতো reducer লজিকের সাথে কাজ করে।
          <br />
          🔹 ৮. `useLayoutEffect()`
          <br />
          🟢 এটি `useEffect()`-এর মতো, তবে এটি DOM আপডেট হওয়ার পরপরই চলে,
          রেন্ডারের আগে না। <br />
          🟢 এটি layout মাপার কাজের জন্য দরকার হয়।
          <br />
          🔹 ৯. `useImperativeHandle()`
          <br />
          🟢 এটি `forwardRef()` এর সাথে ব্যবহার করে, যাতে child component parent
          কে নির্দিষ্ট কিছু method ব্যবহার করতে দেয়। <br />
          🟢 বিশেষভাবে modal, custom input control করার জন্য কাজে লাগে।
          <br />
          🔹 ১০. `useId()` (React 18+)
          <br />
          🟢 এটি একটি unique ID তৈরি করে। <br />
          🟢 এটি form element বা accessibility feature ব্যবহারের সময় দরকার হয়,
          যেন ID গুলো একই থাকে।
          <br />
          ✅ সংক্ষেপে:
          <br />
          * React Hooks আমাদের functional component-এর মধ্যে advanced React
          ফিচার ব্যবহার করতে দেয়
          <br />
          * প্রতিটি hook-এর নিজের নিয়ম এবং ব্যবহার ক্ষেত্র রয়েছে
          <br />* কোডকে সহজ, পরিষ্কার এবং পুনঃব্যবহারযোগ্য করে তোলে
        </div>
      </div>
    </Container>
  );
};

export default ReactQuestions;
