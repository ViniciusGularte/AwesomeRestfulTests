const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests update posts', () => {
        it('Test Update Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .put('/posts/'+id) // endpoint with we will test
                .send({'id':id,'title': 'foo', 'body': 'bar'})
                .end((err, res) => { // tests to make
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('body');
                  res.body.should.have.property('id');
                  res.body.id.should.equal(id);
                  done();
                });
        });
});
