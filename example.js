var logan = require('./');

logan.set({
  move   : ['     move % to %', 'green . green .'],
  destroy: ['  destroy %     ', 'red']
});

// logan.move    = logan.create('     move % to %', 'green . green .');
// logan.destroy = logan.create('  destroy %     ', 'red');

console.log('\n');
logan.move('song.mp3', '~/Music');
logan.move('image.png', '~/Pictures');
logan.destroy('temp.txt');
console.log('\n');