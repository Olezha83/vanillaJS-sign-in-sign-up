const { SHA256 } = require('./sha256');
const { SHA1} = require('./sha1');
const { MD5 } = require('./md5');
const { MD2 } = require('./md2')

module.exports = {
    SHA256, SHA1, MD5, MD2
}

// let res = SHA256('hello-world');
// console.log('SHA256', res);

// res = SHA1('hello-world');
// console.log('SHA1', res);

// res = MD5('hello-world');
// console.log('MD5', res);

// res = MD2('hello-world');
// console.log('MD2', res);