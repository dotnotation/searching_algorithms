// only numbers
// accepts a sorted array and a value
// make a left and right pointer
// left starts at 0
// loop only while the left comes before the right pointer
// check if the element is equal to the middle 
// if that value matches, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you don't find the value, return -1

function binarySearchPseudocode(arr, val){
    let min = 0
    let max = arr.length - 1
    
    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let current = arr[middle]
        if (current < val) {
            min = middle + 1
        } else if (current > val){
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

// Colt Steele's Solution

function binarySearchPseudocode(arr, elem){
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2)

    while(arr[middle] !== elem && start <= end){
        if (elem < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] === elem){
        return middle
    }
    return -1
}

// cleaner version
function binarySearchPseudocode(arr, elem){
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2)

    while(arr[middle] !== elem && start <= end){
        if (elem < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === elem ? middle : -1
}

// best case O(1), worst/average O(log n)