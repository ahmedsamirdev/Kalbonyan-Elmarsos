### Learning objectives:

- Relational databases.
- Keys and unique values.
- Planning a database.
- Creating tables.
- Defining relationships.
- Normalization and denormalization.
- Writing queries.
- Sorting results.
- Joining tables.
- Modifying data.

------

### Course Notes..

</br>

**SQL Database** 

- Provide structure for data.
- Allow enforcement of rules for data.
- Protect data from unauthorized access or changes.

**DBMS** is a database management system used to store, retrieve, and run queries on data, works as interface between end-user and database.
</br>

**Relational database (SQL)** made up of relations or tables:

![image-20211012021513058](https://i.ibb.co/prPYCtX/1.png)

- **Keys & ID - unique values** appear only once within a given column to refer to one record.
- **Relationships** help tell the database that particular records should be associated with each other (one-to-many, many-to-many, one-to-one).
- **Transaction** or **ACID** stands for Atomic - Consistent - Isolated - Durable which is the requirements handled by DBMS.
  </br>

**SQL** stands for Structured - Query - Language:

- It allows to write statements to help how to interact with data (In this role SQL called DML).
- Manage database to create or modify and control access to tables (In this role SQL called DDL and DCL).
  </br>

**SQL Statement**

``SELECT FirstName, LastName FROM Customers;``

![image-20211012020546359](https://i.ibb.co/9Z5KG1N/2.png)

- With previous clause we want to show the first name and last name for every record in customers table.
  </br>

**ER Diagram** stands for entity relationship diagram uses tables, fields, and relationships to plan a database.

- Database Needs to keep track of (ex. Customers - Dishes - Events - Orders - Reservations - Birthdays - Favorite Dishes).
  </br>

**Data Types** we can store in our fields:

- **Strings**: alphanumeric characters and text.
  - CHAR: fixed number of characters.
  - VARCHAR: variable length of characters up to a maximum length.

- **Numbers**: 
  - Integers.
  - Double precision.
  - Floating point.
  - Decimals.

![image-20211012022955577](https://i.ibb.co/HKcSLQr/image-20211012022955577.png)

We can use ``NULL`` as field has no value.
</br>
</br>

**Relationships** is how the tables and records are connected to each other.

- **One-to-many**: connects one piece of data, one row of a table to one or more other pieces of data.
- **Many-to-many**: connects more than one thing with more than one other thing.
- **One-to-one**: connects only one row with only one other row.
  </br>

**Referential integrity** databases will be aware of the relationship and will not let you or another user modify data in a way that violates that relationship.
</br>
</br>

**Normalization** rules help us to reduce redundancy and improve the integrity of our data. 

- First normal form (1NF).
  - values in each cell should be atomic and tables have no repeating groups.
- Second normal form (2NF).
  - no value in our table should depend only on part of a key that can be used to uniquely identify a row.
- Third normal form (3NF).
  -  values shouldn't be stored if they can be calculated from another non-key field.
     </br>

**Denormalization** process of intentionally duplicating information in a table, in violation of normalization rules.
</br>
</br>

**Create table** using a DBMS:

```sql
CREATE TABLE Customers (
    CustomerID INT(6) NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(200) NOT NULL,
    LastName VARCHAR(200) NOT NULL,
    Email VARCHAR(200),
    Address VARCHAR(200),
    City VARCHAR(200),
    State VARCHAR(2),
    Phone VARCHAR(20) NOT NULL,
    Birthday DATE,
    FavoriteDish INT(6) PREFERNCES Dishes(DishID),
    PRIMARY KEY(CustomerID)
);
```

</br>

**Write SQL query** as it will return specific information we ask for:

```sql
SELECT FirstName, LastName FROM Customers;
```

``SELECT`` statement to see information from specific column.

`FROM` followed by table name.

``FirstName`` field name to get its values.

``*`` to get all possible values of that field.

``Customers`` table name.
</br>
</br>

**Narrow query results**

```sql
SELECT FirstName, LastName FROM Customers WHERE FirstName="Taylor";
```

```sql
SELECT * FROM Reservations WHERE `Date` > "2020-02-09" AND `Date` < "2021-02-08";
```

`WHERE` keyword to filter results.
</br>
</br>

**Sorting results**

```sql
SELECT * FROM Dishes ORDER BY `Name` DESC;
```

`ORDER BY` keyword to set order for our results.
</br>
</br>

**Aggregate functions** enable use more than one piece of data to generate a value.

```sql
SELECT COUNT(FirstName) FROM Customers;
```

```sql
SELECT SUM(Price), AVG(Price) FROM Dishes;
```

`COUNT()` to count how many records we have in that field.

`SUM()` to sum our records of that field.

`AVG()` to get average of value.

`MIN()` to get minimum value of the field.

`MAX()` to get maximum value of the field.
</br>
</br>

**Joining tables** connect records across different tables. 

```sql
SELECT FirstName, LastName, FavoriteDish, Dishes.`Name` FROM Customers
JOIN Dishes ON Customers.FavoriteDish = Dishes.DishID;
```

That will enable us to see each customer's favorite dish, showing results with first name, last name, favorite dish and customer name.
</br>
</br>

**Modifying data** to modify data.

```sql
INSERT INTO Customers(FirstName, LastName, PHONE)
VALUES ("Jane", "Smith", "jsmith2021@site.com", "421-124-4214")
```

`INSERT` statement to insert a single or multiple data in a table.
</br>
</br>

**Desktop database** used for smaller solutions and hosted on workstation:

- Microsoft Access.
- FileMaker Pro.

**Enterprise database** used by large number of people and services millions of interactions:

- SAP HANA.
- Oracle.
- Microsoft SQL Server.
  </br>

Following can also be used for thousands of clients:

- MySQL.
- MariaDB.


SQLite can be great for mobile applications.
</br>

**NoSQL Database** can be just a collection of unstructured data to key-value pairs to graphs like the Facebook social graph to objects, geographic data points, and streams of information, like posts and comments on social media websites.

---

**Course Link:** [Programming Foundations: Databases](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img922/7743/aMeh4P.png" width="700">
</p>

