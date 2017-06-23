const chai = require('chai')
// import chai from 'chai'
const expect = chai.expect
// const sinon = require('sinon')

import Main from '../../src/Main.js'

describe('Main.', () => {

	describe('Main fn.', () => {

		it('Main.', () => {
			console.log('Main')
			console.log(Main.init())
			console.log('222222')
			expect(1).to.be.a('number')
			// main.main()
		})

	})

})