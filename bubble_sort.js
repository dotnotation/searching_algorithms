// start looping from with a variable called i the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values
// return the sorted array
// take the variable i and compare it to the adjacent element
// if it is larger, more it towards the back 
// nested loop that is depending on the first loop 

// naive solution
function bubbleSort(arr){

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j > arr.length; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

        return arr
    }

}

bubbleSort([37, 45, 29, 8])

// somewhat optimized solution
function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--){
        // starts at the end of the array towards the beginning
        // this allows us to use the variable i in our definition of the j loop
        // the first time through this loop will bubble the largest number to the back of the array
        for (let j = 0; j < i - 1; j++){
            // j < i - 1 means that we will run one less loop every time we iterate
            // as the largest number is already at the back of the array, we don't need to check it again
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

// optimized solution
function bubbleSort(arr){
    // in the last solution even though we were running the loop for a shorter period each loop
    // it would still run until every loop was completed even if all the times were sorted
    // now we want to stop the loop if nothing is swapped on the last run
    let noSwaps
    for (let i = arr.length; i > 0; i--){
        noSwaps = true
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

// Time: O(n) when optimized and nearly sorted 
// and O(n^2) when data isn't nearly sorted