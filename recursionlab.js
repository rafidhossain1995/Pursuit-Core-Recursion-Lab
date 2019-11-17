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

// Q4

const sumEvens = (arr) =>{
    if(arr.length === 0) return 0
    let el = arr.pop()
    if(el % 2 === 0){
        return sumEvens(arr) + el
    }else {
        return sumEvens(arr)
    }
    
}
console.log(sumEvens([2,3,5,6,8]))

// Q5

const range = (num1, num2) =>{
    let output = []
    if(num1 > num2) return output
    output.push(num1)
    return output.concat(range(num1+1, num2))
}
console.log(range(1,10))


//6

const tripleStep = (num) =>{
    if(num === 0) return 1
    if(num === 1) return 1
    if(num === 2) return 2
    return tripleStep(num-1) + tripleStep(num-2) + tripleStep(num-3)

}
console.log(tripleStep(4))


//7 
const coinCombo = (n) =>{
    if(n === 0) return 0
    if (n < 0) return 0
    return coinCombo(n=1)