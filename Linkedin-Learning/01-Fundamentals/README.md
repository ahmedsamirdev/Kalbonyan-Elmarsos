### Learning objectives:

- Writing source code.
- Basic statements and expressions.
- Working with numbers and strings.
- Writing conditional code.
- Increasing your efficiency with functions.
- Working with comments.
- Making decisions in code.
- Troubleshooting errors.
- Learning about other languages.

------

### Course Notes..
</br>


**Top 5 programing languages** (2021)

- Java

- Python

- JavaScript

- C++

- C#

</br>

**Variables and data types**

**Variables:**

- Variables cannot be keywords.
- Variable names contains letters, numbers and underscores.
- Spaces are not allowed.
- Variable Names are case-sensitive.



In Python:

```python
cookies = "Sugar"
print(cookies)

>>>Sugar
```

In Java:

```java
String cookie = "Sugar";
System.out.printIn(cookie);

>>>Sugar
```

</br>

**Numbers:**

```python
2 + 3 
>>>5
```

**Float** any number with decimal point. Short for floating-point number (3.44 - 25.97).

</br>

**Strings** can be:

- Letters.
- Numbers.
- Spaces.
- Symbols.

In Python:

```python
message = 'Hi there!'
print(message)

>>>Hi there!
```

</br>

**Comments**

```python
# your comment goes here
```

</br>

**Conditional Code** Any expression that breaks down to either true or false.

`is 4 equal to 2 * 2 => True`

```python
print("Hi!")

name = input("What's your name? ")
print("It's nice to meet you,", name)

answer = input("Are you enjoying the course? ")

if answer == "Yes":
    print("That's good to hear!")

print("Final statement")
```

</br>

**Relational operators**

`operator1 == operator2 => True/False`

| Symbol | Operation                |    Examples    |
| :----: | ------------------------ | :------------: |
|   ==   | Equal to                 | 3 == 3 //True  |
|   !=   | Not equal to             | 3 != 3 //False |
|   <    | Less than                |  3 < 4 //Ture  |
|   >    | Greater than             | 3 > 4 //False  |
|   >=   | Greater than or equal to | 3 >= 3 //True  |
|   <=   | Less than or equal to    | 3 <= 4 //True  |

</br>

**Simple Conditions** using if statement:

```
if condition:
	do something
else:
	do something else
```

example in python:

```python
plant = "Irises"

if plant == "Cacti":
    print(plant, "don't need a lot of water")
else:
    print(plant, "love water")

print("Thanks!")
```

</br>


**Functions** a group of code. To run the code in a function, you must call the function. 

```python
def say_hello():
    print("Hello, friends!")

say_hello()
say_hello()
say_hello()
```

</br>

**Functions Parameters and Arguments**:

- `function_name( parameters )`

- `function_call( arguments )`

```python
def wash_car(amount_paid):
    if (amount_paid == 12):
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")

    if (amount_paid == 6):
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry") 

wash_car(6) 
```



`return` statement consists of the return keyword and the value that the function should return. 

```python
def withdraw_money(current_balance, amount):
    if (current_balance >= amount):
        current_balance = current_balance - amount
        return current_balance

balance = withdraw_money(100, 80)

if (balance <= 50):
    print("We need to make a deposit")
else:
    print("Nothing to see here!")
```



ex. Function In Kotlin:

```kotlin
fun checkGrade(grade: String) {
    if(grade == "A")
    printIn("You aced the class!")
}
```

---

**Course Link:** [Programming Foundations: Fundamentals](https://www.linkedin.com/learning/programming-foundations-fundamentals-3/the-fundamentals-of-programming)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://i.ibb.co/X8dpGzp/Programming-Foundations-Fundamentals.jpg" width="700">
</p>

