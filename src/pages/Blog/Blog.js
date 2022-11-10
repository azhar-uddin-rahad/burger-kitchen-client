import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
            or Relational Databases, whereas NoSQL is a Non-relational or
            Distributed Database. Comparing SQL vs NoSQL databases, SQL
            databases are table-based databases, whereas NoSQL databases can be
            document-based, key-value pairs, and graph databases. SQL databases
            are vertically scalable, while NoSQL databases are horizontally
            scalable. SQL databases have a predefined schema, whereas NoSQL
            databases use a dynamic schema for unstructured data. Comparing
            NoSQL vs SQL performance, SQL requires specialized DB hardware for
            better performance while NoSQL uses commodity hardware.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
            or Relational Databases, whereas NoSQL is a Non-relational or
            Distributed Database. Comparing SQL vs NoSQL databases, SQL
            databases are table-based databases, whereas NoSQL databases can be
            document-based, key-value pairs, and graph databases. SQL databases
            are vertically scalable, while NoSQL databases are horizontally
            scalable. SQL databases have a predefined schema, whereas NoSQL
            databases use a dynamic schema for unstructured data. Comparing
            NoSQL vs SQL performance, SQL requires specialized DB hardware for
            better performance while NoSQL uses commodity hardware.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
