(window["webpackJsonpmy-app"] = window["webpackJsonpmy-app"] || []).push([[72], {
    319: function(e, t, a) {},
    320: function(e, t, a) {},
    321: function(e, t, a) {},
    322: function(e, t, a) {},
    46: function(e, t, a) {
        e.exports = a.p + "static/media/success-icon.09e54f3b.png"
    },
    466: function(e, t, a) {
        "use strict";
        a.r(t);
        var o = a(33)
            , n = (a(35),
            a(36))
            , c = a.n(n)
            , r = a(42)
            , i = a(1)
            , s = a.n(i)
            , l = a(52)
            , u = a.n(l)
            , p = a(44)
            , d = a(69)
            , m = (a(53),
            a(32))
            , h = (a(319),
            a(37))
            , f = a(38)
            , g = a(40)
            , y = a(39)
            , b = a(41)
            , v = a(43)
            , w = a.n(v)
            , S = a(34)
            , O = a(46)
            , C = a.n(O)
            , j = (a(320),
            function(e) {
                function t(e) {
                    var a;
                    return Object(h.a)(this, t),
                        (a = Object(g.a)(this, Object(y.a)(t).call(this, e))).inputMboile = s.a.createRef(),
                        a.inputCode = s.a.createRef(),
                        a.handleFocus = function(e) {
                            e.current.focus()
                        }
                        ,
                        a.getPayMoney = function() {
                            return a.props.pageData.payMoney > 0 ? 9 : 0
                        }
                        ,
                        a.getSmsCode = function() {
                            var e = a.state
                                , t = e.form;
                            if (!(e.countDown > 0))
                                if (t.mobile)
                                    if (/^1\d{10}$/.test(t.mobile)) {
                                        var o = {
                                            url: "sys/sms/mobile",
                                            errToast: 1,
                                            data: {
                                                mobile: t.mobile,
                                                type: 2
                                            }
                                        };
                                        Object(m.a)(o).then((function() {
                                                c.a.success("\u5df2\u53d1\u9001", 2),
                                                    a.setState({
                                                        countDown: 60
                                                    }, (function() {
                                                            a.handleCountDown()
                                                        }
                                                    ))
                                            }
                                        ))
                                    } else
                                        c.a.fail("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef", 2);
                                else
                                    c.a.fail("\u8bf7\u8f93\u5165\u624b\u673a\u53f7", 2)
                        }
                        ,
                        a.handleCountDown = function() {
                            window.popSetTime = setTimeout((function() {
                                    var e = a.state.countDown;
                                    e > 0 && (e -= 1,
                                        a.setState({
                                            countDown: e
                                        }, (function() {
                                                a.handleCountDown()
                                            }
                                        )))
                                }
                            ), 1e3)
                        }
                        ,
                        a.updateForm = function(e, t) {
                            var o = a.state.form;
                            o[e] = t,
                                a.setState({
                                    form: o
                                })
                        }
                        ,
                        a.gotoApply = function() {
                            var e = a.props
                                , t = e.handleApply
                                , o = e.codeShow
                                , n = a.state.form;
                            n.mobile ? /^1\d{10}$/.test(n.mobile) ? !o || n.code ? (t({
                                mobile: n.mobile,
                                smsCode: n.code
                            }),
                                a.uplogClick("Release_qiniu_".concat(a.getPayMoney(), "_Springframe_click"))) : c.a.fail("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", 2) : c.a.fail("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef", 2) : c.a.fail("\u8bf7\u8f93\u5165\u624b\u673a\u53f7", 2)
                        }
                        ,
                        a.closePopState = function() {
                            (0,
                                a.props.closePopState)(),
                                a.uplogClick("Release_qiniu_".concat(a.getPayMoney(), "_Springframe_shutdown"))
                        }
                        ,
                        a.uplogClick = function(e) {
                            var t = "1";
                            a.props.pageData.reversToastBg && (t = "2"),
                                S.j.reporterData({
                                    plateFrom: "".concat(e, "_position").concat(t)
                                })
                        }
                        ,
                        a.buttonDrom = function() {
                            var e = a.props.pageData
                                , t = "";
                            e.reversToastBg && (t = e.reversToastBg.split(",")[1]);
                            var o = t ? "popState-btn-apply has-img" : "popState-btn-apply";
                            return s.a.createElement("p", {
                                className: o,
                                onClick: function() {
                                    return a.gotoApply()
                                }
                            }, t && s.a.createElement("img", {
                                className: "button-img",
                                src: t,
                                alt: ""
                            }), !t && "\u7acb\u5373\u9886\u53d6")
                        }
                        ,
                        a.topDom = function() {
                            var e = a.props.pageData
                                , t = "https://lqn.kalingling.com/lnsxy/20201210033759_E5BCB9E7AA97E5A4B4E59BBE.png";
                            return e.reversToastBg && (t = e.reversToastBg.split(",")[0]),
                                s.a.createElement("div", {
                                    className: "popState-top"
                                }, s.a.createElement("img", {
                                    src: t,
                                    alt: "topImgSrc"
                                }))
                        }
                        ,
                        a.state = {
                            countDown: 0,
                            form: {
                                mobile: "",
                                code: ""
                            }
                        },
                        a
                }
                return Object(b.a)(t, e),
                    Object(f.a)(t, [{
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(window.popSetTime)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this
                                , t = this.props
                                , a = t.codeShow
                                , o = t.pageData
                                , n = this.state
                                , c = n.countDown
                                , r = n.form;
                            return s.a.createElement("div", null, s.a.createElement(p.a, null, o.hrefId && s.a.createElement("div", {
                                className: "popState-wrap"
                            }, this.topDom(), s.a.createElement("div", {
                                className: "popState-info"
                            }, s.a.createElement("div", {
                                className: "item",
                                onClick: function() {
                                    return e.handleFocus(e.inputMboile)
                                }
                            }, s.a.createElement("input", {
                                ref: this.inputMboile,
                                placeholder: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7",
                                onChange: function(t) {
                                    return e.updateForm("mobile", t.target.value)
                                },
                                value: r.mobile,
                                disabled: !a,
                                maxLength: "11",
                                type: "text"
                            })), s.a.createElement("div", {
                                className: "item",
                                onClick: function() {
                                    return e.handleFocus(e.inputCode)
                                }
                            }, s.a.createElement("input", {
                                ref: this.inputCode,
                                placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                                onChange: function(t) {
                                    return e.updateForm("code", t.target.value)
                                },
                                value: r.code,
                                maxLength: "6",
                                type: "text"
                            }), s.a.createElement("div", {
                                className: "btn-sms",
                                onClick: this.getSmsCode
                            }, c > 0 ? "".concat(c, "s") : "\u83b7\u53d6\u9a8c\u8bc1\u7801"))), s.a.createElement("div", {
                                className: "popState-btn"
                            }, this.buttonDrom()), s.a.createElement("div", {
                                className: "close-state",
                                onClick: this.closePopState
                            }))))
                        }
                    }]),
                    t
            }(s.a.Component))
            , E = (a(321),
            function(e) {
                function t(e) {
                    var a;
                    return Object(h.a)(this, t),
                        (a = Object(g.a)(this, Object(y.a)(t).call(this, e))).getPayMoney = function() {
                            return a.props.pageData.payMoney > 0 ? 9 : 0
                        }
                        ,
                        a.closeStartModal1 = function() {
                            (0,
                                a.props.closeStartModal)(),
                                a.uplogClick("Release_qiniu_".concat(a.getPayMoney(), "_startModal_shutdown_position1"))
                        }
                        ,
                        a.closeStartModal2 = function() {
                            (0,
                                a.props.closeStartModal)(),
                                a.uplogClick("Release_qiniu_".concat(a.getPayMoney(), "_startModal_shutdown_position2"))
                        }
                        ,
                        a.uplogClick = function(e) {
                            S.j.reporterData({
                                plateFrom: "".concat(e)
                            })
                        }
                        ,
                        a.buttonDrom = function() {
                            var e = a.props.pageData
                                , t = "";
                            e.openToastBg && (t = e.openToastBg.split(",")[1]);
                            return s.a.createElement("p", {
                                className: "startModal-btn-apply has-img",
                                onClick: a.closeStartModal1
                            }, t && s.a.createElement("img", {
                                className: "button-img",
                                src: t,
                                alt: ""
                            }))
                        }
                        ,
                        a.topDom = function() {
                            var e = a.props.pageData
                                , t = "";
                            return e.openToastBg && (t = e.openToastBg.split(",")[0]),
                                s.a.createElement("div", {
                                    className: "startModal-top"
                                }, s.a.createElement("img", {
                                    src: t,
                                    alt: "topImgSrc"
                                }))
                        }
                        ,
                        a.state = {},
                        a
                }
                return Object(b.a)(t, e),
                    Object(f.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.pageData;
                            return s.a.createElement("div", null, s.a.createElement(p.a, null, e.hrefId && s.a.createElement("div", {
                                className: "startModal-wrap"
                            }, this.topDom(), s.a.createElement("div", {
                                className: "startModal-btn"
                            }, this.buttonDrom()), s.a.createElement("div", {
                                className: "close-state",
                                onClick: this.closeStartModal2
                            }))))
                        }
                    }]),
                    t
            }(s.a.Component));
        a(322);
        function D(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, o)
            }
            return a
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(a, !0).forEach((function(t) {
                        Object(o.a)(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var P = function(e) {
            return function(t) {
                function a(e) {
                    var t;
                    return Object(h.a)(this, a),
                        (t = Object(g.a)(this, Object(y.a)(a).call(this, e))).bindPopState = function() {
                            t.pushHistory(),
                                setTimeout((function() {
                                        window.addEventListener("popstate", t.changePopState, !1)
                                    }
                                ), 500)
                        }
                        ,
                        t.pushHistory = function() {
                            window.history.pushState({
                                page: 1
                            }, "title 1", "#")
                        }
                        ,
                        t.changePopState = function() {
                            Object(S.d)().orderId ? t.setState({
                                dialogShow: !0
                            }) : t.setState({
                                showPopState: !0
                            }),
                                t.pushHistory()
                        }
                        ,
                        t.startModalShow = function() {
                            Object(S.d)().orderId || t.setState({
                                showStartModal: !0
                            })
                        }
                        ,
                        t.jumpSuccess14 = function(e) {
                            var a = Object(S.d)()
                                , o = t.state.pageData.guidePage
                                , n = e;
                            Object.keys(n).forEach((function(e) {
                                    n[e] || delete n[e]
                                }
                            ));
                            var c = k({}, a, {}, n)
                                , r = "success14";
                            if (o) {
                                "" !== o.href && (r = o.href);
                                var i = o.id ? o.id : "";
                                i && (c.subType = i)
                            }
                            var s = Object(S.i)(c);
                            -1 !== r.indexOf("http") ? window.location.href = "".concat(r, "?").concat(s, "&pay=").concat(t.getPayMoney()) : t.props.history.push("".concat(r, "?").concat(s, "&pay=").concat(t.getPayMoney()))
                        }
                        ,
                        t.upReport = function() {
                            S.j.reporterData({
                                plateFrom: "Release_kuaicai_".concat(t.getPayMoney(), "_home_up")
                            })
                        }
                        ,
                        t.getPayMoney = function() {
                            return t.state.pageData.payMoney > 0 ? 9 : 0
                        }
                        ,
                        t.getPageData = function() {
                            var e = Object(S.d)()
                                , a = {
                                url: e.preview ? "putInHref/preview" : "putInHref/putInHrefList",
                                data: k({}, e),
                                errToast: 1
                            };
                            Object(m.a)(a).then((function(e) {
                                    0 === e.code && t.setImgData(e.data)
                                }
                            ))
                        }
                        ,
                        t.setImgData = function(e) {
                            var a, o = e, n = o.putInHrefSonModelList, c = {}, r = [], i = !1;
                            if (n.forEach((function(e) {
                                    if (c[e.hrefKey] = e.href,
                                    "nextButtonContent" === e.hrefKey && (o.buttonText = e.buttonText ? e.buttonText : "",
                                        o.buttonImgUrl = e.href ? e.href : ""),
                                    "pageTitle" === e.hrefKey) {
                                        var t = e.buttonText ? e.buttonText : "\u542f\u725b\u5b66\u9662";
                                        Object(S.p)(t),
                                            i = !0
                                    }
                                }
                            )),
                            i || Object(S.p)(),
                                c.teacherContent) {
                                var s = c.teacherContent.split(",");
                                s.length > 0 && s.forEach((function(e) {
                                        r.push({
                                            picUrl: e
                                        })
                                    }
                                ))
                            }
                            c.teacherContent = r,
                                a = k({}, o, {}, c),
                                t.setState({
                                    pageData: a
                                }),
                                t.getQuery(),
                            ("" === c.reversToastBg || c.reversToastBg) && t.bindPopState(),
                            c.openToastBg && t.startModalShow()
                        }
                        ,
                        t.getUnionId = function() {
                            var e = new Date
                                , t = "payId";
                            return t += e.getFullYear(),
                                t += e.getMonth() + 1,
                                t += e.getDate(),
                                t += e.getTime(),
                                w()(t)
                        }
                        ,
                        t.getQuery = function() {
                            var e = Object(S.d)();
                            t.setState({
                                query: e
                            }, (function() {
                                    e.orderId ? (t.setState({
                                        codeShow: !1
                                    }),
                                        t.checkOrderStatus(),
                                        c.a.loading("loading", 6)) : localStorage.removeItem("mobile"),
                                        t.upLog()
                                }
                            ))
                        }
                        ,
                        t.upLog = function() {
                            var e = t.state.query;
                            e.channel && e.subChannel && S.j.reporterData({
                                plateFrom: "Release_kuaicai_".concat(t.getPayMoney(), "_home_uv")
                            })
                        }
                        ,
                        t.handleOutsideStatistics = function() {
                            var e = t.state.query;
                            e.subChannel && _ks_trace && _ks_trace.push({
                                event: "form",
                                convertId: e.subChannel,
                                cb: function() {}
                            }),
                            e.changeId && window.meteor && window.meteor.track("form", {
                                convert_id: e.convertId
                            }),
                            e.changeId && window.zhad && window.zhad.push({
                                eventtype: "js_submit"
                            }),
                            e.subChannel && window.xmlyAdLog && window.xmlyAdLog.track(2, {
                                key: "a52eec551e60442b8e309ad00c8fb60a"
                            }),
                            e.subChannel && window.bilicm && window.bilicm.mbase.report_data(),
                            e.subChannel && e.eventid && window.wbadmt && window.wbadmt.send({
                                eventid: e.eventid,
                                eventtype: "form",
                                eventvalue: "saveMobileAdditionData"
                            }),
                                t.upReport()
                        }
                        ,
                        t.checkOrderStatus = function() {
                            var e = t.state
                                , a = e.query
                                , o = e.loopTime
                                , n = e.pageData
                                , r = {
                                url: "live/h5PayResult/".concat(a.orderId),
                                data: {},
                                loading: !1
                            };
                            1 === n.courseType && (r.url = "promotion/payResult",
                                r.data.orderId = a.orderId),
                                Object(m.a)(r).then((function(e) {
                                        t.setState({
                                            loopTime: o + 1
                                        }),
                                        0 === e.code && (2 === e.data.status ? (c.a.hide(),
                                            t.goCheckByOrderId()) : setTimeout((function() {
                                                t.state.loopTime < 6 ? t.checkOrderStatus() : t.setState({
                                                    dialogShow: !0
                                                })
                                            }
                                        ), 1e3))
                                    }
                                )).catch((function() {}
                                ))
                        }
                        ,
                        t.toggleDialog = function() {
                            var e = t.state.showConfirm;
                            t.setState({
                                showConfirm: !e
                            })
                        }
                        ,
                        t.handleApply = function(e) {
                            var a = t.state
                                , o = a.query
                                , n = a.pageData;
                            if ("1" !== o.preview)
                                if (t.state.codeShow) {
                                    var r = Object(S.b)()
                                        , i = {
                                        url: "login/saveMobileAdditionData",
                                        data: k({
                                            phoneModel: r.model,
                                            osName: r.os
                                        }, e, {}, o),
                                        errToast: 1
                                    };
                                    1 * n.payMoney > 0 ? i.data.type = 2 : i.data.type = 1,
                                        Object(m.a)(i).then((function(a) {
                                                0 === a.code && (t.handleOutsideStatistics(),
                                                    localStorage.setItem("mobile", e.mobile),
                                                    t.goCheckPay(e))
                                            }
                                        ))
                                } else
                                    t.goCheckPay(e);
                            else
                                c.a.fail("\u8fd9\u662f\u9884\u89c8\uff0c\u4e0d\u80fd\u63d0\u4ea4", 2)
                        }
                        ,
                        t.payLive = function(e) {
                            1 * t.state.pageData.payMoney > 0 ? t.exclusionForNice(e) : t.exclusionForzero(e)
                        }
                        ,
                        t.exclusionForNice = function(e) {
                            var a = t.state.query
                                , o = Object(S.i)(a);
                            Object(m.a)({
                                url: "live/put9Check/".concat(e.mobile),
                                data: {},
                                errToast: 1
                            }).then((function(n) {
                                    0 === n.code && (n.data ? 2 === n.data.type ? t.jumpSuccess14({
                                        phone: e.mobile
                                    }) : 1 === n.data.type ? t.props.history.push("/success09?teacherQrCode=".concat(n.data.teacherQrCode, "&").concat(o)) : 3 === n.data.type && t.jumpSuccess14({
                                        phone: e.mobile,
                                        cctype: 1
                                    }) : Object(m.a)({
                                        url: "live/isPay9Dy",
                                        data: k({
                                            mobile: e.mobile
                                        }, a),
                                        errToast: 1
                                    }).then((function(a) {
                                            0 === a.code && (a.data ? (a.data.teacherQrCode && t.setState({
                                                teacherQrCode: a.data.teacherQrCode
                                            }),
                                                t.goCheckByOrderId()) : t.goWxPay(e.mobile))
                                        }
                                    )))
                                }
                            ))
                        }
                        ,
                        t.exclusionForzero = function(e) {
                            t.goFreeLive(e)
                        }
                        ,
                        t.payXby = function(e) {
                            var a = t.state.query
                                , o = Object(S.i)(a);
                            Object(m.a)({
                                url: "put9Check/".concat(e.mobile),
                                data: {},
                                errToast: 1
                            }).then((function(n) {
                                    0 === n.code && (n.data ? 3 === n.data.type ? t.jumpSuccess14({
                                        phone: e.mobile,
                                        cctype: 1
                                    }) : 2 === n.data.type ? t.props.history.push("/success10?".concat(o)) : 1 === n.data.type && t.props.history.push("/success11?cctype=1&".concat(o)) : Object(m.a)({
                                        url: "isPay9Dy",
                                        data: k({
                                            mobile: e.mobile
                                        }, a),
                                        errToast: 1
                                    }).then((function(a) {
                                            0 === a.code && (a.data ? (a.data.teacherQrCode && t.setState({
                                                teacherQrCode: a.data.teacherQrCode
                                            }),
                                                t.goCheckByOrderId()) : t.goWxPay(e.mobile))
                                        }
                                    )))
                                }
                            ))
                        }
                        ,
                        t.goCheckByOrderId = function() {
                            var e = t.state.pageData
                                , a = t.state.query
                                , o = Object(S.i)(a)
                                , n = localStorage.getItem("mobile") || "";
                            1 === e.courseType ? setTimeout((function() {
                                    t.props.history.push("/success11?phone=".concat(n, "&").concat(o))
                                }
                            ), 1500) : 2 === e.courseType ? (e.payMoney,
                                setTimeout((function() {
                                        t.jumpSuccess14({
                                            phone: n
                                        })
                                    }
                                ), 1500)) : 4 === e.courseType && t.jumpSuccess14({
                                phone: n,
                                cctype: 1
                            })
                        }
                        ,
                        t.goCheckPay = function(e) {
                            var a = t.state.pageData;
                            1 === a.courseType ? t.xbyCheck(e) : 2 === a.courseType && (1 * a.payMoney > 0 ? t.onlinePay(e) : t.onlineFree(e))
                        }
                        ,
                        t.goFreeLive = function(e) {
                            var a = t.state.query
                                , o = Object(S.i)(a)
                                , n = a.channel
                                , c = a.subChannel
                                , r = a.hrefId
                                , i = e.mobile;
                            Object(m.a)({
                                url: "live/put0yuanCheck",
                                data: {
                                    channel: n,
                                    subChannel: c,
                                    hrefId: r,
                                    mobile: i
                                },
                                errToast: 1
                            }).then((function(e) {
                                    0 === e.code && (e.data ? 2 === e.data.type ? t.jumpSuccess14({
                                        phone: i
                                    }) : 1 === e.data.type ? t.props.history.push("/success09?teacherQrCode=".concat(e.data.teacherQrCode, "&").concat(o)) : 3 === e.data.type && t.jumpSuccess14({
                                        phone: i,
                                        cctype: 1
                                    }) : t.jumpSuccess14({
                                        phone: i
                                    }))
                                }
                            ))
                        }
                        ,
                        t.xbyCheck = function(e) {
                            t.payXby(e)
                        }
                        ,
                        t.onlineFree = function(e) {
                            t.payLive(e)
                        }
                        ,
                        t.onlinePay = function(e) {
                            t.payLive(e)
                        }
                        ,
                        t.goWxPay = function(e, a) {
                            var o = t.state
                                , n = o.query
                                , c = o.pageData
                                , r = n.channel
                                , i = n.subChannel
                                , s = n.hrefId
                                , l = window.location.href;
                            a && (l = Object(S.k)("orderId"));
                            var u = {
                                url: "pay/putPreParams",
                                errToast: 1,
                                data: {
                                    payApi: "submitLiveOrderH5WechatPay",
                                    paramData: {
                                        mobile: e,
                                        channel: r,
                                        subChannel: i,
                                        hrefId: s,
                                        state: l
                                    }
                                }
                            };
                            1 === c.courseType && (u.url = "promotion/order/submitOrderH5WechatPay",
                                u.params.paramData.paySource = 4),
                                Object(m.a)(u).then((function(e) {
                                        0 === e.code && (window.location.href = "".concat("https://kcxttg.feierlaiedu.com/pay", "?cacheCode=").concat(e.data))
                                    }
                                ))
                        }
                        ,
                        t.dialogCannel = function() {
                            t.setState({
                                dialogShow: !1
                            }),
                                S.j.reporterData({
                                    plateFrom: "Release_kuaicai_".concat(t.getPayMoney(), "_home_Again")
                                })
                        }
                        ,
                        t.handleApplyAgain = function() {
                            var e = localStorage.getItem("mobile") || "";
                            S.j.reporterData({
                                plateFrom: "Release_kuaicai_".concat(t.getPayMoney(), "_home_payAgain")
                            }),
                                t.goWxPay(e, !0)
                        }
                        ,
                        t.getQrCode = function() {
                            var e = {
                                url: "promotion/getTeacherInfo",
                                data: {
                                    orderId: t.state.orderId
                                },
                                errToast: 1
                            };
                            Object(m.a)(e).then((function(e) {
                                    0 === e.code && t.setState({
                                        classInfo: e.data
                                    }, t.toggleDialog)
                                }
                            ))
                        }
                        ,
                        t.handleClose = function() {
                            t.handleOutsideStatistics(),
                                t.toggleDialog()
                        }
                        ,
                        t.closePopState = function() {
                            t.setState({
                                showPopState: !1
                            })
                        }
                        ,
                        t.closeStartModal = function() {
                            t.setState({
                                showStartModal: !1
                            })
                        }
                        ,
                        t.state = {
                            props: e,
                            query: {},
                            active: !1,
                            showConfirm: !1,
                            form: {
                                mobile: "",
                                code: ""
                            },
                            count: 0,
                            unionId: "",
                            orderId: "",
                            classInfo: {},
                            dialogShow: !1,
                            loopTime: 0,
                            codeShow: !0,
                            pageData: {},
                            teacherQrCode: "",
                            showPopState: !1,
                            showStartModal: !1
                        },
                        t
                }
                return Object(b.a)(a, t),
                    Object(f.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.getUnionId();
                            this.getPageData(),
                                this.setState({
                                    unionId: e
                                })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("popstate", this.changePopState)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement(e, Object.assign({}, this.props, {
                                pageData: this.state.pageData,
                                handleApply: this.handleApply,
                                active: this.state.active,
                                codeShow: this.state.codeShow
                            })), this.state.showConfirm && s.a.createElement(p.a, null, s.a.createElement("div", {
                                className: "qr-code-box"
                            }, s.a.createElement("img", {
                                src: C.a,
                                alt: ""
                            }), s.a.createElement("div", {
                                className: "title"
                            }, "\u62a5\u540d\u6210\u529f"), s.a.createElement("div", {
                                className: "tips"
                            }, "\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb"), s.a.createElement("div", {
                                onClick: this.handleClose,
                                className: "btn-close"
                            }, "\u77e5\u9053\u4e86"))), this.state.dialogShow && s.a.createElement("div", {
                                className: "dialog-mask"
                            }), this.state.dialogShow && s.a.createElement("div", {
                                className: "dialog dialog3"
                            }, s.a.createElement("img", {
                                src: "https://qnunion.feierlaiedu.com/kcschool/Vu11kFtlsVN2WLGeTGz10DaU5UDPo9aN",
                                alt: ""
                            }), s.a.createElement("div", {
                                className: "dialog-btn"
                            }, s.a.createElement("div", {
                                onClick: this.dialogCannel
                            }), s.a.createElement("div", {
                                onClick: this.handleApplyAgain
                            }))), this.state.showPopState && s.a.createElement(j, {
                                visible: this.state.showPopState,
                                pageData: this.state.pageData,
                                codeShow: this.state.codeShow,
                                closePopState: this.closePopState,
                                handleApply: this.handleApply
                            }), this.state.showStartModal && s.a.createElement(E, {
                                visible: this.state.showStartModal,
                                pageData: this.state.pageData,
                                closeStartModal: this.closeStartModal
                            }))
                        }
                    }]),
                    a
            }(s.a.Component)
        };
        function T(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, o)
            }
            return a
        }
        var I = {
            mobile: localStorage.getItem("mobile") || "",
            code: ""
        };
        t.default = P((function(e) {
                var t = Object(i.useState)(0)
                    , a = t[0]
                    , n = t[1]
                    , l = Object(i.useState)(I)
                    , h = Object(r.a)(l, 2)
                    , f = h[0]
                    , g = h[1]
                    , y = Object(i.useState)("")
                    , b = Object(r.a)(y, 2)
                    , v = b[0]
                    , w = b[1]
                    , O = e.handleApply
                    , C = Object(i.useRef)(null)
                    , j = Object(i.useRef)(null)
                    , E = Object(i.useState)(!1)
                    , D = Object(r.a)(E, 2)
                    , k = D[0]
                    , P = D[1]
                    , M = Object(i.useState)(3599)
                    , _ = M[0]
                    , N = M[1]
                    , x = function() {
                    var t = e.pageData;
                    return t.payMoney > 1 ? 9 : 0 === t.payMoney ? 0 : "0.00" === t.payMoney ? 0 : t.payMoney
                }
                    , F = function(e, t) {
                    f[e] = t,
                        g(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? T(a, !0).forEach((function(t) {
                                        Object(o.a)(e, t, a[t])
                                    }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : T(a).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                    }
                                ))
                            }
                            return e
                        }({}, f))
                }
                    , q = function(e) {
                    e.current.focus()
                }
                    , A = function() {
                    var e = document.documentElement.scrollTop || document.body.scrollTop
                        , t = document.getElementById("footer");
                    t && (e >= 700 ? (t.style.position = "fixed",
                        t.style.bottom = "0",
                        t.style.left = "0") : (t.style.position = "static",
                        t.style.transform = "none"))
                };
                Object(i.useEffect)((function() {
                        return window.addEventListener("scroll", A),
                            function() {
                                window.doSettime && (clearTimeout(window.doSettime),
                                    window.doSettime = null),
                                window.doSettime1 && (clearTimeout(window.doSettime1),
                                    window.doSettime1 = null)
                            }
                    }
                ), []);
                var B = e.pageData
                    , L = B.teacherContent ? B.teacherContent : []
                    , H = null
                    , R = 0;
                1 * B.payMoney > 0 ? (H = !1,
                    R = Object(S.o)(B.payMoney)) : H = !0;
                var U = B.nextContent ? B.nextContent.split("|")[1] : ""
                    , Q = {
                    backgroundImage: "url(".concat(U, ")")
                }
                    , W = "\u514d\u8d39\u62a5\u540d";
                H || (W = "".concat(R, "\u5143\u62a2\u8d2d")),
                    W = B.buttonText ? B.buttonText : W;
                var z = B.pageHover ? 1 : 0
                    , $ = B.buttonImgUrl && "1" !== B.buttonImgUrl ? "btn-apply has-img" : "btn-apply"
                    , K = B.buttonImgUrl && "1" !== B.buttonImgUrl ? B.buttonImgUrl : "";
                return B.pageHover && !window.doSettime1 && function() {
                    var e = new Date
                        , t = e.getHours()
                        , a = e.getMinutes()
                        , o = e.getSeconds() + 1
                        , n = 0
                        , c = "";
                    a > 40 ? (n = 3600 + 60 * (60 - a) - o,
                        c = "".concat(t + 2, ":00")) : (n = 60 * (60 - a) - o,
                        c = "".concat(t + 1, ":00")),
                        N(_ = n),
                        w(c),
                        function e() {
                            window.doSettime1 = setTimeout((function() {
                                    _ > 0 && (N(_ -= 1),
                                        e())
                                }
                            ), 1e3)
                        }()
                }(),
                    s.a.createElement("div", {
                        className: "box"
                    }, B.pageHover && _ > 0 && s.a.createElement("div", {
                        className: "pageHover"
                    }, s.a.createElement("img", {
                        src: B.pageHover,
                        alt: ""
                    }), s.a.createElement("div", {
                        className: "leftFix"
                    }, "\u6d3b\u52a8\u622a\u6b62\u65f6\u95f4\uff1a", v), s.a.createElement("div", {
                        className: "rightFix"
                    }, "\u6d3b\u52a8\u4ec5\u5269", function() {
                        var e = 0
                            , t = 0
                            , a = 0;
                        (_ > 60 ? (e = parseInt(_ / 60, 10),
                            t = parseInt(_ % 60, 10)) : t = parseInt(_ % 60, 10),
                        _ > 3600) && (a = parseInt(_ / 3600, 10),
                            e = parseInt(_ % 3600 / 60, 10));
                        return e < 10 && (e = "0".concat(e)),
                        t < 10 && (t = "0".concat(t)),
                            "".concat(a, "\u5c0f\u65f6").concat(e, "\u5206\u949f").concat(t, "\u79d2")
                    }())), s.a.createElement("div", {
                        className: "wrap",
                        style: {
                            position: "relative"
                        }
                    }, B.headContent && s.a.createElement("img", {
                        className: z ? "hasTop" : "top-image",
                        src: B.headContent,
                        alt: ""
                    }), B.nextContent && s.a.createElement("div", {
                        className: "new-center",
                        style: Q
                    }, s.a.createElement("div", {
                        className: "item",
                        onClick: function() {
                            return q(C)
                        }
                    }, s.a.createElement("div", {
                        className: "sufix"
                    }, "+86"), s.a.createElement("input", {
                        ref: C,
                        placeholder: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7",
                        onChange: function(e) {
                            return F("mobile", e.target.value)
                        },
                        value: e.codeShow ? f.mobile : f.mobile.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),
                        disabled: !e.codeShow,
                        maxLength: "11",
                        type: "text"
                    })), e.codeShow && s.a.createElement("div", {
                        className: "item",
                        onClick: function() {
                            return q(j)
                        }
                    }, s.a.createElement("input", {
                        ref: j,
                        style: {
                            marginLeft: "0.11rem"
                        },
                        placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                        onChange: function(e) {
                            return F("code", e.target.value)
                        },
                        value: f.code,
                        maxLength: "6",
                        type: "text"
                    }), s.a.createElement("div", {
                        className: "btn-sms",
                        onClick: function() {
                            if (!(a > 0))
                                if (f.mobile)
                                    if (/^1\d{10}$/.test(f.mobile)) {
                                        var e = {
                                            url: "sys/sms/mobile",
                                            errToast: 1,
                                            data: {
                                                mobile: f.mobile,
                                                type: 2
                                            }
                                        };
                                        Object(m.a)(e).then((function() {
                                                c.a.success("\u5df2\u53d1\u9001", 2),
                                                    a = 60,
                                                    n(60),
                                                    function e() {
                                                        window.doSettime = setTimeout((function() {
                                                                a > 0 && (n(a -= 1),
                                                                    e())
                                                            }
                                                        ), 1e3)
                                                    }()
                                            }
                                        ))
                                    } else
                                        c.a.fail("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef", 2);
                                else
                                    c.a.fail("\u8bf7\u8f93\u5165\u624b\u673a\u53f7", 2)
                        }
                    }, a > 0 ? "".concat(a, "s") : "\u83b7\u53d6\u9a8c\u8bc1\u7801")), s.a.createElement("p", {
                        className: $,
                        onClick: function() {
                            if (f.mobile)
                                if (/^1\d{10}$/.test(f.mobile))
                                    if (!e.codeShow || f.code) {
                                        var t = {
                                            mobile: f.mobile,
                                            smsCode: f.code
                                        };
                                        _nfe.report({
                                            convert_id: "16886",
                                            convert_method: "1",
                                            convert_type: "4"
                                        }),
                                            O(t)
                                    } else
                                        c.a.fail("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", 2);
                                else
                                    c.a.fail("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef", 2);
                            else
                                c.a.fail("\u8bf7\u8f93\u5165\u624b\u673a\u53f7", 2)
                        }
                    }, "" !== K && s.a.createElement("img", {
                        className: "button-img",
                        src: B.buttonImgUrl,
                        alt: ""
                    }), "" === K && W), s.a.createElement("div", {
                        className: "user_use"
                    }, s.a.createElement("span", null, "\u63d0\u4ea4\u5373\u89c6\u4e3a\u60a8\u5df2\u540c\u610f ", s.a.createElement("a", {
                        onClick: function() {
                            P(!0)
                        }
                    }, "\u300a\u4e2a\u4eba\u4fe1\u606f\u4e0e\u4fdd\u62a4\u58f0\u660e\u300b")))), B.centerCentent && s.a.createElement("img", {
                        className: "btn-img1",
                        src: B.centerCentent,
                        alt: ""
                    })), s.a.createElement("div", {
                        className: "wrap1"
                    }, L.length > 0 && s.a.createElement("div", {
                        className: "swiper"
                    }, s.a.createElement(u.a, {
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: !0
                        },
                        autoplay: !0,
                        direction: "horizontal",
                        loop: !0,
                        slidesPerView: "auto",
                        centeredSlides: !0
                    }, L.map((function(e, t) {
                            return s.a.createElement("div", {
                                key: t
                            }, s.a.createElement("img", {
                                src: e.picUrl,
                                alt: ""
                            }))
                        }
                    )))), B.tailContent && s.a.createElement("img", {
                        className: "btn-img1",
                        src: B.tailContent,
                        alt: ""
                    })), s.a.createElement("footer", null, B.buttonContent && s.a.createElement("img", {
                        className: "footer-btn",
                        id: "footer",
                        onClick: function() {
                            if (document.querySelector(".top-image")) {
                                var e = document.querySelector(".top-image").offsetHeight;
                                window.scrollTo(0, 1 * e - 100),
                                    S.j.reporterData({
                                        plateFrom: "Release_qiniu_".concat(x(), "_home_down")
                                    })
                            }
                        },
                        src: B.buttonContent,
                        alt: ""
                    })), k ? s.a.createElement(p.a, null, s.a.createElement("div", {
                        className: "dialog dialog_agreement"
                    }, s.a.createElement("div", {
                        className: "close_icon"
                    }, s.a.createElement("img", {
                        className: "dialog_img",
                        onClick: function() {
                            return P(!1)
                        },
                        src: "https://qnunion.feierlaiedu.com/kcschool/Njp6xoMuYaEqjNu84EfewNPOvH9EhxHH",
                        alt: ""
                    })), Object(d.a)())) : "")
            }
        ))
    }
}]);
//# sourceMappingURL=72.5f4ff23b.chunk.js.map
