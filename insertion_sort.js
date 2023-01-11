// start by picking the second element in the array
// compare the second element to the one before it and swap if necessary
// continue to the next element
// if it is not in the correct order, iterate through the sorted portion (the left side) 
// place the element in the correct place in the sorted portion
// to sort, you will be comparing the element at the end of the sorted portion to the current element 
// swap them until you have the element in the correct spot
// return sorted array
// [1, 2, 9, 76, 0] 
    // store current as 0
    // 0 is less than 76 so replace 0 with 76 [1, 2, 9, 76, 76]
    // 0 is less than 9 so [1, 2, 9, 9, 76]
    // [1, 2, 2, 9, 76] etc. until the arr is [0, 1, 2, 9, 76]

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let current = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > current; j--){
            // add conditional in for loop so that the loop will stop if the element is greater than current
            
        }
    }
    return arr
}