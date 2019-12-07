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
      .get('/5deaeb0acc0e7852d6cea1e3')
      .then(res => {
        expect(res.body).toEqual({
          '_id': '5deaeb0acc0e7852d6cea1e3',
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.13,
          '__v': 0
        });
      });
  });
  it('it downgrades a route', () => {
    return request(app)
      .put('/update/5deae8e4c3e7bb52d6860636')
      .send({ grade: 5.12 })
      .then(res => {
        expect(res.body).toEqual({
          '_id': '5deae8e4c3e7bb52d6860636',
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.12,
          '__v': 0
        });
      });
  });
});

