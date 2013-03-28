$(function () {
	// Initialize the Bootstrap modal
	$('#dialog').modal({
		keyboard: true,
		show: false
	});

	// Initialize our login plugin
	$('a.login').login();
}());