/*
  Class:    4A7B
  Name:     Saif Rashed
  Purpose:  Periode 3 toets

  dd-mm-yyyy  Description
  ==========  ==========================================
  06-03-2018  Initial
*/

function calcMultiply() {

	var inputOne = parseInt(document.getElementById('myNumber01').value);
	var inputTwo = parseInt(document.getElementById('myNumber02').value);

	if (isNaN(inputOne) || isNaN(inputTwo)) {
		document.getElementById('output').innerHTML = "ERROR: no numbers";
	} else {
		document.getElementById('output').innerHTML = inputOne + " X " + inputTwo + " = " + inputOne * inputTwo;
	}

}