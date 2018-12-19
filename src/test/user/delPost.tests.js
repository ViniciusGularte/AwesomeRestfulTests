const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests delete posts', () => {
        it('Test DELETE Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .delete('/posts/'+id) // endpoint with we will test
                .end((err, res) => { // tests to make
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  //res.body.should.have.property('REMOVED');
                  //res.body.REMOVED.should.be.a('object');
                  done();
                });
        });
});
