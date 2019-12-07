const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect')();

describe('application routes', () => {
  it('has a "new" route that allows a user to create new route', () => {
    return request(app)
      .post('/new')
      .send({ name: 'Bananas and Beatles', crag: 'Afternoon Delight', grade: 5.13 })
      .then(res => {
        expect(res.body).toEqual({ '__v': 0, '_id': expect.any(String), name: 'Bananas and Beatles', crag: 'Afternoon Delight', grade: 5.13 });
      });
  });
  it('has finds a climbing route by id', () => {
    return request(app)
      .get('/5deaeb87f6fe6952d61701b4')
      .then(res => {
        expect(res.body).toEqual({
          '_id': '5deaeb87f6fe6952d61701b4',
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.12,
          '__v': 0
        });
      });
  });
  it('it downgrades a route', () => {
    return request(app)
      .put('/update/5deaeb87f6fe6952d61701b4')
      .send({ grade: 5.12 })
      .then(res => {
        expect(res.body).toEqual({
          '_id': '5deaeb87f6fe6952d61701b4',
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.12,
          '__v': 0
        });
      });
  });
});

