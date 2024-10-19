
jQuery.validator.addMethod("jike", function(value, element) {
return this.optional(element) || /^[a-z-.,()'\"\s]+$/i.test(value);
}, "Letters or punctuation only please");  

jQuery.validator.addMethod("overrideRequired", function(value, element) {
		if(value == '') {
			return false;
		}else {
			return true;
		}
		
}, "This field is required.");

jQuery.validator.addMethod("validDate", function(value, element) {
	return checkdate(value);
}, "Date entered is not valid. Date format is mm/dd/yyyy.");

function checkdate(input){
	var validformat=/^\d{1,2}\/\d{1,2}\/\d{2,4}$/; //Basic check for format validity
	var returnval=false;
	if (!validformat.test(input)) {
		//alert("Invalid Date Format. Please correct and submit again.");
	} else { //Detailed check for valid date ranges
		var monthfield=input.split("/")[0];
	    var dayfield=input.split("/")[1];
	    var yearfield=input.split("/")[2];
	    if(yearfield.length!=3){
		    var dayobj = new Date(yearfield, monthfield-1, dayfield);
		    if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)) {
		       // alert("Invalid Day, Month, or Year range detected. Please correct and submit again.");
		    } else {
		        returnval=true;
		    }
	    }
	}
	if(input.length == 0) {
		returnval=true;
	}
	return returnval;
}

jQuery.validator.addMethod("validTime", function(timeStr, element) {
	var timePat = /^(\d{1,2}):(\d{2})$/;
	var returnval=false;
	if(!timePat.test(timeStr)) {
	} else {
		var hour=timeStr.split(":")[0];
	    var minute=timeStr.split(":")[1];
		if (hour < 0  || hour > 23) {
		} else if (minute<0 || minute > 59) {
		} else {
			returnval=true;
		}
	}
return returnval;
}, "Invalid Military Time.");


jQuery.validator.addMethod("IsValidTime", function(timeStr, element) {
		// Checks if time is in HH:MM:SS AM/PM format.
		// The seconds and AM/PM are optional.
	
		var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;
	
		var matchArray = timeStr.match(timePat);
			if (matchArray == null) {
				alert("Time is not in a valid format.");
				return false;
			}
		hour = matchArray[1];
		minute = matchArray[2];
		second = matchArray[4];
		ampm = matchArray[6];
	
		if (second=="") { 
			second = null; 
		}
		if (ampm=="") { 
			ampm = null 
		}
	
		if (hour < 0  || hour > 23) {
		alert("Hour must be between 1 and 12. (or 0 and 23 for military time)");
		return false;
		}
		
		if (hour <= 12 && ampm == null) {
		if (confirm("Please indicate which time format you are using.  OK = Standard Time, CANCEL = Military Time")) {
		    alert("You must specify AM or PM.");
		    return false;
			}
		}
		
		if  (hour > 12 && ampm != null) {
		alert("You can't specify AM or PM for military time.");
		return false;
		}
		if (minute<0 || minute > 59) {
		alert ("Minute must be between 0 and 59.");
		return false;
		}
		if (second != null && (second < 0 || second > 59)) {
		alert ("Second must be between 0 and 59.");
		return false;
		}
	return false;
}, "Invalid Time.");

jQuery.validator.addMethod("IsValid24HourTime", function(timeStr, element) {
	// Checks if time is in 24H:MM:SS format.
	// The seconds part is optional.

	var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;
	var charPat = /[a-zA-Z]*/gi;

	var matchArray = timeStr.match(timePat);
		/*if (matchArray == null) {
			alert("Time is not in a valid format.");
			return false;
		}*/
	hour = matchArray[1];
	minute = matchArray[2];
	second = matchArray[4];
	ampm = matchArray[6];

	if (second == undefined || second == null) {
		second = '';
	} 
	if (ampm == undefined || ampm == null) {
		ampm = '';
	}
		
	if (ampm != '') {
		alert('Military Time required.');
		return false;
	}
	
	if (hour < 0  || hour > 23) {
		alert('Hour must be from 0 to 23.');
		return false;
	}

	if (minute<0 || minute > 59) {
	    alert ("Minute must be between 0 and 59.");
	    return false;
	}
	
	if (second != null && (second < 0 || second > 59)) {
	    alert ("Second must be between 0 and 59.");
	    return false;
	}
		return true;
}, "Invalid Time.");

jQuery.validator.addMethod("decimalNo", function(value, element) {
	return checkDecimalNo(value, element);
}, "Please restrict decimal places.");

function checkDecimalNo(value, element) {
	if (trimMe(value) != '') {
		var decNo = $(element).attr('dNo')||2;
		var stVer = new String(value);
		var parts = stVer.split(".",2);
		if (parts[1] != null && parts[1] != undefined) {
			if ((parts[1]).length > decNo) {
				return false;
			}
		}
	}
	return true;
}

function trimMe(value) {
	return (new String(value)).replace(/ /g, '');
}

/*jQuery.validator.addMethod("noSpecial", function(value, element) {
	return checkSpecialChars(value, element);
}, "Special characters are not allowed.");

function checkSpecialChars(value, element) {
	if (trimMe(value) != '') {
		var specchar = $(element).attr('specialChars')||'*"\'~`:;%&!#$@()';
return new RegExp("^[^" + specchar + "]+$", "i").test(value);
}
return true;
}
*/
jQuery.validator.addMethod("noSpace", function(value, element) {
return checkSpecialChars(value, element);
}, "Spaces are not allowed.");
function checkSpecialChars(value, element) {
if (trimMe(value) != '') {
var specchar = ' ';
return new RegExp("^[^" + specchar + "]+$", "i").test(value);
}
return true;
}
jQuery.validator.addMethod("code", function(value, element) {
return this.optional(element) || /^\w+$/i.test(value);
}, "Only letters and numbers are allowed.");
jQuery.validator.addMethod("gtOne", function(value, element) {
return checkGtOne(value);
}, "Number must be a greater than 1");
function checkGtOne(input){

var returnval=true

if(input!="" && input < 1){
returnval = false;
}
return returnval;
}
jQuery.validator.addMethod("positiveInt", function(value, element) {
return this.optional(element) || /^\d+$/.test(value);
}, "This field must be a positive number.");
jQuery.validator.addMethod("positiveDouble", function(value, element) {
return checkPositive(removeComma(value));
}, "Please enter a value greater than or equal to 0.");
function removeComma(input) {
return input.replace(/\,/g, ""); 
}
function checkPositive(input){
var returnval=true
if(input!="" && input <= 0){
returnval = false;
}
return returnval;
}
jQuery.validator.addMethod("numberWOcomma", function(value, element) {
return this.optional(element) || /^\d+(?:\.\d+)?$/.test(value);
}, "Please enter a valid number.");
jQuery.validator.addMethod("digitsWOcomma", function(value, element) {
return this.optional(element) || /^\d+(?:\.\d+)?$/.test(value);
}, "Please enter a valid digit.");

jQuery.validator.addMethod("exactlength", function(value, element, param) {
return this.optional(element) || value.length == param;
}, jQuery.format("Please enter {0} numbers."));
