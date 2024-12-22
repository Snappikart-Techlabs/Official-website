$(document).ready(function() {
	$(".countdown").countdown(
		{
			date: "27 Dec 2024 00:00:00", // Set your desired launch date here
			format: "on"
		},
		function() {
			// Callback function executed after the countdown ends
			alert("Snappikart is now live!");
		}
	);
});
