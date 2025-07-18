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
          Next.js is a React framework used to build modern web applications.{" "}
          <br />
          It is built on top of React and adds many powerful features out of the
          box. <br />
          It helps developers build fast, SEO-friendly, and scalable websites.{" "}
          <br />
          Next.js supports both server-side rendering (SSR) and static site
          generation (SSG). <br />
          It also includes features like routing, API routes, and image
          optimization. <br />
          With the App Router, Next.js supports advanced layouts and nested
          routes. <br />
          It improves performance and helps in building production-grade web
          apps. <br />
          Main Features of Next.js: <br />
          * Server-side rendering (SSR) <br />
          * Static site generation (SSG) <br />
          * Client-side rendering (CSR) <br />
          * File-based routing system <br />
          * API routes (build backend with frontend) <br />
          * Image optimization <br />
          * Built-in CSS & Sass support, and Tailwind CSS support <br />
          * Fast refresh and code splitting <br />
          * Middleware and authentication support <br />
          * App Router for nested layouts and route grouping <br />
          <br />
          Next.js হলো একটি React ফ্রেমওয়ার্ক, যেটা দিয়ে আধুনিক ওয়েব অ্যাপ তৈরি
          করা যায়। <br />
          এটা React-এর উপর ভিত্তি করে তৈরি, এবং অনেক সুবিধা শুরু থেকেই দিয়ে দেয়।{" "}
          <br />
          এটা দিয়ে দ্রুত, SEO-friendly এবং স্কেলেবল ওয়েবসাইট তৈরি করা যায়।{" "}
          <br />
          Next.js এ server-side rendering (SSR) এবং static site generation (SSG)
          সাপোর্ট করে। <br />
          এছাড়াও এতে আছে routing system, API routes এবং image optimization-এর
          সুবিধা। <br />
          App Router এর মাধ্যমে advanced layout এবং nested route ব্যবহার করা
          যায়। <br />
          এটা পারফর্মেন্স বাড়ায় এবং প্রোডাকশন-লেভেল ওয়েব অ্যাপ বানাতে সাহায্য
          করে। <br />
          Next.js-এর প্রধান ফিচারগুলো: <br />
          * Server-side rendering (SSR) <br />
          * Static site generation (SSG) <br />
          * Client-side rendering (CSR) <br />
          * ফাইল-ভিত্তিক routing system <br />
          * API routes দিয়ে backend তৈরি করা যায় <br />
          * Image optimization এর সুবিধা <br />
          * CSS, Sass এবং Tailwind CSS সাপোর্ট <br />
          * Fast refresh এবং code splitting <br />
          * Middleware এবং authentication সাপোর্ট <br />* App Router দিয়ে nested
          layout এবং route grouping
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
          Next.js and Create React App (CRA) are both tools for building React
          applications, but they serve different purposes. <br />
          Create React App is mainly for client-side rendered single-page
          applications. <br />
          Next.js, on the other hand, is a full-stack framework that supports
          both server-side and static generation. <br />
          Next.js is more suitable for production-ready applications with better
          SEO and performance. <br />
          CRA is easier for beginners, but lacks features like SSR, API routes,
          and built-in routing. <br />
          Next.js includes a file-based routing system and supports backend
          logic using API routes. <br />
          Overall, Next.js is more powerful and flexible than CRA. <br />
          Key Differences: <br />
          * ✅ Rendering: CRA only supports client-side rendering, while Next.js
          supports SSR, SSG, and CSR. <br />
          * ✅ Routing: CRA needs `react-router`, Next.js has built-in
          file-based routing. <br />
          * ✅ SEO: Next.js is SEO-friendly; CRA is not good for SEO. <br />
          * ✅ Backend API: Next.js supports API routes; CRA does not. <br />*
          ✅ Performance: Next.js offers better performance out of the box.{" "}
          <br />* ✅ Deployment: Next.js is easier to deploy on platforms like
          Vercel. <br />
          * ✅ Learning curve: CRA is simpler for learning; Next.js has a
          steeper learning curve but more features. <br />
          <br />
          Next.js এবং Create React App (CRA) — দুটোই React অ্যাপ তৈরি করার জন্য
          ব্যবহার হয়, কিন্তু কাজের ধরনে অনেক পার্থক্য আছে। <br />
          CRA শুধু client-side rendering সাপোর্ট করে এবং সাধারণভাবে single-page
          app বানানোর জন্য উপযুক্ত। <br />
          Next.js হলো এক ধরনের full-stack framework, যেটা server-side rendering
          (SSR), static generation (SSG) — দুটোই সাপোর্ট করে। <br />
          Next.js প্রোডাকশন রেডি অ্যাপ বানাতে ভালো, এবং SEO performance অনেক
          ভালো। <br />
          CRA শেখা সহজ, কিন্তু এতে SSR, API routes, built-in routing এর মতো
          ফিচার নেই। <br />
          Next.js-এ ফাইল-ভিত্তিক রাউটিং এবং API routes দিয়ে backend logic handle
          করা যায়। <br />
          সবমিলিয়ে, Next.js অনেক বেশি শক্তিশালী এবং flexible ফ্রেমওয়ার্ক। <br />
          মূল পার্থক্যগুলো: <br />
          * ✅ Rendering: CRA শুধু CSR সাপোর্ট করে, Next.js সাপোর্ট করে SSR,
          SSG, CSR — সব। <br />
          * ✅ Routing: CRA-তে `react-router` লাগে, Next.js-এ built-in routing
          আছে। <br />
          * ✅ SEO: Next.js SEO-friendly, কিন্তু CRA SEO তে দুর্বল। <br />
          * ✅ Backend API: Next.js API routes সাপোর্ট করে, CRA পারে না। <br />
          * ✅ Performance: Next.js এর পারফর্মেন্স শুরু থেকেই ভালো। <br />
          * ✅ Deployment: Next.js সহজে Vercel-এ deploy করা যায়। <br />* ✅
          Learning curve: CRA শেখা সহজ, Next.js একটু কঠিন, কিন্তু ফিচার বেশি।
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
          Next.js is a framework built on top of React. <br />
          It helps developers build fast, scalable, and SEO-friendly web
          applications. <br />
          While React is a JavaScript library for building user interfaces,{" "}
          <br />
          Next.js adds extra features like routing, server-side rendering,
          static site generation, and API routes. <br />
          So yes, Next.js is different from React — it is more powerful because
          it extends React's capabilities. <br />
          In short, React is the core library, and Next.js is a full framework
          based on React. <br />
          Key Difference: <br />
          * React only handles UI rendering. <br />
          * Next.js provides routing, SSR, SSG, API support, and deployment
          tools. <br />
          <br />
          Next.js হলো React-এর উপর ভিত্তি করে তৈরি একটি framework। <br />
          এটা দিয়ে দ্রুত, স্কেলেবল এবং SEO-friendly ওয়েব অ্যাপ তৈরি করা যায়।{" "}
          <br />
          React হলো শুধুমাত্র একটি UI লাইব্রেরি, যেটা শুধু ইউজার ইন্টারফেস তৈরি
          করতে ব্যবহার হয়। <br />
          Next.js এই React-এর উপরে বাড়তি ফিচার যোগ করে — যেমন routing,
          server-side rendering, static site generation এবং API routes। <br />
          তাই, হ্যাঁ — Next.js এবং React এক জিনিস না। Next.js আসলে React-এর চেয়ে
          আরও বেশি শক্তিশালী এবং feature-rich। <br />
          সংক্ষেপে, React হলো মূল লাইব্রেরি আর Next.js হলো এর উপর তৈরি একটি
          পূর্ণাঙ্গ framework। <br />
          মূল পার্থক্য: <br />
          * React শুধু UI তৈরি করে। <br />* Next.js UI ছাড়াও routing, SSR, SSG,
          API এবং deploy support দেয়।
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
          SSR stands for Server-Side Rendering. <br />
          In SSR, the page is rendered on the server for every request and sent
          as HTML to the browser. <br />
          This helps improve SEO and makes the initial load faster for dynamic
          content. <br />
          Next.js provides built-in support for SSR using
          `getServerSideProps()`. <br />
          It is useful when the data changes frequently or depends on
          request-specific data like user auth or query params. <br />
          When to use SSR in Next.js: <br />
          * When SEO is important and content is dynamic <br />
          * When you need to show user-specific or real-time data <br />
          * When data needs to be updated on every request <br />
          * For dashboards, authenticated pages, or search results <br />
          Example: <br />
          Use SSR when building a dashboard that shows live user data or order
          details. <br />
          <br />
          SSR মানে হলো Server-Side Rendering। <br />
          এই পদ্ধতিতে প্রতিবার রিকোয়েস্ট এলে সার্ভার থেকে HTML রেন্ডার করে
          ব্রাউজারে পাঠানো হয়। <br />
          এতে করে SEO ভালো হয় এবং ডায়নামিক কন্টেন্টের জন্য পেজ লোড অনেক দ্রুত
          হয়। <br />
          Next.js-এ SSR করার জন্য `getServerSideProps()` ফাংশন ব্যবহার করা হয়।{" "}
          <br />
          যখন ডেটা বারবার বদলায় বা ইউজার অনুযায়ী কনটেন্ট দেখাতে হয়, তখন SSR
          ব্যবহার করা ভালো। <br />
          Next.js-এ SSR কখন ব্যবহার করবেন: <br />
          * যখন SEO দরকার এবং কন্টেন্ট বারবার বদলায় <br />
          * যখন ইউজার স্পেসিফিক বা লাইভ ডেটা দেখাতে হয় <br />
          * যখন প্রতিবার রিকোয়েস্টে নতুন ডেটা দরকার হয় <br />
          * ড্যাশবোর্ড, লগইন করা ইউজারের পেজ, সার্চ রেজাল্টের জন্য <br />
          উদাহরণ: <br />
          যেমন — ইউজারের প্রোফাইল ডেটা বা লাইভ অর্ডার স্ট্যাটাস দেখানোর জন্য SSR
          ব্যবহার করা উচিত।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What are the different{" "}
          <span className="font-bold">data fetching methods</span> in Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Next.js provides several data fetching methods to handle different use
          cases. <br />
          Each method works differently based on when and where the data is
          fetched. <br />
          Main data fetching methods in Next.js: <br />
          1️⃣ getStaticProps (Static Generation) <br />
          * Runs at build time <br />
          * Used for pages that don’t need to change often <br />
          * Good for performance and SEO <br />
          2️⃣ getServerSideProps (Server-Side Rendering) <br />
          * Runs on every request on the server <br />
          * Used when data changes frequently or is user-specific <br />
          3️⃣ getStaticPaths (for Dynamic Routes with SSG) <br />* Works with
          `getStaticProps` to generate dynamic paths at build time <br />
          4️⃣ Client-side fetching (useEffect + fetch/axios) <br />
          * Runs in the browser after the page loads <br />
          * Used when SEO is not important or data changes frequently <br />
          5️⃣ API Routes (Backend in Next.js) <br />
          * Custom API endpoints using `/api` directory <br />
          * Useful for handling form submissions, fetching DB data, etc. <br />
          <br />
          Next.js এ ডেটা আনার জন্য কয়েকটি আলাদা মেথড আছে, যেগুলো আলাদা সময় এবং
          পরিস্থিতিতে কাজ করে। <br />
          Next.js এর প্রধান data fetching মেথডগুলো হলো: <br />
          1️⃣ getStaticProps (Static Generation) <br />
          * Build time এ রান হয় <br />
          * এমন পেজের জন্য যেগুলোর ডেটা খুব কম চেঞ্জ হয় <br />
          * পারফর্মেন্স ও SEO-র জন্য ভালো <br />
          2️⃣ getServerSideProps (Server-Side Rendering) <br />
          * প্রতিবার রিকোয়েস্টে সার্ভারে রান হয় <br />
          * যখন ডেটা ফ্রিকোয়েন্টলি চেঞ্জ হয় বা ইউজার স্পেসিফিক হয় <br />
          3️⃣ getStaticPaths (Dynamic Routes এর জন্য) <br />
          * Dynamic পেজ গুলোর path build time এ বানাতে সাহায্য করে <br />
          4️⃣ Client-side fetching (useEffect + fetch/axios) <br />
          * পেজ লোড হওয়ার পরে ব্রাউজারে ডেটা আনে <br />
          * যখন SEO দরকার নেই বা লাইভ ডেটা লাগে <br />
          5️⃣ API Routes (Next.js এর Backend) <br />
          * `/api` ফোল্ডারে API বানানো যায় <br />* ফর্ম সাবমিশন, ডাটাবেস ডেটা
          আনা ইত্যাদিতে ব্যবহার হয়
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
          In Next.js, `app.js` and `document.js` are special files used to
          customize the overall behavior and layout of the application. <br />
          They allow us to control how pages are rendered and how global styles
          or HTML structures are applied. <br />
          ✅ `pages/_app.js`
          <br />
          * This file is used to initialize pages. <br />
          * It wraps all the pages, so we can add global CSS, layout components,
          or Redux/Context providers here. <br />
          * Runs on both server and client. <br />
          * Very useful for maintaining shared layout across pages. <br />
          Example use cases:
          <br />
          * Importing global styles <br />
          * Wrapping pages with layout <br />
          * Adding authentication provider <br />
          ✅ `pages/_document.js`
          <br />
          * This file is used to customize the HTML document structure. <br />
          * It only runs on the server side, and it is rendered once per
          request. <br />
          * Useful for modifying `&#60;html&#62;`, `&#60;head&#62;`, and
          `&#60;body&#62;` tags. <br />
          * You can add custom fonts, meta tags, or scripts here. <br />
          Example use cases:
          <br />
          * Adding Google Fonts or analytics script <br />
          * Customizing document language or direction <br />
          Summary:
          <br />
          * `_app.js` = Customize page-level layout and providers <br />
          * `_document.js` = Customize root HTML structure <br />
          <br />
          Next.js-এ `app.js` এবং `document.js` দুটি গুরুত্বপূর্ণ ফাইল, যেগুলো
          দিয়ে আমরা অ্যাপের গ্লোবাল আচরণ এবং HTML কাঠামো কাস্টোমাইজ করতে পারি।{" "}
          <br />
          ✅ `pages/_app.js` <br />
          * এই ফাইলটি সব পেজ রেন্ডার হওয়ার আগে রান হয়। <br />
          * সব পেজকে ঘিরে রাখে, তাই এখানে global CSS, layout component, বা
          Redux/Context provider ব্যবহার করা যায়। <br />
          * client এবং server — দু’জায়গাতেই রান হয়। <br />
          * সব পেজে একই layout বা স্টাইল রাখতে সাহায্য করে। <br />
          উদাহরণ: <br />
          * গ্লোবাল স্টাইল ইম্পোর্ট করা <br />
          * সব পেজে লেআউট কম্পোনেন্ট ব্যবহার করা <br />
          * authentication provider যোগ করা <br />
          ✅ `pages/_document.js`
          <br /> * এই ফাইলটি দিয়ে মূল HTML ডকুমেন্টের স্ট্রাকচার কাস্টোমাইজ করা
          হয়। <br />
          * এটা শুধু server-side এ রান হয় এবং প্রতিবার রিকোয়েস্টে একবার করে
          রেন্ডার হয়। <br />
          * `&#60;html&#62;`, `&#60;head&#62;`, `&#60;body&#62;` কাস্টমাইজ করতে
          ব্যবহৃত হয়। <br />
          উদাহরণ:
          <br />
          * Google Fonts যোগ করা <br />
          * Analytics স্ক্রিপ্ট দেওয়া <br />
          * ডকুমেন্টের ভাষা বা দিক নির্ধারণ করা <br />
          সারসংক্ষেপ: <br />
          * `_app.js` → গ্লোবাল লেআউট ও স্টেট ব্যবস্থাপনার জন্য <br />*
          `_document.js` → HTML ডকুমেন্টের গঠন পরিবর্তনের জন্য
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
          In Next.js, routing is handled using a file-based routing system.{" "}
          <br />
          This means the structure of the `pages/` folder automatically defines
          the routes. <br />
          You don’t need to install or configure any external router like
          `react-router-dom`. <br />
          ✅ Basic Routing:
          <br />
          * If you create `pages/about.js`, the route becomes `/about` <br />*
          If you create `pages/contact.js`, the route becomes `/contact` <br />
          ✅ Nested Routes:
          <br />
          * You can create folders inside `pages/`, like `pages/blog/post.js` →
          route: `/blog/post` <br />
          ✅ Dynamic Routes:
          <br />
          * Use square brackets `[ ]` to define dynamic routes <br />
          * Example: `pages/product/[id].js` → route: `/product/123` <br />
          ✅ Catch-All Routes:
          <br />
          * Use `[...]` for catch-all dynamic routing <br />
          * Example: `pages/docs/[...slug].js` → matches `/docs/a/b/c` <br />
          ✅ Linking Between Pages:
          <br />
          * Use the built-in `Link` component from `next/link` <br />
          import Link from 'next/link';
          <br />
          {`
<Link href="/about">Go to About</Link>
`}
          <br />
          Summary:
          <br />
          * Routing is automatic based on file/folder names in `pages/` <br />
          * Dynamic and nested routes are easy to implement <br />* `Link`
          component is used for navigation without full page reload <br />
          <br />
          Next.js-এ Routing হয় file-based system এর মাধ্যমে। <br />
          মানে হলো `pages/` ফোল্ডারের ভেতরের ফাইল ও ফোল্ডারের নাম অনুযায়ী route
          তৈরি হয়। <br />
          `react-router-dom` এর মতো আলাদা কিছু ইনস্টল করতে হয় না। <br />
          ✅ Basic Routing:
          <br />
          * `pages/about.js` → route হবে `/about` <br />
          * `pages/contact.js` → route হবে `/contact` <br />
          ✅ Nested Routes:
          <br />
          * `pages/blog/post.js` → route হবে `/blog/post` <br />
          ✅ Dynamic Routes:
          <br />
          * ডাইনামিক route বানাতে `[ ]` ব্যবহার করি <br />
          * যেমন: `pages/product/[id].js` → `/product/123` এর মতো URL handle
          করবে <br />
          ✅ Catch-All Routes:
          <br />
          * `[...]` ব্যবহার করলে সব রকম path ধরতে পারে <br />
          * যেমন: `pages/docs/[...slug].js` → `/docs/a/b/c` <br />
          ✅ Page Navigation:
          <br />
          * `next/link` এর `Link` component দিয়ে এক পেজ থেকে আরেক পেজে যাওয়ার
          জন্য ব্যবহার হয় <br />
          import Link from 'next/link';
          <br />
          {`
<Link href="/about">Go to About</Link>
`}
          <br />
          সারসংক্ষেপ:
          <br />* Routing হয় অটোমেটিকভাবে `pages/` ফোল্ডারের ফাইল/নামের উপর
          ভিত্তি করে <br />
          * Dynamic, Nested এবং Catch-all route সহজে বানানো যায় <br />
          * `Link` ব্যবহার করলে পেজ রিলোড ছাড়া দ্রুত নেভিগেশন করা যায় <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What are the <span className="font-bold">benefits </span>of using
          Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Next.js offers many powerful benefits that make it ideal for building
          modern web applications. <br />
          It is built on top of React and adds production-ready features out of
          the box. <br />
          ✅ Main Benefits of Next.js: <br />
          1️⃣ Server-Side Rendering (SSR) <br />
          * Helps with SEO and loads content faster <br />
          2️⃣ Static Site Generation (SSG) <br />
          * Generates pages at build time for better performance <br />
          3️⃣ File-based Routing <br />
          * No need for manual routing setup like `react-router` <br />
          4️⃣ Built-in API Routes <br />
          * Create backend functionality without a separate server <br />
          5️⃣ Better SEO <br />
          * Since pages are rendered on the server, they are easier for search
          engines to read <br />
          6️⃣ Image Optimization <br />
          * Built-in support for responsive and fast-loading images <br />
          7️⃣ Performance & Speed <br />
          * Automatically optimizes pages and code splitting <br />
          8️⃣ Full Flexibility (SSR, SSG, CSR) <br />
          * Use any data fetching strategy as needed <br />
          9️⃣ Easy Deployment <br />
          * Seamless deployment with platforms like Vercel <br />
          10️⃣ Built-in support for TypeScript, CSS, Sass, and Tailwind CSS{" "}
          <br />
          <br />
          Next.js অনেক শক্তিশালী এবং আধুনিক ফিচার দেয়, যা দিয়ে সহজে
          প্রোডাকশন-লেভেলের ওয়েব অ্যাপ বানানো যায়। <br />
          এটি React-এর উপর তৈরি এবং শুরু থেকেই দরকারি ফিচারগুলো যুক্ত থাকে।{" "}
          <br />
          ✅ Next.js ব্যবহারের প্রধান সুবিধাগুলো: <br />
          1️⃣ Server-Side Rendering (SSR) <br />
          * SEO ভালো করে এবং পেজ দ্রুত লোড হয় <br />
          2️⃣ Static Site Generation (SSG) <br />
          * Build time এ পেজ তৈরি করে, পারফর্মেন্স ভালো হয় <br />
          3️⃣ File-based Routing <br />
          * Route ম্যানুয়ালি বানাতে হয় না, ফাইল নামেই route হয়ে যায় <br />
          4️⃣ Built-in API Routes <br />
          * আলাদা সার্ভার ছাড়া backend এর কাজ করা যায় <br />
          5️⃣ SEO Friendly <br />
          * সার্ভার থেকে রেন্ডার হওয়ায় সার্চ ইঞ্জিন সহজে কনটেন্ট পড়ে <br />
          6️⃣ Image Optimization <br />
          * Responsive এবং ফাস্ট লোডিং ইমেজ সাপোর্ট করে <br />
          7️⃣ Performance & Speed <br />
          * কোড স্প্লিটিং ও পেজ অপ্টিমাইজেশন অটোমেটিক করে <br />
          8️⃣ Flexibility (SSR, SSG, CSR) <br />
          * প্রোজেক্টের প্রয়োজন অনুযায়ী যেকোনো মেথড ব্যবহার করা যায় <br />
          9️⃣ Easy Deployment <br />
          * Vercel বা অন্য প্ল্যাটফর্মে সহজে ডিপ্লয় করা যায় <br />
          🔟 TypeScript, CSS, Sass এবং Tailwind CSS Built-in সাপোর্ট
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. Explain how <span className="font-bold">dynamic routes </span>work
          in the Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Next.js, dynamic routes allow you to create pages with variable
          paths using square brackets `[ ]`. <br />
          Instead of creating a separate file for every ID or slug, you can use
          one dynamic file. <br />
          ✅ How it works:
          <br />
          If you create a file like `pages/product/[id].js`, it becomes a
          dynamic route. <br />
          Now, URLs like `/product/1` or `/product/abc` will be handled by that
          file. <br />
          Inside the file, you can access the dynamic value using `useRouter()`
          (on client side) or `context.params` (on server side). <br />
          ✅ Code Example:
          <br />
          File: `pages/product/[id].js`
          <pre>{`
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Product ID: {id}</h1>;
}`}</pre>
          <br />
          ✅ With `getStaticPaths` and `getStaticProps` (for SSG):
          <br />
          <pre>{`export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}}`}</pre>
          <br />
          Summary:
          <br />
          * Dynamic routes use `[param]` in filename <br />
          * Good for pages like `/product/[id]`, `/user/[username]` etc. <br />
          * You can use SSR or SSG with them <br />
          <br />
          Next.js এ dynamic routes ব্যবহার করে আপনি ভ্যারিয়েবল URL পাথ তৈরি করতে
          পারেন `[ ]` ব্যবহার করে। <br />
          প্রতিটি ID বা slug এর জন্য আলাদা ফাইল বানানোর দরকার হয় না। <br />
          ✅ কীভাবে কাজ করে:
          <br />
          যদি আপনি `pages/product/[id].js` ফাইল তৈরি করেন, তাহলে এটা ডাইনামিক
          রাউট হয়ে যায়। <br />
          এখন `/product/1` অথবা `/product/abc` — দুইটাই এই ফাইল হ্যান্ডেল করবে।{" "}
          <br />
          এই ডায়নামিক ভ্যালু আপনি `useRouter()` দিয়ে (client-side এ) অথবা
          `context.params` দিয়ে (server-side এ) access করতে পারেন। <br />
          ✅ কোড উদাহরণ:
          <br />
          ফাইল: `pages/product/[id].js`
          <pre>{`
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Product ID: {id}</h1>;
}`}</pre>
          <br />
          ✅ `getStaticPaths` এবং `getStaticProps` সহ (SSG এর জন্য):
          <br />
          <pre>{`export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}}`}</pre>
          <br />
          সারসংক্ষেপ:
          <br />
          * ফাইলের নাম `[param]` দিলে সেটা ডাইনামিক রাউট হয়ে যায় <br />
          * যেমন: `/product/[id]`, `/user/[name]` ইত্যাদি <br />* এর সাথে SSR বা
          SSG দুইটাই ব্যবহার করা যায়
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. What is the significance of the
          <span className="font-bold"> _error.js and 404.js </span> files in the
          pages directory in Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          🔸 In Next.js, the `404.js` file is used to handle "Page Not Found"
          errors. <br />
          It is shown when a user tries to visit a route that doesn't exist.{" "}
          <br />
          You can create a custom `404.js` file inside the `pages` folder to
          display a custom error message, image, or link back to homepage.{" "}
          <br />
          This improves the user experience and makes the error page feel more
          like part of your site. <br />
          🔸 The `_error.js` file is used to handle other errors, such as server
          errors (500) or rendering issues. <br />
          By default, Next.js provides a standard error page, but we can
          customize `_error.js` to show a more user-friendly error message.{" "}
          <br />
          You can use this file to catch and display errors for both client-side
          and server-side problems. <br />
          Both files allow you to make your application more polished and
          user-friendly during failure. <br />
          So, these files are important to handle errors gracefully and maintain
          a good UX. <br />
          <br />
          🔸 Next.js-এ `404.js` ফাইলটি "Page Not Found" এরর হ্যান্ডল করার জন্য
          ব্যবহার করা হয়। <br />
          যখন ইউজার এমন কোনো পেজে যায় যা এক্সিস্ট করে না, তখন এই ফাইল দেখানো
          হয়। <br />
          `pages` ফোল্ডারে একটা কাস্টম `404.js` বানিয়ে আমরা আমাদের পছন্দমত
          মেসেজ, ছবি বা হোম পেজে ফেরার লিংক দিতে পারি। <br />
          এতে করে ইউজারের অভিজ্ঞতা ভালো হয় এবং এরর পেজটাও সাইটের মতোই দেখতে
          লাগে। <br />
          🔸 `_error.js` ফাইলটি মূলত অন্যান্য এরর (যেমন 500 সার্ভার এরর বা
          রেন্ডারিং ইস্যু) হ্যান্ডল করার জন্য ব্যবহৃত হয়। <br />
          ডিফল্টভাবে Next.js একটা সাধারণ এরর পেজ দেয়, কিন্তু আমরা `_error.js`
          কাস্টমাইজ করে ভালো ইউজার ফ্রেন্ডলি মেসেজ দেখাতে পারি। <br />
          এই ফাইলের মাধ্যমে আমরা client-side এবং server-side দুই ধরনের এরর
          হ্যান্ডল করতে পারি। <br />
          এই দুইটা ফাইল আমাদের অ্যাপকে আরও প্রফেশনাল এবং ইউজার ফ্রেন্ডলি করে
          তোলে, এরর হলে ইউজার যেন বিরক্ত না হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. Explain the concept of{" "}
          <span className="font-bold">prefetching </span>of the Next.jS and How
          it impacts performance?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Prefetching in Next.js means loading page resources in advance, before
          the user clicks a link. <br />
          It helps to make navigation between pages much faster and smoother.{" "}
          <br />
          Next.js automatically prefetches linked pages when you use the
          built-in `Link` component. <br />
          Prefetching only works for static pages and when the link is visible
          in the browser viewport. <br />
          ✅ How it impacts performance:
          <br />
          * Reduces wait time when the user clicks a link <br />
          * Improves perceived speed of the app <br />
          * Makes navigation feel instant <br />
          * Saves time by avoiding full page reloads <br />
          ✅ Code Example:
          <br />
          import Link from 'next/link';
          <br />
          {`<Link href="/about">Go to About Page</Link>`}
          <br />* Next.js will automatically prefetch `/about` page in the
          background. <br />
          * You can disable it using: <br />
          {`<Link href="/about" prefetch={false}>`} <br />
          ✅ When prefetching works best:
          <br />
          * For frequently visited pages (like Home, About, Products) <br />
          * On fast networks and static content <br />
          * When using static generation (SSG) pages <br />
          Summary:
          <br />
          * Prefetching improves UX by loading next page before click <br />
          * It only works with Next.js `Link` and static routes <br />
          * Makes apps feel fast and smooth <br />
          <br />
          Next.js এ Prefetching মানে হলো কোনো পেজে ক্লিক করার আগেই তার প্রয়োজনীয়
          ডেটা ও ফাইল আগেই লোড করে ফেলা। <br />
          এটা ইউজারের জন্য নেভিগেশনকে অনেক দ্রুত ও স্মুথ করে তোলে। <br />
          আপনি যদি Next.js এর `Link` component ব্যবহার করেন, তাহলে Next.js
          অটোমেটিকভাবে প্রেফেচ করে নেয়। <br />
          তবে এটা শুধু static পেজ এর জন্য এবং যখন লিংক ব্রাউজারে দেখা যাচ্ছে
          তখনই কাজ করে। <br />
          ✅ এটা পারফর্মেন্সে যেভাবে প্রভাব ফেলে:
          <br />
          * ইউজার ক্লিক করলে আর অপেক্ষা করতে হয় না <br />
          * অ্যাপ অনেক দ্রুত মনে হয় <br />
          * নেভিগেশন ইন্সট্যান্টলি হয় <br />
          * পেজ রিলোড করার দরকার পড়ে না <br />
          ✅ কোড উদাহরণ:
          <br />
          import Link from 'next/link';
          <br />
          {`<Link href="/about">Go to About Page</Link>`}
          <br />
          * এখানে `/about` পেজ অটোমেটিক প্রেফেচ হবে ব্যাকগ্রাউন্ডে। <br />
          * চাইলে বন্ধ করা যায়: <br />
          {`<Link href="/about" prefetch={false}>`} <br />
          ✅ কখন প্রেফেচিং সবচেয়ে ভালো কাজ করে:
          <br />
          * যেসব পেজে ইউজার বারবার যাবে (যেমন: Home, Products) <br />
          * যখন কনটেন্ট static হয় <br />
          * ফাস্ট ইন্টারনেট সংযোগে <br />
          সারসংক্ষেপ:
          <br />
          * Prefetching পেজ আগে থেকে লোড করে <br />
          * ইউজারের ক্লিক করার সাথে সাথেই পেজ খুলে যায় <br />* শুধুমাত্র static
          পেজ ও `Link` component এর সাথে কাজ করে
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. Explain the purpose of{" "}
          <span className="font-bold">static site generation(SSG) .</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Static Site Generation (SSG) is a data fetching method in Next.js
          where the HTML of a page is generated at build time. <br />
          It means the page is pre-rendered and saved as static HTML before the
          user visits it. <br />
          When the user visits the site, the HTML loads instantly—no need to
          wait for server processing. <br />
          SSG is very fast and good for SEO. <br />
          It is best suited for pages that do not change frequently. <br />
          ✅ Purpose of SSG:
          <br />
          * To make websites load very fast <br />
          * To improve SEO by pre-rendering content <br />
          * To reduce server load since HTML is already generated <br />
          * To enhance user experience by faster page delivery <br />
          ✅ When to use SSG:
          <br />
          * For static content like blog posts, product lists, documentation,
          landing pages <br />
          * When data doesn’t change on every request <br />
          * When SEO and performance are important <br />
          ✅ Example:
          <br />
          In Next.js, you use `getStaticProps()` to enable SSG for a page.{" "}
          <br />
          <pre>{`export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
  };
}`}</pre>
          Summary:
          <br />
          * SSG generates static HTML during build time <br />
          * Offers high speed, good SEO, and low server cost <br />
          * Ideal for mostly unchanging content <br />
          <br />
          Static Site Generation (SSG) হচ্ছে এমন একটি ডেটা ফেচিং মেথড যেখানে
          Next.js পেজের HTML build time-এ তৈরি করে। <br />
          মানে, ইউজার পেজে ঢোকার আগেই পেজটা তৈরি হয়ে যায় এবং সার্ভারে বসে থাকে।{" "}
          <br />
          ইউজার যখন সাইটে যায়, তখন সাথে সাথে পেজ লোড হয়—সার্ভারকে নতুন করে
          প্রসেস করতে হয় না। <br />
          SSG অনেক ফাস্ট এবং SEO-র জন্য খুব ভালো। <br />
          যে পেজগুলো বারবার পরিবর্তন হয় না, সেখানে SSG সবচেয়ে ভালো কাজ করে।{" "}
          <br />
          ✅ SSG এর উদ্দেশ্য:
          <br />
          * ওয়েবসাইট খুব দ্রুত লোড করানো <br />
          * প্রি-রেন্ডার করে SEO ভালো করা <br />
          * সার্ভারের লোড কমানো <br />
          * ইউজারকে ফাস্ট পেজ ডেলিভারি দেওয়া <br />
          ✅ কখন SSG ব্যবহার করবেন:
          <br />* Blog, Documentation, Product Listing এর মতো স্ট্যাটিক
          কনটেন্টের জন্য <br />
          * যখন ডেটা প্রতিবার রিকোয়েস্টে চেঞ্জ হয় না <br />
          * যখন SEO এবং পারফর্মেন্স গুরুত্বপূর্ণ <br />
          ✅ উদাহরণ:
          <br />
          Next.js এ `getStaticProps()` ব্যবহার করে SSG করা হয়।
          <pre>{`export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
  };
}`}</pre>
          সারসংক্ষেপ:
          <br />
          * SSG এ HTML build time এ তৈরি হয় <br />
          * পারফর্মেন্স ভালো, সার্ভার চাপ কম এবং SEO ফ্রেন্ডলি <br />* যেসব
          কনটেন্ট পরিবর্তন হয় না, তাদের জন্য পারফেক্ট
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What are the{" "}
          <span className="font-bold">
            differences between client-side rendering (CSR) and server-side
            rendering (SSR){" "}
          </span>{" "}
          in Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Client-Side Rendering (CSR) and Server-Side Rendering (SSR) are two
          different ways of rendering content in Next.js. <br />
          They determine when and where the HTML content is generated. <br />
          ✅ Client-Side Rendering (CSR):
          <br />
          * The HTML is built in the browser after JavaScript loads. <br />
          * The user sees a blank screen or loader first, then content is
          fetched and shown. <br />
          * Used when SEO is not important, or for interactive dashboards,
          user-specific content. <br />
          * Faster navigation after initial load. <br />
          * Slower first page load compared to SSR. <br />
          👉 In Next.js, CSR is default for client components or dynamic
          fetching using `useEffect` + API. <br />
          ✅ Server-Side Rendering (SSR):
          <br />
          * The HTML is generated on the server on every request. <br />
          * The user gets a fully rendered page directly from the server. <br />
          * Great for SEO, since search engines can see the full content. <br />
          * Slower than CSR for navigation, but faster first load. <br />
          * Useful for news sites, blogs, public product pages. <br />
          👉 In Next.js, use `getServerSideProps()` to enable SSR. <br />
          <br />
          Client-Side Rendering (CSR) এবং Server-Side Rendering (SSR) হচ্ছে
          Next.js এ দুই ধরনের রেন্ডারিং প্রসেস। <br />
          এগুলো বলে দেয় HTML কবে এবং কোথায় তৈরি হবে। <br />
          ✅ Client-Side Rendering (CSR):
          <br />
          * HTML ইউজারের ব্রাউজারে তৈরি হয়, যখন জাভাস্ক্রিপ্ট লোড হয়। <br />
          * ইউজার শুরুতে ব্ল্যাংক স্ক্রিন বা লোডার দেখতে পায়। পরে ডেটা এনে
          কনটেন্ট দেখায়। <br />
          * যখন SEO দরকার হয় না, তখন CSR ভালো—যেমন Dashboard, Profile Page
          ইত্যাদি। <br />
          * প্রথম লোড ধীর, কিন্তু পরের পেজগুলো দ্রুত। <br />
          👉 Next.js এ CSR হয় যখন আপনি client component বানান বা `useEffect`
          দিয়ে API কল করেন। <br />
          ✅ Server-Side Rendering (SSR):
          <br />
          * HTML সার্ভারে প্রতি রিকোয়েস্টে তৈরি হয়। <br />
          * ইউজার সরাসরি রেন্ডার করা HTML পায়। <br />
          * SEO ভালো হয় কারণ সার্চ ইঞ্জিন পুরো কনটেন্ট দেখতে পারে। <br />
          * প্রথম লোড ফাস্ট, তবে পেজ চেঞ্জে একটু ধীর হতে পারে। <br />
          * News, Blog, Public Product Page এর মতো পেজে SSR ভালো কাজ করে। <br />
          👉 Next.js এ `getServerSideProps()` দিয়ে SSR চালু করা হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. What are the{" "}
          <span className="font-bold">
            performance optimization techniques{" "}
          </span>
          you can use in a Next.js application?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In a Next.js application, performance optimization is crucial to
          ensure fast loading, better user experience, and improved SEO. <br />
          Here are some commonly used techniques: <br />
          ✅ 1. Image Optimization
          <br />
          * Use Next.js &#60;Image /&#62; component to automatically serve
          optimized images. <br />
          * It supports lazy loading and responsive resizing. <br />
          ✅ 2. Code Splitting
          <br />
          * Next.js automatically splits code by page. <br />
          * Only the required JS is loaded, which improves load time. <br />
          ✅ 3. Dynamic Imports (with SSR disabled if needed)
          <br />
          * Import components only when needed using `next/dynamic`. <br />*
          Helps reduce bundle size. Example:
          {`
const HeavyComponent = dynamic(() => import('./HeavyComponent'), { ssr: false });
`}
          <br />
          ✅ 4. Static Site Generation (SSG)
          <br />
          * Use `getStaticProps()` to generate pages at build time. <br />
          * Pages load faster since HTML is prebuilt. <br />
          ✅ 5. Server-side Rendering (SSR) selectively
          <br />
          * Use `getServerSideProps()` only where necessary. <br />
          * Avoid SSR on pages that don’t need dynamic content. <br />
          ✅ 6. Lazy Loading Components
          <br />* Use lazy loading for non-critical components (like modals,
          charts). <br />
          * Prevents unnecessary JS from being loaded initially. <br />
          ✅ 7. Reduce JavaScript Size
          <br />
          * Avoid large libraries; use lightweight alternatives. <br />
          * Remove unused dependencies. <br />
          ✅ 8. Enable Compression & Caching
          <br />
          * Use `gzip` or `brotli` compression in the server. <br />
          * Cache static assets using `Cache-Control` headers. <br />
          ✅ 9. Use CDN for static assets
          <br />
          * Host images, fonts, videos on CDN. <br />* This reduces load on your
          origin server and speeds up delivery. <br />
          ✅ 10. Minimize API calls
          <br />
          * Combine API calls when possible. <br />
          * Use SWR or React Query to cache and reuse data. <br />
          ✅ 11. Pre-render Critical Pages
          <br />* Use SSG or SSR for critical pages like homepage, product
          pages. <br />
          * Improves first contentful paint (FCP). <br />
          ✅ 12. Prefetching
          <br />
          * Use Next.js &#60;Link prefetch /&#62; to load future pages in the
          background. <br />
          * This makes navigation almost instant. <br />
          ✅ 13. Use `next/script` for external JS
          <br />
          * Load third-party scripts using &#60;Script&#62; component with
          `strategy="lazyOnload"` or `beforeInteractive`. <br />
          * Controls when and how scripts are loaded. <br />
          ✅ 14. Use Fonts Optimally
          <br />
          * Use Next.js built-in font optimization. <br />
          * Load only the necessary font weights and styles. <br />
          ✅ 15. Analyze and Monitor Performance
          <br />
          * Use `next build && next export` to check bundle size. <br />
          * Use `@next/bundle-analyzer` to identify large modules.
          <br />
          <br />
          Next.js অ্যাপে পারফরম্যান্স অপ্টিমাইজ করা জরুরি যাতে ওয়েবসাইট দ্রুত
          লোড হয়, ইউজার এক্সপেরিয়েন্স ভালো হয় এবং SEO ভালো থাকে। <br />
          এখানে কিছু গুরুত্বপূর্ণ টেকনিকস দেওয়া হলো: <br />
          ✅ 1. Image Optimization (ইমেজ অপ্টিমাইজ করা)
          <br />
          * Next.js এর &#60;Image /&#62; কম্পোনেন্ট ব্যবহার করলে ইমেজ অটোমেটিক
          অপ্টিমাইজ হয়। <br />
          * Lazy loading এবং responsive ইমেজ সাপোর্ট করে। <br />
          ✅ 2. Code Splitting (কোড স্প্লিটিং)
          <br />
          * Next.js অটোমেটিকভাবে প্রতিটা পেইজ আলাদা কোড বান্ডেলে ভাগ করে। <br />
          * এতে শুধু দরকারি জাভাস্ক্রিপ্ট লোড হয়, ফলে সাইট দ্রুত চলে। <br />
          ✅ 3. Dynamic Imports (ডায়নামিক ইমপোর্ট)
          <br />
          * যেই কম্পোনেন্ট দরকার, শুধু তখনই লোড করো। <br />
          * এতে অ্যাপ সাইজ ছোট থাকে। <br />
          {`
const HeavyComponent = dynamic(() => import('./HeavyComponent'), { ssr: false });
`}
          <br />
          ✅ 4. Static Site Generation (SSG)
          <br />* `getStaticProps()` দিয়ে পেইজ আগেই build-time এ তৈরি করে রাখা
          যায়। <br />
          * HTML ফাইল তৈরি থাকায় পেইজ খুব দ্রুত লোড হয়। <br />
          ✅ 5. Server-side Rendering (SSR)
          <br />
          * `getServerSideProps()` শুধু তখন ব্যবহার করো, যখন পেইজে রিয়েল টাইম
          ডেটা লাগে। <br />
          * সব পেইজে SSR দিলে লোড টাইম বেড়ে যায়। <br />
          ✅ 6. Lazy Loading Components
          <br />
          * কম গুরুত্বপূর্ণ কম্পোনেন্টগুলো (modal, chart) পরে লোড করো। <br />
          * এতে প্রথমে কম জাভাস্ক্রিপ্ট লোড হয়। <br />
          ✅ 7. Reduce JavaScript Size
          <br />
          * বড় লাইব্রেরি বাদ দিয়ে ছোট, লাইটওয়েট লাইব্রেরি ব্যবহার করো। <br />
          * আনইউজড প্যাকেজ রিমুভ করে দাও। <br />
          ✅ 8. Enable Compression & Caching
          <br />
          * সার্ভারে gzip বা brotli compression অন করো। <br />
          * স্ট্যাটিক ফাইল ক্যাশ করতে `Cache-Control` হেডার দাও। <br />
          ✅ 9. Use CDN
          <br />
          * ইমেজ, ভিডিও, ফন্ট ইত্যাদি CDN থেকে লোড করো। <br />
          * এতে সার্ভারের লোড কমে এবং স্পিড বাড়ে। <br />
          ✅ 10. Minimize API Calls
          <br />
          * দরকার হলে একসাথে একাধিক ডেটা এক API থেকে আনো। <br />
          * `SWR` বা `React Query` দিয়ে API রেজাল্ট ক্যাশ করো। <br />
          ✅ 11. Pre-render Critical Pages
          <br />
          * হোমপেজ বা প্রোডাক্ট পেইজ SSG/SSR দিয়ে আগেই রেন্ডার করো। <br />
          * এতে FCP (First Contentful Paint) অনেক ভালো হয়। <br />
          ✅ 12. Prefetching
          <br />
          * &#60;Link prefetch /&#62; দিলে ভবিষ্যতের পেইজ আগে থেকেই
          ব্যাকগ্রাউন্ডে লোড হয়। <br />
          * এতে ইউজার ক্লিক করার সাথে সাথেই পেইজ ওপেন হয়। <br />
          ✅ 13. Use `next/script` for external JS
          <br />
          * বাইরের স্ক্রিপ্ট লোড করতে &#60;Script&#62; ব্যবহার করো। <br />
          * `strategy="lazyOnload"` বা `beforeInteractive` দিয়ে কন্ট্রোল করো কখন
          লোড হবে। <br />
          ✅ 14. Use Fonts Optimally
          <br />
          * শুধু দরকারি font weight ও style লোড করো। <br />
          * Next.js এর font অপ্টিমাইজেশন ফিচার ব্যবহার করো। <br />
          ✅ 15. Analyze and Monitor Performance
          <br />
          * `next build` করে দেখো কোন পেইজে বেশি সাইজ হচ্ছে। <br />*
          `@next/bundle-analyzer` দিয়ে বিশ্লেষণ করো কোন লাইব্রেরি বড়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse15">
          15. How do you{" "}
          <span className="font-bold">create dynamic routes </span>in the
          Next.js?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse15"
          id="collapse15"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In Next.js, we create dynamic routes by using square brackets `[ ]` in
          the file or folder name inside the `app` or `pages` directory. <br />
          For example, if we want to show a product page based on its ID like
          `/product/123`, we create a file at `app/product/[id]/page.tsx`.{" "}
          <br />
          Here, `id` becomes a dynamic route parameter, which we can access
          using the `params` object inside our component. <br />
          This allows us to create reusable pages that respond to different
          values dynamically. <br />
          Dynamic routes are extremely useful in cases like blog posts, user
          profiles, product details, etc. <br />
          In the App Router, we can also use `generateStaticParams` to
          pre-generate pages for known routes during build time. <br />
          We can also use catch-all routes using `[...slug]` to match multiple
          segments dynamically. <br />
          Overall, dynamic routing in Next.js is simple, scalable, and powerful.{" "}
          <br />
          <br />
          Next.js-এ আমরা dynamic routes তৈরি করি `app` অথবা `pages` ফোল্ডারের
          ভেতরে ফাইল বা ফোল্ডারের নামে square bracket `[ ]` ব্যবহার করে। <br />
          যেমন ধরুন, যদি আমরা `/product/123` এই রকম একটা প্রোডাক্ট আইডি ভিত্তিক
          পেজ বানাতে চাই, তাহলে `app/product/[id]/page.tsx` নামে ফাইল বানাতে
          হবে। <br />
          এখানে `id` হচ্ছে ডায়নামিক প্যারামিটার, যেটা আমরা `params` অবজেক্ট
          থেকে এক্সেস করতে পারি। <br />
          এইভাবে আমরা একটাই পেজ বারবার ব্যবহার করে বিভিন্ন আইডি বা ভ্যালুর জন্য
          ডেটা দেখাতে পারি। <br />
          এটা ব্লগ, ইউজার প্রোফাইল, প্রোডাক্ট ডিটেইলস এর মতো ডায়নামিক কনটেন্টের
          জন্য খুব দরকারি। <br />
          App Router-এ আমরা `generateStaticParams` ব্যবহার করে static route গুলা
          build time-এ তৈরি করে ফেলতে পারি। <br />
          আর multiple segments এর জন্য `[...slug]` দিয়ে catch-all routes ও তৈরি
          করা যায়। <br />
          সবমিলিয়ে, Next.js-এর dynamic routing সিস্টেম অনেক সহজ, efficient এবং
          flexible।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse16">
          16. How do you implement
          <span className="font-bold">authentication </span>in Next.js app?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse16"
          id="collapse16"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In a Next.js app, we can implement authentication using different
          methods depending on the project needs. <br />
          The most popular approach is using NextAuth.js, a powerful
          authentication library built for Next.js. <br />
          It supports providers like Google, GitHub, Facebook, and also
          credentials-based login (email/password). <br />
          We install it, configure providers in the `authOptions`, and wrap the
          app with &#60;SessionProvider&#62; to access session data. <br />
          This allows both client-side and server-side authentication easily.{" "}
          <br />
          Alternatively, for custom authentication, we can build our own login
          system using JWT (JSON Web Token) and APIs. <br />
          In this approach, we send login data to a backend API, which returns a
          token. <br />
          We store the token in cookies (for SSR) or localStorage (for CSR) and
          use middleware to protect private routes. <br />
          Middleware in Next.js can check tokens before rendering pages and
          redirect if not authenticated. <br />
          So overall, authentication in Next.js is flexible, secure, and works
          great with both static and server-rendered pages. <br />
          <br />
          Next.js অ্যাপে আমরা বিভিন্ন পদ্ধতিতে authentication ইমপ্লিমেন্ট করতে
          পারি, প্রজেক্টের চাহিদা অনুযায়ী। <br />
          সবচেয়ে জনপ্রিয় পদ্ধতি হলো NextAuth.js ব্যবহার করা, যা Next.js-এর
          জন্য বানানো authentication লাইব্রেরি। <br />
          এটি Google, GitHub, Facebook, এমনকি email/password এর authentication
          সাপোর্ট করে। <br />
          আমরা এটিকে ইনস্টল করি, `authOptions` এ provider কনফিগার করি, এবং
          &#60;SessionProvider&#62; দিয়ে অ্যাপটি wrap করি session access এর
          জন্য। <br />
          এই পদ্ধতিতে আমরা সহজে client-side এবং server-side এ authentication
          করতে পারি। <br />
          অন্যভাবে, আমরা চাইলে JWT (JSON Web Token) দিয়ে কাস্টম authentication
          সিস্টেম বানাতে পারি। <br />
          এই পদ্ধতিতে ইউজারের login ডেটা backend API তে পাঠানো হয়, এবং সেটা
          থেকে একটি token রিটার্ন হয়। <br />
          এই token আমরা cookies (SSR এর জন্য) বা localStorage (CSR এর জন্য) এ
          রাখি এবং middleware দিয়ে প্রাইভেট পেজ প্রোটেক্ট করি। <br />
          Next.js এর middleware ব্যবহার করে আমরা যেকোনো পেজ রেন্ডার হওয়ার আগে
          token চেক করতে পারি এবং ইউজারকে redirect করতে পারি। <br />
          সবমিলিয়ে Next.js এ authentication করা খুবই ফ্লেক্সিবল, সিকিওর, এবং
          এটি static ও server-rendered পেজের সাথে ভালোভাবে কাজ করে।
        </div>
      </div>
    </Container>
  );
};

export default NextJSQuestions;
