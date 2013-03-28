$(function () {
	// Initialize the Bootstrap modal
	$('#dialog').modal({
		keyboard: true,
		show: false
	});

	$.getJSON('data.json', function(profiles) {
		$('.container.profiles').mustache('profiles', {
			profiles: profiles
		});
	});

	// Initialize our login plugin
	$('a.login').login();
}());