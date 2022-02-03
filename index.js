const _ = require('lodash');
const player = require('./test/player');

console.log(_.last(player));

setTimeout(() => {
    console.log('Hello World');
}, 1000);
