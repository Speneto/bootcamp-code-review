/**
* Technical Code Review Session
*
* This doc contains sample code that bootcampers are expected
* to read,review and digest and then explain in their own terms
* what they think the purpose of the code is
*/

/**
* Code 1
*/
function code_1(input) {

  if(typeof input !== 'number') throw "Only numerical inputs are allowed";

  if(input < 0) throw "Only numerical inputs >= 0 are allowed";

  //just to be safe
  input = parseInt(input);

  //define and invoke the helper function
  return (function funk(input) {

    if(input === 0) return 1;

    if(input >= 0) {

      return input * funk(input - 1);
    }

  })(input);
}

/**
* Code 2
*/
function code_2(arr) {

  if(!arr instanceof Array) throw "Only arrays are permitted as input";

  if(arr.length < 2) throw "At least 2 elements are required";

  var num = arr[0];

  //loop...
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > num) {
      num = arr[i];
    }
  }

  return num;
}


/**
* Code 3
*/
function code_3(boundary) {

  if(typeof boundary !== 'number') throw "Only numerical inputs are allowed";

  if(boundary > 20) throw "Max number you can input is 20";

  //outer loop
  for(var i = 1; i <= boundary; i++) {

    //1st st inner loop
    var leftHand = '';
    for(var j = i; j >= 1; j--) {

      leftHand += ' '+j;
    }

    //2nd inner loop
    var rightHand = '';
    for(var k = 2; k <= i; k++) {

      if (k === 2) {
        rightHand += k;
      }else {
        rightHand += ' '+k;
      }

    }

    console.log(leftHand,rightHand);
  }
}
