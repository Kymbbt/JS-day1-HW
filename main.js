//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart", "Chance"]

function checkNames(string, names) { 
    for (let i = 0; i < names.length; i++) {
        if (string.includes(names[i])) {
          console.log("Matched " + names[i]);
        }
      }
    }

checkNames(dogString, dogNames)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

//        0         1         2         3         4         5
//  arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

//  arr.splice(0, 1, "even index")
//  console.log(arr)



function evenIndex(arr) {
    for (let i = 0; i < arr.length; i += 2){
        arr.splice (i,1, "even index");
    }
}
let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
evenIndex(arr);
console.log(arr)

codewars
// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
//This code does not execute properly. Try to figure out why.
//Answer
function multiply(a, b) {
    return a * b;
  }


  // https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

  // answer 

  function solution(number){
    if (number < 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }














