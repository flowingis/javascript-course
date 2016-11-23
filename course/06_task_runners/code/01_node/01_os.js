var os = require('os');

console.log('platform', os.platform());
console.log('temp directory', os.tmpdir());
console.log('uptime', os.uptime());
console.log('user', os.userInfo().username);