# Hash-Coverer
```
Generate hashes from string in node and the browser. you can convert from string to SHA-256, MD-5, MD-1
```
# Example usage

```js
const hash = require('hash-converter');

const sha256 = hash.SHA256('hello-world');
console.log(sha256);  //afa27b44d43b02a9fea41d13cedc2e4016cfcf87c5dbf990e593669aa8ce286d

const sha1 = hash.SHA1('hello-world');
console.log(sha1); // fbb969117edfa916b86dfb67fd11decf1e336df0

const md5 = hash.MD5('hello-world');
console.log(md5); // 2095312189753de6ad47dfe20cbe97ec

const md2 = hash.MD2('hello-world');
console.log(MD2); // d36f37b1678c4b9e82380bf2c95d3de3
```

# License
MIT
