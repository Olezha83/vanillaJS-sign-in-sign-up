/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/hash-converter/index.js":
/*!**********************************************!*\
  !*** ./node_modules/hash-converter/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { SHA256 } = __webpack_require__(/*! ./sha256 */ \"./node_modules/hash-converter/sha256.js\");\r\nconst { SHA1} = __webpack_require__(/*! ./sha1 */ \"./node_modules/hash-converter/sha1.js\");\r\nconst { MD5 } = __webpack_require__(/*! ./md5 */ \"./node_modules/hash-converter/md5.js\");\r\nconst { MD2 } = __webpack_require__(/*! ./md2 */ \"./node_modules/hash-converter/md2.js\")\r\n\r\nmodule.exports = {\r\n    SHA256, SHA1, MD5, MD2\r\n}\r\n\r\n// let res = SHA256('hello-world');\r\n// console.log('SHA256', res);\r\n\r\n// res = SHA1('hello-world');\r\n// console.log('SHA1', res);\r\n\r\n// res = MD5('hello-world');\r\n// console.log('MD5', res);\r\n\r\n// res = MD2('hello-world');\r\n// console.log('MD2', res);\n\n//# sourceURL=webpack://sign-in-sign-up/./node_modules/hash-converter/index.js?");

/***/ }),

/***/ "./node_modules/hash-converter/md2.js":
/*!********************************************!*\
  !*** ./node_modules/hash-converter/md2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.MD2 = (message) => {\r\n\r\n    var HEX_CHARS = '0123456789abcdef'.split('');\r\n\r\n    var S = [ 0x29, 0x2E, 0x43, 0xC9, 0xA2, 0xD8, 0x7C, 0x01, 0x3D, 0x36, 0x54, 0xA1, 0xEC, 0xF0, 0x06, 0x13,\r\n        0x62, 0xA7, 0x05, 0xF3, 0xC0, 0xC7, 0x73, 0x8C, 0x98, 0x93, 0x2B, 0xD9, 0xBC, 0x4C, 0x82, 0xCA, \r\n        0x1E, 0x9B, 0x57, 0x3C, 0xFD, 0xD4, 0xE0, 0x16, 0x67, 0x42, 0x6F, 0x18, 0x8A, 0x17, 0xE5, 0x12, \r\n        0xBE, 0x4E, 0xC4, 0xD6, 0xDA, 0x9E, 0xDE, 0x49, 0xA0, 0xFB, 0xF5, 0x8E, 0xBB, 0x2F, 0xEE, 0x7A, \r\n        0xA9, 0x68, 0x79, 0x91, 0x15, 0xB2, 0x07, 0x3F, 0x94, 0xC2, 0x10, 0x89, 0x0B, 0x22, 0x5F, 0x21,\r\n        0x80, 0x7F, 0x5D, 0x9A, 0x5A, 0x90, 0x32, 0x27, 0x35, 0x3E, 0xCC, 0xE7, 0xBF, 0xF7, 0x97, 0x03, \r\n        0xFF, 0x19, 0x30, 0xB3, 0x48, 0xA5, 0xB5, 0xD1, 0xD7, 0x5E, 0x92, 0x2A, 0xAC, 0x56, 0xAA, 0xC6, \r\n        0x4F, 0xB8, 0x38, 0xD2, 0x96, 0xA4, 0x7D, 0xB6, 0x76, 0xFC, 0x6B, 0xE2, 0x9C, 0x74, 0x04, 0xF1, \r\n        0x45, 0x9D, 0x70, 0x59, 0x64, 0x71, 0x87, 0x20, 0x86, 0x5B, 0xCF, 0x65, 0xE6, 0x2D, 0xA8, 0x02, \r\n        0x1B, 0x60, 0x25, 0xAD, 0xAE, 0xB0, 0xB9, 0xF6, 0x1C, 0x46, 0x61, 0x69, 0x34, 0x40, 0x7E, 0x0F, \r\n        0x55, 0x47, 0xA3, 0x23, 0xDD, 0x51, 0xAF, 0x3A, 0xC3, 0x5C, 0xF9, 0xCE, 0xBA, 0xC5, 0xEA, 0x26, \r\n        0x2C, 0x53, 0x0D, 0x6E, 0x85, 0x28, 0x84, 0x09, 0xD3, 0xDF, 0xCD, 0xF4, 0x41, 0x81, 0x4D, 0x52, \r\n        0x6A, 0xDC, 0x37, 0xC8, 0x6C, 0xC1, 0xAB, 0xFA, 0x24, 0xE1, 0x7B, 0x08, 0x0C, 0xBD, 0xB1, 0x4A, \r\n        0x78, 0x88, 0x95, 0x8B, 0xE3, 0x63, 0xE8, 0x6D, 0xE9, 0xCB, 0xD5, 0xFE, 0x3B, 0x00, 0x1D, 0x39, \r\n        0xF2, 0xEF, 0xB7, 0x0E, 0x66, 0x58, 0xD0, 0xE4, 0xA6, 0x77, 0x72, 0xF8, 0xEB, 0x75, 0x4B, 0x0A, \r\n        0x31, 0x44, 0x50, 0xB4, 0x8F, 0xED, 0x1F, 0x1A, 0xDB, 0x99, 0x8D, 0x33, 0x9F, 0x11, 0x83, 0x14];\r\n\r\nvar M = [], X = [], C = [];\r\n\r\n    var code, i, j, k, t, L = 0, loop = 1, B,\r\n        index = 0, start = 0, bytes = 0, length = message.length;\r\n\r\n    for(i = 0;i < 16;++i) {\r\n      X[i] = C[i] = 0;\r\n    }\r\n\r\n    M[16] = M[17] = M[18] = 0;\r\n    do {\r\n      M[0] = M[16];\r\n      M[1] = M[17];\r\n      M[2] = M[18];\r\n      M[16] = M[17] = M[18] = M[3] =\r\n      M[4] = M[5] = M[6] = M[7] =\r\n      M[8] = M[9] = M[10] = M[11] =\r\n      M[12] = M[13] = M[14] = M[15] = 0;\r\n      for (i = start;index < length && i < 16; ++index) {\r\n        code = message.charCodeAt(index);\r\n        if (code < 0x80) {\r\n          M[i++] = code;\r\n        } else if (code < 0x800) {\r\n          M[i++] = 0xc0 | (code >> 6);\r\n          M[i++] = 0x80 | (code & 0x3f);\r\n        } else if (code < 0xd800 || code >= 0xe000) {\r\n          M[i++] = 0xe0 | (code >> 12);\r\n          M[i++] = 0x80 | ((code >> 6) & 0x3f);\r\n          M[i++] = 0x80 | (code & 0x3f);\r\n        } else {\r\n          code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));\r\n          M[i++] = 0xf0 | (code >> 18);\r\n          M[i++] = 0x80 | ((code >> 12) & 0x3f);\r\n          M[i++] = 0x80 | ((code >> 6) & 0x3f);\r\n          M[i++] = 0x80 | (code & 0x3f);\r\n        }\r\n      }\r\n      bytes += i - start;\r\n      start = i - 16;\r\n\r\n      if(index == length && i < 16) {\r\n        loop = 2;\r\n        t = 16 - (bytes & 15);\r\n        for(;i < 16;++i) {\r\n          M[i] = t;\r\n        }\r\n      }\r\n\r\n      for(i = 0;i < 16;++i) {\r\n        C[i] ^= S[M[i] ^ L];\r\n        L = C[i];\r\n      }\r\n\r\n      for(i = 0;i < loop;++i) {\r\n        B = i === 0 ? M : C;\r\n\r\n        X[16] = B[0];\r\n        X[32] = X[16] ^ X[0];\r\n        X[17] = B[1];\r\n        X[33] = X[17] ^ X[1];\r\n        X[18] = B[2];\r\n        X[34] = X[18] ^ X[2];\r\n        X[19] = B[3];\r\n        X[35] = X[19] ^ X[3];\r\n        X[20] = B[4];\r\n        X[36] = X[20] ^ X[4];\r\n        X[21] = B[5];\r\n        X[37] = X[21] ^ X[5];\r\n        X[22] = B[6];\r\n        X[38] = X[22] ^ X[6];\r\n        X[23] = B[7];\r\n        X[39] = X[23] ^ X[7];\r\n        X[24] = B[8];\r\n        X[40] = X[24] ^ X[8];\r\n        X[25] = B[9];\r\n        X[41] = X[25] ^ X[9];\r\n        X[26] = B[10];\r\n        X[42] = X[26] ^ X[10];\r\n        X[27] = B[11];\r\n        X[43] = X[27] ^ X[11];\r\n        X[28] = B[12];\r\n        X[44] = X[28] ^ X[12];\r\n        X[29] = B[13];\r\n        X[45] = X[29] ^ X[13];\r\n        X[30] = B[14];\r\n        X[46] = X[30] ^ X[14];\r\n        X[31] = B[15];\r\n        X[47] = X[31] ^ X[15];\r\n\r\n        t = 0;\r\n        for(j = 0;j < 18;++j) {\r\n          for(k = 0;k < 48;++k) {\r\n            X[k] = t = X[k] ^ S[t];\r\n          }\r\n          t = (t + j) & 0xFF;\r\n        }\r\n      }\r\n    } while(loop == 1);\r\n\r\n    var hex = '';\r\n    for(i = 0;i < 16;++i) {\r\n      hex += HEX_CHARS[(X[i] >> 4) & 0x0F] + HEX_CHARS[X[i] & 0x0F];\r\n    }\r\n    return hex;\r\n  };\r\n  \n\n//# sourceURL=webpack://sign-in-sign-up/./node_modules/hash-converter/md2.js?");

/***/ }),

