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
    }
    return maxDigits
}
