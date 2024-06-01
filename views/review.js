// Review JavaScript Code
// (C) 2084 LenCo. All rights reserved.

let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");

function ratey(n) {
	var n;
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one", review_msg = "Pathetic.";
		else if (n == 2) cls = "two", review_msg = "Awful.";
		else if (n == 3) cls = "three", review_msg = "Decent!";
		else if (n == 4) cls = "four", review_msg = "Awesome!!";
		else if (n == 5) cls = "five", review_msg = "AMAZING!!!";
		stars[i].className = "star " + cls;
	}
	output.innerText = review_msg + " " + n + "/5";
}

function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}