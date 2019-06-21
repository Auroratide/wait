const wait = require('../..');

describe('wait for condition', () => {
  it('should wait for the condition to become true', async () => {
    let condition = false;
    wait.for(5).milliseconds().then(() => condition = true);    

    await wait.condition(() => condition).then(() => {
      expect(condition).toBe(true);
    });
  });
});