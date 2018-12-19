const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests delete posts', () => {
        it('Test DELETE Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .del('/posts/'+id) // endpoint with we will test
                .end((err, res) => { // tests to make
                  response.should.have.status(200);
                  response.should.be.json;
                  response.body.should.be.a('object');
                  response.body.should.have.property('REMOVED');
                  response.body.REMOVED.should.be.a('object');
                  done();
                });
        });
});
