const { formattingLine } = require('../../helper/formattingLine')
const { describe, it } = require('mocha')
const chai = require('chai')
const expect = chai.expect
const fileName = 'file1.csv'
const headers = ['file', 'text', 'number', 'hex']

describe('Test Unit for validate output of helper formatting Line Function', () => {
  it('should return an object if the line is valid', () => {
    const line = 'file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.a('object')
    expect(objResult).to.eql({
      text: 'RgTya',
      number: 64075909,
      hex: '70ad29aacf0b690b0467fe2b2767f765'
    })
  })

  it('should return null if the file is not valid', () => {
    const line = 'file1,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })

  it('should return null if the text is not valid', () => {
    const line = 'file1,1111,64075909,70ad29aacf0b690b0467fe2b2767f765'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })

  it('should return null if the number is not valid', () => {
    const line = 'file1,RgTya,hola,70ad29aacf0b690b0467fe2b2767f765'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })

  it('should return null if the hdex is not valid', () => {
    const line = 'file1,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765zzzz'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })

  it('should return null if there is no enougth fields', () => {
    const line = 'file1,RgTya'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })

  it('should return null if there is to much commas', () => {
    const line = 'file1,RgTya,,,,,,,,'
    const objResult = formattingLine(line, fileName, headers)
    expect(objResult).to.be.eql(null)
  })
})
