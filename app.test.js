const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Подключение к приложению Express

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', () => {
  it('should return status 200 and Hello World text', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });
});

