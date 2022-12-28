// var studentScore = 80;

// if( studentScore >= 90 ) {
//  console.log('You got A');
// } else if ( studentScore < 90 && studentScore >= 80 ) {
//     console.log('You got B');
// }else if ( studentScore < 80 && studentScore >= 70 ) {
//     console.log('You got C');
// }else if (studentScore < 70 && studentScore >= 60 ) {
//     console.log('You got D'); 
// }else {
//     console.log('You is loser');
// }


var salohweight = 55;

var salohHeight = 1.81;
var salohBmi = salohweight / ( salohHeight * salohHeight );
alert(salohBmi);

if (salohBmi < 15 ) {
    alert('you are underweight')
}else if (salohBmi > 15 && markBmi < 24.99 ) {
    alert('you are normal')
}else {
    alert('Lose some weight broooo')
}