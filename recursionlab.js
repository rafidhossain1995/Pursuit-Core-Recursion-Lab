        // Q1
const sumOfAll = (num) =>{
    if(num === 1) return 1
    return num + sumOfAll(num - 1)
}
console.log(sumOfAll(6))

// Q2

const multArr = (arr) =>{
    if (arr.length === 0) return 1
    let el = arr.pop()
    return multArr(arr) * el
}
console.log(multArr([2,3,5]))
console.log(multArr([5,5,1,2]))

//  Q3

const concatArr = (arr) =>{
    if (arr.length === 0) return ""
    let string = arr.pop()
    return concatArr(arr) + " " + string
}
console.log(concatArr(['is', 'it', 'tomorrow']))