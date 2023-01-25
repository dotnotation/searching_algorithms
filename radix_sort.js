// first helper for radix sort
// getDigit(num, place)
// returns the digit in num at the given place value
// ex. getDigit(12345, 0) = 5
// going the opposite direction as we want to follow the logic of a number
// could convert into string and convert back however index would still be wrong
// base ten numbers only so divide each number by ten to get the correct index

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}