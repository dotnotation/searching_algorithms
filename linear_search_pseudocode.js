// function that accepts an array and a value
// loop through the array and check if the current array element is equal to the value 
// if found, return the index
// if not found, return -1 
// Can't use indexOf
// ex. linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1

function linearSearchPseudocode(arr, val){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }

    return -1
}

// O(n)

// Linear Search Big O: O(1)=Best O(n)=Average O(n)=Worst