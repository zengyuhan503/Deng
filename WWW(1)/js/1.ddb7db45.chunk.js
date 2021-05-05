(window["webpackJsonpmy-app"] = window["webpackJsonpmy-app"] || []).push([[1], {
    290: function(e, t, i) {
        "use strict";
        var s = this && this.__assign || function() {
                return (s = Object.assign || function(e) {
                        for (var t, i = 1, s = arguments.length; i < s; i++)
                            for (var a in t = arguments[i])
                                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }
                ).apply(this, arguments)
            }
            , a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var i in e)
                        Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e,
                    t
            }
            , n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(i(1))
            , o = n(i(381))
            , l = n(i(15))
            , d = i(291)
            , h = function(e) {
            var t = e.activeSlideKey
                , i = e.ContainerEl
                , a = e.children
                , n = e.containerClass
                , h = e.getSwiper
                , c = e.navigation
                , p = e.noSwiping
                , u = e.pagination
                , f = e.parallax
                , v = e.parallaxEl
                , m = e.WrapperEl
                , g = e.wrapperClass
                , b = e.rebuildOnUpdate
                , y = e.renderScrollbar
                , w = e.renderPagination
                , x = e.renderPrevButton
                , E = e.renderNextButton
                , T = e.renderParallax
                , S = e.rtl
                , C = e.scrollbar
                , M = e.shouldSwiperUpdate
                , P = e.slideClass
                , k = e.loop
                , z = r.createRef()
                , $ = r.useRef(null)
                , L = function() {
                if (!t)
                    return null;
                var e = 0
                    , i = k ? 1 : 0;
                return r.Children.forEach(a, (function(s) {
                        r.isValidElement(s) && (s.key === t && (e = i),
                            i += 1)
                    }
                )),
                    e
            }
                , I = function() {
                null !== $.current && ($.current.destroy(!0, !0),
                    $.current = null)
            }
                , O = function() {
                z.current && null === $.current && ($.current = new o.default(z.current,l.default({}, e)))
            };
            return r.useEffect((function() {
                    O();
                    var e = L();
                    return null !== $.current && null !== e && $.current.slideTo(e),
                        function() {
                            return I()
                        }
                }
            ), []),
                r.useEffect((function() {
                        if (null !== $.current) {
                            if (b)
                                I(),
                                    O();
                            else if (M) {
                                null !== $.current && $.current.update();
                                var e = $.current.slides.length;
                                if (e <= $.current.activeIndex) {
                                    var t = Math.max(e - 1, 0);
                                    $.current.slideTo(t)
                                }
                            }
                            var i = L();
                            null !== i && $.current.slideTo(i)
                        }
                    }
                )),
                r.useEffect((function() {
                        var e;
                        e = $.current,
                        "function" === typeof h && h(e)
                    }
                ), [$]),
                a && i && m ? d.validateChildren(a) ? r.default.createElement(i, {
                    className: n,
                    dir: S && "rtl",
                    ref: z
                }, f && v && T && T(e), r.default.createElement(m, {
                    className: g
                }, r.Children.map(a, (function(e) {
                        if (!d.isReactElement(e))
                            return null;
                        var t = [P, e.props.className];
                        return p && t.push("swiper-no-swiping"),
                            r.cloneElement(e, s(s({}, e.props), {
                                className: t.join(" ").trim()
                            }))
                    }
                ))), u && u.el && w && w(e), C && C.el && y && y(e), c && c.nextEl && E && E(e), c && c.prevEl && x && x(e)) : (console.warn("Children should be react element or an array of react element!!"),
                    null) : null
        };
        h.defaultProps = {
            containerClass: "swiper-container",
            wrapperClass: "swiper-wrapper",
            slideClass: "swiper-slide",
            ContainerEl: "div",
            WrapperEl: "div",
            renderScrollbar: function(e) {
                var t = e.scrollbar;
                return t ? r.default.createElement("div", {
                    className: d.classNames(t.el)
                }) : null
            },
            renderPagination: function(e) {
                var t = e.pagination;
                return t ? r.default.createElement("div", {
                    className: d.classNames(t.el)
                }) : null
            },
            renderPrevButton: function(e) {
                var t = e.navigation;
                return t ? r.default.createElement("div", {
                    className: d.classNames(t.prevEl)
                }) : null
            },
            renderNextButton: function(e) {
                var t = e.navigation;
                return t ? r.default.createElement("div", {
                    className: d.classNames(t.nextEl)
                }) : null
            },
            renderParallax: function(e) {
                var t = e.parallaxEl;
                return t ? r.default.createElement("div", {
                    className: d.classNames(t.el),
                    "data-swiper-parallax": t.value
                }) : null
            }
        },
            h.displayName = "ReactIdSwiper",
            t.default = h
    },
    291: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = i(1);
        t.classNames = function(e) {
            return "string" === typeof e ? e.split(".").join(" ").trim() : e instanceof HTMLElement ? e.className : ""
        }
            ,
            t.validateChildren = function(e) {
                var t = !0;
                return Array.isArray(e) ? s.Children.forEach(e, (function(e) {
                        s.isValidElement(e) || (t = !1)
                    }
                )) : t = s.isValidElement(e),
                    t
            }
            ,
            t.isReactElement = function(e) {
                return s.isValidElement(e) && ("string" === typeof e.type || "function" === typeof e.type || "object" === typeof e.type)
            }
            ,
            t.isModuleAvailable = function(e, t) {
                for (var i = !1, s = 0; s < e.length; s++)
                    if (e[s].name === t) {
                        i = !0;
                        break
                    }
                return i
            }
    },
    381: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i(40)
            , a = i(39)
            , n = i(45)
            , r = i(41)
            , o = i(33)
            , l = i(37)
            , d = i(38)
            , h = "undefined" === typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document
            , c = "undefined" === typeof window ? {
            document: h,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window
            , p = function e(t) {
            Object(l.a)(this, e);
            for (var i = 0; i < t.length; i += 1)
                this[i] = t[i];
            return this.length = t.length,
                this
        };
        function u(e, t) {
            var i = []
                , s = 0;
            if (e && !t && e instanceof p)
                return e;
            if (e)
                if ("string" === typeof e) {
                    var a, n, r = e.trim();
                    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                        var o = "div";
                        for (0 === r.indexOf("<li") && (o = "ul"),
                             0 === r.indexOf("<tr") && (o = "tbody"),
                             0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"),
                             0 === r.indexOf("<tbody") && (o = "table"),
                             0 === r.indexOf("<option") && (o = "select"),
                                 (n = h.createElement(o)).innerHTML = r,
                                 s = 0; s < n.childNodes.length; s += 1)
                            i.push(n.childNodes[s])
                    } else
                        for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || h).querySelectorAll(e.trim()) : [h.getElementById(e.trim().split("#")[1])],
                                 s = 0; s < a.length; s += 1)
                            a[s] && i.push(a[s])
                } else if (e.nodeType || e === c || e === h)
                    i.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (s = 0; s < e.length; s += 1)
                        i.push(e[s]);
            return new p(i)
        }
        function f(e) {
            for (var t = [], i = 0; i < e.length; i += 1)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        u.fn = p.prototype,
            u.Class = p,
            u.Dom7 = p;
        "resize scroll".split(" ");
        var v = {
            addClass: function(e) {
                if ("undefined" === typeof e)
                    return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        "undefined" !== typeof this[s] && "undefined" !== typeof this[s].classList && this[s].classList.add(t[i]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        "undefined" !== typeof this[s] && "undefined" !== typeof this[s].classList && this[s].classList.remove(t[i]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        "undefined" !== typeof this[s] && "undefined" !== typeof this[s].classList && this[s].classList.toggle(t[i]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" === typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length)
                        this[i].setAttribute(e, t);
                    else
                        for (var s in e)
                            this[i][s] = e[s],
                                this[i].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                var i;
                if ("undefined" !== typeof t) {
                    for (var s = 0; s < this.length; s += 1)
                        (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                            i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) {
                    if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                        return i.dom7ElementDataStorage[e];
                    var a = i.getAttribute("data-".concat(e));
                    return a || void 0
                }
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e,
                        i.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" !== typeof e && (e = "".concat(e, "ms"));
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e,
                        i.transitionDuration = e
                }
                return this
            },
            on: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                var s = t[0]
                    , a = t[1]
                    , n = t[2]
                    , r = t[3];
                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e),
                            u(t).is(a))
                            n.apply(t, i);
                        else
                            for (var s = u(t).parents(), r = 0; r < s.length; r += 1)
                                u(s[r]).is(a) && n.apply(s[r], i)
                    }
                }
                function l(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                        n.apply(this, t)
                }
                "function" === typeof t[1] && (s = t[0],
                    n = t[1],
                    r = t[2],
                    a = void 0),
                r || (r = !1);
                for (var d, h = s.split(" "), c = 0; c < this.length; c += 1) {
                    var p = this[c];
                    if (a)
                        for (d = 0; d < h.length; d += 1) {
                            var f = h[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                            p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                                p.dom7LiveListeners[f].push({
                                    listener: n,
                                    proxyListener: o
                                }),
                                p.addEventListener(f, o, r)
                        }
                    else
                        for (d = 0; d < h.length; d += 1) {
                            var v = h[d];
                            p.dom7Listeners || (p.dom7Listeners = {}),
                            p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                                p.dom7Listeners[v].push({
                                    listener: n,
                                    proxyListener: l
                                }),
                                p.addEventListener(v, l, r)
                        }
                }
                return this
            },
            off: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                var s = t[0]
                    , a = t[1]
                    , n = t[2]
                    , r = t[3];
                "function" === typeof t[1] && (s = t[0],
                    n = t[1],
                    r = t[2],
                    a = void 0),
                r || (r = !1);
                for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], h = 0; h < this.length; h += 1) {
                        var c = this[h]
                            , p = void 0;
                        if (!a && c.dom7Listeners ? p = c.dom7Listeners[d] : a && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]),
                        p && p.length)
                            for (var u = p.length - 1; u >= 0; u -= 1) {
                                var f = p[u];
                                n && f.listener === n ? (c.removeEventListener(d, f.proxyListener, r),
                                    p.splice(u, 1)) : n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (c.removeEventListener(d, f.proxyListener, r),
                                    p.splice(u, 1)) : n || (c.removeEventListener(d, f.proxyListener, r),
                                    p.splice(u, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                for (var s = t[0].split(" "), a = t[1], n = 0; n < s.length; n += 1)
                    for (var r = s[n], o = 0; o < this.length; o += 1) {
                        var l = this[o]
                            , d = void 0;
                        try {
                            d = new c.CustomEvent(r,{
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (p) {
                            (d = h.createEvent("Event")).initEvent(r, !0, !0),
                                d.detail = a
                        }
                        l.dom7EventData = t.filter((function(e, t) {
                                return t > 0
                            }
                        )),
                            l.dispatchEvent(d),
                            l.dom7EventData = [],
                            delete l.dom7EventData
                    }
                return this
            },
            transitionEnd: function(e) {
                var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
                function a(n) {
                    if (n.target === this)
                        for (e.call(this, n),
                                 t = 0; t < i.length; t += 1)
                            s.off(i[t], a)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1)
                        s.on(i[t], a);
                return this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0]
                        , t = e.getBoundingClientRect()
                        , i = h.body
                        , s = e.clientTop || i.clientTop || 0
                        , a = e.clientLeft || i.clientLeft || 0
                        , n = e === c ? c.scrollY : e.scrollTop
                        , r = e === c ? c.scrollX : e.scrollLeft;
                    return {
                        top: t.top + n - s,
                        left: t.left + r - a
                    }
                }
                return null
            },
            css: function(e, t) {
                var i;
                if (1 === arguments.length) {
                    if ("string" !== typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (var s in e)
                                this[i].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return c.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" === typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        this[i].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e)
                    return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t]))
                        return this;
                return this
            },
            html: function(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function(e) {
                var t, i, s = this[0];
                if (!s || "undefined" === typeof e)
                    return !1;
                if ("string" === typeof e) {
                    if (s.matches)
                        return s.matches(e);
                    if (s.webkitMatchesSelector)
                        return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector)
                        return s.msMatchesSelector(e);
                    for (t = u(e),
                             i = 0; i < t.length; i += 1)
                        if (t[i] === s)
                            return !0;
                    return !1
                }
                if (e === h)
                    return s === h;
                if (e === c)
                    return s === c;
                if (e.nodeType || e instanceof p) {
                    for (t = e.nodeType ? [e] : e,
                             i = 0; i < t.length; i += 1)
                        if (t[i] === s)
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if ("undefined" === typeof e)
                    return this;
                var t, i = this.length;
                return new p(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function() {
                for (var e, t = 0; t < arguments.length; t += 1) {
                    e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    for (var i = 0; i < this.length; i += 1)
                        if ("string" === typeof e) {
                            var s = h.createElement("div");
                            for (s.innerHTML = e; s.firstChild; )
                                this[i].appendChild(s.firstChild)
                        } else if (e instanceof p)
                            for (var a = 0; a < e.length; a += 1)
                                this[i].appendChild(e[a]);
                        else
                            this[i].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var t, i;
                for (t = 0; t < this.length; t += 1)
                    if ("string" === typeof e) {
                        var s = h.createElement("div");
                        for (s.innerHTML = e,
                                 i = s.childNodes.length - 1; i >= 0; i -= 1)
                            this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof p)
                        for (i = 0; i < e.length; i += 1)
                            this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? new p([this[0].nextElementSibling]) : new p([]) : this[0].nextElementSibling ? new p([this[0].nextElementSibling]) : new p([]) : new p([])
            },
            nextAll: function(e) {
                var t = []
                    , i = this[0];
                if (!i)
                    return new p([]);
                for (; i.nextElementSibling; ) {
                    var s = i.nextElementSibling;
                    e ? u(s).is(e) && t.push(s) : t.push(s),
                        i = s
                }
                return new p(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? new p([t.previousElementSibling]) : new p([]) : t.previousElementSibling ? new p([t.previousElementSibling]) : new p([])
                }
                return new p([])
            },
            prevAll: function(e) {
                var t = []
                    , i = this[0];
                if (!i)
                    return new p([]);
                for (; i.previousElementSibling; ) {
                    var s = i.previousElementSibling;
                    e ? u(s).is(e) && t.push(s) : t.push(s),
                        i = s
                }
                return new p(t)
            },
            parent: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (e ? u(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return u(f(t))
            },
            parents: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].parentNode; s; )
                        e ? u(s).is(e) && t.push(s) : t.push(s),
                            s = s.parentNode;
                return u(f(t))
            },
            closest: function(e) {
                var t = this;
                return "undefined" === typeof e ? new p([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                    t)
            },
            find: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
                        t.push(s[a]);
                return new p(t)
            },
            children: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                        e ? 1 === s[a].nodeType && u(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
                return new p(f(t))
            },
            filter: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    e.call(this[i], i, this[i]) && t.push(this[i]);
                return new p(t)
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                for (var e, t, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                    s[a] = arguments[a];
                for (e = 0; e < s.length; e += 1) {
                    var n = u(s[e]);
                    for (t = 0; t < n.length; t += 1)
                        this[this.length] = n[t],
                            this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? c.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(v).forEach((function(e) {
                u.fn[e] = u.fn[e] || v[e]
            }
        ));
        var m = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                        try {
                            t[e] = null
                        } catch (i) {}
                        try {
                            delete t[e]
                        } catch (i) {}
                    }
                ))
            },
            nextTick: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e) {
                var t, i, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", n = c.getComputedStyle(e, null);
                return c.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) {
                        return e.replace(",", ".")
                    }
                )).join(", ")),
                    s = new c.WebKitCSSMatrix("none" === i ? "" : i)) : t = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                "x" === a && (i = c.WebKitCSSMatrix ? s.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                "y" === a && (i = c.WebKitCSSMatrix ? s.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
                i || 0
            },
            parseUrlQuery: function(e) {
                var t, i, s, a, n = {}, r = e || c.location.href;
                if ("string" === typeof r && r.length)
                    for (a = (i = (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                            return "" !== e
                        }
                    ))).length,
                             t = 0; t < a; t += 1)
                        s = i[t].replace(/#\S+/g, "").split("="),
                            n[decodeURIComponent(s[0])] = "undefined" === typeof s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" === typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
                    var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    if (void 0 !== i && null !== i)
                        for (var s = Object.keys(Object(i)), a = 0, n = s.length; a < n; a += 1) {
                            var r = s[a]
                                , o = Object.getOwnPropertyDescriptor(i, r);
                            void 0 !== o && o.enumerable && (m.isObject(e[r]) && m.isObject(i[r]) ? m.extend(e[r], i[r]) : !m.isObject(e[r]) && m.isObject(i[r]) ? (e[r] = {},
                                m.extend(e[r], i[r])) : e[r] = i[r])
                        }
                }
                return e
            }
        }
            , g = {
            touch: c.Modernizr && !0 === c.Modernizr.touch || !!(c.navigator.maxTouchPoints > 0 || "ontouchstart"in c || c.DocumentTouch && h instanceof c.DocumentTouch),
            pointerEvents: !!c.PointerEvent && "maxTouchPoints"in c.navigator && c.navigator.maxTouchPoints > 0,
            observer: "MutationObserver"in c || "WebkitMutationObserver"in c,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    c.addEventListener("testPassiveListener", null, t)
                } catch (i) {}
                return e
            }(),
            gestures: "ongesturestart"in c
        }
            , b = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(l.a)(this, e);
                var i = this;
                i.params = t,
                    i.eventsListeners = {},
                i.params && i.params.on && Object.keys(i.params.on).forEach((function(e) {
                        i.on(e, i.params.on[e])
                    }
                ))
            }
            return Object(d.a)(e, [{
                key: "on",
                value: function(e, t, i) {
                    var s = this;
                    if ("function" !== typeof t)
                        return s;
                    var a = i ? "unshift" : "push";
                    return e.split(" ").forEach((function(e) {
                            s.eventsListeners[e] || (s.eventsListeners[e] = []),
                                s.eventsListeners[e][a](t)
                        }
                    )),
                        s
                }
            }, {
                key: "once",
                value: function(e, t, i) {
                    var s = this;
                    if ("function" !== typeof t)
                        return s;
                    function a() {
                        s.off(e, a),
                        a.f7proxy && delete a.f7proxy;
                        for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                            n[r] = arguments[r];
                        t.apply(s, n)
                    }
                    return a.f7proxy = t,
                        s.on(e, a, i)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var i = this;
                    return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                            "undefined" === typeof t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                                    (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
                                }
                            ))
                        }
                    )),
                        i) : i
                }
            }, {
                key: "emit",
                value: function() {
                    var e, t, i, s = this;
                    if (!s.eventsListeners)
                        return s;
                    for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++)
                        n[r] = arguments[r];
                    "string" === typeof n[0] || Array.isArray(n[0]) ? (e = n[0],
                        t = n.slice(1, n.length),
                        i = s) : (e = n[0].events,
                        t = n[0].data,
                        i = n[0].context || s);
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return o.forEach((function(e) {
                            if (s.eventsListeners && s.eventsListeners[e]) {
                                var a = [];
                                s.eventsListeners[e].forEach((function(e) {
                                        a.push(e)
                                    }
                                )),
                                    a.forEach((function(e) {
                                            e.apply(i, t)
                                        }
                                    ))
                            }
                        }
                    )),
                        s
                }
            }, {
                key: "useModulesParams",
                value: function(e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function(i) {
                            var s = t.modules[i];
                            s.params && m.extend(e, s.params)
                        }
                    ))
                }
            }, {
                key: "useModules",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , t = this;
                    t.modules && Object.keys(t.modules).forEach((function(i) {
                            var s = t.modules[i]
                                , a = e[i] || {};
                            s.instance && Object.keys(s.instance).forEach((function(e) {
                                    var i = s.instance[e];
                                    t[e] = "function" === typeof i ? i.bind(t) : i
                                }
                            )),
                            s.on && t.on && Object.keys(s.on).forEach((function(e) {
                                    t.on(e, s.on[e])
                                }
                            )),
                            s.create && s.create.bind(t)(a)
                        }
                    ))
                }
            }], [{
                key: "installModule",
                value: function(e) {
                    var t = this;
                    t.prototype.modules || (t.prototype.modules = {});
                    var i = e.name || "".concat(Object.keys(t.prototype.modules).length, "_").concat(m.now());
                    if (t.prototype.modules[i] = e,
                    e.proto && Object.keys(e.proto).forEach((function(i) {
                            t.prototype[i] = e.proto[i]
                        }
                    )),
                    e.static && Object.keys(e.static).forEach((function(i) {
                            t[i] = e.static[i]
                        }
                    )),
                        e.install) {
                        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++)
                            a[n - 1] = arguments[n];
                        e.install.apply(t, a)
                    }
                    return t
                }
            }, {
                key: "use",
                value: function(e) {
                    var t = this;
                    if (Array.isArray(e))
                        return e.forEach((function(e) {
                                return t.installModule(e)
                            }
                        )),
                            t;
                    for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                        s[a - 1] = arguments[a];
                    return t.installModule.apply(t, [e].concat(s))
                }
            }, {
                key: "components",
                set: function(e) {
                    this.use && this.use(e)
                }
            }]),
                e
        }();
        var y = {
            updateSize: function() {
                var e, t, i = this.$el;
                e = "undefined" !== typeof this.params.width ? this.params.width : i[0].clientWidth,
                    t = "undefined" !== typeof this.params.height ? this.params.height : i[0].clientHeight,
                0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                    t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                    m.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
            },
            updateSlides: function() {
                var e = this.params
                    , t = this.$wrapperEl
                    , i = this.size
                    , s = this.rtlTranslate
                    , a = this.wrongRTL
                    , n = this.virtual && e.virtual.enabled
                    , r = n ? this.virtual.slides.length : this.slides.length
                    , o = t.children(".".concat(this.params.slideClass))
                    , l = n ? this.virtual.slides.length : o.length
                    , d = []
                    , h = []
                    , p = [];
                function u(t) {
                    return !e.cssMode || t !== o.length - 1
                }
                var f = e.slidesOffsetBefore;
                "function" === typeof f && (f = e.slidesOffsetBefore.call(this));
                var v = e.slidesOffsetAfter;
                "function" === typeof v && (v = e.slidesOffsetAfter.call(this));
                var g = this.snapGrid.length
                    , b = this.snapGrid.length
                    , y = e.spaceBetween
                    , w = -f
                    , x = 0
                    , E = 0;
                if ("undefined" !== typeof i) {
                    var T, S;
                    "string" === typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i),
                        this.virtualSize = -y,
                        s ? o.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : o.css({
                            marginRight: "",
                            marginBottom: ""
                        }),
                    e.slidesPerColumn > 1 && (T = Math.floor(l / e.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn,
                    "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                    for (var C, M = e.slidesPerColumn, P = T / M, k = Math.floor(l / e.slidesPerColumn), z = 0; z < l; z += 1) {
                        S = 0;
                        var $ = o.eq(z);
                        if (e.slidesPerColumn > 1) {
                            var L = void 0
                                , I = void 0
                                , O = void 0;
                            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                var D = Math.floor(z / (e.slidesPerGroup * e.slidesPerColumn))
                                    , A = z - e.slidesPerColumn * e.slidesPerGroup * D
                                    , N = 0 === D ? e.slidesPerGroup : Math.min(Math.ceil((l - D * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                                L = (I = A - (O = Math.floor(A / N)) * N + D * e.slidesPerGroup) + O * T / M,
                                    $.css({
                                        "-webkit-box-ordinal-group": L,
                                        "-moz-box-ordinal-group": L,
                                        "-ms-flex-order": L,
                                        "-webkit-order": L,
                                        order: L
                                    })
                            } else
                                "column" === e.slidesPerColumnFill ? (O = z - (I = Math.floor(z / M)) * M,
                                (I > k || I === k && O === M - 1) && (O += 1) >= M && (O = 0,
                                    I += 1)) : I = z - (O = Math.floor(z / P)) * P;
                            $.css("margin-".concat(this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && "".concat(e.spaceBetween, "px"))
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === e.slidesPerView) {
                                var G = c.getComputedStyle($[0], null)
                                    , B = $[0].style.transform
                                    , H = $[0].style.webkitTransform;
                                if (B && ($[0].style.transform = "none"),
                                H && ($[0].style.webkitTransform = "none"),
                                    e.roundLengths)
                                    S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var V = parseFloat(G.getPropertyValue("width"))
                                        , X = parseFloat(G.getPropertyValue("padding-left"))
                                        , Y = parseFloat(G.getPropertyValue("padding-right"))
                                        , F = parseFloat(G.getPropertyValue("margin-left"))
                                        , R = parseFloat(G.getPropertyValue("margin-right"))
                                        , j = G.getPropertyValue("box-sizing");
                                    S = j && "border-box" === j ? V + F + R : V + X + Y + F + R
                                } else {
                                    var W = parseFloat(G.getPropertyValue("height"))
                                        , q = parseFloat(G.getPropertyValue("padding-top"))
                                        , _ = parseFloat(G.getPropertyValue("padding-bottom"))
                                        , U = parseFloat(G.getPropertyValue("margin-top"))
                                        , K = parseFloat(G.getPropertyValue("margin-bottom"))
                                        , J = G.getPropertyValue("box-sizing");
                                    S = J && "border-box" === J ? W + U + K : W + q + _ + U + K
                                }
                                B && ($[0].style.transform = B),
                                H && ($[0].style.webkitTransform = H),
                                e.roundLengths && (S = Math.floor(S))
                            } else
                                S = (i - (e.slidesPerView - 1) * y) / e.slidesPerView,
                                e.roundLengths && (S = Math.floor(S)),
                                o[z] && (this.isHorizontal() ? o[z].style.width = "".concat(S, "px") : o[z].style.height = "".concat(S, "px"));
                            o[z] && (o[z].swiperSlideSize = S),
                                p.push(S),
                                e.centeredSlides ? (w = w + S / 2 + x / 2 + y,
                                0 === x && 0 !== z && (w = w - i / 2 - y),
                                0 === z && (w = w - i / 2 - y),
                                Math.abs(w) < .001 && (w = 0),
                                e.roundLengths && (w = Math.floor(w)),
                                E % e.slidesPerGroup === 0 && d.push(w),
                                    h.push(w)) : (e.roundLengths && (w = Math.floor(w)),
                                (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup === 0 && d.push(w),
                                    h.push(w),
                                    w = w + S + y),
                                this.virtualSize += S + y,
                                x = S,
                                E += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + v,
                    s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                        width: "".concat(this.virtualSize + e.spaceBetween, "px")
                    }),
                    e.setWrapperSize && (this.isHorizontal() ? t.css({
                        width: "".concat(this.virtualSize + e.spaceBetween, "px")
                    }) : t.css({
                        height: "".concat(this.virtualSize + e.spaceBetween, "px")
                    })),
                    e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T,
                        this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                        this.isHorizontal() ? t.css({
                            width: "".concat(this.virtualSize + e.spaceBetween, "px")
                        }) : t.css({
                            height: "".concat(this.virtualSize + e.spaceBetween, "px")
                        }),
                        e.centeredSlides)) {
                        C = [];
                        for (var Z = 0; Z < d.length; Z += 1) {
                            var Q = d[Z];
                            e.roundLengths && (Q = Math.floor(Q)),
                            d[Z] < this.virtualSize + d[0] && C.push(Q)
                        }
                        d = C
                    }
                    if (!e.centeredSlides) {
                        C = [];
                        for (var ee = 0; ee < d.length; ee += 1) {
                            var te = d[ee];
                            e.roundLengths && (te = Math.floor(te)),
                            d[ee] <= this.virtualSize - i && C.push(te)
                        }
                        d = C,
                        Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(this.virtualSize - i)
                    }
                    if (0 === d.length && (d = [0]),
                    0 !== e.spaceBetween && (this.isHorizontal() ? s ? o.filter(u).css({
                        marginLeft: "".concat(y, "px")
                    }) : o.filter(u).css({
                        marginRight: "".concat(y, "px")
                    }) : o.filter(u).css({
                        marginBottom: "".concat(y, "px")
                    })),
                    e.centeredSlides && e.centeredSlidesBounds) {
                        var ie = 0;
                        p.forEach((function(t) {
                                ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                            }
                        ));
                        var se = (ie -= e.spaceBetween) - i;
                        d = d.map((function(e) {
                                return e < 0 ? -f : e > se ? se + v : e
                            }
                        ))
                    }
                    if (e.centerInsufficientSlides) {
                        var ae = 0;
                        if (p.forEach((function(t) {
                                ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                            }
                        )),
                        (ae -= e.spaceBetween) < i) {
                            var ne = (i - ae) / 2;
                            d.forEach((function(e, t) {
                                    d[t] = e - ne
                                }
                            )),
                                h.forEach((function(e, t) {
                                        h[t] = e + ne
                                    }
                                ))
                        }
                    }
                    m.extend(this, {
                        slides: o,
                        snapGrid: d,
                        slidesGrid: h,
                        slidesSizesGrid: p
                    }),
                    l !== r && this.emit("slidesLengthChange"),
                    d.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                        this.emit("snapGridLengthChange")),
                    h.length !== b && this.emit("slidesGridLengthChange"),
                    (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = [], s = 0;
                if ("number" === typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length)
                            break;
                        i.push(this.slides.eq(a)[0])
                    }
                else
                    i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if ("undefined" !== typeof i[t]) {
                        var n = i[t].offsetHeight;
                        s = n > s ? n : s
                    }
                s && this.$wrapperEl.css("height", "".concat(s, "px"))
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1)
                    e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0
                    , t = this.params
                    , i = this.slides
                    , s = this.rtlTranslate;
                if (0 !== i.length) {
                    "undefined" === typeof i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var a = -e;
                    s && (a = e),
                        i.removeClass(t.slideVisibleClass),
                        this.visibleSlidesIndexes = [],
                        this.visibleSlides = [];
                    for (var n = 0; n < i.length; n += 1) {
                        var r = i[n]
                            , o = (a + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var l = -(a - r.swiperSlideOffset)
                                , d = l + this.slidesSizesGrid[n];
                            (l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(r),
                                this.visibleSlidesIndexes.push(n),
                                i.eq(n).addClass(t.slideVisibleClass))
                        }
                        r.progress = s ? -o : o
                    }
                    this.visibleSlides = u(this.visibleSlides)
                }
            },
            updateProgress: function(e) {
                if ("undefined" === typeof e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params
                    , s = this.maxTranslate() - this.minTranslate()
                    , a = this.progress
                    , n = this.isBeginning
                    , r = this.isEnd
                    , o = n
                    , l = r;
                0 === s ? (a = 0,
                    n = !0,
                    r = !0) : (n = (a = (e - this.minTranslate()) / s) <= 0,
                    r = a >= 1),
                    m.extend(this, {
                        progress: a,
                        isBeginning: n,
                        isEnd: r
                    }),
                (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e),
                n && !o && this.emit("reachBeginning toEdge"),
                r && !l && this.emit("reachEnd toEdge"),
                (o && !n || l && !r) && this.emit("fromEdge"),
                    this.emit("progress", a)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, n = this.realIndex, r = this.virtual && i.virtual.enabled;
                t.removeClass("".concat(i.slideActiveClass, " ").concat(i.slideNextClass, " ").concat(i.slidePrevClass, " ").concat(i.slideDuplicateActiveClass, " ").concat(i.slideDuplicateNextClass, " ").concat(i.slideDuplicatePrevClass)),
                    (e = r ? this.$wrapperEl.find(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(a, '"]')) : t.eq(a)).addClass(i.slideActiveClass),
                i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(n, '"]')).addClass(i.slideDuplicateActiveClass) : s.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(n, '"]')).addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll(".".concat(i.slideClass)).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll(".".concat(i.slideClass)).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass) : s.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass),
                    l.hasClass(i.slideDuplicateClass) ? s.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass) : s.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, n = this.params, r = this.activeIndex, o = this.realIndex, l = this.snapIndex, d = e;
                if ("undefined" === typeof d) {
                    for (var h = 0; h < s.length; h += 1)
                        "undefined" !== typeof s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                    n.normalizeSlideIndex && (d < 0 || "undefined" === typeof d) && (d = 0)
                }
                if (a.indexOf(i) >= 0)
                    t = a.indexOf(i);
                else {
                    var c = Math.min(n.slidesPerGroupSkip, d);
                    t = c + Math.floor((d - c) / n.slidesPerGroup)
                }
                if (t >= a.length && (t = a.length - 1),
                d !== r) {
                    var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    m.extend(this, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: r,
                        activeIndex: d
                    }),
                        this.emit("activeIndexChange"),
                        this.emit("snapIndexChange"),
                    o !== p && this.emit("realIndexChange"),
                    (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else
                    t !== l && (this.snapIndex = t,
                        this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this.params
                    , i = u(e.target).closest(".".concat(t.slideClass))[0]
                    , s = !1;
                if (i)
                    for (var a = 0; a < this.slides.length; a += 1)
                        this.slides[a] === i && (s = !0);
                if (!i || !s)
                    return this.clickedSlide = void 0,
                        void (this.clickedIndex = void 0);
                this.clickedSlide = i,
                    this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(u(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = u(i).index(),
                t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        };
        var w = {
            getTranslate: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y"
                    , t = this.params
                    , i = this.rtlTranslate
                    , s = this.translate
                    , a = this.$wrapperEl;
                if (t.virtualTranslate)
                    return i ? -s : s;
                if (t.cssMode)
                    return s;
                var n = m.getTranslate(a[0], e);
                return i && (n = -n),
                n || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtlTranslate
                    , s = this.params
                    , a = this.$wrapperEl
                    , n = this.wrapperEl
                    , r = this.progress
                    , o = 0
                    , l = 0;
                this.isHorizontal() ? o = i ? -e : e : l = e,
                s.roundLengths && (o = Math.floor(o),
                    l = Math.floor(l)),
                    s.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(".concat(o, "px, ").concat(l, "px, ").concat(0, "px)")),
                    this.previousTranslate = this.translate,
                    this.translate = this.isHorizontal() ? o : l;
                var d = this.maxTranslate() - this.minTranslate();
                (0 === d ? 0 : (e - this.minTranslate()) / d) !== r && this.updateProgress(e),
                    this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed
                    , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                    , s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                    , a = arguments.length > 4 ? arguments[4] : void 0
                    , n = this
                    , r = n.params
                    , l = n.wrapperEl;
                if (n.animating && r.preventInteractionOnTransition)
                    return !1;
                var d, h = n.minTranslate(), c = n.maxTranslate();
                if (d = s && e > h ? h : s && e < c ? c : e,
                    n.updateProgress(d),
                    r.cssMode) {
                    var p, u = n.isHorizontal();
                    if (0 === t)
                        l[u ? "scrollLeft" : "scrollTop"] = -d;
                    else if (l.scrollTo)
                        l.scrollTo((p = {},
                            Object(o.a)(p, u ? "left" : "top", -d),
                            Object(o.a)(p, "behavior", "smooth"),
                            p));
                    else
                        l[u ? "scrollLeft" : "scrollTop"] = -d;
                    return !0
                }
                return 0 === t ? (n.setTransition(0),
                    n.setTranslate(d),
                i && (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionEnd"))) : (n.setTransition(t),
                    n.setTranslate(d),
                i && (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionStart")),
                n.animating || (n.animating = !0,
                n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                            n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                            n.onTranslateToWrapperTransitionEnd = null,
                            delete n.onTranslateToWrapperTransitionEnd,
                        i && n.emit("transitionEnd"))
                    }
                ),
                    n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
                    !0
            }
        };
        var x = {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                    this.emit("setTransition", e, t)
            },
            transitionStart: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                    , t = arguments.length > 1 ? arguments[1] : void 0
                    , i = this.activeIndex
                    , s = this.params
                    , a = this.previousIndex;
                if (!s.cssMode) {
                    s.autoHeight && this.updateAutoHeight();
                    var n = t;
                    if (n || (n = i > a ? "next" : i < a ? "prev" : "reset"),
                        this.emit("transitionStart"),
                    e && i !== a) {
                        if ("reset" === n)
                            return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"),
                            "next" === n ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                }
            },
            transitionEnd: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                    , t = arguments.length > 1 ? arguments[1] : void 0
                    , i = this.activeIndex
                    , s = this.previousIndex
                    , a = this.params;
                if (this.animating = !1,
                    !a.cssMode) {
                    this.setTransition(0);
                    var n = t;
                    if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
                        this.emit("transitionEnd"),
                    e && i !== s) {
                        if ("reset" === n)
                            return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"),
                            "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            }
        };
        var E = {
            slideTo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed
                    , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                    , s = arguments.length > 3 ? arguments[3] : void 0
                    , a = this
                    , n = e;
                n < 0 && (n = 0);
                var r = a.params
                    , l = a.snapGrid
                    , d = a.slidesGrid
                    , h = a.previousIndex
                    , c = a.activeIndex
                    , p = a.rtlTranslate
                    , u = a.wrapperEl;
                if (a.animating && r.preventInteractionOnTransition)
                    return !1;
                var f = Math.min(a.params.slidesPerGroupSkip, n)
                    , v = f + Math.floor((n - f) / a.params.slidesPerGroup);
                v >= d.length && (v = d.length - 1),
                (c || r.initialSlide || 0) === (h || 0) && i && a.emit("beforeSlideChangeStart");
                var m, g = -l[v];
                if (a.updateProgress(g),
                    r.normalizeSlideIndex)
                    for (var b = 0; b < d.length; b += 1)
                        -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
                if (a.initialized && n !== c) {
                    if (!a.allowSlideNext && g < a.translate && g < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== n)
                        return !1
                }
                if (m = n > c ? "next" : n < c ? "prev" : "reset",
                p && -g === a.translate || !p && g === a.translate)
                    return a.updateActiveIndex(n),
                    r.autoHeight && a.updateAutoHeight(),
                        a.updateSlidesClasses(),
                    "slide" !== r.effect && a.setTranslate(g),
                    "reset" !== m && (a.transitionStart(i, m),
                        a.transitionEnd(i, m)),
                        !1;
                if (r.cssMode) {
                    var y, w = a.isHorizontal();
                    if (0 === t)
                        u[w ? "scrollLeft" : "scrollTop"] = -g;
                    else if (u.scrollTo)
                        u.scrollTo((y = {},
                            Object(o.a)(y, w ? "left" : "top", -g),
                            Object(o.a)(y, "behavior", "smooth"),
                            y));
                    else
                        u[w ? "scrollLeft" : "scrollTop"] = -g;
                    return !0
                }
                return 0 === t ? (a.setTransition(0),
                    a.setTranslate(g),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, s),
                    a.transitionStart(i, m),
                    a.transitionEnd(i, m)) : (a.setTransition(t),
                    a.setTranslate(g),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, s),
                    a.transitionStart(i, m),
                a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                            a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                            a.onSlideToWrapperTransitionEnd = null,
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(i, m))
                    }
                ),
                    a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                    !0
            },
            slideToLoop: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed
                    , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                    , s = arguments.length > 3 ? arguments[3] : void 0
                    , a = e;
                return this.params.loop && (a += this.loopedSlides),
                    this.slideTo(a, t, i, s)
            },
            slideNext: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed
                    , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , i = arguments.length > 2 ? arguments[2] : void 0
                    , s = this.params
                    , a = this.animating
                    , n = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (a)
                        return !1;
                    this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + n, e, t, i)
            },
            slidePrev: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed
                    , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , i = arguments.length > 2 ? arguments[2] : void 0
                    , s = this.params
                    , a = this.animating
                    , n = this.snapGrid
                    , r = this.slidesGrid
                    , o = this.rtlTranslate;
                if (s.loop) {
                    if (a)
                        return !1;
                    this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                function l(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var d, h = l(o ? this.translate : -this.translate), c = n.map((function(e) {
                        return l(e)
                    }
                )), p = (r.map((function(e) {
                        return l(e)
                    }
                )),
                    n[c.indexOf(h)],
                    n[c.indexOf(h) - 1]);
                return "undefined" === typeof p && s.cssMode && n.forEach((function(e) {
                        !p && h >= e && (p = e)
                    }
                )),
                "undefined" !== typeof p && (d = r.indexOf(p)) < 0 && (d = this.activeIndex - 1),
                    this.slideTo(d, e, t, i)
            },
            slideReset: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed
                    , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , i = arguments.length > 2 ? arguments[2] : void 0;
                return this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed
                    , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , i = arguments.length > 2 ? arguments[2] : void 0
                    , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
                    , a = this.activeIndex
                    , n = Math.min(this.params.slidesPerGroupSkip, a)
                    , r = n + Math.floor((a - n) / this.params.slidesPerGroup)
                    , o = this.rtlTranslate ? this.translate : -this.translate;
                if (o >= this.snapGrid[r]) {
                    var l = this.snapGrid[r];
                    o - l > (this.snapGrid[r + 1] - l) * s && (a += this.params.slidesPerGroup)
                } else {
                    var d = this.snapGrid[r - 1];
                    o - d <= (this.snapGrid[r] - d) * s && (a -= this.params.slidesPerGroup)
                }
                return a = Math.max(a, 0),
                    a = Math.min(a, this.slidesGrid.length - 1),
                    this.slideTo(a, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
                if (i.loop) {
                    if (t.animating)
                        return;
                    e = parseInt(u(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                        i.centeredSlides ? n < t.loopedSlides - a / 2 || n > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                            n = s.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(),
                            m.nextTick((function() {
                                    t.slideTo(n)
                                }
                            ))) : t.slideTo(n) : n > t.slides.length - a ? (t.loopFix(),
                            n = s.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(),
                            m.nextTick((function() {
                                    t.slideTo(n)
                                }
                            ))) : t.slideTo(n)
                } else
                    t.slideTo(n)
            }
        };
        var T = {
            loopCreate: function() {
                var e = this
                    , t = e.params
                    , i = e.$wrapperEl;
                i.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
                var s = i.children(".".concat(t.slideClass));
                if (t.loopFillGroupWithBlank) {
                    var a = t.slidesPerGroup - s.length % t.slidesPerGroup;
                    if (a !== t.slidesPerGroup) {
                        for (var n = 0; n < a; n += 1) {
                            var r = u(h.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));
                            i.append(r)
                        }
                        s = i.children(".".concat(t.slideClass))
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
                    e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
                    e.loopedSlides += t.loopAdditionalSlides,
                e.loopedSlides > s.length && (e.loopedSlides = s.length);
                var o = []
                    , l = [];
                s.each((function(t, i) {
                        var a = u(i);
                        t < e.loopedSlides && l.push(i),
                        t < s.length && t >= s.length - e.loopedSlides && o.push(i),
                            a.attr("data-swiper-slide-index", t)
                    }
                ));
                for (var d = 0; d < l.length; d += 1)
                    i.append(u(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (var c = o.length - 1; c >= 0; c -= 1)
                    i.prepend(u(o[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, n = this.allowSlideNext, r = this.snapGrid, o = this.rtlTranslate;
                this.allowSlidePrev = !0,
                    this.allowSlideNext = !0;
                var l = -r[t] - this.getTranslate();
                if (t < s)
                    e = i.length - 3 * s + t,
                        e += s,
                    this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                else if (t >= i.length - s) {
                    e = -i.length + t + s,
                        e += s,
                    this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
                }
                this.allowSlidePrev = a,
                    this.allowSlideNext = n,
                    this.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl
                    , t = this.params
                    , i = this.slides;
                e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(),
                    i.removeAttr("data-swiper-slide-index")
            }
        };
        var S = {
            setGrabCursor: function(e) {
                if (!(g.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var t = this.el;
                    t.style.cursor = "move",
                        t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                        t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                        t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                g.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        };
        var C = {
            appendSlide: function(e) {
                var t = this.$wrapperEl
                    , i = this.params;
                if (i.loop && this.loopDestroy(),
                "object" === typeof e && "length"in e)
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && t.append(e[s]);
                else
                    t.append(e);
                i.loop && this.loopCreate(),
                i.observer && g.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params
                    , i = this.$wrapperEl
                    , s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" === typeof e && "length"in e) {
                    for (var n = 0; n < e.length; n += 1)
                        e[n] && i.prepend(e[n]);
                    a = s + e.length
                } else
                    i.prepend(e);
                t.loop && this.loopCreate(),
                t.observer && g.observer || this.update(),
                    this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl
                    , s = this.params
                    , a = this.activeIndex;
                s.loop && (a -= this.loopedSlides,
                    this.loopDestroy(),
                    this.slides = i.children(".".concat(s.slideClass)));
                var n = this.slides.length;
                if (e <= 0)
                    this.prependSlide(t);
                else if (e >= n)
                    this.appendSlide(t);
                else {
                    for (var r = a > e ? a + 1 : a, o = [], l = n - 1; l >= e; l -= 1) {
                        var d = this.slides.eq(l);
                        d.remove(),
                            o.unshift(d)
                    }
                    if ("object" === typeof t && "length"in t) {
                        for (var h = 0; h < t.length; h += 1)
                            t[h] && i.append(t[h]);
                        r = a > e ? a + t.length : a
                    } else
                        i.append(t);
                    for (var c = 0; c < o.length; c += 1)
                        i.append(o[c]);
                    s.loop && this.loopCreate(),
                    s.observer && g.observer || this.update(),
                        s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params
                    , i = this.$wrapperEl
                    , s = this.activeIndex;
                t.loop && (s -= this.loopedSlides,
                    this.loopDestroy(),
                    this.slides = i.children(".".concat(t.slideClass)));
                var a, n = s;
                if ("object" === typeof e && "length"in e) {
                    for (var r = 0; r < e.length; r += 1)
                        a = e[r],
                        this.slides[a] && this.slides.eq(a).remove(),
                        a < n && (n -= 1);
                    n = Math.max(n, 0)
                } else
                    a = e,
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < n && (n -= 1),
                        n = Math.max(n, 0);
                t.loop && this.loopCreate(),
                t.observer && g.observer || this.update(),
                    t.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e)
            }
        }
            , M = function() {
            var e = c.navigator.platform
                , t = c.navigator.userAgent
                , i = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!c.cordova && !c.phonegap),
                phonegap: !(!c.cordova && !c.phonegap),
                electron: !1
            }
                , s = c.screen.width
                , a = c.screen.height
                , n = t.match(/(Android);?[\s\/]+([\d.]+)?/)
                , r = t.match(/(iPad).*OS\s([\d_]+)/)
                , o = t.match(/(iPod)(.*OS\s([\d_]+))?/)
                , l = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                , d = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
                , h = t.indexOf("Edge/") >= 0
                , p = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0
                , u = "Win32" === e
                , f = t.toLowerCase().indexOf("electron") >= 0
                , v = "MacIntel" === e;
            return !r && v && g.touch && (1024 === s && 1366 === a || 834 === s && 1194 === a || 834 === s && 1112 === a || 768 === s && 1024 === a) && (r = t.match(/(Version)\/([\d.]+)/),
                v = !1),
                i.ie = d,
                i.edge = h,
                i.firefox = p,
            n && !u && (i.os = "android",
                i.osVersion = n[2],
                i.android = !0,
                i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
            (r || l || o) && (i.os = "ios",
                i.ios = !0),
            l && !o && (i.osVersion = l[2].replace(/_/g, "."),
                i.iphone = !0),
            r && (i.osVersion = r[2].replace(/_/g, "."),
                i.ipad = !0),
            o && (i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null,
                i.ipod = !0),
            i.ios && i.osVersion && t.indexOf("Version/") >= 0 && "10" === i.osVersion.split(".")[0] && (i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
                i.webView = !(!(l || r || o) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone) || c.matchMedia && c.matchMedia("(display-mode: standalone)").matches,
                i.webview = i.webView,
                i.standalone = i.webView,
                i.desktop = !(i.ios || i.android) || f,
            i.desktop && (i.electron = f,
                i.macos = v,
                i.windows = u,
            i.macos && (i.os = "macos"),
            i.windows && (i.os = "windows")),
                i.pixelRatio = c.devicePixelRatio || 1,
                i
        }();
        function P(e) {
            var t = this.touchEventsData
                , i = this.params
                , s = this.touches;
            if (!this.animating || !i.preventInteractionOnTransition) {
                var a = e;
                a.originalEvent && (a = a.originalEvent);
                var n = u(a.target);
                if (("wrapper" !== i.touchEventsTarget || n.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === a.type,
                (t.isTouchEvent || !("which"in a) || 3 !== a.which) && !(!t.isTouchEvent && "button"in a && a.button > 0) && (!t.isTouched || !t.isMoved)))
                    if (i.noSwiping && n.closest(i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass))[0])
                        this.allowClick = !0;
                    else if (!i.swipeHandler || n.closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            s.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        var r = s.currentX
                            , o = s.currentY
                            , l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                            , d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(r <= d || r >= c.screen.width - d)) {
                            if (m.extend(t, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }),
                                s.startX = r,
                                s.startY = o,
                                t.touchStartTime = m.now(),
                                this.allowClick = !0,
                                this.updateSize(),
                                this.swipeDirection = void 0,
                            i.threshold > 0 && (t.allowThresholdMove = !1),
                            "touchstart" !== a.type) {
                                var p = !0;
                                n.is(t.formElements) && (p = !1),
                                h.activeElement && u(h.activeElement).is(t.formElements) && h.activeElement !== n[0] && h.activeElement.blur();
                                var f = p && this.allowTouchMove && i.touchStartPreventDefault;
                                (i.touchStartForcePreventDefault || f) && a.preventDefault()
                            }
                            this.emit("touchStart", a)
                        }
                    }
            }
        }
        function k(e) {
            var t = this.touchEventsData
                , i = this.params
                , s = this.touches
                , a = this.rtlTranslate
                , n = e;
            if (n.originalEvent && (n = n.originalEvent),
                t.isTouched) {
                if (!t.isTouchEvent || "mousemove" !== n.type) {
                    var r = "touchmove" === n.type && n.targetTouches && (n.targetTouches[0] || n.changedTouches[0])
                        , o = "touchmove" === n.type ? r.pageX : n.pageX
                        , l = "touchmove" === n.type ? r.pageY : n.pageY;
                    if (n.preventedByNestedSwiper)
                        return s.startX = o,
                            void (s.startY = l);
                    if (!this.allowTouchMove)
                        return this.allowClick = !1,
                            void (t.isTouched && (m.extend(s, {
                                startX: o,
                                startY: l,
                                currentX: o,
                                currentY: l
                            }),
                                t.touchStartTime = m.now()));
                    if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                        if (this.isVertical()) {
                            if (l < s.startY && this.translate <= this.maxTranslate() || l > s.startY && this.translate >= this.minTranslate())
                                return t.isTouched = !1,
                                    void (t.isMoved = !1)
                        } else if (o < s.startX && this.translate <= this.maxTranslate() || o > s.startX && this.translate >= this.minTranslate())
                            return;
                    if (t.isTouchEvent && h.activeElement && n.target === h.activeElement && u(n.target).is(t.formElements))
                        return t.isMoved = !0,
                            void (this.allowClick = !1);
                    if (t.allowTouchCallbacks && this.emit("touchMove", n),
                        !(n.targetTouches && n.targetTouches.length > 1)) {
                        s.currentX = o,
                            s.currentY = l;
                        var d = s.currentX - s.startX
                            , c = s.currentY - s.startY;
                        if (!(this.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)) < this.params.threshold)) {
                            var p;
                            if ("undefined" === typeof t.isScrolling)
                                this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : d * d + c * c >= 25 && (p = 180 * Math.atan2(Math.abs(c), Math.abs(d)) / Math.PI,
                                    t.isScrolling = this.isHorizontal() ? p > i.touchAngle : 90 - p > i.touchAngle);
                            if (t.isScrolling && this.emit("touchMoveOpposite", n),
                            "undefined" === typeof t.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (t.startMoving = !0)),
                                t.isScrolling)
                                t.isTouched = !1;
                            else if (t.startMoving) {
                                this.allowClick = !1,
                                i.cssMode || n.preventDefault(),
                                i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                t.isMoved || (i.loop && this.loopFix(),
                                    t.startTranslate = this.getTranslate(),
                                    this.setTransition(0),
                                this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    t.allowMomentumBounce = !1,
                                !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                                    this.emit("sliderFirstMove", n)),
                                    this.emit("sliderMove", n),
                                    t.isMoved = !0;
                                var f = this.isHorizontal() ? d : c;
                                s.diff = f,
                                    f *= i.touchRatio,
                                a && (f = -f),
                                    this.swipeDirection = f > 0 ? "prev" : "next",
                                    t.currentTranslate = f + t.startTranslate;
                                var v = !0
                                    , g = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (g = 0),
                                    f > 0 && t.currentTranslate > this.minTranslate() ? (v = !1,
                                    i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (v = !1,
                                    i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))),
                                v && (n.preventedByNestedSwiper = !0),
                                !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
                                !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
                                i.threshold > 0) {
                                    if (!(Math.abs(f) > i.threshold || t.allowThresholdMove))
                                        return void (t.currentTranslate = t.startTranslate);
                                    if (!t.allowThresholdMove)
                                        return t.allowThresholdMove = !0,
                                            s.startX = s.currentX,
                                            s.startY = s.currentY,
                                            t.currentTranslate = t.startTranslate,
                                            void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(),
                                    this.updateSlidesClasses()),
                                i.freeMode && (0 === t.velocities.length && t.velocities.push({
                                    position: s[this.isHorizontal() ? "startX" : "startY"],
                                    time: t.touchStartTime
                                }),
                                    t.velocities.push({
                                        position: s[this.isHorizontal() ? "currentX" : "currentY"],
                                        time: m.now()
                                    })),
                                    this.updateProgress(t.currentTranslate),
                                    this.setTranslate(t.currentTranslate))
                            }
                        }
                    }
                }
            } else
                t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", n)
        }
        function z(e) {
            var t = this
                , i = t.touchEventsData
                , s = t.params
                , a = t.touches
                , n = t.rtlTranslate
                , r = t.$wrapperEl
                , o = t.slidesGrid
                , l = t.snapGrid
                , d = e;
            if (d.originalEvent && (d = d.originalEvent),
            i.allowTouchCallbacks && t.emit("touchEnd", d),
                i.allowTouchCallbacks = !1,
                !i.isTouched)
                return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                    i.isMoved = !1,
                    void (i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var h, c = m.now(), p = c - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d),
                t.emit("tap click", d),
            p < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                i.lastClickTime = m.now(),
                m.nextTick((function() {
                        t.destroyed || (t.allowClick = !0)
                    }
                )),
            !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
                return i.isTouched = !1,
                    i.isMoved = !1,
                    void (i.startMoving = !1);
            if (i.isTouched = !1,
                i.isMoved = !1,
                i.startMoving = !1,
                h = s.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate,
                !s.cssMode)
                if (s.freeMode) {
                    if (h < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (h > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var u = i.velocities.pop()
                                , f = i.velocities.pop()
                                , v = u.position - f.position
                                , g = u.time - f.time;
                            t.velocity = v / g,
                                t.velocity /= 2,
                            Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                            (g > 150 || m.now() - u.time > 300) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio,
                            i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio
                            , y = t.velocity * b
                            , w = t.translate + y;
                        n && (w = -w);
                        var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate())
                            s.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S),
                                x = t.maxTranslate(),
                                T = !0,
                                i.allowMomentumBounce = !0) : w = t.maxTranslate(),
                            s.loop && s.centeredSlides && (E = !0);
                        else if (w > t.minTranslate())
                            s.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S),
                                x = t.minTranslate(),
                                T = !0,
                                i.allowMomentumBounce = !0) : w = t.minTranslate(),
                            s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for (var C, M = 0; M < l.length; M += 1)
                                if (l[M] > -w) {
                                    C = M;
                                    break
                                }
                            w = -(w = Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (E && t.once("transitionEnd", (function() {
                                t.loopFix()
                            }
                        )),
                        0 !== t.velocity) {
                            if (b = n ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity),
                                s.freeModeSticky) {
                                var P = Math.abs((n ? -w : w) - t.translate)
                                    , k = t.slidesSizesGrid[t.activeIndex];
                                b = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed
                            }
                        } else if (s.freeModeSticky)
                            return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x),
                            t.setTransition(b),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            r.transitionEnd((function() {
                                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                                        t.setTransition(s.speed),
                                        t.setTranslate(x),
                                        r.transitionEnd((function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            }
                                        )))
                                }
                            ))) : t.velocity ? (t.updateProgress(w),
                            t.setTransition(b),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                            r.transitionEnd((function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }
                            )))) : t.updateProgress(w),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    (!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                } else {
                    for (var z = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                        var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                        "undefined" !== typeof o[L + I] ? h >= o[L] && h < o[L + I] && (z = L,
                            $ = o[L + I] - o[L]) : h >= o[L] && (z = L,
                            $ = o[o.length - 1] - o[o.length - 2])
                    }
                    var O = (h - o[z]) / $
                        , D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    if (p > s.longSwipesMs) {
                        if (!s.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (O >= s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z)),
                        "prev" === t.swipeDirection && (O > 1 - s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z))
                    } else {
                        if (!s.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(z + D) : t.slideTo(z) : ("next" === t.swipeDirection && t.slideTo(z + D),
                        "prev" === t.swipeDirection && t.slideTo(z))
                    }
                }
        }
        function $() {
            var e = this.params
                , t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext
                    , s = this.allowSlidePrev
                    , a = this.snapGrid;
                this.allowSlideNext = !0,
                    this.allowSlidePrev = !0,
                    this.updateSize(),
                    this.updateSlides(),
                    this.updateSlidesClasses(),
                    ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                    this.allowSlidePrev = s,
                    this.allowSlideNext = i,
                this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
            }
        }
        function L(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
        }
        function I() {
            var e = this.wrapperEl;
            this.previousTranslate = this.translate,
                this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop,
            -0 === this.translate && (this.translate = 0),
                this.updateActiveIndex(),
                this.updateSlidesClasses();
            var t = this.maxTranslate() - this.minTranslate();
            (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate),
                this.emit("setTranslate", this.translate, !1)
        }
        var O = !1;
        function D() {}
        var A = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }
            , N = {
            update: y,
            translate: w,
            transition: x,
            slide: E,
            loop: T,
            grabCursor: S,
            manipulation: C,
            events: {
                attachEvents: function() {
                    var e = this.params
                        , t = this.touchEvents
                        , i = this.el
                        , s = this.wrapperEl;
                    this.onTouchStart = P.bind(this),
                        this.onTouchMove = k.bind(this),
                        this.onTouchEnd = z.bind(this),
                    e.cssMode && (this.onScroll = I.bind(this)),
                        this.onClick = L.bind(this);
                    var a = !!e.nested;
                    if (!g.touch && g.pointerEvents)
                        i.addEventListener(t.start, this.onTouchStart, !1),
                            h.addEventListener(t.move, this.onTouchMove, a),
                            h.addEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (g.touch) {
                            var n = !("touchstart" !== t.start || !g.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.addEventListener(t.start, this.onTouchStart, n),
                                i.addEventListener(t.move, this.onTouchMove, g.passiveListener ? {
                                    passive: !1,
                                    capture: a
                                } : a),
                                i.addEventListener(t.end, this.onTouchEnd, n),
                            t.cancel && i.addEventListener(t.cancel, this.onTouchEnd, n),
                            O || (h.addEventListener("touchstart", D),
                                O = !0)
                        }
                        (e.simulateTouch && !M.ios && !M.android || e.simulateTouch && !g.touch && M.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1),
                            h.addEventListener("mousemove", this.onTouchMove, a),
                            h.addEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0),
                    e.cssMode && s.addEventListener("scroll", this.onScroll),
                        e.updateOnWindowResize ? this.on(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : this.on("observerUpdate", $, !0)
                },
                detachEvents: function() {
                    var e = this.params
                        , t = this.touchEvents
                        , i = this.el
                        , s = this.wrapperEl
                        , a = !!e.nested;
                    if (!g.touch && g.pointerEvents)
                        i.removeEventListener(t.start, this.onTouchStart, !1),
                            h.removeEventListener(t.move, this.onTouchMove, a),
                            h.removeEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (g.touch) {
                            var n = !("onTouchStart" !== t.start || !g.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.removeEventListener(t.start, this.onTouchStart, n),
                                i.removeEventListener(t.move, this.onTouchMove, a),
                                i.removeEventListener(t.end, this.onTouchEnd, n),
                            t.cancel && i.removeEventListener(t.cancel, this.onTouchEnd, n)
                        }
                        (e.simulateTouch && !M.ios && !M.android || e.simulateTouch && !g.touch && M.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1),
                            h.removeEventListener("mousemove", this.onTouchMove, a),
                            h.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0),
                    e.cssMode && s.removeEventListener("scroll", this.onScroll),
                        this.off(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex
                        , t = this.initialized
                        , i = this.loopedSlides
                        , s = void 0 === i ? 0 : i
                        , a = this.params
                        , n = this.$el
                        , r = a.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                    var t = l[e];
                                    "undefined" !== typeof t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                }
                            ));
                            var d = l || this.originalParams
                                , h = a.slidesPerColumn > 1
                                , c = d.slidesPerColumn > 1;
                            h && !c ? n.removeClass("".concat(a.containerModifierClass, "multirow ").concat(a.containerModifierClass, "multirow-column")) : !h && c && (n.addClass("".concat(a.containerModifierClass, "multirow")),
                            "column" === d.slidesPerColumnFill && n.addClass("".concat(a.containerModifierClass, "multirow-column")));
                            var p = d.direction && d.direction !== a.direction
                                , u = a.loop && (d.slidesPerView !== a.slidesPerView || p);
                            p && t && this.changeDirection(),
                                m.extend(this.params, d),
                                m.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }),
                                this.currentBreakpoint = o,
                            u && t && (this.loopDestroy(),
                                this.loopCreate(),
                                this.updateSlides(),
                                this.slideTo(e - s + this.loopedSlides, 0, !1)),
                                this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1
                            , i = Object.keys(e).map((function(e) {
                                if ("string" === typeof e && e.startsWith("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: c.innerHeight * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }
                        ));
                        i.sort((function(e, t) {
                                return parseInt(e.value, 10) - parseInt(t.value, 10)
                            }
                        ));
                        for (var s = 0; s < i.length; s += 1) {
                            var a = i[s]
                                , n = a.point;
                            a.value <= c.innerWidth && (t = n)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params
                        , t = this.isLocked
                        , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                        this.allowSlideNext = !this.isLocked,
                        this.allowSlidePrev = !this.isLocked,
                    t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                    t && t !== this.isLocked && (this.isEnd = !1,
                        this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames
                        , t = this.params
                        , i = this.rtl
                        , s = this.$el
                        , a = [];
                    a.push("initialized"),
                        a.push(t.direction),
                    t.freeMode && a.push("free-mode"),
                    t.autoHeight && a.push("autoheight"),
                    i && a.push("rtl"),
                    t.slidesPerColumn > 1 && (a.push("multirow"),
                    "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                    M.android && a.push("android"),
                    M.ios && a.push("ios"),
                    t.cssMode && a.push("css-mode"),
                        a.forEach((function(i) {
                                e.push(t.containerModifierClass + i)
                            }
                        )),
                        s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el
                        , t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, s, a, n) {
                    var r;
                    function o() {
                        n && n()
                    }
                    e.complete && a ? o() : t ? ((r = new c.Image).onload = o,
                        r.onerror = o,
                    s && (r.sizes = s),
                    i && (r.srcset = i),
                    t && (r.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;
                    function t() {
                        "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                            e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
            , G = {}
            , B = function(e) {
            function t() {
                var e, i, r;
                Object(l.a)(this, t);
                for (var o = arguments.length, d = new Array(o), h = 0; h < o; h++)
                    d[h] = arguments[h];
                1 === d.length && d[0].constructor && d[0].constructor === Object ? r = d[0] : (i = d[0],
                    r = d[1]),
                r || (r = {}),
                    r = m.extend({}, r),
                i && !r.el && (r.el = i),
                    e = Object(s.a)(this, Object(a.a)(t).call(this, r)),
                    Object.keys(N).forEach((function(e) {
                            Object.keys(N[e]).forEach((function(i) {
                                    t.prototype[i] || (t.prototype[i] = N[e][i])
                                }
                            ))
                        }
                    ));
                var c = Object(n.a)(e);
                "undefined" === typeof c.modules && (c.modules = {}),
                    Object.keys(c.modules).forEach((function(e) {
                            var t = c.modules[e];
                            if (t.params) {
                                var i = Object.keys(t.params)[0]
                                    , s = t.params[i];
                                if ("object" !== typeof s || null === s)
                                    return;
                                if (!(i in r && "enabled"in s))
                                    return;
                                !0 === r[i] && (r[i] = {
                                    enabled: !0
                                }),
                                "object" !== typeof r[i] || "enabled"in r[i] || (r[i].enabled = !0),
                                r[i] || (r[i] = {
                                    enabled: !1
                                })
                            }
                        }
                    ));
                var p = m.extend({}, A);
                c.useModulesParams(p),
                    c.params = m.extend({}, p, G, r),
                    c.originalParams = m.extend({}, c.params),
                    c.passedParams = m.extend({}, r),
                    c.$ = u;
                var f, v = u(c.params.el);
                if (!(i = v[0]))
                    return Object(s.a)(e, void 0);
                if (v.length > 1) {
                    var b = [];
                    return v.each((function(e, i) {
                            var s = m.extend({}, r, {
                                el: i
                            });
                            b.push(new t(s))
                        }
                    )),
                        Object(s.a)(e, b)
                }
                return i.swiper = c,
                    v.data("swiper", c),
                    i && i.shadowRoot && i.shadowRoot.querySelector ? (f = u(i.shadowRoot.querySelector(".".concat(c.params.wrapperClass)))).children = function(e) {
                            return v.children(e)
                        }
                        : f = v.children(".".concat(c.params.wrapperClass)),
                    m.extend(c, {
                        $el: v,
                        el: i,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        classNames: [],
                        slides: u(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === c.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === c.params.direction
                        },
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === v.css("direction"),
                        rtlTranslate: "horizontal" === c.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === v.css("direction")),
                        wrongRTL: "-webkit-box" === f.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: c.params.allowSlideNext,
                        allowSlidePrev: c.params.allowSlidePrev,
                        touchEvents: function() {
                            var e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                                , t = ["mousedown", "mousemove", "mouseup"];
                            return g.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]),
                                c.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3]
                                },
                                c.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                },
                                g.touch || !c.params.simulateTouch ? c.touchEventsTouch : c.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: m.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: c.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    c.useModules(),
                c.params.init && c.init(),
                    Object(s.a)(e, c)
            }
            return Object(r.a)(t, e),
                Object(d.a)(t, [{
                    key: "slidesPerViewDynamic",
                    value: function() {
                        var e = this.params
                            , t = this.slides
                            , i = this.slidesGrid
                            , s = this.size
                            , a = this.activeIndex
                            , n = 1;
                        if (e.centeredSlides) {
                            for (var r, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                                t[l] && !r && (n += 1,
                                (o += t[l].swiperSlideSize) > s && (r = !0));
                            for (var d = a - 1; d >= 0; d -= 1)
                                t[d] && !r && (n += 1,
                                (o += t[d].swiperSlideSize) > s && (r = !0))
                        } else
                            for (var h = a + 1; h < t.length; h += 1)
                                i[h] - i[a] < s && (n += 1);
                        return n
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this;
                        if (e && !e.destroyed) {
                            var t = e.snapGrid
                                , i = e.params;
                            i.breakpoints && e.setBreakpoint(),
                                e.updateSize(),
                                e.updateSlides(),
                                e.updateProgress(),
                                e.updateSlidesClasses(),
                                e.params.freeMode ? (s(),
                                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                                e.emit("update")
                        }
                        function s() {
                            var t = e.rtlTranslate ? -1 * e.translate : e.translate
                                , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                            e.setTranslate(i),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses()
                        }
                    }
                }, {
                    key: "changeDirection",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , i = this
                            , s = i.params.direction;
                        return e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                            e === s || "horizontal" !== e && "vertical" !== e ? i : (i.$el.removeClass("".concat(i.params.containerModifierClass).concat(s)).addClass("".concat(i.params.containerModifierClass).concat(e)),
                                i.params.direction = e,
                                i.slides.each((function(t, i) {
                                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                                    }
                                )),
                                i.emit("changeDirection"),
                            t && i.update(),
                                i)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initialized || (this.emit("beforeInit"),
                        this.params.breakpoints && this.setBreakpoint(),
                            this.addClasses(),
                        this.params.loop && this.loopCreate(),
                            this.updateSize(),
                            this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                            this.attachEvents(),
                            this.initialized = !0,
                            this.emit("init"))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                            , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , i = this
                            , s = i.params
                            , a = i.$el
                            , n = i.$wrapperEl
                            , r = i.slides;
                        return "undefined" === typeof i.params || i.destroyed ? null : (i.emit("beforeDestroy"),
                            i.initialized = !1,
                            i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t && (i.removeClasses(),
                            a.removeAttr("style"),
                            n.removeAttr("style"),
                        r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach((function(e) {
                                    i.off(e)
                                }
                            )),
                        !1 !== e && (i.$el[0].swiper = null,
                            i.$el.data("swiper", null),
                            m.deleteProps(i)),
                            i.destroyed = !0,
                            null)
                    }
                }], [{
                    key: "extendDefaults",
                    value: function(e) {
                        m.extend(G, e)
                    }
                }, {
                    key: "extendedDefaults",
                    get: function() {
                        return G
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return A
                    }
                }, {
                    key: "Class",
                    get: function() {
                        return b
                    }
                }, {
                    key: "$",
                    get: function() {
                        return u
                    }
                }]),
                t
        }(b)
            , H = {
            name: "device",
            proto: {
                device: M
            },
            static: {
                device: M
            }
        }
            , V = {
            name: "support",
            proto: {
                support: g
            },
            static: {
                support: g
            }
        }
            , X = {
            isEdge: !!c.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                var e = c.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)
        }
            , Y = {
            name: "browser",
            proto: {
                browser: X
            },
            static: {
                browser: X
            }
        }
            , F = {
            name: "resize",
            create: function() {
                var e = this;
                m.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                                e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    c.addEventListener("resize", this.resize.resizeHandler),
                        c.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    c.removeEventListener("resize", this.resize.resizeHandler),
                        c.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }
            , R = {
            func: c.MutationObserver || c.WebkitMutationObserver,
            attach: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , i = this
                    , s = R.func
                    , a = new s((function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                i.emit("observerUpdate", e[0])
                            };
                            c.requestAnimationFrame ? c.requestAnimationFrame(t) : c.setTimeout(t, 0)
                        } else
                            i.emit("observerUpdate", e[0])
                    }
                ));
                a.observe(e, {
                    attributes: "undefined" === typeof t.attributes || t.attributes,
                    childList: "undefined" === typeof t.childList || t.childList,
                    characterData: "undefined" === typeof t.characterData || t.characterData
                }),
                    i.observer.observers.push(a)
            },
            init: function() {
                if (g.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                            this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }),
                        this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                        e.disconnect()
                    }
                )),
                    this.observer.observers = []
            }
        }
            , j = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                m.extend(this, {
                    observer: {
                        init: R.init.bind(this),
                        attach: R.attach.bind(this),
                        destroy: R.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        }
            , W = {
            update: function(e) {
                var t = this
                    , i = t.params
                    , s = i.slidesPerView
                    , a = i.slidesPerGroup
                    , n = i.centeredSlides
                    , r = t.params.virtual
                    , o = r.addSlidesBefore
                    , l = r.addSlidesAfter
                    , d = t.virtual
                    , h = d.from
                    , c = d.to
                    , p = d.slides
                    , u = d.slidesGrid
                    , f = d.renderSlide
                    , v = d.offset;
                t.updateActiveIndex();
                var g, b, y, w = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    n ? (b = Math.floor(s / 2) + a + o,
                        y = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o,
                        y = a + l);
                var x = Math.max((w || 0) - y, 0)
                    , E = Math.min((w || 0) + b, p.length - 1)
                    , T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
                function S() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                    t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (m.extend(t.virtual, {
                    from: x,
                    to: E,
                    offset: T,
                    slidesGrid: t.slidesGrid
                }),
                h === x && c === E && !e)
                    return t.slidesGrid !== u && T !== v && t.slides.css(g, "".concat(T, "px")),
                        void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return t.params.virtual.renderExternal.call(t, {
                        offset: T,
                        from: x,
                        to: E,
                        slides: function() {
                            for (var e = [], t = x; t <= E; t += 1)
                                e.push(p[t]);
                            return e
                        }()
                    }),
                        void S();
                var C = []
                    , M = [];
                if (e)
                    t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();
                else
                    for (var P = h; P <= c; P += 1)
                        (P < x || P > E) && t.$wrapperEl.find(".".concat(t.params.slideClass, '[data-swiper-slide-index="').concat(P, '"]')).remove();
                for (var k = 0; k < p.length; k += 1)
                    k >= x && k <= E && ("undefined" === typeof c || e ? M.push(k) : (k > c && M.push(k),
                    k < h && C.push(k)));
                M.forEach((function(e) {
                        t.$wrapperEl.append(f(p[e], e))
                    }
                )),
                    C.sort((function(e, t) {
                            return t - e
                        }
                    )).forEach((function(e) {
                            t.$wrapperEl.prepend(f(p[e], e))
                        }
                    )),
                    t.$wrapperEl.children(".swiper-slide").css(g, "".concat(T, "px")),
                    S()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t])
                    return this.virtual.cache[t];
                var s = i.renderSlide ? u(i.renderSlide.call(this, e, t)) : u('<div class="'.concat(this.params.slideClass, '" data-swiper-slide-index="').concat(t, '">').concat(e, "</div>"));
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
                i.cache && (this.virtual.cache[t] = s),
                    s
            },
            appendSlide: function(e) {
                if ("object" === typeof e && "length"in e)
                    for (var t = 0; t < e.length; t += 1)
                        e[t] && this.virtual.slides.push(e[t]);
                else
                    this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex
                    , i = t + 1
                    , s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1)
                        e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length,
                        s = e.length
                } else
                    this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var n = this.virtual.cache
                        , r = {};
                    Object.keys(n).forEach((function(e) {
                            var t = n[e]
                                , i = t.attr("data-swiper-slide-index");
                            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                                r[parseInt(e, 10) + s] = t
                        }
                    )),
                        this.virtual.cache = r
                }
                this.virtual.update(!0),
                    this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if ("undefined" !== typeof e && null !== e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1)
                            this.virtual.slides.splice(e[i], 1),
                            this.params.virtual.cache && delete this.virtual.cache[e[i]],
                            e[i] < t && (t -= 1),
                                t = Math.max(t, 0);
                    else
                        this.virtual.slides.splice(e, 1),
                        this.params.virtual.cache && delete this.virtual.cache[e],
                        e < t && (t -= 1),
                            t = Math.max(t, 0);
                    this.virtual.update(!0),
                        this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [],
                this.params.virtual.cache && (this.virtual.cache = {}),
                    this.virtual.update(!0),
                    this.slideTo(0, 0)
            }
        }
            , q = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                m.extend(this, {
                    virtual: {
                        update: W.update.bind(this),
                        appendSlide: W.appendSlide.bind(this),
                        prependSlide: W.prependSlide.bind(this),
                        removeSlide: W.removeSlide.bind(this),
                        removeAllSlides: W.removeAllSlides.bind(this),
                        renderSlide: W.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "virtual"));
                        var e = {
                            watchSlidesProgress: !0
                        };
                        m.extend(this.params, e),
                            m.extend(this.originalParams, e),
                        this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }
            , _ = {
            handle: function(e) {
                var t = this.rtlTranslate
                    , i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === s || this.isVertical() && 40 === s || 34 === s))
                    return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === s || this.isVertical() && 38 === s || 33 === s))
                    return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && (!h.activeElement || !h.activeElement.nodeName || "input" !== h.activeElement.nodeName.toLowerCase() && "textarea" !== h.activeElement.nodeName.toLowerCase())) {
                    if (this.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                        var a = !1;
                        if (this.$el.parents(".".concat(this.params.slideClass)).length > 0 && 0 === this.$el.parents(".".concat(this.params.slideActiveClass)).length)
                            return;
                        var n = c.innerWidth
                            , r = c.innerHeight
                            , o = this.$el.offset();
                        t && (o.left -= this.$el[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + this.width, o.top], [o.left, o.top + this.height], [o.left + this.width, o.top + this.height]], d = 0; d < l.length; d += 1) {
                            var p = l[d];
                            p[0] >= 0 && p[0] <= n && p[1] >= 0 && p[1] <= r && (a = !0)
                        }
                        if (!a)
                            return
                    }
                    this.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                    (34 !== s && 39 !== s || t) && (33 !== s && 37 !== s || !t) || this.slideNext(),
                    (33 !== s && 37 !== s || t) && (34 !== s && 39 !== s || !t) || this.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                    34 !== s && 40 !== s || this.slideNext(),
                    33 !== s && 38 !== s || this.slidePrev()),
                        this.emit("keyPress", s)
                }
            },
            enable: function() {
                this.keyboard.enabled || (u(h).on("keydown", this.keyboard.handle),
                    this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (u(h).off("keydown", this.keyboard.handle),
                    this.keyboard.enabled = !1)
            }
        }
            , U = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                m.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: _.enable.bind(this),
                        disable: _.disable.bind(this),
                        handle: _.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
        var K = {
            lastScrollTime: m.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return c.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var e = "onwheel"in h;
                    if (!e) {
                        var t = h.createElement("div");
                        t.setAttribute("onwheel", "return;"),
                            e = "function" === typeof t.onwheel
                    }
                    return !e && h.implementation && h.implementation.hasFeature && !0 !== h.implementation.hasFeature("", "") && (e = h.implementation.hasFeature("Events.wheel", "3.0")),
                        e
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0
                    , i = 0
                    , s = 0
                    , a = 0;
                return "detail"in e && (i = e.detail),
                "wheelDelta"in e && (i = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
                    i = 0),
                    s = 10 * t,
                    a = 10 * i,
                "deltaY"in e && (a = e.deltaY),
                "deltaX"in e && (s = e.deltaX),
                e.shiftKey && !s && (s = a,
                    a = 0),
                (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
                    a *= 40) : (s *= 800,
                    a *= 800)),
                s && !t && (t = s < 1 ? -1 : 1),
                a && !i && (i = a < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: a
                    }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e
                    , i = this
                    , s = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var a = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (a = u(i.params.mousewheel.eventsTarged)),
                !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                var n = 0
                    , r = i.rtlTranslate ? -1 : 1
                    , o = K.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                            return !0;
                        n = o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                            return !0;
                        n = o.pixelY
                    }
                else
                    n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === n)
                    return !0;
                if (s.invert && (n = -n),
                    i.params.freeMode) {
                    var l = {
                        time: m.now(),
                        delta: Math.abs(n),
                        direction: Math.sign(n)
                    }
                        , d = i.mousewheel.lastEventBeforeSnap
                        , h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                    if (!h) {
                        i.mousewheel.lastEventBeforeSnap = void 0,
                        i.params.loop && i.loopFix();
                        var c = i.getTranslate() + n * s.sensitivity
                            , p = i.isBeginning
                            , f = i.isEnd;
                        if (c >= i.minTranslate() && (c = i.minTranslate()),
                        c <= i.maxTranslate() && (c = i.maxTranslate()),
                            i.setTransition(0),
                            i.setTranslate(c),
                            i.updateProgress(),
                            i.updateActiveIndex(),
                            i.updateSlidesClasses(),
                        (!p && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(),
                            i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout),
                                i.mousewheel.timeout = void 0;
                            var v = i.mousewheel.recentWheelEvents;
                            v.length >= 15 && v.shift();
                            var g = v.length ? v[v.length - 1] : void 0
                                , b = v[0];
                            if (v.push(l),
                            g && (l.delta > g.delta || l.direction !== g.direction))
                                v.splice(0);
                            else if (v.length >= 15 && l.time - b.time < 500 && b.delta - l.delta >= 1 && l.delta <= 6) {
                                var y = n > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = l,
                                    v.splice(0),
                                    i.mousewheel.timeout = m.nextTick((function() {
                                            i.slideToClosest(i.params.speed, !0, void 0, y)
                                        }
                                    ), 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = m.nextTick((function() {
                                    i.mousewheel.lastEventBeforeSnap = l,
                                        v.splice(0),
                                        i.slideToClosest(i.params.speed, !0, void 0, .5)
                                }
                            ), 500))
                        }
                        if (h || i.emit("scroll", t),
                        i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                        c === i.minTranslate() || c === i.maxTranslate())
                            return !0
                    }
                } else {
                    var w = {
                        time: m.now(),
                        delta: Math.abs(n),
                        direction: Math.sign(n),
                        raw: e
                    }
                        , x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var E = x.length ? x[x.length - 1] : void 0;
                    if (x.push(w),
                        E ? (w.direction !== E.direction || w.delta > E.delta) && i.mousewheel.animateSlider(w) : i.mousewheel.animateSlider(w),
                        i.mousewheel.releaseScroll(w))
                        return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1
            },
            animateSlider: function(e) {
                return e.delta >= 6 && m.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
                    this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
                    this.emit("scroll", e.raw)),
                    this.mousewheel.lastScrollTime = (new c.Date).getTime(),
                    !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                        return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                    return !0;
                return !1
            },
            enable: function() {
                var e = K.event();
                if (this.params.cssMode)
                    return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                        !0;
                if (!e)
                    return !1;
                if (this.mousewheel.enabled)
                    return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = u(this.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", this.mousewheel.handleMouseEnter),
                    t.on("mouseleave", this.mousewheel.handleMouseLeave),
                    t.on(e, this.mousewheel.handle),
                    this.mousewheel.enabled = !0,
                    !0
            },
            disable: function() {
                var e = K.event();
                if (this.params.cssMode)
                    return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                        !0;
                if (!e)
                    return !1;
                if (!this.mousewheel.enabled)
                    return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = u(this.params.mousewheel.eventsTarged)),
                    t.off(e, this.mousewheel.handle),
                    this.mousewheel.enabled = !1,
                    !0
            }
        }
            , J = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation
                        , i = t.$nextEl
                        , s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                        s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                    i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                        i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(),
                this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(),
                this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = u(i.nextEl),
                this.params.uniqueNavElements && "string" === typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
                i.prevEl && (t = u(i.prevEl),
                this.params.uniqueNavElements && "string" === typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
                e && e.length > 0 && e.on("click", this.navigation.onNextClick),
                t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
                    m.extend(this.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
            },
            destroy: function() {
                var e = this.navigation
                    , t = e.$nextEl
                    , i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick),
                    t.removeClass(this.params.navigation.disabledClass)),
                i && i.length && (i.off("click", this.navigation.onPrevClick),
                    i.removeClass(this.params.navigation.disabledClass))
            }
        }
            , Z = {
            update: function() {
                var e = this.rtl
                    , t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, n = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                    i > n - 1 && (i -= n),
                    i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = "undefined" !== typeof this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                    "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var r, o, l, d = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                            a.css(this.isHorizontal() ? "width" : "height", "".concat(this.pagination.bulletSize * (t.dynamicMainBullets + 4), "px")),
                        t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                            this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                            r = i - this.pagination.dynamicBulletIndex,
                            l = ((o = r + (Math.min(d.length, t.dynamicMainBullets) - 1)) + r) / 2),
                            d.removeClass("".concat(t.bulletActiveClass, " ").concat(t.bulletActiveClass, "-next ").concat(t.bulletActiveClass, "-next-next ").concat(t.bulletActiveClass, "-prev ").concat(t.bulletActiveClass, "-prev-prev ").concat(t.bulletActiveClass, "-main")),
                        a.length > 1)
                            d.each((function(e, s) {
                                    var a = u(s)
                                        , n = a.index();
                                    n === i && a.addClass(t.bulletActiveClass),
                                    t.dynamicBullets && (n >= r && n <= o && a.addClass("".concat(t.bulletActiveClass, "-main")),
                                    n === r && a.prev().addClass("".concat(t.bulletActiveClass, "-prev")).prev().addClass("".concat(t.bulletActiveClass, "-prev-prev")),
                                    n === o && a.next().addClass("".concat(t.bulletActiveClass, "-next")).next().addClass("".concat(t.bulletActiveClass, "-next-next")))
                                }
                            ));
                        else {
                            var h = d.eq(i)
                                , c = h.index();
                            if (h.addClass(t.bulletActiveClass),
                                t.dynamicBullets) {
                                for (var p = d.eq(r), f = d.eq(o), v = r; v <= o; v += 1)
                                    d.eq(v).addClass("".concat(t.bulletActiveClass, "-main"));
                                if (this.params.loop)
                                    if (c >= d.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                            d.eq(d.length - m).addClass("".concat(t.bulletActiveClass, "-main"));
                                        d.eq(d.length - t.dynamicMainBullets - 1).addClass("".concat(t.bulletActiveClass, "-prev"))
                                    } else
                                        p.prev().addClass("".concat(t.bulletActiveClass, "-prev")).prev().addClass("".concat(t.bulletActiveClass, "-prev-prev")),
                                            f.next().addClass("".concat(t.bulletActiveClass, "-next")).next().addClass("".concat(t.bulletActiveClass, "-next-next"));
                                else
                                    p.prev().addClass("".concat(t.bulletActiveClass, "-prev")).prev().addClass("".concat(t.bulletActiveClass, "-prev-prev")),
                                        f.next().addClass("".concat(t.bulletActiveClass, "-next")).next().addClass("".concat(t.bulletActiveClass, "-next-next"))
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(d.length, t.dynamicMainBullets + 4)
                                , b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize
                                , y = e ? "right" : "left";
                            d.css(this.isHorizontal() ? y : "top", "".concat(b, "px"))
                        }
                    }
                    if ("fraction" === t.type && (a.find(".".concat(t.currentClass)).text(t.formatFractionCurrent(i + 1)),
                        a.find(".".concat(t.totalClass)).text(t.formatFractionTotal(n))),
                    "progressbar" === t.type) {
                        var w;
                        w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var x = (i + 1) / n
                            , E = 1
                            , T = 1;
                        "horizontal" === w ? E = x : T = x,
                            a.find(".".concat(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(E, ") scaleY(").concat(T, ")")).transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, n)),
                        this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]),
                        a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                        , i = this.pagination.$el
                        , s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, n = 0; n < a; n += 1)
                            e.renderBullet ? s += e.renderBullet.call(this, n, e.bulletClass) : s += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
                        i.html(s),
                            this.pagination.bullets = i.find(".".concat(e.bulletClass))
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>'),
                        i.html(s)),
                    "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>'),
                        i.html(s)),
                    "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this
                    , t = e.params.pagination;
                if (t.el) {
                    var i = u(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" === typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                    "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                    "bullets" === t.type && t.dynamicBullets && (i.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")),
                        e.pagination.dynamicBulletIndex = 0,
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                    "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                    t.clickable && i.on("click", ".".concat(t.bulletClass), (function(t) {
                            t.preventDefault();
                            var i = u(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides),
                                e.slideTo(i)
                        }
                    )),
                        m.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass),
                        t.removeClass(e.modifierClass + e.type),
                    this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                    e.clickable && t.off("click", ".".concat(e.bulletClass))
                }
            }
        }
            , Q = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar
                        , t = this.rtlTranslate
                        , i = this.progress
                        , s = e.dragSize
                        , a = e.trackSize
                        , n = e.$dragEl
                        , r = e.$el
                        , o = this.params.scrollbar
                        , l = s
                        , d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d,
                        d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                        d = 0) : d + s > a && (l = a - d),
                        this.isHorizontal() ? (n.transform("translate3d(".concat(d, "px, 0, 0)")),
                            n[0].style.width = "".concat(l, "px")) : (n.transform("translate3d(0px, ".concat(d, "px, 0)")),
                            n[0].style.height = "".concat(l, "px")),
                    o.hide && (clearTimeout(this.scrollbar.timeout),
                        r[0].style.opacity = 1,
                        this.scrollbar.timeout = setTimeout((function() {
                                r[0].style.opacity = 0,
                                    r.transition(400)
                            }
                        ), 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar
                        , t = e.$dragEl
                        , i = e.$el;
                    t[0].style.width = "",
                        t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = this.size / this.virtualSize, r = n * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * n : parseInt(this.params.scrollbar.dragSize, 10),
                        this.isHorizontal() ? t[0].style.width = "".concat(s, "px") : t[0].style.height = "".concat(s, "px"),
                        i[0].style.display = n >= 1 ? "none" : "",
                    this.params.scrollbar.hide && (i[0].style.opacity = 0),
                        m.extend(e, {
                            trackSize: a,
                            divider: n,
                            moveDivider: r,
                            dragSize: s
                        }),
                        e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, n = i.dragSize, r = i.trackSize, o = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (r - n),
                    t = Math.max(Math.min(t, 1), 0),
                s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l),
                    this.setTranslate(l),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar
                    , i = this.scrollbar
                    , s = this.$wrapperEl
                    , a = i.$el
                    , n = i.$dragEl;
                this.scrollbar.isTouched = !0,
                    this.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    a.transition(0),
                t.hide && a.css("opacity", 1),
                this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
                    this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar
                    , i = this.$wrapperEl
                    , s = t.$el
                    , a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    t.setDragPosition(e),
                    i.transition(0),
                    s.transition(0),
                    a.transition(0),
                    this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar
                    , i = this.scrollbar
                    , s = this.$wrapperEl
                    , a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
                this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
                    s.transition("")),
                t.hide && (clearTimeout(this.scrollbar.dragTimeout),
                    this.scrollbar.dragTimeout = m.nextTick((function() {
                            a.css("opacity", 0),
                                a.transition(400)
                        }
                    ), 1e3)),
                    this.emit("scrollbarDragEnd", e),
                t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar
                        , t = this.touchEventsTouch
                        , i = this.touchEventsDesktop
                        , s = this.params
                        , a = e.$el[0]
                        , n = !(!g.passiveListener || !s.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }
                        , r = !(!g.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    g.touch ? (a.addEventListener(t.start, this.scrollbar.onDragStart, n),
                        a.addEventListener(t.move, this.scrollbar.onDragMove, n),
                        a.addEventListener(t.end, this.scrollbar.onDragEnd, r)) : (a.addEventListener(i.start, this.scrollbar.onDragStart, n),
                        h.addEventListener(i.move, this.scrollbar.onDragMove, n),
                        h.addEventListener(i.end, this.scrollbar.onDragEnd, r))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar
                        , t = this.touchEventsTouch
                        , i = this.touchEventsDesktop
                        , s = this.params
                        , a = e.$el[0]
                        , n = !(!g.passiveListener || !s.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }
                        , r = !(!g.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    g.touch ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                        a.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                        a.removeEventListener(t.end, this.scrollbar.onDragEnd, r)) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                        h.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                        h.removeEventListener(i.end, this.scrollbar.onDragEnd, r))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar
                        , t = this.$el
                        , i = this.params.scrollbar
                        , s = u(i.el);
                    this.params.uniqueNavElements && "string" === typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                    var a = s.find(".".concat(this.params.scrollbar.dragClass));
                    0 === a.length && (a = u('<div class="'.concat(this.params.scrollbar.dragClass, '"></div>')),
                        s.append(a)),
                        m.extend(e, {
                            $el: s,
                            el: s[0],
                            $dragEl: a,
                            dragEl: a[0]
                        }),
                    i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        }
            , ee = {
            setTransform: function(e, t) {
                var i = this.rtl
                    , s = u(e)
                    , a = i ? -1 : 1
                    , n = s.attr("data-swiper-parallax") || "0"
                    , r = s.attr("data-swiper-parallax-x")
                    , o = s.attr("data-swiper-parallax-y")
                    , l = s.attr("data-swiper-parallax-scale")
                    , d = s.attr("data-swiper-parallax-opacity");
                if (r || o ? (r = r || "0",
                    o = o || "0") : this.isHorizontal() ? (r = n,
                    o = "0") : (o = n,
                    r = "0"),
                    r = r.indexOf("%") >= 0 ? "".concat(parseInt(r, 10) * t * a, "%") : "".concat(r * t * a, "px"),
                    o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t, "%") : "".concat(o * t, "px"),
                "undefined" !== typeof d && null !== d) {
                    var h = d - (d - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = h
                }
                if ("undefined" === typeof l || null === l)
                    s.transform("translate3d(".concat(r, ", ").concat(o, ", 0px)"));
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(".concat(r, ", ").concat(o, ", 0px) scale(").concat(c, ")"))
                }
            },
            setTranslate: function() {
                var e = this
                    , t = e.$el
                    , i = e.slides
                    , s = e.progress
                    , a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        e.parallax.setTransform(i, s)
                    }
                )),
                    i.each((function(t, i) {
                            var n = i.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - s * (a.length - 1)),
                                n = Math.min(Math.max(n, -1), 1),
                                u(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                                        e.parallax.setTransform(i, n)
                                    }
                                ))
                        }
                    ))
            },
            setTransition: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed
                    , t = this
                    , i = t.$el;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        var s = u(i)
                            , a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (a = 0),
                            s.transition(a)
                    }
                ))
            }
        }
            , te = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2)
                    return 1;
                var t = e.targetTouches[0].pageX
                    , i = e.targetTouches[0].pageY
                    , s = e.targetTouches[1].pageX
                    , a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom
                    , i = this.zoom
                    , s = i.gesture;
                if (i.fakeGestureTouched = !1,
                    i.fakeGestureMoved = !1,
                    !g.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                        return;
                    i.fakeGestureTouched = !0,
                        s.scaleStart = te.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = u(e.target).closest(".swiper-slide"),
                0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
                    s.$imageEl = s.$slideEl.find("img, svg, canvas"),
                    s.$imageWrapEl = s.$imageEl.parent(".".concat(t.containerClass)),
                    s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
                0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
                    this.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom
                    , i = this.zoom
                    , s = i.gesture;
                if (!g.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                        return;
                    i.fakeGestureMoved = !0,
                        s.scaleMove = te.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (g.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
                i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
                i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
                    s.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")")))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom
                    , i = this.zoom
                    , s = i.gesture;
                if (!g.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                        return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !M.android)
                        return;
                    i.fakeGestureTouched = !1,
                        i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
                    s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(i.scale, ")")),
                    i.currentScale = i.scale,
                    i.isScaling = !1,
                1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom
                    , i = t.gesture
                    , s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (M.android && e.preventDefault(),
                    s.isTouched = !0,
                    s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom
                    , i = t.gesture
                    , s = t.image
                    , a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
                s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                        s.height = i.$imageEl[0].offsetHeight,
                        s.startX = m.getTranslate(i.$imageWrapEl[0], "x") || 0,
                        s.startY = m.getTranslate(i.$imageWrapEl[0], "y") || 0,
                        i.slideWidth = i.$slideEl[0].offsetWidth,
                        i.slideHeight = i.$slideEl[0].offsetHeight,
                        i.$imageWrapEl.transition(0),
                    this.rtl && (s.startX = -s.startX,
                        s.startY = -s.startY));
                    var n = s.width * t.scale
                        , r = s.height * t.scale;
                    if (!(n < i.slideWidth && r < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                            s.maxX = -s.minX,
                            s.minY = Math.min(i.slideHeight / 2 - r / 2, 0),
                            s.maxY = -s.minY,
                            s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                        !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                                return void (s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                                return void (s.isTouched = !1)
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            s.isMoved = !0,
                            s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                            s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                        s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                        s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                        s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                        s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                        a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                        a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                        a.prevTime || (a.prevTime = Date.now()),
                            a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                            a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                        Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                        Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                            a.prevPositionX = s.touchesCurrent.x,
                            a.prevPositionY = s.touchesCurrent.y,
                            a.prevTime = Date.now(),
                            i.$imageWrapEl.transform("translate3d(".concat(s.currentX, "px, ").concat(s.currentY, "px,0)"))
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom
                    , t = e.gesture
                    , i = e.image
                    , s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved)
                        return i.isTouched = !1,
                            void (i.isMoved = !1);
                    i.isTouched = !1,
                        i.isMoved = !1;
                    var a = 300
                        , n = 300
                        , r = s.x * a
                        , o = i.currentX + r
                        , l = s.y * n
                        , d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                    0 !== s.y && (n = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, n);
                    i.currentX = o,
                        i.currentY = d;
                    var c = i.width * e.scale
                        , p = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                        i.maxX = -i.minX,
                        i.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
                        i.maxY = -i.minY,
                        i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                        i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                        t.$imageWrapEl.transition(h).transform("translate3d(".concat(i.currentX, "px, ").concat(i.currentY, "px,0)"))
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom
                    , t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    t.$imageWrapEl.transform("translate3d(0,0,0)"),
                    e.scale = 1,
                    e.currentScale = 1,
                    t.$slideEl = void 0,
                    t.$imageEl = void 0,
                    t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, s, a, n, r, o, l, d, h, c, p, f, v, m, g, b = this.zoom, y = this.params.zoom, w = b.gesture, x = b.image;
                (w.$slideEl || (w.$slideEl = this.clickedSlide ? u(this.clickedSlide) : this.slides.eq(this.activeIndex),
                    w.$imageEl = w.$slideEl.find("img, svg, canvas"),
                    w.$imageWrapEl = w.$imageEl.parent(".".concat(y.containerClass))),
                w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("".concat(y.zoomedSlideClass)),
                    "undefined" === typeof x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                        i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
                        i = x.touchesStart.y),
                    b.scale = w.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
                    b.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
                    e ? (m = w.$slideEl[0].offsetWidth,
                        g = w.$slideEl[0].offsetHeight,
                        s = w.$slideEl.offset().left + m / 2 - t,
                        a = w.$slideEl.offset().top + g / 2 - i,
                        o = w.$imageEl[0].offsetWidth,
                        l = w.$imageEl[0].offsetHeight,
                        d = o * b.scale,
                        h = l * b.scale,
                        f = -(c = Math.min(m / 2 - d / 2, 0)),
                        v = -(p = Math.min(g / 2 - h / 2, 0)),
                    (n = s * b.scale) < c && (n = c),
                    n > f && (n = f),
                    (r = a * b.scale) < p && (r = p),
                    r > v && (r = v)) : (n = 0,
                        r = 0),
                    w.$imageWrapEl.transition(300).transform("translate3d(".concat(n, "px, ").concat(r, "px,0)")),
                    w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(b.scale, ")")))
            },
            out: function() {
                var e = this.zoom
                    , t = this.params.zoom
                    , i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? u(this.clickedSlide) : this.slides.eq(this.activeIndex),
                    i.$imageEl = i.$slideEl.find("img, svg, canvas"),
                    i.$imageWrapEl = i.$imageEl.parent(".".concat(t.containerClass))),
                i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
                    e.currentScale = 1,
                    i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                    i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    i.$slideEl.removeClass("".concat(t.zoomedSlideClass)),
                    i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !g.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }
                        , i = !g.passiveListener || {
                        passive: !1,
                        capture: !0
                    };
                    g.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t),
                        this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t),
                        this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                        this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i),
                        this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t),
                    this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.on(this.touchEvents.move, ".".concat(this.params.zoom.containerClass), e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !g.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }
                        , i = !g.passiveListener || {
                        passive: !1,
                        capture: !0
                    };
                    g.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t),
                        this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t),
                        this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                        this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i),
                        this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t),
                    this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.off(this.touchEvents.move, ".".concat(this.params.zoom.containerClass), e.onTouchMove, i)
                }
            }
        }
            , ie = {
            loadInSlide: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , i = this
                    , s = i.params.lazy;
                if ("undefined" !== typeof e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled
                        , n = a ? i.$wrapperEl.children(".".concat(i.params.slideClass, '[data-swiper-slide-index="').concat(e, '"]')) : i.slides.eq(e)
                        , r = n.find(".".concat(s.elementClass, ":not(.").concat(s.loadedClass, "):not(.").concat(s.loadingClass, ")"));
                    !n.hasClass(s.elementClass) || n.hasClass(s.loadedClass) || n.hasClass(s.loadingClass) || (r = r.add(n[0])),
                    0 !== r.length && r.each((function(e, a) {
                            var r = u(a);
                            r.addClass(s.loadingClass);
                            var o = r.attr("data-background")
                                , l = r.attr("data-src")
                                , d = r.attr("data-srcset")
                                , h = r.attr("data-sizes");
                            i.loadImage(r[0], l || o, d, h, !1, (function() {
                                    if ("undefined" !== typeof i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                        if (o ? (r.css("background-image", 'url("'.concat(o, '")')),
                                            r.removeAttr("data-background")) : (d && (r.attr("srcset", d),
                                            r.removeAttr("data-srcset")),
                                        h && (r.attr("sizes", h),
                                            r.removeAttr("data-sizes")),
                                        l && (r.attr("src", l),
                                            r.removeAttr("data-src"))),
                                            r.addClass(s.loadedClass).removeClass(s.loadingClass),
                                            n.find(".".concat(s.preloaderClass)).remove(),
                                        i.params.loop && t) {
                                            var e = n.attr("data-swiper-slide-index");
                                            if (n.hasClass(i.params.slideDuplicateClass)) {
                                                var a = i.$wrapperEl.children('[data-swiper-slide-index="'.concat(e, '"]:not(.').concat(i.params.slideDuplicateClass, ")"));
                                                i.lazy.loadInSlide(a.index(), !1)
                                            } else {
                                                var c = i.$wrapperEl.children(".".concat(i.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(e, '"]'));
                                                i.lazy.loadInSlide(c.index(), !1)
                                            }
                                        }
                                        i.emit("lazyImageReady", n[0], r[0])
                                    }
                                }
                            )),
                                i.emit("lazyImageLoad", n[0], r[0])
                        }
                    ))
                }
            },
            load: function() {
                var e = this
                    , t = e.$wrapperEl
                    , i = e.params
                    , s = e.slides
                    , a = e.activeIndex
                    , n = e.virtual && i.virtual.enabled
                    , r = i.lazy
                    , o = i.slidesPerView;
                function l(e) {
                    if (n) {
                        if (t.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]')).length)
                            return !0
                    } else if (s[e])
                        return !0;
                    return !1
                }
                function d(e) {
                    return n ? u(e).attr("data-swiper-slide-index") : u(e).index()
                }
                if ("auto" === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                    t.children(".".concat(i.slideVisibleClass)).each((function(t, i) {
                            var s = n ? u(i).attr("data-swiper-slide-index") : u(i).index();
                            e.lazy.loadInSlide(s)
                        }
                    ));
                else if (o > 1)
                    for (var h = a; h < a + o; h += 1)
                        l(h) && e.lazy.loadInSlide(h);
                else
                    e.lazy.loadInSlide(a);
                if (r.loadPrevNext)
                    if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                        for (var c = r.loadPrevNextAmount, p = o, f = Math.min(a + p + Math.max(c, p), s.length), v = Math.max(a - Math.max(p, c), 0), m = a + o; m < f; m += 1)
                            l(m) && e.lazy.loadInSlide(m);
                        for (var g = v; g < a; g += 1)
                            l(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children(".".concat(i.slideNextClass));
                        b.length > 0 && e.lazy.loadInSlide(d(b));
                        var y = t.children(".".concat(i.slidePrevClass));
                        y.length > 0 && e.lazy.loadInSlide(d(y))
                    }
            }
        }
            , se = {
            LinearSpline: function(e, t) {
                var i, s, a = function() {
                    var e, t, i;
                    return function(s, a) {
                        for (t = -1,
                                 e = s.length; e - t > 1; )
                            s[i = e + t >> 1] <= a ? t = i : e = i;
                        return e
                    }
                }();
                return this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1,
                    this.interpolate = function(e) {
                        return e ? (s = a(this.x, e),
                            i = s - 1,
                        (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
                    }
                    ,
                    this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new se.LinearSpline(this.slidesGrid,e.slidesGrid) : new se.LinearSpline(this.snapGrid,e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, a = this, n = a.controller.control;
                function r(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                        s = -a.controller.spline.interpolate(-t)),
                    s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                        s = (t - a.minTranslate()) * i + e.minTranslate()),
                    a.params.controller.inverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, a),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (var o = 0; o < n.length; o += 1)
                        n[o] !== t && n[o]instanceof B && r(n[o]);
                else
                    n instanceof B && t !== n && r(n)
            },
            setTransition: function(e, t) {
                var i, s = this, a = s.controller.control;
                function n(t) {
                    t.setTransition(e, s),
                    0 !== e && (t.transitionStart(),
                    t.params.autoHeight && m.nextTick((function() {
                            t.updateAutoHeight()
                        }
                    )),
                        t.$wrapperEl.transitionEnd((function() {
                                a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                                    t.transitionEnd())
                            }
                        )))
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1)
                        a[i] !== t && a[i]instanceof B && n(a[i]);
                else
                    a instanceof B && t !== a && n(a)
            }
        }
            , ae = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"),
                    e
            },
            addElRole: function(e, t) {
                return e.attr("role", t),
                    e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t),
                    e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0),
                    e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1),
                    e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = u(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                        this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                    this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                        this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                    this.pagination && i.is(".".concat(this.params.pagination.bulletClass)) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""),
                    t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation
                        , t = e.$nextEl
                        , i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                    t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this
                    , t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
                        var a = u(s);
                        e.a11y.makeElFocusable(a),
                            e.a11y.addElRole(a, "button"),
                            e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    }
                ))
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                e && (this.a11y.makeElFocusable(e),
                    this.a11y.addElRole(e, "button"),
                    this.a11y.addElLabel(e, i.nextSlideMessage),
                    e.on("keydown", this.a11y.onEnterKey)),
                t && (this.a11y.makeElFocusable(t),
                    this.a11y.addElRole(t, "button"),
                    this.a11y.addElLabel(t, i.prevSlideMessage),
                    t.on("keydown", this.a11y.onEnterKey)),
                this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", ".".concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                e && e.off("keydown", this.a11y.onEnterKey),
                t && t.off("keydown", this.a11y.onEnterKey),
                this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", ".".concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
            }
        }
            , ne = {
            init: function() {
                if (this.params.history) {
                    if (!c.history || !c.history.pushState)
                        return this.params.history.enabled = !1,
                            void (this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0,
                        e.paths = ne.getPathValues(),
                    (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                    this.params.history.replaceState || c.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || c.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = ne.getPathValues(),
                    this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = c.location.pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    }
                ))
                    , t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t)
                        , s = ne.slugify(i.attr("data-history"));
                    c.location.pathname.includes(e) || (s = "".concat(e, "/").concat(s));
                    var a = c.history.state;
                    a && a.value === s || (this.params.history.replaceState ? c.history.replaceState({
                        value: s
                    }, null, s) : c.history.pushState({
                        value: s
                    }, null, s))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var n = this.slides.eq(s);
                        if (ne.slugify(n.attr("data-history")) === t && !n.hasClass(this.params.slideDuplicateClass)) {
                            var r = n.index();
                            this.slideTo(r, e, i)
                        }
                    }
                else
                    this.slideTo(0, e, i)
            }
        }
            , re = {
            onHashCange: function() {
                var e = h.location.hash.replace("#", "");
                if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var t = this.$wrapperEl.children(".".concat(this.params.slideClass, '[data-hash="').concat(e, '"]')).index();
                    if ("undefined" === typeof t)
                        return;
                    this.slideTo(t)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                        c.history.replaceState(null, null, "#".concat(this.slides.eq(this.activeIndex).attr("data-hash")) || !1);
                    else {
                        var e = this.slides.eq(this.activeIndex)
                            , t = e.attr("data-hash") || e.attr("data-history");
                        h.location.hash = t || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var e = h.location.hash.replace("#", "");
                    if (e)
                        for (var t = 0, i = this.slides.length; t < i; t += 1) {
                            var s = this.slides.eq(t);
                            if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(this.params.slideDuplicateClass)) {
                                var a = s.index();
                                this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && u(c).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && u(c).off("hashchange", this.hashNavigation.onHashCange)
            }
        }
            , oe = {
            run: function() {
                var e = this
                    , t = e.slides.eq(e.activeIndex)
                    , i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = m.nextTick((function() {
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                                e.slidePrev(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                                e.slideNext(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                                e.emit("autoplay")),
                            e.params.cssMode && e.autoplay.running && e.autoplay.run()
                        }
                    ), i)
            },
            start: function() {
                return "undefined" === typeof this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
                    this.emit("autoplayStart"),
                    this.autoplay.run(),
                    !0))
            },
            stop: function() {
                return !!this.autoplay.running && ("undefined" !== typeof this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
                    this.autoplay.timeout = void 0),
                    this.autoplay.running = !1,
                    this.emit("autoplayStop"),
                    !0))
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                    this.autoplay.paused = !0,
                    0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
                        this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
                        this.autoplay.run())))
            }
        }
            , le = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t)
                        , s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s,
                        s = 0);
                    var n = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(".concat(s, "px, ").concat(a, "px, 0px)"))
                }
            },
            setTransition: function(e) {
                var t = this
                    , i = t.slides
                    , s = t.$wrapperEl;
                if (i.transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd((function() {
                            if (!a && t && !t.destroyed) {
                                a = !0,
                                    t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                                    s.trigger(e[i])
                            }
                        }
                    ))
                }
            }
        }
            , de = {
            setTranslate: function() {
                var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, n = this.height, r = this.rtlTranslate, o = this.size, l = this.params.cubeEffect, d = this.isHorizontal(), h = this.virtual && this.params.virtual.enabled, c = 0;
                l.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = u('<div class="swiper-cube-shadow"></div>'),
                    i.append(e)),
                    e.css({
                        height: "".concat(a, "px")
                    })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = u('<div class="swiper-cube-shadow"></div>'),
                    t.append(e)));
                for (var p = 0; p < s.length; p += 1) {
                    var f = s.eq(p)
                        , v = p;
                    h && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var m = 90 * v
                        , g = Math.floor(m / 360);
                    r && (m = -m,
                        g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(f[0].progress, 1), -1)
                        , y = 0
                        , w = 0
                        , x = 0;
                    v % 4 === 0 ? (y = 4 * -g * o,
                        x = 0) : (v - 1) % 4 === 0 ? (y = 0,
                        x = 4 * -g * o) : (v - 2) % 4 === 0 ? (y = o + 4 * g * o,
                        x = o) : (v - 3) % 4 === 0 && (y = -o,
                        x = 3 * o + 4 * o * g),
                    r && (y = -y),
                    d || (w = y,
                        y = 0);
                    var E = "rotateX(".concat(d ? 0 : -m, "deg) rotateY(").concat(d ? m : 0, "deg) translate3d(").concat(y, "px, ").concat(w, "px, ").concat(x, "px)");
                    if (b <= 1 && b > -1 && (c = 90 * v + 90 * b,
                    r && (c = 90 * -v - 90 * b)),
                        f.transform(E),
                        l.slideShadows) {
                        var T = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                            , S = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = u('<div class="swiper-slide-shadow-'.concat(d ? "left" : "top", '"></div>')),
                            f.append(T)),
                        0 === S.length && (S = u('<div class="swiper-slide-shadow-'.concat(d ? "right" : "bottom", '"></div>')),
                            f.append(S)),
                        T.length && (T[0].style.opacity = Math.max(-b, 0)),
                        S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                    "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
                    "-moz-transform-origin": "50% 50% -".concat(o / 2, "px"),
                    "-ms-transform-origin": "50% 50% -".concat(o / 2, "px"),
                    "transform-origin": "50% 50% -".concat(o / 2, "px")
                }),
                    l.shadow)
                    if (d)
                        e.transform("translate3d(0px, ".concat(a / 2 + l.shadowOffset, "px, ").concat(-a / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(l.shadowScale, ")"));
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                            , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                            , P = l.shadowScale
                            , k = l.shadowScale / M
                            , z = l.shadowOffset;
                        e.transform("scale3d(".concat(P, ", 1, ").concat(k, ") translate3d(0px, ").concat(n / 2 + z, "px, ").concat(-n / 2 / k, "px) rotateX(-90deg)"))
                    }
                var $ = X.isSafari || X.isUiWebView ? -o / 2 : 0;
                i.transform("translate3d(0px,0,".concat($, "px) rotateX(").concat(this.isHorizontal() ? 0 : c, "deg) rotateY(").concat(this.isHorizontal() ? -c : 0, "deg)"))
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        }
            , he = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var s = e.eq(i)
                        , a = s[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * a
                        , r = 0
                        , o = -s[0].swiperSlideOffset
                        , l = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (l = o,
                        o = 0,
                        r = -n,
                        n = 0),
                        s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                        this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                            , h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = u('<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? "left" : "top", '"></div>')),
                            s.append(d)),
                        0 === h.length && (h = u('<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? "right" : "bottom", '"></div>')),
                            s.append(h)),
                        d.length && (d[0].style.opacity = Math.max(-a, 0)),
                        h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(".concat(o, "px, ").concat(l, "px, 0px) rotateX(").concat(r, "deg) rotateY(").concat(n, "deg)"))
                }
            },
            setTransition: function(e) {
                var t = this
                    , i = t.slides
                    , s = t.activeIndex
                    , a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    var n = !1;
                    i.eq(s).transitionEnd((function() {
                            if (!n && t && !t.destroyed) {
                                n = !0,
                                    t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                                    a.trigger(e[i])
                            }
                        }
                    ))
                }
            }
        }
            , ce = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, n = this.params.coverflowEffect, r = this.isHorizontal(), o = this.translate, l = r ? e / 2 - o : t / 2 - o, d = r ? n.rotate : -n.rotate, h = n.depth, c = 0, p = i.length; c < p; c += 1) {
                    var f = i.eq(c)
                        , v = a[c]
                        , m = (l - f[0].swiperSlideOffset - v / 2) / v * n.modifier
                        , b = r ? d * m : 0
                        , y = r ? 0 : d * m
                        , w = -h * Math.abs(m)
                        , x = r ? 0 : n.stretch * m
                        , E = r ? n.stretch * m : 0;
                    Math.abs(E) < .001 && (E = 0),
                    Math.abs(x) < .001 && (x = 0),
                    Math.abs(w) < .001 && (w = 0),
                    Math.abs(b) < .001 && (b = 0),
                    Math.abs(y) < .001 && (y = 0);
                    var T = "translate3d(".concat(E, "px,").concat(x, "px,").concat(w, "px)  rotateX(").concat(y, "deg) rotateY(").concat(b, "deg)");
                    if (f.transform(T),
                        f[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                        n.slideShadows) {
                        var S = r ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                            , C = r ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = u('<div class="swiper-slide-shadow-'.concat(r ? "left" : "top", '"></div>')),
                            f.append(S)),
                        0 === C.length && (C = u('<div class="swiper-slide-shadow-'.concat(r ? "right" : "bottom", '"></div>')),
                            f.append(C)),
                        S.length && (S[0].style.opacity = m > 0 ? m : 0),
                        C.length && (C[0].style.opacity = -m > 0 ? -m : 0)
                    }
                }
                (g.pointerEvents || g.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = "".concat(l, "px 50%"))
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }
            , pe = {
            init: function() {
                var e = this.params.thumbs
                    , t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
                    m.extend(this.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    m.extend(this.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : m.isObject(e.swiper) && (this.thumbs.swiper = new t(m.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })),
                    this.thumbs.swiperCreated = !0),
                    this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                    this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex
                        , i = e.clickedSlide;
                    if ((!i || !u(i).hasClass(this.params.thumbs.slideThumbActiveClass)) && "undefined" !== typeof t && null !== t) {
                        var s;
                        if (s = e.params.loop ? parseInt(u(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                            this.params.loop) {
                            var a = this.activeIndex;
                            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                                this._clientLeft = this.$wrapperEl[0].clientLeft,
                                a = this.activeIndex);
                            var n = this.slides.eq(a).prevAll('[data-swiper-slide-index="'.concat(s, '"]')).eq(0).index()
                                , r = this.slides.eq(a).nextAll('[data-swiper-slide-index="'.concat(s, '"]')).eq(0).index();
                            s = "undefined" === typeof n ? r : "undefined" === typeof r ? n : r - a < a - n ? r : n
                        }
                        this.slideTo(s)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var s, a = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                                t._clientLeft = t.$wrapperEl[0].clientLeft,
                                a = t.activeIndex);
                            var n = t.slides.eq(a).prevAll('[data-swiper-slide-index="'.concat(this.realIndex, '"]')).eq(0).index()
                                , r = t.slides.eq(a).nextAll('[data-swiper-slide-index="'.concat(this.realIndex, '"]')).eq(0).index();
                            s = "undefined" === typeof n ? r : "undefined" === typeof r ? n : r - a === a - n ? a : r - a < a - n ? r : n
                        } else
                            s = this.realIndex;
                        t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1),
                            t.slideTo(s, e ? 0 : void 0))
                    }
                    var o = 1
                        , l = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView),
                    this.params.thumbs.multipleActiveThumbs || (o = 1),
                        o = Math.floor(o),
                        t.slides.removeClass(l),
                    t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var d = 0; d < o; d += 1)
                            t.$wrapperEl.children('[data-swiper-slide-index="'.concat(this.realIndex + d, '"]')).addClass(l);
                    else
                        for (var h = 0; h < o; h += 1)
                            t.slides.eq(this.realIndex + h).addClass(l)
                }
            }
        }
            , ue = [H, V, Y, F, j, q, U, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                m.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: K.enable.bind(this),
                        disable: K.disable.bind(this),
                        handle: K.handle.bind(this),
                        handleMouseEnter: K.handleMouseEnter.bind(this),
                        handleMouseLeave: K.handleMouseLeave.bind(this),
                        animateSlider: K.animateSlider.bind(this),
                        releaseScroll: K.releaseScroll.bind(this),
                        lastScrollTime: m.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(),
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                m.extend(this, {
                    navigation: {
                        init: J.init.bind(this),
                        update: J.update.bind(this),
                        destroy: J.destroy.bind(this),
                        onNextClick: J.onNextClick.bind(this),
                        onPrevClick: J.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(),
                        this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                    !this.params.navigation.hideOnClick || u(e.target).is(a) || u(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
                        !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                    s && s.toggleClass(this.params.navigation.hiddenClass),
                    a && a.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                m.extend(this, {
                    pagination: {
                        init: Z.init.bind(this),
                        render: Z.render.bind(this),
                        update: Z.update.bind(this),
                        destroy: Z.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(),
                        this.pagination.render(),
                        this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : "undefined" === typeof this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(),
                        this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(),
                        this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !u(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                        this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                m.extend(this, {
                    scrollbar: {
                        init: Q.init.bind(this),
                        destroy: Q.destroy.bind(this),
                        updateSize: Q.updateSize.bind(this),
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this),
                        enableDraggable: Q.enableDraggable.bind(this),
                        disableDraggable: Q.disableDraggable.bind(this),
                        setDragPosition: Q.setDragPosition.bind(this),
                        getPointerPosition: Q.getPointerPosition.bind(this),
                        onDragStart: Q.onDragStart.bind(this),
                        onDragMove: Q.onDragMove.bind(this),
                        onDragEnd: Q.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(),
                        this.scrollbar.updateSize(),
                        this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                m.extend(this, {
                    parallax: {
                        setTransform: ee.setTransform.bind(this),
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                        this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this
                    , t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                        t[i] = te[i].bind(e)
                    }
                )),
                    m.extend(e, {
                        zoom: t
                    });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                                , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, a)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                m.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: ie.load.bind(this),
                        loadInSlide: ie.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                m.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: se.getInterpolateFunction.bind(this),
                        setTranslate: se.setTranslate.bind(this),
                        setTransition: se.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                        delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                        delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                        delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                m.extend(e, {
                    a11y: {
                        liveRegion: u('<span class="'.concat(e.params.a11y.notificationClass, '" aria-live="assertive" aria-atomic="true"></span>'))
                    }
                }),
                    Object.keys(ae).forEach((function(t) {
                            e.a11y[t] = ae[t].bind(e)
                        }
                    ))
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(),
                        this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                m.extend(this, {
                    history: {
                        init: ne.init.bind(this),
                        setHistory: ne.setHistory.bind(this),
                        setHistoryPopState: ne.setHistoryPopState.bind(this),
                        scrollToSlide: ne.scrollToSlide.bind(this),
                        destroy: ne.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                m.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: re.init.bind(this),
                        destroy: re.destroy.bind(this),
                        setHash: re.setHash.bind(this),
                        onHashCange: re.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                m.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: oe.run.bind(e),
                        start: oe.start.bind(e),
                        stop: oe.stop.bind(e),
                        pause: oe.pause.bind(e),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                            "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                                e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                e.autoplay.paused = !1,
                                e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(),
                        document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(),
                        document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                m.extend(this, {
                    fadeEffect: {
                        setTranslate: le.setTranslate.bind(this),
                        setTransition: le.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "fade"));
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        m.extend(this.params, e),
                            m.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                m.extend(this, {
                    cubeEffect: {
                        setTranslate: de.setTranslate.bind(this),
                        setTransition: de.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "cube")),
                            this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        m.extend(this.params, e),
                            m.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                m.extend(this, {
                    flipEffect: {
                        setTranslate: he.setTranslate.bind(this),
                        setTransition: he.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "flip")),
                            this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        m.extend(this.params, e),
                            m.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                m.extend(this, {
                    coverflowEffect: {
                        setTranslate: ce.setTranslate.bind(this),
                        setTransition: ce.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push("".concat(this.params.containerModifierClass, "coverflow")),
                        this.classNames.push("".concat(this.params.containerModifierClass, "3d")),
                        this.params.watchSlidesProgress = !0,
                        this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    multipleActiveThumbs: !0,
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                m.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: pe.init.bind(this),
                        update: pe.update.bind(this),
                        onThumbClick: pe.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(),
                        this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
        "undefined" === typeof B.use && (B.use = B.Class.use,
            B.installModule = B.Class.installModule),
            B.use(ue);
        t.default = B
    },
    39: function(e, t, i) {
        "use strict";
        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        i.d(t, "a", (function() {
                return s
            }
        ))
    },
    40: function(e, t, i) {
        "use strict";
        function s(e) {
            return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        function a(e) {
            return (a = "function" === typeof Symbol && "symbol" === s(Symbol.iterator) ? function(e) {
                        return s(e)
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : s(e)
                    }
            )(e)
        }
        var n = i(45);
        function r(e, t) {
            return !t || "object" !== a(t) && "function" !== typeof t ? Object(n.a)(e) : t
        }
        i.d(t, "a", (function() {
                return r
            }
        ))
    },
    41: function(e, t, i) {
        "use strict";
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                        e
                }
            )(e, t)
        }
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && s(e, t)
        }
        i.d(t, "a", (function() {
                return a
            }
        ))
    },
    45: function(e, t, i) {
        "use strict";
        function s(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        i.d(t, "a", (function() {
                return s
            }
        ))
    },
    52: function(e, t, i) {
        "use strict";
        var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = s(i(290));
        t.default = a.default
    },
    53: function(e, t, i) {}
}]);
//# sourceMappingURL=1.ddb7db45.chunk.js.map
