const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect')();
let _id = '';

describe('application routes', () => {
  it('has a "new" route that allows a user to create new route', () => {
    return request(app)
      .post('/new')
      .send({ name: 'Bananas and Beatles', crag: 'Afternoon Delight', grade: 5.13 })
      .then(res => {
        _id = res.body._id;
        expect(res.body).toEqual({ '__v': 0, '_id': expect.any(String), name: 'Bananas and Beatles', crag: 'Afternoon Delight', grade: 5.13 });
      });
  });
  it('has finds a climbing route by id', () => {
    return request(app)
      .get(`/${_id}`)
      .then(res => {
        expect(res.body).toEqual({
          '_id': `${_id}`,
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
  it('it deletes a route by id', () => {
    return request(app)
      .delete(`/delete/${_id}`)
      .then(res => {
        expect(res.body).toEqual({
          '_id': _id,
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.13,
          '__v': 0
        });
      });
  });
});

