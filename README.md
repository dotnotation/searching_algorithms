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

Selection Sort: 
    - similar to bubble sort but instead of placing large values into sorted position, it places small values to sorted position
    - basically the reverse of bubble sort
    - still moving from beginning to end
    - goes through the whole array and finds the least value and puts it in the front and the value at the front is swapped into the position that the lowest value was
    - ex. [5, 3, 4, 1, 2] on first pass would be [1, 3, 4, 5, 2]
        - you can see that the 1 swapped with 5
    - store the first element as the smallest value(first in the array), compare this item to the next item in the array until you find a smaller number 
        - you are saving the index, not the value, so you can swap
        - if you find a new smaller number, designate it to be the new minimum and continue until the end of the array
        - if the minimum is not the value/index you initially began with, swap the two values