/***/ "./node_modules/hash-converter/md5.js":
/*!********************************************!*\
  !*** ./node_modules/hash-converter/md5.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.MD5 = function (d) {\r\n    var r = M(V(Y(X(d), 8 * d.length)));\r\n    return r.toLowerCase()\r\n};\r\n\r\nfunction M(d) {\r\n    for (var _, m = \"0123456789ABCDEF\", f = \"\", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);\r\n    return f\r\n}\r\n\r\nfunction X(d) {\r\n    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;\r\n    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;\r\n    return _\r\n}\r\n\r\nfunction V(d) {\r\n    for (var _ = \"\", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);\r\n    return _\r\n}\r\n\r\nfunction Y(d, _) {\r\n    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;\r\n    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {\r\n        var h = m,\r\n            t = f,\r\n            g = r,\r\n            e = i;\r\n        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)\r\n    }\r\n    return Array(m, f, r, i)\r\n}\r\n\r\nfunction md5_cmn(d, _, m, f, r, i) {\r\n    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)\r\n}\r\n\r\nfunction md5_ff(d, _, m, f, r, i, n) {\r\n    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)\r\n}\r\n\r\nfunction md5_gg(d, _, m, f, r, i, n) {\r\n    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)\r\n}\r\n\r\nfunction md5_hh(d, _, m, f, r, i, n) {\r\n    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)\r\n}\r\n\r\nfunction md5_ii(d, _, m, f, r, i, n) {\r\n    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)\r\n}\r\n\r\nfunction safe_add(d, _) {\r\n    var m = (65535 & d) + (65535 & _);\r\n    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m\r\n}\r\n\r\nfunction bit_rol(d, _) {\r\n    return d << _ | d >>> 32 - _\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./node_modules/hash-converter/md5.js?");

/***/ }),

/***/ "./node_modules/hash-converter/sha1.js":
/*!*********************************************!*\
  !*** ./node_modules/hash-converter/sha1.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\r\n* Secure Hash Algorithm (SHA1)\r\n* http://www.webtoolkit.info/\r\n**/\r\nexports.SHA1 = (msg) => {\r\n    function rotate_left(n,s) {\r\n    var t4 = ( n<<s ) | (n>>>(32-s));\r\n    return t4;\r\n    };\r\n    function lsb_hex(val) {\r\n    var str='';\r\n    var i;\r\n    var vh;\r\n    var vl;\r\n    for( i=0; i<=6; i+=2 ) {\r\n    vh = (val>>>(i*4+4))&0x0f;\r\n    vl = (val>>>(i*4))&0x0f;\r\n    str += vh.toString(16) + vl.toString(16);\r\n    }\r\n    return str;\r\n    };\r\n    function cvt_hex(val) {\r\n    var str='';\r\n    var i;\r\n    var v;\r\n    for( i=7; i>=0; i-- ) {\r\n    v = (val>>>(i*4))&0x0f;\r\n    str += v.toString(16);\r\n    }\r\n    return str;\r\n    };\r\n    function Utf8Encode(string) {\r\n    string = string.replace(/\\r\\n/g,'\\n');\r\n    var utftext = '';\r\n    for (var n = 0; n < string.length; n++) {\r\n    var c = string.charCodeAt(n);\r\n    if (c < 128) {\r\n    utftext += String.fromCharCode(c);\r\n    }\r\n    else if((c > 127) && (c < 2048)) {\r\n    utftext += String.fromCharCode((c >> 6) | 192);\r\n    utftext += String.fromCharCode((c & 63) | 128);\r\n    }\r\n    else {\r\n    utftext += String.fromCharCode((c >> 12) | 224);\r\n    utftext += String.fromCharCode(((c >> 6) & 63) | 128);\r\n    utftext += String.fromCharCode((c & 63) | 128);\r\n    }\r\n    }\r\n    return utftext;\r\n    };\r\n    var blockstart;\r\n    var i, j;\r\n    var W = new Array(80);\r\n    var H0 = 0x67452301;\r\n    var H1 = 0xEFCDAB89;\r\n    var H2 = 0x98BADCFE;\r\n    var H3 = 0x10325476;\r\n    var H4 = 0xC3D2E1F0;\r\n    var A, B, C, D, E;\r\n    var temp;\r\n    msg = Utf8Encode(msg);\r\n    var msg_len = msg.length;\r\n    var word_array = new Array();\r\n    for( i=0; i<msg_len-3; i+=4 ) {\r\n    j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |\r\n    msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);\r\n    word_array.push( j );\r\n    }\r\n    switch( msg_len % 4 ) {\r\n    case 0:\r\n    i = 0x080000000;\r\n    break;\r\n    case 1:\r\n    i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;\r\n    break;\r\n    case 2:\r\n    i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;\r\n    break;\r\n    case 3:\r\n    i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8 | 0x80;\r\n    break;\r\n    }\r\n    word_array.push( i );\r\n    while( (word_array.length % 16) != 14 ) word_array.push( 0 );\r\n    word_array.push( msg_len>>>29 );\r\n    word_array.push( (msg_len<<3)&0x0ffffffff );\r\n    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {\r\n    for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];\r\n    for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);\r\n    A = H0;\r\n    B = H1;\r\n    C = H2;\r\n    D = H3;\r\n    E = H4;\r\n    for( i= 0; i<=19; i++ ) {\r\n    temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;\r\n    E = D;\r\n    D = C;\r\n    C = rotate_left(B,30);\r\n    B = A;\r\n    A = temp;\r\n    }\r\n    for( i=20; i<=39; i++ ) {\r\n    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;\r\n    E = D;\r\n    D = C;\r\n    C = rotate_left(B,30);\r\n    B = A;\r\n    A = temp;\r\n    }\r\n    for( i=40; i<=59; i++ ) {\r\n    temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;\r\n    E = D;\r\n    D = C;\r\n    C = rotate_left(B,30);\r\n    B = A;\r\n    A = temp;\r\n    }\r\n    for( i=60; i<=79; i++ ) {\r\n    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;\r\n    E = D;\r\n    D = C;\r\n    C = rotate_left(B,30);\r\n    B = A;\r\n    A = temp;\r\n    }\r\n    H0 = (H0 + A) & 0x0ffffffff;\r\n    H1 = (H1 + B) & 0x0ffffffff;\r\n    H2 = (H2 + C) & 0x0ffffffff;\r\n    H3 = (H3 + D) & 0x0ffffffff;\r\n    H4 = (H4 + E) & 0x0ffffffff;\r\n    }\r\n    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);\r\n   \r\n    return temp.toLowerCase();\r\n   }\n\n//# sourceURL=webpack://sign-in-sign-up/./node_modules/hash-converter/sha1.js?");

