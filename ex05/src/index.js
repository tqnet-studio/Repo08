// only change code below this line
var sum = 0;
function addThree(){
sum = sum + 3;
}
addThree (sum);
console.log('sum from addThree:', sum);


function addFive(){
sum = sum + 5;
}
addFive (sum);
console.log('sum from addFive:', sum);

addThree ();
addFive ();


// only change code above this line

module.exports = {
    addThree,
    addFive
};