// Assignment Code
let generateBtn = document.querySelector('#generate');

//Below are the arrays that hold the values for the password generation formatting options.
let lowerCaseBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberBank = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbolBank = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

// Final Bank is used to put together the different selected formatting options and their arrays to form the final array of which the random generator loop chooses from.
let finalBank = [];
// Blank variable for password which will be filled in later
let password = '';

// Declaring the variables used in this application
let pwGenYesNo;
let pwLength;
let formatLowerCase;
let formatUpperCase;
let formatNumbers;
let formatSpecial;

//Prompt criteria and array builder function
function writePassword() {
	let pwGenYesNo = prompt('Generate New Password? (Type In Yes/No)'); // First question prompts user to type in YES to continue.
	pwGenYesNo = pwGenYesNo.toLowerCase(); // Input validation to ensure that any format of YES/yes/Yes/yES is accepted by the prmpt
	if (pwGenYesNo === 'yes') {
		//If user types in YES, the prompt continues.
		let pwLength = parseInt(prompt('Choose a Password Length Between 8 and 128 Characters.'));
		console.log(pwLength);
		//Input Validation checks are below. The password can only be between 8 to 128 characters. If any value beyond that is chosen, then it stops the application.
		if (pwLength >= 8 && pwLength <= 128) {
			alert(`Password length set to ${pwLength}`);
		} else if (pwLength <= 8) {
			alert('Password Cannot Be Less Than 8 Characters or Password Cannot Be Greater Than 128 Characters.');
			return;
		} else if (pwLength >= 128) {
			alert('Password Cannot Be Less Than 8 Characters or Password Cannot Be Greater Than 128 Characters.');
			return;
		} else {
			alert('Invalid Entry');
			return;
		}
		// Formatting Prompts below to prompt the
		let formatLowerCase = confirm('Do you want to include lowercase characters in the password?');
		let formatUpperCase = confirm('Do you want to include uppercase characters in the password?');
		let formatNumbers = confirm('Do you want to include numeric characters in the password?');
		let formatSpecial = confirm('Do you want to include special characters in the password?');

		// Input Validation to ensure at least one formatting option is selected. If none are selected, it will not run the application and ask the user if they want to start again.
		if (formatLowerCase === false && formatUpperCase === false && formatNumbers === false && formatSpecial === false) {
			alert('Cannot Generate Password Without Any Formatting Options Selected. Please Restart Application');
		}

		//If statements below check if the formatting prompt was selected for the value of TRUE and if so, it merges the array value into the finalBank array which is later used to generate the password character random selection.
		if (formatLowerCase) {
			Array.prototype.push.apply(finalBank, lowerCaseBank);
		}
		if (formatUpperCase) {
			Array.prototype.push.apply(finalBank, upperCaseBank);
		}
		if (formatNumbers) {
			Array.prototype.push.apply(finalBank, numberBank);
		}
		if (formatSpecial) {
			Array.prototype.push.apply(finalBank, symbolBank);
		}

		// For loop that loops through the selected password length set by the prompt and randomly selects characters from the finalBank array.
		for (let pwi = 0; pwi < pwLength; pwi++) {
			password = password + finalBank[Math.floor(Math.random() * finalBank.length)];
		}

		var passwordText = document.querySelector('#password');
		passwordText.value = password;
	} else {
		alert('Application Closing'); // Will trigger if anything other than Yes is submitted.
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Added in functionality for a copy button, clipped from w3 schools website
function copyButton() {
	var copyText = document.getElementById('password');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');
	alert('Copied the text: ' + copyText.value);
}
