/* eslint-disable react/no-unescaped-entities */

import Container from "../components/Shared/Container/Container";

const QnAMongoDB = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          01. What is the{" "}
          <span className="font-bold">purpose of a database</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The main purpose of a database is to store, manage, and organize data
          efficiently so that it can be easily accessed, updated, and retrieved
          when needed.
          <br />
          Databases help in:
          <br />
          * Reducing data duplication
          <br />
          * Keeping data consistent
          <br />
          * Securing sensitive information
          <br />
          * Allowing multiple users to work with the data at the same time
          <br />
          * Improving performance for large-scale data operations
          <br />
          In real-world applications like e-commerce, banking, healthcare, and
          social media — databases are used to store user profiles,
          transactions, product info, etc.
          <br />
          So in short, a database helps applications work faster, smarter, and
          more reliably by managing data in a structured way.
          <br />
          <br />
          ডেটাবেইসের মূল উদ্দেশ্য হলো তথ্য (data) সংরক্ষণ, পরিচালনা এবং সঠিকভাবে
          সাজিয়ে রাখা, যেন দরকার হলে সহজেই তথ্য খুঁজে পাওয়া, আপডেট করা, বা
          ব্যবহার করা যায়।
          <br />
          ডেটাবেইস আমাদের সাহায্য করে—
          <br />
          * ডাটা ডুপ্লিকেট হওয়া কমাতে
          <br />
          * ডাটার সঠিকতা (consistency) বজায় রাখতে
          <br />
          * গোপনীয় তথ্য নিরাপদ রাখতে
          <br />
          * একসাথে অনেক ইউজারকে ডাটা ব্যবহারের সুযোগ দিতে
          <br />
          * বড় ডাটার উপর ভালো পারফরম্যান্স নিশ্চিত করতে
          <br />
          যেমন: অনলাইন শপ, ব্যাংক, হাসপাতাল, ফেসবুক — এসব জায়গায় ইউজার ইনফো,
          অর্ডার, ট্রানজেকশন ইত্যাদি সংরক্ষণে।
          <br />
          সংক্ষেপে বললে, ডেটাবেইস অ্যাপ্লিকেশনকে দ্রুত ও নির্ভরযোগ্যভাবে কাজ
          করতে সাহায্য করে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          02. What do you mean by{" "}
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
          🔹 Database design refers to the overall planning and structuring of
          how data will be stored, managed, and related inside a database.{" "}
          <br />
          It ensures the system is efficient, scalable, and minimizes data
          redundancy. <br />
          🔹 Database schema design is a part of database design. It focuses on
          defining the structure of tables — like table names, fields (columns),
          data types, relationships (like foreign keys), constraints, and
          indexes.
          <br />
          In simple terms:
          <br />
          * Database design = the blueprint of how the entire database system
          works. <br />
          * Schema design = the layout of tables and how they connect.
          <br />
          A good database design ensures data integrity, faster queries, and
          better performance in real-world applications.
          <br /> <br />
          🔹 Database design মানে হলো পুরো ডেটাবেইস কীভাবে পরিকল্পনা করে তৈরি
          করা হবে, যেন ডেটা সঠিকভাবে সংরক্ষণ, পরিচালনা ও সম্পর্কযুক্তভাবে রাখা
          যায়। <br />
          এর মাধ্যমে সিস্টেমটি দ্রুত, স্কেলযোগ্য ও রিডান্ডেন্সি কম হয়।
          <br />
          🔹 Database schema design হলো database design-এর একটি অংশ। এটি মূলত
          টেবিলের গঠন নির্ধারণ করে — যেমন:
          <br />
          * টেবিলের নাম <br />
          * কোন কোন ফিল্ড থাকবে (column) <br />
          * ফিল্ডের টাইপ কী হবে (string, number, etc.) <br />
          * কী কী সম্পর্ক থাকবে (foreign key) <br />
          * কোন constraint বা rule থাকবে
          <br />
          সহজভাবে বললে:
          <br />
          * Database design মানে পুরো সিস্টেমের ব্লুপ্রিন্ট <br />
          * Schema design মানে টেবিলের কাঠামো ও সম্পর্ক
          <br />
          একটি ভালো schema design ডাটাবেইসকে করে তোলে দ্রুত, নির্ভুল ও
          পারফরম্যান্সে উন্নত।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          03. What is the <span className="font-bold">MongoDB</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          MongoDB is a NoSQL database that stores data in the form of documents,
          instead of traditional rows and columns like in SQL databases.
          <br />
          Each document is a JSON-like object (BSON) with key-value pairs, which
          makes it flexible, scalable, and suitable for modern web applications.
          <br />
          🔹 Key Features of MongoDB:
          <br />
          * Schema-less: You don’t need to define a fixed structure for data.
          <br />
          * Document-based: Stores data as flexible JSON-like documents.
          <br />
          * High performance: Fast read and write operations.
          <br />
          * Horizontal scaling: Can handle large amounts of data across multiple
          servers.
          <br />
          * Built-in replication and sharding: Ensures high availability and
          scalability.
          <br />
          MongoDB is widely used in real-time applications, content management
          systems, analytics platforms, e-commerce, and more — especially when
          the data structure is flexible or changes frequently.
          <br />
          <br />
          MongoDB হলো একটি NoSQL ডেটাবেইস, যেটা traditional row-column table
          ব্যবহার না করে ডেটা document আকারে সংরক্ষণ করে।
          <br />
          প্রতিটি ডেটা JSON-এর মতো (BSON ফরম্যাটে) থাকে — যেটা খুবই flexible ও
          dynamic। এজন্য এটি মডার্ন ওয়েব অ্যাপ্লিকেশন এর জন্য খুব উপযুক্ত।
          <br />
          🔹 MongoDB-এর প্রধান বৈশিষ্ট্য:
          <br />
          * Schema-less: ডেটা সংরক্ষণের আগে কোনো ফিক্সড স্ট্রাকচার লাগেনা।
          <br />
          * Document-based: প্রতিটি ডেটা থাকে JSON-এর মতো ডকুমেন্টে।
          <br />
          * দ্রুত পারফরম্যান্স: ডেটা রিড/রাইট খুব দ্রুত হয়।
          <br />
          * Horizontal scaling: অনেক বেশি ডেটা একাধিক সার্ভারে ভাগ করে রাখা যায়।
          <br />
          * Replication & Sharding: High availability ও scalability নিশ্চিত করে।
          <br />
          MongoDB ব্যবহার হয় real-time অ্যাপ, CMS, ই-কমার্স, ডেটা অ্যানালাইসিসের
          মতো জায়গায় — যেখানে ডেটা স্ট্রাকচার ফ্লেক্সিবল অথবা ঘন ঘন পরিবর্তনশীল।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          04. How Does MongoDB Differ From{" "}
          <span className="font-bold">Traditional Relational Databases?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          MongoDB is a NoSQL (non-relational) database, whereas traditional
          databases like MySQL or PostgreSQL are relational. Here are the key
          differences:
          <br />
          🔹 1. Data Structure:
          <br />
          * MongoDB stores data in JSON-like documents (called BSON) — flexible
          and schema-less.
          <br />
          * Relational DBs use tables with rows and columns, with a fixed
          schema.
          <br />
          🔹 2. Schema Flexibility:
          <br />
          * MongoDB allows you to store different fields in different documents
          — very flexible.
          <br />
          * Relational DBs require a strict schema — every row must match the
          table structure.
          <br />
          🔹 3. Relationships:
          <br />
          * MongoDB uses embedded documents or references to relate data — more
          like nesting.
          <br />
          * Relational DBs use foreign keys and joins to link multiple tables.
          <br />
          🔹 4. Scalability:
          <br />
          * MongoDB is built for horizontal scaling — better for handling big
          data and high traffic.
          <br />
          * Relational DBs usually scale vertically, which can be more limited
          and costly.
          <br />
          🔹 5. Use Cases:
          <br />
          * Use MongoDB for real-time apps, e-commerce, analytics, or
          unstructured data.
          <br />
          * Use Relational DBs for banking, ERP, or apps with complex
          relationships and ACID transactions.
          <br />
          So, MongoDB is chosen for speed, flexibility, and scalability, while
          relational databases are preferred where data integrity and structure
          are critical.
          <br />
          <br />
          MongoDB হলো একটি NoSQL ডেটাবেইস, আর traditional ডেটাবেইস যেমন MySQL বা
          PostgreSQL হলো relational ডেটাবেইস। নিচে মূল পার্থক্যগুলো দেওয়া হলো:
          <br />
          🔹 ১. ডেটার গঠন (Structure):
          <br />
          * MongoDB ডেটা রাখে JSON-এর মতো ডকুমেন্ট আকারে (BSON) — অনেক বেশি
          ফ্লেক্সিবল।
          <br />
          * Relational DB ডেটা রাখে টেবিল, রো এবং কলাম আকারে — ফিক্সড
          স্ট্রাকচার।
          <br />
          🔹 ২. Schema Flexibility:
          <br />
          * MongoDB তে আলাদা ডকুমেন্টে আলাদা ফিল্ড থাকতে পারে — অনেক ফ্লেক্সিবল।
          <br />
          * Relational DB তে সব রো-তে একি ধরণের ফিল্ড থাকতে হয় — স্কিমা
          স্ট্রিক্ট।
          <br />
          🔹 ৩. সম্পর্ক (Relationship):
          <br />
          * MongoDB তে ডেটা nested করা যায় বা রেফারেন্স দিয়ে কানেক্ট করা হয়।
          <br />
          * Relational DB তে foreign key ও JOIN ব্যবহার করে টেবিলগুলো যুক্ত করা
          হয়।
          <br />
          🔹 ৪. Scalability:
          <br />
          * MongoDB সহজেই horizontal scale করা যায় — multiple server এ চালানো
          যায়।
          <br />
          * Relational DB সাধারনত vertical scale করে — একটাই server বড় করতে হয়।
          <br />
          🔹 ৫. ব্যবহারের ক্ষেত্র (Use Cases):
          <br />
          * MongoDB ভালো কাজ করে যেখানে unstructured data বা real-time অ্যাপ
          থাকে।
          <br />
          * Relational DB দরকার হয় যেখানে complex relation এবং strong data
          consistency দরকার হয় — যেমন ব্যাংকিং।
          <br />
          সংক্ষেপে: MongoDB বেশি দ্রুত, ফ্লেক্সিবল ও স্কেলযোগ্য, আর Relational
          DB ভালো যখন structure ও data accuracy দরকার।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. Why do we use{" "}
          <span className="font-bold">Node MongoDB with React</span> without
          Mysql?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          We often use Node.js with MongoDB (instead of MySQL) in React
          applications because of the following reasons:
          <br />
          🔹 JavaScript Everywhere: Node.js (backend), React (frontend), and
          MongoDB (NoSQL) all use JavaScript/JSON. This allows full-stack
          development using one language, which improves development speed and
          consistency.
          <br />
          🔹 MongoDB is schema-less and flexible: Unlike MySQL, MongoDB is a
          NoSQL database, so we can store dynamic or unstructured data easily —
          ideal for fast-changing applications like e-commerce or real-time
          apps.
          <br />
          🔹 Faster development: Node.js is non-blocking and event-driven, which
          makes it perfect for building scalable, high-performance APIs that
          React apps consume. MongoDB pairs well with Node due to native drivers
          and JSON-like structure.
          <br />
          🔹 Better for modern web apps: MongoDB handles large volumes of data,
          nested objects, and flexible document structures — which suit modern
          frontend frameworks like React.
          <br />
          That said, MySQL is still great for complex relational data and strict
          schemas — but MongoDB is often preferred for faster, scalable, and
          JavaScript-friendly projects.
          <br />
          <br />
          React অ্যাপে আমরা সাধারণত Node.js এবং MongoDB ব্যবহার করি কারণ:
          <br />
          🔹 একই ভাষা — JavaScript: React (frontend), Node.js (backend), এবং
          MongoDB — এই তিনটিই JavaScript বা JSON ব্যবহার করে। এতে একই ভাষায় পুরো
          প্রজেক্ট করা যায়, ফলে ডেভেলপমেন্ট সহজ ও দ্রুত হয়।
          <br />
          🔹 MongoDB ফ্লেক্সিবল এবং schema-less: MySQL এর মতো ফিক্সড টেবিল নেই,
          MongoDB তে আপনি ডাইনামিক ডেটা সহজেই সংরক্ষণ করতে পারেন — যেমন
          ecommerce বা real-time অ্যাপে দরকার হয়।
          <br />
          🔹 Node.js এর পারফরম্যান্স ভালো: Node.js ইভেন্ট-ড্রিভেন ও নন-ব্লকিং,
          তাই স্কেলেবল API তৈরি করা যায় — যেটা React ক্লায়েন্ট সহজে ব্যবহার করতে
          পারে। MongoDB এর সাথে Node ভালোভাবে কাজ করে কারণ MongoDB JSON এর মতো
          ডেটা ফরম্যাট ব্যবহার করে।
          <br />
          🔹 মডার্ন অ্যাপের জন্য উপযুক্ত: MongoDB তে nested ডেটা, বড় ভলিউম, আর
          ফ্লেক্সিবল স্ট্রাকচার ভালোভাবে হ্যান্ডেল করা যায় — যা React-এর মতো
          মডার্ন ফ্রেমওয়ার্কের সাথে ভালো যায়।
          <br />
          তবে, যদি ডেটা খুব relational হয় এবং strict structure দরকার হয়, তখন
          MySQL ভালো — কিন্তু দ্রুত, ফ্লেক্সিবল ও JavaScript-based প্রজেক্টের
          জন্য Node + MongoDB বেশি ব্যবহার হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          06. How does MongoDB <span className="font-bold">store</span> data?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          MongoDB stores data as documents, which are saved in collections.
          <br />
          Each document is stored in BSON format (Binary JSON), which is similar
          to JSON but more efficient and supports additional data types like
          `Date`, `ObjectId`, etc.
          <br />
          🔹 Storage Structure:
          <br />
          1. Database → contains multiple collections
          <br />
          2. Collections → contain multiple documents
          <br />
          3. Documents → store the actual data in key-value pairs
          <br />
          MongoDB stores these documents on disk in BSON format, and uses an
          internal storage engine (like WiredTiger) to manage data files,
          memory, and indexes efficiently.
          <br />
          So in summary, MongoDB stores flexible, semi-structured data as BSON
          documents inside collections, allowing fast queries, scalability, and
          schema flexibility.
          <br />
          <br />
          MongoDB ডেটা document আকারে সংরক্ষণ করে, এবং এই document গুলো
          collection-এর মধ্যে রাখা হয়।
          <br />
          প্রতিটি document BSON (Binary JSON) ফরম্যাটে সংরক্ষিত হয়, যেটা JSON-এর
          মতো কিন্তু আরও দ্রুত এবং বেশি ডেটা টাইপ সাপোর্ট করে — যেমন `Date`,
          `ObjectId` ইত্যাদি।
          <br />
          🔹 স্টোরেজ স্ট্রাকচার:
          <br />
          1. Database → এক বা একাধিক collection রাখে
          <br />
          2. Collection → এক বা একাধিক document রাখে
          <br />
          3. Document → মূল data রাখে key-value format এ
          <br />
          MongoDB এই ডকুমেন্টগুলোকে ডিস্কে BSON আকারে সংরক্ষণ করে, এবং এর ভিতরের
          storage engine (যেমন WiredTiger) এর মাধ্যমে ডেটা ফাইল, মেমোরি, এবং
          ইনডেক্স ম্যানেজ করে।
          <br />
          সংক্ষেপে: MongoDB ডেটা রাখে BSON ডকুমেন্ট হিসেবে collection-এর ভিতরে,
          যা flexible, fast, এবং schema-less স্টোরেজ দেয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is a <span className="font-bold">collection</span> in
          MongoDB?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In MongoDB, a collection is like a table in relational databases, but
          it's more flexible.
          <br />
          A collection is a group of documents, and each document is a record in
          BSON (Binary JSON) format.
          <br />
          Unlike tables in SQL databases, collections:
          <br />
          * Don’t require a fixed schema — documents in the same collection can
          have different fields.
          <br />
          * Are created automatically when you insert the first document.
          <br />
          * Allow storing data that changes structure over time.
          <br />
          So, a collection is the main container in MongoDB where related data
          is grouped together — just like a folder holds multiple files.
          <br />
          <br />
          MongoDB-তে collection হলো একটি document-এর গ্রুপ, যেটা প্রায়
          relational database-এর টেবিলের মতো, কিন্তু অনেক বেশি ফ্লেক্সিবল।
          <br />
          একটি collection-এ থাকে অনেকগুলো document (রেকর্ড), যেগুলো BSON (Binary
          JSON) ফরম্যাটে থাকে।
          <br />
          MongoDB-এর collection এর বৈশিষ্ট্য:
          <br />
          * ফিক্সড schema দরকার হয় না — এক collection-এর document-গুলোতে ভিন্ন
          ভিন্ন ফিল্ড থাকতে পারে।
          <br />
          * প্রথম ডেটা insert করলেই collection নিজে থেকেই তৈরি হয়ে যায়।
          <br />
          * ফিল্ড বা স্ট্রাকচার সময়ের সাথে পরিবর্তন হলেও সমস্যা হয় না।
          <br />
          সোজা করে বললে, collection হলো MongoDB-তে related document রাখার মূল
          জায়গা — একে ধরতে পারেন ফোল্ডার-এর মতো, যেখানে একসাথে অনেক ফাইল থাকে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          08. What is the <span className="font-bold">primary key</span> in
          MongoDB?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In MongoDB, the primary key is the `_id` field. <br />
          Every document in a MongoDB collection must have a unique `_id` value.
          This field acts as the unique identifier for each document — just like
          a primary key in relational databases.
          <br />
          By default, if you don’t manually provide `_id`, MongoDB automatically
          generates a unique ObjectId for it.
          <br />
          🔹 Key Points:
          <br />
          * `_id` is automatically indexed — which makes lookups by `_id` very
          fast. <br />
          * `_id` must be unique within a collection. <br />
          * You can use your own custom value as `_id`, but it must be unique.
          <br />
          So in MongoDB, _id is the default and mandatory primary key, and it
          ensures that each document can be uniquely identified and accessed.
          <pre>{`
🔹 Example:
{
  _id: ObjectId("64f1c77d82a7fc21cdb7f9b3"),
  name: "Alice",
  age: 28
}
`}</pre>
          <br />
          DB-তে primary key হিসেবে কাজ করে `_id` ফিল্ড। <br />
          প্রতিটি document-এ অবশ্যই একটি unique `_id` থাকতে হয়। এই `_id` ফিল্ডই
          প্রতিটি ডেটাকে unique ভাবে চিনে রাখে, ঠিক relational ডেটাবেইসের
          primary key এর মতো।
          <br />
          যদি আপনি নিজে `_id` না দেন, তাহলে MongoDB অটোমেটিকভাবে একটি ObjectId
          তৈরি করে দিয়ে দেয়।
          <br />
          🔹 গুরুত্বপূর্ণ পয়েন্ট:
          <br />
          * `_id` ফিল্ডে unique মান থাকতে হবে। <br />
          * এটি MongoDB অটো-ইনডেক্স করে, ফলে `_id` দিয়ে ডেটা খুঁজে পাওয়া খুব
          দ্রুত হয়। <br />
          * চাইলে আপনি নিজের মতো করে `_id` সেট করতে পারেন, কিন্তু তা ইউনিক হতে
          হবে।
          <br />
          সংক্ষেপে: MongoDB-তে `_id` ফিল্ডটাই default এবং বাধ্যতামূলক primary
          key, যার মাধ্যমে প্রতিটি ডেটা ভিন্নভাবে শনাক্ত করা হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          09. What is the <span className="font-bold">$set</span> in MongoDB?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In MongoDB, `$set` is an update operator that allows you to modify the
          value of a specific field in a document. <br />
          If the field already exists, `$set` will update its value. <br />
          If the field doesn’t exist, `$set` will create it and assign a value.
          <br />
          It’s commonly used with the `updateOne()`, `updateMany()`, or
          `findOneAndUpdate()` methods.
          <pre>{`
🔹 Example:
db.users.updateOne(
  { name: "John" },
  { $set: { age: 30, city: "New York" } }
)
`}</pre>
          This command finds the user with the name “John” and sets or updates
          their `age` and `city`.
          <br /> <br />
          MongoDB-তে `$set` হলো একটি update operator, যেটা দিয়ে আপনি ডকুমেন্টের
          নির্দিষ্ট কোনো ফিল্ডের মান পরিবর্তন করতে পারেন।
          <br />
          যদি সেই ফিল্ডটি আগেই থেকে থাকে, তাহলে `$set` সেটা আপডেট করে। আর যদি না
          থাকে, তাহলে এটা নতুন ফিল্ড তৈরি করে তার মান সেট করে।
          <br />
          এটা সাধারণত `updateOne()`, `updateMany()` বা `findOneAndUpdate()` এর
          সাথে ব্যবহার করা হয়।
          <br />
          <pre>{`
🔹 উদাহরণ:
db.users.updateOne(
  { name: "John" },
  { $set: { age: 30, city: "New York" } }
)
`}</pre>
          এখানে, যেই ইউজারের নাম “John” আছে, তার `age` এবং `city` ফিল্ড নতুন করে
          সেট বা আপডেট করে দিচ্ছে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          10. What is <span className="font-bold">mongoose?</span> How does it
          work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Mongoose is an Object Data Modeling (ODM) library for MongoDB and
          Node.js. It helps us interact with MongoDB in an easier and structured
          way by allowing us to define schemas and models for our data.
          <br />
          Instead of writing raw MongoDB queries, Mongoose allows us to use
          JavaScript objects and methods to perform database operations.
          <br />
          🔹 How Mongoose works:
          <br />
          1. Define a Schema — this describes the structure of our data (fields,
          types, validations, etc.).
          <br />
          2. Then, we create a Model from the schema — the model gives us
          methods like `find()`, `save()`, `update()`, and `delete()` to work
          with the actual MongoDB collection.
          <br />
          3. When we use the model to create or retrieve data, Mongoose handles
          the conversion between MongoDB documents and JavaScript objects behind
          the scenes.
          <br />
          So, Mongoose acts as a bridge between our Node.js code and MongoDB,
          making data handling more organized and reliable.
          <br />
          🔹 Example:
          <img
            src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1752243962/mongoose_hcdgmg.png"
            alt=""
          />
          <br />
          Mongoose হলো একটি ODM (Object Data Modeling) লাইব্রেরি, যা MongoDB ও
          Node.js এর জন্য তৈরি।
          <br />
          এটি MongoDB-তে কাজ করাকে আরও সহজ এবং গঠনমূলক করে তোলে — কারণ এতে আমরা
          schema ও model ব্যবহার করে ডেটার কাঠামো নির্ধারণ করতে পারেন।
          <br />
          🔹 Mongoose যেভাবে কাজ করে:
          <br />
          1. প্রথমে আমরা একটি Schema তৈরি করি — যেটা বলে দেয় কোন কোন ফিল্ড
          থাকবে, তাদের টাইপ কী হবে, এবং কী validation দরকার।
          <br />
          2. তারপর সেই schema থেকে একটি Model তৈরি করা হয় — যেটার মাধ্যমে আমরা
          `find()`, `save()`, `update()`, `delete()` এর মতো মেথড ব্যবহার করে
          ডেটা অ্যাকসেস বা মডিফাই করতে পারি।
          <br />
          3. যখন আমরা Model দিয়ে ডেটা তৈরি বা খুঁজে আনি, তখন Mongoose ভিতরে
          ভিতরে MongoDB এর ডকুমেন্টকে JavaScript object এ রূপান্তর করে।
          <br />
          সংক্ষেপে বললে, Mongoose হলো Node.js এবং MongoDB এর মাঝখানের একটি
          ব্রিজ, যা ডেটার গঠন নির্ধারণ করে এবং ডেটা হ্যান্ডলিংকে সহজ ও
          নির্ভরযোগ্য করে তোলে।
        </div>
      </div>
    </Container>
  );
};

export default QnAMongoDB;
