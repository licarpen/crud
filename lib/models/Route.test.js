const Route = require('../lib/models/Route');

describe('Route model', () => {
  it('has a required name', () => {
    const route = new Route({});
    expect(route.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('has required crag', () => {
    const route = new Route({});
    expect(route.validateSync().errors.crag.message)
      .toEqual('Path `crag` is required.');
  });
  it('grade has required number type', () => {
    const route = new Route({
      grade: 'v-hard'
    });
    expect(route.validateSync().errors.grade.message)
      .toEqual('Cast to Number failed for value \"v-hard\" at path \"grade\"');
  });
  it('has route number at or above 5.5', () => {
    const route = new Route({
      grade: 5.0
    });
    expect(route.validateSync().errors.grade.message)
      .toEqual('Path `grade` (5) is less than minimum allowed value (5.5).'); 
  });
  it('has route below 5.16', () => {
    const route = new Route({
      grade: 5.17
    });
    expect(route.validateSync().errors.grade.message)
      .toEqual('Path `grade` (5.17) is less than minimum allowed value (5.5).'); 
  });
});
