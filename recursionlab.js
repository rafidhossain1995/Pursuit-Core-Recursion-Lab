        // Q1
const sumOfAll = (num) =>{
    if(num === 1) return 1
    return num + sumOfAll(num - 1)
}
console.log(sumOfAll(6))