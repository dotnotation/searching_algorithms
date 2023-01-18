// - Create an empty array, take a look at the smallest values in each input array
// 	- have two counters with while loops
// 		- both i and j start at 0
// 		- have a results array
// 		- while there are still values we haven't looked at
// 			- while i and j haven't hit the end of their respective arrays
// 		- if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// 		- once one array is exhausted, push in all remaining values from the other array

function mergeSort(arr1, arr2){
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