/***/ }),

/***/ "./node_modules/hash-converter/sha256.js":
/*!***********************************************!*\
  !*** ./node_modules/hash-converter/sha256.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\r\n*\r\n*  Secure Hash Algorithm (SHA256)\r\n*\r\n*  \r\n*\r\n**/\r\n\r\n\r\nexports.SHA256 = (s) => {\r\n \r\n\tvar chrsz   = 8;\r\n\tvar hexcase = 0;\r\n \r\n\tfunction safe_add (x, y) {\r\n\t\tvar lsw = (x & 0xFFFF) + (y & 0xFFFF);\r\n\t\tvar msw = (x >> 16) + (y >> 16) + (lsw >> 16);\r\n\t\treturn (msw << 16) | (lsw & 0xFFFF);\r\n\t}\r\n \r\n\tfunction S (X, n) { return ( X >>> n ) | (X << (32 - n)); }\r\n\tfunction R (X, n) { return ( X >>> n ); }\r\n\tfunction Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }\r\n\tfunction Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }\r\n\tfunction Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }\r\n\tfunction Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }\r\n\tfunction Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }\r\n\tfunction Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }\r\n \r\n\tfunction core_sha256 (m, l) {\r\n\t\tvar K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);\r\n\t\tvar HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);\r\n\t\tvar W = new Array(64);\r\n\t\tvar a, b, c, d, e, f, g, h, i, j;\r\n\t\tvar T1, T2;\r\n \r\n\t\tm[l >> 5] |= 0x80 << (24 - l % 32);\r\n\t\tm[((l + 64 >> 9) << 4) + 15] = l;\r\n \r\n\t\tfor ( var i = 0; i<m.length; i+=16 ) {\r\n\t\t\ta = HASH[0];\r\n\t\t\tb = HASH[1];\r\n\t\t\tc = HASH[2];\r\n\t\t\td = HASH[3];\r\n\t\t\te = HASH[4];\r\n\t\t\tf = HASH[5];\r\n\t\t\tg = HASH[6];\r\n\t\t\th = HASH[7];\r\n \r\n\t\t\tfor ( var j = 0; j<64; j++) {\r\n\t\t\t\tif (j < 16) W[j] = m[j + i];\r\n\t\t\t\telse W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);\r\n \r\n\t\t\t\tT1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);\r\n\t\t\t\tT2 = safe_add(Sigma0256(a), Maj(a, b, c));\r\n \r\n\t\t\t\th = g;\r\n\t\t\t\tg = f;\r\n\t\t\t\tf = e;\r\n\t\t\t\te = safe_add(d, T1);\r\n\t\t\t\td = c;\r\n\t\t\t\tc = b;\r\n\t\t\t\tb = a;\r\n\t\t\t\ta = safe_add(T1, T2);\r\n\t\t\t}\r\n \r\n\t\t\tHASH[0] = safe_add(a, HASH[0]);\r\n\t\t\tHASH[1] = safe_add(b, HASH[1]);\r\n\t\t\tHASH[2] = safe_add(c, HASH[2]);\r\n\t\t\tHASH[3] = safe_add(d, HASH[3]);\r\n\t\t\tHASH[4] = safe_add(e, HASH[4]);\r\n\t\t\tHASH[5] = safe_add(f, HASH[5]);\r\n\t\t\tHASH[6] = safe_add(g, HASH[6]);\r\n\t\t\tHASH[7] = safe_add(h, HASH[7]);\r\n\t\t}\r\n\t\treturn HASH;\r\n\t}\r\n \r\n\tfunction str2binb (str) {\r\n\t\tvar bin = Array();\r\n\t\tvar mask = (1 << chrsz) - 1;\r\n\t\tfor(var i = 0; i < str.length * chrsz; i += chrsz) {\r\n\t\t\tbin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);\r\n\t\t}\r\n\t\treturn bin;\r\n\t}\r\n \r\n\tfunction Utf8Encode(string) {\r\n\t\tstring = string.replace(/\\r\\n/g,\"\\n\");\r\n\t\tvar utftext = \"\";\r\n \r\n\t\tfor (var n = 0; n < string.length; n++) {\r\n \r\n\t\t\tvar c = string.charCodeAt(n);\r\n \r\n\t\t\tif (c < 128) {\r\n\t\t\t\tutftext += String.fromCharCode(c);\r\n\t\t\t}\r\n\t\t\telse if((c > 127) && (c < 2048)) {\r\n\t\t\t\tutftext += String.fromCharCode((c >> 6) | 192);\r\n\t\t\t\tutftext += String.fromCharCode((c & 63) | 128);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tutftext += String.fromCharCode((c >> 12) | 224);\r\n\t\t\t\tutftext += String.fromCharCode(((c >> 6) & 63) | 128);\r\n\t\t\t\tutftext += String.fromCharCode((c & 63) | 128);\r\n\t\t\t}\r\n \r\n\t\t}\r\n \r\n\t\treturn utftext;\r\n\t}\r\n \r\n\tfunction binb2hex (binarray) {\r\n\t\tvar hex_tab = hexcase ? \"0123456789ABCDEF\" : \"0123456789abcdef\";\r\n\t\tvar str = \"\";\r\n\t\tfor(var i = 0; i < binarray.length * 4; i++) {\r\n\t\t\tstr += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +\r\n\t\t\thex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);\r\n\t\t}\r\n\t\treturn str;\r\n\t}\r\n \r\n\ts = Utf8Encode(s);\r\n\treturn binb2hex(core_sha256(str2binb(s), s.length * chrsz));\r\n \r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./node_modules/hash-converter/sha256.js?");

/***/ }),

