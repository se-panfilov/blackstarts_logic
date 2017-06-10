const browserify = require('browserify')
const fs = require('fs')
const path = require('path')
const argv = require('yargs').argv
const watchify = require('watchify')
const hmr = require('browserify-hmr')

//browserify-hmr - Hot Module Replacement plugin for Browserify
//watchify - Watch mode for browserify builds.
//persistify - Wrapper around browserify to make incremental builds.
//babelify - Browserify transform for babel.

// const input = path.join(__dirname, 'index.js')
const input = argv.input
// const output = path.join(__dirname, 'bundle.js')
const output = argv.output


function writeFile(output, buf) {
	fs.writeFile(output, buf, err => {
		if (err) return console.log(err)
	})
}

function addPlugins(b) {
	b.plugin(watchify)
	return b
}

function transform(b) {
	// b.transform('brfs')
	return b
}

function main() {
	const b = browserify(input)
	addPlugins(b)
	transform(b)

	b.bundle((err, buf) => {
		if (err) return console.log(err)
		writeFile(output, buf)
	})
}

main()


