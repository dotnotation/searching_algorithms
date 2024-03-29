// - Create an empty array, take a look at the smallest values in each input array
// 	- have two counters with while loops
// 		- both i and j start at 0
// 		- have a results array
// 		- while there are still values we haven't looked at
// 			- while i and j haven't hit the end of their respective arrays
// 		- if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// 		- once one array is exhausted, push in all remaining values from the other array

function merge(arr1, arr2){
    let results = []

    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length){
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length){
        results.push(arr2[j])
        j++
    }

    return results
}

// - break up the array into halves using slice until you have arrays that are empty or have one element
// - once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// - once the array has been merged back together, return the merged and sorted array
// recursion

function mergeSort(arr){
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

// Big O
// 	time: O(n log n)
// 	space: O(n)