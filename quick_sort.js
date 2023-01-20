// - accept three arguments (array, start index, and end index)
// 	- these can default to 0 and to the array length - 1
// - grab the pivot from the start of the array
// - store the current pivot index in a variable
// 	- this will keep track of where the pivot should end up
// - loop through the array from the start until the end
// 	- if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// - swap the starting element(the pivot) with the pivot index
// - return the pivot index

function pivot(arr, start = 0, end = arr.length + 1){
    const swap = (arr, idx1, idx2)=> {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start]
    let swapIdx = start 

    for (let i = start + 1; i < arr.length; i++){
        if (pivot > arr[i]){
            swapIdx++
            // keeping track of how many items are less than our pivot
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)

    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1){
    let pivotIdx = pivot(arr, left, right)
    // on the first run, this will run the whole array and in our example will return the index of 3
}

quickSort([4, 6, 9, 1, 2, 5, 3])