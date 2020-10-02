function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(window) {
  // console.log(window);
 
  if (1 >= window.length) {
    let cut = window.split('');
    printString(cut.reverse().join(''));
  }
  
  // let cut = window.split('');
  // cut.reverse().join('')
 
}