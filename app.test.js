<<<<<<< HEAD
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

=======
// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should respond with status 200 and Hello World text', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
