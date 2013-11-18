var colors = require('colors');

// Matches string between brackets and strings between spaces
var pattern = /{.*?}|\S(\S)*/g

function getCompileFunction(template, styles) {
  return function() {
    var result = '',
        index = 0,
        args;

    // apply colors styles to string in brackets or 'words'
    result = template.replace(pattern, function(match) {
      if (index <= styles.length - 1) {

        styles[index].forEach(function(style) {
          if (String.prototype.hasOwnProperty(style)) {
            match = match[style];
          }
        })

      }

      ++index;

      return match;
    });

    // clean template and remove brackets
    result = result.replace(/{|}/g, '')

    // replace % with arguments
    args = Array.prototype.slice.call(arguments);

    args.forEach(function(arg) {
      result = result.replace('%', arg);
    });

    // done, return template
    return result;
  }
}

function compile(template, styles) {
  var stylesArray = styles.split(' ').map(function(style) {
    return style.split('.');
  });

  return getCompileFunction(template, stylesArray);
}

function create(template, styles) {
  return function() {
    var args = Array.prototype.slice.call(arguments),
        compiled = compile(template, styles),
        result = compiled.apply(this, args);

    if (!exports.silent) {
      console.log(result);
    }
  }
}

function set(object) {
  var that = this;
  Object.keys(object).forEach(function(key) {
    var template = object[key][0],
        styles = object[key][1];

    that[key] = create(template, styles)
  });
}

exports.silent = false;
exports.compile = compile;
exports.create = create;
exports.set = set;