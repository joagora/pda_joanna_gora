var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true);
  })

  it('it can add two numbers', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('it can subtract two numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('it can multiply two numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('it can divide two numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(6);
    assert.equal(566, calculator.runningTotal);
  })

  it('should be able to chain multiple operations together', function() {
    calculator.runningTotal = 2;
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(10, calculator.runningTotal);
  })

  it('should be able to clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 2;
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(7, calculator.runningTotal);
  })
});
