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

function addMeeting(url, name) {
	return `\n <div class="meeting">
	<h2>` + name + `</h2> - <a href="` + url + `" target="_blank">Join</a>
	</div>`
}

var meetings = [ // for testing only
	{'url': "someurl", 'name': "Class 1", 'start': "time", 'end': "time"},
	{'url': "someurl", 'name': "Class 2", 'start': "time", 'end': "time"},
	{'url': "someurl", 'name': "Class 3", 'start': "time", 'end': "time"},
	{'url': "someurl", 'name': "Class 4", 'start': "time", 'end': "time"},
];

function addMeetingS(meetings) {
	var retval;
	for (var i = 0; i < meetings.length; i++) {
		console.log(meetings[i]);
		retval += addMeeting(meetings[i]['url'], meetings[i]['name']);
	}
	return retval;
}

document.getElementById('date').innerHTML = getDateString(dateFromDay(currentYear, currentDayNumber)) + addMeetingS(/*"https://us02web.zoom.us/meeting/register/tZwtdOiorDkrGtNu0lvirw_yLuV644lp6dZ"*/meetings) + document.getElementById('date').innerHTML;