/***/ "./src/callbacks/avatarSignUp-callback.js":
/*!************************************************!*\
  !*** ./src/callbacks/avatarSignUp-callback.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarSignUpCallback\": () => (/* binding */ avatarSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction avatarSignUpCallback (file, picture) {\r\n  if (file.type.indexOf('image')) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  const reader = new FileReader\r\n\r\n  reader.onload = event => {\r\n    if (!file.type.indexOf('image')) {\r\n      picture.src = event.target.result\r\n    }\r\n  }\r\n\r\n  reader.readAsDataURL(file)\r\n\r\n  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/avatarSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/avatarSignUpClearError-callback.js":
/*!**********************************************************!*\
  !*** ./src/callbacks/avatarSignUpClearError-callback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarSignUpClearErrorCallback\": () => (/* binding */ avatarSignUpClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction avatarSignUpClearErrorCallback () {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style, {\r\n    display: ''\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/avatarSignUpClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/index.js":
/*!********************************!*\
  !*** ./src/callbacks/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignIn\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignIn),\n/* harmony export */   \"showSignUp\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignUp),\n/* harmony export */   \"loginSignUpCallback\": () => (/* reexport safe */ _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__.loginSignUpCallback),\n/* harmony export */   \"isLoginCheckedSignUp\": () => (/* reexport safe */ _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__.isLoginCheckedSignUp),\n/* harmony export */   \"loginSignUpClearErrorCallback\": () => (/* reexport safe */ _loginSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_2__.loginSignUpClearErrorCallback),\n/* harmony export */   \"passwordSignUpClearErrorCallback\": () => (/* reexport safe */ _passwordSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_3__.passwordSignUpClearErrorCallback),\n/* harmony export */   \"passwordSignUpCallback\": () => (/* reexport safe */ _passwordSignUp_callback__WEBPACK_IMPORTED_MODULE_4__.passwordSignUpCallback),\n/* harmony export */   \"avatarSignUpCallback\": () => (/* reexport safe */ _avatarSignUp_callback__WEBPACK_IMPORTED_MODULE_5__.avatarSignUpCallback),\n/* harmony export */   \"avatarSignUpClearErrorCallback\": () => (/* reexport safe */ _avatarSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_6__.avatarSignUpClearErrorCallback),\n/* harmony export */   \"submitSignUpCallback\": () => (/* reexport safe */ _submitSignUp_callback__WEBPACK_IMPORTED_MODULE_7__.submitSignUpCallback),\n/* harmony export */   \"loginSignInCallback\": () => (/* reexport safe */ _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_8__.loginSignInCallback),\n/* harmony export */   \"isLoginCheckedSignIn\": () => (/* reexport safe */ _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_8__.isLoginCheckedSignIn),\n/* harmony export */   \"loginSignInClearErrorCallback\": () => (/* reexport safe */ _loginSignInClearError_callback__WEBPACK_IMPORTED_MODULE_9__.loginSignInClearErrorCallback),\n/* harmony export */   \"passwordSignInCallback\": () => (/* reexport safe */ _passwordSignIn_callback__WEBPACK_IMPORTED_MODULE_10__.passwordSignInCallback),\n/* harmony export */   \"passwordSignInClearErrorCallback\": () => (/* reexport safe */ _passwordSignInClearError_callback__WEBPACK_IMPORTED_MODULE_11__.passwordSignInClearErrorCallback),\n/* harmony export */   \"submitSignInCallback\": () => (/* reexport safe */ _submitSignIn_callback__WEBPACK_IMPORTED_MODULE_12__.submitSignInCallback)\n/* harmony export */ });\n/* harmony import */ var _switch_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-components */ \"./src/callbacks/switch-components.js\");\n/* harmony import */ var _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginSignUp-callback */ \"./src/callbacks/loginSignUp-callback.js\");\n/* harmony import */ var _loginSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginSignUpClearError-callback */ \"./src/callbacks/loginSignUpClearError-callback.js\");\n/* harmony import */ var _passwordSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordSignUpClearError-callback */ \"./src/callbacks/passwordSignUpClearError-callback.js\");\n/* harmony import */ var _passwordSignUp_callback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passwordSignUp-callback */ \"./src/callbacks/passwordSignUp-callback.js\");\n/* harmony import */ var _avatarSignUp_callback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatarSignUp-callback */ \"./src/callbacks/avatarSignUp-callback.js\");\n/* harmony import */ var _avatarSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatarSignUpClearError-callback */ \"./src/callbacks/avatarSignUpClearError-callback.js\");\n/* harmony import */ var _submitSignUp_callback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submitSignUp-callback */ \"./src/callbacks/submitSignUp-callback.js\");\n/* harmony import */ var _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginSignIn-callback */ \"./src/callbacks/loginSignIn-callback.js\");\n/* harmony import */ var _loginSignInClearError_callback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginSignInClearError-callback */ \"./src/callbacks/loginSignInClearError-callback.js\");\n/* harmony import */ var _passwordSignIn_callback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passwordSignIn-callback */ \"./src/callbacks/passwordSignIn-callback.js\");\n/* harmony import */ var _passwordSignInClearError_callback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./passwordSignInClearError-callback */ \"./src/callbacks/passwordSignInClearError-callback.js\");\n/* harmony import */ var _submitSignIn_callback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submitSignIn-callback */ \"./src/callbacks/submitSignIn-callback.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/index.js?");

/***/ }),

/***/ "./src/callbacks/loginSignIn-callback.js":
/*!***********************************************!*\
  !*** ./src/callbacks/loginSignIn-callback.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignInCallback\": () => (/* binding */ loginSignInCallback),\n/* harmony export */   \"isLoginCheckedSignIn\": () => (/* binding */ isLoginCheckedSignIn)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nlet isLoginCheckedSignIn\r\n\r\nconst loginSignInCallback = async (event) => {\r\n  const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getUserDetailsSignIn)(event.target.value)\r\n\r\n  isLoginCheckedSignIn = true\r\n\r\n  if (response) {\r\n    localStorage.setItem('password', response.password)\r\n    localStorage.setItem('avatar', response.avatar)  \r\n  } else {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignIn.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignIn-callback.js?");

/***/ }),

/***/ "./src/callbacks/loginSignInClearError-callback.js":
/*!*********************************************************!*\
  !*** ./src/callbacks/loginSignInClearError-callback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignInClearErrorCallback\": () => (/* binding */ loginSignInClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst loginSignInClearErrorCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignIn.style, {\r\n    display: ''\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignInClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/loginSignUp-callback.js":
/*!***********************************************!*\
  !*** ./src/callbacks/loginSignUp-callback.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignUpCallback\": () => (/* binding */ loginSignUpCallback),\n/* harmony export */   \"isLoginCheckedSignUp\": () => (/* binding */ isLoginCheckedSignUp)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nlet isLoginCheckedSignUp\r\n\r\nconst loginSignUpCallback = async (event) => {\r\n  const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateLoginSignUp)(event.target.value)\r\n\r\n  isLoginCheckedSignUp = true\r\n  \r\n  if (response) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/loginSignUpClearError-callback.js":
