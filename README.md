About
=======
cue-parser-plus is a cue sheet parser library written for nodejs.
This project was forked from [justlaputa/cue-parser](https://github.com/justlaputa/cue-parser).

How to use
=======
Add dependency in your `package.json` file:

```json
{
	"dependencies": {
		"cue-parser-plus": "*"
	}
}
```

Use it in your node source code.

```javascript
var parser = require('cue-parser-plus');

var cueSheet = parser.parse('filename.cue');

console.log(cueSheet.performer);
console.log(cueSheet.files);
console.log(cueSheet.files[0].tracks);
```

Changes from original project
=======
- Added support for loading a cue sheet from memory
- Changed to remove a BOM if file contains
- Added support for REM in FILE or TRACK
- Added support for CRLF and LF line breaks
