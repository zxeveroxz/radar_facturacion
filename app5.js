const crypto = require("crypto")
var  fs = require('fs');
let key = fs.readFileSync('key.pem');
console.log(key);
const cert = new crypto.X509Certificate(key);
