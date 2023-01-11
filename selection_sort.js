// store the first element as the smallest value(min)
// compare min to the next item in the array until you find a smaller number
// if a smaller number is found, set that number to be the new min
// if the min is not the value(index) you initially began with, swap the two values
// repeat until all items are sorted in the array

function selectionSort(arr){

    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        // swap only if you need to
        if (i !== min){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

// other solution
function selectionSort(arr){
    const swap = (arr, idx1, idx2) => 
        ([arr[idx1]], arr[idx2]) = [arr[idx2], arr[idx1]]

    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        // swap only if you need to
        if (i !== min) swap(arr, i, min)
    }

    return arr
}

// Big O:
    // Time: O(n^2)
    // Space: O(1)