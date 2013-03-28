(function($) {
	$.fn.login = function(event) {
		$('#dialog').modal({
			keyboard: true,
			show: false,
			remote: 'templates/login.html'
		});

		this.click(function() {
			$('#dialog').modal('show');
		});
		return false;
	}
})(jQuery);