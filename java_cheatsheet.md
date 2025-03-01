# Java Data Types & Methods Cheatsheet

- This cheatsheet covers the most commonly used methods for fundamental Java types. You can refer to it when programming.

## Primitive Data Types

| Type      | Size (bits) | Range/Values                        | Example                | Default Value |
| --------- | ----------- | ----------------------------------- | ---------------------- | ------------- |
| `byte`    | 8           | -128 to 127                         | `byte b = 100;`        | 0             |
| `short`   | 16          | -32,768 to 32,767                   | `short s = 500;`       | 0             |
| `int`     | 32          | -2<sup>31</sup> to 2<sup>31</sup>-1 | `int i = 100000;`      | 0             |
| `long`    | 64          | -2<sup>63</sup> to 2<sup>63</sup>-1 | `long l = 100000L;`    | 0L            |
| `float`   | 32          | ~±1.4E-45 to ~±3.4E38               | `float f = 3.14f;`     | 0.0f          |
| `double`  | 64          | ~±4.9E-324 to ~±1.7E308             | `double d = 3.14159;`  | 0.0d          |
| `char`    | 16          | '\u0000' to '\uffff' (0-65535)      | `char c = 'A';`        | '\u0000'      |
| `boolean` | 1 (bit)     | `true` or `false`                   | `boolean flag = true;` | false         |

**Important Notes:**

