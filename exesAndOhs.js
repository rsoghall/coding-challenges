// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
//The string can contain any char.

// Examples input/output:

// XO(ooxx) => true
// XO(xooxx) => false
// XO(ooxXm) => true
// XO(zpzpzpp) => true // when no 'x' and 'o' is present should return true
// XO(zzoo) => false

let XO = (str) => {
    let lower = str.toLowerCase().split('')
    let x = 0
    let o = 0
    lower.forEach(val => {
        if(val === "x"){
            x += 1
        }
        if(val === "o"){
            o += 1
        }
    })
    return x === o

}
console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('ooxXm'))
console.log(XO('zpzpzpp'))
console.log(XO('zzoo)'))

//check how you can use reduce
