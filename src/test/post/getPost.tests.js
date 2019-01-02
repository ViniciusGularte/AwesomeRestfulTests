//Call the libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

//We Begin our Assertion 
describe('Tests get posts', () => {
        it('Test GET Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/posts/'+id) // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(200);// if status 200 equal to success
                    res.should.be.json;// the response must be a json   
                    res.body.should.be.a('object');// the response must have only one object
                    res.body.should.have.property('title');// the response must have a title
                    res.body.should.have.property('body');// the response must have a body
                  done(); //done with the test
                });
        });
        it('Test GET All Posts', (done) => {
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/posts') 
                .end((err, res) => { 
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array'); // the response must have more than one object
                    res.body[0].should.have.property('title'); 
                    res.body[0].should.have.property('body'); 
                  done();
                });
        });
});
