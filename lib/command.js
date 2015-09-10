/* jshint node: true */

/**
 * parse one line of cue sheet, and return COMMAND
 * and all parameters
 */

module.exports = function(line) {
	var result;
	var command;
	var params;

	line = line.trim();
	result = line.match(/^([A-Z]+)\s+(.*)$/);

	if (result) {
		command = result[1];
		params = parseParams(result[2]);
	} else {
		throw new Error('Not a command: ' + line);
	}

	if (!command) {
		throw new Error('Cannot parse command from ' + line);
	}
	if (!params) {
		throw new Error('Cannot parse parameters from ' + line);
	}

	return {
		command: command,
		params: params,
	};
};

function parseParams(lineString) {
	var params = [];
	var quoteIndex;

	if (lineString[0] === '"') {
		quoteIndex = lineString.indexOf('"', 1);
		params.push(lineString.substring(1, quoteIndex));
		lineString = lineString.substring(quoteIndex + 1).trim();
	}

	if (lineString !== '') {
		params = params.concat(lineString.split(' '));
	}

	return params;
}