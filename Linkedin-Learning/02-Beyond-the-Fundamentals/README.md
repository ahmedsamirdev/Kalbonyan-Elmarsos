### Course Notes..

</br>

**Collections** grouping multiple items together and storing them with a single name, called a variable.
</br>

- **List**: Simple collection that groups pieces of data together in a certain order and assigns the collection a name.

  - ```python
    guests = ['mohamed', 'samir', 'ahmed']
    ```

- **Dictionary**: Let you store related information.

  - ```python
    food = {
    	'appetizer': 'hummus',
    	'dessert': 'ricotta',
    	'entree': 'gyro wraps',
       	}
    ```
  </br>

**Collections in other languages**:

- **Python**: collections can contain any data type and mutable as they can be changed after created.
- **C++**: collection should contain same data type.
- **JavaScript** : collection known as array, mutable.
</br>


**Iteration** repeats same procedure multiple times until it reaches a specified endpoint.

**Loop** code that iterates, moving from beginning to end of the process, then starting over, you need following to get loop:

- Specify the data.
- What should happen to the data during each iteration.
- Indicate when the loop should stop.

**Infinite loop** is bug that can occur when the ending condition is omitted or specified incorrectly.
</br>

**Iterating through collections**

- `for` specify variable name that we can use in each iteration of the loop to reference current value.
- `in` indicate what follows is the set of values we want to iterate through.

```python
spices = ['pepper', 'salt', 'garlic', 'cumin']

for spice in spices:
    
    print(spice) 
```

`while` used to create loop in python.

`i` used as iterator.

```python
// print count to 100 by 5
i = 5
while i <= 100:
    print(i)
    1 += 5
    print('List completed')
```
</br>

**Module** python file that contains code, like variables or functions.

```python
import testmodule

testmodule.mult(10, 5)  /*multiple numbers*/
```

Check [Python Package Index](https://pypi.org/) for more modules.

</br>


**Library** or **package** using multiple modules together so they are distributed and used in a group.

Check [Tensor Flow](https://www.tensorflow.org/), [Pandas](https://pandas.pydata.org/), [NumPy](https://numpy.org/), [SciPy](https://www.scipy.org/) for more libraries.

</br>


**Framework** when a set of code is not just used together but used in a specific way.

Check [Django](https://www.djangoproject.com/), [Flask](https://flask.palletsprojects.com/en/2.0.x/) for more frameworks.

</br>


**Strings** are collection of characters assembled together in a specific way. Those characters could be taken apart and reassembled differently, just like the blocks.

**Concatenation** when multiple strings are combined into a single string.

```python
value = input('Enter a number: ')
print(value + ' is my favorite number')
```
</br>


**Python String Methods**

The following code will convert string to into capitalized string:

```python
text = 'hello'
text.capitalize()

> 'Hello'
```
</br>


**Regular expressions** (Regex) allows you to create a description of a pattern that you want to match.

- To indicate specific text you looking for by enclosing it in slashes. 

  

The following regular expression will identify whether a variable contains five digits in a row:

```python
import re

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

five_digit_expression = r'\d{5}'

print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))
```

</br>

**When planning a program follow**:

- **Style guides** are documentation on approaches to code:
  - [Python Style Guide](https://pep8.org/).
  - [Python Enhancement Proposal](https://www.python.org/dev/peps/).
  - [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html).
  </br>

- **Pseudocode** is writing a description of what you are trying to do using plain language.
```python
If student's grade is greater than or equal to 60
	Print "passed"
else
	Print "failed"
```
</br>

**Input** can be in many different data forms followed by steps created by computer program results in new form which is the **output**.

`input` method request data from user to get new information.

```python
infile = open('values.txt', 'rt')
outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum = 0
for line in infile:
    sum += int(line)
    print(line.rstrip(), file=outfile)
print('\nTotal: ' + str(sum), file=outfile)
outfile.close()
print('Output complete')
```
</br>

**Debugging** is identifying and fixing bugs.

- **Syntax Error** Code that doesn't match the rules of the language.

  - ```python
    if temp < 60
    	print('bring a jacket')
    ```

    Should add `:` in end of line 1.

- **Run-time Error** call a function before defining it.

  - ```python
    checkTemp(60)
    def checkTemp(temp):
        if temp < 60:
    		print('bring a jacket')
    ```

    Should be call the function after.

- **Logic Error** Code that run but doesn't produce the result you expect like a loop.

  - ```python
    i = 10
    while i > 0:
        i += 1
        print(i)
    ```

    Should be `1 -= 1`

---
**Course Link:** [Programming Foundations: Beyond the Fundamentals](https://www.linkedin.com/learning/programming-foundations-beyond-the-fundamentals)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://i.ibb.co/qJSK48f/Programming-Foundations-Beyond-the-Fundamentals.jpg" width="700">
</p>