/*!*********************************************************!*\
  !*** ./src/callbacks/loginSignUpClearError-callback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignUpClearErrorCallback\": () => (/* binding */ loginSignUpClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst loginSignUpClearErrorCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style, {\r\n    display: ''\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignUpClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignIn-callback.js":
/*!**************************************************!*\
  !*** ./src/callbacks/passwordSignIn-callback.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignInCallback\": () => (/* binding */ passwordSignInCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignInCallback = (event) => {\r\n  const passwordCheck = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validatePasswordSignIn)(event.target.value)\r\n\r\n  if (!passwordCheck) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignIn.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignIn-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignInClearError-callback.js":
/*!************************************************************!*\
  !*** ./src/callbacks/passwordSignInClearError-callback.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignInClearErrorCallback\": () => (/* binding */ passwordSignInClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignInClearErrorCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignIn.style, {\r\n    display: ''\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignInClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignUp-callback.js":
/*!**************************************************!*\
  !*** ./src/callbacks/passwordSignUp-callback.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignUpCallback\": () => (/* binding */ passwordSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst passwordSignUpCallback = (event) => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordSignUpInfo.style, {\r\n    display: ''\r\n  })\r\n  \r\n  _configs__WEBPACK_IMPORTED_MODULE_1__.passwordRule.test(event.target.value)\r\n    ? null \r\n    : Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style, {\r\n        display: 'block'\r\n      })\r\n  \r\n  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignUpClearError-callback.js":
/*!************************************************************!*\
  !*** ./src/callbacks/passwordSignUpClearError-callback.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignUpClearErrorCallback\": () => (/* binding */ passwordSignUpClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignUpClearErrorCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordSignUpInfo.style, {\r\n    display: 'block'\r\n  })\r\n  \r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style, {\r\n    display: ''\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignUpClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/submitSignIn-callback.js":
/*!************************************************!*\
  !*** ./src/callbacks/submitSignIn-callback.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitSignInCallback\": () => (/* binding */ submitSignInCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst submitSignInCallback = () => {\r\n  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignIn)()) {\r\n    setTimeout(() => {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.showAvatarSignIn)()\r\n    }, 300)\r\n\r\n    setTimeout(() => {\r\n      Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.congratsSignIn.style, {\r\n        display: 'block'\r\n      })\r\n    }, 600)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/submitSignIn-callback.js?");

/***/ }),

/***/ "./src/callbacks/submitSignUp-callback.js":
/*!************************************************!*\
  !*** ./src/callbacks/submitSignUp-callback.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitSignUpCallback\": () => (/* binding */ submitSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nconst hash = __webpack_require__(/*! hash-converter */ \"./node_modules/hash-converter/index.js\");\r\n\r\nconst submitSignUpCallback = () => {\r\n  const digest = hash.SHA256(_helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.value);\r\n\r\n  fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${_helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.value}`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify({\r\n      password: digest,\r\n      avatar: _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp.src\r\n    })\r\n  })\r\n  \r\n  setTimeout(() => {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_1__.congratsSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  }, 300)\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/submitSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/switch-components.js":
/*!********************************************!*\
  !*** ./src/callbacks/switch-components.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignUp\": () => (/* binding */ showSignUp),\n/* harmony export */   \"showSignIn\": () => (/* binding */ showSignIn)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction showSignUp () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'block')\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'none')\r\n}\r\n\r\nfunction showSignIn () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'block')\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'none')\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/switch-components.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signInTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignInElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignInCallback,\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignInClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignInCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignInClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignIn.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.submitSignInCallback\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onfocus = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onfocus = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignIn.onclick = null\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-in'));\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signUpTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignUpCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignUpClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignUpCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignUpClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onchange = event => {\r\n      ;(0,_callbacks__WEBPACK_IMPORTED_MODULE_2__.avatarSignUpCallback)(event.target.files[0], _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp)\r\n    }\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.avatarSignUpClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignUp.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.submitSignUpCallback\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onfocus = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onfocus = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onchange = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onclick = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignUp.onclick = null\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-up'));\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/components/two-anchors.js":
/*!***************************************!*\
  !*** ./src/components/two-anchors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass TwoAnchors extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    const wrapper = shadow.appendChild(document.createElement('main'))\r\n    wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.twoAnchorsTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getTabs)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getElems)()\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signInTab.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignIn\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signUpTab.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignUp\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signInTab.onclick = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signUpTab.onclick = null\r\n  }\r\n}\r\n\r\ncustomElements.define('two-anchors', TwoAnchors)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('two-anchors'));\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/two-anchors.js?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"origin\": () => (/* reexport safe */ _origin__WEBPACK_IMPORTED_MODULE_0__.origin),\n/* harmony export */   \"passwordRule\": () => (/* reexport safe */ _password_rule__WEBPACK_IMPORTED_MODULE_1__.passwordRule)\n/* harmony export */ });\n/* harmony import */ var _origin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./origin */ \"./src/configs/origin.js\");\n/* harmony import */ var _password_rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-rule */ \"./src/configs/password-rule.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/index.js?");

/***/ }),

/***/ "./src/configs/origin.js":
/*!*******************************!*\
  !*** ./src/configs/origin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"origin\": () => (/* binding */ origin)\n/* harmony export */ });\nconst origin = 'https://garevna-rest-api.glitch.me'\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/origin.js?");

/***/ }),

