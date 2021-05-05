"use strict";
var extendStatics = function(t, e) {
    return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
    )(t, e)
};
function __extends(t, e) {
    function o() {
        this.constructor = t
    }
    extendStatics(t, e),
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
}
var protocol = "http:";
document && document.location && document.location.protocol && (protocol = document.location.protocol);
try {
    Object.keys || (Object.keys = function() {
        var i = Object.prototype.hasOwnProperty
            , n = !{
            toString: null
        }.propertyIsEnumerable("toString")
            , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
            , a = c.length;
        return function(t) {
            if ("object" != typeof t && "function" != typeof t || null === t)
                throw new TypeError("Object.keys called on non-object");
            var e = [];
            for (var o in t)
                i.call(t, o) && e.push(o);
            if (n)
                for (var r = 0; r < a; r++)
                    i.call(t, c[r]) && e.push(c[r]);
            return e
        }
    }()),
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t, e) {
            if (null == t)
                throw new TypeError("Cannot convert first argument to object");
            for (var o = Object(t), r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                if (null != i)
                    for (var n = Object.keys(Object(i)), c = 0, a = n.length; c < a; c++) {
                        var s = n[c]
                            , d = Object.getOwnPropertyDescriptor(i, s);
                        void 0 !== d && d.enumerable && (o[s] = i[s])
                    }
            }
            return o
        }
    })
} catch (t) {
    var img = new Image;
    img.src = protocol + "//ddd.1sapp.com/report?topic=log_cpc_trace&cmd=40001&type=polyfil&message=polyfil_error&isStack=true&stack=" + t.stack
}
var getQueryString = function(t) {
    void 0 === t && (t = window.location.href);
    var e = {}
        , o = []
        , r = ""
        , i = ""
        , n = t.substring(t.indexOf("?") + 1, t.length).split("&");
    for (var c in n)
        r = (o = n[c].split("="))[0] || "",
            -1 < (i = o[1] || "").indexOf("#") ? e[r] = decodeURIComponent(i.split("#")[0]) : e[r] = decodeURIComponent(i);
    return e
}
    , _getCpcSDKVersion = function() {
    var t = "";
    if (window.cpcAndroid)
        try {
            (t = window.cpcAndroid.fetchInfo("getCpcSDKVersion")) && "1.825-rc1" != t && (t = t.split("-")[0])
        } catch (t) {}
    return t
}
    , getCpcSDKVersion = function() {
    var t = "";
    if (window.cpcAndroid)
        try {
            t = (t = window.cpcAndroid.fetchInfo("getCpcSDKVersion")) && t
        } catch (t) {}
    return t
}
    , getClickTime = function() {
    var t = 0;
    if (window.cpcAndroid)
        try {
            var e = window.cpcAndroid.fetchInfo(JSON.stringify({
                method: "getClickTime"
            }));
            e && (t = e)
        } catch (t) {}
    return t
}
    , setSessionStorage = function(t, e) {
    sessionStorage.setItem(t, e)
}
    , getSessionStorage = function(t) {
    return sessionStorage.getItem(t)
}
    , device_detect = function(t, e) {
    void 0 === t && (t = window.navigator.userAgent),
    void 0 === e && (e = window.navigator.platform);
    var o = {}
        , r = {}
        , i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
        , n = t.match(/(Android);?[\s\/]+([\d.]+)?/)
        , c = !!t.match(/\(Macintosh\; Intel /)
        , a = t.match(/(iPad).*OS\s([\d_]+)/)
        , s = t.match(/(iPod)(.*OS\s([\d_]+))?/)
        , d = !a && t.match(/(iPhone\sOS)\s([\d_]+)/)
        , h = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
        , p = /Win\d{2}|Windows/.test(e)
        , u = t.match(/Windows Phone ([\d.]+)/)
        , l = h && t.match(/TouchPad/)
        , f = t.match(/Kindle\/([\d.]+)/)
        , m = t.match(/Silk\/([\d._]+)/)
        , v = t.match(/(BlackBerry).*Version\/([\d.]+)/)
        , _ = t.match(/(BB10).*Version\/([\d.]+)/)
        , g = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
        , y = t.match(/PlayBook/)
        , b = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/)
        , S = t.match(/Firefox\/([\d.]+)/)
        , w = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/)
        , T = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
        , C = !b && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
        , k = t.match(/MicroMessenger/i)
        , O = t.match(/UCBrowser/i)
        , I = t.match(/QQ\//i)
        , A = t.match(/MiuiBrowser\//i)
        , q = t.match(/baiduboxapp\//i)
        , j = C || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    return (r.webkit = !!i) && (r.version = i[1]),
    n && (o.android = !0,
        o.version = n[2]),
    d && !s && (o.ios = o.iphone = !0,
        o.version = d[2].replace(/_/g, ".")),
    a && (o.ios = o.ipad = !0,
        o.version = a[2].replace(/_/g, ".")),
    s && (o.ios = o.ipod = !0,
        o.version = s[3] ? s[3].replace(/_/g, ".") : null),
    u && (o.wp = !0,
        o.version = u[1]),
    h && (o.webos = !0,
        o.version = h[2]),
    l && (o.touchpad = !0),
    v && (o.blackberry = !0,
        o.version = v[2]),
    _ && (o.bb10 = !0,
        o.version = _[2]),
    g && (o.rimtabletos = !0,
        o.version = g[2]),
    y && (r.playbook = !0),
    f && (o.kindle = !0,
        o.version = f[1]),
    m && (r.silk = !0,
        r.version = m[1]),
    !m && o.android && t.match(/Kindle Fire/) && (r.silk = !0),
    b && (r.chrome = !0,
        r.version = b[1]),
    S && (r.firefox = !0,
        r.version = S[1]),
    w && (o.firefoxos = !0,
        o.version = w[1]),
    T && (r.ie = !0,
        r.version = T[1]),
    j && (c || o.ios || p) && (r.safari = !0,
    o.ios || (r.version = j[1])),
    C && (r.webview = !0),
    k && (r.weixin = !0),
    I && (r.QQ = !0),
    O && (r.UC = !0),
    A && (r.MI = !0),
    q && (r.BaiduBox = !0),
        o.tablet = !!(a || y || n && !t.match(/Mobile/) || S && t.match(/Tablet/) || T && !t.match(/Phone/) && t.match(/Touch/)),
        o.phone = !(o.tablet || o.ipod || !(n || d || h || v || _ || b && t.match(/Android/) || b && t.match(/CriOS\/([\d.]+)/) || S && t.match(/Mobile/) || T && t.match(/Touch/))),
        o.version = o.version || "0.0",
        o.PC = /win/i.test(e) || /Mac/.test(e),
    o.PC && (o.MAC = /Mac/.test(e),
        o.WIN = /win/i.test(e)),
        o
}
    , Base64 = function() {
    function t(t) {
        void 0 === t && (t = "default"),
            this.table = "default" == t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" : "lToWfMpEHAcir_JLRdBDSkaU5hPnmOCqVZ2KXNzI4uwGx01Ys379egtQ8yF-vbj6"
    }
    return t.prototype.UTF16ToUTF8 = function(t) {
        for (var e = [], o = t.length, r = 0; r < o; r++) {
            var i = t.charCodeAt(r);
            if (0 < i && i <= 127)
                e.push(t.charAt(r));
            else if (128 <= i && i <= 2047) {
                var n = 192 | i >> 6 & 31
                    , c = 128 | 63 & i;
                e.push(String.fromCharCode(n), String.fromCharCode(c))
            } else if (2048 <= i && i <= 65535) {
                n = 224 | i >> 12 & 15,
                    c = 128 | i >> 6 & 63;
                var a = 128 | 63 & i;
                e.push(String.fromCharCode(n), String.fromCharCode(c), String.fromCharCode(a))
            }
        }
        return e.join("")
    }
        ,
        t.prototype.UTF8ToUTF16 = function(t) {
            var e = []
                , o = t.length
                , r = 0;
            for (r = 0; r < o; r++) {
                var i = t.charCodeAt(r);
                if (0 == (i >> 7 & 255))
                    e.push(t.charAt(r));
                else if (6 == (i >> 5 & 255)) {
                    var n = (31 & i) << 6 | 63 & (c = t.charCodeAt(++r));
                    e.push(String.fromCharCode(n))
                } else if (14 == (i >> 4 & 255)) {
                    var c;
                    n = (255 & (i << 4 | (c = t.charCodeAt(++r)) >> 2 & 15)) << 8 | ((3 & c) << 6 | 63 & t.charCodeAt(++r));
                    e.push(String.fromCharCode(n))
                }
            }
            return e.join("")
        }
        ,
        t.prototype.encode = function(t) {
            if (!t)
                return "";
            for (var e = this.UTF16ToUTF8(t), o = 0, r = e.length, i = []; o < r; ) {
                var n = 255 & e.charCodeAt(o++);
                if (i.push(this.table[n >> 2]),
                o == r) {
                    i.push(this.table[(3 & n) << 4]),
                        i.push("==");
                    break
                }
                var c = e.charCodeAt(o++);
                if (o == r) {
                    i.push(this.table[(3 & n) << 4 | c >> 4 & 15]),
                        i.push(this.table[(15 & c) << 2]),
                        i.push("=");
                    break
                }
                var a = e.charCodeAt(o++);
                i.push(this.table[(3 & n) << 4 | c >> 4 & 15]),
                    i.push(this.table[(15 & c) << 2 | (192 & a) >> 6]),
                    i.push(this.table[63 & a])
            }
            return i.join("")
        }
        ,
        t.prototype.trim = function(t) {
            return t.trim()
        }
        ,
        t.prototype.decode = function(t) {
            if (!t)
                return "";
            for (var e = t.length, o = 0, r = []; o < e; ) {
                var i = this.table.indexOf(t.charAt(o++))
                    , n = this.table.indexOf(t.charAt(o++))
                    , c = this.table.indexOf(t.charAt(o++))
                    , a = this.table.indexOf(t.charAt(o++))
                    , s = i << 2 | n >> 4
                    , d = (15 & n) << 4 | c >> 2
                    , h = (3 & c) << 6 | a;
                r.push(String.fromCharCode(s)),
                64 != c && 0 != d && r.push(String.fromCharCode(d)),
                64 != a && 0 != h && r.push(String.fromCharCode(h))
            }
            return this.UTF8ToUTF16(r.join(""))
        }
        ,
        t
}()
    , InitParams = function() {
    function t(t, e) {
        this.query = t,
            this.init_trace_time = e
    }
    return t.prototype.setQueryInSession = function() {
        this.query.qtt_env && setSessionStorage("qtt_env", this.query.qtt_env),
        this.query.iclicashsid && setSessionStorage("iclicashsid", this.query.iclicashsid),
        this.query.icliideaid && setSessionStorage("iclicashsid", this.query.icliideaid)
    }
        ,
        t.prototype.default_params = function() {
            var t = device_detect();
            this.setQueryInSession();
            var e = getClickTime();
            e && this.init_trace_time;
            for (var o = "0", r = document.getElementsByTagName("script"), i = 0; i < r.length; i++) {
                var n = r[i] || {};
                "1" === getQueryString(n.src).auto && (o = "1")
            }
            var c = new Base64("icliideaid")
                , a = this.query.icliideaid && c.decode(this.query.icliideaid || getSessionStorage("icliideaid") || "") || 0;
            return {
                iclicashsid: this.query.iclicashsid || getSessionStorage("iclicashsid") || "none",
                opt_ideaid: a,
                qtt_env: this.query.qtt_env || getSessionStorage("qtt_env") || "none",
                opt_sdk_version: getCpcSDKVersion(),
                opt_target_type: 4,
                os: t.MAC ? "MAC" : t.WIN ? "WIN" : t.PC ? "pc" : t.android ? "Android" : t.ios ? "iOS" : "other",
                v: t.version,
                auto: this.query.auto || "0",
                opt_auto: o,
                ref: document.referrer
            }
        }
        ,
        t
}()
    , protocol$1 = "http:";
document && document.location && document.location.protocol && (protocol$1 = document.location.protocol);
var base_url = protocol$1 + "//rcv.aiclk.com"
    , ab_url = protocol$1 + "//qa3-adv.qttcs.cn/tools/callback/conversion-code-check";
ab_url = protocol$1 + "//adv.aiclk.com/tools/callback/conversion-code-check";
var protocol$2 = "http:";
document && document.location && document.location.protocol && (protocol$2 = document.location.protocol);
var LogServer = function() {
    function t() {}
    return t.prototype.send = function(t, e, o) {
        var r = ""
            , i = !1;
        o && o.stack && (r = o.stack,
            i = !0);
        var n = new Image;
        n.onload = this.onload,
            n.onerror = this.onerror,
            n.src = protocol$2 + "//ddd.1sapp.com/report?topic=log_cpc_trace&cmd=40001&type=" + t + "&message=" + e + "&stack=" + r + "&isStack=" + i
    }
        ,
        t.prototype.trace_error = function(t, e) {
            this.send("trace_error", t, e)
        }
        ,
        t.prototype.site_error = function(t, e) {
            this.send("site_error", t, e)
        }
        ,
        t.prototype.onload = function() {}
        ,
        t.prototype.onerror = function() {}
        ,
        t
}()
    , log = new LogServer
    , SendTrace = function() {
    function t(t, e, o) {
        this._query = t,
            this._init_trace_time = e,
            this.default_params = o,
            this._sdk_version = _getCpcSDKVersion(),
            this.sendType = "",
            this.doubleWrite = !1
    }
    return t.prototype.sendTrace = function(t) {
        void 0 === t && (t = {}),
            this.sendType = "h5",
            this.doubleWrite = !1;
        for (var e = ["stay", "load", "js_active", "active14", "active5", "active2", "active15", "active20"], o = 0; o < e.length; o++)
            t.t == e[o] && (this.doubleWrite = !0);
        try {
            this._sdk_version && "1.825" <= this._sdk_version && (this.sendType = "sdk");
            var r = (new Date).getTime()
                , i = this.paramsToString(Object.assign(t, {
                timestamp: r,
                _t: Math.floor((r - this._init_trace_time) / 1e3),
                opt_js_type: "kehu",
                qtt_env: this._query.qtt_env || "none",
                opt_url: window.location.href,
                opt_siteid: "0"
            }, this.default_params))
                , n = this.paramsToString(Object.assign(t, {
                timestamp: r,
                _t: Math.floor((r - this._init_trace_time) / 1e3),
                opt_js_type: "kehu",
                opt_send_type: this.sendType,
                opt_url: window.location.href,
                opt_siteid: "0"
            }, this.default_params), !0)
                , c = base_url + "/trace?" + i
                , a = base_url + "/conv?" + n;
            (this._query.qtt_env || getSessionStorage("qtt_env")) && (c = ab_url + "?" + i),
                "sdk" == this.sendType ? (this.sendSDKTrace(c),
                this.doubleWrite && this.sendSDKTrace(a)) : (this.sendImageTrace(c),
                this.doubleWrite && this.sendImageTrace(a))
        } catch (t) {
            log.trace_error("trace_send_trace_error", t)
        }
    }
        ,
        t.prototype.sendImageTrace = function(t) {
            var e = new Image;
            e.onerror = this.onerror,
                e.src = t
        }
        ,
        t.prototype.sendSDKTrace = function(e) {
            if (window.cpcAndroid)
                try {
                    1 != window.cpcAndroid.fetchInfo(JSON.stringify({
                        method: "excuteUrl",
                        targetUrl: e
                    })) && this.sendImageTrace(e)
                } catch (t) {
                    this.sendImageTrace(e)
                }
            else
                this.sendImageTrace(e)
        }
        ,
        t.prototype.paramsToString = function(o, r) {
            void 0 === r && (r = !1);
            try {
                var i = "";
                return Object.keys(o).forEach(function(t, e) {
                    r && (-1 != t.indexOf("opt_") && "opt_ideaid" != t && "opt_siteid" != t && "opt_target_type" != t || (i += 0 == e ? t + "=" + encodeURIComponent(o[t]) : "&" + t + "=" + encodeURIComponent(o[t]))),
                    r || (i += 0 == e ? t + "=" + encodeURIComponent(o[t]) : "&" + t + "=" + encodeURIComponent(o[t]))
                }),
                    i
            } catch (t) {
                return log.trace_error("trace_params_to_string_error", t),
                    ""
            }
        }
        ,
        t.prototype.onerror = function() {}
        ,
        t
}()
    , AddEvent = function() {
    function t(t) {
        this.trace = t,
            this.listenerLoad()
    }
    return t.prototype.listenerClick = function() {
        var e = this
            , o = document.documentElement.clientHeight || document.body && document.body.clientHeight;
        document.addEventListener("touchstart", function(t) {
            e.sendClickMonitor(t.touches[0].pageX, t.touches[0].pageY, t.touches[0].clientX, t.touches[0].clientY, o)
        })
    }
        ,
        t.prototype.sendClickMonitor = function(t, e, o, r, i) {
            this.trace.sendTrace({
                t: "clickMonitor",
                opt_first_screen: !(0 < e - i),
                px: t,
                py: e,
                x: o,
                y: r
            })
        }
        ,
        t.prototype.listenerLoad = function() {
            var e = this;
            window.addEventListener("load", function(t) {
                e.trace.sendTrace({
                    t: "load"
                }),
                    e.trace.sendTrace({
                        t: "ctsite_load_all"
                    })
            })
        }
        ,
        t.prototype.domRead = function() {
            var t = this;
            document.addEventListener("DOMContentLoaded", function() {
                t.trace.sendTrace({
                    t: "ctsite_dom_read"
                })
            }, !1)
        }
        ,
        t
}()
    , StayEvent = function() {
    function t(t) {
        this.trace = t,
            this.stayDurationTrace()
    }
    return t.prototype.stayDurationTrace = function() {
        var t = this
            , e = [1, 5, 10, 30, 60, 120]
            , o = setInterval(function() {
            (new Date).getTime() - t.trace.init_trace_time >= 1e3 * e[0] && (t.trace.sendTrace({
                t: "stay",
                duration: e[0],
                p: t.getScrollTop()
            }),
                e.shift(),
            e.length < 1 && clearInterval(o))
        }, 1e3)
    }
        ,
        t.prototype.getScrollTop = function() {
            var t = 0
                , e = 0;
            return document.body && (t = document.body.scrollTop),
            document.documentElement && (e = document.documentElement.scrollTop),
                0 < t - e ? t : e
        }
        ,
        t
}()
    , protocol$3 = "http:";
document && document.location && document.location.protocol && (protocol$3 = document.location.protocol);
var Trace = function(i) {
    function t() {
        var t = this
            , e = getQueryString()
            , o = (new Date).getTime()
            , r = new InitParams(e,o).default_params();
        return (t = i.call(this, e, o, r) || this).init_trace_time = o,
            t.init(),
            t
    }
    return __extends(t, i),
        t.prototype.init = function() {
            this.sendBeforeLoad(),
                new AddEvent(this),
                new StayEvent(this)
        }
        ,
        t.prototype.sendBeforeLoad = function() {
            this.sendTrace({
                t: "beforeload"
            })
        }
        ,
        t
}(SendTrace);
if (!window.sendTrace && "function" != typeof window.sendTrace) {
    var trace = new Trace;
    window.sendTrace = trace.sendTrace.bind(trace)
}
