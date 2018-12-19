const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests get posts', () => {
        it('Test GET Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/posts/'+id) // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('body');
                  done();
                });
        });
        it('Test GET All Posts', (done) => {
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/posts') // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('title');
                    res.body[0].should.have.property('body');
                  done();
                });
        });
});