/***/ "./src/configs/password-rule.js":
/*!**************************************!*\
  !*** ./src/configs/password-rule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordRule\": () => (/* binding */ passwordRule)\n/* harmony export */ });\nconst passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/password-rule.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-in.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-in.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignIn\": () => (/* binding */ loginSignIn),\n/* harmony export */   \"loginErrorSignIn\": () => (/* binding */ loginErrorSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* binding */ passwordSignIn),\n/* harmony export */   \"passwordErrorSignIn\": () => (/* binding */ passwordErrorSignIn),\n/* harmony export */   \"avatarParagraphSignIn\": () => (/* binding */ avatarParagraphSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* binding */ submitSignIn),\n/* harmony export */   \"congratsSignIn\": () => (/* binding */ congratsSignIn),\n/* harmony export */   \"getSignInElems\": () => (/* binding */ getSignInElems)\n/* harmony export */ });\nlet\r\n  loginSignIn,\r\n  loginErrorSignIn,\r\n  passwordSignIn,\r\n  passwordErrorSignIn,\r\n  avatarParagraphSignIn,\r\n  submitSignIn,\r\n  congratsSignIn\r\n\r\nfunction getSignInElems (shadow) {\r\n  [\r\n    loginSignIn,\r\n    loginErrorSignIn,\r\n    passwordSignIn,\r\n    passwordErrorSignIn,\r\n    avatarParagraphSignIn,\r\n    submitSignIn,\r\n    congratsSignIn\r\n  ] = [\r\n    'login',\r\n    'login-error',\r\n    'password',\r\n    'password-error',\r\n    'avatar-paragraph',\r\n    'submit',\r\n    'congrats'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-in.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-up.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-up.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSignUpElems\": () => (/* binding */ getSignUpElems),\n/* harmony export */   \"loginSignUp\": () => (/* binding */ loginSignUp),\n/* harmony export */   \"loginErrorSignUp\": () => (/* binding */ loginErrorSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* binding */ passwordSignUp),\n/* harmony export */   \"passwordSignUpInfo\": () => (/* binding */ passwordSignUpInfo),\n/* harmony export */   \"passwordErrorSignUp\": () => (/* binding */ passwordErrorSignUp),\n/* harmony export */   \"avatarSelectSignUp\": () => (/* binding */ avatarSelectSignUp),\n/* harmony export */   \"avatarPictureSignUp\": () => (/* binding */ avatarPictureSignUp),\n/* harmony export */   \"avatarErrorSignUp\": () => (/* binding */ avatarErrorSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* binding */ submitSignUp),\n/* harmony export */   \"congratsSignUp\": () => (/* binding */ congratsSignUp)\n/* harmony export */ });\nlet\r\n  loginSignUp,\r\n  loginErrorSignUp,\r\n  passwordSignUp,\r\n  passwordSignUpInfo,\r\n  passwordErrorSignUp,\r\n  avatarSelectSignUp,\r\n  avatarPictureSignUp,\r\n  avatarErrorSignUp,\r\n  submitSignUp,\r\n  congratsSignUp\r\n\r\nfunction getSignUpElems (shadow) {\r\n  [\r\n    loginSignUp,\r\n    loginErrorSignUp,\r\n    passwordSignUp,\r\n    passwordSignUpInfo,\r\n    passwordErrorSignUp,\r\n    avatarSelectSignUp,\r\n    avatarPictureSignUp,\r\n    avatarErrorSignUp,\r\n    submitSignUp,\r\n    congratsSignUp\r\n  ] = [\r\n    'login',\r\n    'login-error',\r\n    'password',\r\n    'password-info',\r\n    'password-error',\r\n    'avatar-select',\r\n    'avatar-picture',\r\n    'avatar-error',\r\n    'submit',\r\n    'congrats'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-up.js?");

/***/ }),

/***/ "./src/helpers/getUserDetailsSignIn.js":
/*!*********************************************!*\
  !*** ./src/helpers/getUserDetailsSignIn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserDetailsSignIn\": () => (/* binding */ getUserDetailsSignIn)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\nconst getUserDetailsSignIn = async (login) => {\r\n  const { error, password, avatar } =\r\n    await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${login}`)).json()\r\n  \r\n  return error ? null : { password, avatar }\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/getUserDetailsSignIn.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpElement),\n/* harmony export */   \"signInElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInElement),\n/* harmony export */   \"signUpTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpTab),\n/* harmony export */   \"signInTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInTab),\n/* harmony export */   \"getTabs\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getTabs),\n/* harmony export */   \"getElems\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getElems),\n/* harmony export */   \"loginSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.loginSignUp),\n/* harmony export */   \"loginErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.loginErrorSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp),\n/* harmony export */   \"passwordSignUpInfo\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordSignUpInfo),\n/* harmony export */   \"passwordErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordErrorSignUp),\n/* harmony export */   \"avatarSelectSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp),\n/* harmony export */   \"avatarPictureSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp),\n/* harmony export */   \"avatarErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarErrorSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.submitSignUp),\n/* harmony export */   \"congratsSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.congratsSignUp),\n/* harmony export */   \"getSignUpElems\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems),\n/* harmony export */   \"loginSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.loginSignIn),\n/* harmony export */   \"loginErrorSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.loginErrorSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.passwordSignIn),\n/* harmony export */   \"passwordErrorSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.passwordErrorSignIn),\n/* harmony export */   \"avatarParagraphSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.avatarParagraphSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.submitSignIn),\n/* harmony export */   \"congratsSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.congratsSignIn),\n/* harmony export */   \"getSignInElems\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.getSignInElems),\n/* harmony export */   \"validateLoginSignUp\": () => (/* reexport safe */ _validateLoginSignUp__WEBPACK_IMPORTED_MODULE_3__.validateLoginSignUp),\n/* harmony export */   \"validateFormSignUp\": () => (/* reexport safe */ _validateFormSignUp__WEBPACK_IMPORTED_MODULE_4__.validateFormSignUp),\n/* harmony export */   \"getUserDetailsSignIn\": () => (/* reexport safe */ _getUserDetailsSignIn__WEBPACK_IMPORTED_MODULE_5__.getUserDetailsSignIn),\n/* harmony export */   \"validatePasswordSignIn\": () => (/* reexport safe */ _validatePasswordSignIn__WEBPACK_IMPORTED_MODULE_6__.validatePasswordSignIn),\n/* harmony export */   \"validateFormSignIn\": () => (/* reexport safe */ _validateFormSignIn__WEBPACK_IMPORTED_MODULE_7__.validateFormSignIn),\n/* harmony export */   \"showAvatarSignIn\": () => (/* reexport safe */ _showAvatarSignIn__WEBPACK_IMPORTED_MODULE_8__.showAvatarSignIn)\n/* harmony export */ });\n/* harmony import */ var _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-and-components-refs */ \"./src/helpers/tabs-and-components-refs.js\");\n/* harmony import */ var _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elems-of-sign-up */ \"./src/helpers/elems-of-sign-up.js\");\n/* harmony import */ var _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elems-of-sign-in */ \"./src/helpers/elems-of-sign-in.js\");\n/* harmony import */ var _validateLoginSignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateLoginSignUp */ \"./src/helpers/validateLoginSignUp.js\");\n/* harmony import */ var _validateFormSignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateFormSignUp */ \"./src/helpers/validateFormSignUp.js\");\n/* harmony import */ var _getUserDetailsSignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getUserDetailsSignIn */ \"./src/helpers/getUserDetailsSignIn.js\");\n/* harmony import */ var _validatePasswordSignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validatePasswordSignIn */ \"./src/helpers/validatePasswordSignIn.js\");\n/* harmony import */ var _validateFormSignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validateFormSignIn */ \"./src/helpers/validateFormSignIn.js\");\n/* harmony import */ var _showAvatarSignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./showAvatarSignIn */ \"./src/helpers/showAvatarSignIn.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/showAvatarSignIn.js":
/*!*****************************************!*\
  !*** ./src/helpers/showAvatarSignIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showAvatarSignIn\": () => (/* binding */ showAvatarSignIn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/helpers/index.js\");\n\r\n\r\nfunction showAvatarSignIn () {\r\n  Object.assign(___WEBPACK_IMPORTED_MODULE_0__.avatarParagraphSignIn.style, {\r\n    display: 'block'\r\n  })\r\n\r\n  const avatarPicture = document.createElement('img')\r\n  ___WEBPACK_IMPORTED_MODULE_0__.avatarParagraphSignIn.insertAdjacentElement('afterend', avatarPicture)\r\n  avatarPicture.setAttribute('id', 'avatar-picture')\r\n  avatarPicture.setAttribute('alt', 'user avatar')\r\n  avatarPicture.src = localStorage.avatar\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/showAvatarSignIn.js?");

/***/ }),

/***/ "./src/helpers/tabs-and-components-refs.js":
/*!*************************************************!*\
  !*** ./src/helpers/tabs-and-components-refs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTabs\": () => (/* binding */ getTabs),\n/* harmony export */   \"getElems\": () => (/* binding */ getElems),\n/* harmony export */   \"signUpElement\": () => (/* binding */ signUpElement),\n/* harmony export */   \"signInElement\": () => (/* binding */ signInElement),\n/* harmony export */   \"signUpTab\": () => (/* binding */ signUpTab),\n/* harmony export */   \"signInTab\": () => (/* binding */ signInTab)\n/* harmony export */ });\nlet signUpElement, signInElement, signUpTab, signInTab \r\n\r\nfunction getTabs (shadow) {\r\n  [signUpTab, signInTab] = [\r\n    'sign-up-tab',\r\n    'sign-in-tab'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\nfunction getElems () {\r\n  [signUpElement, signInElement] = [\r\n    'sign-up',\r\n    'sign-in'\r\n  ].map(elem => document.getElementsByTagName(elem)[0])\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/tabs-and-components-refs.js?");

/***/ }),

/***/ "./src/helpers/validateFormSignIn.js":
/*!*******************************************!*\
  !*** ./src/helpers/validateFormSignIn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateFormSignIn\": () => (/* binding */ validateFormSignIn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\nfunction validateFormSignIn () {\r\n  if (\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.loginErrorSignIn.style.display && ___WEBPACK_IMPORTED_MODULE_0__.loginSignIn.value)\r\n    &&\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignIn.style.display && ___WEBPACK_IMPORTED_MODULE_0__.passwordSignIn.value)\r\n    &&\r\n    _callbacks__WEBPACK_IMPORTED_MODULE_1__.isLoginCheckedSignIn\r\n  ) {\r\n    return true\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validateFormSignIn.js?");

/***/ }),

/***/ "./src/helpers/validateFormSignUp.js":
/*!*******************************************!*\
  !*** ./src/helpers/validateFormSignUp.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateFormSignUp\": () => (/* binding */ validateFormSignUp)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\nfunction validateFormSignUp () {\r\n  if (\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.loginSignUp.value)\r\n    &&\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.passwordSignUp.value)\r\n    && \r\n    (!___WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.avatarSelectSignUp.value)\r\n    &&\r\n    _callbacks__WEBPACK_IMPORTED_MODULE_1__.isLoginCheckedSignUp\r\n  ) {\r\n    ___WEBPACK_IMPORTED_MODULE_0__.submitSignUp.disabled = false\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validateFormSignUp.js?");

/***/ }),

/***/ "./src/helpers/validateLoginSignUp.js":
/*!********************************************!*\
  !*** ./src/helpers/validateLoginSignUp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateLoginSignUp\": () => (/* binding */ validateLoginSignUp)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\nconst validateLoginSignUp = async (login) => {\r\n  const { error } = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${login}`)).json()\r\n  return !error\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validateLoginSignUp.js?");

