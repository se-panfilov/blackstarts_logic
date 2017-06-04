require('./check-versions')()
const factor = require('factor-bundle')
const fs = require('fs')
const concat = require('concat-stream')

const SRC = './src'
const DIST = './dist'
const OUTPUT_FILENAME = 'blackstars.js'

process.env.NODE_ENV = 'dev'

function makeBundle(err, files) {
	if (err) throw new Error(err)
	return factor(files)
}

function writeBundle(file, outputPath) {
	fs.writeFile(outputPath, file, err => {
		if (err) new Error(err)
		console.log("The file was saved!")
	})
}

fs.readdir(SRC, (err, files) => {
	const bundleStream = makeBundle(err, files)

	fs.writeFile(`${DIST}/${OUTPUT_FILENAME}`, bundleStream, err => {
		if (err) return err
	})
	// const outputDir = `${DIST}/${OUTPUT_FILENAME}`
	// writeBundle(bundle, outputDir)
})

function write(name) {
	return concat(body => {
		console.log('// ----- ' + name + ' -----')
		console.log(body.toString('utf8'))
	})
}