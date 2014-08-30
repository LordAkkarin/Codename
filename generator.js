(function ($) {
	// initialize variables
	var data = null;

	/**
	 * Re-Generates a new codename.
	 */
	var generate = function () {
		// get random elements
		var attribute = null;
		var object = null;

		do {
			attribute = data["attribute"][Math.floor ((Math.random () * data["attribute"].length))];
			object = data["object"][Math.floor ((Math.random () * data["object"].length))];
		} while (attribute.toLowerCase () == object.toLowerCase ()); // ensure we got a "proper" name

		// append to DOM
		$('#codename-attribute').text (attribute);
		$('#codename-object').text (object);
	};

	// wait for document to be ready
	$(document).ready (function () {
		// load templates
		$.get ('element.json', function (newData) {
			// log
			console.info ('Loaded templates.');
			console.info (newData);

			// store data
			data = newData;

			// re-generate
			generate ();

			// hook
			$('#codename-generate').removeClass ('disabled');
			$('#codename-generate').click (generate);
		});
	});
}) (jQuery);