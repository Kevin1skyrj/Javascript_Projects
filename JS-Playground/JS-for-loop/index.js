for(var i = 1; i <= 3; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}
/** Output
  4
  4
  4
 Because:
 var i → one variable
 Stored in global / function scope
 setTimeout callback runs after loop finishes
 At that time, i === 4
 So all callbacks read the same variable.
*/

