var assert = require('assert'),
    logan = require('./');

var actual   = logan.compile(' some % {long string}', 'red.underline green rainbow')('string'),
    expected = ' ' + 'some'.red.underline + ' ' + 'string'.green + ' ' + 'long string'.rainbow;

assert.equal(
  logan.compile('some %', '')('string'),
  'some string'
);

assert.equal(
  logan.compile('some %', 'red green')('string'),
  'some'.red + ' ' + 'string'.green
);

assert.equal(
  logan.compile('some % var', 'red . cyan')('string'),
  'some'.red + ' string ' + 'var'.cyan
);

assert.equal(
  logan.compile('some %', 'red.underline')('string'),
  'some'.red.underline + ' string'
);

assert.equal(
  logan.compile('{some long} %', 'red green')('string'),
  'some long'.red + ' ' + 'string'.green
);

logan.set({
  foo: ['foo %', 'green'],
  bar: ['bar %', 'red']
});

assert(logan.hasOwnProperty('foo'));
assert(logan.hasOwnProperty('bar'));

assert(!logan.silent)
logan.silent = true;
logan.create('Should not be seen', '')();