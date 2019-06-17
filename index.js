const fixedTime = n => ( {
  milliseconds: () => new Promise(resolve => setTimeout(resolve, n)),
  seconds: () => new Promise(resolve => setTimeout(resolve, n * 1000))
} );

module.exports = {
  for: fixedTime
};