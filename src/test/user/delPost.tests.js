const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests delete posts', () => {
        it('Test DELETE Especific Post', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .del('/posts/',id) // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(202); // verificando se o retorno e um status code 200
                  done();
                });
        });
});
