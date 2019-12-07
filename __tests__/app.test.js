const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect')();
const mongoose = require('mongoose');
let _id = '';


describe('application routes', () => {
  beforeAll(() => {
    return mongoose.connection.dropDatabase();
  });
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
      .put(`/update/${_id}`)
      .send({ grade: 5.12 })
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
  it('it deletes a route by id', () => {
    return request(app)
      .delete(`/delete/${_id}`)
      .then(res => {
        expect(res.body).toEqual({
          '_id': _id,
          'name': 'Bananas and Beatles',
          'crag': 'Afternoon Delight',
          'grade': 5.12,
          '__v': 0
        });
      });
  });
  it('gets all routes', () => {
    return request(app)
      .get()
      .then(res => {
        expect(res.body).tohaveLength
      })
  })
});

