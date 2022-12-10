function compareByLength(str1, str2){
    return str2.length - str1.length
}

["apple", "banana", "pear"].sort(compareByLength)