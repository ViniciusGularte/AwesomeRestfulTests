const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests post posts', () => {
        it('Test Post Especific Post', (done) => {
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .post('/posts') // endpoint with we will test
                .send({'title': 'foo', 'body': 'bar', 'userId':1})
                .end((err, res) => { // tests to make
                  res.should.have.status(201);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('body');
                  res.body.should.have.property('id');
                  res.body.id.should.equal(101);
                  res.body.title.should.equal('foo');
                  res.body.body.should.equal('bar');
                  res.body.userId.should.equal(1);



                  done();
                });
        });
});
