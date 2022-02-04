// function alwaysHungry(arr = []) {
//     var count = 0
//     for (var i = 0;i < arr.length; i++){
//         if (arr[i] == "food") {
//             console.log("yummy")
//             count++
//     }
//     }
//     if (count == 0){
//         console.log("I'm hungry")
//     }
// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);

// alwaysHungry();

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// function betterThanAverage(arr) {
//     var sum = 0;
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > sum/arr.length){
//             count++
//         }
//     }
//     // count how many values are greated than the average
//     console.log(count);
//     return count;
// }
// betterThanAverage([6,8,3,10,-2,5,9]);

// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// function reverse(arr) {
//     for(i = 0; i < arr.length/2; i++) {
//         // var temp = arr[i]
//         // arr[i] = arr[arr.length - i - 1]
//         // arr[arr.length - i - 1] = temp
//         [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
//     }

//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (i = 2; i < n; i++) {
        sum = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(sum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
