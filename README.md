# searching_algorithms
Colt Steele's JS Algorithms and Data Structures Masterclass

This is my work coding along with this masterclass. There is a comment above any sections that are not code I have written, that was provided by the class. This is purely for educational purposes. 

Linear Search:
    - going through an array one element after another
    - JS has some built in methods like indexOf , includes , find , and findIndex
    - moving at a set interval, one element at a time

Binary Search:
    - much faster than linear
    - you can eliminate half of the remaining elements at a time instead of just one at a time
    - ONLY WORKS ON SORTED ARRAYS
    - divide and conquer

Bubble Sort:
    - not frequently used
    - sorting algorithm where the largest values bubble up to the top
    - compares two adjacent elements, the larger value get pushed towards the top or back of the array
    - swapping values 
    - good for almost sorted data
    - doesn't scale well
    - Big O
        - Time: O(n^2)
        - Space: O(1)

Selection Sort: 
    - similar to bubble sort but instead of placing large values into sorted position, it places small values to sorted position
    - basically the reverse of bubble sort
    - still moving from beginning to end
    - doesn't scale well
    - goes through the whole array and finds the least value and puts it in the front and the value at the front is swapped into the position that the lowest value was
    - ex. [5, 3, 4, 1, 2] on first pass would be [1, 3, 4, 5, 2]
        - you can see that the 1 swapped with 5
    - store the first element as the smallest value(first in the array), compare this item to the next item in the array until you find a smaller number 
        - you are saving the index, not the value, so you can swap
        - if you find a new smaller number, designate it to be the new minimum and continue until the end of the array
        - if the minimum is not the value/index you initially began with, swap the two values
        - shrink the scope as you loop through 
    - Big O
        - Time: O(n^2)
        - Space: O(1)

Insertion Sort:
    - builds up the sort by gradually creating a larger left half which is always sorted
        - gradually sorting the array by inserting the number into the right place from left to right 
    - start by picking the second element in the array
        - compare the second element with the one before it and swap if necessary
        - continue to the next element and if it is in the incorrect order, iterate through the sorted portion (the left side)
        - place the element in the correct place in the sorted portion
        - return the sorted array
    - good for almost sorted data
    - doesn't scale well
    - Big O
        - Time: O(n^2)
        - Space: O(1)

Merge Sort:
    - exploits the fact that arrays of 0 or 1 element are always sorted
    - divide and conquer
    - works by decomposing an array into smaller arrays of 0 or 1 element, then building up a newly sorted array
    - Splitting up array into smaller sub arrays
    - first splits in half, then half again, etc. until it is all in single element arrays, then it takes 2 sub arrays and merges them into a sorted array, then those subarrays are compared in groups of two again and sorted, etc. until the whole array is sorted
    - In order to implement merge sort, it is useful to first implement a function responsible for merging two sorted arrays
        - given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
        - the function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it
    - Create an empty array, take a look at the smallest values in each input array
        - have two counters with while loops
            - both i and j start at 0
            - have a results array
            - while there are still values we haven't looked at
                - while i and j haven't hit the end of their respective arrays
            - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
            - once one array is exhausted, push in all remaining values from the other array