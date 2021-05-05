(window["webpackJsonpmy-app"] = window["webpackJsonpmy-app"] || []).push([[0], Array(33).concat([function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
            e
    }
    n.d(t, "a", (function() {
            return r
        }
    ))
}
    , , function(e, t, n) {
        "use strict";
        n(107),
            n(173),
            n(175)
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = c(n(87))
            , o = c(n(79))
            , i = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
                t
        }(n(1))
            , a = c(n(380))
            , s = c(n(217));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = {
            duration: 3,
            mask: !0
        }
            , l = void 0
            , f = "am-toast";
        function T(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.duration
                , c = arguments[3]
                , T = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.mask
                , S = {
                info: "",
                success: "success",
                fail: "fail",
                offline: "dislike",
                loading: "loading"
            }[t];
            !function(e, t) {
                var n;
                l && (l.destroy(),
                    l = null),
                    a.default.newInstance({
                        prefixCls: f,
                        style: {},
                        transitionName: "am-fade",
                        className: (0,
                            o.default)((n = {},
                            (0,
                                r.default)(n, f + "-mask", e),
                            (0,
                                r.default)(n, f + "-nomask", !e),
                            n))
                    }, (function(e) {
                            return t && t(e)
                        }
                    ))
            }(T, (function(t) {
                    l = t,
                        t.notice({
                            duration: n,
                            style: {},
                            content: S ? i.createElement("div", {
                                className: f + "-text " + f + "-text-icon",
                                role: "alert",
                                "aria-live": "assertive"
                            }, i.createElement(s.default, {
                                type: S,
                                size: "lg"
                            }), i.createElement("div", {
                                className: f + "-text-info"
                            }, e)) : i.createElement("div", {
                                className: f + "-text",
                                role: "alert",
                                "aria-live": "assertive"
                            }, i.createElement("div", null, e)),
                            closable: !0,
                            onClose: function() {
                                c && c(),
                                    t.destroy(),
                                    t = null,
                                    l = null
                            }
                        })
                }
            ))
        }
        t.default = {
            SHORT: 3,
            LONG: 8,
            show: function(e, t, n) {
                return T(e, "info", t, (function() {}
                ), n)
            },
            info: function(e, t, n, r) {
                return T(e, "info", t, n, r)
            },
            success: function(e, t, n, r) {
                return T(e, "success", t, n, r)
            },
            fail: function(e, t, n, r) {
                return T(e, "fail", t, n, r)
            },
            offline: function(e, t, n, r) {
                return T(e, "offline", t, n, r)
            },
            loading: function(e, t, n, r) {
                return T(e, "loading", t, n, r)
            },
            hide: function() {
                l && (l.destroy(),
                    l = null)
            },
            config: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = e.duration
                    , n = void 0 === t ? 3 : t
                    , r = e.mask;
                u.duration = n,
                !1 === r && (u.mask = !1)
            }
        },
            e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, "a", (function() {
                return r
            }
        ))
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function o(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
                e
        }
        n.d(t, "a", (function() {
                return o
            }
        ))
    }
    , , , , function(e, t, n) {
        "use strict";
        function r(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var n = []
                        , r = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (c) {
                        o = !0,
                            i = c
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        n.d(t, "a", (function() {
                return r
            }
        ))
    }
    , function(module, exports, __webpack_require__) {
        (function(process, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function() {
                    "use strict";
                    var ERROR = "input is invalid type"
                        , WINDOW = "object" === typeof window
                        , root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" === typeof self
                        , NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
                    NODE_JS ? root = global : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === typeof module && module.exports, AMD = __webpack_require__(170), ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer),
                            blocks = new Uint32Array(buffer)
                    }
                    !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                    ),
                    !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                            return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                        }
                    );
                    var createOutputMethod = function(e) {
                        return function(t) {
                            return new Md5(!0).update(t)[e]()
                        }
                    }
                        , createMethod = function() {
                        var e = createOutputMethod("hex");
                        NODE_JS && (e = nodeWrap(e)),
                            e.create = function() {
                                return new Md5
                            }
                            ,
                            e.update = function(t) {
                                return e.create().update(t)
                            }
                        ;
                        for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                            var n = OUTPUT_TYPES[t];
                            e[n] = createOutputMethod(n)
                        }
                        return e
                    }
                        , nodeWrap = function nodeWrap(method) {
                        var crypto = eval("require('crypto')")
                            , Buffer = eval("require('buffer').Buffer")
                            , nodeMethod = function(e) {
                            if ("string" === typeof e)
                                return crypto.createHash("md5").update(e, "utf8").digest("hex");
                            if (null === e || void 0 === e)
                                throw ERROR;
                            return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                                Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e)
                        };
                        return nodeMethod
                    };
                    function Md5(e) {
                        if (e)
                            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                                this.blocks = blocks,
                                this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var t = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(t),
                                this.blocks = new Uint32Array(t)
                        } else
                            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                            this.finalized = this.hashed = !1,
                            this.first = !0
                    }
                    Md5.prototype.update = function(e) {
                        if (!this.finalized) {
                            var t, n = typeof e;
                            if ("string" !== n) {
                                if ("object" !== n)
                                    throw ERROR;
                                if (null === e)
                                    throw ERROR;
                                if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                                    e = new Uint8Array(e);
                                else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                                    throw ERROR;
                                t = !0
                            }
                            for (var r, o, i = 0, a = e.length, s = this.blocks, c = this.buffer8; i < a; ) {
                                if (this.hashed && (this.hashed = !1,
                                    s[0] = s[16],
                                    s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                                    t)
                                    if (ARRAY_BUFFER)
                                        for (o = this.start; i < a && o < 64; ++i)
                                            c[o++] = e[i];
                                    else
                                        for (o = this.start; i < a && o < 64; ++i)
                                            s[o >> 2] |= e[i] << SHIFT[3 & o++];
                                else if (ARRAY_BUFFER)
                                    for (o = this.start; i < a && o < 64; ++i)
                                        (r = e.charCodeAt(i)) < 128 ? c[o++] = r : r < 2048 ? (c[o++] = 192 | r >> 6,
                                            c[o++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (c[o++] = 224 | r >> 12,
                                            c[o++] = 128 | r >> 6 & 63,
                                            c[o++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)),
                                            c[o++] = 240 | r >> 18,
                                            c[o++] = 128 | r >> 12 & 63,
                                            c[o++] = 128 | r >> 6 & 63,
                                            c[o++] = 128 | 63 & r);
                                else
                                    for (o = this.start; i < a && o < 64; ++i)
                                        (r = e.charCodeAt(i)) < 128 ? s[o >> 2] |= r << SHIFT[3 & o++] : r < 2048 ? (s[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : r < 55296 || r >= 57344 ? (s[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)),
                                            s[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                                this.lastByteIndex = o,
                                    this.bytes += o - this.start,
                                    o >= 64 ? (this.start = o - 64,
                                        this.hash(),
                                        this.hashed = !0) : this.start = o
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                                this.bytes = this.bytes % 4294967296),
                                this
                        }
                    }
                        ,
                        Md5.prototype.finalize = function() {
                            if (!this.finalized) {
                                this.finalized = !0;
                                var e = this.blocks
                                    , t = this.lastByteIndex;
                                e[t >> 2] |= EXTRA[3 & t],
                                t >= 56 && (this.hashed || this.hash(),
                                    e[0] = e[16],
                                    e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                                    e[14] = this.bytes << 3,
                                    e[15] = this.hBytes << 3 | this.bytes >>> 29,
                                    this.hash()
                            }
                        }
                        ,
                        Md5.prototype.hash = function() {
                            var e, t, n, r, o, i, a = this.blocks;
                            this.first ? t = ((t = ((e = ((e = a[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (n = ((n = (-271733879 ^ (r = ((r = (-1732584194 ^ 2004318071 & e) + a[1] - 117830708) << 12 | r >>> 20) + e << 0) & (-271733879 ^ e)) + a[2] - 1126478375) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[3] - 1316259209) << 22 | t >>> 10) + n << 0 : (e = this.h0,
                                t = this.h1,
                                n = this.h2,
                                t = ((t += ((e = ((e += ((r = this.h3) ^ t & (n ^ r)) + a[0] - 680876936) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[1] - 389564586) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[2] + 606105819) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[3] - 1044525330) << 22 | t >>> 10) + n << 0),
                                t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[5] + 1200080426) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[6] - 1473231341) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[7] - 45705983) << 22 | t >>> 10) + n << 0,
                                t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[9] - 1958414417) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[10] - 42063) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[11] - 1990404162) << 22 | t >>> 10) + n << 0,
                                t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[13] - 40341101) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[14] - 1502002290) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[15] + 1236535329) << 22 | t >>> 10) + n << 0,
                                t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + a[6] - 1069501632) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[11] + 643717713) << 14 | n >>> 18) + r << 0) ^ r)) + a[0] - 373897302) << 20 | t >>> 12) + n << 0,
                                t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + a[10] + 38016083) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[15] - 660478335) << 14 | n >>> 18) + r << 0) ^ r)) + a[4] - 405537848) << 20 | t >>> 12) + n << 0,
                                t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + a[14] - 1019803690) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[3] - 187363961) << 14 | n >>> 18) + r << 0) ^ r)) + a[8] + 1163531501) << 20 | t >>> 12) + n << 0,
                                t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + a[2] - 51403784) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[7] + 1735328473) << 14 | n >>> 18) + r << 0) ^ r)) + a[12] - 1926607734) << 20 | t >>> 12) + n << 0,
                                t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[5] - 378558) << 4 | e >>> 28) + t << 0)) + a[8] - 2022574463) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[11] + 1839030562) << 16 | n >>> 16) + r << 0)) + a[14] - 35309556) << 23 | t >>> 9) + n << 0,
                                t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + a[4] + 1272893353) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[7] - 155497632) << 16 | n >>> 16) + r << 0)) + a[10] - 1094730640) << 23 | t >>> 9) + n << 0,
                                t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[13] + 681279174) << 4 | e >>> 28) + t << 0)) + a[0] - 358537222) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[3] - 722521979) << 16 | n >>> 16) + r << 0)) + a[6] + 76029189) << 23 | t >>> 9) + n << 0,
                                t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[9] - 640364487) << 4 | e >>> 28) + t << 0)) + a[12] - 421815835) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[15] + 530742520) << 16 | n >>> 16) + r << 0)) + a[2] - 995338651) << 23 | t >>> 9) + n << 0,
                                t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~n)) + a[7] + 1126891415) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[14] - 1416354905) << 15 | n >>> 17) + r << 0) | ~e)) + a[5] - 57434055) << 21 | t >>> 11) + n << 0,
                                t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~n)) + a[3] - 1894986606) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[10] - 1051523) << 15 | n >>> 17) + r << 0) | ~e)) + a[1] - 2054922799) << 21 | t >>> 11) + n << 0,
                                t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~n)) + a[15] - 30611744) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[6] - 1560198380) << 15 | n >>> 17) + r << 0) | ~e)) + a[13] + 1309151649) << 21 | t >>> 11) + n << 0,
                                t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~n)) + a[11] - 1120210379) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[2] + 718787259) << 15 | n >>> 17) + r << 0) | ~e)) + a[9] - 343485551) << 21 | t >>> 11) + n << 0,
                                this.first ? (this.h0 = e + 1732584193 << 0,
                                    this.h1 = t - 271733879 << 0,
                                    this.h2 = n - 1732584194 << 0,
                                    this.h3 = r + 271733878 << 0,
                                    this.first = !1) : (this.h0 = this.h0 + e << 0,
                                    this.h1 = this.h1 + t << 0,
                                    this.h2 = this.h2 + n << 0,
                                    this.h3 = this.h3 + r << 0)
                        }
                        ,
                        Md5.prototype.hex = function() {
                            this.finalize();
                            var e = this.h0
                                , t = this.h1
                                , n = this.h2
                                , r = this.h3;
                            return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15]
                        }
                        ,
                        Md5.prototype.toString = Md5.prototype.hex,
                        Md5.prototype.digest = function() {
                            this.finalize();
                            var e = this.h0
                                , t = this.h1
                                , n = this.h2
                                , r = this.h3;
                            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
                        }
                        ,
                        Md5.prototype.array = Md5.prototype.digest,
                        Md5.prototype.arrayBuffer = function() {
                            this.finalize();
                            var e = new ArrayBuffer(16)
                                , t = new Uint32Array(e);
                            return t[0] = this.h0,
                                t[1] = this.h1,
                                t[2] = this.h2,
                                t[3] = this.h3,
                                e
                        }
                        ,
                        Md5.prototype.buffer = Md5.prototype.arrayBuffer,
                        Md5.prototype.base64 = function() {
                            for (var e, t, n, r = "", o = this.array(), i = 0; i < 15; )
                                e = o[i++],
                                    t = o[i++],
                                    n = o[i++],
                                    r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                            return e = o[i],
                                r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "=="
                        }
                    ;
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports,
                    AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return exports
                    }
                        .call(exports, __webpack_require__, exports, module),
                    void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                }()
            }
        ).call(this, __webpack_require__(134), __webpack_require__(19))
    }
    , , , , function(module, exports, __webpack_require__) {
        (function(global) {
                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                !function(e, t) {
                    module.exports = t(e)
                }("undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : this, (function(global) {
                        "use strict";
                        global = global || {};
                        var _Base64 = global.Base64, version = "2.5.1", buffer;
                        if (module.exports)
                            try {
                                buffer = eval("require('buffer').Buffer")
                            } catch (err) {
                                buffer = void 0
                            }
                        var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                            , b64tab = function(e) {
                            for (var t = {}, n = 0, r = e.length; n < r; n++)
                                t[e.charAt(n)] = n;
                            return t
                        }(b64chars)
                            , fromCharCode = String.fromCharCode
                            , cb_utob = function(e) {
                            if (e.length < 2)
                                return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t)
                        }
                            , re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
                            , utob = function(e) {
                            return e.replace(re_utob, cb_utob)
                        }
                            , cb_encode = function(e) {
                            var t = [0, 2, 1][e.length % 3]
                                , n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                            return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(63 & n)].join("")
                        }
                            , btoa = global.btoa ? function(e) {
                                return global.btoa(e)
                            }
                            : function(e) {
                                return e.replace(/[\s\S]{1,3}/g, cb_encode)
                            }
                            , _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                                return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64")
                            }
                            : function(e) {
                                return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64")
                            }
                            : function(e) {
                                return btoa(utob(e))
                            }
                            , encode = function(e, t) {
                            return t ? _encode(String(e)).replace(/[+\/]/g, (function(e) {
                                    return "+" == e ? "-" : "_"
                                }
                            )).replace(/=/g, "") : _encode(String(e))
                        }
                            , encodeURI = function(e) {
                            return encode(e, !0)
                        }
                            , re_btou = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"),"g")
                            , cb_btou = function(e) {
                            switch (e.length) {
                                case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return fromCharCode(55296 + (t >>> 10)) + fromCharCode(56320 + (1023 & t));
                                case 3:
                                    return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        }
                            , btou = function(e) {
                            return e.replace(re_btou, cb_btou)
                        }
                            , cb_decode = function(e) {
                            var t = e.length
                                , n = t % 4
                                , r = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0)
                                , o = [fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r)];
                            return o.length -= [0, 0, 2, 1][n],
                                o.join("")
                        }
                            , _atob = global.atob ? function(e) {
                                return global.atob(e)
                            }
                            : function(e) {
                                return e.replace(/\S{1,4}/g, cb_decode)
                            }
                            , atob = function(e) {
                            return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        }
                            , _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                                return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString()
                            }
                            : function(e) {
                                return (e.constructor === buffer.constructor ? e : new buffer(e,"base64")).toString()
                            }
                            : function(e) {
                                return btou(_atob(e))
                            }
                            , decode = function(e) {
                            return _decode(String(e).replace(/[-_]/g, (function(e) {
                                    return "-" == e ? "+" : "/"
                                }
                            )).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        }
                            , noConflict = function() {
                            var e = global.Base64;
                            return global.Base64 = _Base64,
                                e
                        };
                        if (global.Base64 = {
                            VERSION: version,
                            atob: atob,
                            btoa: btoa,
                            fromBase64: decode,
                            toBase64: encode,
                            utob: utob,
                            encode: encode,
                            encodeURI: encodeURI,
                            btou: btou,
                            decode: decode,
                            noConflict: noConflict,
                            __buffer__: buffer
                        },
                        "function" === typeof Object.defineProperty) {
                            var noEnum = function(e) {
                                return {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            };
                            global.Base64.extendString = function() {
                                Object.defineProperty(String.prototype, "fromBase64", noEnum((function() {
                                        return decode(this)
                                    }
                                ))),
                                    Object.defineProperty(String.prototype, "toBase64", noEnum((function(e) {
                                            return encode(this, e)
                                        }
                                    ))),
                                    Object.defineProperty(String.prototype, "toBase64URI", noEnum((function() {
                                            return encode(this, !0)
                                        }
                                    )))
                            }
                        }
                        return global.Meteor && (Base64 = global.Base64),
                            module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [],
                                __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                    return global.Base64
                                }
                                    .apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                            void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),
                            {
                                Base64: global.Base64
                            }
                    }
                ))
            }
        ).call(this, __webpack_require__(19))
    }
    , function(e, t, n) {
        e.exports = n(219)
    }
    , function(e, t, n) {
        var r, o;
        !function(i) {
            if (void 0 === (o = "function" === typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o),
                !0,
                e.exports = i(),
                !!0) {
                var a = window.Cookies
                    , s = window.Cookies = i();
                s.noConflict = function() {
                    return window.Cookies = a,
                        s
                }
            }
        }((function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            t[r] = n[r]
                    }
                    return t
                }
                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function n(r) {
                    function o() {}
                    function i(t, n, i) {
                        if ("undefined" !== typeof document) {
                            "number" === typeof (i = e({
                                path: "/"
                            }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                                i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                var a = JSON.stringify(n);
                                /^[\{\[]/.test(a) && (n = a)
                            } catch (u) {}
                            n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                                t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var c in i)
                                i[c] && (s += "; " + c,
                                !0 !== i[c] && (s += "=" + i[c].split(";")[0]));
                            return document.cookie = t + "=" + n + s
                        }
                    }
                    function a(e, n) {
                        if ("undefined" !== typeof document) {
                            for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                var s = i[a].split("=")
                                    , c = s.slice(1).join("=");
                                n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                try {
                                    var u = t(s[0]);
                                    if (c = (r.read || r)(c, u) || t(c),
                                        n)
                                        try {
                                            c = JSON.parse(c)
                                        } catch (l) {}
                                    if (o[u] = c,
                                    e === u)
                                        break
                                } catch (l) {}
                            }
                            return e ? o[e] : o
                        }
                    }
                    return o.set = i,
                        o.get = function(e) {
                            return a(e, !1)
                        }
                        ,
                        o.getJSON = function(e) {
                            return a(e, !0)
                        }
                        ,
                        o.remove = function(t, n) {
                            i(t, "", e(n, {
                                expires: -1
                            }))
                        }
                        ,
                        o.defaults = {},
                        o.withConverter = n,
                        o
                }((function() {}
                ))
            }
        ))
    }
    , function(e, t, n) {
        (e.exports ? function(t) {
                e.exports = t()
            }
            : n(235))((function() {
                "use strict";
                var e, t = {
                    mobileDetectRules: {
                        phones: {
                            iPhone: "\\biPhone\\b|\\biPod\\b",
                            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                            Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            Asus: "Asus.*Galaxy|PadFone.*Mobile",
                            NokiaLumia: "Lumia [0-9]{3,4}",
                            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            Palm: "PalmSource|Palm",
                            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            Alcatel: "Alcatel",
                            Nintendo: "Nintendo (3DS|Switch)",
                            Amoi: "Amoi",
                            INQ: "INQ",
                            OnePlus: "ONEPLUS",
                            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        tablets: {
                            iPad: "iPad|iPad.*Mobile",
                            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                            GoogleTablet: "Android.*Pixel C",
                            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
                            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                            BlackBerryTablet: "PlayBook|RIM Tablet",
                            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                            LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
                            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            IRUTablet: "M702pro",
                            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            NokiaLumiaTablet: "Lumia 2520",
                            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            FlyTablet: "IQ310|Fly Vision",
                            bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                            NecTablet: "\\bN-06D|\\bN-08D",
                            PantechTablet: "Pantech.*P4100",
                            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            NabiTablet: "Android.*\\bNabi",
                            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            PlaystationTablet: "Playstation.*(Portable|Vita)",
                            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            DPSTablet: "DPS Dream 9|DPS Dual 7",
                            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            iMobileTablet: "i-mobile i-note",
                            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            AMPETablet: "Android.* A78 ",
                            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            TecnoTablet: "TECNO P9|TECNO DP8D",
                            JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            FX2Tablet: "FX2 PAD7|FX2 PAD10",
                            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            CaptivaTablet: "CAPTIVA PAD",
                            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                            JaytechTablet: "TPC-PA762",
                            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                            AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                            MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                            MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                            UbislateTablet: "UbiSlate[\\s]?7C",
                            PocketBookTablet: "Pocketbook",
                            KocasoTablet: "\\b(TB-1207)\\b",
                            HisenseTablet: "\\b(F5281|E2371)\\b",
                            Hudl: "Hudl HT7S3|Hudl 2",
                            TelstraTablet: "T-Hub2",
                            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                        },
                        oss: {
                            AndroidOS: "Android",
                            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                            WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                            iPadOS: "CPU OS 13",
                            MeeGoOS: "MeeGo",
                            MaemoOS: "Maemo",
                            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            webOS: "webOS|hpwOS",
                            badaOS: "\\bBada\\b",
                            BREWOS: "BREW"
                        },
                        uas: {
                            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            Dolfin: "\\bDolfin\\b",
                            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                            Skyfire: "Skyfire",
                            Edge: "Mobile Safari/[.0-9]* Edge",
                            IE: "IEMobile|MSIEMobile",
                            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                            Bolt: "bolt",
                            TeaShark: "teashark",
                            Blazer: "Blazer",
                            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            WeChat: "\\bMicroMessenger\\b",
                            UCBrowser: "UC.*Browser|UCWEB",
                            baiduboxapp: "baiduboxapp",
                            baidubrowser: "baidubrowser",
                            DiigoBrowser: "DiigoBrowser",
                            Mercury: "\\bMercury\\b",
                            ObigoBrowser: "Obigo",
                            NetFront: "NF-Browser",
                            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                        },
                        props: {
                            Mobile: "Mobile/[VER]",
                            Build: "Build/[VER]",
                            Version: "Version/[VER]",
                            VendorID: "VendorID/[VER]",
                            iPad: "iPad.*CPU[a-z ]+[VER]",
                            iPhone: "iPhone.*CPU[a-z ]+[VER]",
                            iPod: "iPod.*CPU[a-z ]+[VER]",
                            Kindle: "Kindle/[VER]",
                            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            Coast: ["Coast/[VER]"],
                            Dolfin: "Dolfin/[VER]",
                            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                            Fennec: "Fennec/[VER]",
                            Edge: "Edge/[VER]",
                            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                            NetFront: "NetFront/[VER]",
                            NokiaBrowser: "NokiaBrowser/[VER]",
                            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                            MQQBrowser: "MQQBrowser/[VER]",
                            MicroMessenger: "MicroMessenger/[VER]",
                            baiduboxapp: "baiduboxapp/[VER]",
                            baidubrowser: "baidubrowser/[VER]",
                            SamsungBrowser: "SamsungBrowser/[VER]",
                            Iron: "Iron/[VER]",
                            Safari: ["Version/[VER]", "Safari/[VER]"],
                            Skyfire: "Skyfire/[VER]",
                            Tizen: "Tizen/[VER]",
                            Webkit: "webkit[ /][VER]",
                            PaleMoon: "PaleMoon/[VER]",
                            Gecko: "Gecko/[VER]",
                            Trident: "Trident/[VER]",
                            Presto: "Presto/[VER]",
                            Goanna: "Goanna/[VER]",
                            iOS: " \\bi?OS\\b [VER][ ;]{1}",
                            Android: "Android [VER]",
                            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            BREW: "BREW [VER]",
                            Java: "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        utils: {
                            Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
                            MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                            DesktopMode: "WPDesktop",
                            TV: "SonyDTV|HbbTV",
                            WebKit: "(webkit)[ /]([\\w.]+)",
                            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                            Watch: "SM-V700"
                        }
                    },
                    detectMobileBrowsers: {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i
                    }
                }, n = Object.prototype.hasOwnProperty;
                function r(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                }
                function o(e, t) {
                    var n, r, o = e.length;
                    if (!o || !t)
                        return !1;
                    for (n = t.toLowerCase(),
                             r = 0; r < o; ++r)
                        if (n === e[r].toLowerCase())
                            return !0;
                    return !1
                }
                function i(e) {
                    for (var t in e)
                        n.call(e, t) && (e[t] = new RegExp(e[t],"i"))
                }
                function a(e, t) {
                    this.ua = function(e) {
                        return (e || "").substr(0, 500)
                    }(e),
                        this._cache = {},
                        this.maxPhoneWidth = t || 600
                }
                return t.FALLBACK_PHONE = "UnknownPhone",
                    t.FALLBACK_TABLET = "UnknownTablet",
                    t.FALLBACK_MOBILE = "UnknownMobile",
                    e = "isArray"in Array ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    ,
                    function() {
                        var r, o, a, s, c, u, l = t.mobileDetectRules;
                        for (r in l.props)
                            if (n.call(l.props, r)) {
                                for (o = l.props[r],
                                     e(o) || (o = [o]),
                                         c = o.length,
                                         s = 0; s < c; ++s)
                                    (u = (a = o[s]).indexOf("[VER]")) >= 0 && (a = a.substring(0, u) + "([\\w._\\+]+)" + a.substring(u + 5)),
                                        o[s] = new RegExp(a,"i");
                                l.props[r] = o
                            }
                        i(l.oss),
                            i(l.phones),
                            i(l.tablets),
                            i(l.uas),
                            i(l.utils),
                            l.oss0 = {
                                WindowsPhoneOS: l.oss.WindowsPhoneOS,
                                WindowsMobileOS: l.oss.WindowsMobileOS
                            }
                    }(),
                    t.findMatch = function(e, t) {
                        for (var r in e)
                            if (n.call(e, r) && e[r].test(t))
                                return r;
                        return null
                    }
                    ,
                    t.findMatches = function(e, t) {
                        var r = [];
                        for (var o in e)
                            n.call(e, o) && e[o].test(t) && r.push(o);
                        return r
                    }
                    ,
                    t.getVersionStr = function(e, r) {
                        var o, i, a, s, c = t.mobileDetectRules.props;
                        if (n.call(c, e))
                            for (a = (o = c[e]).length,
                                     i = 0; i < a; ++i)
                                if (null !== (s = o[i].exec(r)))
                                    return s[1];
                        return null
                    }
                    ,
                    t.getVersion = function(e, n) {
                        var r = t.getVersionStr(e, n);
                        return r ? t.prepareVersionNo(r) : NaN
                    }
                    ,
                    t.prepareVersionNo = function(e) {
                        var t;
                        return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
                        t.length > 1 && (e = t[0] + ".",
                            t.shift(),
                            e += t.join("")),
                            Number(e)
                    }
                    ,
                    t.isMobileFallback = function(e) {
                        return t.detectMobileBrowsers.fullPattern.test(e) || t.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                    }
                    ,
                    t.isTabletFallback = function(e) {
                        return t.detectMobileBrowsers.tabletPattern.test(e)
                    }
                    ,
                    t.prepareDetectionCache = function(e, n, r) {
                        if (void 0 === e.mobile) {
                            var o, i, s;
                            if (i = t.findMatch(t.mobileDetectRules.tablets, n))
                                return e.mobile = e.tablet = i,
                                    void (e.phone = null);
                            if (o = t.findMatch(t.mobileDetectRules.phones, n))
                                return e.mobile = e.phone = o,
                                    void (e.tablet = null);
                            t.isMobileFallback(n) ? void 0 === (s = a.isPhoneSized(r)) ? (e.mobile = t.FALLBACK_MOBILE,
                                e.tablet = e.phone = null) : s ? (e.mobile = e.phone = t.FALLBACK_PHONE,
                                e.tablet = null) : (e.mobile = e.tablet = t.FALLBACK_TABLET,
                                e.phone = null) : t.isTabletFallback(n) ? (e.mobile = e.tablet = t.FALLBACK_TABLET,
                                e.phone = null) : e.mobile = e.tablet = e.phone = null
                        }
                    }
                    ,
                    t.mobileGrade = function(e) {
                        var t = null !== e.mobile();
                        return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"),
                            "C")
                    }
                    ,
                    t.detectOS = function(e) {
                        return t.findMatch(t.mobileDetectRules.oss0, e) || t.findMatch(t.mobileDetectRules.oss, e)
                    }
                    ,
                    t.getDeviceSmallerSide = function() {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                    }
                    ,
                    a.prototype = {
                        constructor: a,
                        mobile: function() {
                            return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                                this._cache.mobile
                        },
                        phone: function() {
                            return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                                this._cache.phone
                        },
                        tablet: function() {
                            return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                                this._cache.tablet
                        },
                        userAgent: function() {
                            return void 0 === this._cache.userAgent && (this._cache.userAgent = t.findMatch(t.mobileDetectRules.uas, this.ua)),
                                this._cache.userAgent
                        },
                        userAgents: function() {
                            return void 0 === this._cache.userAgents && (this._cache.userAgents = t.findMatches(t.mobileDetectRules.uas, this.ua)),
                                this._cache.userAgents
                        },
                        os: function() {
                            return void 0 === this._cache.os && (this._cache.os = t.detectOS(this.ua)),
                                this._cache.os
                        },
                        version: function(e) {
                            return t.getVersion(e, this.ua)
                        },
                        versionStr: function(e) {
                            return t.getVersionStr(e, this.ua)
                        },
                        is: function(e) {
                            return o(this.userAgents(), e) || r(e, this.os()) || r(e, this.phone()) || r(e, this.tablet()) || o(t.findMatches(t.mobileDetectRules.utils, this.ua), e)
                        },
                        match: function(e) {
                            return e instanceof RegExp || (e = new RegExp(e,"i")),
                                e.test(this.ua)
                        },
                        isPhoneSized: function(e) {
                            return a.isPhoneSized(e || this.maxPhoneWidth)
                        },
                        mobileGrade: function() {
                            return void 0 === this._cache.grade && (this._cache.grade = t.mobileGrade(this)),
                                this._cache.grade
                        }
                    },
                    "undefined" !== typeof window && window.screen ? a.isPhoneSized = function(e) {
                            return e < 0 ? void 0 : t.getDeviceSmallerSide() <= e
                        }
                        : a.isPhoneSized = function() {}
                    ,
                    a._impl = t,
                    a.version = "1.4.4 2019-09-21",
                    a
            }
        ))
    }
    , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var r = n(147)
            , o = n(220)
            , i = Object.prototype.toString;
        function a(e) {
            return "[object Array]" === i.call(e)
        }
        function s(e) {
            return null !== e && "object" === typeof e
        }
        function c(e) {
            return "[object Function]" === i.call(e)
        }
        function u(e, t) {
            if (null !== e && "undefined" !== typeof e)
                if ("object" !== typeof e && (e = [e]),
                    a(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: a,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === i.call(e)
            },
            isBuffer: o,
            isFormData: function(e) {
                return "undefined" !== typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" === typeof e
            },
            isNumber: function(e) {
                return "number" === typeof e
            },
            isObject: s,
            isUndefined: function(e) {
                return "undefined" === typeof e
            },
            isDate: function(e) {
                return "[object Date]" === i.call(e)
            },
            isFile: function(e) {
                return "[object File]" === i.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === i.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return s(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
            },
            forEach: u,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    "object" === typeof t[r] && "object" === typeof n ? t[r] = e(t[r], n) : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++)
                    u(arguments[r], n);
                return t
            },
            deepMerge: function e() {
                var t = {};
                function n(n, r) {
                    "object" === typeof t[r] && "object" === typeof n ? t[r] = e(t[r], n) : t[r] = "object" === typeof n ? e({}, n) : n
                }
                for (var r = 0, o = arguments.length; r < o; r++)
                    u(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return u(t, (function(t, o) {
                        e[o] = n && "function" === typeof t ? r(t, n) : t
                    }
                )),
                    e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }
    , , , , function(e, t, n) {
        "use strict";
        t.__esModule = !0,
            t.default = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(135), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        (0,
                            i.default)(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                    t
            }
        }()
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(116), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : (0,
                i.default)(t)) && "function" !== typeof t ? e : t
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(209))
            , o = a(n(213))
            , i = a(n(116));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : (0,
                    i.default)(t)));
            e.prototype = (0,
                o.default)(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (r.default ? (0,
                r.default)(e, t) : e.__proto__ = t)
        }
    }
    , , , , , , , , function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }
    , function(e, t) {
        var n = e.exports = {
            version: "2.6.10"
        };
        "number" == typeof __e && (__e = n)
    }
    , function(e, t, n) {
        e.exports = !n(96)((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
        ))
    }
    , function(e, t, n) {
        var r;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var i = typeof r;
                        if ("string" === i || "number" === i)
                            e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var a = o.apply(null, r);
                            a && e.push(a)
                        } else if ("object" === i)
                            for (var s in r)
                                n.call(r, s) && r[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
                e.exports = o) : void 0 === (r = function() {
                return o
            }
                .apply(t, [])) || (e.exports = r)
        }()
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(180), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = i.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    }
    , function(e, t, n) {
        var r = n(95)
            , o = n(137)
            , i = n(108)
            , a = Object.defineProperty;
        t.f = n(78) ? Object.defineProperty : function(e, t, n) {
            if (r(e),
                t = i(t, !0),
                r(n),
                o)
                try {
                    return a(e, t, n)
                } catch (s) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
                e
        }
    }
    , function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }
    , , , , , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(135), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function(e, t, n) {
            return t in e ? (0,
                i.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
    }
    , function(e, t, n) {
        var r = n(76)
            , o = n(77)
            , i = n(136)
            , a = n(89)
            , s = n(82)
            , c = function e(t, n, c) {
            var u, l, f, T = t & e.F, S = t & e.G, d = t & e.S, p = t & e.P, b = t & e.B, h = t & e.W, A = S ? o : o[n] || (o[n] = {}), P = A.prototype, M = S ? r : d ? r[n] : (r[n] || {}).prototype;
            for (u in S && (c = n),
                c)
                (l = !T && M && void 0 !== M[u]) && s(A, u) || (f = l ? M[u] : c[u],
                    A[u] = S && "function" != typeof M[u] ? c[u] : b && l ? i(f, r) : h && M[u] == f ? function(e) {
                        var t = function(t, n, r) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t,n)
                                }
                                return new e(t,n,r)
                            }
                            return e.apply(this, arguments)
                        };
                        return t.prototype = e.prototype,
                            t
                    }(f) : p && "function" == typeof f ? i(Function.call, f) : f,
                p && ((A.virtual || (A.virtual = {}))[u] = f,
                t & e.R && P && !P[u] && a(P, u, f)))
        };
        c.F = 1,
            c.G = 2,
            c.S = 4,
            c.P = 8,
            c.B = 16,
            c.W = 32,
            c.U = 64,
            c.R = 128,
            e.exports = c
    }
    , function(e, t, n) {
        var r = n(81)
            , o = n(102);
        e.exports = n(78) ? function(e, t, n) {
                return r.f(e, t, o(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                    e
            }
    }
    , function(e, t) {
        e.exports = function(e) {
            return "object" === typeof e ? null !== e : "function" === typeof e
        }
    }
    , function(e, t, n) {
        var r = n(140)
            , o = n(109);
        e.exports = function(e) {
            return r(o(e))
        }
    }
    , function(e, t, n) {
        var r = n(112)("wks")
            , o = n(105)
            , i = n(76).Symbol
            , a = "function" == typeof i;
        (e.exports = function(e) {
                return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
            }
        ).store = r
    }
    , , , function(e, t, n) {
        var r = n(90);
        e.exports = function(e) {
            if (!r(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }
    , , , , , , function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , function(e, t, n) {
        var r = n(139)
            , o = n(113);
        e.exports = Object.keys || function(e) {
            return r(e, o)
        }
    }
    , function(e, t) {
        e.exports = !0
    }
    , function(e, t) {
        var n = 0
            , r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }
    , function(e, t) {
        t.f = {}.propertyIsEnumerable
    }
    , function(e, t, n) {
        "use strict";
        n(171),
            n(172)
    }
    , function(e, t, n) {
        var r = n(90);
        e.exports = function(e, t) {
            if (!r(e))
                return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
                return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if (void 0 == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    }
    , function(e, t) {
        var n = Math.ceil
            , r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }
    , function(e, t, n) {
        var r = n(112)("keys")
            , o = n(105);
        e.exports = function(e) {
            return r[e] || (r[e] = o(e))
        }
    }
    , function(e, t, n) {
        var r = n(77)
            , o = n(76)
            , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            }
        )("versions", []).push({
            version: r.version,
            mode: n(104) ? "pure" : "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t, n) {
        var r = n(109);
        e.exports = function(e) {
            return Object(r(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(187))
            , o = a(n(199))
            , i = "function" === typeof o.default && "symbol" === typeof r.default ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
            }
        ;
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = "function" === typeof o.default && "symbol" === i(r.default) ? function(e) {
                return "undefined" === typeof e ? "undefined" : i(e)
            }
            : function(e) {
                return e && "function" === typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : "undefined" === typeof e ? "undefined" : i(e)
            }
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t, n) {
        var r = n(95)
            , o = n(192)
            , i = n(113)
            , a = n(111)("IE_PROTO")
            , s = function() {}
            , c = function() {
            var e, t = n(138)("iframe"), r = i.length;
            for (t.style.display = "none",
                     n(193).appendChild(t),
                     t.src = "javascript:",
                     (e = t.contentWindow.document).open(),
                     e.write("<script>document.F=Object<\/script>"),
                     e.close(),
                     c = e.F; r--; )
                delete c.prototype[i[r]];
            return c()
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s.prototype = r(e),
                n = new s,
                s.prototype = null,
                n[a] = e) : n = c(),
                void 0 === t ? n : o(n, t)
        }
    }
    , function(e, t, n) {
        var r = n(81).f
            , o = n(82)
            , i = n(92)("toStringTag");
        e.exports = function(e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t, n) {
        t.f = n(92)
    }
    , function(e, t, n) {
        var r = n(76)
            , o = n(77)
            , i = n(104)
            , a = n(120)
            , s = n(81).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    }
    , , , , , , , , , , , , , function(e, t) {
        var n, r, o = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function s(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                    setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" === typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" === typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var c, u = [], l = !1, f = -1;
        function T() {
            l && c && (l = !1,
                c.length ? u = c.concat(u) : f = -1,
            u.length && S())
        }
        function S() {
            if (!l) {
                var e = s(T);
                l = !0;
                for (var t = u.length; t; ) {
                    for (c = u,
                             u = []; ++f < t; )
                        c && c[f].run();
                    f = -1,
                        t = u.length
                }
                c = null,
                    l = !1,
                    function(e) {
                        if (r === clearTimeout)
                            return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout)
                            return r = clearTimeout,
                                clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }
        function d(e, t) {
            this.fun = e,
                this.array = t
        }
        function p() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            u.push(new d(e,t)),
            1 !== u.length || l || s(S)
        }
            ,
            d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            o.title = "browser",
            o.browser = !0,
            o.env = {},
            o.argv = [],
            o.version = "",
            o.versions = {},
            o.on = p,
            o.addListener = p,
            o.once = p,
            o.off = p,
            o.removeListener = p,
            o.removeAllListeners = p,
            o.emit = p,
            o.prependListener = p,
            o.prependOnceListener = p,
            o.listeners = function(e) {
                return []
            }
            ,
            o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function() {
                return "/"
            }
            ,
            o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function() {
                return 0
            }
    }
    , function(e, t, n) {
        e.exports = {
            default: n(176),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        var r = n(178);
        e.exports = function(e, t, n) {
            if (r(e),
            void 0 === t)
                return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    }
                        ;
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    }
                        ;
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , function(e, t, n) {
        e.exports = !n(78) && !n(96)((function() {
                return 7 != Object.defineProperty(n(138)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
        ))
    }
    , function(e, t, n) {
        var r = n(90)
            , o = n(76).document
            , i = r(o) && r(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    }
    , function(e, t, n) {
        var r = n(82)
            , o = n(91)
            , i = n(184)(!1)
            , a = n(111)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = o(e), c = 0, u = [];
            for (n in s)
                n != a && r(s, n) && u.push(n);
            for (; t.length > c; )
                r(s, n = t[c++]) && (~i(u, n) || u.push(n));
            return u
        }
    }
    , function(e, t, n) {
        var r = n(141);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(104)
            , o = n(88)
            , i = n(143)
            , a = n(89)
            , s = n(117)
            , c = n(191)
            , u = n(119)
            , l = n(194)
            , f = n(92)("iterator")
            , T = !([].keys && "next"in [].keys())
            , S = function() {
            return this
        };
        e.exports = function(e, t, n, d, p, b, h) {
            c(n, t, d);
            var A, P, M, m = function(e) {
                if (!T && e in y)
                    return y[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this,e)
                        }
                }
                return function() {
                    return new n(this,e)
                }
            }, v = t + " Iterator", G = "values" == p, E = !1, y = e.prototype, C = y[f] || y["@@iterator"] || p && y[p], B = C || m(p), H = p ? G ? m("entries") : B : void 0, g = "Array" == t && y.entries || C;
            if (g && (M = l(g.call(new e))) !== Object.prototype && M.next && (u(M, v, !0),
            r || "function" == typeof M[f] || a(M, f, S)),
            G && C && "values" !== C.name && (E = !0,
                    B = function() {
                        return C.call(this)
                    }
            ),
            r && !h || !T && !E && y[f] || a(y, f, B),
                s[t] = B,
                s[v] = S,
                p)
                if (A = {
                    values: G ? B : m("values"),
                    keys: b ? B : m("keys"),
                    entries: H
                },
                    h)
                    for (P in A)
                        P in y || i(y, P, A[P]);
                else
                    o(o.P + o.F * (T || E), t, A);
            return A
        }
    }
    , function(e, t, n) {
        e.exports = n(89)
    }
    , function(e, t, n) {
        var r = n(139)
            , o = n(113).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, o)
        }
    }
    , function(e, t, n) {
        var r = n(106)
            , o = n(102)
            , i = n(91)
            , a = n(108)
            , s = n(82)
            , c = n(137)
            , u = Object.getOwnPropertyDescriptor;
        t.f = n(78) ? u : function(e, t) {
            if (e = i(e),
                t = a(t, !0),
                c)
                try {
                    return u(e, t)
                } catch (n) {}
            if (s(e, t))
                return o(!r.f.call(e, t), e[t])
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            if (e.indexOf)
                return e.indexOf(t);
            for (var n = 0; n < e.length; ++n)
                if (e[n] === t)
                    return n;
            return -1
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var i;
            if (n)
                i = n(t);
            else if (r.isURLSearchParams(t))
                i = t.toString();
            else {
                var a = [];
                r.forEach(t, (function(e, t) {
                        null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e],
                            r.forEach(e, (function(e) {
                                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                                        a.push(o(t) + "=" + o(e))
                                }
                            )))
                    }
                )),
                    i = a.join("&")
            }
            if (i) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
                var r = n(61)
                    , o = n(225)
                    , i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                function a(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var s = {
                    adapter: function() {
                        var e;
                        return "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t) ? e = n(151) : "undefined" !== typeof XMLHttpRequest && (e = n(151)),
                            e
                    }(),
                    transformRequest: [function(e, t) {
                        return o(t, "Accept"),
                            o(t, "Content-Type"),
                            r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                                e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"),
                                JSON.stringify(e)) : e
                    }
                    ],
                    transformResponse: [function(e) {
                        if ("string" === typeof e)
                            try {
                                e = JSON.parse(e)
                            } catch (t) {}
                        return e
                    }
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(e) {
                        s.headers[e] = {}
                    }
                )),
                    r.forEach(["post", "put", "patch"], (function(e) {
                            s.headers[e] = r.merge(i)
                        }
                    )),
                    e.exports = s
            }
        ).call(this, n(134))
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61)
            , o = n(226)
            , i = n(148)
            , a = n(228)
            , s = n(229)
            , c = n(152);
        e.exports = function(e) {
            return new Promise((function(t, u) {
                    var l = e.data
                        , f = e.headers;
                    r.isFormData(l) && delete f["Content-Type"];
                    var T = new XMLHttpRequest;
                    if (e.auth) {
                        var S = e.auth.username || ""
                            , d = e.auth.password || "";
                        f.Authorization = "Basic " + btoa(S + ":" + d)
                    }
                    if (T.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0),
                        T.timeout = e.timeout,
                        T.onreadystatechange = function() {
                            if (T && 4 === T.readyState && (0 !== T.status || T.responseURL && 0 === T.responseURL.indexOf("file:"))) {
                                var n = "getAllResponseHeaders"in T ? a(T.getAllResponseHeaders()) : null
                                    , r = {
                                    data: e.responseType && "text" !== e.responseType ? T.response : T.responseText,
                                    status: T.status,
                                    statusText: T.statusText,
                                    headers: n,
                                    config: e,
                                    request: T
                                };
                                o(t, u, r),
                                    T = null
                            }
                        }
                        ,
                        T.onabort = function() {
                            T && (u(c("Request aborted", e, "ECONNABORTED", T)),
                                T = null)
                        }
                        ,
                        T.onerror = function() {
                            u(c("Network Error", e, null, T)),
                                T = null
                        }
                        ,
                        T.ontimeout = function() {
                            u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", T)),
                                T = null
                        }
                        ,
                        r.isStandardBrowserEnv()) {
                        var p = n(230)
                            , b = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? p.read(e.xsrfCookieName) : void 0;
                        b && (f[e.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader"in T && r.forEach(f, (function(e, t) {
                            "undefined" === typeof l && "content-type" === t.toLowerCase() ? delete f[t] : T.setRequestHeader(t, e)
                        }
                    )),
                    e.withCredentials && (T.withCredentials = !0),
                        e.responseType)
                        try {
                            T.responseType = e.responseType
                        } catch (h) {
                            if ("json" !== e.responseType)
                                throw h
                        }
                    "function" === typeof e.onDownloadProgress && T.addEventListener("progress", e.onDownloadProgress),
                    "function" === typeof e.onUploadProgress && T.upload && T.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken && e.cancelToken.promise.then((function(e) {
                            T && (T.abort(),
                                u(e),
                                T = null)
                        }
                    )),
                    void 0 === l && (l = null),
                        T.send(l)
                }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(227);
        e.exports = function(e, t, n, o, i) {
            var a = new Error(e);
            return r(a, t, n, o, i)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        e.exports = function(e, t) {
            t = t || {};
            var n = {};
            return r.forEach(["url", "method", "params", "data"], (function(e) {
                    "undefined" !== typeof t[e] && (n[e] = t[e])
                }
            )),
                r.forEach(["headers", "auth", "proxy"], (function(o) {
                        r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : "undefined" !== typeof t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : "undefined" !== typeof e[o] && (n[o] = e[o])
                    }
                )),
                r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], (function(r) {
                        "undefined" !== typeof t[r] ? n[r] = t[r] : "undefined" !== typeof e[r] && (n[r] = e[r])
                    }
                )),
                n
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
            ,
            r.prototype.__CANCEL__ = !0,
            e.exports = r
    }
    , , , , , , , , , , , , , , , , function(e, t) {
        (function(t) {
                e.exports = t
            }
        ).call(this, {})
    }
    , function(e, t, n) {}
    , function(e, t, n) {}
    , function(e, t, n) {
        "use strict";
        n(174)
    }
    , function(e, t, n) {}
    , function(e, t, n) {}
    , function(e, t, n) {
        n(177);
        var r = n(77).Object;
        e.exports = function(e, t, n) {
            return r.defineProperty(e, t, n)
        }
    }
    , function(e, t, n) {
        var r = n(88);
        r(r.S + r.F * !n(78), "Object", {
            defineProperty: n(81).f
        })
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0,
            t.default = function(e, t) {
                var n = {};
                for (var r in e)
                    t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
    }
    , function(e, t, n) {
        e.exports = {
            default: n(181),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        n(182),
            e.exports = n(77).Object.assign
    }
    , function(e, t, n) {
        var r = n(88);
        r(r.S + r.F, "Object", {
            assign: n(183)
        })
    }
    , function(e, t, n) {
        "use strict";
        var r = n(78)
            , o = n(103)
            , i = n(114)
            , a = n(106)
            , s = n(115)
            , c = n(140)
            , u = Object.assign;
        e.exports = !u || n(96)((function() {
                var e = {}
                    , t = {}
                    , n = Symbol()
                    , r = "abcdefghijklmnopqrst";
                return e[n] = 7,
                    r.split("").forEach((function(e) {
                            t[e] = e
                        }
                    )),
                7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
            }
        )) ? function(e, t) {
                for (var n = s(e), u = arguments.length, l = 1, f = i.f, T = a.f; u > l; )
                    for (var S, d = c(arguments[l++]), p = f ? o(d).concat(f(d)) : o(d), b = p.length, h = 0; b > h; )
                        S = p[h++],
                        r && !T.call(d, S) || (n[S] = d[S]);
                return n
            }
            : u
    }
    , function(e, t, n) {
        var r = n(91)
            , o = n(185)
            , i = n(186);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, c = r(t), u = o(c.length), l = i(a, u);
                if (e && n != n) {
                    for (; u > l; )
                        if ((s = c[l++]) != s)
                            return !0
                } else
                    for (; u > l; l++)
                        if ((e || l in c) && c[l] === n)
                            return e || l || 0;
                return !e && -1
            }
        }
    }
    , function(e, t, n) {
        var r = n(110)
            , o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    }
    , function(e, t, n) {
        var r = n(110)
            , o = Math.max
            , i = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }
    , function(e, t, n) {
        e.exports = {
            default: n(188),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        n(189),
            n(195),
            e.exports = n(120).f("iterator")
    }
    , function(e, t, n) {
        "use strict";
        var r = n(190)(!0);
        n(142)(String, "String", (function(e) {
                this._t = String(e),
                    this._i = 0
            }
        ), (function() {
                var e, t = this._t, n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(t, n),
                    this._i += e.length,
                    {
                        value: e,
                        done: !1
                    })
            }
        ))
    }
    , function(e, t, n) {
        var r = n(110)
            , o = n(109);
        e.exports = function(e) {
            return function(t, n) {
                var i, a, s = String(o(t)), c = r(n), u = s.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(118)
            , o = n(102)
            , i = n(119)
            , a = {};
        n(89)(a, n(92)("iterator"), (function() {
                return this
            }
        )),
            e.exports = function(e, t, n) {
                e.prototype = r(a, {
                    next: o(1, n)
                }),
                    i(e, t + " Iterator")
            }
    }
    , function(e, t, n) {
        var r = n(81)
            , o = n(95)
            , i = n(103);
        e.exports = n(78) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, a = i(t), s = a.length, c = 0; s > c; )
                r.f(e, n = a[c++], t[n]);
            return e
        }
    }
    , function(e, t, n) {
        var r = n(76).document;
        e.exports = r && r.documentElement
    }
    , function(e, t, n) {
        var r = n(82)
            , o = n(115)
            , i = n(111)("IE_PROTO")
            , a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e),
                r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }
    , function(e, t, n) {
        n(196);
        for (var r = n(76), o = n(89), i = n(117), a = n(92)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
            var u = s[c]
                , l = r[u]
                , f = l && l.prototype;
            f && !f[a] && o(f, a, u),
                i[u] = i.Array
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(197)
            , o = n(198)
            , i = n(117)
            , a = n(91);
        e.exports = n(142)(Array, "Array", (function(e, t) {
                this._t = a(e),
                    this._i = 0,
                    this._k = t
            }
        ), (function() {
                var e = this._t
                    , t = this._k
                    , n = this._i++;
                return !e || n >= e.length ? (this._t = void 0,
                    o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }
        ), "values"),
            i.Arguments = i.Array,
            r("keys"),
            r("values"),
            r("entries")
    }
    , function(e, t) {
        e.exports = function() {}
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }
    , function(e, t, n) {
        e.exports = {
            default: n(200),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        n(201),
            n(206),
            n(207),
            n(208),
            e.exports = n(77).Symbol
    }
    , function(e, t, n) {
        "use strict";
        var r = n(76)
            , o = n(82)
            , i = n(78)
            , a = n(88)
            , s = n(143)
            , c = n(202).KEY
            , u = n(96)
            , l = n(112)
            , f = n(119)
            , T = n(105)
            , S = n(92)
            , d = n(120)
            , p = n(121)
            , b = n(203)
            , h = n(204)
            , A = n(95)
            , P = n(90)
            , M = n(115)
            , m = n(91)
            , v = n(108)
            , G = n(102)
            , E = n(118)
            , y = n(205)
            , C = n(145)
            , B = n(114)
            , H = n(81)
            , g = n(103)
            , w = C.f
            , I = H.f
            , _ = y.f
            , D = r.Symbol
            , O = r.JSON
            , R = O && O.stringify
            , L = S("_hidden")
            , N = S("toPrimitive")
            , x = {}.propertyIsEnumerable
            , k = l("symbol-registry")
            , V = l("symbols")
            , F = l("op-symbols")
            , X = Object.prototype
            , W = "function" == typeof D && !!B.f
            , U = r.QObject
            , K = !U || !U.prototype || !U.prototype.findChild
            , j = i && u((function() {
                return 7 != E(I({}, "a", {
                    get: function() {
                        return I(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }
        )) ? function(e, t, n) {
                var r = w(X, t);
                r && delete X[t],
                    I(e, t, n),
                r && e !== X && I(X, t, r)
            }
            : I
            , z = function(e) {
            var t = V[e] = E(D.prototype);
            return t._k = e,
                t
        }
            , Q = W && "symbol" == typeof D.iterator ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                return e instanceof D
            }
            , Y = function(e, t, n) {
            return e === X && Y(F, t, n),
                A(e),
                t = v(t, !0),
                A(n),
                o(V, t) ? (n.enumerable ? (o(e, L) && e[L][t] && (e[L][t] = !1),
                    n = E(n, {
                        enumerable: G(0, !1)
                    })) : (o(e, L) || I(e, L, G(1, {})),
                    e[L][t] = !0),
                    j(e, t, n)) : I(e, t, n)
        }
            , J = function(e, t) {
            A(e);
            for (var n, r = b(t = m(t)), o = 0, i = r.length; i > o; )
                Y(e, n = r[o++], t[n]);
            return e
        }
            , q = function(e) {
            var t = x.call(this, e = v(e, !0));
            return !(this === X && o(V, e) && !o(F, e)) && (!(t || !o(this, e) || !o(V, e) || o(this, L) && this[L][e]) || t)
        }
            , Z = function(e, t) {
            if (e = m(e),
                t = v(t, !0),
            e !== X || !o(V, t) || o(F, t)) {
                var n = w(e, t);
                return !n || !o(V, t) || o(e, L) && e[L][t] || (n.enumerable = !0),
                    n
            }
        }
            , $ = function(e) {
            for (var t, n = _(m(e)), r = [], i = 0; n.length > i; )
                o(V, t = n[i++]) || t == L || t == c || r.push(t);
            return r
        }
            , ee = function(e) {
            for (var t, n = e === X, r = _(n ? F : m(e)), i = [], a = 0; r.length > a; )
                !o(V, t = r[a++]) || n && !o(X, t) || i.push(V[t]);
            return i
        };
        W || (s((D = function() {
                    if (this instanceof D)
                        throw TypeError("Symbol is not a constructor!");
                    var e = T(arguments.length > 0 ? arguments[0] : void 0)
                        , t = function t(n) {
                        this === X && t.call(F, n),
                        o(this, L) && o(this[L], e) && (this[L][e] = !1),
                            j(this, e, G(1, n))
                    };
                    return i && K && j(X, e, {
                        configurable: !0,
                        set: t
                    }),
                        z(e)
                }
            ).prototype, "toString", (function() {
                    return this._k
                }
            )),
                C.f = Z,
                H.f = Y,
                n(144).f = y.f = $,
                n(106).f = q,
                B.f = ee,
            i && !n(104) && s(X, "propertyIsEnumerable", q, !0),
                d.f = function(e) {
                    return z(S(e))
                }
        ),
            a(a.G + a.W + a.F * !W, {
                Symbol: D
            });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
            S(te[ne++]);
        for (var re = g(S.store), oe = 0; re.length > oe; )
            p(re[oe++]);
        a(a.S + a.F * !W, "Symbol", {
            for: function(e) {
                return o(k, e += "") ? k[e] : k[e] = D(e)
            },
            keyFor: function(e) {
                if (!Q(e))
                    throw TypeError(e + " is not a symbol!");
                for (var t in k)
                    if (k[t] === e)
                        return t
            },
            useSetter: function() {
                K = !0
            },
            useSimple: function() {
                K = !1
            }
        }),
            a(a.S + a.F * !W, "Object", {
                create: function(e, t) {
                    return void 0 === t ? E(e) : J(E(e), t)
                },
                defineProperty: Y,
                defineProperties: J,
                getOwnPropertyDescriptor: Z,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: ee
            });
        var ie = u((function() {
                B.f(1)
            }
        ));
        a(a.S + a.F * ie, "Object", {
            getOwnPropertySymbols: function(e) {
                return B.f(M(e))
            }
        }),
        O && a(a.S + a.F * (!W || u((function() {
                var e = D();
                return "[null]" != R([e]) || "{}" != R({
                    a: e
                }) || "{}" != R(Object(e))
            }
        ))), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], o = 1; arguments.length > o; )
                    r.push(arguments[o++]);
                if (n = t = r[1],
                (P(t) || void 0 !== e) && !Q(e))
                    return h(t) || (t = function(e, t) {
                            if ("function" == typeof n && (t = n.call(this, e, t)),
                                !Q(t))
                                return t
                        }
                    ),
                        r[1] = t,
                        R.apply(O, r)
            }
        }),
        D.prototype[N] || n(89)(D.prototype, N, D.prototype.valueOf),
            f(D, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0)
    }
    , function(e, t, n) {
        var r = n(105)("meta")
            , o = n(90)
            , i = n(82)
            , a = n(81).f
            , s = 0
            , c = Object.isExtensible || function() {
            return !0
        }
            , u = !n(96)((function() {
                return c(Object.preventExtensions({}))
            }
        ))
            , l = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
            , f = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!o(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!c(e))
                        return "F";
                    if (!t)
                        return "E";
                    l(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!i(e, r)) {
                    if (!c(e))
                        return !0;
                    if (!t)
                        return !1;
                    l(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return u && f.NEED && c(e) && !i(e, r) && l(e),
                    e
            }
        }
    }
    , function(e, t, n) {
        var r = n(103)
            , o = n(114)
            , i = n(106);
        e.exports = function(e) {
            var t = r(e)
                , n = o.f;
            if (n)
                for (var a, s = n(e), c = i.f, u = 0; s.length > u; )
                    c.call(e, a = s[u++]) && t.push(a);
            return t
        }
    }
    , function(e, t, n) {
        var r = n(141);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }
    , function(e, t, n) {
        var r = n(91)
            , o = n(144).f
            , i = {}.toString
            , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return a && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return o(e)
                } catch (t) {
                    return a.slice()
                }
            }(e) : o(r(e))
        }
    }
    , function(e, t) {}
    , function(e, t, n) {
        n(121)("asyncIterator")
    }
    , function(e, t, n) {
        n(121)("observable")
    }
    , function(e, t, n) {
        e.exports = {
            default: n(210),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        n(211),
            e.exports = n(77).Object.setPrototypeOf
    }
    , function(e, t, n) {
        var r = n(88);
        r(r.S, "Object", {
            setPrototypeOf: n(212).set
        })
    }
    , function(e, t, n) {
        var r = n(90)
            , o = n(95)
            , i = function(e, t) {
            if (o(e),
            !r(t) && null !== t)
                throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, r) {
                try {
                    (r = n(136)(Function.call, n(145).f(Object.prototype, "__proto__").set, 2))(e, []),
                        t = !(e instanceof Array)
                } catch (o) {
                    t = !0
                }
                return function(e, n) {
                    return i(e, n),
                        t ? e.__proto__ = n : r(e, n),
                        e
                }
            }({}, !1) : void 0),
            check: i
        }
    }
    , function(e, t, n) {
        e.exports = {
            default: n(214),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        n(215);
        var r = n(77).Object;
        e.exports = function(e, t) {
            return r.create(e, t)
        }
    }
    , function(e, t, n) {
        var r = n(88);
        r(r.S, "Object", {
            create: n(118)
        })
    }
    , function(e, t, n) {
        try {
            var r = n(146)
        } catch (s) {
            r = n(146)
        }
        var o = /\s+/
            , i = Object.prototype.toString;
        function a(e) {
            if (!e || !e.nodeType)
                throw new Error("A DOM element reference is required");
            this.el = e,
                this.list = e.classList
        }
        e.exports = function(e) {
            return new a(e)
        }
            ,
            a.prototype.add = function(e) {
                if (this.list)
                    return this.list.add(e),
                        this;
                var t = this.array();
                return ~r(t, e) || t.push(e),
                    this.el.className = t.join(" "),
                    this
            }
            ,
            a.prototype.remove = function(e) {
                if ("[object RegExp]" == i.call(e))
                    return this.removeMatching(e);
                if (this.list)
                    return this.list.remove(e),
                        this;
                var t = this.array()
                    , n = r(t, e);
                return ~n && t.splice(n, 1),
                    this.el.className = t.join(" "),
                    this
            }
            ,
            a.prototype.removeMatching = function(e) {
                for (var t = this.array(), n = 0; n < t.length; n++)
                    e.test(t[n]) && this.remove(t[n]);
                return this
            }
            ,
            a.prototype.toggle = function(e, t) {
                return this.list ? ("undefined" !== typeof t ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e),
                    this) : ("undefined" !== typeof t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e),
                    this)
            }
            ,
            a.prototype.array = function() {
                var e = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(o);
                return "" === e[0] && e.shift(),
                    e
            }
            ,
            a.prototype.has = a.prototype.contains = function(e) {
                return this.list ? this.list.contains(e) : !!~r(this.array(), e)
            }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = f(n(80))
            , o = f(n(65))
            , i = f(n(66))
            , a = f(n(67))
            , s = f(n(68))
            , c = f(n(79))
            , u = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
                t
        }(n(1))
            , l = f(n(218));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var T = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
            }
            return n
        }
            , S = function(e) {
            function t() {
                return (0,
                    o.default)(this, t),
                    (0,
                        a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return (0,
                s.default)(t, e),
                (0,
                    i.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        (0,
                            l.default)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                            , t = e.type
                            , n = e.className
                            , o = e.size
                            , i = T(e, ["type", "className", "size"])
                            , a = (0,
                            c.default)(n, "am-icon", "am-icon-" + t, "am-icon-" + o);
                        return u.createElement("svg", (0,
                            r.default)({
                            className: a
                        }, i), u.createElement("use", {
                            xlinkHref: "#" + t
                        }))
                    }
                }]),
                t
        }(u.Component);
        t.default = S,
            S.defaultProps = {
                size: "md"
            },
            e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            check: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
            "check-circle": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
            "check-circle-o": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
            cross: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
            "cross-circle": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
            "cross-circle-o": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
            left: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
            right: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
            down: '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
            up: '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
            loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
            search: '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
            ellipsis: '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
            "ellipsis-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
            "exclamation-circle": '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
            "info-circle": '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
            "question-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
            voice: '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
            plus: '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
            minus: '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
            dislike: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
            fail: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
            success: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
        };
        t.default = function() {
            if (document) {
                var e = document.getElementById("__ANTD_MOBILE_SVG_SPRITE_NODE__")
                    , t = document.body;
                e || t.insertAdjacentHTML("afterbegin", function() {
                    var e = Object.keys(r).map((function(e) {
                            return "<symbol id=" + e + r[e].split("svg")[1] + "symbol>"
                        }
                    )).join("");
                    return '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    id="__ANTD_MOBILE_SVG_SPRITE_NODE__"\n    style="display:none;overflow:hidden;width:0;height:0"\n  >\n    <defs>\n      ' + e + "\n    </defs>\n  </svg>\n"
                }())
            }
        }
            ,
            e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61)
            , o = n(147)
            , i = n(221)
            , a = n(153);
        function s(e) {
            var t = new i(e)
                , n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t),
                r.extend(n, t),
                n
        }
        var c = s(n(150));
        c.Axios = i,
            c.create = function(e) {
                return s(a(c.defaults, e))
            }
            ,
            c.Cancel = n(154),
            c.CancelToken = n(233),
            c.isCancel = n(149),
            c.all = function(e) {
                return Promise.all(e)
            }
            ,
            c.spread = n(234),
            e.exports = c,
            e.exports.default = c
    }
    , function(e, t) {
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61)
            , o = n(148)
            , i = n(222)
            , a = n(223)
            , s = n(153);
        function c(e) {
            this.defaults = e,
                this.interceptors = {
                    request: new i,
                    response: new i
                }
        }
        c.prototype.request = function(e) {
            "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
                (e = s(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
            var t = [a, void 0]
                , n = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }
            )),
                     this.interceptors.response.forEach((function(e) {
                             t.push(e.fulfilled, e.rejected)
                         }
                     )); t.length; )
                n = n.then(t.shift(), t.shift());
            return n
        }
            ,
            c.prototype.getUri = function(e) {
                return e = s(this.defaults, e),
                    o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            r.forEach(["delete", "get", "head", "options"], (function(e) {
                    c.prototype[e] = function(t, n) {
                        return this.request(r.merge(n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                }
            )),
            r.forEach(["post", "put", "patch"], (function(e) {
                    c.prototype[e] = function(t, n, o) {
                        return this.request(r.merge(o || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                }
            )),
            e.exports = c
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }),
            this.handlers.length - 1
        }
            ,
            o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            o.prototype.forEach = function(e) {
                r.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }
                ))
            }
            ,
            e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61)
            , o = n(224)
            , i = n(149)
            , a = n(150)
            , s = n(231)
            , c = n(232);
        function u(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return u(e),
            e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
                e.headers = e.headers || {},
                e.data = o(e.data, e.headers, e.transformRequest),
                e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
                r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    }
                )),
                (e.adapter || a.adapter)(e).then((function(t) {
                        return u(e),
                            t.data = o(t.data, t.headers, e.transformResponse),
                            t
                    }
                ), (function(t) {
                        return i(t) || (u(e),
                        t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))),
                            Promise.reject(t)
                    }
                ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        e.exports = function(e, t, n) {
            return r.forEach(n, (function(n) {
                    e = n(e, t)
                }
            )),
                e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        e.exports = function(e, t) {
            r.forEach(e, (function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                        delete e[r])
                }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(152);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
                e.request = r,
                e.response = o,
                e.isAxiosError = !0,
                e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }
                ,
                e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61)
            , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (i = e.indexOf(":"),
                        t = r.trim(e.substr(0, i)).toLowerCase(),
                        n = r.trim(e.substr(i + 1)),
                        t) {
                        if (a[t] && o.indexOf(t) >= 0)
                            return;
                        a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                    }
                }
            )),
                a) : a
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r),
                    r = n.href),
                    n.setAttribute("href", r),
                    {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
            }
            return e = o(window.location.href),
                function(t) {
                    var n = r.isString(t) ? o(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
        }() : function() {
            return !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(61);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                    document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(154);
        function o(e) {
            if ("function" !== typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                    t = e
                }
            ));
            var n = this;
            e((function(e) {
                    n.reason || (n.reason = new r(e),
                        t(n.reason))
                }
            ))
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
            ,
            o.source = function() {
                var e;
                return {
                    token: new o((function(t) {
                            e = t
                        }
                    )),
                    cancel: e
                }
            }
            ,
            e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }
    , function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(179)
            , o = n.n(r)
            , i = n(87)
            , a = n.n(i)
            , s = n(80)
            , c = n.n(s)
            , u = n(65)
            , l = n.n(u)
            , f = n(66)
            , T = n.n(f)
            , S = n(67)
            , d = n.n(S)
            , p = n(68)
            , b = n.n(p)
            , h = n(1)
            , A = n.n(h)
            , P = n(8)
            , M = n.n(P)
            , m = n(14)
            , v = n.n(m)
            , G = function(e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
                throw new Error("Can only polyfill class components");
            return "function" !== typeof t.componentWillReceiveProps ? e : A.a.Profiler ? (t.UNSAFE_componentWillReceiveProps = t.componentWillReceiveProps,
                delete t.componentWillReceiveProps,
                e) : e
        };
        function E(e) {
            var t = [];
            return A.a.Children.forEach(e, (function(e) {
                    t.push(e)
                }
            )),
                t
        }
        function y(e, t) {
            var n = null;
            return e && e.forEach((function(e) {
                    n || e && e.key === t && (n = e)
                }
            )),
                n
        }
        function C(e, t, n) {
            var r = null;
            return e && e.forEach((function(e) {
                    if (e && e.key === t && e.props[n]) {
                        if (r)
                            throw new Error("two child with same key for <rc-animate> children");
                        r = e
                    }
                }
            )),
                r
        }
        var B = n(116)
            , H = n.n(B)
            , g = {
            transitionstart: {
                transition: "transitionstart",
                WebkitTransition: "webkitTransitionStart",
                MozTransition: "mozTransitionStart",
                OTransition: "oTransitionStart",
                msTransition: "MSTransitionStart"
            },
            animationstart: {
                animation: "animationstart",
                WebkitAnimation: "webkitAnimationStart",
                MozAnimation: "mozAnimationStart",
                OAnimation: "oAnimationStart",
                msAnimation: "MSAnimationStart"
            }
        }
            , w = {
            transitionend: {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "mozTransitionEnd",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd"
            },
            animationend: {
                animation: "animationend",
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd"
            }
        }
            , I = []
            , _ = [];
        function D(e, t, n) {
            e.addEventListener(t, n, !1)
        }
        function O(e, t, n) {
            e.removeEventListener(t, n, !1)
        }
        "undefined" !== typeof window && "undefined" !== typeof document && function() {
            var e = document.createElement("div").style;
            function t(t, n) {
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var o = t[r];
                        for (var i in o)
                            if (i in e) {
                                n.push(o[i]);
                                break
                            }
                    }
            }
            "AnimationEvent"in window || (delete g.animationstart.animation,
                delete w.animationend.animation),
            "TransitionEvent"in window || (delete g.transitionstart.transition,
                delete w.transitionend.transition),
                t(g, I),
                t(w, _)
        }();
        var R = {
            startEvents: I,
            addStartEventListener: function(e, t) {
                0 !== I.length ? I.forEach((function(n) {
                        D(e, n, t)
                    }
                )) : window.setTimeout(t, 0)
            },
            removeStartEventListener: function(e, t) {
                0 !== I.length && I.forEach((function(n) {
                        O(e, n, t)
                    }
                ))
            },
            endEvents: _,
            addEndEventListener: function(e, t) {
                0 !== _.length ? _.forEach((function(n) {
                        D(e, n, t)
                    }
                )) : window.setTimeout(t, 0)
            },
            removeEndEventListener: function(e, t) {
                0 !== _.length && _.forEach((function(n) {
                        O(e, n, t)
                    }
                ))
            }
        }
            , L = n(216)
            , N = n.n(L)
            , x = 0 !== R.endEvents.length
            , k = ["Webkit", "Moz", "O", "ms"]
            , V = ["-webkit-", "-moz-", "-o-", "ms-", ""];
        function F(e, t) {
            for (var n = window.getComputedStyle(e, null), r = "", o = 0; o < V.length && !(r = n.getPropertyValue(V[o] + t)); o++)
                ;
            return r
        }
        function X(e) {
            if (x) {
                var t = parseFloat(F(e, "transition-delay")) || 0
                    , n = parseFloat(F(e, "transition-duration")) || 0
                    , r = parseFloat(F(e, "animation-delay")) || 0
                    , o = parseFloat(F(e, "animation-duration")) || 0
                    , i = Math.max(n + t, o + r);
                e.rcEndAnimTimeout = setTimeout((function() {
                        e.rcEndAnimTimeout = null,
                        e.rcEndListener && e.rcEndListener()
                    }
                ), 1e3 * i + 200)
            }
        }
        function W(e) {
            e.rcEndAnimTimeout && (clearTimeout(e.rcEndAnimTimeout),
                e.rcEndAnimTimeout = null)
        }
        var U = function(e, t, n) {
            var r = "object" === ("undefined" === typeof t ? "undefined" : H()(t))
                , o = r ? t.name : t
                , i = r ? t.active : t + "-active"
                , a = n
                , s = void 0
                , c = void 0
                , u = N()(e);
            return n && "[object Object]" === Object.prototype.toString.call(n) && (a = n.end,
                s = n.start,
                c = n.active),
            e.rcEndListener && e.rcEndListener(),
                e.rcEndListener = function(t) {
                    t && t.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout),
                        e.rcAnimTimeout = null),
                        W(e),
                        u.remove(o),
                        u.remove(i),
                        R.removeEndEventListener(e, e.rcEndListener),
                        e.rcEndListener = null,
                    a && a())
                }
                ,
                R.addEndEventListener(e, e.rcEndListener),
            s && s(),
                u.add(o),
                e.rcAnimTimeout = setTimeout((function() {
                        e.rcAnimTimeout = null,
                            u.add(i),
                        c && setTimeout(c, 0),
                            X(e)
                    }
                ), 30),
                {
                    stop: function() {
                        e.rcEndListener && e.rcEndListener()
                    }
                }
        };
        U.style = function(e, t, n) {
            e.rcEndListener && e.rcEndListener(),
                e.rcEndListener = function(t) {
                    t && t.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout),
                        e.rcAnimTimeout = null),
                        W(e),
                        R.removeEndEventListener(e, e.rcEndListener),
                        e.rcEndListener = null,
                    n && n())
                }
                ,
                R.addEndEventListener(e, e.rcEndListener),
                e.rcAnimTimeout = setTimeout((function() {
                        for (var n in t)
                            t.hasOwnProperty(n) && (e.style[n] = t[n]);
                        e.rcAnimTimeout = null,
                            X(e)
                    }
                ), 0)
        }
            ,
            U.setTransition = function(e, t, n) {
                var r = t
                    , o = n;
                void 0 === n && (o = r,
                    r = ""),
                    r = r || "",
                    k.forEach((function(t) {
                            e.style[t + "Transition" + r] = o
                        }
                    ))
            }
            ,
            U.isCssAnimationSupported = x;
        var K = U
            , j = {
            isAppearSupported: function(e) {
                return e.transitionName && e.transitionAppear || e.animation.appear
            },
            isEnterSupported: function(e) {
                return e.transitionName && e.transitionEnter || e.animation.enter
            },
            isLeaveSupported: function(e) {
                return e.transitionName && e.transitionLeave || e.animation.leave
            },
            allowAppearCallback: function(e) {
                return e.transitionAppear || e.animation.appear
            },
            allowEnterCallback: function(e) {
                return e.transitionEnter || e.animation.enter
            },
            allowLeaveCallback: function(e) {
                return e.transitionLeave || e.animation.leave
            }
        }
            , z = {
            enter: "transitionEnter",
            appear: "transitionAppear",
            leave: "transitionLeave"
        }
            , Q = function(e) {
            function t() {
                return l()(this, t),
                    d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return b()(t, e),
                T()(t, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.stop()
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        j.isEnterSupported(this.props) ? this.transition("enter", e) : e()
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        j.isAppearSupported(this.props) ? this.transition("appear", e) : e()
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        j.isLeaveSupported(this.props) ? this.transition("leave", e) : e()
                    }
                }, {
                    key: "transition",
                    value: function(e, t) {
                        var n = this
                            , r = v.a.findDOMNode(this)
                            , o = this.props
                            , i = o.transitionName
                            , a = "object" === typeof i;
                        this.stop();
                        var s = function() {
                            n.stopper = null,
                                t()
                        };
                        if ((x || !o.animation[e]) && i && o[z[e]]) {
                            var c = a ? i[e] : i + "-" + e
                                , u = c + "-active";
                            a && i[e + "Active"] && (u = i[e + "Active"]),
                                this.stopper = K(r, {
                                    name: c,
                                    active: u
                                }, s)
                        } else
                            this.stopper = o.animation[e](r, s)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var e = this.stopper;
                        e && (this.stopper = null,
                            e.stop())
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children
                    }
                }]),
                t
        }(A.a.Component);
        Q.propTypes = {
            children: M.a.any,
            animation: M.a.any,
            transitionName: M.a.any
        };
        var Y = Q
            , J = "rc_animate_" + Date.now();
        function q(e) {
            var t = e.children;
            return A.a.isValidElement(t) && !t.key ? A.a.cloneElement(t, {
                key: J
            }) : t
        }
        function Z() {}
        var $ = function(e) {
            function t(e) {
                l()(this, t);
                var n = d()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return ee.call(n),
                    n.currentlyAnimatingKeys = {},
                    n.keysToEnter = [],
                    n.keysToLeave = [],
                    n.state = {
                        children: E(q(e))
                    },
                    n.childrenRefs = {},
                    n
            }
            return b()(t, e),
                T()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this
                            , t = this.props.showProp
                            , n = this.state.children;
                        t && (n = n.filter((function(e) {
                                return !!e.props[t]
                            }
                        ))),
                            n.forEach((function(t) {
                                    t && e.performAppear(t.key)
                                }
                            ))
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = this;
                        this.nextProps = e;
                        var n = E(q(e))
                            , r = this.props;
                        r.exclusive && Object.keys(this.currentlyAnimatingKeys).forEach((function(e) {
                                t.stop(e)
                            }
                        ));
                        var o = r.showProp
                            , i = this.currentlyAnimatingKeys
                            , s = r.exclusive ? E(q(r)) : this.state.children
                            , c = [];
                        o ? (s.forEach((function(e) {
                                var t = e && y(n, e.key)
                                    , r = void 0;
                                (r = t && t.props[o] || !e.props[o] ? t : A.a.cloneElement(t || e, a()({}, o, !0))) && c.push(r)
                            }
                        )),
                            n.forEach((function(e) {
                                    e && y(s, e.key) || c.push(e)
                                }
                            ))) : c = function(e, t) {
                            var n = []
                                , r = {}
                                , o = [];
                            return e.forEach((function(e) {
                                    e && y(t, e.key) ? o.length && (r[e.key] = o,
                                        o = []) : o.push(e)
                                }
                            )),
                                t.forEach((function(e) {
                                        e && Object.prototype.hasOwnProperty.call(r, e.key) && (n = n.concat(r[e.key])),
                                            n.push(e)
                                    }
                                )),
                                n = n.concat(o)
                        }(s, n),
                            this.setState({
                                children: c
                            }),
                            n.forEach((function(e) {
                                    var n = e && e.key;
                                    if (!e || !i[n]) {
                                        var r = e && y(s, n);
                                        if (o) {
                                            var a = e.props[o];
                                            if (r)
                                                !C(s, n, o) && a && t.keysToEnter.push(n);
                                            else
                                                a && t.keysToEnter.push(n)
                                        } else
                                            r || t.keysToEnter.push(n)
                                    }
                                }
                            )),
                            s.forEach((function(e) {
                                    var r = e && e.key;
                                    if (!e || !i[r]) {
                                        var a = e && y(n, r);
                                        if (o) {
                                            var s = e.props[o];
                                            if (a)
                                                !C(n, r, o) && s && t.keysToLeave.push(r);
                                            else
                                                s && t.keysToLeave.push(r)
                                        } else
                                            a || t.keysToLeave.push(r)
                                    }
                                }
                            ))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this.keysToEnter;
                        this.keysToEnter = [],
                            e.forEach(this.performEnter);
                        var t = this.keysToLeave;
                        this.keysToLeave = [],
                            t.forEach(this.performLeave)
                    }
                }, {
                    key: "isValidChildByKey",
                    value: function(e, t) {
                        var n = this.props.showProp;
                        return n ? C(e, t, n) : y(e, t)
                    }
                }, {
                    key: "stop",
                    value: function(e) {
                        delete this.currentlyAnimatingKeys[e];
                        var t = this.childrenRefs[e];
                        t && t.stop()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props;
                        this.nextProps = t;
                        var n = this.state.children
                            , r = null;
                        n && (r = n.map((function(n) {
                                if (null === n || void 0 === n)
                                    return n;
                                if (!n.key)
                                    throw new Error("must set key for <rc-animate> children");
                                return A.a.createElement(Y, {
                                    key: n.key,
                                    ref: function(t) {
                                        e.childrenRefs[n.key] = t
                                    },
                                    animation: t.animation,
                                    transitionName: t.transitionName,
                                    transitionEnter: t.transitionEnter,
                                    transitionAppear: t.transitionAppear,
                                    transitionLeave: t.transitionLeave
                                }, n)
                            }
                        )));
                        var o = t.component;
                        if (o) {
                            var i = t;
                            return "string" === typeof o && (i = c()({
                                className: t.className,
                                style: t.style
                            }, t.componentProps)),
                                A.a.createElement(o, i, r)
                        }
                        return r[0] || null
                    }
                }]),
                t
        }(A.a.Component);
        $.isAnimate = !0,
            $.propTypes = {
                className: M.a.string,
                style: M.a.object,
                component: M.a.any,
                componentProps: M.a.object,
                animation: M.a.object,
                transitionName: M.a.oneOfType([M.a.string, M.a.object]),
                transitionEnter: M.a.bool,
                transitionAppear: M.a.bool,
                exclusive: M.a.bool,
                transitionLeave: M.a.bool,
                onEnd: M.a.func,
                onEnter: M.a.func,
                onLeave: M.a.func,
                onAppear: M.a.func,
                showProp: M.a.string,
                children: M.a.node
            },
            $.defaultProps = {
                animation: {},
                component: "span",
                componentProps: {},
                transitionEnter: !0,
                transitionLeave: !0,
                transitionAppear: !1,
                onEnd: Z,
                onEnter: Z,
                onLeave: Z,
                onAppear: Z
            };
        var ee = function() {
            var e = this;
            this.performEnter = function(t) {
                e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0,
                    e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e, t, "enter")))
            }
                ,
                this.performAppear = function(t) {
                    e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0,
                        e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e, t, "appear")))
                }
                ,
                this.handleDoneAdding = function(t, n) {
                    var r = e.props;
                    if (delete e.currentlyAnimatingKeys[t],
                    !r.exclusive || r === e.nextProps) {
                        var o = E(q(r));
                        e.isValidChildByKey(o, t) ? "appear" === n ? j.allowAppearCallback(r) && (r.onAppear(t),
                            r.onEnd(t, !0)) : j.allowEnterCallback(r) && (r.onEnter(t),
                            r.onEnd(t, !0)) : e.performLeave(t)
                    }
                }
                ,
                this.performLeave = function(t) {
                    e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0,
                        e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e, t)))
                }
                ,
                this.handleDoneLeaving = function(t) {
                    var n = e.props;
                    if (delete e.currentlyAnimatingKeys[t],
                    !n.exclusive || n === e.nextProps) {
                        var r = E(q(n));
                        if (e.isValidChildByKey(r, t))
                            e.performEnter(t);
                        else {
                            var o = function() {
                                j.allowLeaveCallback(n) && (n.onLeave(t),
                                    n.onEnd(t, !1))
                            };
                            !function(e, t, n) {
                                var r = e.length === t.length;
                                return r && e.forEach((function(e, o) {
                                        var i = t[o];
                                        e && i && (e && !i || !e && i ? r = !1 : e.key !== i.key ? r = !1 : n && e.props[n] !== i.props[n] && (r = !1))
                                    }
                                )),
                                    r
                            }(e.state.children, r, n.showProp) ? e.setState({
                                children: r
                            }, o) : o()
                        }
                    }
                }
        }
            , te = G($);
        var ne = n(79)
            , re = n.n(ne)
            , oe = function(e) {
            function t() {
                var e, n, r, o;
                l()(this, t);
                for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
                    a[s] = arguments[s];
                return n = r = d()(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
                    r.close = function() {
                        r.clearCloseTimer(),
                            r.props.onClose()
                    }
                    ,
                    r.startCloseTimer = function() {
                        r.props.duration && (r.closeTimer = setTimeout((function() {
                                r.close()
                            }
                        ), 1e3 * r.props.duration))
                    }
                    ,
                    r.clearCloseTimer = function() {
                        r.closeTimer && (clearTimeout(r.closeTimer),
                            r.closeTimer = null)
                    }
                    ,
                    o = n,
                    d()(r, o)
            }
            return b()(t, e),
                T()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startCloseTimer()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.clearCloseTimer()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props, n = t.prefixCls + "-notice", r = (e = {},
                            a()(e, "" + n, 1),
                            a()(e, n + "-closable", t.closable),
                            a()(e, t.className, !!t.className),
                            e);
                        return A.a.createElement("div", {
                            className: re()(r),
                            style: t.style
                        }, A.a.createElement("div", {
                            className: n + "-content"
                        }, t.children), t.closable ? A.a.createElement("a", {
                            tabIndex: "0",
                            onClick: this.close,
                            className: n + "-close"
                        }, A.a.createElement("span", {
                            className: n + "-close-x"
                        })) : null)
                    }
                }]),
                t
        }(h.Component);
        oe.propTypes = {
            duration: M.a.number,
            onClose: M.a.func,
            children: M.a.any
        },
            oe.defaultProps = {
                onEnd: function() {},
                onClose: function() {},
                duration: 1.5,
                style: {
                    right: "50%"
                }
            };
        var ie = oe
            , ae = 0
            , se = Date.now();
        var ce = function(e) {
            function t() {
                var e, n, r, o;
                l()(this, t);
                for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
                    a[s] = arguments[s];
                return n = r = d()(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
                    r.state = {
                        notices: []
                    },
                    r.add = function(e) {
                        var t = e.key = e.key || "rcNotification_" + se + "_" + ae++;
                        r.setState((function(n) {
                                var r = n.notices;
                                if (!r.filter((function(e) {
                                        return e.key === t
                                    }
                                )).length)
                                    return {
                                        notices: r.concat(e)
                                    }
                            }
                        ))
                    }
                    ,
                    r.remove = function(e) {
                        r.setState((function(t) {
                                return {
                                    notices: t.notices.filter((function(t) {
                                            return t.key !== e
                                        }
                                    ))
                                }
                            }
                        ))
                    }
                    ,
                    o = n,
                    d()(r, o)
            }
            return b()(t, e),
                T()(t, [{
                    key: "getTransitionName",
                    value: function() {
                        var e = this.props
                            , t = e.transitionName;
                        return !t && e.animation && (t = e.prefixCls + "-" + e.animation),
                            t
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this, n = this.props, r = this.state.notices.map((function(e) {
                                var r = function() {
                                    var e = [].slice.call(arguments, 0);
                                    return 1 === e.length ? e[0] : function() {
                                        for (var t = 0; t < e.length; t++)
                                            e[t] && e[t].apply && e[t].apply(this, arguments)
                                    }
                                }(t.remove.bind(t, e.key), e.onClose);
                                return A.a.createElement(ie, c()({
                                    prefixCls: n.prefixCls
                                }, e, {
                                    onClose: r
                                }), e.content)
                            }
                        )), o = (e = {},
                            a()(e, n.prefixCls, 1),
                            a()(e, n.className, !!n.className),
                            e);
                        return A.a.createElement("div", {
                            className: re()(o),
                            style: n.style
                        }, A.a.createElement(te, {
                            transitionName: this.getTransitionName()
                        }, r))
                    }
                }]),
                t
        }(h.Component);
        ce.propTypes = {
            prefixCls: M.a.string,
            transitionName: M.a.string,
            animation: M.a.oneOfType([M.a.string, M.a.object]),
            style: M.a.object
        },
            ce.defaultProps = {
                prefixCls: "rmc-notification",
                animation: "fade",
                style: {
                    top: 65,
                    left: "50%"
                }
            },
            ce.newInstance = function(e, t) {
                var n = e || {}
                    , r = n.getContainer
                    , i = o()(n, ["getContainer"])
                    , a = void 0;
                r ? a = r() : (a = document.createElement("div"),
                    document.body.appendChild(a));
                var s = !1;
                v.a.render(A.a.createElement(ce, c()({}, i, {
                    ref: function(e) {
                        s || (s = !0,
                            t({
                                notice: function(t) {
                                    e.add(t)
                                },
                                removeNotice: function(t) {
                                    e.remove(t)
                                },
                                component: e,
                                destroy: function() {
                                    v.a.unmountComponentAtNode(a),
                                    r || document.body.removeChild(a)
                                }
                            }))
                    }
                })), a)
            }
        ;
        var ue = ce;
        t.default = ue
    }
])]);
//# sourceMappingURL=0.9555a2f9.chunk.js.map
