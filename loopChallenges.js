// function loopChallenge() {
//     for (var i = 1; i <= 20; i++ ) {
//         if(i % 2 == 1) {
//             console.log(i)
//         }
//     }
// }
// loopChallenge();

// function loopMultiples() {
//     for (var i = 100; i >= 0; i--) {
//         if(i % 3 == 0) {
//             console.log(i)
//         }
//     }
// }
// loopMultiples();

// function print() {
//     for (var i = 4; i >= -3.5; i -= 1.5) {
//         console.log(i)
//     }
// }
// print();

// function sum_all_100() {
//     var sum = 0;
//     for(var i = 1; i < 101; i++){
//         sum += i
//     }
//     return sum;
// }
// console.log(sum_all_100());

function factorial() {
    var product = 1;
    for(var i = 1; i <= 12; i++){
        product *= i
    }
    return product;
}
console.log(factorial());