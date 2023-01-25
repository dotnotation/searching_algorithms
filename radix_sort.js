// first helper for radix sort
// getDigit(num, place)
// returns the digit in num at the given place value
// ex. getDigit(12345, 0) = 5
// going the opposite direction as we want to follow the logic of a number
// could convert into string and convert back however index would still be wrong
// base ten numbers only so divide each number by ten to get the correct index

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
    // abs allows us to get the correct answer even with negative numbers
}

// second helper
// figure out how many digits are in a number
// ex. digitCount(314) = 3
// could do a string conversion or use math

function digitCount(num){
    if (num === 0) return 1
    // 0 would return -Infinity so need to account for that 
    return Math.floor(Math.log10(Math.abs(num))) + 1
    // log10 asks 10 to what power gets us num
    // using abs so we can use this even with negative numbers
    // using floor as it won't usually be an integer
}

// third helper
// uses digitCount to figure out the largest number
// given an array of numbers, returns the number of digits in the largest numbers in the list
// ex. mostDigits([1234, 56, 7]) = 4

function mostDigits(nums){
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
        // .max takes in two numbers and returns the largest number
    }
    return maxDigits
}

// radixSort takes in an array of numbers
// use mostDigits to find the amount of digits
// loop from k = 0 up to largest number of digits
// for each iteration of the loop
    // create buckets for each digits (0 to 9)
    // place each number in the corresponding bucket based on its kth digit
// concat into new array based on new order starting at 0 going up to 9
// return list at the end

function radixSort(nums){
    let maxDigits = mostDigits(nums)
    for (let k = 0; k < maxDigits; k++){
        let buckets = Array.from({length: 10}, () => [])
        // this gives us an array with 10 sub arrays
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            buckets[digit].push(nums[i])
        }
        nums = [].concat(...buckets)
    }
    return nums
}

// Big O
    // Time O(nk)aka O(n log n)
    // Space O(n + k)
    // n = length of array
    // k = number of digits



