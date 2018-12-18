const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('Tests get users', () => {
        it('Test GET Especific User', (done) => {
            let id = 1;
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/todos/',id) // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(200); // verificando se o retorno e um status code 200
                  done();
                });
        });
        it('Test GET All Users', (done) => {
            chai.request('https://jsonplaceholder.typicode.com') // Server Adress
                .get('/todos') // endpoint with we will test
                .end((err, res) => { // tests to make
                    res.should.have.status(200); // verificando se o retorno e um status code 200
                  done();
                });
        });
});
