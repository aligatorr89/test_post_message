const path = require("path");

module.exports = {
	entry: {
		"index": "./src/index.js",
		"frame": "./src/frame.js"
	},
	output: {
		path: path.resolve(__dirname),
		filename: "./dist/[name].bundle.js"
	}
}

