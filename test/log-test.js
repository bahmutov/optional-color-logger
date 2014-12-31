require('../logger').init({
  log: 0,
  colors: false
});

console.assert(global.log, 'has logger');
log.debug('hi debug');
log.info('hi info');
