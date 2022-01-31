### Learning objectives:

- Data types: Booleans, numbers, strings, and more.
- Multidimensional arrays.
- Jagged arrays.
- Search and sort arrays.
- Linked lists.
- Stacks and queues.
- Hash functions and hash tables.
- Trees and graphs.

------

### Course Notes..

</br>

**Data type** is attribute of data that describes the values it can have and how the data can be used.

**Common type of data**:

- Numbers.
- Letters.
- True (1).
- False (0).

</br>

**Data structures** is a way of access, organizing and storing data with:

- <a href="#arrays">Arrays</a>.
- <a href="#linkedlists">Linked lists</a>.
- <a href="#queues">Queues</a>.
- <a href="#stacks">Stacks</a>.
- <a href="#hashmaps">Hash maps</a>.

</br>

**Exact size of data structure depend on**:

- Allocated space for structure.
- Number of pieces of data.
- Size of each data piece.

</br>

<a id="arrays">**Arrays**</a> collection of elements, where each item is identified by and index or key.

| Index | 0    | 1    | 2    | 3    | 4    |
| ----- | ---- | ---- | ---- | ---- | ---- |
| Data  | H    | E    | L    | L    | O    |

**Multidimensional array** is an array with more than two dimensions, the two dimensions are represented by rows and columns.

| (0, 0) Salad   | (0, 1) Soup   | (0, 2) Cheese plate |
| -------------- | ------------- | ------------------- |
| (1, 0) Chicken | (1, 1) Salmon | (1, 2) Lasagna      |

```javascript
var dinnerChoices = [["Salad", "Soup", "Cheese Plate"], ["Chicken", "Salmon", "Lasagna"]]

let appIndex = 0
let mainDishIndex = 1

let firstApp = dinnerChoices[appIndex][0]
let secondApp = dinnerChoices[appIndex][1]
let thirdMainDish = dinnerChoices[appIndex][2]

console.log(firstApp)
console.log(secondApp)
console.log(thirdMainDish)

dinnerChoices[mainDishIndex][0] = "Steak"
console.log(dinnerChoices[mainDishIndex][0])
console.log(dinnerChoices)
```

**Jagged array** can have elements of different dimensions and sized.

**Search array** is a method for finding a target value within a list using for loop to check each index for our desired value.

**Sort array** is a method to sort arrays before array searching  in alphabetical, ascending and descending order.

**Big O notation** notation used to describe the performance or complexity of an algorithm, depend on operations like (Access, Updated, Insert, Search, Delete, Sort).

</br>

**<a id="linkedlists">Linked list</a>** is linear data structure, which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers, linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

</br>

**<a id="stacks">Stack</a>** is an ordered series of objects just like a list, but its intended use is slightly different. We push objectives onto the stack and pop objects off of it.

example: Consider plates stacked over one another. The plate which is at the top is the first one to be removed, the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO (Last In First Out)/ FILO (First In Last Out) order.

</br>

**<a id="queues">Queue</a>** is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). 

example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

</br>

**<a id="hashmaps">Associative arrays</a>** These are special kind of arrays, where indexing can be numeric or any other data type also called map or dictionaries.

**Hashing** is a technique to convert a range of key values into a range of indexes of an array.

**Hash Table** is an implementation of the associative array abstract data structure.

```python
# Key: State
# Value: Capital
statesToCapitals = {}

statesToCapitals["Texas"] = "Austin"
statesToCapitals["New York"] = "Albany"

print(statesToCapitals["New York"])
```

</br>

**Sets** are collection of unique items as order doesn't matter with no duplicated elements.

```python
primaryColors = frozenset(["red", "blue", "yellow"])

color = "green"

if color.lower() in primaryColors:
    print(color + " is a primary color")
else:
    print(color + " is not a primary color")

letters = set(['a', 'b'])
letters.add('c')
print(letters)
```

</br>

**Tree** which elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

</br>

**Heaps** is a data structure implemented as a binary tree, Heaps can be of two types:

- Max-Heap: the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

- Min-Heap: the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.


---

**Course Link:** [Programming Foundations: Data Structures](https://www.linkedin.com/learning/programming-foundations-data-structures-2)

<h5 id="certificate">Certificate</h5>
<p align="center">
  <img  src="https://i.ibb.co/0VfrTGr/Programming-Foundations-Data-Structures.jpg" width="700">
</p>

