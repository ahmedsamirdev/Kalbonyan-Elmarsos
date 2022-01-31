### Learning objectives:

- Measuring algorithm performance.
- Working with data structures such as arrays, stacks, and queues.
- Looping and recursion.
- Sorting data.
- Searching data.
- Filtering and value counting with hash tables.

------

### Course Notes..

</br>



**Algorithms** are basically processes that describe how to perform certain tasks. No matter what kind of applications you build, you're bound to come across situations that require the use of one or more algorithms to get the job done. 
</br>
</br>

**Algorithms Characteristics:**

- **Complexity**
  - Space complexity: How much memory does it require?
  - Time complexity: How much time does it take to complete?
- **Input and output**
  - What does algorithm accept, what are the results?
- **Classification** some algorithms work on their data sets in sequential fashion:
  - Serial/parallel, exact/approximate, deterministic/non-deterministic.

</br>
</br>

**Common algorithms**

- <u>Search algorithms</u>: Find specific data in a structure.
- <u>Sorting algorithms</u>: Apply a sort order to a dataset.
- <u>Computational algorithms</u>:  Give set of data, calculate another.
- <u>Collection algorithms</u>: Work with collections of data as count, navigate among them, filter them out).

</br>
</br>

**Measuring algorithm performance**

- Measure how algorithm responds to dataset size.

- Big-O notation classify performance as input size grows, "O" indicates time scale to perform an operation.

  | Notation   | Description   | Example                                                      |
  | :--------- | ------------- | ------------------------------------------------------------ |
  | O(1)       | Constant time | Looking up a single element in an array                      |
  | O(log n)   | Logarithmic   | Finding an item in a sorted array with a binary search.      |
  | O(n)       | Linear Time   | Searching an unsorted array for a specific value.            |
  | O(n log n) | Log-linear    | Complex sorting algorithms like heap sort and merge sort.    |
  | O(n²)      | Quadratic     | Simple sorting algorithms, such bubble sort, selection sort, and insertion sort. |
  | </br>      |               |                                                              |
  | </br>      |               |                                                              |

**Recursion** is when a function call itself within its own code.

```javascript
function f() {
	...
	f() 
}
```

**Notes on Recursion**

- Recursive functions need to have a breaking condition. 
- This prevents infinite loops.
- Each time the function is called, the old arguments are saved (calls stack).

```python
def countdown
if x == 0:
    print("Done")
    return
else:
    print(x, "...")
    countdown(x-1)
    
>> countdown(5)    
```

</br>
</br>

**Sorting Data Algorithms**

**The bubble sort** works by repeatedly swapping the adjacent elements if they are in wrong order.

- Very simple to understand.
- Performance: O(n²)
- Other sorting algorithms are much better.

```python
def bubbleSort(dataset):
    # start with the array length and decrement each time
    for i in range(len(dataset)-1, 0, -1):
        # examine each item pair
        for j in range(i):
            # swap items if needed
            if dataset[j] > dataset[j+1]:
                temp = dataset[j]
                dataset[j] = dataset[j+1]
                dataset[j+1] = temp

        print("Current state: ", dataset)

def main():
    list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
    print("Starting state: ", list1)
    bubbleSort(list1)
    print("Final state: ", list1)

if __name__ == "__main__":
    main()
```

</br>
</br>

**The merge sort** divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

- Divide-and-conquer algorithm.
- Breaks a dataset into individual pieces and merges them.
- Performs well on large sets of data.
- Has performance of O(n log n).

```python
items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def mergesort(dataset):
    if len(dataset) > 1:
        mid = len(dataset) // 2
        leftarr = dataset[:mid]
        rightarr = dataset[mid:]

        # recursively break down the arrays
        mergeSort(leftarr)
        mergeSort(rightarr)

        # now perform the merging
        i=0 # index into the left array
        j=0 # index into the right array
        k=0 # index into merged array

        # while both arrays have content
        while i < len(leftarr) and j < len(rightarr):
            if leftarr[i] < rightarr[j]:
                dataset[k] = leftarr[i]
                i += 1
            else:
                dataset[k] = rightarr[j]
                j += 1
            k += 1

        # if the left array still has values, add them
        while i < len(leftarr):
            dataset[k] = leftarr[i]
            i += 1
            k += 1

        # if the right array still has values, add them
        while j < len(rightarr):
            dataset[k] = rightarr[j]
            j += 1
            k += 1

# test the merge sort with data
print(items)
mergesort(items)
print(items
```

</br>
</br>

**The Quicksort** It picks an element as pivot and partitions the given array around the picked pivot.

- Divide-and-conquer algorithm.
- Breaks a dataset into individual pieces and merges them.
- Worst case is O(n²) when data is mostly sorted already.
- Has performance of O(n log n).

```python
items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]

def quickSort(dataset, first, last):
    if first < last:
        # calculate the split point
        pivotIdx = partition(dataset, first, last)

        # now sort the two partitions
        quickSort(dataset, first, pivotIdx-1)
        quickSort(dataset, pivotIdx+1, last)


def partition(datavalues, first, last):
    # choose the first item as the pivot value
    pivotvalue = datavalues[first]
    # establish the upper and lower indexes
    lower = first + 1
    upper = last

    # start searching for the crossing point
    done = False
    while not done:
        # advance the lower index
        while lower <= upper and datavalues[lower] <= pivotvalue:
            lower += 1

        # advance the upper index
        while datavalues[upper] >= pivotvalue and upper >= lower:
            upper -= 1

        # if the two indexes cross, we have found the split point
        if upper < lower:
            done = True
        else:
            # exchange the two values
            temp = datavalues[lower]
            datavalues[lower] = datavalues[upper]
            datavalues[upper] = temp

    # when the split point is found, exchange the pivot value
    temp = datavalues[first]
    datavalues[first] = datavalues[upper]
    datavalues[upper] = temp

    # return the split point index
    return upper


# test the merge sort with data
print(items)
quickSort(items, 0, len(items)-1)
print(items)
```

</br>
</br>

**Searching Algorithms**

**Unordered list search** compare x with first element in array. If element is found at first position, return it. Else keep recurrence for remaining array and x.

```python
items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def find_item(item, itemlist):
    for i in range(0, len(itemlist)):
        if item == itemlist[i]:
            return i
    
    return None

print(find_item(87, items))
print(find_item(250, items))
```

</br>
</br>

**Ordered list search (Binary Search)** search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

```python
items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]

def binarysearch(item, itemlist):
    # get the list size
    listsize = len(itemlist) - 1
    # start at the two ends of the list
    lowerIdx = 0
    upperIdx = listsize

    while lowerIdx <= upperIdx:
        # calculate the middle point
        midPt = (lowerIdx + upperIdx)// 2

        # if item is found, return the index
        if itemlist[midPt] == item:
            return midPt
        # otherwise get the next midpoint
        if item > itemlist[midPt]:
            lowerIdx = midPt + 1
        else:
            upperIdx = midPt - 1

    if lowerIdx > upperIdx:
        return None


print(binarysearch(23, items))
print(binarysearch(87, items))
print(binarysearch(250, items))
```

</br>
</br>

**To determine if a list is sorted**:

```python
items1 = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
items2 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def is_sorted(itemlist):
    return all(itemlist[i] <= itemlist[i+1] for i in range(len(itemlist)-1))

print(is_sorted(items1))
print(is_sorted(items2))
```

---

**Course Link:** [Programming Foundations: Algorithms](https://www.linkedin.com/learning/programming-foundations-algorithms/algorithms-power-the-world)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img922/8444/YnItwr.png" width="700">
</p>

