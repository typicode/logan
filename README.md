# Logan

![](http://i.imgur.com/xg4wt5j.png)

Logan is a mini template system for the console and [colors](https://github.com/Marak/colors.js). 

It allows to cleanly separate content from style and create beautiful logging functions.

## Example

Let's say you want to write a logging function that says hello.

```javascript
// Without Logan
function hello(arg) {
  console.log('Hello'.bold.green + ' : ' + arg.cyan);
}

// With Logan
var hello = logan.create('Hello : %', 'bold.green . cyan')

hello('world');
```

![](http://i.imgur.com/4I6nDTp.png)

## Usage

```javascript
var logan = require('logan');
```

### set

This is the most useful method of logan. It lets you define all your templates in one place.

```javascript
logan.set({
  info: ['info : %', 'yellow'],
  warn: ['warn : %', 'orange'],
  omg : ['omg  : %', 'rainbow']
});

logan.info('some info');
```

Notice how easy it is to see what all your logging functions will output.

Also, with ```set``` your module users can easily theme logs:

```javascript
// Overriding omg to be... more OMG!!!
logan.set({
  omg: ['OMG : % !!!', 'red . . red']
});
```

### create

Returns a logging function.

```javascript
var info = logan.create('info : %', 'yellow');
info('some text');
```

### compile

Returns a function which returns a string when called.

```javascript
var info = logan.compile('info : %', 'yellow');
console.log(info('some text'));
```

## Syntax

* **%** is used for string replacement.
* **{}** lets you define blocks.
* **.** means default style.
* styles can be chained (example: bold.underline.red).

**{}** usage:

```javascript
// for example, instead of writing this:
var green = logan.create('some long green string', 'green green green green');

// using {} you can write
var green = logan.create('{some long green string}', 'green');
```

## Configuration

If you want to suppress all output, during tests for example, just set ```silent``` to ```true```.

```javascript
logan.set({'foo', ['foo', 'red']});
logan.silent = true;
logan.foo(); // No output
logan.silent = false;
logan.foo(): // will output 'foo'
```

## About the name

Since there's a templating engine called [hogan](http://twitter.github.io/hogan.js/) and this one is about logging, it was called logan.

## More

If you want to see how Logan can be used in another project, you can have a look at [ShoutJS](https://github.com/typicode/shoutjs).