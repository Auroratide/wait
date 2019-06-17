const wait = require('../..');

describe('wait for fixed amount of time', () => {
  const time = async fn => {
    const timeBefore = new Date().getTime();
    await fn();
    const timeAfter = new Date().getTime();

    return timeAfter - timeBefore;
  };

  it('should wait for the amount of milliseconds', async () => {
    const elapsed = await time(() => wait.for(50).milliseconds());

    expect(elapsed).toBeGreaterThanOrEqual(50);
    expect(elapsed).toBeLessThan(100);
  });

  it('should wait for the amount of seconds', async () => {
    const elapsed = await time(() => wait.for(1).seconds());

    expect(elapsed).toBeGreaterThanOrEqual(1000);
    expect(elapsed).toBeLessThan(1100);
  });
});