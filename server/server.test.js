const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        // .expect('Hello world!')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    // Make a new test
    // Assert 200
    // Assert that you exist in users array
    it('should return user Alex', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude(
            {
            name: 'Alex',
            age: 30
            }
          )
        })
        .end(done);
    });
  });
  
});
