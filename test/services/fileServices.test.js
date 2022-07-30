//During the test the env variable is set to test
require('dotenv').config();
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
// assertion style
chai.should();

chai.use(chaiHttp);


describe('Testing FILES API', () => {
 /*
  * Test the GET route
  */
  describe('GET /api/v1/files/data', () => {
      it('it should GET all the files with their respective format', (done) => {
          chai.request(server)
            .get('/api/v1/files/data')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.a('array');
                  res.body.ok.should.eql(true);
              done();
            });
      });
      it('it should NOT GET status 404 if the route is wrong', (done) => {
        chai.request(server)
          .get('/api/v1/files/dat')
          .end((err, res) => {
            res.should.have.status(404);
            done();
          });
      });
  });

});