/***/ }),

/***/ "./src/helpers/validatePasswordSignIn.js":
/*!***********************************************!*\
  !*** ./src/helpers/validatePasswordSignIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePasswordSignIn\": () => (/* binding */ validatePasswordSignIn)\n/* harmony export */ });\nconst hash = __webpack_require__(/*! hash-converter */ \"./node_modules/hash-converter/index.js\");\r\n\r\nfunction validatePasswordSignIn (password) {\r\n  const originalPassword = localStorage.getItem('password')\r\n\r\n  const digest = hash.SHA256(password)\r\n\r\n  return digest === originalPassword\r\n}\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validatePasswordSignIn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_two_anchors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/two-anchors */ \"./src/components/two-anchors.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_components_sign_up__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\ndocument.body.appendChild(_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\ndocument.body.appendChild(_components_two_anchors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/index.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoAnchorsTemplate\": () => (/* reexport safe */ _twoAnchorsTemplate__WEBPACK_IMPORTED_MODULE_0__.twoAnchorsTemplate),\n/* harmony export */   \"signInTemplate\": () => (/* reexport safe */ _signInTemplate__WEBPACK_IMPORTED_MODULE_1__.signInTemplate),\n/* harmony export */   \"signUpTemplate\": () => (/* reexport safe */ _signUpTemplate__WEBPACK_IMPORTED_MODULE_2__.signUpTemplate)\n/* harmony export */ });\n/* harmony import */ var _twoAnchorsTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twoAnchorsTemplate */ \"./src/templates/twoAnchorsTemplate.js\");\n/* harmony import */ var _signInTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signInTemplate */ \"./src/templates/signInTemplate.js\");\n/* harmony import */ var _signUpTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signUpTemplate */ \"./src/templates/signUpTemplate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/index.js?");

/***/ }),

/***/ "./src/templates/signInTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/signInTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInTemplate\": () => (/* binding */ signInTemplate)\n/* harmony export */ });\nconst signInTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p class=\"field-heading\">Your login</p>\r\n    <div class=\"field-wrapper\">\r\n      <input id=\"login\" />\r\n      <div id=\"login-error\">\r\n        <p>Such user doesn't exist</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"field-heading\">Your password</p>\r\n    <div class=\"field-wrapper\">\r\n      <input id=\"password\" type=\"password\" />\r\n      <div id=\"password-error\">\r\n        <p>Incorrect password</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"field-heading\" id=\"avatar-paragraph\">Your avatar</p>\r\n\r\n    <div id=\"button-paragraph\">\r\n      <button id=\"submit\">Sign in</button>\r\n    </div>\r\n\r\n    <div id=\"congrats\">\r\n      <p>Congratulations!</p>\r\n      <p>You are now logged in!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 240px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    .field-heading {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    .field-heading:first-child {\r\n      margin-top: 2px;\r\n    }\r\n\r\n    .field-wrapper {\r\n        position: relative;\r\n    }\r\n\r\n    input {\r\n      width: 222px;\r\n    }\r\n\r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    #login-error, #password-error {\r\n      position: absolute;\r\n      display: none;\r\n      border: 1px solid #f00;\r\n      padding: 2px;\r\n      background: #ffeded;\r\n      right: -6px;\r\n      top: -29px;\r\n    }\r\n\r\n    #login-error>p, #password-error>p, #congrats>p {\r\n      text-align: center;\r\n      margin: 0;\r\n      font-style: italic;\r\n      font-size: 14px;\r\n    }\r\n\r\n    #login-error::after, #password-error::after {\r\n      content: '';\r\n      position: absolute;\r\n      display: block;\r\n      width: 0;\r\n      height: 0;\r\n      left: 50%;\r\n      bottom: -7px;\r\n      transform: translateX(-50%);\r\n      border-top: 6px solid #f00;\r\n      border-left: 6px solid transparent;\r\n      border-right: 6px solid transparent;\r\n    }\r\n\r\n    #avatar-paragraph {\r\n      display: none;\r\n    }\r\n\r\n    #avatar-picture {\r\n      display: block;\r\n      width: 130px;\r\n      height: 130px;\r\n      margin-bottom: 10px;\r\n      cursor: pointer;\r\n      border: 1px solid #767676;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    #button-paragraph {\r\n      text-align: center;\r\n      margin: 16px 0 4px;\r\n    }\r\n\r\n    #congrats {\r\n      position: absolute;\r\n      display: none;\r\n      width: 100%;\r\n      box-sizing: border-box;\r\n      border: 1px solid #090;\r\n      background: #bdf4bd;\r\n      padding: 2px;\r\n      top: auto;\r\n      bottom: -50px;\r\n      left: 0;\r\n    }\r\n\r\n    #congrats>p {\r\n      font-size: 16px;\r\n    }\r\n\r\n    #congrats>p:first-child {\r\n      text-transform: uppercase;\r\n    }\r\n  </style>\r\n`\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signInTemplate.js?");

