// store the first element as the smallest value(min)
// compare min to the next item in the array until you find a smaller number
// if a smaller number is found, set that number to be the new min
// if the min is not the value(index) you initially began with, swap the two values
// repeat until all items are sorted in the array

function selectionSort(arr){
    let min = arr[0]
    let result = []

    for (let i = 0; i < arr.length; i++){
        if (min > arr[i]){
            min = i
        }
    }
}