const fixedTime = n => ( {
  milliseconds: () => new Promise(resolve => setTimeout(resolve, n))
} );

module.exports = {
  for: fixedTime
};