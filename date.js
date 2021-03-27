var currentDayNumber = getDayOfYear();
dateText = document.getElementById("datetext");
var today = new Date();
var currentYear = today.getFullYear();
var yearLength;

if (currentYear % 4 == 0) {
	yearLength = 366;
} else {
	yearLength = 365;
}

function getDayOfYear() {
	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);
	return day;
}

function dateFromDay(year, day) {
	var date = new Date(year, 0); // initialize a date in `year-01-01`
	return new Date(date.setDate(day)); // add the number of days
}

function getDateString(dateObject) {
	var dateSting = dateObject + "";
	return "<h1>" + dateSting.split(" 00:")[0] + "</h1>";
}

function addMeeting(url) {
	return `\n <div class="meeting">
	<h2>Meeting</h2> - <a href="` + url + `" target="_blank">Join</a>
	</div>`
}

document.getElementById('days').innerHTML = getDateString(dateFromDay(currentYear, currentDayNumber)) + addMeeting("https://us02web.zoom.us/meeting/register/tZwtdOiorDkrGtNu0lvirw_yLuV644lp6dZ") + document.getElementById('days').innerHTML;
