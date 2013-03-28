(function($) {
	var validate = function(form) {
		var email = form.find('#inputEmail');
		if(email.val() === '') {
			email.parents('.control-group').addClass('error');
			email.next('.help-inline').show().html('Your email cannot be empty')
		}
	}

	$.fn.login = function() {
		this.click(function(event) {
			$('#dialog').mustache('#login').modal('show');

			var form = $('#dialog').find('form');

			form.on('click', 'a.toggleSignup', function() {
				form.find('.toggleChevron').toggleClass('icon-right-open icon-down-open');
				form.find('.signup').toggle('slide');
			});

			form.on('submit', function(ev) {
				validate(form);
				ev.preventDefault();
			});

			event.preventDefault();
		});

		return this;
	}
})(jQuery);