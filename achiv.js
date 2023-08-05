/*!
 * Minimal Mistakes Jekyll Theme 4.24.0 by Michael Rose
 * Copyright 2013-2021 Michael Rose - mademistakes.com | @mmistakes
 * Licensed under MIT
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , n = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , l = t.push
      , o = t.indexOf
      , r = {}
      , i = r.toString
      , v = r.hasOwnProperty
      , a = v.toString
      , u = a.call(Object)
      , y = {}
      , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , T = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var r, o, i = (n = n || T).createElement("script");
        if (i.text = e,
        t)
            for (r in c)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[i.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    };
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = h(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, o, i = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof i && (l = i,
        i = arguments[a] || {},
        a++),
        "object" == typeof i || b(i) || (i = {}),
        a === s && (i = this,
        a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && i !== n && (l && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (o = i[t],
                    o = r && !Array.isArray(o) ? [] : r || E.isPlainObject(o) ? o : {},
                    r = !1,
                    i[t] = E.extend(l, o, n)) : void 0 !== n && (i[t] = n));
        return i
    }
    ,
    E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== i.call(e)) && (!(e = n(e)) || "function" == typeof (e = v.call(e, "constructor") && e.constructor) && a.call(e) === u)
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            x(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (d(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) != a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0, a = [];
            if (d(e))
                for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
            else
                for (i in e)
                    null != (o = t(e[i], i, n)) && a.push(o);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function r() {
            C()
        }
        var e, d, x, i, o, p, h, m, w, l, u, C, T, a, E, g, s, c, v, S = "sizzle" + +new Date, y = n.document, k = 0, b = 0, A = le(), N = le(), j = le(), I = le(), L = function(e, t) {
            return e === t && (u = !0),
            0
        }, D = {}.hasOwnProperty, t = [], O = t.pop, H = t.push, P = t.push, q = t.slice, M = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + $ + "*(" + R + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + $ + "*\\]", F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", W = new RegExp($ + "+","g"), z = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), U = new RegExp("^" + $ + "*," + $ + "*"), X = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), Q = new RegExp($ + "|>"), Y = new RegExp(F), V = new RegExp("^" + R + "$"), G = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
            bool: new RegExp("^(?:" + _ + ")$","i"),
            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
        }, K = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, re = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])","g"), oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ae = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            P.apply(t = q.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    H.apply(e, q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var o, i, a, s, l, u, c = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!r && (C(e),
            e = e || T,
            E)) {
                if (11 !== f && (s = te.exec(t)))
                    if (u = s[1]) {
                        if (9 === f) {
                            if (!(i = e.getElementById(u)))
                                return n;
                            if (i.id === u)
                                return n.push(i),
                                n
                        } else if (c && (i = c.getElementById(u)) && v(e, i) && i.id === u)
                            return n.push(i),
                            n
                    } else {
                        if (s[2])
                            return P.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((u = s[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return P.apply(n, e.getElementsByClassName(u)),
                            n
                    }
                if (d.qsa && !I[t + " "] && (!g || !g.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t,
                    c = e,
                    1 === f && (Q.test(t) || X.test(t))) {
                        for ((c = ne.test(t) && me(e.parentNode) || e) === e && d.scope || ((a = e.getAttribute("id")) ? a = a.replace(oe, ie) : e.setAttribute("id", a = S)),
                        o = (l = p(t)).length; o--; )
                            l[o] = (a ? "#" + a : ":scope") + " " + ve(l[o]);
                        u = l.join(",")
                    }
                    try {
                        return P.apply(n, c.querySelectorAll(u)),
                        n
                    } catch (e) {
                        I(t, !0)
                    } finally {
                        a === S && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(z, "$1"), e, n, r)
        }
        function le() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > x.cacheLength && delete r[n.shift()],
                r[e + " "] = t
            }
            return r
        }
        function ue(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function de(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(a) {
            return ue(function(i) {
                return i = +i,
                ue(function(e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--; )
                        e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        o = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !K.test(t || e && e.nodeName || "HTML")
        }
        ,
        C = se.setDocument = function(e) {
            var t, e = e ? e.ownerDocument || e : y;
            return e != T && 9 === e.nodeType && e.documentElement && (a = (T = e).documentElement,
            E = !o(T),
            y != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(T.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = ee.test(T.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !T.getElementsByName || !T.getElementsByName(S).length
            }),
            d.getById ? (x.filter.ID = function(e) {
                var t = e.replace(re, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var t = e.replace(re, f);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = d.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" !== e)
                    return i;
                for (; n = i[o++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            x.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            g = [],
            (d.qsa = ee.test(T.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + _ + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                (t = T.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || g.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                g.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (d.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            g = g.length && new RegExp(g.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = ee.test(a.compareDocumentPosition),
            v = t || ee.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            L = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == y && v(y, e) ? -1 : t == T || t.ownerDocument == y && v(y, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i)
                    return e == T ? -1 : t == T ? 1 : o ? -1 : i ? 1 : l ? M(l, e) - M(l, t) : 0;
                if (o === i)
                    return de(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? de(a[r], s[r]) : a[r] == y ? -1 : s[r] == y ? 1 : 0
            }
            ),
            T
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (C(e),
            d.matchesSelector && E && !I[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    I(t, !0)
                }
            return 0 < se(t, T, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != T && C(e),
            v(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != T && C(e);
            var n = x.attrHandle[t.toLowerCase()]
              , n = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : d.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(oe, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (u = !d.detectDuplicates,
            l = !d.sortStable && e.slice(0),
            e.sort(L),
            u) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return l = null,
            e
        }
        ,
        i = se.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += i(t);
            return n
        }
        ,
        (x = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(re, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(re, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(re, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = A[e + " "];
                    return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && A(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = se.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(W, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, o, i, a, s, l, u = v != y ? "nextSibling" : "previousSibling", c = e.parentNode, f = b && e.nodeName.toLowerCase(), d = !n && !b, p = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (a = e; a = a[u]; )
                                        if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    l = u = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && d) {
                                for (p = (s = (r = (o = (i = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s]; a = ++s && a && a[u] || (p = s = 0) || l.pop(); )
                                    if (1 === a.nodeType && ++p && a === e) {
                                        o[h] = [k, s, p];
                                        break
                                    }
                            } else if (!1 === (p = d ? s = (r = (o = (i = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : p))
                                for (; (a = ++s && a && a[u] || (p = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((o = (i = a[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [k, p]),
                                a !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(i) : 1 < a.length ? (t = [e, e, "", i],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                        for (var n, r = a(e, i), o = r.length; o--; )
                            e[n = M(e, r[o])] = !(t[n] = r[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var r = []
                      , o = []
                      , s = h(e.replace(z, "$1"));
                    return s[S] ? ue(function(e, t, n, r) {
                        for (var o, i = s(e, null, r, []), a = e.length; a--; )
                            (o = i[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, o),
                        r[0] = null,
                        !o.pop()
                    }
                }),
                has: ue(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: ue(function(t) {
                    return t = t.replace(re, f),
                    function(e) {
                        return -1 < (e.textContent || i(e)).indexOf(t)
                    }
                }),
                lang: ue(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(re, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ye(a, e, t) {
            var s = e.dir
              , l = e.next
              , u = l || s
              , c = t && "parentNode" === u
              , f = b++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || c)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, o, i = [k, f];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || c) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || c)
                            if (r = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[s] || e;
                            else {
                                if ((o = r[u]) && o[0] === k && o[1] === f)
                                    return i[2] = o[2];
                                if ((r[u] = i)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var r = o.length; r--; )
                    if (!o[r](e, t, n))
                        return !1;
                return !0
            }
            : o[0]
        }
        function xe(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                u && t.push(s)));
            return a
        }
        function we(p, h, m, g, v, e) {
            return g && !g[S] && (g = we(g)),
            v && !v[S] && (v = we(v, e)),
            ue(function(e, t, n, r) {
                var o, i, a, s = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? c : xe(c, s, p, n, r), d = m ? v || (e ? p : u || g) ? [] : t : f;
                if (m && m(f, d, n, r),
                g)
                    for (o = xe(d, l),
                    g(o, [], n, r),
                    i = o.length; i--; )
                        (a = o[i]) && (d[l[i]] = !(f[l[i]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (o = [],
                            i = d.length; i--; )
                                (a = d[i]) && o.push(f[i] = a);
                            v(null, d = [], o, r)
                        }
                        for (i = d.length; i--; )
                            (a = d[i]) && -1 < (o = v ? M(e, a) : s[i]) && (e[o] = !(t[o] = a))
                    }
                } else
                    d = xe(d === t ? d.splice(u, d.length) : d),
                    v ? v(null, t, d, r) : P.apply(t, d)
            })
        }
        function Ce(g, v) {
            function e(e, t, n, r, o) {
                var i, a, s, l = 0, u = "0", c = e && [], f = [], d = w, p = e || b && x.find.TAG("*", o), h = k += null == d ? 1 : Math.random() || .1, m = p.length;
                for (o && (w = t == T || t || o); u !== m && null != (i = p[u]); u++) {
                    if (b && i) {
                        for (a = 0,
                        t || i.ownerDocument == T || (C(i),
                        n = !E); s = g[a++]; )
                            if (s(i, t || T, n)) {
                                r.push(i);
                                break
                            }
                        o && (k = h)
                    }
                    y && ((i = !s && i) && l--,
                    e && c.push(i))
                }
                if (l += u,
                y && u !== l) {
                    for (a = 0; s = v[a++]; )
                        s(c, f, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || f[u] || (f[u] = O.call(r));
                        f = xe(f)
                    }
                    P.apply(r, f),
                    o && !e && 0 < f.length && 1 < l + v.length && se.uniqueSort(r)
                }
                return o && (k = h,
                w = d),
                c
            }
            var y = 0 < v.length
              , b = 0 < g.length;
            return y ? ue(e) : e
        }
        return ge.prototype = x.filters = x.pseudos,
        x.setFilters = new ge,
        p = se.tokenize = function(e, t) {
            var n, r, o, i, a, s, l, u = N[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            s = [],
            l = x.preFilter; a; ) {
                for (i in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(o = [])),
                n = !1,
                (r = X.exec(a)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                a = a.slice(n.length)),
                x.filter)
                    !(r = G[i].exec(a)) || l[i] && !(r = l[i](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: i,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : N(e, s).slice(0)
        }
        ,
        h = se.compile = function(e, t) {
            var n, r = [], o = [], i = j[e + " "];
            if (!i) {
                for (n = (t = t || p(e)).length; n--; )
                    ((i = function e(t) {
                        for (var r, n, o, i = t.length, a = x.relative[t[0].type], s = a || x.relative[" "], l = a ? 1 : 0, u = ye(function(e) {
                            return e === r
                        }, s, !0), c = ye(function(e) {
                            return -1 < M(r, e)
                        }, s, !0), f = [function(e, t, n) {
                            return n = !a && (n || t !== w) || ((r = t).nodeType ? u : c)(e, t, n),
                            r = null,
                            n
                        }
                        ]; l < i; l++)
                            if (n = x.relative[t[l].type])
                                f = [ye(be(f), n)];
                            else {
                                if ((n = x.filter[t[l].type].apply(null, t[l].matches))[S]) {
                                    for (o = ++l; o < i && !x.relative[t[o].type]; o++)
                                        ;
                                    return we(1 < l && be(f), 1 < l && ve(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(z, "$1"), n, l < o && e(t.slice(l, o)), o < i && e(t = t.slice(o)), o < i && ve(t))
                                }
                                f.push(n)
                            }
                        return be(f)
                    }(t[n]))[S] ? r : o).push(i);
                (i = j(e, Ce(o, r))).selector = e
            }
            return i
        }
        ,
        m = se.select = function(e, t, n, r) {
            var o, i, a, s, l, u = "function" == typeof e && e, c = !r && p(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && E && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(re, f), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o],
                !x.relative[s = a.type]); )
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(re, f), ne.test(i[0].type) && me(t.parentNode) || t))) {
                        if (i.splice(o, 1),
                        !(e = r.length && ve(i)))
                            return P.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || h(e, c))(r, t, !E, n, !t || ne.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(L).join("") === S,
        d.detectDuplicates = !!u,
        C(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(_, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }),
        se
    }(C);
    E.find = p,
    E.expr = p.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = p.uniqueSort,
    E.text = p.getText,
    E.isXMLDoc = p.isXML,
    E.contains = p.contains,
    E.escapeSelector = p.escape;
    function w(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function S(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var k = E.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < o.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                E.find(e, o[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        if (!e)
            return this;
        if (n = n || L,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t)
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t,
            E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
            N.test(r[1]) && E.isPlainObject(t))
                for (var r in t)
                    b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (e = T.getElementById(r[2])) && (this[0] = e,
        this.length = 1),
        this
    }
    ).prototype = E.fn;
    var L = E(T)
      , D = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? E.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(E(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(r, o) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, o, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (O[r] || E.uniqueSort(n),
            D.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function q(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function _(e, t, n, r) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var n;
        r = "string" == typeof r ? (n = {},
        E.each(r.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, r);
        function o() {
            for (a = a || r.once,
            t = i = !0; l.length; u = -1)
                for (e = l.shift(); ++u < s.length; )
                    !1 === s[u].apply(e[0], e[1]) && r.stopOnFalse && (u = s.length,
                    e = !1);
            r.memory || (e = !1),
            i = !1,
            a && (s = e ? [] : "")
        }
        var i, e, t, a, s = [], l = [], u = -1, c = {
            add: function() {
                return s && (e && !i && (u = s.length - 1,
                l.push(e)),
                function n(e) {
                    E.each(e, function(e, t) {
                        b(t) ? r.unique && c.has(t) || s.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments),
                e && !i && o()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s = s && [],
                this
            },
            disable: function() {
                return a = l = [],
                s = e = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = l = [],
                e || i || (s = e = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                i || o()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return c
    }
    ,
    E.extend({
        Deferred: function(e) {
            var i = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , a = {
                state: function() {
                    return o
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return E.Deferred(function(r) {
                        E.each(i, function(e, t) {
                            var n = b(o[t[4]]) && o[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var l = 0;
                    function u(o, i, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = a.apply(n, r)) === i.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    b(t) ? s ? t.call(e, u(l, i, q, s), u(l, i, M, s)) : (l++,
                                    t.call(e, u(l, i, q, s), u(l, i, M, s), u(l, i, q, i.notifyWith))) : (a !== q && (n = void 0,
                                    r = [e]),
                                    (s || i.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= o + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    i.rejectWith(n, r))
                                }
                            }
                            ;
                            o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        i[0][3].add(u(0, e, b(r) ? r : q, e.notifyWith)),
                        i[1][3].add(u(0, e, b(t) ? t : q)),
                        i[2][3].add(u(0, e, b(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(i, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || a.resolveWith(o, i)
                }
            }
            var n = arguments.length
              , r = n
              , o = Array(r)
              , i = s.call(arguments)
              , a = E.Deferred();
            if (n <= 1 && (_(e, a.done(t(r)).resolve, a.reject, !n),
            "pending" === a.state() || b(i[r] && i[r].then)))
                return a.then();
            for (; r--; )
                _(i[r], t(r), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var R = E.Deferred();
    function B() {
        T.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        E.ready()
    }
    E.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || R.resolveWith(T, [E])
        }
    }),
    E.ready.then = R.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var F = function(e, t, n, r, o, i, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === h(n))
            for (s in o = !0,
            n)
                F(e, t, s, n[s], !0, i, a);
        else if (void 0 !== r && (o = !0,
        b(r) || (a = !0),
        t = u ? a ? (t.call(e, r),
        null) : (u = t,
        function(e, t, n) {
            return u.call(E(e), n)
        }
        ) : t))
            for (; s < l; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
    }
      , W = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(W, "ms-").replace(z, U)
    }
    function Q(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function Y() {
        this.expando = E.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[X(t)] = n;
            else
                for (r in t)
                    o[X(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var V = new Y
      , G = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function J(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, r, o, i = this[0], a = i && i.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    G.set(this, n)
                }) : F(this, function(e) {
                    var t;
                    return i && void 0 === e ? void 0 !== (t = G.get(i, n)) || void 0 !== (t = J(i, n)) ? t : void 0 : void this.each(function() {
                        G.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = G.get(i),
            1 === i.nodeType && !V.get(i, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                    J(i, r, o[r]));
                V.set(i, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = V.get(e, t = (t || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = V.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            var n = E.queue(e, t = t || "fx")
              , r = n.length
              , o = n.shift()
              , i = E._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, function() {
                E.dequeue(e, t)
            }, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    V.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || i.resolveWith(a, [a])
            }
            var r, o = 1, i = E.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (r = V.get(a[s], e + "queueHooks")) && r.empty && (o++,
                r.empty.add(n));
            return n(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = T.documentElement
      , oe = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , ie = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
    };
    function se(e, t, n, r) {
        var o, i, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && te.exec(E.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; a--; )
                E.style(e, t, c + u),
                (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (a = 0),
                c /= i;
            E.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = c,
        r.end = o)),
        o
    }
    var le = {};
    function ue(e, t) {
        for (var n, r, o, i, a, s = [], l = 0, u = e.length; l < u; l++)
            (r = e[l]).style && (n = r.style.display,
            t ? ("none" === n && (s[l] = V.get(r, "display") || null,
            s[l] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (s[l] = (a = i = void 0,
            i = (o = r).ownerDocument,
            a = o.nodeName,
            (o = le[a]) || (i = i.body.appendChild(i.createElement(a)),
            o = E.css(i, "display"),
            i.parentNode.removeChild(i),
            le[a] = o = "none" === o ? "block" : o)))) : "none" !== n && (s[l] = "none",
            V.set(r, "display", n)));
        for (l = 0; l < u; l++)
            null != s[l] && (e[l].style.display = s[l]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , de = /^$|^module$|\/(?:java|ecma)script/i;
    f = T.createDocumentFragment().appendChild(T.createElement("div")),
    (p = T.createElement("input")).setAttribute("type", "radio"),
    p.setAttribute("checked", "checked"),
    p.setAttribute("name", "t"),
    f.appendChild(p),
    y.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked,
    f.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue,
    f.innerHTML = "<option></option>",
    y.option = !!f.lastChild;
    var pe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }
    function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead,
    pe.th = pe.td,
    y.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;
    function ve(e, t, n, r, o) {
        for (var i, a, s, l, u, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((i = e[d]) || 0 === i)
                if ("object" === h(i))
                    E.merge(f, i.nodeType ? [i] : i);
                else if (ge.test(i)) {
                    for (a = a || c.appendChild(t.createElement("div")),
                    s = (fe.exec(i) || ["", ""])[1].toLowerCase(),
                    s = pe[s] || pe._default,
                    a.innerHTML = s[1] + E.htmlPrefilter(i) + s[2],
                    u = s[0]; u--; )
                        a = a.lastChild;
                    E.merge(f, a.childNodes),
                    (a = c.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(i));
        for (c.textContent = "",
        d = 0; i = f[d++]; )
            if (r && -1 < E.inArray(i, r))
                o && o.push(i);
            else if (l = oe(i),
            a = he(c.appendChild(i), "script"),
            l && me(a),
            n)
                for (u = 0; i = a[u++]; )
                    de.test(i.type || "") && n.push(i);
        return c
    }
    var ye = /^([^.]*)(?:\.(.+)|)/;
    function be() {
        return !0
    }
    function xe() {
        return !1
    }
    function we(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ce(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ce(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = xe;
        else if (!o)
            return e;
        return 1 === i && (a = o,
        (o = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, o, r, n)
        })
    }
    function Te(e, o, i) {
        i ? (V.set(e, o, !1),
        E.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = V.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (r.length)
                        (E.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    V.set(this, o, r),
                    t = i(this, o),
                    this[o](),
                    r !== (n = V.get(this, o)) || t ? V.set(this, o, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (V.set(this, o, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === V.get(e, o) && E.event.add(e, o, be)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, s, l, u, c, f, d, p, h = V.get(t);
            if (Q(t))
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && E.find.matchesSelector(re, o),
                n.guid || (n.guid = E.guid++),
                (s = h.events) || (s = h.events = Object.create(null)),
                (a = h.handle) || (a = h.handle = function(e) {
                    return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length; l--; )
                    f = p = (u = ye.exec(e[l]) || [])[1],
                    d = (u[2] || "").split(".").sort(),
                    f && (c = E.event.special[f] || {},
                    f = (o ? c.delegateType : c.bindType) || f,
                    c = E.event.special[f] || {},
                    u = E.extend({
                        type: f,
                        origType: p,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && E.expr.match.needsContext.test(o),
                        namespace: d.join(".")
                    }, i),
                    (p = s[f]) || ((p = s[f] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, r, d, a) || t.addEventListener && t.addEventListener(f, a)),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    E.event.global[f] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, f, d, p, h, m, g = V.hasData(e) && V.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--; )
                    if (p = m = (s = ye.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = E.event.special[p] || {},
                        d = l[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = d.length; i--; )
                            c = d[i],
                            !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || E.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            E.event.remove(e, p + t[u], n, r, !0);
                E.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a = new Array(arguments.length), s = E.event.fix(e), l = (V.get(this, "events") || Object.create(null))[s.type] || [], e = E.event.special[s.type] || {};
            for (a[0] = s,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this,
            !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (i = E.event.handlers.call(this, s, l),
                t = 0; (r = i[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (o = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (s.result = o) && (s.preventDefault(),
                        s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (i = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < E(o, this).index(u) : E.find(o, this, null, [u]).length),
                            a[o] && i.push(r);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Te(e, "click", be),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Te(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return ce.test(e.type) && e.click && A(e, "input") && V.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = be,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = be,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = be,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Te(this, e, we),
                !1
            },
            trigger: function() {
                return Te(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        E.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = xe),
                this.each(function() {
                    E.event.remove(this, e, n, t)
                });
            for (o in e)
                this.off(o, t, e[o]);
            return this
        }
    });
    var Ee = /<script|<style|<link/i
      , Se = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ae(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, r, o, i;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (i = V.get(e).events))
                for (o in V.remove(t, "handle events"),
                i)
                    for (n = 0,
                    r = i[o].length; n < r; n++)
                        E.event.add(t, o, i[o][n]);
            G.hasData(e) && (e = G.access(e),
            e = E.extend({}, e),
            G.set(t, e))
        }
    }
    function Le(n, r, o, i) {
        r = g(r);
        var e, t, a, s, l, u, c = 0, f = n.length, d = f - 1, p = r[0], h = b(p);
        if (h || 1 < f && "string" == typeof p && !y.checkClone && Se.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())),
                Le(t, r, o, i)
            });
        if (f && (t = (e = ve(r, n[0].ownerDocument, !1, n, i)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || i)) {
            for (s = (a = E.map(he(e, "script"), Ne)).length; c < f; c++)
                l = e,
                c !== d && (l = E.clone(l, !0, !0),
                s && E.merge(a, he(l, "script"))),
                o.call(n[c], l, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument,
                E.map(a, je),
                c = 0; c < s; c++)
                    l = a[c],
                    de.test(l.type || "") && !V.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : x(l.textContent.replace(ke, ""), l, u))
        }
        return n
    }
    function De(e, t, n) {
        for (var r, o = t ? E.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || E.cleanData(he(r)),
            r.parentNode && (n && oe(r) && me(he(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, l, u, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = he(c),
                r = 0,
                o = (i = he(e)).length; r < o; r++)
                    s = i[r],
                    l = a[r],
                    u = void 0,
                    "input" === (u = l.nodeName.toLowerCase()) && ce.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || he(e),
                    a = a || he(c),
                    r = 0,
                    o = i.length; r < o; r++)
                        Ie(i[r], a[r]);
                else
                    Ie(e, c);
            return 0 < (a = he(c, "script")).length && me(a, !f && he(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, o = E.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Q(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[V.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(he(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !pe[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(he(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Le(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(he(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), o = r.length - 1, i = 0; i <= o; i++)
                t = i === o ? this : this.clone(!0),
                E(r[i])[a](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Oe(e, t, n) {
        var r, o = {};
        for (r in t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.call(e),
        t)
            e.style[r] = o[r];
        return n
    }
    var He, Pe, qe, Me, _e, $e, Re, Be, Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i"), We = function(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? C : t).getComputedStyle(e)
    }, ze = new RegExp(ne.join("|"),"i");
    function Ue() {
        var e;
        Be && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        re.appendChild(Re).appendChild(Be),
        e = C.getComputedStyle(Be),
        He = "1%" !== e.top,
        $e = 12 === Xe(e.marginLeft),
        Be.style.right = "60%",
        Me = 36 === Xe(e.right),
        Pe = 36 === Xe(e.width),
        Be.style.position = "absolute",
        qe = 12 === Xe(Be.offsetWidth / 3),
        re.removeChild(Re),
        Be = null)
    }
    function Xe(e) {
        return Math.round(parseFloat(e))
    }
    function Qe(e, t, n) {
        var r, o, i = e.style;
        return (n = n || We(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = E.style(e, t)),
        !y.pixelBoxStyles() && Fe.test(o) && ze.test(t) && (r = i.width,
        e = i.minWidth,
        t = i.maxWidth,
        i.minWidth = i.maxWidth = i.width = o,
        o = n.width,
        i.width = r,
        i.minWidth = e,
        i.maxWidth = t)),
        void 0 !== o ? o + "" : o
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Re = T.createElement("div"),
    (Be = T.createElement("div")).style && (Be.style.backgroundClip = "content-box",
    Be.cloneNode(!0).style.backgroundClip = "",
    y.clearCloneStyle = "content-box" === Be.style.backgroundClip,
    E.extend(y, {
        boxSizingReliable: function() {
            return Ue(),
            Pe
        },
        pixelBoxStyles: function() {
            return Ue(),
            Me
        },
        pixelPosition: function() {
            return Ue(),
            He
        },
        reliableMarginLeft: function() {
            return Ue(),
            $e
        },
        scrollboxSize: function() {
            return Ue(),
            qe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == _e && (e = T.createElement("table"),
            t = T.createElement("tr"),
            n = T.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            re.appendChild(e).appendChild(t).appendChild(n),
            n = C.getComputedStyle(t),
            _e = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            re.removeChild(e)),
            _e
        }
    }));
    var Ve = ["Webkit", "Moz", "ms"]
      , Ge = T.createElement("div").style
      , Ke = {};
    function Ze(e) {
        var t = E.cssProps[e] || Ke[e];
        return t || (e in Ge ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; )
                if ((e = Ve[n] + t)in Ge)
                    return e
        }(e) || e)
    }
    var Je = /^(none|table(?!-c[ea]).+)/
      , et = /^--/
      , tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , nt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function ot(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += E.css(e, n + ne[a], !0, o)),
            r ? ("content" === n && (l -= E.css(e, "padding" + ne[a], !0, o)),
            "margin" !== n && (l -= E.css(e, "border" + ne[a] + "Width", !0, o))) : (l += E.css(e, "padding" + ne[a], !0, o),
            "padding" !== n ? l += E.css(e, "border" + ne[a] + "Width", !0, o) : s += E.css(e, "border" + ne[a] + "Width", !0, o));
        return !r && 0 <= i && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5)) || 0),
        l
    }
    function it(e, t, n) {
        var r = We(e)
          , o = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
          , i = o
          , a = Qe(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, r),
        (i = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }
    function at(e, t, n, r, o) {
        return new at.prototype.init(e,t,n,r,o)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Qe(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = X(t), l = et.test(t), u = e.style;
                if (l || (t = Ze(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                "string" === (i = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                i = "number"),
                null != n && n == n && ("number" !== i || l || (n += o && o[3] || (E.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i = X(t);
            return et.test(t) || (t = Ze(i)),
            "normal" === (o = void 0 === (o = (i = E.cssHooks[t] || E.cssHooks[i]) && "get"in i ? i.get(e, !0, n) : o) ? Qe(e, t, r) : o) && t in nt && (o = nt[t]),
            "" === n || n ? (t = parseFloat(o),
            !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }),
    E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !Je.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, s, n) : Oe(e, tt, function() {
                        return it(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r, o = We(e), i = !y.scrollboxSize() && "absolute" === o.position, a = (i || n) && "border-box" === E.css(e, "boxSizing", !1, o), n = n ? ot(e, s, n, a, o) : 0;
                return a && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - ot(e, s, "border", !1, o) - .5)),
                n && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = E.css(e, s)),
                rt(0, t, n)
            }
        }
    }),
    E.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, i) {
        E.cssHooks[o + i] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + ne[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== o && (E.cssHooks[o + i].set = rt)
    }),
    E.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e),
                    o = t.length; a < o; a++)
                        i[t[a]] = E.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    (E.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return (e && e.get ? e : at.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : at.propHooks._default).set(this),
            this
        }
    },
    at.prototype.init.prototype = at.prototype,
    at.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    at.propHooks.scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = at.prototype.init,
    E.fx.step = {};
    var st, lt, ut = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
    function ft() {
        lt && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ft) : C.setTimeout(ft, E.fx.interval),
        E.fx.tick())
    }
    function dt() {
        return C.setTimeout(function() {
            st = void 0
        }),
        st = Date.now()
    }
    function pt(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = ne[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function ht(e, t, n) {
        for (var r, o = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function mt(o, e, t) {
        var n, i, r = 0, a = mt.prefilters.length, s = E.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            for (var e = st || dt(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++)
                u.tweens[n].run(t);
            return s.notifyWith(o, [u, t, e]),
            t < 1 && r ? e : (r || s.notifyWith(o, [u, 1, 0]),
            s.resolveWith(o, [u]),
            !1)
        }, u = s.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || dt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = E.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(e),
                e
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? (s.notifyWith(o, [u, 1, 0]),
                s.resolveWith(o, [u, e])) : s.rejectWith(o, [u, e]),
                this
            }
        }), c = u.props;
        for (!function(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = X(n)],
                i = e[n],
                Array.isArray(i) && (o = i[1],
                i = e[n] = i[0]),
                n !== r && (e[r] = i,
                delete e[n]),
                (a = E.cssHooks[r]) && "expand"in a)
                    for (n in i = a.expand(i),
                    delete e[r],
                    i)
                        n in e || (e[n] = i[n],
                        t[n] = o);
                else
                    t[r] = o
        }(c, u.opts.specialEasing); r < a; r++)
            if (n = mt.prefilters[r].call(u, o, c, u.opts))
                return b(n.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(c, ht, u),
        b(u.opts.start) && u.opts.start.call(o, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        E.fx.timer(E.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    E.Animation = E.extend(mt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, o = (e = b(e) ? (t = e,
            ["*"]) : e.match(P)).length; r < o; r++)
                n = e[r],
                mt.tweeners[n] = mt.tweeners[n] || [],
                mt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, l, u, c = "width"in t || "height"in t, f = this, d = {}, p = e.style, h = e.nodeType && ae(e), m = V.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    E.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (o = t[r],
                ut.test(o)) {
                    if (delete t[r],
                    i = i || "toggle" === o,
                    o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r])
                            continue;
                        h = !0
                    }
                    d[r] = m && m[r] || E.style(e, r)
                }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (u = m && m.display) && (u = V.get(e, "display")),
                "none" === (c = E.css(e, "display")) && (u ? c = u : (ue([e], !0),
                u = e.style.display || u,
                c = E.css(e, "display"),
                ue([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (f.done(function() {
                    p.display = u
                }),
                null == u && (c = p.display,
                u = "none" === c ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                f.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                d)
                    l || (m ? "hidden"in m && (h = m.hidden) : m = V.access(e, "fxshow", {
                        display: u
                    }),
                    i && (m.hidden = !h),
                    h && ue([e], !0),
                    f.done(function() {
                        for (r in h || ue([e]),
                        V.remove(e, "fxshow"),
                        d)
                            E.style(e, r, d[r])
                    })),
                    l = ht(h ? m[r] : 0, r, f),
                    r in m || (m[r] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            b(r.old) && r.old.call(this),
            r.queue && E.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var o = E.isEmptyObject(t)
              , i = E.speed(e, n, r)
              , r = function() {
                var e = mt(this, E.extend({}, t), i);
                (o || V.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            o || !1 === i.queue ? this.each(r) : this.queue(i.queue, r)
        },
        stop: function(o, e, i) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            return "string" != typeof o && (i = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = E.timers
                  , r = V.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ct.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i),
                    e = !1,
                    n.splice(t, 1));
                !e && i || E.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = V.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], o = E.timers, i = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < i; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, r) {
        var o = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(pt(r, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: pt("show"),
        slideUp: pt("hide"),
        slideToggle: pt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        st = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        lt || (lt = !0,
        ft())
    }
    ,
    E.fx.stop = function() {
        lt = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        this.queue(e = e || "fx", function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    f = T.createElement("input"),
    ee = T.createElement("select").appendChild(T.createElement("option")),
    f.type = "checkbox",
    y.checkOn = "" !== f.value,
    y.optSelected = ee.selected,
    (f = T.createElement("input")).value = "t",
    f.type = "radio",
    y.radioValue = "t" === f.value;
    var gt, vt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return F(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? gt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : !(o && "get"in o && null !== (r = o.get(e, t))) && null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    gt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = vt[t] || E.find.attr;
        vt[t] = function(e, t, n) {
            var r, o, i = t.toLowerCase();
            return n || (o = vt[i],
            vt[i] = r,
            r = null != a(e, t, n) ? i : null,
            vt[i] = o),
            r
        }
    });
    var yt = /^(?:input|select|textarea|button)$/i
      , bt = /^(?:a|area)$/i;
    function xt(e) {
        return (e.match(P) || []).join(" ")
    }
    function wt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Ct(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return F(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                o = E.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, a, s = 0;
            if (b(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, wt(this)))
                });
            if ((e = Ct(t)).length)
                for (; n = this[s++]; )
                    if (a = wt(n),
                    r = 1 === n.nodeType && " " + xt(a) + " ") {
                        for (i = 0; o = e[i++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a !== (a = xt(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, o, i, a, s = 0;
            if (b(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, wt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Ct(t)).length)
                for (; n = this[s++]; )
                    if (a = wt(n),
                    r = 1 === n.nodeType && " " + xt(a) + " ") {
                        for (i = 0; o = e[i++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        a !== (a = xt(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var i = typeof o
              , a = "string" == i || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                E(this).toggleClass(o.call(this, e, wt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0,
                    n = E(this),
                    r = Ct(o); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== o && "boolean" != i || ((e = wt(this)) && V.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== o && V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + xt(wt(t)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    E.fn.extend({
        val: function(t) {
            var n, e, r, o = this[0];
            return arguments.length ? (r = b(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(Tt, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : xt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? r + 1 : n.length, s = r < 0 ? a : o ? r : 0; s < a; s++)
                        if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(),
                            o)
                                return t;
                            i.push(t)
                        }
                    return i
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = E.makeArray(t), a = o.length; a--; )
                        ((r = o[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        y.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    function Et(e) {
        e.stopPropagation()
    }
    var St = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var o, i, a, s, l, u, c, f = [n || T], d = v.call(e, "type") ? e.type : e, p = v.call(e, "namespace") ? e.namespace.split(".") : [], h = c = i = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
            p.sort()),
            s = d.indexOf(":") < 0 && "on" + d,
            (e = e[E.expando] ? e : new E.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            u = E.event.special[d] || {},
            r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !m(n)) {
                    for (a = u.delegateType || d,
                    St.test(a + d) || (h = h.parentNode); h; h = h.parentNode)
                        f.push(h),
                        i = h;
                    i === (n.ownerDocument || T) && f.push(i.defaultView || i.parentWindow || C)
                }
                for (o = 0; (h = f[o++]) && !e.isPropagationStopped(); )
                    c = h,
                    e.type = 1 < o ? a : u.bindType || d,
                    (l = (V.get(h, "events") || Object.create(null))[e.type] && V.get(h, "handle")) && l.apply(h, t),
                    (l = s && h[s]) && l.apply && Q(h) && (e.result = l.apply(h, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !Q(n) || s && b(n[d]) && !m(n) && ((i = n[s]) && (n[s] = null),
                E.event.triggered = d,
                e.isPropagationStopped() && c.addEventListener(d, Et),
                n[d](),
                e.isPropagationStopped() && c.removeEventListener(d, Et),
                E.event.triggered = void 0,
                i && (n[s] = i)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            e = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(e, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function o(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        }
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = V.access(e, r);
                t || e.addEventListener(n, o, !0),
                V.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = V.access(e, r) - 1;
                t ? V.access(e, r, t) : (e.removeEventListener(n, o, !0),
                V.remove(e, r))
            }
        }
    });
    var kt = C.location
      , At = {
        guid: Date.now()
    }
      , Nt = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var jt = /\[\]$/
      , It = /\r?\n/g
      , Lt = /^(?:submit|button|image|reset|file)$/i
      , Dt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = b(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, o, i) {
                    if (Array.isArray(e))
                        E.each(e, function(e, t) {
                            o || jt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
                        });
                    else if (o || "object" !== h(e))
                        i(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], o, i)
                }(r, e[r], t, n);
        return o.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !Lt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g
      , Ht = /#.*$/
      , Pt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:GET|HEAD)$/
      , _t = /^\/\//
      , $t = {}
      , Rt = {}
      , Bt = "*/".concat("*")
      , Ft = T.createElement("a");
    function Wt(i) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, o = e.toLowerCase().match(P) || [];
            if (b(t))
                for (; n = o[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }
    function zt(t, r, o, i) {
        var a = {}
          , s = t === Rt;
        function l(e) {
            var n;
            return a[e] = !0,
            E.each(t[e] || [], function(e, t) {
                t = t(r, o, i);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(r.dataTypes[0]) || !a["*"] && l("*")
    }
    function Ut(e, t) {
        var n, r, o = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && E.extend(!0, e, r),
        e
    }
    Ft.href = kt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
        },
        ajaxPrefilter: Wt($t),
        ajaxTransport: Wt(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, u, c, n, f, d, p, r, o, h = E.ajaxSetup({}, t = t || {}), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? E(m) : E.event, v = E.Deferred(), y = E.Callbacks("once memory"), b = h.statusCode || {}, i = {}, a = {}, s = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (d) {
                        if (!n)
                            for (n = {}; t = qt.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return d ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == d && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    i[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == d && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (d)
                            x.always(e[x.status]);
                        else
                            for (var t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return l && l.abort(e),
                    w(0, e),
                    this
                }
            };
            if (v.promise(x),
            h.url = ((e || h.url || kt.href) + "").replace(_t, kt.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                o = T.createElement("a");
                try {
                    o.href = h.url,
                    o.href = o.href,
                    h.crossDomain = Ft.protocol + "//" + Ft.host != o.protocol + "//" + o.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)),
            zt($t, h, t, x),
            d)
                return x;
            for (r in (p = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            u = h.url.replace(Ht, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (o = h.url.slice(u.length),
            h.data && (h.processData || "string" == typeof h.data) && (u += (Nt.test(u) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (u = u.replace(Pt, "$1"),
            o = (Nt.test(u) ? "&" : "?") + "_=" + At.guid++ + o),
            h.url = u + o),
            h.ifModified && (E.lastModified[u] && x.setRequestHeader("If-Modified-Since", E.lastModified[u]),
            E.etag[u] && x.setRequestHeader("If-None-Match", E.etag[u])),
            (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType),
            x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                x.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, x, h) || d))
                return x.abort();
            if (s = "abort",
            y.add(h.complete),
            x.done(h.success),
            x.fail(h.error),
            l = zt(Rt, h, t, x)) {
                if (x.readyState = 1,
                p && g.trigger("ajaxSend", [x, h]),
                d)
                    return x;
                h.async && 0 < h.timeout && (f = C.setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    d = !1,
                    l.send(i, w)
                } catch (e) {
                    if (d)
                        throw e;
                    w(-1, e)
                }
            } else
                w(-1, "No Transport");
            function w(e, t, n, r) {
                var o, i, a, s = t;
                d || (d = !0,
                f && C.clearTimeout(f),
                l = void 0,
                c = r || "",
                x.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        i = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                i = o;
                                break
                            }
                            a = a || o
                        }
                        i = i || a
                    }
                    if (i)
                        return i !== l[0] && l.unshift(i),
                        n[i]
                }(h, x, n)),
                !r && -1 < E.inArray("script", h.dataTypes) && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                a = function(e, t, n, r) {
                    var o, i, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i; )
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = i,
                        i = c.shift())
                            if ("*" === i)
                                i = l;
                            else if ("*" !== l && l !== i) {
                                if (!(a = u[l + " " + i] || u["* " + i]))
                                    for (o in u)
                                        if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + i
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, x, r),
                r ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (E.lastModified[u] = n),
                (n = x.getResponseHeader("etag")) && (E.etag[u] = n)),
                204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                o = a.data,
                r = !(i = a.error))) : (i = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                x.status = e,
                x.statusText = (t || s) + "",
                r ? v.resolveWith(m, [o, s, x]) : v.rejectWith(m, [x, s, i]),
                x.statusCode(b),
                b = void 0,
                p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? o : i]),
                y.fireWith(m, [x, s]),
                p && (g.trigger("ajaxComplete", [x, h]),
                --E.active || E.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, o) {
        E[o] = function(e, t, n, r) {
            return b(t) && (r = r || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (b(e) && (e = e.call(this[0])),
            e = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Xt = {
        0: 200,
        1223: 204
    }
      , Qt = E.ajaxSettings.xhr();
    y.cors = !!Qt && "withCredentials"in Qt,
    y.ajax = Qt = !!Qt,
    E.ajaxTransport(function(o) {
        var i, a;
        if (y.cors || Qt && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = o.xhr();
                    if (r.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            r[n] = o.xhrFields[n];
                    for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    i = function(e) {
                        return function() {
                            i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Xt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = i(),
                    a = r.onerror = r.ontimeout = i("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            i && a()
                        })
                    }
                    ,
                    i = i("abort");
                    try {
                        r.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (i)
                            throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var r, o;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        r.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(r[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var Yt = []
      , Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || E.expando + "_" + At.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, o, i, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return i || E.error(r + " was not called"),
                i[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = C[r],
            C[r] = function() {
                i = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? E(C).removeProp(r) : C[r] = o,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Yt.push(r)),
                i && b(o) && o(i[0]),
                i = o = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((f = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === f.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(r)) : t = T),
        r = !n && [],
        (n = N.exec(e)) ? [t.createElement(n[1])] : (n = ve([e], t, r),
        r && r.length && E(r).remove(),
        E.merge([], n.childNodes)));
        var r
    }
    ,
    E.fn.load = function(e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return -1 < s && (r = xt(e.slice(s)),
        e = e.slice(0, s)),
        b(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && E.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s = E.css(e, "position"), l = E(e), u = {};
            "static" === s && (e.style.position = "relative"),
            i = l.offset(),
            r = E.css(e, "top"),
            a = E.css(e, "left"),
            a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (o = (s = l.position()).top,
            s.left) : (o = parseFloat(r) || 0,
            parseFloat(a) || 0),
            null != (t = b(t) ? t.call(e, n, E.extend({}, i)) : t).top && (u.top = t.top - i.top + o),
            null != t.left && (u.left = t.left - i.left + a),
            "using"in t ? t.using.call(e, u) : l.css(u)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    o.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - E.css(r, "marginTop", !0),
                    left: t.left - o.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var i = "pageYOffset" === o;
        E.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r;
                return m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n ? r ? r[o] : e[t] : void (r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ye(y.pixelPosition, function(e, t) {
            if (t)
                return t = Qe(e, n),
                Fe.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, i) {
            E.fn[i] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , o = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return m(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t],
        t = e,
        e = r),
        b(e))
            return n = s.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            r
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = A,
    E.isFunction = b,
    E.isWindow = m,
    E.camelCase = X,
    E.type = h,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Kt = C.jQuery
      , Zt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Zt),
        e && C.jQuery === E && (C.jQuery = Kt),
        E
    }
    ,
    void 0 === e && (C.jQuery = C.$ = E),
    E
}),
function(i) {
    "use strict";
    i.fn.fitVids = function(e) {
        var t, n, o = {
            customSelector: null,
            ignore: null
        };
        return document.getElementById("fit-vids-style") || (t = document.head || document.getElementsByTagName("head")[0],
        (n = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
        t.appendChild(n.childNodes[1])),
        e && i.extend(o, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            o.customSelector && e.push(o.customSelector);
            var r = ".fitvidsignore";
            o.ignore && (r = r + ", " + o.ignore);
            e = i(this).find(e.join(","));
            (e = (e = e.not("object object")).not(r)).each(function(e) {
                var t, n = i(this);
                0 < n.parents(r).length || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length || (n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9),
                n.attr("width", 16)),
                t = ("object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height()) / (isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10)),
                n.attr("id") || n.attr("id", "fitvid" + e),
                n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                n.removeAttr("height").removeAttr("width"))
            })
        })
    }
}(window.jQuery || window.Zepto),
$(function() {
    var n, r, e, o, t = $("nav.greedy-nav .greedy-nav__toggle"), i = $("nav.greedy-nav .visible-links"), a = $("nav.greedy-nav .hidden-links"), s = $("nav.greedy-nav"), l = $("nav.greedy-nav .site-logo"), u = $("nav.greedy-nav .site-logo img"), c = $("nav.greedy-nav .site-title"), f = $("nav.greedy-nav button.search__toggle");
    function d() {
        function t(e, t) {
            r += t,
            n += 1,
            o.push(r)
        }
        r = n = 0,
        e = 1e3,
        o = [],
        i.children().outerWidth(t),
        a.children().each(function() {
            var e;
            (e = (e = $(this)).clone()).css("visibility", "hidden"),
            i.append(e),
            t(0, e.outerWidth()),
            e.remove()
        })
    }
    d();
    var p, h, m, g, v = $(window).width(), y = v < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
    function b() {
        var e = (v = $(window).width()) < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
        e !== y && d(),
        y = e,
        h = i.children().length,
        p = s.innerWidth() - (0 !== l.length ? l.outerWidth(!0) : 0) - c.outerWidth(!0) - (0 !== f.length ? f.outerWidth(!0) : 0) - (h !== o.length ? t.outerWidth(!0) : 0),
        m = o[h - 1],
        p < m ? (i.children().last().prependTo(a),
        --h,
        b()) : p + (h === o.length - 1 ? t.outerWidth(!0) : 0) > o[h] && (a.children().first().appendTo(i),
        h += 1,
        b()),
        t.attr("count", n - h),
        h === n ? t.addClass("hidden") : t.removeClass("hidden")
    }
    $(window).resize(function() {
        b()
    }),
    t.on("click", function() {
        a.toggleClass("hidden"),
        $(this).toggleClass("close"),
        clearTimeout(g)
    }),
    a.on("mouseleave", function() {
        g = setTimeout(function() {
            a.addClass("hidden")
        }, e)
    }).on("mouseenter", function() {
        clearTimeout(g)
    }),
    0 === u.length || u[0].complete || 0 !== u[0].naturalWidth ? b() : u.one("load error", b)
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function(u) {
    function e() {}
    function c(e, t) {
        h.ev.on("mfp" + e + x, t)
    }
    function f(e, t, n, r) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        r ? t && t.appendChild(o) : (o = u(o),
        t && o.appendTo(t)),
        o
    }
    function d(e, t) {
        h.ev.triggerHandler("mfp" + e, t),
        h.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        h.st.callbacks[e] && h.st.callbacks[e].apply(h, u.isArray(t) ? t : [t]))
    }
    function p(e) {
        return e === t && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = u(h.st.closeMarkup.replace("%title%", h.st.tClose)),
        t = e),
        h.currTemplate.closeBtn
    }
    function i() {
        u.magnificPopup.instance || ((h = new e).init(),
        u.magnificPopup.instance = h)
    }
    var h, r, m, o, g, t, l = "Close", v = "BeforeClose", y = "MarkupParse", b = "Open", x = ".mfp", w = "mfp-ready", n = "mfp-removing", a = "mfp-prevent-close", s = !!window.jQuery, C = u(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            h.isLowIE = h.isIE8 = document.all && !document.addEventListener,
            h.isAndroid = /android/gi.test(e),
            h.isIOS = /iphone|ipad|ipod/gi.test(e),
            h.supportsTransition = function() {
                var e = document.createElement("p").style
                  , t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length; )
                    if (t.pop() + "Transition"in e)
                        return !0;
                return !1
            }(),
            h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            m = u(document),
            h.popupsCache = {}
        },
        open: function(e) {
            if (!1 === e.isObj) {
                h.items = e.items.toArray(),
                h.index = 0;
                for (var t, n = e.items, r = 0; r < n.length; r++)
                    if ((t = (t = n[r]).parsed ? t.el[0] : t) === e.el[0]) {
                        h.index = r;
                        break
                    }
            } else
                h.items = u.isArray(e.items) ? e.items : [e.items],
                h.index = e.index || 0;
            if (!h.isOpen) {
                h.types = [],
                g = "",
                e.mainEl && e.mainEl.length ? h.ev = e.mainEl.eq(0) : h.ev = m,
                e.key ? (h.popupsCache[e.key] || (h.popupsCache[e.key] = {}),
                h.currTemplate = h.popupsCache[e.key]) : h.currTemplate = {},
                h.st = u.extend(!0, {}, u.magnificPopup.defaults, e),
                h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos,
                h.st.modal && (h.st.closeOnContentClick = !1,
                h.st.closeOnBgClick = !1,
                h.st.showCloseBtn = !1,
                h.st.enableEscapeKey = !1),
                h.bgOverlay || (h.bgOverlay = f("bg").on("click" + x, function() {
                    h.close()
                }),
                h.wrap = f("wrap").attr("tabindex", -1).on("click" + x, function(e) {
                    h._checkIfClose(e.target) && h.close()
                }),
                h.container = f("container", h.wrap)),
                h.contentContainer = f("content"),
                h.st.preloader && (h.preloader = f("preloader", h.container, h.st.tLoading));
                var o = u.magnificPopup.modules;
                for (r = 0; r < o.length; r++) {
                    var i = (i = o[r]).charAt(0).toUpperCase() + i.slice(1);
                    h["init" + i].call(h)
                }
                d("BeforeOpen"),
                h.st.showCloseBtn && (h.st.closeBtnInside ? (c(y, function(e, t, n, r) {
                    n.close_replaceWith = p(r.type)
                }),
                g += " mfp-close-btn-in") : h.wrap.append(p())),
                h.st.alignTop && (g += " mfp-align-top"),
                h.fixedContentPos ? h.wrap.css({
                    overflow: h.st.overflowY,
                    overflowX: "hidden",
                    overflowY: h.st.overflowY
                }) : h.wrap.css({
                    top: C.scrollTop(),
                    position: "absolute"
                }),
                !1 !== h.st.fixedBgPos && ("auto" !== h.st.fixedBgPos || h.fixedContentPos) || h.bgOverlay.css({
                    height: m.height(),
                    position: "absolute"
                }),
                h.st.enableEscapeKey && m.on("keyup" + x, function(e) {
                    27 === e.keyCode && h.close()
                }),
                C.on("resize" + x, function() {
                    h.updateSize()
                }),
                h.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                g && h.wrap.addClass(g);
                var a = h.wH = C.height()
                  , s = {};
                h.fixedContentPos && (!h._hasScrollBar(a) || (l = h._getScrollbarSize()) && (s.marginRight = l)),
                h.fixedContentPos && (h.isIE7 ? u("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var l = h.st.mainClass;
                return h.isIE7 && (l += " mfp-ie7"),
                l && h._addClassToMFP(l),
                h.updateItemHTML(),
                d("BuildControls"),
                u("html").css(s),
                h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || u(document.body)),
                h._lastFocusedEl = document.activeElement,
                setTimeout(function() {
                    h.content ? (h._addClassToMFP(w),
                    h._setFocus()) : h.bgOverlay.addClass(w),
                    m.on("focusin" + x, h._onFocusIn)
                }, 16),
                h.isOpen = !0,
                h.updateSize(a),
                d(b),
                e
            }
            h.updateItemHTML()
        },
        close: function() {
            h.isOpen && (d(v),
            h.isOpen = !1,
            h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP(n),
            setTimeout(function() {
                h._close()
            }, h.st.removalDelay)) : h._close())
        },
        _close: function() {
            d(l);
            var e = n + " " + w + " ";
            h.bgOverlay.detach(),
            h.wrap.detach(),
            h.container.empty(),
            h.st.mainClass && (e += h.st.mainClass + " "),
            h._removeClassFromMFP(e),
            h.fixedContentPos && (e = {
                marginRight: ""
            },
            h.isIE7 ? u("body, html").css("overflow", "") : e.overflow = "",
            u("html").css(e)),
            m.off("keyup.mfp focusin" + x),
            h.ev.off(x),
            h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            h.bgOverlay.attr("class", "mfp-bg"),
            h.container.attr("class", "mfp-container"),
            !h.st.showCloseBtn || h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type] || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(),
            h.st.autoFocusLast && h._lastFocusedEl && u(h._lastFocusedEl).focus(),
            h.currItem = null,
            h.content = null,
            h.currTemplate = null,
            h.prevHeight = 0,
            d("AfterClose")
        },
        updateSize: function(e) {
            var t;
            h.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth,
            t = window.innerHeight * t,
            h.wrap.css("height", t),
            h.wH = t) : h.wH = e || C.height(),
            h.fixedContentPos || h.wrap.css("height", h.wH),
            d("Resize")
        },
        updateItemHTML: function() {
            var e = h.items[h.index];
            h.contentContainer.detach(),
            h.content && h.content.detach();
            var t = (e = !e.parsed ? h.parseEl(h.index) : e).type;
            d("BeforeChange", [h.currItem ? h.currItem.type : "", t]),
            h.currItem = e,
            h.currTemplate[t] || (n = !!h.st[t] && h.st[t].markup,
            d("FirstMarkupParse", n),
            h.currTemplate[t] = !n || u(n)),
            o && o !== e.type && h.container.removeClass("mfp-" + o + "-holder");
            var n = h["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, h.currTemplate[t]);
            h.appendContent(n, t),
            e.preloaded = !0,
            d("Change", e),
            o = e.type,
            h.container.prepend(h.contentContainer),
            d("AfterChange")
        },
        appendContent: function(e, t) {
            (h.content = e) ? h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[t] ? h.content.find(".mfp-close").length || h.content.append(p()) : h.content = e : h.content = "",
            d("BeforeAppend"),
            h.container.addClass("mfp-" + t + "-holder"),
            h.contentContainer.append(h.content)
        },
        parseEl: function(e) {
            var t, n = h.items[e];
            if ((n = n.tagName ? {
                el: u(n)
            } : (t = n.type,
            {
                data: n,
                src: n.src
            })).el) {
                for (var r = h.types, o = 0; o < r.length; o++)
                    if (n.el.hasClass("mfp-" + r[o])) {
                        t = r[o];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"),
                n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || h.st.type || "inline",
            n.index = e,
            n.parsed = !0,
            h.items[e] = n,
            d("ElementParse", n),
            h.items[e]
        },
        addGroup: function(t, n) {
            function e(e) {
                e.mfpEl = this,
                h._openClick(e, t, n)
            }
            var r = "click.magnificPopup";
            (n = n || {}).mainEl = t,
            n.items ? (n.isObj = !0,
            t.off(r).on(r, e)) : (n.isObj = !1,
            n.delegate ? t.off(r).on(r, n.delegate, e) : (n.items = t).off(r).on(r, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n : u.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var r = (void 0 !== n.disableOn ? n : u.magnificPopup.defaults).disableOn;
                if (r)
                    if (u.isFunction(r)) {
                        if (!r.call(h))
                            return !0
                    } else if (C.width() < r)
                        return !0;
                e.type && (e.preventDefault(),
                h.isOpen && e.stopPropagation()),
                n.el = u(e.mfpEl),
                n.delegate && (n.items = t.find(n.delegate)),
                h.open(n)
            }
        },
        updateStatus: function(e, t) {
            var n;
            h.preloader && (r !== e && h.container.removeClass("mfp-s-" + r),
            n = {
                status: e,
                text: t = !t && "loading" === e ? h.st.tLoading : t
            },
            d("UpdateStatus", n),
            e = n.status,
            h.preloader.html(t = n.text),
            h.preloader.find("a").on("click", function(e) {
                e.stopImmediatePropagation()
            }),
            h.container.addClass("mfp-s-" + e),
            r = e)
        },
        _checkIfClose: function(e) {
            if (!u(e).hasClass(a)) {
                var t = h.st.closeOnContentClick
                  , n = h.st.closeOnBgClick;
                if (t && n)
                    return !0;
                if (!h.content || u(e).hasClass("mfp-close") || h.preloader && e === h.preloader[0])
                    return !0;
                if (e === h.content[0] || u.contains(h.content[0], e)) {
                    if (t)
                        return !0
                } else if (n && u.contains(document, e))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            h.bgOverlay.addClass(e),
            h.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            h.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (h.isIE7 ? m.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
        },
        _onFocusIn: function(e) {
            if (e.target !== h.wrap[0] && !u.contains(h.wrap[0], e.target))
                return h._setFocus(),
                !1
        },
        _parseMarkup: function(o, e, t) {
            var i;
            t.data && (e = u.extend(t.data, e)),
            d(y, [o, e, t]),
            u.each(e, function(e, t) {
                return void 0 === t || !1 === t || void (1 < (i = e.split("_")).length ? 0 < (n = o.find(x + "-" + i[0])).length && ("replaceWith" === (r = i[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === r ? n.is("img") ? n.attr("src", t) : n.replaceWith(u("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(i[1], t)) : o.find(x + "-" + e).html(t));
                var n, r
            })
        },
        _getScrollbarSize: function() {
            var e;
            return void 0 === h.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
            document.body.appendChild(e),
            h.scrollbarSize = e.offsetWidth - e.clientWidth,
            document.body.removeChild(e)),
            h.scrollbarSize
        }
    },
    u.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return i(),
            (e = e ? u.extend(!0, {}, e) : {}).isObj = !0,
            e.index = t || 0,
            this.instance.open(e)
        },
        close: function() {
            return u.magnificPopup.instance && u.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (u.magnificPopup.defaults[e] = t.options),
            u.extend(this.proto, t.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    u.fn.magnificPopup = function(e) {
        i();
        var t, n, r, o = u(this);
        return "string" == typeof e ? "open" === e ? (t = s ? o.data("magnificPopup") : o[0].magnificPopup,
        n = parseInt(arguments[1], 10) || 0,
        r = t.items ? t.items[n] : (r = o,
        (r = t.delegate ? o.find(t.delegate) : r).eq(n)),
        h._openClick({
            mfpEl: r
        }, o, t)) : h.isOpen && h[e].apply(h, Array.prototype.slice.call(arguments, 1)) : (e = u.extend(!0, {}, e),
        s ? o.data("magnificPopup", e) : o[0].magnificPopup = e,
        h.addGroup(o, e)),
        o
    }
    ;
    function T() {
        k && (S.after(k.addClass(E)).detach(),
        k = null)
    }
    var E, S, k, A = "inline";
    u.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                h.types.push(A),
                c(l + "." + A, function() {
                    T()
                })
            },
            getInline: function(e, t) {
                if (T(),
                e.src) {
                    var n, r = h.st.inline, o = u(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (S || (E = r.hiddenClass,
                    S = f(E),
                    E = "mfp-" + E),
                    k = o.after(S).detach().removeClass(E)),
                    h.updateStatus("ready")) : (h.updateStatus("error", r.tNotFound),
                    o = u("<div>")),
                    e.inlineElement = o
                }
                return h.updateStatus("ready"),
                h._parseMarkup(t, {}, e),
                t
            }
        }
    });
    function N() {
        I && u(document.body).removeClass(I)
    }
    function j() {
        N(),
        h.req && h.req.abort()
    }
    var I, L = "ajax";
    u.magnificPopup.registerModule(L, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                h.types.push(L),
                I = h.st.ajax.cursor,
                c(l + "." + L, j),
                c("BeforeChange." + L, j)
            },
            getAjax: function(r) {
                I && u(document.body).addClass(I),
                h.updateStatus("loading");
                var e = u.extend({
                    url: r.src,
                    success: function(e, t, n) {
                        n = {
                            data: e,
                            xhr: n
                        };
                        d("ParseAjax", n),
                        h.appendContent(u(n.data), L),
                        r.finished = !0,
                        N(),
                        h._setFocus(),
                        setTimeout(function() {
                            h.wrap.addClass(w)
                        }, 16),
                        h.updateStatus("ready"),
                        d("AjaxContentAdded")
                    },
                    error: function() {
                        N(),
                        r.finished = r.loadError = !0,
                        h.updateStatus("error", h.st.ajax.tError.replace("%url%", r.src))
                    }
                }, h.st.ajax.settings);
                return h.req = u.ajax(e),
                ""
            }
        }
    });
    var D;
    u.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = h.st.image
                  , t = ".image";
                h.types.push("image"),
                c(b + t, function() {
                    "image" === h.currItem.type && e.cursor && u(document.body).addClass(e.cursor)
                }),
                c(l + t, function() {
                    e.cursor && u(document.body).removeClass(e.cursor),
                    C.off("resize" + x)
                }),
                c("Resize" + t, h.resizeImage),
                h.isLowIE && c("AfterChange", h.resizeImage)
            },
            resizeImage: function() {
                var e, t = h.currItem;
                t && t.img && h.st.image.verticalFit && (e = 0,
                h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", h.wH - e))
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                D && clearInterval(D),
                e.isCheckingImgSize = !1,
                d("ImageHasSize", e),
                e.imgHidden && (h.content && h.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0
                  , r = t.img[0]
                  , o = function(e) {
                    D && clearInterval(D),
                    D = setInterval(function() {
                        0 < r.naturalWidth ? h._onImageHasSize(t) : (200 < n && clearInterval(D),
                        3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))
                    }, e)
                };
                o(1)
            },
            getImage: function(e, t) {
                var n, r = 0, o = function() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("ready")),
                    e.hasSize = !0,
                    e.loaded = !0,
                    d("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : i())
                }, i = function() {
                    e && (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("error", a.tError.replace("%url%", e.src))),
                    e.hasSize = !0,
                    e.loaded = !0,
                    e.loadError = !0)
                }, a = h.st.image, s = t.find(".mfp-img");
                return s.length && ((n = document.createElement("img")).className = "mfp-img",
                e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")),
                e.img = u(n).on("load.mfploader", o).on("error.mfploader", i),
                n.src = e.src,
                s.is("img") && (e.img = e.img.clone()),
                0 < (n = e.img[0]).naturalWidth ? e.hasSize = !0 : n.width || (e.hasSize = !1)),
                h._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title)
                            return e.data.title;
                        var t = h.st.image.titleSrc;
                        if (t) {
                            if (u.isFunction(t))
                                return t.call(h, e);
                            if (e.el)
                                return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e),
                h.resizeImage(),
                e.hasSize ? (D && clearInterval(D),
                e.loadError ? (t.addClass("mfp-loading"),
                h.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                h.updateStatus("ready"))) : (h.updateStatus("loading"),
                e.loading = !0,
                e.hasSize || (e.imgHidden = !0,
                t.addClass("mfp-loading"),
                h.findImageSize(e))),
                t
            }
        }
    });
    var O;
    u.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t, n, r, o, i, a = h.st.zoom, s = ".zoom";
                a.enabled && h.supportsTransition && (t = a.duration,
                n = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                      , n = "all " + a.duration / 1e3 + "s " + a.easing
                      , r = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }
                      , e = "transition";
                    return r["-webkit-" + e] = r["-moz-" + e] = r["-o-" + e] = r[e] = n,
                    t.css(r),
                    t
                }
                ,
                r = function() {
                    h.content.css("visibility", "visible")
                }
                ,
                c("BuildControls" + s, function() {
                    h._allowZoom() && (clearTimeout(o),
                    h.content.css("visibility", "hidden"),
                    (e = h._getItemToZoom()) ? ((i = n(e)).css(h._getOffset()),
                    h.wrap.append(i),
                    o = setTimeout(function() {
                        i.css(h._getOffset(!0)),
                        o = setTimeout(function() {
                            r(),
                            setTimeout(function() {
                                i.remove(),
                                e = i = null,
                                d("ZoomAnimationEnded")
                            }, 16)
                        }, t)
                    }, 16)) : r())
                }),
                c(v + s, function() {
                    if (h._allowZoom()) {
                        if (clearTimeout(o),
                        h.st.removalDelay = t,
                        !e) {
                            if (!(e = h._getItemToZoom()))
                                return;
                            i = n(e)
                        }
                        i.css(h._getOffset(!0)),
                        h.wrap.append(i),
                        h.content.css("visibility", "hidden"),
                        setTimeout(function() {
                            i.css(h._getOffset())
                        }, 16)
                    }
                }),
                c(l + s, function() {
                    h._allowZoom() && (r(),
                    i && i.remove(),
                    e = null)
                }))
            },
            _allowZoom: function() {
                return "image" === h.currItem.type
            },
            _getItemToZoom: function() {
                return !!h.currItem.hasSize && h.currItem.img
            },
            _getOffset: function(e) {
                var t = e ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem)
                  , n = t.offset()
                  , r = parseInt(t.css("padding-top"), 10)
                  , e = parseInt(t.css("padding-bottom"), 10);
                n.top -= u(window).scrollTop() - r;
                r = {
                    width: t.width(),
                    height: (s ? t.innerHeight() : t[0].offsetHeight) - e - r
                };
                return (O = void 0 === O ? void 0 !== document.createElement("p").style.MozTransform : O) ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left,
                r.top = n.top),
                r
            }
        }
    });
    function H(e) {
        var t;
        !h.currTemplate[P] || (t = h.currTemplate[P].find("iframe")).length && (e || (t[0].src = "//about:blank"),
        h.isIE8 && t.css("display", e ? "block" : "none"))
    }
    var P = "iframe";
    u.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                h.types.push(P),
                c("BeforeChange", function(e, t, n) {
                    t !== n && (t === P ? H() : n === P && H(!0))
                }),
                c(l + "." + P, function() {
                    H()
                })
            },
            getIframe: function(e, t) {
                var n = e.src
                  , r = h.st.iframe;
                u.each(r.patterns, function() {
                    if (-1 < n.indexOf(this.index))
                        return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                        n = this.src.replace("%id%", n),
                        !1
                });
                var o = {};
                return r.srcAction && (o[r.srcAction] = n),
                h._parseMarkup(t, o, e),
                h.updateStatus("ready"),
                t
            }
        }
    });
    function q(e) {
        var t = h.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
    function M(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    u.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = h.st.gallery
                  , e = ".mfp-gallery";
                if (h.direction = !0,
                !i || !i.enabled)
                    return !1;
                g += " mfp-gallery",
                c(b + e, function() {
                    i.navigateByImgClick && h.wrap.on("click" + e, ".mfp-img", function() {
                        if (1 < h.items.length)
                            return h.next(),
                            !1
                    }),
                    m.on("keydown" + e, function(e) {
                        37 === e.keyCode ? h.prev() : 39 === e.keyCode && h.next()
                    })
                }),
                c("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = M(t.text, h.currItem.index, h.items.length))
                }),
                c(y + e, function(e, t, n, r) {
                    var o = h.items.length;
                    n.counter = 1 < o ? M(i.tCounter, r.index, o) : ""
                }),
                c("BuildControls" + e, function() {
                    var e, t;
                    1 < h.items.length && i.arrows && !h.arrowLeft && (t = i.arrowMarkup,
                    e = h.arrowLeft = u(t.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(a),
                    t = h.arrowRight = u(t.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(a),
                    e.click(function() {
                        h.prev()
                    }),
                    t.click(function() {
                        h.next()
                    }),
                    h.container.append(e.add(t)))
                }),
                c("Change" + e, function() {
                    h._preloadTimeout && clearTimeout(h._preloadTimeout),
                    h._preloadTimeout = setTimeout(function() {
                        h.preloadNearbyImages(),
                        h._preloadTimeout = null
                    }, 16)
                }),
                c(l + e, function() {
                    m.off(e),
                    h.wrap.off("click" + e),
                    h.arrowRight = h.arrowLeft = null
                })
            },
            next: function() {
                h.direction = !0,
                h.index = q(h.index + 1),
                h.updateItemHTML()
            },
            prev: function() {
                h.direction = !1,
                h.index = q(h.index - 1),
                h.updateItemHTML()
            },
            goTo: function(e) {
                h.direction = e >= h.index,
                h.index = e,
                h.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var e = h.st.gallery.preload, t = Math.min(e[0], h.items.length), n = Math.min(e[1], h.items.length), r = 1; r <= (h.direction ? n : t); r++)
                    h._preloadItem(h.index + r);
                for (r = 1; r <= (h.direction ? t : n); r++)
                    h._preloadItem(h.index - r)
            },
            _preloadItem: function(e) {
                var t;
                e = q(e),
                h.items[e].preloaded || ((t = h.items[e]).parsed || (t = h.parseEl(e)),
                d("LazyLoad", t),
                "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
                    t.hasSize = !0
                }).on("error.mfploader", function() {
                    t.hasSize = !0,
                    t.loadError = !0,
                    d("LazyLoadError", t)
                }).attr("src", t.src)),
                t.preloaded = !0)
            }
        }
    });
    var _ = "retina";
    u.magnificPopup.registerModule(_, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                var n, r;
                1 < window.devicePixelRatio && (n = h.st.retina,
                r = n.ratio,
                1 < (r = isNaN(r) ? r() : r) && (c("ImageHasSize." + _, function(e, t) {
                    t.img.css({
                        "max-width": t.img[0].naturalWidth / r,
                        width: "100%"
                    })
                }),
                c("ElementParse." + _, function(e, t) {
                    t.src = n.replaceSrc(t, r)
                })))
            }
        }
    }),
    i()
}),
function(e, c) {
    var r, t = e.jQuery || e.Cowboy || (e.Cowboy = {});
    t.throttle = r = function(o, i, a, s) {
        var l, u = 0;
        function e() {
            var e = this
              , t = +new Date - u
              , n = arguments;
            function r() {
                u = +new Date,
                a.apply(e, n)
            }
            s && !l && r(),
            l && clearTimeout(l),
            s === c && o < t ? r() : !0 !== i && (l = setTimeout(s ? function() {
                l = c
            }
            : r, s === c ? o - t : o))
        }
        return "boolean" != typeof i && (s = a,
        a = i,
        i = c),
        t.guid && (e.guid = a.guid = a.guid || t.guid++),
        e
    }
    ,
    t.debounce = function(e, t, n) {
        return n === c ? r(e, t, !1) : r(e, n, !1 !== t)
    }
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(x) {
    "use strict";
    function w() {
        var n = {};
        return Array.prototype.forEach.call(arguments, function(e) {
            for (var t in e) {
                if (!e.hasOwnProperty(t))
                    return;
                n[t] = e[t]
            }
        }),
        n
    }
    function a(e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (var t, n = String(e), r = n.length, o = -1, i = "", a = n.charCodeAt(0); ++o < r; ) {
            if (0 === (t = n.charCodeAt(o)))
                throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            1 <= t && t <= 31 || 127 == t || 0 === o && 48 <= t && t <= 57 || 1 === o && 48 <= t && t <= 57 && 45 === a ? i += "\\" + t.toString(16) + " " : i += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
        }
        return "#" + i
    }
    function C() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }
    function T(e) {
        return e ? parseInt(x.getComputedStyle(e).height, 10) + e.offsetTop : 0
    }
    function E(e, t, n, r) {
        t.emitEvents && "function" == typeof x.CustomEvent && (r = new CustomEvent(e,{
            bubbles: !0,
            detail: {
                anchor: n,
                toggle: r
            }
        }),
        document.dispatchEvent(r))
    }
    var S = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0
    };
    return function(r, e) {
        var v, o, n, y, b = {
            cancelScroll: function(e) {
                cancelAnimationFrame(y),
                y = null,
                e || E("scrollCancel", v)
            }
        };
        b.animateScroll = function(r, o, e) {
            b.cancelScroll();
            var i, a, s, l, u, c, f, d, p, h, m = w(v || S, e || {}), g = "[object Number]" === Object.prototype.toString.call(r), t = g || !r.tagName ? null : r;
            (g || t) && (i = x.pageYOffset,
            m.header && !n && (n = document.querySelector(m.header)),
            e = T(n),
            a = g ? r : function(e, t, n, r) {
                var o = 0;
                if (e.offsetParent)
                    for (; o += e.offsetTop,
                    e = e.offsetParent; )
                        ;
                return o = Math.max(o - t - n, 0),
                o = r ? Math.min(o, C() - x.innerHeight) : o
            }(t, e, parseInt("function" == typeof m.offset ? m.offset(r, o) : m.offset, 10), m.clip),
            s = a - i,
            l = C(),
            u = 0,
            c = function(e, t) {
                e = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                return t.durationMax && e > t.durationMax ? t.durationMax : t.durationMin && e < t.durationMin ? t.durationMin : parseInt(e, 10)
            }(s, m),
            p = function(e, t) {
                var n = x.pageYOffset;
                if (e == t || n == t || (i < t && x.innerHeight + n) >= l)
                    return b.cancelScroll(!0),
                    e = t,
                    n = g,
                    0 === (t = r) && document.body.focus(),
                    n || (t.focus(),
                    document.activeElement !== t && (t.setAttribute("tabindex", "-1"),
                    t.focus(),
                    t.style.outline = "none"),
                    x.scrollTo(0, e)),
                    E("scrollStop", m, r, o),
                    !(y = f = null)
            }
            ,
            h = function(e) {
                var t, n, r;
                u += e - (f = f || e),
                d = i + s * (n = d = 1 < (d = 0 === c ? 0 : u / c) ? 1 : d,
                "easeInQuad" === (t = m).easing && (r = n * n),
                "easeOutQuad" === t.easing && (r = n * (2 - n)),
                "easeInOutQuad" === t.easing && (r = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                "easeInCubic" === t.easing && (r = n * n * n),
                "easeOutCubic" === t.easing && (r = --n * n * n + 1),
                "easeInOutCubic" === t.easing && (r = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                "easeInQuart" === t.easing && (r = n * n * n * n),
                "easeOutQuart" === t.easing && (r = 1 - --n * n * n * n),
                "easeInOutQuart" === t.easing && (r = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                "easeInQuint" === t.easing && (r = n * n * n * n * n),
                "easeOutQuint" === t.easing && (r = 1 + --n * n * n * n * n),
                "easeInOutQuint" === t.easing && (r = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                (r = t.customEasing ? t.customEasing(n) : r) || n),
                x.scrollTo(0, Math.floor(d)),
                p(d, a) || (y = x.requestAnimationFrame(h),
                f = e)
            }
            ,
            0 === x.pageYOffset && x.scrollTo(0, 0),
            t = r,
            e = m,
            g || history.pushState && e.updateURL && history.pushState({
                smoothScroll: JSON.stringify(e),
                anchor: t.id
            }, document.title, t === document.documentElement ? "#top" : "#" + t.id),
            "matchMedia"in x && x.matchMedia("(prefers-reduced-motion)").matches ? x.scrollTo(0, Math.floor(a)) : (E("scrollStart", m, r, o),
            b.cancelScroll(!0),
            x.requestAnimationFrame(h)))
        }
        ;
        function t(e) {
            if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest"in e.target && (o = e.target.closest(r)) && "a" === o.tagName.toLowerCase() && !e.target.closest(v.ignore) && o.hostname === x.location.hostname && o.pathname === x.location.pathname && /#/.test(o.href)) {
                var t, n;
                try {
                    n = a(decodeURIComponent(o.hash))
                } catch (e) {
                    n = a(o.hash)
                }
                if ("#" === n) {
                    if (!v.topOnEmptyHash)
                        return;
                    t = document.documentElement
                } else
                    t = document.querySelector(n);
                (t = t || "#top" !== n ? t : document.documentElement) && (e.preventDefault(),
                n = v,
                history.replaceState && n.updateURL && !history.state && (e = (e = x.location.hash) || "",
                history.replaceState({
                    smoothScroll: JSON.stringify(n),
                    anchor: e || x.pageYOffset
                }, document.title, e || x.location.href)),
                b.animateScroll(t, o))
            }
        }
        function i(e) {
            var t;
            null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v) && ("string" == typeof (t = history.state.anchor) && t && !(t = document.querySelector(a(history.state.anchor))) || b.animateScroll(t, null, {
                updateURL: !1
            }))
        }
        b.destroy = function() {
            v && (document.removeEventListener("click", t, !1),
            x.removeEventListener("popstate", i, !1),
            b.cancelScroll(),
            y = n = o = v = null)
        }
        ;
        return function() {
            if (!("querySelector"in document && "addEventListener"in x && "requestAnimationFrame"in x && "closest"in x.Element.prototype))
                throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            b.destroy(),
            v = w(S, e || {}),
            n = v.header ? document.querySelector(v.header) : null,
            document.addEventListener("click", t, !1),
            v.updateURL && v.popstate && x.addEventListener("popstate", i, !1)
        }(),
        b
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(e) : e.Gumshoe = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(c) {
    "use strict";
    function f(e, t, n) {
        n.settings.events && (n = new CustomEvent(e,{
            bubbles: !0,
            cancelable: !0,
            detail: n
        }),
        t.dispatchEvent(n))
    }
    function n(e) {
        var t = 0;
        if (e.offsetParent)
            for (; e; )
                t += e.offsetTop,
                e = e.offsetParent;
        return 0 <= t ? t : 0
    }
    function d(e) {
        e && e.sort(function(e, t) {
            return n(e.content) < n(t.content) ? -1 : 1
        })
    }
    function a(e, t, n) {
        return e = e.getBoundingClientRect(),
        t = "function" == typeof (t = t).offset ? parseFloat(t.offset()) : parseFloat(t.offset),
        n ? parseInt(e.bottom, 10) < (c.innerHeight || document.documentElement.clientHeight) : parseInt(e.top, 10) <= t
    }
    function s() {
        return c.innerHeight + c.pageYOffset >= Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }
    function p(e, t) {
        var n, r, o = e[e.length - 1];
        if (n = o,
        r = t,
        !(!s() || !a(n.content, r, !0)))
            return o;
        for (var i = e.length - 1; 0 <= i; i--)
            if (a(e[i].content, t))
                return e[i]
    }
    function h(e, t) {
        var n;
        !e || (n = e.nav.closest("li")) && (n.classList.remove(t.navClass),
        e.content.classList.remove(t.contentClass),
        r(n, t),
        f("gumshoeDeactivate", n, {
            link: e.nav,
            content: e.content,
            settings: t
        }))
    }
    var m = {
        navClass: "active",
        contentClass: "active",
        nested: !1,
        nestedClass: "active",
        offset: 0,
        reflow: !1,
        events: !0
    }
      , r = function(e, t) {
        !t.nested || (e = e.parentNode.closest("li")) && (e.classList.remove(t.nestedClass),
        r(e, t))
    }
      , g = function(e, t) {
        !t.nested || (e = e.parentNode.closest("li")) && (e.classList.add(t.nestedClass),
        g(e, t))
    };
    return function(e, t) {
        var n, o, i, r, a, s = {
            setup: function() {
                n = document.querySelectorAll(e),
                o = [],
                Array.prototype.forEach.call(n, function(e) {
                    var t = document.getElementById(decodeURIComponent(e.hash.substr(1)));
                    t && o.push({
                        nav: e,
                        content: t
                    })
                }),
                d(o)
            }
        };
        s.detect = function() {
            var e, t, n, r = p(o, a);
            r ? i && r.content === i.content || (h(i, a),
            t = a,
            !(e = r) || (n = e.nav.closest("li")) && (n.classList.add(t.navClass),
            e.content.classList.add(t.contentClass),
            g(n, t),
            f("gumshoeActivate", n, {
                link: e.nav,
                content: e.content,
                settings: t
            })),
            i = r) : i && (h(i, a),
            i = null)
        }
        ;
        function l(e) {
            r && c.cancelAnimationFrame(r),
            r = c.requestAnimationFrame(s.detect)
        }
        function u(e) {
            r && c.cancelAnimationFrame(r),
            r = c.requestAnimationFrame(function() {
                d(o),
                s.detect()
            })
        }
        s.destroy = function() {
            i && h(i, a),
            c.removeEventListener("scroll", l, !1),
            a.reflow && c.removeEventListener("resize", u, !1),
            a = r = i = n = o = null
        }
        ;
        return a = function() {
            var n = {};
            return Array.prototype.forEach.call(arguments, function(e) {
                for (var t in e) {
                    if (!e.hasOwnProperty(t))
                        return;
                    n[t] = e[t]
                }
            }),
            n
        }(m, t || {}),
        s.setup(),
        s.detect(),
        c.addEventListener("scroll", l, !1),
        a.reflow && c.addEventListener("resize", u, !1),
        s
    }
}),
$(function() {
    $("#main").fitVids();
    function e() {
        (0 === $(".author__urls-wrapper").find("button").length ? 1024 < $(window).width() : !$(".author__urls-wrapper").find("button").is(":visible")) ? $(".sidebar").addClass("sticky") : $(".sidebar").removeClass("sticky")
    }
    e(),
    $(window).resize(function() {
        e()
    }),
    $(".author__urls-wrapper").find("button").on("click", function() {
        $(".author__urls").toggleClass("is--visible"),
        $(".author__urls-wrapper").find("button").toggleClass("open")
    }),
    $(document).keyup(function(e) {
        27 === e.keyCode && $(".initial-content").hasClass("is--hidden") && ($(".search-content").toggleClass("is--visible"),
        $(".initial-content").toggleClass("is--hidden"))
    }),
    $(".search__toggle").on("click", function() {
        $(".search-content").toggleClass("is--visible"),
        $(".initial-content").toggleClass("is--hidden"),
        setTimeout(function() {
            $(".search-content").find("input").focus()
        }, 400)
    });
    new SmoothScroll('a[href*="#"]',{
        offset: 20,
        speed: 400,
        speedAsDuration: !0,
        durationMax: 500
    });
    0 < $("nav.toc").length && new Gumshoe("nav.toc a",{
        navClass: "active",
        contentClass: "active",
        nested: !1,
        nestedClass: "active",
        offset: 20,
        reflow: !0,
        events: !0
    }),
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").has("> img").addClass("image-popup"),
    $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
        },
        removalDelay: 500,
        mainClass: "mfp-zoom-in",
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    }),
    $(".page__content").find("h1, h2, h3, h4, h5, h6").each(function() {
        var e, t = $(this).attr("id");
        t && ((e = document.createElement("a")).className = "header-link",
        e.href = "#" + t,
        e.innerHTML = '<span class="sr-only">Permalink</span><i class="fas fa-link"></i>',
        e.title = "Permalink",
        $(this).append(e))
    })
});
