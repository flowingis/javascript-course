// The os module provides a number of operating system-related utility methods
// complete list here: https://nodejs.org/api/os.html

var os = require('os');

console.log('type', os.type());
console.log('arch', os.arch());
console.log('temp directory', os.tmpdir());
console.log('uptime', os.uptime());
console.log('loadavg', os.loadavg());
console.log('user', os.userInfo().username);