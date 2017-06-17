const chai = require('chai')
const expect = chai.expect
// const sinon = require('sinon')

import Main from '../../src/Main.js'

describe('Main.', () => {

	// describe('main fn.', () => {
	//
	// 	it('should return -1 when the value is not present', () => {
	// 		console.log('11111')
	// 		console.log(Main)
	// 		console.log('222222')
	// 		expect(1).to.be.a('number')
	// 		// main.main()
	// 	})
	//
	// })

	//TODO (S.Panfilov) remove it later
	describe('main fn.', () => {

		it('should return -1 when the value is not present', () => {
			console.log('11111')
			console.log(Main.redux())
			console.log('222222')
			expect(1).to.be.a('number')
			// main.main()
		})

	})

})