### Learning objectives:

- What are design patterns?
- Encapsulating code that varies with the Strategy pattern.
- The limitations of inheritance.
- Using the Adapter pattern.
- Implementing the Observer pattern.
- Extending behavior with composition and the Decorator pattern.
- Encapsulating iteration with the Iterator pattern.
- Object creation with the Factory Method pattern.
- Using design principles to guide your object-oriented design.
---

### Course Notes..

</br>



**Design Pattern** is an approach to thinking about software design that incorporates the experience of developers who've had similar problems.

</br> 

**Benefits of Design Patterns**:

- Don't reinvent the wheel.

- Building resilient code.

- Give us packaged up design insight and experience.

- Preparing for future additions.

- Provide paths to solutions for some of the most common object-oriented design conundrums.

- They're solutions developed over time through trial and error that are well-documented and can be applied to your specific design problem. 

  </br>

**This course focus on these design patterns:**

- <a href="#strategy">Strategy pattern</a>
- <a href="#adapter">Adapter pattern</a>
- <a href="#observer">Observer pattern</a>
- <a href="#decorator">Decorator pattern</a>
- <a href="#iterator">Iterator pattern</a>
- <a href="#factory">Factory pattern</a>

*For more patterns review **Head First Design Patterns** book.*

</br>
</br>

**1. <a id="strategy">Strategy pattern</a>** defines a family of algorithms, encapsulates each one and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

One class inheriting from another class if they share an IS-A relationship, separate classes will be called strategies.

***Example:***

 *You need to go to the airport. You can catch a bus, order a cab, or get on your bicycle. These are your transportation strategies. You can pick one of the strategies depending on factors such as budget or time constraints.*

  </br>  </br>

**2. <a id="adapter">Adapter Pattern**</a> used to convert the interface of a class into another interface that clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. 

You can create an *adapter*. This is a special object that converts the interface of one object so that another object can understand it.

***Example:***

*The power plug and sockets standards differentiate in different countries. By using a power plug adapter, you can use American socket or European plug.*

  </br>  </br>


**3. <a id="observer">Observer pattern**</a> This pattern defines a one-to-many dependency between objects so that when on object changes state, all of its dependents are notified and updated automatically.

Any object can send a request to subscribe to the publisher object. When the request is received by the publisher, the requesting object immediately becomes a subscriber. Any object can unsubscribe at any time by making a request to the publisher. 

***Example:***

If you subscribe to a newspaper or magazine, you no longer need to go to the store to buy it. As long as you stay subscribed, you get each issue. You can unsubscribe at any time, and you'll stop receiving issues

  </br>  </br>

**4. <a id="decorator">Decorator pattern</a>** attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternatives to sub-classing for extending functionality.

Extending a class when you want to edit an object’s behavior. 

***Example:***

We have a coffee shop and may add new drinks in our menu, so we want to leave our design open for new beverage types and condiments but closed in the sense that we don't want to touch existing types.

  </br>  </br>

**5. <a id="iterator">Iterator pattern**</a> provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Iterator is way to access the elements of a collection object in sequential manner.

***Example:***

In media players, we have a list of songs listed and we can play the song by passing to the songs list and select desired song. 

  </br>  </br>

**6. <a id="factory">Factory pattern**</a> defines an interface for creating an object, but lets sub-classes decide which class to instantiate. Factory method lets a class defer instantiation to sub-classes.

Factory pattern allows the sub-classes to choose the type of objects to create.

***Example:***

If you are developing an application using NoSQL database, If in future you need to change database to SQL, you will need to modify all your code, if you haven’t written your code following factory design pattern.

  </br>  </br>

**When apply patterns**:

- Use only when you see the need for one.

- Simple is they key, not how can I apply a pattern to this problem.

---

**Course Link:** [Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img922/9193/GSCyGA.png" width="700">
</p>

