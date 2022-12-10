// takes in a long string, and a short string
// loop over the longer string
// nested loop of the shorter string
// return the count of times the shorter string appears

function stringSearch(long, short){
    let count = 0
    for (var i = 0; i < long.length; i ++){
        for (var j = 0; j < short.length; j ++){
            // console.log(long[i], short[j])
            // console.log(short[j], long[i+j])
            if (short[j] !== long[i + j]){
                // anytime there isn't a match, we want to break from this loop
                // this will rest our j loop and continue the i loop
                // console.log("BREAK!")
                break
            }
            if (j === short.length - 1){
                console.log("found one!")
                count++
            }
        }
    }
    return count

}

// Colt's cleaner version
function stringSearch(long, short){
    var count = 0
    for (var i = 0; i < long.length; i++){
        for (var j = 0; j < short.length; j++){
            if (short[j] !== long[i+j]) break
            if (j === short.length - 1) count ++
        }
    }
    return count
}