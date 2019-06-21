const fixedTime = n => ( {
  milliseconds: () => new Promise(resolve => setTimeout(resolve, n)),
  seconds: () => new Promise(resolve => setTimeout(resolve, n * 1000))
} );

const condition = conditional => new Promise(resolve => {
  const it = (function*() {
    while(!conditional())
      yield fixedTime(0).milliseconds().then(() => it.next());
    resolve();
  })();

  it.next();
});

module.exports = {
  for: fixedTime,
  condition
};