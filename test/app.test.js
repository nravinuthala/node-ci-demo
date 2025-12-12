const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, GitHub Actions!');
  });
});
