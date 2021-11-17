//Set Time and Date
now =  new Date();

//Time
function Time() {
	minutes = now.getMinutes();
	hours = now.getHours();
	document.getElementById("time").innerHTML = hours + ":" + minutes;
}

//Refresh Time
setTimeout(Time, 1000);

//Date
year = now.getFullYear();
month = now.getMonth() + 1;
day = now.getDate();
document.getElementById("date").innerHTML = day + "/" + month + "/" + year;


//Onload Popup
function Onload() {
	popup = getElementById("onload_popup")
	popup.style.display = "block"
}