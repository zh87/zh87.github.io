(function (e) {
    function t(t) {
        for (var o, r, s = t[0], l = t[1], c = t[2], u = 0, p = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty
            .call(a, r) && a[r] && p.push(a[r][0]), a[r] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        d && d(t);
        while (p.length) p.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== a[l] && (o = !1)
            }
            o && (i.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            app: 0
        },
        i = [];

    function r(e) {
        return s.p + "js/" + ({} [e] || e) + "." + {
            "chunk-2186eb93": "1280754e",
            "chunk-24cf1055": "b718d965",
            "chunk-2d0b8efe": "471bff69",
            "chunk-2d0e1fae": "a7a52877",
            "chunk-2d0e5763": "25955f07",
            "chunk-2d22c0e5": "a4a48edd",
            "chunk-2d2371df": "d65e544c",
            "chunk-4a584a51": "154a5a10",
            "chunk-763adf34": "2ebb6f85",
            "chunk-88c33f72": "0a02db24",
            "chunk-d6a017aa": "9e3ad58e",
            "chunk-dbbea3ba": "4d9262f4",
            "chunk-f3578d44": "42e32399",
            "chunk-fa56ed4c": "79601b86"
        } [e] + ".js"
    }

    function s(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function (e) {
        var t = [],
            n = a[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise((function (t, o) {
                    n = a[e] = [t, o]
                }));
                t.push(n[2] = o);
                var i, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = r(e);
                var c = new Error;
                i = function (t) {
                    l.onerror = l.onload = null, clearTimeout(u);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", c.name =
                                "ChunkLoadError", c.type = o, c.request = i, n[1](c)
                        }
                        a[e] = void 0
                    }
                };
                var u = setTimeout((function () {
                    i({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = i, document.head.appendChild(l)
            } return Promise.all(t)
    }, s.m = e, s.c = o, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) s.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s.oe = function (e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var u = 0; u < l.length; u++) t(l[u]);
    var d = c;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "002d": function (e, t) {
        e.exports = iview
    },
    "1a88": function (e, t, n) {
        var o = n("9f0e");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("7e7895fb", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "1d49": function (e, t, n) {
        "use strict";
        n("216b")
    },
    "216b": function (e, t, n) {
        var o = n("cbc4");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("4620510d", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    2660: function (e, t, n) {
        var o = n("f691");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("6246d32f", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    2785: function (e, t, n) {
        var o = n("a4d8");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("10d11114", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "2a1c": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".main .logo-con{height:64px;padding:10px}.main .logo-con img{height:44px;width:auto;display:block;margin:0 auto}.main .header-con{background:#fff;padding:0 20px;width:100%}.main .main-layout-con{height:100%;overflow:hidden}.main .main-content-con{height:calc(100% - 60px);overflow:hidden}.main .tag-nav-wrapper{padding:0;height:40px;background:#f0f0f0}.main .content-wrapper{padding:18px;height:calc(100% - 80px);overflow:auto}.main .left-sider .ivu-layout-sider-children{overflow-y:scroll;margin-right:-18px}.ivu-menu-item>i{margin-right:12px!important}.ivu-menu-submenu>.ivu-menu>.ivu-menu-item>i{margin-right:8px!important}.collased-menu-dropdown{width:100%;margin:0;line-height:normal;padding:7px 0 6px 16px;clear:both;font-size:12px!important;white-space:nowrap;list-style:none;cursor:pointer;-webkit-transition:background .2s ease-in-out;transition:background .2s ease-in-out}.collased-menu-dropdown:hover{background:hsla(0,0%,39.2%,.1)}.collased-menu-dropdown *{color:#515a6e}.collased-menu-dropdown .ivu-menu-item>i{margin-right:12px!important}.collased-menu-dropdown .ivu-menu-submenu>.ivu-menu>.ivu-menu-item>i{margin-right:8px!important}.ivu-select-dropdown.ivu-dropdown-transfer{max-height:400px}",
            ""])
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var o = n("8bbf"),
            a = n.n(o),
            i = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view")], 1)
            },
            r = [],
            s = {
                name: "App"
            },
            l = s,
            c = (n("7c55"), n("2877")),
            u = Object(c["a"])(l, i, r, !1, null, null, null),
            d = u.exports,
            p = n("6389"),
            h = n.n(p),
            m = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("Layout", {
                    staticClass: "main",
                    staticStyle: {
                        height: "100%"
                    }
                }, [n("Sider", {
                    staticClass: "left-sider",
                    style: {
                        overflow: "hidden"
                    },
                    attrs: {
                        "hide-trigger": "",
                        collapsible: "",
                        width: 200,
                        "collapsed-width": 64
                    },
                    model: {
                        value: e.collapsed,
                        callback: function (t) {
                            e.collapsed = t
                        },
                        expression: "collapsed"
                    }
                }, [n("side-menu", {
                    ref: "sideMenu",
                    attrs: {
                        accordion: "",
                        "active-name": e.$route.name,
                        collapsed: e.collapsed,
                        "menu-list": e.menuList
                    },
                    on: {
                        "on-select": e.turnToPage
                    }
                })], 1), n("Layout", [n("Header", {
                    staticClass: "header-con"
                }, [n("header-bar", {
                    attrs: {
                        collapsed: e.collapsed
                    },
                    on: {
                        "on-coll-change": e.handleCollapsedChange
                    }
                }, [e.$config.useI18n ? n("language", {
                    attrs: {
                        lang: e.local
                    },
                    on: {
                        "on-lang-change": e.setLocal
                    }
                }) : e._e(), n("div", [n("Button", {
                    staticStyle: {
                        "margin-right": "10px"
                    },
                    attrs: {
                        icon: "md-undo",
                        type: "error"
                    },
                    on: {
                        click: function (t) {
                            e.reset_warning = !0
                        }
                    }
                }, [e._v(e._s(e.$t("reset")))])], 1), n("div", [n("Button", {
                    staticStyle: {
                        "margin-right": "15px"
                    },
                    attrs: {
                        icon: "md-download",
                        type: "success",
                        disabled: !e.modified,
                        loading: e.save_loading
                    },
                    on: {
                        click: e.save
                    }
                }, [e._v(e._s(e.$t("save")))])], 1), n("Modal", {
                    attrs: {
                        width: "360"
                    },
                    model: {
                        value: e.reset_warning,
                        callback: function (t) {
                            e.reset_warning = t
                        },
                        expression: "reset_warning"
                    }
                }, [n("p", {
                        staticStyle: {
                            color: "#f60",
                            "text-align": "center"
                        },
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [n("Icon", {
                        attrs: {
                            type: "ios-information-circle"
                        }
                    }), n("span", [e._v(e._s(e.$t("warning")))])],
                    1), n("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("p", [e._v(e._s(e.$t("reset_tips1")))]),
                    n("p", [e._v(e._s(e.$t("reset_tips2")))])]), n(
                    "div", {
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("Button", {
                        attrs: {
                            type: "error",
                            long: "",
                            loading: e.reset_loading
                        },
                        on: {
                            click: e.reset
                        }
                    }, [e._v(e._s(e.$t("reset")))])], 1)])], 1)], 1), n("Content", {
                    staticClass: "main-content-con"
                }, [n("Layout", {
                    staticClass: "main-layout-con"
                }, [n("Content", {
                    staticClass: "content-wrapper"
                }, [n("router-view")], 1)], 1)], 1)], 1)], 1)
            },
            f = [],
            g = (n("8e6e"), n("ac6a"), n("456d"), n("28a5"), n("7f7f"), n("bd86")),
            b = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "side-menu-wrapper"
                }, [e._t("default"), n("Menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.collapsed,
                        expression: "!collapsed"
                    }],
                    ref: "menu",
                    attrs: {
                        "active-name": e.activeName,
                        "open-names": e.openedNames,
                        accordion: e.accordion,
                        theme: e.theme,
                        width: "auto"
                    },
                    on: {
                        "on-select": e.handleSelect
                    }
                }, [e._l(e.menuList, (function (t) {
                    return [t.children && 1 === t.children.length ? [e.showChildren(
                        t) ? n("side-menu-item", {
                        key: "menu-" + t.name,
                        attrs: {
                            "parent-item": t
                        }
                    }) : n("menu-item", {
                        key: "menu-" + t.children[0].name,
                        attrs: {
                            name: e.getNameOrHref(t, !0)
                        }
                    }, [n("Icon", {
                        attrs: {
                            type: t.children[0].icon || ""
                        }
                    }), n("span", [e._v(e._s(e.showTitle(t.children[
                        0])))])], 1)] : [e.showChildren(t) ? n(
                        "side-menu-item", {
                            key: "menu-" + t.name,
                            attrs: {
                                "parent-item": t
                            }
                        }) : n("menu-item", {
                        key: "menu-" + t.name,
                        attrs: {
                            name: e.getNameOrHref(t)
                        }
                    }, [n("Icon", {
                        attrs: {
                            type: t.icon || ""
                        }
                    }), n("span", [e._v(e._s(e.showTitle(t)))])], 1)]]
                }))], 2), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.collapsed,
                        expression: "collapsed"
                    }],
                    staticClass: "menu-collapsed",
                    attrs: {
                        list: e.menuList
                    }
                }, [e._l(e.menuList, (function (t) {
                    return [t.children && t.children.length > 1 ? n(
                        "collapsed-menu", {
                            key: "drop-menu-" + t.name,
                            attrs: {
                                "hide-title": "",
                                "root-icon-size": e.rootIconSize,
                                "icon-size": e.iconSize,
                                theme: e.theme,
                                "parent-item": t
                            },
                            on: {
                                "on-click": e.handleSelect
                            }
                        }) : n("Tooltip", {
                        key: "drop-menu-" + t.name,
                        attrs: {
                            transfer: "",
                            content: e.showTitle(t.children && t.children[
                                0] ? t.children[0] : t),
                            placement: "right"
                        }
                    }, [n("a", {
                        staticClass: "drop-menu-a",
                        style: {
                            textAlign: "center"
                        },
                        on: {
                            click: function (n) {
                                e.handleSelect(e.getNameOrHref(
                                    t, !0))
                            }
                        }
                    }, [n("Icon", {
                        attrs: {
                            size: e.rootIconSize,
                            color: e.textColor,
                            type: t.icon || t.children &&
                                t.children[0].icon
                        }
                    })], 1)])]
                }))], 2)], 2)
            },
            _ = [],
            w = (n("c5f6"), function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("Submenu", {
                    attrs: {
                        name: "" + e.parentName
                    }
                }, [n("template", {
                    slot: "title"
                }, [n("Icon", {
                    attrs: {
                        type: e.parentItem.icon || ""
                    }
                }), n("span", [e._v(e._s(e.showTitle(e.parentItem)))])], 1), e._l(e.children, (
                    function (t) {
                        return [t.children && 1 === t.children.length ? [e.showChildren(t) ?
                            n("side-menu-item", {
                                key: "menu-" + t.name,
                                attrs: {
                                    "parent-item": t
                                }
                            }) : n("menu-item", {
                                key: "menu-" + t.children[0].name,
                                attrs: {
                                    name: e.getNameOrHref(t, !0)
                                }
                            }, [n("Icon", {
                                attrs: {
                                    type: t.children[0].icon || ""
                                }
                            }), n("span", [e._v(e._s(e.showTitle(t.children[
                                0])))])], 1)] : [e.showChildren(t) ? n(
                            "side-menu-item", {
                                key: "menu-" + t.name,
                                attrs: {
                                    "parent-item": t
                                }
                            }) : n("menu-item", {
                            key: "menu-" + t.name,
                            attrs: {
                                name: e.getNameOrHref(t)
                            }
                        }, [n("Icon", {
                            attrs: {
                                type: t.icon || ""
                            }
                        }), n("span", [e._v(e._s(e.showTitle(t)))])], 1)]]
                    }))], 2)
            }),
            y = [],
            v = (n("a481"), n("6762"), n("2fdb"), {
                title: "MouseInc",
                version: [""],
                useI18n: !0,
                homeName: "switch",
                assetsPublicPath: "./"
            }),
            k = n("75fc"),
            x = (n("4f7f"), n("5df3"), n("1c4c"), function (e, t) {
                if (e.length && t) {
                    var n = -1,
                        o = e.length;
                    while (++n < o) {
                        var a = e[n];
                        t(a, n, e)
                    }
                }
            }),
            C = function (e, t) {
                return Array.from(new Set([].concat(Object(k["a"])(e), Object(k["a"])(t))))
            };
        (function () {
            document.addEventListener
        })(),
        function () {
            document.removeEventListener
        }();

        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function (t) {
                    Object(g["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(
                    n)) : S(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var M = v.title,
            T = v.version,
            j = v.useI18n,
            L = function (e) {
                return e.children && 0 !== e.children.length
            },
            N = function (e, t) {
                return !0
            },
            I = function e(t, n) {
                var o = [];
                return x(t, (function (t) {
                    if (!t.meta || t.meta && !t.meta.hideInMenu) {
                        var a = {
                            icon: t.meta && t.meta.icon || "",
                            name: t.name,
                            meta: t.meta
                        };
                        (L(t) || t.meta && t.meta.showAlways) && N(t, n) && (a.children = e(t.children,
                            n)), t.meta && t.meta.href && (a.href = t.meta.href), N(t, n) && o.push(
                            a)
                    }
                })), o
            },
            $ = function (e) {
                var t = e.matched,
                    n = t.filter((function (e) {
                        return void 0 === e.meta || !e.meta.hideInBread
                    })).map((function (t) {
                        var n = O({}, t.meta);
                        n.title && "function" === typeof n.title && (n.__titleIsFunction__ = !0, n.title =
                            n.title(e));
                        var o = {
                            icon: t.meta && t.meta.icon || "",
                            name: t.name,
                            meta: n
                        };
                        return o
                    }));
                return n
            },
            A = function (e) {
                var t = O({}, e),
                    n = O({}, e.meta),
                    o = "";
                return n.title && ("function" === typeof n.title ? (n.__titleIsFunction__ = !0, o = n.title(t)) :
                    o = n.title), n.title = o, t.meta = n, t
            },
            z = function (e, t) {
                var n = e.meta,
                    o = n.title,
                    a = n.__titleIsFunction__;
                if (o) return o = j ? o.includes("{{") && o.includes("}}") && j ? o.replace(/({{[\s\S]+?}})/, (
                    function (e, n) {
                        return n.replace(/{{([\s\S]*)}}/, (function (e, n) {
                            return t.$t(n.trim())
                        }))
                    })) : a ? e.meta.title : t.$t(e.name) : e.meta && e.meta.title || e.name, o
            },
            B = function (e) {
                var t = e.split("?")[1].split("&"),
                    n = {};
                return t.forEach((function (e) {
                    var t = e.split("=");
                    n[t[0]] = t[1]
                })), n
            },
            P = function e(t, n) {
                var o = t.parentNode;
                if (o) {
                    var a = o.classList;
                    return a && n.every((function (e) {
                        return a.contains(e)
                    })) ? o : e(o, n)
                }
            },
            E = function (e, t) {
                localStorage.setItem(e, t)
            },
            R = function (e) {
                return localStorage.getItem(e) || ""
            },
            D = function (e, t) {
                var n, o = A(e),
                    a = z(o, t);
                n = (T[0], a ? "".concat(a, " - ").concat(M, " ").concat(T[0]) : M), window.document.title = n
            },
            W = {
                components: {},
                methods: {
                    showTitle: function (e) {
                        return z(e, this)
                    },
                    showChildren: function (e) {
                        return e.children && (e.children.length > 1 || e.meta && e.meta.showAlways)
                    },
                    getNameOrHref: function (e, t) {
                        return e.href ? "isTurnByHref_".concat(e.href) : t ? e.children[0].name : e.name
                    }
                }
            },
            q = {
                props: {
                    parentItem: {
                        type: Object,
                        default: function () {}
                    },
                    theme: String,
                    iconSize: Number
                },
                computed: {
                    parentName: function () {
                        return this.parentItem.name
                    },
                    children: function () {
                        return this.parentItem.children
                    },
                    textColor: function () {
                        return "dark" === this.theme ? "#fff" : "#495060"
                    }
                }
            },
            H = {
                name: "SideMenuItem",
                mixins: [W, q]
            },
            U = H,
            F = Object(c["a"])(U, w, y, !1, null, null, null),
            G = F.exports,
            V = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("Dropdown", {
                    ref: "dropdown",
                    class: e.hideTitle ? "" : "collased-menu-dropdown",
                    attrs: {
                        transfer: e.hideTitle,
                        placement: e.placement
                    },
                    on: {
                        "on-click": e.handleClick
                    }
                }, [n("a", {
                    staticClass: "drop-menu-a",
                    style: {
                        textAlign: e.hideTitle ? "" : "left"
                    },
                    attrs: {
                        type: "text"
                    },
                    on: {
                        mouseover: function (t) {
                            return e.handleMousemove(t, e.children)
                        }
                    }
                }, [n("Icon", {
                    attrs: {
                        size: e.rootIconSize,
                        color: e.textColor,
                        type: e.parentItem.icon
                    }
                }), e.hideTitle ? e._e() : n("span", {
                    staticClass: "menu-title"
                }, [e._v(e._s(e.showTitle(e.parentItem)))]), e.hideTitle ? e._e() : n(
                    "Icon", {
                        staticStyle: {
                            float: "right"
                        },
                        attrs: {
                            type: "ios-arrow-forward",
                            size: 16
                        }
                    })], 1), n("DropdownMenu", {
                    ref: "dropdown",
                    attrs: {
                        slot: "list"
                    },
                    slot: "list"
                }, [e._l(e.children, (function (t) {
                    return [e.showChildren(t) ? n("collapsed-menu", {
                        key: "drop-" + t.name,
                        attrs: {
                            "icon-size": e.iconSize,
                            "parent-item": t
                        }
                    }) : n("DropdownItem", {
                        key: "drop-" + t.name,
                        attrs: {
                            name: t.name
                        }
                    }, [n("Icon", {
                        attrs: {
                            size: e.iconSize,
                            type: t.icon
                        }
                    }), n("span", {
                        staticClass: "menu-title"
                    }, [e._v(e._s(e.showTitle(t)))])], 1)]
                }))], 2)], 1)
            },
            K = [],
            X = {
                name: "CollapsedMenu",
                mixins: [W, q],
                props: {
                    hideTitle: {
                        type: Boolean,
                        default: !1
                    },
                    rootIconSize: {
                        type: Number,
                        default: 16
                    }
                },
                data: function () {
                    return {
                        placement: "right-end"
                    }
                },
                methods: {
                    handleClick: function (e) {
                        this.$emit("on-click", e)
                    },
                    handleMousemove: function (e, t) {
                        var n = e.pageY,
                            o = 38 * t.length,
                            a = n + o < window.innerHeight;
                        this.placement = a ? "right-start" : "right-end"
                    }
                },
                mounted: function () {
                    var e = P(this.$refs.dropdown.$el, ["ivu-select-dropdown", "ivu-dropdown-transfer"]);
                    e && (e.style.overflow = "visible")
                }
            },
            Y = X,
            J = Object(c["a"])(Y, V, K, !1, null, null, null),
            Z = J.exports,
            Q = {
                name: "SideMenu",
                mixins: [W],
                components: {
                    SideMenuItem: G,
                    CollapsedMenu: Z
                },
                props: {
                    menuList: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    collapsed: {
                        type: Boolean
                    },
                    theme: {
                        type: String,
                        default: "dark"
                    },
                    rootIconSize: {
                        type: Number,
                        default: 20
                    },
                    iconSize: {
                        type: Number,
                        default: 16
                    },
                    accordion: Boolean,
                    activeName: {
                        type: String,
                        default: ""
                    },
                    openNames: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                data: function () {
                    return {
                        openedNames: []
                    }
                },
                methods: {
                    handleSelect: function (e) {
                        this.$emit("on-select", e)
                    },
                    getOpenedNamesByActiveName: function (e) {
                        return this.$route.matched.map((function (e) {
                            return e.name
                        })).filter((function (t) {
                            return t !== e
                        }))
                    },
                    updateOpenName: function (e) {
                        e === this.$config.homeName ? this.openedNames = [] : this.openedNames = this.getOpenedNamesByActiveName(
                            e)
                    }
                },
                computed: {
                    textColor: function () {
                        return "dark" === this.theme ? "#fff" : "#495060"
                    }
                },
                watch: {
                    activeName: function (e) {
                        this.accordion ? this.openedNames = this.getOpenedNamesByActiveName(e) : this.openedNames =
                            C(this.openedNames, this.getOpenedNamesByActiveName(e))
                    },
                    openNames: function (e) {
                        this.openedNames = e
                    },
                    openedNames: function () {
                        var e = this;
                        this.$nextTick((function () {
                            e.$refs.menu.updateOpened()
                        }))
                    }
                },
                mounted: function () {
                    this.openedNames = C(this.openedNames, this.getOpenedNamesByActiveName(name))
                }
            },
            ee = Q,
            te = (n("b554"), Object(c["a"])(ee, b, _, !1, null, null, null)),
            ne = te.exports,
            oe = ne,
            ae = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "header-bar"
                }, [n("sider-trigger", {
                    attrs: {
                        collapsed: e.collapsed,
                        icon: "md-menu"
                    },
                    on: {
                        "on-change": e.handleCollpasedChange
                    }
                }), n("custom-bread-crumb", {
                    staticStyle: {
                        "margin-left": "20px"
                    },
                    attrs: {
                        "show-icon": "",
                        list: e.breadCrumbList
                    }
                }), n("div", {
                    staticClass: "custom-content-con"
                }, [e._t("default")], 2)], 1)
            },
            ie = [],
            re = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a", {
                    class: ["sider-trigger-a", e.collapsed ? "collapsed" : ""],
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: e.handleChange
                    }
                }, [n("Icon", {
                    attrs: {
                        type: e.icon,
                        size: e.size
                    }
                })], 1)
            },
            se = [],
            le = {
                name: "siderTrigger",
                props: {
                    collapsed: Boolean,
                    icon: {
                        type: String,
                        default: "navicon-round"
                    },
                    size: {
                        type: Number,
                        default: 26
                    }
                },
                methods: {
                    handleChange: function () {
                        this.$emit("on-change", !this.collapsed)
                    }
                }
            },
            ce = le,
            ue = (n("b858"), Object(c["a"])(ce, re, se, !1, null, null, null)),
            de = ue.exports,
            pe = de,
            he = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "custom-bread-crumb"
                }, [n("Breadcrumb", {
                    style: {
                        fontSize: e.fontSize + "px"
                    }
                }, e._l(e.list, (function (t) {
                    return n("BreadcrumbItem", {
                        key: "bread-crumb-" + t.name,
                        attrs: {
                            to: t.to
                        }
                    }, [n("Icon", {
                        staticStyle: {
                            "margin-right": "4px"
                        },
                        attrs: {
                            type: t.meta.icon || ""
                        }
                    }), e._v("\n      " + e._s(e.showTitle(t)) + "\n    ")], 1)
                })), 1)], 1)
            },
            me = [],
            fe = (n("2785"), {
                name: "customBreadCrumb",
                components: {},
                props: {
                    list: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    fontSize: {
                        type: Number,
                        default: 14
                    }
                },
                methods: {
                    showTitle: function (e) {
                        return z(e, this)
                    }
                }
            }),
            ge = fe,
            be = Object(c["a"])(ge, he, me, !1, null, null, null),
            _e = be.exports,
            we = _e,
            ye = (n("1a88"), {
                name: "HeaderBar",
                components: {
                    siderTrigger: pe,
                    customBreadCrumb: we
                },
                props: {
                    collapsed: Boolean
                },
                computed: {
                    breadCrumbList: function () {
                        return this.$store.state.app.breadCrumbList
                    }
                },
                methods: {
                    handleCollpasedChange: function (e) {
                        this.$emit("on-coll-change", e)
                    }
                }
            }),
            ve = ye,
            ke = Object(c["a"])(ve, ae, ie, !1, null, null, null),
            xe = ke.exports,
            Ce = xe,
            Se = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("Dropdown", {
                    attrs: {
                        trigger: "click"
                    },
                    on: {
                        "on-click": e.selectLang
                    }
                }, [n("a", {
                    attrs: {
                        href: "javascript:void(0)"
                    }
                }, [n("Icon", {
                    attrs: {
                        size: 18,
                        type: "md-planet"
                    }
                }), e._v("\n      " + e._s(e.title) + "\n      "), n("Icon", {
                    attrs: {
                        size: 18,
                        type: "md-arrow-dropdown"
                    }
                })], 1), n("DropdownMenu", {
                    attrs: {
                        slot: "list"
                    },
                    slot: "list"
                }, e._l(e.localList, (function (t, o) {
                    return n("DropdownItem", {
                        key: "lang-" + o,
                        attrs: {
                            name: o
                        }
                    }, [e._v(e._s(t))])
                })), 1)], 1)], 1)
            },
            Oe = [],
            Me = {
                name: "Language",
                props: {
                    lang: String
                },
                data: function () {
                    return {
                        langList: {
                            "zh-CN": "语言",
                            "zh-TW": "語言",
                            "en-US": "Lang"
                        },
                        localList: {
                            "zh-CN": "中文简体",
                            "zh-TW": "中文繁体",
                            "en-US": "English"
                        }
                    }
                },
                watch: {
                    lang: function (e) {
                        this.$i18n.locale = e
                    }
                },
                computed: {
                    title: function () {
                        return this.langList[this.lang]
                    }
                },
                methods: {
                    selectLang: function (e) {
                        this.$emit("on-lang-change", e)
                    }
                }
            },
            Te = Me,
            je = Object(c["a"])(Te, Se, Oe, !1, null, null, null),
            Le = je.exports,
            Ne = Le,
            Ie = n("5880"),
            $e = n.n(Ie),
            Ae = (n("386d"), n("d225")),
            ze = n("b0b4"),
            Be = n("cebe"),
            Pe = n.n(Be),
            Ee = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : baseURL;
                    Object(Ae["a"])(this, e), this.baseUrl = t, this.queue = {}
                }
                return Object(ze["a"])(e, [{
                    key: "getInsideConfig",
                    value: function () {
                        var e = {
                            baseURL: this.baseUrl,
                            headers: {}
                        };
                        return e
                    }
                }, {
                    key: "destroy",
                    value: function (e) {
                        delete this.queue[e], Object.keys(this.queue).length
                    }
                }, {
                    key: "interceptors",
                    value: function (e, t) {
                        var n = this;
                        e.interceptors.request.use((function (e) {
                            return Object.keys(n.queue).length, n.queue[t] = !0, e
                        }), (function (e) {
                            return Promise.reject(e)
                        })), e.interceptors.response.use((function (e) {
                            n.destroy(t);
                            var o = e.data,
                                a = e.status;
                            return {
                                data: o,
                                status: a
                            }
                        }), (function (e) {
                            return n.destroy(t), console.error(e), Promise.reject(e)
                        }))
                    }
                }, {
                    key: "request",
                    value: function (e) {
                        var t = Pe.a.create();
                        return e = Object.assign(this.getInsideConfig(), e), this.interceptors(
                            t, e.url), t(e)
                    }
                }]), e
            }(),
            Re = Ee,
            De = B(location.search || "?")["port"];
        De = De || 80;
        var We = new Re("http://127.0.0.1:" + De),
            qe = We,
            He = function () {
                return qe.request({
                    url: "/load_settings",
                    data: {},
                    method: "post",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            Ue = function (e) {
                return qe.request({
                    url: "/save_settings",
                    data: e,
                    method: "post",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            Fe = function () {
                return qe.request({
                    url: "/reset_settings",
                    data: {},
                    method: "post",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            Ge = function () {
                return qe.request({
                    url: "/ping",
                    data: {},
                    method: "post",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                })
            },
            Ve = n("8af1"),
            Ke = n.n(Ve);
        n("7a3c");

        function Xe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Xe(Object(n), !0).forEach((function (t) {
                    Object(g["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(
                    n)) : Xe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Je = v.version,
            Ze = {
                name: "Main",
                components: {
                    SideMenu: oe,
                    HeaderBar: Ce,
                    Language: Ne
                },
                data: function () {
                    return {
                        init: !1,
                        modified: !1,
                        collapsed: !1,
                        loading: "Loading",
                        reset_warning: !1,
                        reset_loading: !1,
                        save_loading: !1
                    }
                },
                computed: Ye(Ye({}, Object(Ie["mapGetters"])(["cfg"])), {}, {
                    menuList: function () {
                        return this.$store.getters.menuList
                    },
                    local: function () {
                        return this.$store.state.app.local
                    }
                }),
                methods: Ye(Ye({}, Object(Ie["mapMutations"])(["setBreadCrumb", "setLocal", "setSettings"])), {}, {
                    turnToPage: function (e) {
                        var t = {},
                            n = t.name,
                            o = t.params,
                            a = t.query;
                        "string" === typeof e ? n = e : (n = e.name, o = e.params, a = e.query), n.indexOf(
                                "isTurnByHref_") > -1 ? window.open(n.split("_")[1]) : this.$router
                            .push({
                                name: n,
                                params: o,
                                query: a
                            }).catch((function () {}))
                    },
                    handleCollapsedChange: function (e) {
                        this.collapsed = e
                    },
                    reset: function () {
                        var e = this;
                        this.reset_loading = !0, Fe().then((function (t) {
                            e.init = !1, e.modified = !1, e.setSettings(t.data), e.$Message
                                .success(e.$t("reset_ok"))
                        })).catch((function (t) {
                            e.$Message.error(t.message)
                        })).then((function () {
                            e.reset_loading = !1, e.reset_warning = !1
                        }))
                    },
                    save: function () {
                        var e = this;
                        this.save_loading = !0, this.$Loading.start();
                        var t = Ke.a.js(JSON.stringify(this.cfg), {
                            indent_size: 4,
                            indent_with_tabs: !0,
                            eol: "\r\n"
                        });
                        Ue(t).then((function (t) {
                            e.init = !1, e.modified = !1, e.setSettings(t.data), e.$Message
                                .success(e.$t("save_ok")), e.$Loading.finish()
                        })).catch((function (t) {
                            e.$Message.error(t.message), e.$Loading.error()
                        })).then((function () {
                            e.save_loading = !1
                        }))
                    },
                    heartbeat: function () {
                        var e = this;
                        Ge().then((function (t) {
                            e.timer = setTimeout(e.heartbeat, 1e3)
                        })).catch((function () {
                            e.$Spin.show({
                                render: function (e) {
                                    return e("div",
                                        "设置连接通道错误，可能是MouseInc主程序已经退出")
                                }
                            })
                        })).then((function () {}))
                    }
                }),
                watch: {
                    $route: function (e) {
                        this.setBreadCrumb(e), this.$refs.sideMenu.updateOpenName(e.name)
                    },
                    "$store.state.settings.cfg": {
                        handler: function (e) {
                            this.init && (this.modified = !0), this.init = !0
                        },
                        deep: !0
                    }
                },
                mounted: function () {
                    var e = this;
                    this.setBreadCrumb(this.$route), this.setLocal(this.$i18n.locale), this.$Message.config({
                        top: 50,
                        background: !0,
                        duration: 5
                    }), this.$Spin.show({
                        render: function (t) {
                            return t("div", [t("Icon", {
                                class: "demo-spin-icon-load",
                                props: {
                                    type: "ios-loading",
                                    size: 32
                                }
                            }), t("div", e.loading)])
                        }
                    }), He().then((function (t) {
                        e.$Spin.hide(), e.init = !1, e.modified = !1, e.setSettings(t.data), e.timer =
                            setTimeout(e.heartbeat, 1e3), Je[0] = t.data.version, 1 === t.data.admin ?
                            Je[0] += "A" : Je[0] += "B", D(e.$router.currentRoute, e.$router.app),
                            "2.10.21" !== t.data.version && e.$Message.error({
                                content: "当前使用的MouseInc版本较低，建议您升级",
                                background: !0,
                                duration: 86400
                            })
                    })).catch((function (t) {
                        e.loading = t.message
                    }))
                }
            },
            Qe = Ze,
            et = (n("1d49"), Object(c["a"])(Qe, m, f, !1, null, null, null)),
            tt = et.exports,
            nt = tt,
            ot = [{
                path: "/doc",
                name: "doc",
                meta: {
                    title: "doc",
                    href: "https://docs.shuax.com/MouseInc/#/",
                    icon: "md-book"
                }
            }, {
                path: "/",
                name: "index",
                redirect: "/switch",
                component: nt,
                meta: {
                    icon: "md-home",
                    title: "index"
                },
                children: [{
                    path: "/switch",
                    name: "switch",
                    meta: {
                        title: "switch",
                        icon: "md-flash"
                    },
                    component: function () {
                        return n.e("chunk-fa56ed4c").then(n.bind(null, "f1c8"))
                    }
                }, {
                    path: "exclude",
                    name: "exclude",
                    meta: {
                        icon: "md-warning",
                        title: "exclude"
                    },
                    component: function () {
                        return n.e("chunk-2d2371df").then(n.bind(null, "fa6d"))
                    }
                }]
            }, {
                path: "/gesture",
                name: "gesture",
                meta: {
                    icon: "md-settings",
                    title: "gesture"
                },
                component: nt,
                children: [{
                    path: "settings",
                    name: "settings",
                    meta: {
                        icon: "md-color-palette",
                        title: "settings"
                    },
                    component: function () {
                        return n.e("chunk-2d0e1fae").then(n.bind(null, "7d6a"))
                    }
                }, {
                    path: "list",
                    name: "list",
                    meta: {
                        icon: "ios-keypad",
                        title: "list"
                    },
                    component: function () {
                        return n.e("chunk-24cf1055").then(n.bind(null, "a5b3"))
                    }
                }, {
                    path: "global",
                    name: "global",
                    meta: {
                        icon: "md-cube",
                        title: "global"
                    },
                    component: function () {
                        return n.e("chunk-2186eb93").then(n.bind(null, "4abf"))
                    }
                }, {
                    path: "custom",
                    name: "custom",
                    meta: {
                        icon: "md-appstore",
                        title: "custom"
                    },
                    component: function () {
                        return n.e("chunk-763adf34").then(n.bind(null, "7c15"))
                    }
                }, {
                    path: "demo",
                    name: "demo",
                    meta: {
                        icon: "md-bulb",
                        title: "demo"
                    },
                    component: function () {
                        return n.e("chunk-2d0b8efe").then(n.bind(null, "318b"))
                    }
                }]
            }, {
                path: "/other",
                name: "other",
                meta: {
                    icon: "md-options",
                    title: "other"
                },
                component: nt,
                children: [{
                    path: "edge",
                    name: "edge",
                    meta: {
                        icon: "md-desktop",
                        title: "edge"
                    },
                    component: function () {
                        return n.e("chunk-f3578d44").then(n.bind(null, "0597"))
                    }
                }, {
                    path: "corner",
                    name: "corner",
                    meta: {
                        icon: "md-expand",
                        title: "corner"
                    },
                    component: function () {
                        return n.e("chunk-88c33f72").then(n.bind(null, "9069"))
                    }
                }, {
                    path: "copy",
                    name: "copy",
                    meta: {
                        icon: "md-link",
                        title: "copy"
                    },
                    component: function () {
                        return n.e("chunk-4a584a51").then(n.bind(null, "f424"))
                    }
                }, {
                    path: "hotkey",
                    name: "hotkey",
                    meta: {
                        icon: "md-key",
                        title: "hotkey"
                    },
                    component: function () {
                        return n.e("chunk-dbbea3ba").then(n.bind(null, "7896"))
                    }
                }, {
                    path: "keycast",
                    name: "keycast",
                    meta: {
                        icon: "md-eye",
                        title: "keycast"
                    },
                    component: function () {
                        return n.e("chunk-2d0e5763").then(n.bind(null, "951b"))
                    }
                }, {
                    path: "i18n",
                    name: "i18n",
                    meta: {
                        icon: "md-mic",
                        title: "i18n"
                    },
                    component: function () {
                        return n.e("chunk-2d22c0e5").then(n.bind(null, "f236"))
                    }
                }]
            }, {
                path: "*",
                name: "error_404",
                meta: {
                    hideInMenu: !0
                },
                component: function () {
                    return n.e("chunk-d6a017aa").then(n.bind(null, "35f5"))
                }
            }],
            at = n("002d"),
            it = n.n(at);
        a.a.use(h.a);
        var rt = new h.a({
            routes: ot,
            mode: "hash"
        });
        rt.beforeEach((function (e, t, n) {
            it.a.LoadingBar.start(), n()
        })), rt.afterEach((function (e) {
            D(e, rt.app), it.a.LoadingBar.finish();
            var t = document.querySelector(".content-wrapper");
            t && t.scrollTop && t.scrollTo(0, 0)
        }));
        var st = rt,
            lt = {
                state: {
                    breadCrumbList: [],
                    local: R("local")
                },
                getters: {
                    menuList: function (e, t, n) {
                        return I(ot)
                    }
                },
                mutations: {
                    setBreadCrumb: function (e, t) {
                        e.breadCrumbList = $(t)
                    },
                    setLocal: function (e, t) {
                        E("local", t), e.local = t
                    }
                }
            },
            ct = {
                state: {
                    cfg: {},
                    gestures: {}
                },
                getters: {
                    cfg: function (e) {
                        return e.cfg
                    },
                    gestures: function (e) {
                        return e.gestures
                    }
                },
                mutations: {
                    setSettings: function (e, t) {
                        t.cfg.HotCorner || (t.cfg.HotCorner = {
                            BottomLeft: {
                                Actions: [["SendKeys", "Win"]],
                                Name: "开始菜单",
                                Valid: !0
                            },
                            BottomRight: {
                                Actions: [["SendKeys", "Win+D"]],
                                Name: "显示桌面",
                                Valid: !0
                            },
                            Open: !1,
                            TopLeft: {
                                Actions: [["SendKeys", "Win+Tab"]],
                                Name: "切换桌面",
                                Valid: !0
                            },
                            TopRight: {
                                Actions: [["SendKeys", "Alt+F4"]],
                                Name: "关闭程序",
                                Valid: !1
                            }
                        }), e.cfg = t.cfg, e.gestures = t.gestures, e.gestures["WheelSwitchUp"] = e.gestures[
                            "placeholder"], e.gestures["WheelSwitchDown"] = e.gestures["placeholder"]
                    }
                }
            };
        a.a.use($e.a);
        var ut = new $e.a.Store({
                state: {},
                mutations: {},
                actions: {},
                modules: {
                    app: lt,
                    settings: ct
                }
            }),
            dt = n("85b3"),
            pt = n.n(dt),
            ht = {
                doc: "使用手册",
                index: "快速设置",
                switch: "功能开关",
                exclude: "排除列表",
                gesture: "鼠标手势",
                settings: "手势设置",
                list: "手势列表",
                global: "通用动作",
                custom: "特定动作",
                demo: "动作示例",
                other: "其它设置",
                edge: "边缘滚动",
                copy: "快捷菜单",
                hotkey: "全局热键",
                keycast: "按键回显",
                i18n: "多语言",
                corner: "触发角",
                reset: "重置",
                save: "保存",
                warning: "警告",
                reset_tips1: "此操作将会丢失所有自定义设置，请小心操作！",
                reset_tips2: "是否继续？",
                reset_ok: "重置成功",
                save_ok: "保存成功",
                mousegesture: "鼠标手势",
                wheelswitch: "滚轮快切",
                altdrag: "快速移动窗口",
                wheelaltcontrol: "快速音量调节",
                volumecontrolsound: "音量回馈",
                wheeledge: "边缘滚动",
                clipboardmanager: "快捷菜单",
                ignorefullscreen: "忽略全屏",
                wheelthrough: "滚轮穿透",
                wheelnatural: "自然滚动",
                showtrayicon: "显示图标",
                capslockled: "大写锁定提示",
                capsunlock: "自动关闭大写锁定",
                autoclip: "快速复制粘贴",
                keysound: "按键音效",
                administrator: "管理员运行",
                mousegesture_label: "按住鼠标右键持续移动画出形状，放开右键即可触发对应动作",
                wheelswitch_label: "按住鼠标右键时，滚动滚轮可以执行切换动作（依赖鼠标手势）",
                keycast_label: "在屏幕上显示键盘按键，方便录制教程",
                altdrag_label: "按住Alt时按住鼠标滚轮拖动，可以直接移动窗口",
                wheelaltcontrol_label: "按住Alt时滚动滚轮调节音量大小，按下滚轮静音",
                volumecontrolsound_label: "音量调节时播放音效",
                wheeledge_label: "鼠标滚轮在屏幕四个边滚动、按下时触发的功能",
                clipboardmanager_label: "选中文字，按住Ctrl再快速按两次C，会弹出快捷操作菜单",
                ignorefullscreen_label: "当前程序如果是一个全屏程序，会自动暂停MouseInc功能",
                wheelthrough_label: "不在焦点的窗口可以自由滚动，Win10系统已经自带",
                wheelnatural_label: "滚轮反向，和Mac OS X一致",
                showtrayicon_label: "是否在系统托盘处显示MouseInc图标",
                capslockled_label: "在屏幕右上角显示大写锁定状态",
                capsunlock_label: "在30秒后自动取消大写锁定",
                autoclip_label: "鼠标选中或双击文字（根据光标）后自动复制，按住左键点右键粘贴，按住Ctrl可临时不复制",
                keysound_label: "在你打字时发出悦耳的声音",
                administrator_label: "启动程序是否自动获取管理员权限",
                icon_warning: "隐藏后只能通过手势打开设置界面，默认为M，是否继续？",
                exclude_tips1: "默认配置下，画手势Z可以添加程序到此列表中",
                exclude_tips2: "在此列表中的程序不会启用鼠标手势等功能，忽略大小写。",
                exclude_tips3: "当前排除程序列表：",
                exclude_warning: "请输入正确的程序名",
                add: "添加",
                open_label: "开启",
                addmode_label: "添加模式",
                drawcolor_label: "手势颜色",
                drawresult_label: "显示操作",
                drawtrace_label: "显示轨迹",
                tracearrow_label: "轨迹箭头",
                tracewidth_label: "轨迹宽度",
                failcolor_label: "失败颜色",
                startdistance_label: "触发距离",
                timeout_label: "停顿超时",
                restoreevent_label: "还原事件",
                sensitive_label: "识别灵敏度",
                more_setting: "更多设置",
                addmode_tip: "开启后画出未识别的手势将会打开添加界面（调高灵敏度更容易触发），添加后请刷新设置页面。",
                startdistance_tip: "按下鼠标右键以后移动超过这个距离才会触发手势",
                timeout_tip: "鼠标超过这个时间未移动，会中断手势",
                restoreevent_tip: "手势失效时是否还原鼠标按下事件",
                startdistance_unit: "（像素）",
                timeout_unit: "（毫秒）",
                list_tips1: "这里列出所有手势的形状和名称，打开",
                list_tips2: "添加模式",
                list_tips3: "后可以添加未识别的手势。添加后记得按F5刷新设置页面。",
                list_warning: "确定删除此手势？",
                match_tips: "在没有特别设置的情况下，这里的手势动作会对全部程序生效。",
                match_warning: "确定删除此项吗？",
                modify_gesture: "修改手势动作",
                add_gesture: "添加手势动作",
                custom_tips: "这里对指定程序设置的手势动作会优先于通用动作手势响应。",
                custom_list: "程序列表",
                custom_warning: "确定删除此分组？",
                custom_edit: "编辑分组名称",
                modify: "修改",
                clone: "克隆",
                delete: "删除",
                create: "新建",
                valid: "有效",
                sign: "手势",
                name: "名称",
                actions: "动作",
                operate: "操作",
                ignore_global: "忽略通用手势",
                ok: "确定",
                edge_tips1: "鼠标滚轮在屏幕四个边滚动、按下时触发的功能。",
                upactions: "向上动作",
                downactions: "向下动作",
                pressactions: "按下动作",
                location: "位置",
                edge_tips2: "修改边缘滚动动作",
                Left: "左",
                Top: "上",
                Right: "右",
                Bottom: "下",
                TopLeft: "左上",
                TopRight: "右上",
                BottomLeft: "左下",
                BottomRight: "右下",
                corner_tips1: "鼠标移动到屏幕四个角触发的功能。",
                corner_tips2: "修改触发角动作",
                copy_tips1: "选中文字，按住Ctrl再快速按两次C，会弹出快捷操作菜单。空白动作代表二级菜单，空白名称代表分割线，可通过拖拽调整菜单位置。",
                modify_menu: "修改菜单项动作",
                add_menu: "添加菜单项动作",
                hotkey_tips1: "直接使用快捷键触发动作",
                keys: "快捷键",
                modify_keys: "修改快捷键动作",
                add_keys: "添加快捷键动作",
                ignoresingle_label: "忽略单字符",
                backgroundcolor_label: "背景颜色",
                textshadowcolor_label: "阴影颜色",
                textcolor_label: "文字颜色",
                x_label: "X偏移",
                y_label: "Y偏移",
                space_label: "间距",
                fontsize_label: "字体大小",
                fade_label: "消失时间",
                x_tips: "窗口相对屏幕左边偏移，如果是负数则相对右边",
                y_tips: "窗口相对屏幕顶部偏移，如果是负数则相对底部",
                copy_btn: "复制",
                demo_tips: "您可以复制想要的动作代码粘贴到Raw编辑框中。注意：部分路径需要按照本机修改",
                copy_ok: "动作复制成功",
                copy_error: "动作复制失败，请手动复制",
                volume0: "清脆",
                volume1: "泡泡",
                key0: "打字机",
                key1: "青轴",
                key2: "茶轴",
                key3: "红轴",
                key4: "G轴",
                LanguageSelect: "请选择语言",
                auto: "自动",
                "en-US": "英语",
                "zh-CN": "中文简体",
                "zh-TW": "中文繁体"
            },
            mt = {
                doc: "使用手冊",
                index: "快速設定",
                switch: "功能開關",
                exclude: "排除清單",
                gesture: "滑鼠手勢",
                settings: "手勢設定",
                list: "手勢清單",
                global: "全域手勢",
                custom: "自訂手勢",
                demo: "动作示例",
                other: "其它設定",
                edge: "邊緣滾動",
                copy: "複製增強",
                hotkey: "全域熱鍵",
                keycast: "按鍵重顯",
                i18n: "多語言",
                corner: "触发角",
                reset: "重設",
                save: "儲存",
                warning: "警告",
                reset_tips1: "此操作將會讓您失去所有自訂設定，請小心操作！",
                reset_tips2: "是否繼續？",
                reset_ok: "重設成功",
                save_ok: "儲存成功",
                mousegesture: "滑鼠手勢",
                wheelswitch: "滾輪切換",
                altdrag: "快速移动窗口",
                wheelaltcontrol: "快速音量調整",
                volumecontrolsound: "音量回饋",
                wheeledge: "邊緣滾動",
                clipboardmanager: "複製增強",
                ignorefullscreen: "忽略全螢幕",
                wheelthrough: "滾輪穿透",
                wheelnatural: "自然滾動",
                showtrayicon: "顯示圖示",
                capslockled: "大写锁定提示",
                capsunlock: "自动关闭大写锁定",
                autoclip: "快速复制粘贴",
                keysound: "按键音效",
                administrator: "管理员运行",
                mousegesture_label: "按住滑鼠右鍵持續移動畫出形狀，放開右鍵即可觸發對應動作",
                wheelswitch_label: "按住滑鼠右鍵時，滾動滾輪可以進行切換分頁動作（依賴滑鼠手勢）",
                keycast_label: "在螢幕上顯示鍵盤按鍵，方便錄製教學影片",
                altdrag_label: "按住Alt时按住鼠标滚轮拖动，可以直接移动窗口",
                wheelaltcontrol_label: "按住Alt時滾動滾輪調整音量大小，按下滾輪靜音",
                volumecontrolsound_label: "音量調整時播放音效",
                wheeledge_label: "滑鼠滾輪在螢幕四個邊滾動、按下時觸發的功能",
                clipboardmanager_label: "選取文字快速按下兩次Ctrl+C後，會彈出快捷動作選單",
                ignorefullscreen_label: "目前程式如果是一個全螢幕程式，會自動暫停MouseInc功能",
                wheelthrough_label: "不在焦點的視窗可以自由滾動，Win10系統已經內建",
                wheelnatural_label: "滾輪反向，和Mac OS X一致",
                showtrayicon_label: "是否在工作列顯示MouseInc圖示",
                capslockled_label: "在屏幕右上角显示大写锁定状态",
                capsunlock_label: "在30秒后自动取消大写锁定",
                autoclip_label: "鼠标选中文字后自动复制到剪贴板",
                keysound_label: "在你打字时发出悦耳的声音",
                administrator_label: "启动程序是否自动获取管理员权限",
                icon_warning: "隐藏后只能通过手势打开设置界面，默认为M，是否继续？",
                exclude_tips1: "預設設定下，畫手勢Z可以新增程式至清單中",
                exclude_tips2: "在清單中的程式不會啟用滑鼠手勢等功能，忽略大小寫。",
                exclude_tips3: "目前排除程式清單：",
                exclude_warning: "請輸入正確的程式名稱",
                add: "新增",
                open_label: "開啟",
                addmode_label: "新增模式",
                drawcolor_label: "手勢色彩",
                drawresult_label: "顯示動作",
                drawtrace_label: "顯示軌跡",
                tracearrow_label: "軌跡箭頭",
                tracewidth_label: "軌跡寬度",
                failcolor_label: "失敗色彩",
                startdistance_label: "觸發距離",
                timeout_label: "停頓逾時",
                restoreevent_label: "還原事件",
                sensitive_label: "識別靈敏度",
                more_setting: "更多設定",
                addmode_tip: "開啟後畫出未辨識的手勢將會開啟新增手勢介面，新增後記得按F5重新整理設定頁面。",
                startdistance_tip: "按下滑鼠右鍵以後移動超過這個距離才會開啟手勢",
                timeout_tip: "滑鼠超過這個時間未移動，會中斷手勢",
                restoreevent_tip: "手勢失效時是否還原滑鼠按下事件",
                startdistance_unit: "（像素）",
                timeout_unit: "（毫秒）",
                list_tips1: "這裡列出所有手勢的形狀和名稱，開啟",
                list_tips2: "新增模式",
                list_tips3: "後可以新增未辨識的手勢。加入後記得按F5重新整理設定頁面。",
                list_warning: "確定刪除此手勢？",
                match_tips: "在沒有特別設定的情況下，這裡的手勢會對全部程式生效。",
                match_warning: "確定刪除此項目嗎？",
                modify_gesture: "變更手勢",
                add_gesture: "新增手勢",
                custom_tips: "這裡對指定程式設定的手勢會優先於通用手勢回應。",
                custom_list: "程式清單",
                custom_warning: "確定刪除此分組？",
                custom_edit: "編輯分組名稱",
                modify: "變更",
                clone: "複製",
                delete: "刪除",
                create: "新增",
                valid: "有效",
                sign: "手勢",
                name: "名稱",
                actions: "動作",
                operate: "操作",
                ignore_global: "忽略全域手勢",
                ok: "確定",
                edge_tips1: "滑鼠滾輪在螢幕四個邊滾動、按下時觸發的功能。",
                upactions: "向上動作",
                downactions: "向下動作",
                pressactions: "按下動作",
                location: "位置",
                edge_tips2: "變更邊緣滾動動作",
                Left: "左",
                Top: "上",
                Right: "右",
                Bottom: "下",
                TopLeft: "左上",
                TopRight: "右上",
                BottomLeft: "左下",
                BottomRight: "右下",
                corner_tips1: "鼠标移动到屏幕四个角触发的功能。",
                corner_tips2: "修改触发角动作",
                copy_tips1: "選取文字後快速按下兩次Ctrl+C，會彈出快捷動作選單。空白名稱代表分隔線，可透過拖曳調整選單順序。",
                modify_menu: "變更選項",
                add_menu: "新增選項",
                hotkey_tips1: "直接使用快速鍵觸發動作",
                keys: "快速鍵",
                modify_keys: "變更快速鍵",
                add_keys: "新增快速鍵",
                ignoresingle_label: "忽略單一字元",
                backgroundcolor_label: "背景色彩",
                textshadowcolor_label: "陰影色彩",
                textcolor_label: "文字色彩",
                x_label: "X位移",
                y_label: "Y位移",
                space_label: "間距",
                fontsize_label: "字型大小",
                fade_label: "消失時間",
                x_tips: "視窗相對螢幕左邊位移，如果是負數則相對右邊",
                y_tips: "視窗相對螢幕頂部位移，如果是負數則相對底部",
                copy_btn: "複製",
                demo_tips: "您可以複製想要的动作代码，注意部分路径需要按照本机修改",
                copy_ok: "动作複製成功",
                copy_error: "动作複製失败，请手动複製",
                volume0: "清脆",
                volume1: "泡泡",
                key0: "打字机",
                key1: "青轴",
                key2: "茶轴",
                key3: "红轴",
                key4: "G轴",
                LanguageSelect: "請選擇語言",
                auto: "自動",
                "en-US": "英語",
                "zh-CN": "中文(簡體)",
                "zh-TW": "中文(繁體)"
            },
            ft = {
                doc: "User Manual",
                index: "Quick Settings",
                switch: "Features Switch",
                exclude: "Excluded List",
                gesture: "Mouse Gesture",
                settings: "Gesture Settings",
                list: "Gesture List",
                global: "Global Match",
                custom: "Custom Match",
                demo: "Demo",
                other: "Other Settings",
                edge: "Edge Scrolling",
                copy: "Copy Enhance",
                hotkey: "Global Hotkey",
                keycast: "Press Echo",
                i18n: "Multi-language",
                corner: "Hot Corner",
                reset: "Reset",
                save: "Save",
                warning: "Warning",
                reset_tips1: "This operation will lose all custom settings, please be careful! ",
                reset_tips2: "Do you want to continue? ",
                reset_ok: "Reset success",
                save_ok: "Save successfully",
                mousegesture: "Mouse Gesture",
                wheelswitch: "Wheel Switch",
                altdrag: "Move Window Quickly",
                wheelaltcontrol: "Fast Volume Adjustment",
                volumecontrolsound: "Sound Effect Feedback",
                wheeledge: "Edge Scrolling",
                clipboardmanager: "Copy Enhancement",
                ignorefullscreen: "Ignore Fullscreen",
                wheelthrough: "Roller Penetration",
                wheelnatural: "Natural Scrolling",
                showtrayicon: "Display Icon",
                capslockled: "Caps Lock Tip",
                capsunlock: "Turn Caps Lock Off Automatically",
                autoclip: "Auto Clip",
                keysound: "Key Sound",
                administrator: "Administrator Run",
                mousegesture_label: "Press and hold the right mouse button to move the shape, and release the right button to trigger the corresponding action",
                wheelswitch_label: "When the right mouse button is held, the scroll wheel can switch tab actions (depending on the mouse gesture)",
                keycast_label: "Show keyboard keys on the screen for easy recording of tutorials",
                altdrag_label: "Hold Alt and the middle mouse button, you can move the window directly",
                wheelaltcontrol_label: "When you hold Alt, scroll the wheel to adjust the volume, press the wheel to disable the sound",
                volumecontrolsound_label: "Play sound when volume is adjusted",
                wheeledge_label: "The function of the mouse wheel scrolling on the four sides of the screen and triggered when pressed",
                clipboardmanager_label: "Select the text and press Ctrl+C twice quickly, the shortcut menu will pop up",
                ignorefullscreen_label: "If the current program is a full-screen program, it will automatically pause the MouseInc function",
                wheelthrough_label: "The window that is out of focus can be freely scrolled, Win10 system already comes with",
                wheelnatural_label: "Roller reverse, consistent with Mac OS X",
                showtrayicon_label: "Whether to display the MouseInc icon at the system tray",
                capslockled_label: "Show Caps Lock status in the upper right corner of the screen",
                capsunlock_label: "Automatically cancel caps lock after 30 seconds",
                autoclip_label: "Copy text to clipboard automatically with mouse selection",
                keysound_label: "Make a pleasant sound when you type",
                administrator_label: "Whether the startup program automatically obtains administrator rights",
                icon_warning: "After hiding, you can only open the setting interface through gestures. The default is M. Do you want to continue?",
                exclude_tips1: "In the default configuration, draw gesture Z can add programs to the list",
                exclude_tips2: "Programs in the list do not enable features such as mouse gestures, ignoring case. ",
                exclude_tips3: "Current exclusion list:",
                exclude_warning: "Please enter the correct program name",
                add: "Add",
                open_label: "on",
                addmode_label: "Add mode",
                drawcolor_label: "gesture color",
                drawresult_label: "display operation",
                drawtrace_label: "display track",
                tracearrow_label: "track arrow",
                tracewidth_label: "track width",
                failcolor_label: "failed color",
                startdistance_label: "trigger distance",
                timeout_label: "pause timeout",
                restoreevent_label: "restore event",
                sensitive_label: "recognition sensitivity",
                more_setting: "More settings",
                addmode_tip: "Drawing an unrecognized gesture after opening will open the add interface. After adding, remember to press F5 to refresh the settings page. ",
                startdistance_tip: "After pressing the right mouse button, moving beyond this distance will open the gesture",
                timeout_tip: "The mouse has not moved beyond this time, it will interrupt the gesture",
                restoreevent_tip: "Restore mouse down event when gesture fails",
                startdistance_unit: "(pixel)",
                timeout_unit: "(milliseconds)",
                list_tips1: "List the shape and name of all gestures here, open",
                list_tips2: "Add mode",
                list_tips3: "You can add unrecognized gestures later. After adding, remember to press F5 to refresh the settings page. ",
                list_warning: "Are you sure to delete this gesture? ",
                match_tips: "The gesture here will take effect for all programs without special settings. ",
                match_warning: "Are you sure to delete this item? ",
                modify_gesture: "Modify gesture",
                add_gesture: "Add gesture",
                custom_tips: "The gestures set for the specified program take precedence over the generic gesture response. ",
                custom_list: "Program list",
                custom_warning: "Are you sure to delete this group? ",
                custom_edit: "Edit group name",
                modify: "Alter",
                clone: "Clone",
                delete: "Del",
                create: "Create",
                valid: "valid",
                sign: "gesture",
                name: "name",
                actions: "action",
                operate: "Operation",
                ignore_global: "忽略通用手势",
                ok: "OK",
                edge_tips1: "The function that the mouse wheel scrolls on the four sides of the screen and is triggered when pressed. ",
                upactions: "Up action",
                downactions: "down action",
                pressactions: "Press action",
                location: "location",
                edge_tips2: "Edge scrolling function",
                Left: "Left",
                Top: "Top",
                Right: "Right",
                Bottom: "Bottom",
                TopLeft: "TopLeft",
                TopRight: "TopRight",
                BottomLeft: "BottomLeft",
                BottomRight: "BottomRight",
                corner_tips1: "The function is triggered when the mouse moves to the four corners of the screen.",
                corner_tips2: "Modify the trigger angle action",
                copy_tips1: "Select the text and press Ctrl+C twice quickly, the shortcut menu will pop up. The blank name represents the dividing line, and the menu order can be adjusted by dragging and dropping. ",
                modify_menu: "Modify menu item",
                add_menu: "Add menu item",
                hotkey_tips1: "Use the shortcut to trigger the action directly",
                keys: "shortcut",
                modify_keys: "Modify shortcuts",
                add_keys: "Add shortcuts",
                ignoresingle_label: "Ignore single character",
                backgroundcolor_label: "background color",
                textshadowcolor_label: "shadow color",
                textcolor_label: "text color",
                x_label: "X offset",
                y_label: "Y offset",
                space_label: "pitch",
                fontsize_label: "font size",
                fade_label: "disappear time",
                x_tips: "The window is offset from the left side of the screen, and if it is negative, it is relative to the right side",
                y_tips: "The window is offset from the top of the screen, if it is negative, it is relative to the bottom",
                copy_btn: "copy",
                demo_tips: "You can copy the action code you want. Note that some paths need to be modified according to the machine.",
                copy_ok: "Action copied successfully",
                copy_error: "Action copy failed, please copy manually",
                volume0: "Clear",
                volume1: "Bubble",
                key0: "Typewriter",
                key1: "Green Axis",
                key2: "Tea Axis",
                key3: "Red Axis",
                key4: "G Axis",
                LanguageSelect: "Please select a language",
                auto: "automatic",
                "en-US": "English",
                "zh-CN": "Chinese Simplified",
                "zh-TW": "Chinese Traditional"
            },
            gt = n("d528"),
            bt = n("d8bf"),
            _t = n("b450");
        a.a.use(pt.a);
        var wt = navigator.language,
            yt = ("zh-CN" === wt || "en-US" === wt || "zh-TW" === wt) && wt,
            vt = R("local") || yt || "zh-CN";
        a.a.config.lang = vt, a.a.locale = function () {};
        var kt = {
                "zh-CN": Object.assign(gt["a"], ht),
                "zh-TW": Object.assign(_t["a"], mt),
                "en-US": Object.assign(bt["a"], ft)
            },
            xt = new pt.a({
                locale: vt,
                messages: kt
            }),
            Ct = xt,
            St = (n("8d39"), n("b311")),
            Ot = n.n(St),
            Mt = n("ab00"),
            Tt = n.n(Mt);
        a.a.prototype.Clipboard = Ot.a, a.a.use(Tt.a), a.a.use(it.a, {
            i18n: function (e, t) {
                return Ct.t(e, t)
            }
        }), a.a.config.productionTip = !1, a.a.prototype.$config = v, new a.a({
            el: "#app",
            router: st,
            i18n: Ct,
            store: ut,
            render: function (e) {
                return e(d)
            }
        })
    },
    5880: function (e, t) {
        e.exports = Vuex
    },
    6389: function (e, t) {
        e.exports = VueRouter
    },
    7585: function (e, t, n) {
        var o = n("ba60");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("edc8f156", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "7a3c": function (e, t, n) {
        var o = n("2a1c");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("34a7c512", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "7c55": function (e, t, n) {
        "use strict";
        n("7585")
    },
    "85b3": function (e, t) {
        e.exports = VueI18n
    },
    "8af1": function (e, t) {
        e.exports = beautifier
    },
    "8bbf": function (e, t) {
        e.exports = Vue
    },
    "8d39": function (e, t, n) {
        var o = n("de57");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("6020ac68", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9f0e": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".header-bar{width:100%;height:100%;position:relative}.header-bar .custom-content-con{float:right;height:auto;line-height:64px}.header-bar .custom-content-con>*{float:right}",
            ""])
    },
    a4d8: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".custom-bread-crumb{display:inline-block;vertical-align:top}", ""])
    },
    ab00: function (e, t) {
        e.exports = VueCodemirror
    },
    b554: function (e, t, n) {
        "use strict";
        n("e11ef")
    },
    b858: function (e, t, n) {
        "use strict";
        n("2660")
    },
    ba60: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".size,body,html{width:100%;height:100%}body,html{overflow:hidden;margin:0;padding:0}#app{width:100%;height:100%}",
            ""])
    },
    cbc4: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".demo-spin-icon-load{-webkit-animation:ani-demo-spin 1s linear infinite;animation:ani-demo-spin 1s linear infinite}",
            ""])
    },
    cebe: function (e, t) {
        e.exports = axios
    },
    de57: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            "::-webkit-scrollbar{width:7px}::-webkit-scrollbar-track{background:none}::-webkit-scrollbar-thumb{border-radius:4px;background-color:hsla(0,0%,60%,.5)}::-webkit-scrollbar-thumb:hover{background-color:hsla(0,0%,60%,.6)}",
            ""])
    },
    e11ef: function (e, t, n) {
        var o = n("e4d1");
        o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports =
            o.locals);
        var a = n("499e").default;
        a("2c0a7a47", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e4d1: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".side-menu-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.side-menu-wrapper .ivu-menu-vertical.ivu-menu-dark .ivu-menu-item-active:not(.ivu-menu-submenu),.side-menu-wrapper .ivu-menu-vertical.ivu-menu-light .ivu-menu-item-active:not(.ivu-menu-submenu){color:#fff}.side-menu-wrapper .menu-collapsed{padding-top:10px}.side-menu-wrapper .menu-collapsed .ivu-dropdown,.side-menu-wrapper .menu-collapsed .ivu-dropdown .ivu-dropdown-rel a,.side-menu-wrapper .menu-collapsed .ivu-tooltip,.side-menu-wrapper .menu-collapsed .ivu-tooltip .ivu-tooltip-rel{width:100%}.side-menu-wrapper .menu-collapsed .ivu-tooltip .ivu-tooltip-popper .ivu-tooltip-content .ivu-tooltip-arrow{border-right-color:#fff}.side-menu-wrapper .menu-collapsed .ivu-tooltip .ivu-tooltip-popper .ivu-tooltip-content .ivu-tooltip-inner{background:#fff;color:#495060}.side-menu-wrapper a.drop-menu-a{display:inline-block;padding:6px 15px;width:100%;text-align:center;color:#495060}.menu-title{padding-left:6px}",
            ""])
    },
    f691: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i,
            ".trans{-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.sider-trigger-a{padding:6px;width:40px;height:40px;display:inline-block;text-align:center;color:#5c6b77;margin-top:12px}.sider-trigger-a i{vertical-align:top}.sider-trigger-a.collapsed i,.sider-trigger-a i{-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.sider-trigger-a.collapsed i{-webkit-transform:rotate(90deg);transform:rotate(90deg)}",
            ""])
    }
});