/***/ }),

/***/ "./src/templates/signUpTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/signUpTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpTemplate\": () => (/* binding */ signUpTemplate)\n/* harmony export */ });\nconst signUpTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p class=\"field-heading\">Your login</p>\r\n    <div class=\"field-wrapper\">\r\n      <input id=\"login\" />\r\n      <div id=\"login-error\">\r\n        <p>This login is not available.</p>\r\n        <p>Choose another login</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"field-heading\">Your password</p>\r\n    <div class=\"field-wrapper higher-index\">\r\n      <input id=\"password\" type=\"password\" />\r\n      <div id=\"password-info\">\r\n        <p>Password rules:</p>\r\n        <ul>\r\n          <li><span>From 6 to 16 characters</span></li>\r\n          <li><span>Only English letters</span></li>\r\n          <li><span>One digit (min.)</span></li>\r\n          <li><span>One of: !@#$%^&* (min.)</span></li>\r\n        </ul>\r\n      </div>\r\n      <div id=\"password-error\">\r\n        <p>Incorrect password.</p>\r\n        <p>See password rules</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"field-heading\">Your avatar</p>\r\n    <div class=\"field-wrapper\">\r\n      <label for=\"avatar-select\">\r\n        <img src=\"https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png\" id=\"avatar-picture\" alt=\"user avatar\">\r\n      </label>\r\n      <input id=\"avatar-select\" type=\"file\" />\r\n      <div id=\"avatar-error\">\r\n        <p>Illegal file type.</p>\r\n        <p>Choose image file</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"button-paragraph\">\r\n      <button id=\"submit\" disabled>Sign up</button>\r\n    </div>\r\n\r\n    <div id=\"congrats\">\r\n      <p>Congratulations!</p>\r\n      <p>You are registered now!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 240px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    .field-heading {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    .field-heading:first-child {\r\n      margin-top: 2px;\r\n    }\r\n\r\n    .field-wrapper {\r\n      position: relative;\r\n    }\r\n\r\n    input {\r\n      width: 222px;\r\n    }\r\n\r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    #login-error, #password-error, #avatar-error {\r\n      position: absolute;\r\n      display: none;\r\n      border: 1px solid #f00;\r\n      padding: 2px;\r\n      background: #ffeded;\r\n      right: -6px;\r\n      top: -46px;\r\n    }\r\n\r\n    #login-error>p, #password-error>p, #avatar-error>p, #congrats>p {\r\n      text-align: center;\r\n      margin: 0;\r\n      font-style: italic;\r\n      font-size: 14px;\r\n    }\r\n\r\n    #login-error::after, #password-error::after, #avatar-error::after, #password-info::after {\r\n      content: '';\r\n      position: absolute;\r\n      display: block;\r\n      width: 0;\r\n      height: 0;\r\n      left: 50%;\r\n      bottom: -7px;\r\n      transform: translateX(-50%);\r\n      border-top: 6px solid #f00;\r\n      border-left: 6px solid transparent;\r\n      border-right: 6px solid transparent;\r\n    }\r\n\r\n    #password-info {\r\n      position: absolute;\r\n      display: none;\r\n      border-radius: 4px;\r\n      border: 1px solid #ddd;\r\n      padding: 4px;\r\n      font-size: 12px;\r\n      top: 32px;\r\n      right: -16px;\r\n      background: #fff;\r\n      pointer-events: none;\r\n    }\r\n\r\n    #password-info p {\r\n      margin: 0;\r\n      font-style: italic;\r\n    }\r\n\r\n    #password-info ul {\r\n      padding-inline-start: 16px;\r\n      margin: 4px 0 0;\r\n    }\r\n\r\n    #password-info span {\r\n      position: relative;\r\n      left: -3px;\r\n    }\r\n\r\n    #password-info::after {\r\n      border-top: none;\r\n      border-bottom: 6px solid #ddd;\r\n      top: -7px;\r\n    }\r\n\r\n    .higher-index {\r\n      z-index: 5;\r\n    }\r\n\r\n    #avatar-picture {\r\n      display: block;\r\n      width: 130px;\r\n      height: 130px;\r\n      margin-bottom: 10px;\r\n      cursor: pointer;\r\n      border: 1px solid #767676;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    input[type=\"file\"] {\r\n      display: none;\r\n    }\r\n\r\n    #avatar-error {\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\r\n\r\n    #avatar-error::after {\r\n      left: -7px;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      border-right: 6px solid #f00;\r\n      border-top: 6px solid transparent;\r\n      border-bottom: 6px solid transparent;\r\n      border-left: none;\r\n    }\r\n\r\n    #button-paragraph {\r\n      text-align: center;\r\n      margin: 16px 0 4px;\r\n    }\r\n\r\n    #congrats {\r\n      position: absolute;\r\n      display: none;\r\n      width: 100%;\r\n      box-sizing: border-box;\r\n      border: 1px solid #090;\r\n      background: #bdf4bd;\r\n      padding: 2px;\r\n      top: auto;\r\n      bottom: -50px;\r\n      left: 0;\r\n    }\r\n\r\n    #congrats>p {\r\n      font-size: 16px;\r\n    }\r\n\r\n    #congrats>p:first-child {\r\n      text-transform: uppercase;\r\n    }\r\n  </style>\r\n`\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signUpTemplate.js?");

/***/ }),

/***/ "./src/templates/twoAnchorsTemplate.js":
/*!*********************************************!*\
  !*** ./src/templates/twoAnchorsTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoAnchorsTemplate\": () => (/* binding */ twoAnchorsTemplate)\n/* harmony export */ });\nconst twoAnchorsTemplate = `\r\n  <div class=\"anchors\">\r\n    <span id=\"sign-up-tab\">Sign up</span>\r\n    <span id=\"sign-in-tab\">Sign in</span>\r\n  </div>\r\n\r\n  <style>\r\n    .anchors {\r\n      text-align: center;\r\n      border-bottom: 1px solid #000;\r\n      padding-bottom: 5px;\r\n      width: 256px;\r\n      margin: 0 auto;\r\n    }\r\n    \r\n    span {\r\n      font-weight: 700;\r\n      font-variant: small-caps;\r\n      margin: 10px;\r\n      color: #551a8b;\r\n      cursor: pointer;\r\n    }\r\n  </style>\r\n`\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/twoAnchorsTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;