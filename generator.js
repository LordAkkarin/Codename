(function ($) {
	// constants
	var PROJECT_NAME_LENGTH = 2;

	// initialize variables
	var data = null;

	/**
	 * Re-Generates a new codename.
	 */
	var generateCodename = function () {
		// get random elements
		var attribute = null;
		var object = null;

		do {
			attribute = data["attribute"][Math.floor ((Math.random () * data["attribute"].length))];
			object = data["object"][Math.floor ((Math.random () * data["object"].length))];
		} while ((attribute.toLowerCase () == object.toLowerCase () && attribute != "Spam")); // ensure we got a "proper" name

		// append to DOM
		$('#codename-attribute').text (attribute);
		$('#codename-object').text (object);
	};

	/**
	 * Re-Generates a new project name.
	 */
	var generateProjectname = function () {
		// generate name
		var name = '';
		var suffix = data["suffix"][Math.floor ((Math.random() * data["suffix"].length))];

		// select random prefix
		name += data["prefix"][Math.floor ((Math.random () * data["prefix"].length))];

		// append random consonant and vowel
		for (var i = 0; i < PROJECT_NAME_LENGTH; i++) {
			// append consonant
			name += data["consonant"][Math.floor ((Math.random() * data["consonant"].length))];

			// append vowel
			name += data["vowel"][Math.floor ((Math.random() * data["vowel"].length))];
		}

		// append another consonant if needed
		if (data["vowel"].indexOf (suffix[0]) >= 0) name += data["consonant"][Math.floor ((Math.random() * data["consonant"].length))];

		// append suffix
		name += suffix;

		// update DOM
		$('#codename-attribute').text ('');
		$('#codename-object').text (name);
	}

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
			generateCodename ();

			// hook
			$('#codename-generate').removeClass ('disabled');
			$('#codename-generate').click (generateCodename);

			$('#projectname-generate').removeClass ('disabled');
			$('#projectname-generate').click (generateProjectname);
		});
	});
}) (jQuery);