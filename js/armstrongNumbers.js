// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(numsList) {
    let l = []
    for (let i of numsList){
        let strNum = i.toString()
        let len = strNum.length
        
        let total = 0
        if (len == 3){
            total =Number(strNum[0])**Number(len) + Number(strNum[1])**Number(len) + Number(strNum[2])**Number(len)
        }else if(len == 2){
            total =Number(strNum[0])**Number(len) + Number(strNum[1])**Number(len)
        }else if(len == 1){
            total = Number(strNum[0])**Number(len)
        }
        
        if (total == Number(i)){
            l.push(i)
        }
    }
    return l
};
// console.log(findArmstrongNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))

// [
//     0,   1, 2, 3,   4,   5,
//     6,   7, 8, 9, 153, 370,
//   371, 407
// ]