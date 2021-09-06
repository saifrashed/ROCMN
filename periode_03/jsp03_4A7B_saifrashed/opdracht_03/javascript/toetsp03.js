/*
  Class:    4A7B
  Name:     Saif Rashed
  Purpose:  Periode 3 toets

  dd-mm-yyyy  Description
  ==========  ==========================================
  06-03-2018  Initial
*/

var newInput;

function showDateOfTheWeek() {

	checkInput(document.getElementById('myDate').value);

}

function checkInput(input) {

	var errorMessage = document.getElementById('dotw');

	if (input.length < 10 || input.length > 10) {
		errorMessage.innerHTML = "ERROR: no correct length";
		return
	} else {
		newInput = input.split('-');

		if (newInput.length < 3 || newInput.length > 3) {
			errorMessage.innerHTML = "ERROR: format";
			return
		} else {
			for (i = 0; i < newInput.length; i++) {
				if (isNaN(newInput[i])) {
					errorMessage.innerHTML = "ERROR: no numbers";
					return
				} 
			}	
		}
	}

	var newDate = new Date(newInput[0], newInput[1], newInput[2]);

	var dateYear = newDate.getFullYear();
	var dateMonth = newDate.getMonth();
	var dateDay = newDate.getDate();

	errorMessage.innerHTML = dateYear + "-" + dateMonth + "-" + dateDay;
}