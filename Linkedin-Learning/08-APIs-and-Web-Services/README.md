### Course Notes..

</br>

**API**
is the communication and data sharing mechanism between two different applications or systems, seems like web services but more modern and dynamic.


**API Principles:** 
 1. URI.
 2. Operations (GET - POST - PUT - DELETE).
 3. Formats (HTML - XML - Plain Text).
 4. Stateless (Server will not store any state about the client).

**Web services types:**
- SOAP (Simple Object Access Protocol):
Sends messages using XML contains data in certain format.
- Restful (Representational State Transfer):
Uses HTTP access resources.

**Advantages of web services:**
- Reuseability of code that can be used in multiple systems.
- Language Transparency enables to connect to web service with language.
- Usability so it will be used to many platforms.
- Deployability as it available globally.

**Considerations of web services:**
- Latency:
Time it take a request to return a response.
- Partial Failure:
When server fails to respond.

**Securing web services:**
- Authentication:
Validates identity of client
- Authorization:
Determine level of client's access.

**GraphQL**
is query language for APIs, allows you to retrieve data from the data store. 

**GraphQL Type System:**
- Schema (Set of types)
- Queries (Obtain information about specific fields from objects)
- Resolvers (retrieve the data)

**Basic request to GraphQL:**
- Query (Type - Name).
- Mutation (Modifies data in server-side).
- Subscription (Notify changes in data in real-time).

**For more courses about Web Services check the list below:**
 - Programming Foundation: Web Security.
 - Web Security: OAuth and OpenID Connect.


### To run the GraphQL server test
```
npm install
```

To run the server

```
node server.js
```

Open

```
localhost:4000/graphql
```

type 

```html
{
	hello
}
```

Click on ```execute query```

Response will be 

```html
{
  "data": {
    "hello": "Hello world!"
  }
}
```

##### **Document an API:** [Swagger](https://petstore.swagger.io/)

---

**Course Link:** [Programming Foundations: APIs and Web Services](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img924/4921/LQPPtb.png" width="700">
</p>

