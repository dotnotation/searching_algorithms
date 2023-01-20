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
    - Merge helper function:
        - Create an empty array, take a look at the smallest values in each input array
            - have two counters with while loops
                - both i and j start at 0
                - have a results array
                - while there are still values we haven't looked at
                    - while i and j haven't hit the end of their respective arrays
                - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
                - once one array is exhausted, push in all remaining values from the other array
    - Merge Sort:
        - break up the array into halves(slice) until you have arrays that are empty or have one element
        - once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
        - once the array has been merged back together, return the merged and sorted array
        - recursive call
    - Big O
        - time: O(n log n)
        - space: O(n)

Quick Sort:
    - exploits the fact that arrays of 0 or 1 element are always sorted
	    - just like merge sort
    - Pivot
        - works by selecting one element, the pivot, and finding the index where the pivot should end up in the sorted array
        - so any number that is less than the pivot are moved to the left and any number greater moves to the right 
            - although it is not sorted besides being on the correct side of the pivot
            - then you have to repeat the process with the left and right side
        - there will be a variable that will store the number of elements that are less than the pivot which will gives us the index of where the pivot should be moved/swapped
            - keep in mind that the pivot isn't being swapped until the whole array has been assessed on the first pass
            - [3, 4, 2, 1] if the 3 is the pivot, on the first pass 1, and 2 will be swapped in front of 3 so that 4 is last [3, 2, 1, 4] we kept track that there are two items that are less than the pivot, so then we move the pivot [2, 1, 3, 4] then we assess the right side and sort that in the same manner. 
    - Pivot helper aka partition 
        - responsible for arranging element in an array on either side of the pivot
        - given an array the helper should designate and element as the pivot
        - then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
        - the order of the elements on either side of the pivot doesn't matter
        - should NOT create a new array aka do this in place
            - mutating the data
        - helper should return the INDEX of the pivot
        - steps:
            - accept three arguments (array, start index, and end index)
                - these can default to 0 and to the array length - 1
            - grab the pivot from the start of the array
            - store the current pivot index in a variable
                - this will keep track of where the pivot should end up
            - loop through the array from the start until the end
                - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
            - swap the starting element(the pivot) with the pivot index
            - return the pivot index
    - Picking the pivot
        - the runtime of quick sort depends in part on how one selects the pivot
        - ideally the pivot should be chosen so that it is roughly the median value in the data
        - in the example we are going to always choose the pivot to be the first element (which does have some consequences)
    - Quick sort function
        - call the pivot helper on the array
        - when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    - Big O
        - Time: O(n log n)
        - Space: O(log n)

Best case scenario for any sorting algorithm is time O(n log n) and space O(n)

All of these are comparison sorting algorithms. At any point we are comparing no more than two values to each other. There isn't a way to get better time with these algorithms and there is a lower bound that we can't surpass. There is a limited amount of data that we can gather from comparing two values at a time.   

Radix Sort:
    - ISN'T a comparison sorting algorithm
    - doesn't make direct comparisons between two elements
    - integer sorting algorithm 
    - special sorting algorithm that works on lists of numbers and is great for binary
        - you can convert strings into binary as a way to work with this sort
    - exploits the fact that information about the size of the number is encoded in the number of digits
        - more digits means a bigger number
    - you have buckets of single numbers 0-9 and you group numbers by the last digit in their number
        - so 902 would be in bucket 2
        - 86,  4386, 1556 would be in the 6 bucket
        - then you sort the numbers by this bucket system
        - then you repeat with the second to last digit
            - if it is a single digit, they will go in the zero bucket
            - any number that is out of numbers, go in the zero bucket on their respective turns
        - repeat until numbers are sorted
            - so if your largest number is 1367, then you will have to run the code 4 times as it is 4 digits long