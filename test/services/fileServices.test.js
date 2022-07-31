// During the test the env variable is set to test
require('dotenv').config()
process.env.NODE_ENV = 'test'

const { describe, it } = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../index')
// assertion style
chai.should()

chai.use(chaiHttp)

describe('Testing FILES API', () => {
  /*
  * Test the GET route
  */
  describe('GET /api/v1/files/data', () => {
    it('it should GET all the files with their respective format', (done) => {
      chai.request(server)
        .get('/api/v1/files/data')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.a('array')
          res.body.ok.should.eql(true)
          if (err) throw new Error(err)
          done()
        })
    })
    it('it should NOT GET all the files response with status 404', (done) => {
      chai.request(server)
        .get('/api/v1/files/dat')
        .end((err, res) => {
          res.should.have.status(404)
          if (err) throw new Error(err)
          done()
        })
    })
  })
  describe('GET /api/v1/files/data?fileName=test2.csv', () => {
    it('it should GET a specific File with the name test2.csv', (done) => {
      chai.request(server)
        .get('/api/v1/files/data?fileName=test2.csv')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data[0].lines.should.a('array')
          res.body.ok.should.eql(true)
          res.body.data[0].file.should.eql('test2.csv')
          if (err) throw new Error(err)
          done()
        })
    })
    it('it should NOT GET a specific File response status 404', (done) => {
      chai.request(server)
        .get('/api/v1/files/data?fileName=test200.csh')
        .end((err, res) => {
          res.should.have.status(404)
          res.body.data.message.should.eql('Not Found')
          res.body.data.code.should.eql('SYS-ERR')
          if (err) throw new Error(err)
          done()
        })
    })
  })
  describe('GET /api/v1/files/list', () => {
    it('it should GET a list of the files', (done) => {
      chai.request(server)
        .get('/api/v1/files/list')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.files.should.a('array')
          res.body.ok.should.eql(true)
          if (err) throw new Error(err)
          done()
        })
    })
    it('it should NOT GET a list of the files response with status 404', (done) => {
      chai.request(server)
        .get('/api/v1/files/lis')
        .end((err, res) => {
          res.should.have.status(404)
          if (err) throw new Error(err)
          done()
        })
    })
  })
})
