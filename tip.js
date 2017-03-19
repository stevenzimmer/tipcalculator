// Hide tip amount on load

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';


function calculateTip() {

	var billAmount = document.getElementById('billAmount').value;
	var serviceQuality = document.getElementById('serviceQuality').value;
	var numPeople = document.getElementById('totalPeople').value;

	if (billAmount === '' || serviceQuality === 0) {
		window.alert('please enter values');
		return; // this will prevent function from running
	}

	if (numPeople === '' || numPeople <= 1) {
		numPeople = 1;

		document.getElementById('each').style.display = 'none';

	} else {

		document.getElementById('each').style.display = 'block';
	}

	// Do Math

	var total = (billAmount * serviceQuality) / numPeople;

	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	console.log(total);
	// display tip

	document.getElementById('totalTip').style.display = 'block';
	document.getElementById('tip').innerHTML = total;
}




// Clicking button calls custom function
document.getElementById('calculate').onclick = function() {
	calculateTip();
};
