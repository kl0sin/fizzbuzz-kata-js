const fizzbuzz = require('./fizzbuzz');

describe('Fizz Buzz', function () {

  it('has tests', function () {
    expect(fizzbuzz).toBeDefined();
  });

  [
    {number: 1, result: '1'},
    {number: 2, result: '2'},
    {number: 3, result: 'FIZZ'},
    {number: 5, result: 'BUZZ'},
    {number: 6, result: 'FIZZ'},
    {number: 9, result: 'FIZZ'},
    {number: 15, result: 'FIZZBUZZ'},
    {number: 45, result: 'FIZZBUZZ'}
  ].forEach(function(testCase) {
    it('should return ' + testCase.result + ' for ' + testCase.number, function() {
      expect(fizzbuzz(testCase.number)).toBe(testCase.result);
    })
  });
});
