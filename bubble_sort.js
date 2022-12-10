// start looping from with a variable called i the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values
// return the sorted array
// take the variable i and compare it to the adjacent element
// if it is larger, more it towards the back 
// nested loop that is depending on the first loop 

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