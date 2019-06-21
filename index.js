const milliseconds = n => new Promise(resolve => setTimeout(resolve, n));

const seconds = n => milliseconds(n * 1000);

const condition = conditional => new Promise(resolve => {
  const it = (function*() {
    while(!conditional())
      yield milliseconds(0).then(() => it.next());
    resolve();
  })();

  it.next();
});

module.exports = {
  milliseconds,
  seconds,
  condition
};