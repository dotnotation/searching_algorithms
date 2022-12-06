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