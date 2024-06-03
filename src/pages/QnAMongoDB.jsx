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
          In MongoDB, the $set operator is used to replace the value of a field
          with a specified value. $set uses to update or create fields within a
          document. <br />
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
          The purpose of a database is to efficiently and securely store,
          manage, and retrieve data. Databases serve as organized repositories
          for structured or unstructured information that can be accessed,
          manipulated, and analyzed by various applications or users. Here are
          some key purposes and functions of databases.
          <br />
          i. Data Storage <br />
          ii. Data Retrieval <br />
          iii. Data Manipulation <br />
          iv. Data Integrity <br />
          v. Concurrency Control <br />
          vi. Security <br />
          vii. Scalability and Performance <br />
          viii. Data Analysis and Reporting
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
          Database design creates the blueprint for the entire database system,
          covering its architecture, organization, and implementation phases.{" "}
          <br />
          Database schema design specifically focuses on defining the structure
          and organization of individual tables within the database, specifying
          attributes, data types, constraints, and relationships.
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
          Mongoose is a MongoDB object modeling tool designed to work in an
          asynchronous environment. It provides an elegant way to interact with
          MongoDB databases using Node.js. <br />
          How Mongoose Works: <br />
          i. Schema Definition: We define a schema using Mongoose's Schema
          class. A schema defines the structure of your data, including fields,
          types, and validation rules. <br />
          ii. Model Creation: We create a model by compiling the schema into a
          constructor function using mongoose.model(). The model represents a
          MongoDB collection. <br />
          iii. Document Instances: We create document instances (records) using
          the model constructor. Each instance corresponds to a document in the
          collection. <br />
          iv. CRUD Operations: We can perform CRUD operations (create, read,
          update, delete) on documents using the model methods. <br />
          v. Middleware Hooks: We can attach middleware functions to the schema
          to handle events like pre-save or post-save. <br />
          vi. Connection: Mongoose establishes a connection to the MongoDB
          server using the mongoose.connect() method. <br />
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
          Some possible reasons are: <br />
          - Node, MongoDB and React have a similar data model, which makes it
          easier to transfer data between the front-end and the back-end. <br />
          - Using Node MongoDB with React means that the entire stack is based
          on JavaScript. <br />
          - MongoDB's popularity in the JavaScript and Node.js communities
          ensures strong community support and resources. <br />- MongoDB's
          JSON-like data format aligns well with JavaScript and React,
          simplifying data handling.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. How Does MongoDB Differ From{" "}
          <span className="font-bold">Traditional Relational Databases?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          MongoDB is a document-oriented NoSQL database. Unlike traditional
          relational databases, which use tables to store data, MongoDB stores
          data in collections of JSON-like documents, where each document can
          have a different structure. MongoDB is an open-source database that
          stores, manages, and retrieves large amounts of data. It is a document
          or NoSQL database because it does not store information in the form of
          tables. MongoDB is schema-less and non-relational, and it does not use
          SQL as a query language.
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
          A collection in MongoDB is a group of documents that are similar in
          structure and purpose. It is equivalent to a table in a relational
          database. Collections allow us to organize and store related documents
          and offers flexibility in document structure, supports powerful
          querying, indexing, and scalability through sharding and replication.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. How does MongoDB <span className="font-bold">store</span> data?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          MongoDB stores data as BSON documents, which are binary
          representations of JSON-like data. MongoDB organizes documents into
          collections, and supports features like indexing, atomic operations
          etc.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. What is the <span className="font-bold">primary key</span> in
          MongoDB?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A primary key is a field that uniquely identifies each document in a
          MongoDB collection. By default, MongoDB uses the _id field as the
          primary key. The _id field contains a unique ObjectID value that is
          automatically generated when a document is inserted. However, we can
          also specify our own value for the _id field, as long as it is unique
          and follows the rules for ObjectID.
        </div>
      </div>
    </Container>
  );
};

export default QnAMongoDB;
