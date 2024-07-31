## Problem Description
Mr. T got the Electricity bill of his house. He felt that the bill amount was too much. He come to you to understand the relation between amount and number of units with Electricity bill.


Instructions are give on Electricity biil that :
```
1. For first 50 units Rs. 0.50/unit.
2. For next 100 units Rs. 0.75/unit.
3. For next 100 units Rs. 1.20/unit.
4. For above 250 units Rs. 1.50/unit.
5. An additional surcharge of 20% is added to the bill.
```

>NOTE: As the electricity bill can have any real value (floating point), you have to tell the Integral value of the bill. For eg. Integral value of 2.91 is 2.

To avoid manual calculation again and again, You have to write a code which take number of Unit (suppose N) from user and print the amount.

Problem Constraints
```
0 < N <= 100000
```

Input Format
```
Take an integer N from user
```

Output Format
```
Print the amount for that much unit
```

Example Input

>Input 1 :
```
N = 150
```

>Input 2 :
```
N = 4
```

>Input 3 :
```
N = 300
```

Example Output

>Output 1 :
```
120
```

>Output 2 :
```
2
```

>Output 3 :
```
354
```

Example Explanation
>Explanation 1:
```
For first 50 units, the bill is (Rs 0.5/unit) * (50 units) = Rs 25
For next 100 units, the bill is (Rs 0.75/unit) * (100 units) = Rs 75

Bill amount without additional surcharge (25 + 75) = Rs 100
Total Bill amount with additional surcharge = Rs (100 + 0.20 * 100) = Rs 120
```

>Explanation 2:
```
Bill without additional surcharge (Rs 0.5/unit) * (4 units) = Rs 2
Total Bill amount with additional surcharge = Rs (2 + 0.20 * 2) = Rs 2.4
Integral value of Bill amount = Rs 2
```

>Explanation 3:
```
For first 50 units, the bill is (Rs 0.5/unit) * (50 units) = Rs 25
For next 100 units, the bill is (Rs 0.75/unit) * (100 units) = Rs 75
For next 100 units, the bill is (Rs 1.20/unit) * (100 units) = Rs 120
For the remaining 50 units, the bill is (Rs. 1.50/unit) * (50 units) = Rs 75

Bill amount without additional surcharge (25 + 75 + 120 + 75) = Rs 295
Total Bill amount with additional surcharge = Rs (295 + 0.20 * 295) = Rs 354
```

<details>
  <summary>Solution</summary>
    Solution is not yet added!