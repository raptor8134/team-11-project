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
	return "<h2 style='margin-left: 80px; top:60;'>" + dateSting.split(" 00:")[0] + "</h2>";
}

function addMeeting(url, name, start, end) {
	document.getElementById('day').innerHTML = document.getElementById('day').innerHTML + `\n <div class="meeting">
	<h2>` + name + `</h2> <p>` + start + ` to ` + end + `</p> <a href="` + url + `" target="_blank"><div class="joinbutton">Join</div></a>
	</div>`
}

//TODO make this into a json read function from a browser cache, after we make the input page
//Feel free to add more fields as necessary, just dont forget the json part

// var meetings1 = [ // for testing only
// 	{'url': "someurl", 'name': "History", 'start': "7:40", 'end': "8:50"},
// 	{'url': "someurl", 'name': "English", 'start': "9:00", 'end': "10:10"},
// 	{'url': "someurl", 'name': "Math", 'start': "10:20", 'end': "11:30"},
// 	{'url': "someurl", 'name': "Spanish", 'start': "11:40", 'end': "12:50"},
// 	{'url': "someurl", 'name': "After-school help", 'start': "1:50", 'end': "2:35"},
// ];

var meetingsObject;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    meetingsObject = JSON.parse(this.responseText);
	document.getElementById('date').innerHTML = getDateString(dateFromDay(currentYear, currentDayNumber)) + addMeetings(meetingsObject);
  }
};
xmlhttp.open("GET", "data.txt", true);
xmlhttp.send();



function addMeetings(meetingsInput) {
	var retval;
	for (var i = 0; i < meetingsInput.data.length; i++) {
		retval += addMeeting(meetingsInput.data[i]['url'], meetingsInput.data[i]['name'], meetingsInput.data[i]['start'], meetingsInput.data[i]['end']);
	}
	return retval;
}

document.body.innerHTML = document.body.innerHTML.replace(/NaN/, ' '); 