- Primitive types have **NO METHODS** (they're not objects)
- Stored directly in stack memory (more efficient)
- Use wrapper classes for object-oriented features
- Default values apply to class member variables only

---

## Primitive Wrapper Classes

### 1. Integer (java.lang.Integer)

| Method                 | Description              | Example                           | Output                 |
| ---------------------- | ------------------------ | --------------------------------- | ---------------------- |
| `parseInt(String s)`   | Converts string to int   | `Integer.parseInt("123")`         | `123` (int)            |
| `valueOf(int i)`       | Returns Integer instance | `Integer.valueOf(5)`              | `5` (Integer)          |
| `intValue()`           | Converts Integer to int  | `Integer.valueOf(7).intValue()`   | `7` (int)              |
| `compareTo(Integer i)` | Compares two integers    | `Integer.valueOf(3).compareTo(5)` | `-1`                   |
| `toString()`           | String representation    | `Integer.toString(42)`            | `"42"`                 |
| `equals(Object o)`     | Checks equality          | `Integer.valueOf(5).equals(5)`    | `false` (types differ) |

### 2. Double (java.lang.Double)

| Method                  | Description               | Example                              | Output          |
| ----------------------- | ------------------------- | ------------------------------------ | --------------- |
| `parseDouble(String s)` | Converts string to double | `Double.parseDouble("3.14")`         | `3.14` (double) |
| `valueOf(double d)`     | Returns Double instance   | `Double.valueOf(2.71)`               | `2.71` (Double) |
| `doubleValue()`         | Converts to primitive     | `Double.valueOf(2.71).doubleValue()` | `2.71` (double) |
| `compareTo(Double d)`   | Comparison                | `Double.valueOf(1.1).compareTo(2.2)` | `-1`            |
| `isNaN()`               | Checks NaN value          | `Double.isNaN(Double.NaN)`           | `true`          |

### 3. Boolean (java.lang.Boolean)

| Method                             | Description                | Example                           | Output  |
| ---------------------------------- | -------------------------- | --------------------------------- | ------- |
| `parseBoolean(String s)`           | Converts string to boolean | `Boolean.parseBoolean("true")`    | `true`  |
| `valueOf(boolean b)`               | Returns Boolean instance   | `Boolean.valueOf(true)`           | `true`  |
| `booleanValue()`                   | Returns primitive          | `Boolean.TRUE.booleanValue()`     | `true`  |
| `logicalAnd(boolean a, boolean b)` | Logical AND                | `Boolean.logicalAnd(true, false)` | `false` |
| `logicalOr(boolean a, boolean b)`  | Logical OR                 | `Boolean.logicalOr(true, false)`  | `true`  |

## Strings (java.lang.String)

| Method                          | Description          | Example                        | Output            |
| ------------------------------- | -------------------- | ------------------------------ | ----------------- |
| `length()`                      | String length        | `"Hello".length()`             | `5`               |
| `charAt(int index)`             | Get character        | `"Java".charAt(1)`             | `'a'`             |
| `substring(int begin)`          | Substring            | `"HelloWorld".substring(5)`    | `"World"`         |
| `substring(int begin, int end)` | Substring            | `"HelloWorld".substring(0, 5)` | `"Hello"`         |
| `equals(Object o)`              | Content equality     | `"java".equals("Java")`        | `false`           |
| `toUpperCase()`                 | Uppercase conversion | `"hello".toUpperCase()`        | `"HELLO"`         |
| `toLowerCase()`                 | Lowercase conversion | `"HELLO".toLowerCase()`        | `"hello"`         |
| `replace(char old, char new)`   | Replace characters   | `"hello".replace('l', 'p')`    | `"heppo"`         |
| `split(String regex)`           | Split string         | `"a,b,c".split(",")`           | `["a", "b", "c"]` |

## Arrays

| Field/Method            | Description           | Example                           | Output        |
| ----------------------- | --------------------- | --------------------------------- | ------------- |
| `length`                | Array length          | `int[] arr = {1,2,3}; arr.length` | `3`           |
| `Arrays.toString()`     | String representation | `Arrays.toString(arr)`            | `"[1, 2, 3]"` |
| `Arrays.sort()`         | Sort array            | `Arrays.sort(new int[]{3,1,2})`   | `[1,2,3]`     |
| `Arrays.binarySearch()` | Binary search         | `Arrays.binarySearch(arr, 2)`     | `1`           |

## Common Utility Methods

```java
// Type conversion
Integer num = Integer.valueOf("123");  // String → Integer
String s = Double.toString(3.14);      // double → String

// String formatting
String formatted = String.format("Value: %d", 25);  // "Value: 25"

// Array initialization
int[] numbers = {1, 2, 3};

// List initialization
List<String> names = new ArrayList<>(Arrays.asList("Alice", "Bob"));

// Autoboxing/Auto-unboxing
Integer wrapper = 5;  // autoboxing (int → Integer)
int primitive = wrapper; // unboxing (Integer → int)
```

## Collections Framework

### 1. ArrayList (java.util.ArrayList)

| Method               | Description         | Example                 | Output          |
| -------------------- | ------------------- | ----------------------- | --------------- |
| `add(E e)`           | Add element         | `list.add("Java")`      | `true`          |
| `get(int index)`     | Get element         | `list.get(0)`           | `"Java"`        |
| `remove(int index)`  | Remove element      | `list.remove(0)`        | `"Java"`        |
| `size()`             | List size           | `list.size()`           | `1` (after add) |
| `contains(Object o)` | Check existence     | `list.contains("Java")` | `true`          |
| `clear()`            | Remove all elements | `list.clear()`          | `void`          |

### 2. HashMap (java.util.HashMap<K,V>)

| Method                        | Description             | Example                | Output               |
| ----------------------------- | ----------------------- | ---------------------- | -------------------- |
| `put(K key, V value)`         | Adds key-value pair     | `map.put("A", 1);`     | `1` (previous value) |
| `get(Object key)`             | Returns value for key   | `map.get("A")`         | `1`                  |
| `containsKey(Object key)`     | Checks key existence    | `map.containsKey("B")` | `false`              |
| `containsValue(Object value)` | Checks value existence  | `map.containsValue(1)` | `true`               |
| `keySet()`                    | Returns all keys        | `map.keySet()`         | `[A, B]` (Set)       |
| `entrySet()`                  | Returns key-value pairs | `map.entrySet()`       | `[A=1, B=2]` (Set)   |
| `remove(Object key)`          | Removes key-value pair  | `map.remove("A")`      | `1` (removed value)  |

**Important Notes:**

- Allows `null` keys and values
- No duplicate keys (overwrites values)
- Unordered collection
- Not thread-safe

### 3. HashSet (java.util.HashSet<E>)

| Method               | Description          | Example                 | Output  |
| -------------------- | -------------------- | ----------------------- | ------- |
| `add(E e)`           | Adds element         | `set.add("Apple")`      | `true`  |
| `remove(Object o)`   | Removes element      | `set.remove("Apple")`   | `true`  |
| `contains(Object o)` | Checks existence     | `set.contains("Mango")` | `false` |
| `size()`             | Number of elements   | `set.size()`            | `3`     |
| `clear()`            | Removes all elements | `set.clear()`           | `void`  |
| `isEmpty()`          | Checks empty state   | `set.isEmpty()`         | `true`  |

**Important Notes:**

- Contains unique elements only
- Uses equals() for equality checks
- Unordered collection
- Backed by HashMap internally

### Common Collection Utilities

```java
// HashMap initialization
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

// HashSet initialization
Set<String> fruits = new HashSet<>();
Collections.addAll(fruits, "Apple", "Banana", "Orange");

// Map from List (Java 9+)
Map<String, Integer> quickMap = Map.of("A", 1, "B", 2);

// Set from Array
Set<String> quickSet = new HashSet<>(Arrays.asList("A", "B", "C"));
```

### 4. LinkedList (java.util.LinkedList<E>)

| Method                 | Description              | Example                     | Output   |
| ---------------------- | ------------------------ | --------------------------- | -------- |
| `addFirst(E e)`        | Adds to front            | `list.addFirst("A")`        | `void`   |
| `addLast(E e)`         | Adds to end              | `list.addLast("Z")`         | `void`   |
| `poll()`               | Retrieves & removes head | `list.poll()`               | `"A"`    |
| `peek()`               | Retrieves head           | `list.peek()`               | `"A"`    |
| `descendingIterator()` | Reverse iterator         | `list.descendingIterator()` | Iterator |

**Important Notes:**

- Implements both List and Deque
- Doubly-linked list implementation
- Faster for add/remove operations than ArrayList
- Maintains insertion order

### 5. TreeMap (java.util.TreeMap<K,V>)

| Method              | Description          | Example               | Output   |
| ------------------- | -------------------- | --------------------- | -------- |
| `firstKey()`        | First (lowest) key   | `map.firstKey()`      | `"A"`    |
| `lastKey()`         | Last (highest) key   | `map.lastKey()`       | `"Z"`    |
| `ceilingKey(K key)` | Least key ≥ given    | `map.ceilingKey("C")` | `"C"`    |
| `floorEntry(K key)` | Greatest key ≤ given | `map.floorEntry("M")` | `"L=12"` |

**Important Notes:**

- Red-Black tree implementation
- Sorted by natural ordering or Comparator
- No `null` keys if using natural ordering
- O(log n) time for most operations

### 6. PriorityQueue (java.util.PriorityQueue<E>)

| Method         | Description              | Example           | Output           |
| -------------- | ------------------------ | ----------------- | ---------------- |
| `offer(E e)`   | Inserts element          | `pq.offer(5)`     | `true`           |
| `poll()`       | Retrieves & removes head | `pq.poll()`       | `1` (min)        |
| `comparator()` | Returns comparator       | `pq.comparator()` | `null` (natural) |
| `peek()`       | Retrieves head           | `pq.peek()`       | `1`              |

**Important Notes:**

- Unbounded priority heap
- Elements ordered naturally or via Comparator
- Not thread-safe
- head = least element (min-heap)

### 7. ArrayDeque (java.util.ArrayDeque<E>)

| Method            | Description | Example               | Output |
| ----------------- | ----------- | --------------------- | ------ |
| `push(E e)`       | Stack push  | `deque.push(5)`       | `void` |
| `pop()`           | Stack pop   | `deque.pop()`         | `5`    |
| `offerFirst(E e)` | Front add   | `deque.offerFirst(1)` | `true` |
| `peekLast()`      | End element | `deque.peekLast()`    | `10`   |

**Important Notes:**

- Resizable array implementation
- Faster than Stack for stack operations
- More efficient than LinkedList for queue ops
- Null elements prohibited

## Collection Type Comparison

| Type          | Interface  | Ordering               | Duplicates  | Nulls         | Thread-Safe | Underlying Structure     |
| ------------- | ---------- | ---------------------- | ----------- | ------------- | ----------- | ------------------------ |
| ArrayList     | List       | Insertion Order        | Allowed     | Allowed       | No          | Dynamic Array            |
| LinkedList    | List/Deque | Insertion Order        | Allowed     | Allowed       | No          | Doubly-Linked List       |
| HashSet       | Set        | Unordered              | No          | 1 null        | No          | Hash Table               |
| LinkedHashSet | Set        | Insertion Order        | No          | 1 null        | No          | Hash Table + Linked List |
| TreeSet       | Set        | Sorted Order           | No          | No\*          | No          | Red-Black Tree           |
| HashMap       | Map        | Unordered              | Unique keys | 1 null key    | No          | Hash Table               |
| LinkedHashMap | Map        | Insertion/Access Order | Unique keys | 1 null key    | No          | Hash Table + Linked List |
| TreeMap       | Map        | Sorted Key Order       | Unique keys | No null key\* | No          | Red-Black Tree           |
| PriorityQueue | Queue      | Priority Order         | Allowed     | No            | No          | Priority Heap            |
| ArrayDeque    | Deque      | LIFO/FIFO              | Allowed     | No            | No          | Resizable Array          |

**Legend:**

- `*` = Depends on Comparator
- `LIFO` = Last-In-First-Out (Stack)
- `FIFO` = First-In-First-Out (Queue)

## Time Complexities

| Collection      | add      | remove   | get      | contains |
| --------------- | -------- | -------- | -------- | -------- |
| ArrayList       | O(1)\*   | O(n)     | O(1)     | O(n)     |
| LinkedList      | O(1)     | O(1)\*   | O(n)     | O(n)     |
| HashSet/HashMap | O(1)     | O(1)     | O(1)     | O(1)     |
| TreeSet/TreeMap | O(log n) | O(log n) | O(log n) | O(log n) |
| PriorityQueue   | O(log n) | O(n)     | -        | O(n)     |

**Notes:**

- `*` Amortized constant time for ArrayList add operations
- `*` LinkedList remove is O(1) when using iterator
- `-` PriorityQueue doesn't support direct get operations

## Specialized Collections

```java
// Synchronized collection (thread-safe)
List<String> syncList = Collections.synchronizedList(new ArrayList<>());

// Immutable collections (Java 9+)
List<String> unmodifiable = List.of("A", "B", "C");
Set<Integer> fixedSet = Set.of(1, 2, 3);
Map<String, Integer> pairMap = Map.of("A", 1, "B", 2);

// Concurrent collections (java.util.concurrent)
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
CopyOnWriteArrayList<String> threadSafeList = new CopyOnWriteArrayList<>();
```
