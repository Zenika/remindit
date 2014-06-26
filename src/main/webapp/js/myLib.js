/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = a.document, n = "2.1.0", o = function (a, b) {
        return new o.fn.init(a, b)
    }, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    o.fn = o.prototype = {jquery:n, constructor:o, selector:"", length:0, toArray:function () {
        return d.call(this)
    }, get:function (a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    }, pushStack:function (a) {
        var b = o.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
    }, each:function (a, b) {
        return o.each(this, a, b)
    }, map:function (a) {
        return this.pushStack(o.map(this, function (b, c) {
            return a.call(b, c, b)
        }))
    }, slice:function () {
        return this.pushStack(d.apply(this, arguments))
    }, first:function () {
        return this.eq(0)
    }, last:function () {
        return this.eq(-1)
    }, eq:function (a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end:function () {
        return this.prevObject || this.constructor(null)
    }, push:f, sort:c.sort, splice:c.splice}, o.extend = o.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, o.extend({expando:"jQuery" + (n + Math.random()).replace(/\D/g, ""), isReady:!0, error:function (a) {
        throw new Error(a)
    }, noop:function () {
    }, isFunction:function (a) {
        return"function" === o.type(a)
    }, isArray:Array.isArray, isWindow:function (a) {
        return null != a && a === a.window
    }, isNumeric:function (a) {
        return a - parseFloat(a) >= 0
    }, isPlainObject:function (a) {
        if ("object" !== o.type(a) || a.nodeType || o.isWindow(a))return!1;
        try {
            if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf"))return!1
        } catch (b) {
            return!1
        }
        return!0
    }, isEmptyObject:function (a) {
        var b;
        for (b in a)return!1;
        return!0
    }, type:function (a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    }, globalEval:function (a) {
        var b, c = eval;
        a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase:function (a) {
        return a.replace(p, "ms-").replace(q, r)
    }, nodeName:function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each:function (a, b, c) {
        var d, e = 0, f = a.length, g = s(a);
        if (c) {
            if (g) {
                for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
            } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
        } else if (g) {
            for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
        } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
        return a
    }, trim:function (a) {
        return null == a ? "" : k.call(a)
    }, makeArray:function (a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    }, inArray:function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c)
    }, merge:function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
        return a.length = e, a
    }, grep:function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
    }, map:function (a, b, c) {
        var d, f = 0, g = a.length, h = s(a), i = [];
        if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
        return e.apply([], i)
    }, guid:1, proxy:function (a, b) {
        var c, e, f;
        return"string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
            return a.apply(b || this, e.concat(d.call(arguments)))
        }, f.guid = a.guid = a.guid || o.guid++, f) : void 0
    }, now:Date.now, support:l}), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = o.type(a);
        return"function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function (a, b) {
            return a === b && (j = !0), 0
        }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
            return-1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = {ID:new RegExp("^#(" + L + ")"), CLASS:new RegExp("^\\.(" + L + ")"), TAG:new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR:new RegExp("^" + N), PSEUDO:new RegExp("^" + O), CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool:new RegExp("^(?:" + J + ")$", "i"), needsContext:new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")}, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {apply:D.length ? function (a, b) {
                F.apply(a, H.call(b))
            } : function (a, b) {
                var c = a.length, d = 0;
                while (a[c++] = b[d++]);
                a.length = c - 1
            }}
        }
        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a)return d;
            if (1 !== (i = b.nodeType) && 9 !== i)return[];
            if (n && !e) {
                if (f = Z.exec(a))if (h = f[1]) {
                    if (9 === i) {
                        if (g = b.getElementById(h), !g || !g.parentNode)return d;
                        if (g.id === h)return d.push(g), d
                    } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h)return d.push(g), d
                } else {
                    if (f[2])return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return G.apply(d, b.getElementsByClassName(h)), d
                }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--)m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v)try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {
                    } finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return-1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return"input" === c && b.type === a
            }
        }

        function kb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function (b) {
                return b = +b, fb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }

        c = db.support = {}, f = db.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : t, g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                k()
            })), c.attributes = gb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function (a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return!0;
                return!1
            }, z = b ? function (a, b) {
                if (a === b)return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return j = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b];
                if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g)return ib(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)k.unshift(c);
                while (h[d] === k[d])d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function (a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b)))try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return db(b, l, null, [a]).length > 0
        }, db.contains = function (a, b) {
            return(a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function (a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = db.selectors = {cacheLength:50, createPseudo:fb, match:V, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function (a) {
            return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD:function (a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
        }, PSEUDO:function (a) {
            var b, c = !a[5] && a[2];
            return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }}, filter:{TAG:function (a) {
            var b = a.replace(ab, bb).toLowerCase();
            return"*" === a ? function () {
                return!0
            } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b
            }
        }, CLASS:function (a) {
            var b = w[a + " "];
            return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) {
                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
            })
        }, ATTR:function (a, b, c) {
            return function (d) {
                var e = db.attr(d, a);
                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
            }
        }, CHILD:function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
            return 1 === d && 0 === e ? function (a) {
                return!!a.parentNode
            } : function (b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h;
                if (q) {
                    if (f) {
                        while (p) {
                            l = b;
                            while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return!1;
                            o = p = "only" === a && !o && "nextSibling"
                        }
                        return!0
                    }
                    if (o = [g ? q.firstChild : q.lastChild], g && t) {
                        k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [u, n, m];
                            break
                        }
                    } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b))break;
                    return m -= e, m === d || m % d === 0 && m / d >= 0
                }
            }
        }, PSEUDO:function (a, b) {
            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
            return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
                var d, f = e(a, b), g = f.length;
                while (g--)d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
            }) : function (a) {
                return e(a, 0, c)
            }) : e
        }}, pseudos:{not:fb(function (a) {
            var b = [], c = [], d = g(a.replace(P, "$1"));
            return d[s] ? fb(function (a, b, c, e) {
                var f, g = d(a, null, e, []), h = a.length;
                while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function (a, e, f) {
                return b[0] = a, d(b, null, f, c), !c.pop()
            }
        }), has:fb(function (a) {
            return function (b) {
                return db(a, b).length > 0
            }
        }), contains:fb(function (a) {
            return function (b) {
                return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }), lang:fb(function (a) {
            return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) {
                var c;
                do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return!1
            }
        }), target:function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
        }, root:function (a) {
            return a === m
        }, focus:function (a) {
            return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled:function (a) {
            return a.disabled === !1
        }, disabled:function (a) {
            return a.disabled === !0
        }, checked:function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected:function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty:function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return!1;
            return!0
        }, parent:function (a) {
            return!d.pseudos.empty(a)
        }, header:function (a) {
            return X.test(a.nodeName)
        }, input:function (a) {
            return W.test(a.nodeName)
        }, button:function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && "button" === a.type || "button" === b
        }, text:function (a) {
            var b;
            return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first:lb(function () {
            return[0]
        }), last:lb(function (a, b) {
            return[b - 1]
        }), eq:lb(function (a, b, c) {
            return[0 > c ? c + b : c]
        }), even:lb(function (a, b) {
            for (var c = 0; b > c; c += 2)a.push(c);
            return a
        }), odd:lb(function (a, b) {
            for (var c = 1; b > c; c += 2)a.push(c);
            return a
        }), lt:lb(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
            return a
        }), gt:lb(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
            return a
        })}}, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})d.pseudos[b] = jb(b);
        for (b in{submit:!0, reset:!0})d.pseudos[b] = kb(b);
        function nb() {
        }

        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;
        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({value:c, type:e[0].replace(P, " ")}), h = h.slice(c.length));
                for (g in d.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value:c, type:g, matches:e}), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = v++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return!0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return!0
                }
            }
        }

        function rb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return!1;
                return!0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) {
                return a === b
            }, i, !0), l = qb(function (a) {
                return I.call(b, a) > -1
            }, i, !0), m = [function (a, c, d) {
                return!g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > j; j++)if (c = d.relative[a[j].type])m = [qb(rb(m), c)]; else {
                if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                    for (e = ++j; f > e; e++)if (d.relative[a[e].type])break;
                    return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({value:" " === a[j - 2].type ? "*" : ""})).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                }
                m.push(c)
            }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) {
                var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length;
                for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                    if (e && m) {
                        n = 0;
                        while (o = a[n++])if (o(m, g, i)) {
                            j.push(m);
                            break
                        }
                        k && (u = w)
                    }
                    c && ((m = !o && m) && p--, f && r.push(m))
                }
                if (p += q, c && q !== p) {
                    n = 0;
                    while (o = b[n++])o(r, s, g, i);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = E.call(j));
                        s = sb(s)
                    }
                    G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                }
                return k && (u = w, h = t), r
            };
            return c ? fb(f) : f
        }

        g = db.compile = function (a, b) {
            var c, d = [], e = [], f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--)f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };
        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b)return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type])break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a)return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }

        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function (a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;
    var u = o.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (o.isFunction(b))return o.grep(a, function (a, d) {
            return!!b.call(a, d, a) !== c
        });
        if (b.nodeType)return o.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return o.filter(b, a, c);
            b = o.filter(b, a)
        }
        return o.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    o.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, o.fn.extend({find:function (a) {
        var b, c = this.length, d = [], e = this;
        if ("string" != typeof a)return this.pushStack(o(a).filter(function () {
            for (b = 0; c > b; b++)if (o.contains(e[b], this))return!0
        }));
        for (b = 0; c > b; b++)o.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter:function (a) {
        return this.pushStack(x(this, a || [], !1))
    }, not:function (a) {
        return this.pushStack(x(this, a || [], !0))
    }, is:function (a) {
        return!!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length
    }});
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = o.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return!b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b))for (c in b)o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this))
    };
    A.prototype = o.fn, y = o(m);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children:!0, contents:!0, next:!0, prev:!0};
    o.extend({dir:function (a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
            if (e && o(a).is(c))break;
            d.push(a)
        }
        return d
    }, sibling:function (a, b) {
        for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c
    }}), o.fn.extend({has:function (a) {
        var b = o(a, this), c = b.length;
        return this.filter(function () {
            for (var a = 0; c > a; a++)if (o.contains(this, b[a]))return!0
        })
    }, closest:function (a, b) {
        for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
            f.push(c);
            break
        }
        return this.pushStack(f.length > 1 ? o.unique(f) : f)
    }, index:function (a) {
        return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add:function (a, b) {
        return this.pushStack(o.unique(o.merge(this.get(), o(a, b))))
    }, addBack:function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }});
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    o.each({parent:function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    }, parents:function (a) {
        return o.dir(a, "parentNode")
    }, parentsUntil:function (a, b, c) {
        return o.dir(a, "parentNode", c)
    }, next:function (a) {
        return D(a, "nextSibling")
    }, prev:function (a) {
        return D(a, "previousSibling")
    }, nextAll:function (a) {
        return o.dir(a, "nextSibling")
    }, prevAll:function (a) {
        return o.dir(a, "previousSibling")
    }, nextUntil:function (a, b, c) {
        return o.dir(a, "nextSibling", c)
    }, prevUntil:function (a, b, c) {
        return o.dir(a, "previousSibling", c)
    }, siblings:function (a) {
        return o.sibling((a.parentNode || {}).firstChild, a)
    }, children:function (a) {
        return o.sibling(a.firstChild)
    }, contents:function (a) {
        return a.contentDocument || o.merge([], a.childNodes)
    }}, function (a, b) {
        o.fn[a] = function (c, d) {
            var e = o.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return o.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    o.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {add:function () {
            if (h) {
                var c = h.length;
                !function g(b) {
                    o.each(b, function (b, c) {
                        var d = o.type(c);
                        "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                    })
                }(arguments), d ? f = h.length : b && (e = c, j(b))
            }
            return this
        }, remove:function () {
            return h && o.each(arguments, function (a, b) {
                var c;
                while ((c = o.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
            }), this
        }, has:function (a) {
            return a ? o.inArray(a, h) > -1 : !(!h || !h.length)
        }, empty:function () {
            return h = [], f = 0, this
        }, disable:function () {
            return h = i = b = void 0, this
        }, disabled:function () {
            return!h
        }, lock:function () {
            return i = void 0, b || k.disable(), this
        }, locked:function () {
            return!i
        }, fireWith:function (a, b) {
            return!h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
        }, fire:function () {
            return k.fireWith(this, arguments), this
        }, fired:function () {
            return!!c
        }};
        return k
    }, o.extend({Deferred:function (a) {
        var b = [
            ["resolve", "done", o.Callbacks("once memory"), "resolved"],
            ["reject", "fail", o.Callbacks("once memory"), "rejected"],
            ["notify", "progress", o.Callbacks("memory")]
        ], c = "pending", d = {state:function () {
            return c
        }, always:function () {
            return e.done(arguments).fail(arguments), this
        }, then:function () {
            var a = arguments;
            return o.Deferred(function (c) {
                o.each(b, function (b, f) {
                    var g = o.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                }), a = null
            }).promise()
        }, promise:function (a) {
            return null != a ? o.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, o.each(b, function (a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function () {
                c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    }, when:function (a) {
        var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && o.isFunction(a.promise) ? e : 0, g = 1 === f ? a : o.Deferred(), h = function (a, b, c) {
            return function (e) {
                b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
            }
        }, i, j, k;
        if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        return f || g.resolveWith(k, c), g.promise()
    }});
    var H;
    o.fn.ready = function (a) {
        return o.ready.promise().done(a), this
    }, o.extend({isReady:!1, readyWait:1, holdReady:function (a) {
        a ? o.readyWait++ : o.ready(!0)
    }, ready:function (a) {
        (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")))
    }});
    function I() {
        m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready()
    }

    o.ready.promise = function (b) {
        return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, o.ready.promise();
    var J = o.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === o.type(c)) {
            e = !0;
            for (h in c)o.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(o(a), c)
        })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    o.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {get:function () {
            return{}
        }}), this.expando = o.expando + Math.random()
    }

    K.uid = 1, K.accepts = o.acceptData, K.prototype = {key:function (a) {
        if (!K.accepts(a))return 0;
        var b = {}, c = a[this.expando];
        if (!c) {
            c = K.uid++;
            try {
                b[this.expando] = {value:c}, Object.defineProperties(a, b)
            } catch (d) {
                b[this.expando] = c, o.extend(a, b)
            }
        }
        return this.cache[c] || (this.cache[c] = {}), c
    }, set:function (a, b, c) {
        var d, e = this.key(a), f = this.cache[e];
        if ("string" == typeof b)f[b] = c; else if (o.isEmptyObject(f))o.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
        return f
    }, get:function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b]
    }, access:function (a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove:function (a, b) {
        var c, d, e, f = this.key(a), g = this.cache[f];
        if (void 0 === b)this.cache[f] = {}; else {
            o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
            while (c--)delete g[d[c]]
        }
    }, hasData:function (a) {
        return!o.isEmptyObject(this.cache[a[this.expando]] || {})
    }, discard:function (a) {
        a[this.expando] && delete this.cache[a[this.expando]]
    }};
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    o.extend({hasData:function (a) {
        return M.hasData(a) || L.hasData(a)
    }, data:function (a, b, c) {
        return M.access(a, b, c)
    }, removeData:function (a, b) {
        M.remove(a, b)
    }, _data:function (a, b, c) {
        return L.access(a, b, c)
    }, _removeData:function (a, b) {
        L.remove(a, b)
    }}), o.fn.extend({data:function (a, b) {
        var c, d, e, f = this[0], g = f && f.attributes;
        if (void 0 === a) {
            if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                c = g.length;
                while (c--)d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d]));
                L.set(f, "hasDataAttrs", !0)
            }
            return e
        }
        return"object" == typeof a ? this.each(function () {
            M.set(this, a)
        }) : J(this, function (b) {
            var c, d = o.camelCase(a);
            if (f && void 0 === b) {
                if (c = M.get(f, a), void 0 !== c)return c;
                if (c = M.get(f, d), void 0 !== c)return c;
                if (c = P(f, d, void 0), void 0 !== c)return c
            } else this.each(function () {
                var c = M.get(this, d);
                M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
            })
        }, null, b, arguments.length > 1, null, !0)
    }, removeData:function (a) {
        return this.each(function () {
            M.remove(this, a)
        })
    }}), o.extend({queue:function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue:function (a, b) {
        b = b || "fx";
        var c = o.queue(a, b), d = c.length, e = c.shift(), f = o._queueHooks(a, b), g = function () {
            o.dequeue(a, b)
        };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks:function (a, b) {
        var c = b + "queueHooks";
        return L.get(a, c) || L.access(a, c, {empty:o.Callbacks("once memory").add(function () {
            L.remove(a, [b + "queue", c])
        })})
    }}), o.fn.extend({queue:function (a, b) {
        var c = 2;
        return"string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var c = o.queue(this, a, b);
            o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a)
        })
    }, dequeue:function (a) {
        return this.each(function () {
            o.dequeue(this, a)
        })
    }, clearQueue:function (a) {
        return this.queue(a || "fx", [])
    }, promise:function (a, b) {
        var c, d = 1, e = o.Deferred(), f = this, g = this.length, h = function () {
            --d || e.resolveWith(f, [f])
        };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
    }});
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = m.createDocumentFragment(), b = a.appendChild(m.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    l.focusinBubbles = "onfocusin"in a;
    var V = /^key/, W = /^(?:mouse|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return!0
    }

    function $() {
        return!1
    }

    function _() {
        try {
            return m.activeElement
        } catch (a) {
        }
    }

    o.event = {global:{}, add:function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, p, q, r = L.get(a);
        if (r) {
            c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                return typeof o !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(E) || [""], j = b.length;
            while (j--)h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({type:n, origType:q, data:d, handler:c, guid:c.guid, selector:e, needsContext:e && o.expr.match.needsContext.test(e), namespace:p.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0)
        }
    }, remove:function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, p, q, r = L.hasData(a) && L.get(a);
        if (r && (i = r.events)) {
            b = (b || "").match(E) || [""], j = b.length;
            while (j--)if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
                l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n])
            } else for (n in i)o.event.remove(a, n + b[j], c, d, !0);
            o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
        }
    }, trigger:function (b, c, d, e) {
        var f, g, h, i, k, l, n, p = [d || m], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) {
            if (!e && !n.noBubble && !o.isWindow(d)) {
                for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a)
            }
            f = 0;
            while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault());
            return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result
        }
    }, dispatch:function (a) {
        a = o.event.fix(a);
        var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = o.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            h = o.event.handlers.call(this, a, j), b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem, c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
            }
            return k.postDispatch && k.postDispatch.call(this, a), a.result
        }
    }, handlers:function (a, b) {
        var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({elem:i, handlers:d})
        }
        return h < b.length && g.push({elem:this, handlers:b.slice(h)}), g
    }, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:"char charCode key keyCode".split(" "), filter:function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
    }}, mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
    }}, fix:function (a) {
        if (a[o.expando])return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length;
        while (b--)c = d[b], a[c] = f[c];
        return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    }, special:{load:{noBubble:!0}, focus:{trigger:function () {
        return this !== _() && this.focus ? (this.focus(), !1) : void 0
    }, delegateType:"focusin"}, blur:{trigger:function () {
        return this === _() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType:"focusout"}, click:{trigger:function () {
        return"checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0
    }, _default:function (a) {
        return o.nodeName(a.target, "a")
    }}, beforeunload:{postDispatch:function (a) {
        void 0 !== a.result && (a.originalEvent.returnValue = a.result)
    }}}, simulate:function (a, b, c, d) {
        var e = o.extend(new o.Event, c, {type:a, isSimulated:!0, originalEvent:{}});
        d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, o.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, o.Event = function (a, b) {
        return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void(this[o.expando] = !0)) : new o.Event(a, b)
    }, o.Event.prototype = {isDefaultPrevented:$, isPropagationStopped:$, isImmediatePropagationStopped:$, preventDefault:function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
    }, stopPropagation:function () {
        var a = this.originalEvent;
        this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
    }, stopImmediatePropagation:function () {
        this.isImmediatePropagationStopped = Z, this.stopPropagation()
    }}, o.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function (a, b) {
        o.event.special[a] = {delegateType:b, bindType:b, handle:function (a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj;
            return(!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }}
    }), l.focusinBubbles || o.each({focus:"focusin", blur:"focusout"}, function (a, b) {
        var c = function (a) {
            o.event.simulate(b, a.target, o.event.fix(a), !0)
        };
        o.event.special[b] = {setup:function () {
            var d = this.ownerDocument || this, e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
        }, teardown:function () {
            var d = this.ownerDocument || this, e = L.access(d, b) - 1;
            e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
        }}
    }), o.fn.extend({on:function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (g in a)this.on(g, b, c, a[g], e);
            return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
        return 1 === e && (f = d, d = function (a) {
            return o().off(a), f.apply(this, arguments)
        }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function () {
            o.event.add(this, a, d, c, b)
        })
    }, one:function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off:function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
            for (e in a)this.off(e, b, a[e]);
            return this
        }
        return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
            o.event.remove(this, a, c, b)
        })
    }, trigger:function (a, b) {
        return this.each(function () {
            o.event.trigger(a, b, this)
        })
    }, triggerHandler:function (a, b) {
        var c = this[0];
        return c ? o.event.trigger(a, b, c, !0) : void 0
    }});
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {option:[1, "<select multiple='multiple'>", "</select>"], thead:[1, "<table>", "</table>"], col:[2, "<table><colgroup>", "</colgroup></table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:[0, "", ""]};
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)o.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    o.extend({clone:function (a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0), i = o.contains(a.ownerDocument, a);
        if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
        if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
        return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
    }, buildFragment:function (a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)if (e = a[m], e || 0 === e)if ("object" === o.type(e))o.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
            f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
            while (j--)f = f.lastChild;
            o.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
        } else l.push(b.createTextNode(e));
        k.textContent = "", m = 0;
        while (e = l[m++])if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
            j = 0;
            while (e = f[j++])fb.test(e.type || "") && c.push(e)
        }
        return k
    }, cleanData:function (a) {
        for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) {
            if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) {
                if (d = Object.keys(b.events || {}), d.length)for (g = 0; void 0 !== (e = d[g]); g++)h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle);
                L.cache[f] && delete L.cache[f]
            }
            delete M.cache[c[M.expando]]
        }
    }}), o.fn.extend({text:function (a) {
        return J(this, function (a) {
            return void 0 === a ? o.text(this) : this.empty().each(function () {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
            })
        }, null, a, arguments.length)
    }, append:function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = jb(this, a);
                b.appendChild(a)
            }
        })
    }, prepend:function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = jb(this, a);
                b.insertBefore(a, b.firstChild)
            }
        })
    }, before:function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after:function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove:function (a, b) {
        for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
        return this
    }, empty:function () {
        for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = "");
        return this
    }, clone:function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return o.clone(this, a, b)
        })
    }, html:function (a) {
        return J(this, function (a) {
            var b = this[0] || {}, c = 0, d = this.length;
            if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
            if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(ab, "<$1></$2>");
                try {
                    for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a);
                    b = 0
                } catch (e) {
                }
            }
            b && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith:function () {
        var a = arguments[0];
        return this.domManip(arguments, function (b) {
            a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach:function (a) {
        return this.remove(a, !0)
    }, domManip:function (a, b) {
        a = e.apply([], a);
        var c, d, f, g, h, i, j = 0, k = this.length, m = this, n = k - 1, p = a[0], q = o.isFunction(p);
        if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p))return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
        });
        if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
            for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++)h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j);
            if (g)for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, "")))
        }
        return this
    }}), o.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function (a, b) {
        o.fn[a] = function (a) {
            for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d = o(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display");
        return d.detach(), e
    }

    function tb(a) {
        var b = m, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return{get:function () {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }

    !function () {
        var b, c, d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", e = m.documentElement, f = m.createElement("div"), g = m.createElement("div");
        g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g);
        function h() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f);
            var d = a.getComputedStyle(g, null);
            b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f)
        }

        a.getComputedStyle && o.extend(l, {pixelPosition:function () {
            return h(), b
        }, boxSizingReliable:function () {
            return null == c && h(), c
        }, reliableMarginRight:function () {
            var b, c = g.appendChild(m.createElement("div"));
            return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b
        }})
    }(), o.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {position:"absolute", visibility:"hidden", display:"block"}, Db = {letterSpacing:0, fontWeight:400}, Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)if (b = Eb[e] + c, b in a)return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === o.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    o.extend({cssHooks:{opacity:{get:function (a, b) {
        if (b) {
            var c = xb(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber:{columnCount:!0, fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":"cssFloat"}, style:function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = o.camelCase(b), i = a.style;
            return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c)), void 0)
        }
    }, css:function (a, b, c, d) {
        var e, f, g, h = o.camelCase(b);
        return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e
    }}), o.each(["height", "width"], function (a, b) {
        o.cssHooks[b] = {get:function (a, c, d) {
            return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function () {
                return Ib(a, b, d)
            }) : Ib(a, b, d) : void 0
        }, set:function (a, c, d) {
            var e = d && wb(a);
            return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0)
        }}
    }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function (a, b) {
        return b ? o.swap(a, {display:"inline-block"}, xb, [a, "marginRight"]) : void 0
    }), o.each({margin:"", padding:"", border:"Width"}, function (a, b) {
        o.cssHooks[a + b] = {expand:function (c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
            return e
        }}, ub.test(a) || (o.cssHooks[a + b].set = Gb)
    }), o.fn.extend({css:function (a, b) {
        return J(this, function (a, b, c) {
            var d, e, f = {}, g = 0;
            if (o.isArray(b)) {
                for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = o.css(a, b[g], !1, d);
                return f
            }
            return void 0 !== c ? o.style(a, b, c) : o.css(a, b)
        }, a, b, arguments.length > 1)
    }, show:function () {
        return Jb(this, !0)
    }, hide:function () {
        return Jb(this)
    }, toggle:function (a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            S(this) ? o(this).show() : o(this).hide()
        })
    }});
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    o.Tween = Kb, Kb.prototype = {constructor:Kb, init:function (a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px")
    }, cur:function () {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
    }, run:function (a) {
        var b, c = Kb.propHooks[this.prop];
        return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
    }}, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {_default:{get:function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set:function (a) {
        o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {set:function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, o.easing = {linear:function (a) {
        return a
    }, swing:function (a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }}, o.fx = Kb.prototype.init, o.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {"*":[function (a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (o.cssNumber[a] ? "" : "px"), g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, o.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]};

    function Sb() {
        return setTimeout(function () {
            Lb = void 0
        }), Lb = o.now()
    }

    function Tb(a, b) {
        var c, d = 0, e = {height:a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && S(a), p = L.get(a, "fxshow");
        c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, k.always(function () {
            k.always(function () {
                h.unqueued--, o.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function () {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d])continue;
                n = !0
            }
            l[d] = p && p[d] || o.style(a, d)
        }
        if (!o.isEmptyObject(l)) {
            p ? "hidden"in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function () {
                o(a).hide()
            }), k.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in l)o.style(a, b, l[b])
            });
            for (d in l)g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = o.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return!1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem:a, props:o.extend({}, b), opts:o.extend(!0, {specialEasing:{}}, c), originalProperties:b, originalOptions:c, startTime:Lb || Sb(), duration:c.duration, tweens:[], createTween:function (b, c) {
            var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
        }, stop:function (b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e)return this;
            for (e = !0; d > c; c++)j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
        return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, {elem:a, anim:j, queue:j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    o.Animation = o.extend(Xb, {tweener:function (a, b) {
        o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
    }, prefilter:function (a, b) {
        b ? Qb.unshift(a) : Qb.push(a)
    }}), o.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? o.extend({}, a) : {complete:c || !c && b || o.isFunction(a) && a, duration:a, easing:c && b || b && !o.isFunction(b) && b};
        return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue)
        }, d
    }, o.fn.extend({fadeTo:function (a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({opacity:b}, a, c, d)
    }, animate:function (a, b, c, d) {
        var e = o.isEmptyObject(a), f = o.speed(b, c, d), g = function () {
            var b = Xb(this, o.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0)
        };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop:function (a, b, c) {
        var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c)
        };
        return"string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            var b = !0, e = null != a && a + "queueHooks", f = o.timers, g = L.get(this);
            if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
            for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && o.dequeue(this, a)
        })
    }, finish:function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
            var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = o.timers, g = d ? d.length : 0;
            for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
        })
    }}), o.each(["toggle", "show", "hide"], function (a, b) {
        var c = o.fn[b];
        o.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), o.each({slideDown:Tb("show"), slideUp:Tb("hide"), slideToggle:Tb("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function (a, b) {
        o.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), o.timers = [], o.fx.tick = function () {
        var a, b = 0, c = o.timers;
        for (Lb = o.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || o.fx.stop(), Lb = void 0
    }, o.fx.timer = function (a) {
        o.timers.push(a), a() ? o.fx.start() : o.timers.pop()
    }, o.fx.interval = 13, o.fx.start = function () {
        Mb || (Mb = setInterval(o.fx.tick, o.fx.interval))
    }, o.fx.stop = function () {
        clearInterval(Mb), Mb = null
    }, o.fx.speeds = {slow:600, fast:200, _default:400}, o.fn.delay = function (a, b) {
        return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = m.createElement("input"), b = m.createElement("select"), c = b.appendChild(m.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = o.expr.attrHandle;
    o.fn.extend({attr:function (a, b) {
        return J(this, o.attr, a, b, arguments.length > 1)
    }, removeAttr:function (a) {
        return this.each(function () {
            o.removeAttr(this, a)
        })
    }}), o.extend({attr:function (a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b))
    }, removeAttr:function (a, b) {
        var c, d, e = 0, f = b && b.match(E);
        if (f && 1 === a.nodeType)while (c = f[e++])d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }, attrHooks:{type:{set:function (a, b) {
        if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}}}), Zb = {set:function (a, b, c) {
        return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c
    }}, o.each(o.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || o.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    o.fn.extend({prop:function (a, b) {
        return J(this, o.prop, a, b, arguments.length > 1)
    }, removeProp:function (a) {
        return this.each(function () {
            delete this[o.propFix[a] || a]
        })
    }}), o.extend({propFix:{"for":"htmlFor", "class":"className"}, prop:function (a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks:{tabIndex:{get:function (a) {
        return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
    }}}}), l.optSelected || (o.propHooks.selected = {get:function (a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
    }}), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        o.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({addClass:function (a) {
        var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
        if (o.isFunction(a))return this.each(function (b) {
            o(this).addClass(a.call(this, b, this.className))
        });
        if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
            f = 0;
            while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = o.trim(d), c.className !== g && (c.className = g)
        }
        return this
    }, removeClass:function (a) {
        var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
        if (o.isFunction(a))return this.each(function (b) {
            o(this).removeClass(a.call(this, b, this.className))
        });
        if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
            f = 0;
            while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
            g = a ? o.trim(d) : "", c.className !== g && (c.className = g)
        }
        return this
    }, toggleClass:function (a, b) {
        var c = typeof a;
        return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function (c) {
            o(this).toggleClass(a.call(this, c, this.className, b), b)
        } : function () {
            if ("string" === c) {
                var b, d = 0, e = o(this), f = a.match(E) || [];
                while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
            } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
        })
    }, hasClass:function (a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return!0;
        return!1
    }});
    var bc = /\r/g;
    o.fn.extend({val:function (a) {
        var b, c, d, e = this[0];
        {
            if (arguments.length)return d = o.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            });
            if (e)return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
        }
    }}), o.extend({valHooks:{select:{get:function (a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) {
            if (b = o(c).val(), f)return b;
            g.push(b)
        }
        return g
    }, set:function (a, b) {
        var c, d, e = a.options, f = o.makeArray(b), g = e.length;
        while (g--)d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0);
        return c || (a.selectedIndex = -1), f
    }}}}), o.each(["radio", "checkbox"], function () {
        o.valHooks[this] = {set:function (a, b) {
            return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0
        }}, l.checkOn || (o.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        o.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), o.fn.extend({hover:function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind:function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind:function (a, b) {
        return this.off(a, null, b)
    }, delegate:function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate:function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var cc = o.now(), dc = /\?/;
    o.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, o.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return(!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = m.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (o.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        var e = {}, f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, o.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = o.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && o.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0]in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return{state:"parsererror", error:g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return{state:"success", data:b}
    }

    o.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:fc, type:"GET", isLocal:jc.test(ec[1]), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":pc, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText", json:"responseJSON"}, converters:{"* text":String, "text html":!0, "text json":o.parseJSON, "text xml":o.parseXML}, flatOptions:{url:!0, context:!0}}, ajaxSetup:function (a, b) {
        return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a)
    }, ajaxPrefilter:rc(nc), ajaxTransport:rc(oc), ajax:function (a, b) {
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var c, d, e, f, g, h, i, j, k = o.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event, n = o.Deferred(), p = o.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState:0, getResponseHeader:function (a) {
            var b;
            if (2 === t) {
                if (!f) {
                    f = {};
                    while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
                }
                b = f[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders:function () {
            return 2 === t ? e : null
        }, setRequestHeader:function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
        }, overrideMimeType:function (a) {
            return t || (k.mimeType = a), this
        }, statusCode:function (a) {
            var b;
            if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
            return this
        }, abort:function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this
        }};
        if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
        i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
        for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
        u = "abort";
        for (j in{success:1, error:1, complete:1})v[j](k[j]);
        if (c = sc(oc, k, b, v)) {
            v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                v.abort("timeout")
            }, k.timeout));
            try {
                t = 1, c.send(r, x)
            } catch (w) {
                if (!(2 > t))throw w;
                x(-1, w)
            }
        } else x(-1, "No Transport");
        function x(a, b, f, h) {
            var j, r, s, u, w, x = b;
            2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop")))
        }

        return v
    }, getJSON:function (a, b, c) {
        return o.get(a, b, c, "json")
    }, getScript:function (a, b) {
        return o.get(a, void 0, b, "script")
    }}), o.each(["get", "post"], function (a, b) {
        o[b] = function (a, c, d, e) {
            return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({url:a, type:b, dataType:e, data:c, success:d})
        }
    }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        o.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), o._evalUrl = function (a) {
        return o.ajax({url:a, type:"GET", dataType:"script", async:!1, global:!1, "throws":!0})
    }, o.fn.extend({wrapAll:function (a) {
        var b;
        return o.isFunction(a) ? this.each(function (b) {
            o(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
            var a = this;
            while (a.firstElementChild)a = a.firstElementChild;
            return a
        }).append(this)), this)
    }, wrapInner:function (a) {
        return this.each(o.isFunction(a) ? function (b) {
            o(this).wrapInner(a.call(this, b))
        } : function () {
            var b = o(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap:function (a) {
        var b = o.isFunction(a);
        return this.each(function (c) {
            o(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap:function () {
        return this.parent().each(function () {
            o.nodeName(this, "body") || o(this).replaceWith(this.childNodes)
        }).end()
    }}), o.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, o.expr.filters.visible = function (a) {
        return!o.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (o.isArray(b))o.each(b, function (b, e) {
            c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== o.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
    }

    o.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a))o.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, o.fn.extend({serialize:function () {
        return o.param(this.serializeArray())
    }, serializeArray:function () {
        return this.map(function () {
            var a = o.prop(this, "elements");
            return a ? o.makeArray(a) : this
        }).filter(function () {
                var a = this.type;
                return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = o(this).val();
                return null == c ? null : o.isArray(c) ? o.map(c, function (a) {
                    return{name:b.name, value:a.replace(yc, "\r\n")}
                }) : {name:b.name, value:c.replace(yc, "\r\n")}
            }).get()
    }}), o.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0:200, 1223:204}, Fc = o.ajaxSettings.xhr();
    a.ActiveXObject && o(a).on("unload", function () {
        for (var a in Dc)Dc[a]()
    }), l.cors = !!Fc && "withCredentials"in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function (a) {
        var b;
        return l.cors || Fc && !a.crossDomain ? {send:function (c, d) {
            var e, f = a.xhr(), g = ++Cc;
            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
            for (e in c)f.setRequestHeader(e, c[e]);
            b = function (a) {
                return function () {
                    b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text:f.responseText} : void 0, f.getAllResponseHeaders()))
                }
            }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort"), f.send(a.hasContent && a.data || null)
        }, abort:function () {
            b && b()
        }} : void 0
    }), o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/(?:java|ecma)script/}, converters:{"text script":function (a) {
        return o.globalEval(a), a
    }}}), o.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), o.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return{send:function (d, e) {
                b = o("<script>").prop({async:!0, charset:a.scriptCharset, src:a.url}).on("load error", c = function (a) {
                    b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                }), m.head.appendChild(b[0])
            }, abort:function () {
                c && c()
            }}
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({jsonp:"callback", jsonpCallback:function () {
        var a = Gc.pop() || o.expando + "_" + cc++;
        return this[a] = !0, a
    }}), o.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || o.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || m;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes))
    };
    var Ic = o.fn.load;
    o.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && o.ajax({url:a, type:e, dataType:"html", data:b}).done(function (a) {
            f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, o.expr.filters.animated = function (a) {
        return o.grep(o.timers,function (b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    o.offset = {setOffset:function (a, b, c) {
        var d, e, f, g, h, i, j, k = o.css(a, "position"), l = o(a), m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
    }}, o.fn.extend({offset:function (a) {
        if (arguments.length)return void 0 === a ? this : this.each(function (b) {
            o.offset.setOffset(this, a, b)
        });
        var b, c, d = this[0], e = {top:0, left:0}, f = d && d.ownerDocument;
        if (f)return b = f.documentElement, o.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {top:e.top + c.pageYOffset - b.clientTop, left:e.left + c.pageXOffset - b.clientLeft}) : e
    }, position:function () {
        if (this[0]) {
            var a, b, c = this[0], d = {top:0, left:0};
            return"fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), {top:b.top - d.top - o.css(c, "marginTop", !0), left:b.left - d.left - o.css(c, "marginLeft", !0)}
        }
    }, offsetParent:function () {
        return this.map(function () {
            var a = this.offsetParent || Jc;
            while (a && !o.nodeName(a, "html") && "static" === o.css(a, "position"))a = a.offsetParent;
            return a || Jc
        })
    }}), o.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        o.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), o.each(["top", "left"], function (a, b) {
        o.cssHooks[b] = yb(l.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0
        })
    }), o.each({Height:"height", Width:"width"}, function (a, b) {
        o.each({padding:"inner" + a, content:b, "":"outer" + a}, function (c, d) {
            o.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), o.fn.size = function () {
        return this.length
    }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return o
    });
    var Lc = a.jQuery, Mc = a.$;
    return o.noConflict = function (b) {
        return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o
    }, typeof b === U && (a.jQuery = a.$ = o), o
});

/**
 * jQuery Plugin - base64 codec
 * @lisence MIT License https://github.com/yatt/jquery.base64/blob/master/license.txt
 * @author yatt/brainfs http://d.hatena.ne.jp/yatt http://twitter.com/brainfs
 * @version 0.0.1
 * @info
 */

(function ($) {
    var base64module = {};

// *** begin
    /* /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
     charset = shift_jis

     +++ Base64 Encode / Decode +++


     LastModified : 2006-11/08

     Powered by kerry
     http://202.248.69.143/~goma/

     動作ブラウザ :: IE4+ , NN4.06+ , Gecko , Opera6+


     * [RFC 2045] Multipurpose Internet Mail Extensions
     (MIME) Part One:
     Format of Internet Message Bodies
     ftp://ftp.isi.edu/in-notes/rfc2045.txt

     /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

     *   Usage:

     // エンコード
     b64_string = base64.encode( my_data [, strMode] );

     // デコード
     my_data = base64.decode( b64_string [, strMode] );


     strMode -> 入力データが文字列の場合 1 を

     /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ */


// [yatt] enclose
//base64 = new function()
    var base64 = new function ()
//
    {
        var utfLibName = "utf";
        var b64char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var b64encTable = b64char.split("");
        var b64decTable = [];
        for (var i = 0; i < b64char.length; i++) b64decTable[b64char.charAt(i)] = i;

        this.encode = function (_dat, _strMode) {
            return encoder(_strMode ? unpackUTF8(_dat) : unpackChar(_dat));
        }

        var encoder = function (_ary) {
            var md = _ary.length % 3;
            var b64 = "";
            var i, tmp = 0;

            if (md) for (i = 3 - md; i > 0; i--) _ary[_ary.length] = 0;

            for (i = 0; i < _ary.length; i += 3) {
                tmp = (_ary[i] << 16) | (_ary[i + 1] << 8) | _ary[i + 2];
                b64 += b64encTable[ (tmp >>> 18) & 0x3f]
                    + b64encTable[ (tmp >>> 12) & 0x3f]
                    + b64encTable[ (tmp >>> 6) & 0x3f]
                    + b64encTable[ tmp & 0x3f];
            }

            if (md) // 3の倍数にパディングした 0x0 分 = に置き換え
            {
                md = 3 - md;
                b64 = b64.substr(0, b64.length - md);
                while (md--) b64 += "=";
            }

            return b64;
        }

        this.decode = function (_b64, _strMode) {
            var tmp = decoder(_b64);
            return _strMode ? packUTF8(tmp) : packChar(tmp);
        }

        var decoder = function (_b64) {
            _b64 = _b64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var md = _b64.length % 4;
            var j, i, tmp;
            var dat = [];

            // replace 時 = も削っている。その = の代わりに 0x0 を補間
            if (md) for (i = 0; i < 4 - md; i++) _b64 += "A";

            for (j = i = 0; i < _b64.length; i += 4, j += 3) {
                tmp = (b64decTable[_b64.charAt(i)] << 18)
                    | (b64decTable[_b64.charAt(i + 1)] << 12)
                    | (b64decTable[_b64.charAt(i + 2)] << 6)
                    | b64decTable[_b64.charAt(i + 3)];
                dat[ j ] = tmp >>> 16;
                dat[j + 1] = (tmp >>> 8) & 0xff;
                dat[j + 2] = tmp & 0xff;
            }
            // 補完された 0x0 分削る
            if (md) dat.length -= [0, 0, 2, 1][md];

            return dat;
        }

        var packUTF8 = function (_x) {
            return utf.packUTF8(_x)
        };
        var unpackUTF8 = function (_x) {
            return utf.unpackUTF8(_x)
        };
        var packChar = function (_x) {
            return utf.packChar(_x)
        };
        var unpackChar = function (_x) {
            return utf.unpackChar(_x)
        };
//    var packUTF8    = function(_x){ return window[utfLibName].packUTF8(_x) };
//    var unpackUTF8  = function(_x){ return window[utfLibName].unpackUTF8(_x) };
//    var packChar    = function(_x){ return window[utfLibName].packChar(_x) };
//    var unpackChar  = function(_x){ return window[utfLibName].unpackChar(_x) };
    }


    /* /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
     charset = shift_jis

     +++ UTF8/16 ライブラリ +++


     LastModified : 2006-10/16

     Powered by kerry
     http://202.248.69.143/~goma/

     動作ブラウザ :: IE4+ , NN4.06+ , Gecko , Opera6+



     * [RFC 2279] UTF-8, a transformation format of ISO 10646
     ftp://ftp.isi.edu/in-notes/rfc2279.txt

     * [RFC 1738] Uniform Resource Locators (URL)
     ftp://ftp.isi.edu/in-notes/rfc1738.txt

     /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

     Usage:

     // 文字列を UTF16 (文字コード) へ
     utf16code_array = utf.unpackUTF16( my_string );

     // 文字列を UTF8 (文字コード) へ
     utf8code_array = utf.unpackUTF8( my_string );

     // UTF8 (文字コード) から文字列へ。 utf.unpackUTF8() したものを元に戻す
     my_string = utf.packUTF8( utf8code_array );

     // UTF8/16 (文字コード) を文字列へ
     my_string = utf.packChar( utfCode_array );

     // UTF16 (文字コード) から UTF8 (文字コード) へ
     utf8code_array = utf.toUTF8( utf16code_array );

     // UTF8 (文字コード) から UTF16 (文字コード) へ
     utf16code_array = utf.toUTF16( utf8code_array );



     // URL 文字列へエンコード
     url_string = utf.URLencode( my_string );

     // URL 文字列からデコード
     my_string = utf.URLdecode( url_string );

     /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ */


// [yatt] enclose
//utf = new function()
    var utf = new function ()
//
    {
        this.unpackUTF16 = function (_str) {
            var i, utf16 = [];
            for (i = 0; i < _str.length; i++) utf16[i] = _str.charCodeAt(i);
            return utf16;
        }

        this.unpackChar = function (_str) {
            var utf16 = this.unpackUTF16(_str);
            var i, n, tmp = [];
            for (n = i = 0; i < utf16.length; i++) {
                if (utf16[i] <= 0xff) tmp[n++] = utf16[i];
                else {
                    tmp[n++] = utf16[i] >> 8;
                    tmp[n++] = utf16[i] & 0xff;
                }
            }
            return tmp;
        }

        this.packChar =
            this.packUTF16 = function (_utf16) {
                var i, str = "";
                for (i in _utf16) str += String.fromCharCode(_utf16[i]);
                return str;
            }

        this.unpackUTF8 = function (_str) {
            return this.toUTF8(this.unpackUTF16(_str));
        }

        this.packUTF8 = function (_utf8) {
            return this.packUTF16(this.toUTF16(_utf8));
        }

        this.toUTF8 = function (_utf16) {
            var utf8 = [];
            var idx = 0;
            var i, j, c;
            for (i = 0; i < _utf16.length; i++) {
                c = _utf16[i];
                if (c <= 0x7f) utf8[idx++] = c;
                else if (c <= 0x7ff) {
                    utf8[idx++] = 0xc0 | (c >>> 6 );
                    utf8[idx++] = 0x80 | (c & 0x3f);
                }
                else if (c <= 0xffff) {
                    utf8[idx++] = 0xe0 | (c >>> 12 );
                    utf8[idx++] = 0x80 | ((c >>> 6 ) & 0x3f);
                    utf8[idx++] = 0x80 | (c & 0x3f);
                }
                else {
                    j = 4;
                    while (c >> (6 * j)) j++;
                    utf8[idx++] = ((0xff00 >>> j) & 0xff) | (c >>> (6 * --j) );
                    while (j--)
                        utf8[idx++] = 0x80 | ((c >>> (6 * j)) & 0x3f);
                }
            }
            return utf8;
        }

        this.toUTF16 = function (_utf8) {
            var utf16 = [];
            var idx = 0;
            var i, s;
            for (i = 0; i < _utf8.length; i++, idx++) {
                if (_utf8[i] <= 0x7f) utf16[idx] = _utf8[i];
                else {
                    if ((_utf8[i] >> 5) == 0x6) {
                        utf16[idx] = ( (_utf8[i] & 0x1f) << 6 )
                            | ( _utf8[++i] & 0x3f );
                    }
                    else if ((_utf8[i] >> 4) == 0xe) {
                        utf16[idx] = ( (_utf8[i] & 0xf) << 12 )
                            | ( (_utf8[++i] & 0x3f) << 6 )
                            | ( _utf8[++i] & 0x3f );
                    }
                    else {
                        s = 1;
                        while (_utf8[i] & (0x20 >>> s)) s++;
                        utf16[idx] = _utf8[i] & (0x1f >>> s);
                        while (s-- >= 0) utf16[idx] = (utf16[idx] << 6) ^ (_utf8[++i] & 0x3f);
                    }
                }
            }
            return utf16;
        }

        this.URLencode = function (_str) {
            return _str.replace(/([^a-zA-Z0-9_\-\.])/g, function (_tmp, _c) {
                if (_c == "\x20") return "+";
                var tmp = utf.toUTF8([_c.charCodeAt(0)]);
                var c = "";
                for (var i in tmp) {
                    i = tmp[i].toString(16);
                    if (i.length == 1) i = "0" + i;
                    c += "%" + i;
                }
                return c;
            });
        }

        this.URLdecode = function (_dat) {
            _dat = _dat.replace(/\+/g, "\x20");
            _dat = _dat.replace(/%([a-fA-F0-9][a-fA-F0-9])/g,
                function (_tmp, _hex) {
                    return String.fromCharCode(parseInt(_hex, 16))
                });
            return this.packChar(this.toUTF16(this.unpackUTF16(_dat)));
        }
    }

// *** end

    // add functions
    $.extend({
        base64:{
            encode:base64.encode,
            decode:base64.decode,
            codec:typeof atob == 'function' ? 'builtin' : 'alternate'
        }
    })

    //
    // override jQuery.ajax:
    // if ajax 'dataType' option value ended by ':b64', then
    // decode base64 string automatically
    //
    $.ajax = (function (ajax) {
        return function (option) {
            var flg = 0

            // dataType string ended by ':b64' or not?
            if (option.dataType && option.dataType.match(/:b64/)) {
                option.dataType = option.dataType.replace(':b64', '')
                flg = 1
            }

            if (flg) {
                option.success = (function (callback) {
                    return function (data, status, xhr) {
                        data = $.base64.decode(data)
                        callback(data, status, xhr)
                    }
                })(option.success || function (data, status, xhr) {
                })
            }

            return ajax.apply(this, arguments)
        }
    })($.ajax)

})(jQuery)

function getSelText() {
//    var selection = '';
//    if (window.getSelection) {
//        selection = window.getSelection();
//    } else if (document.getSelection) {
//        selection = document.getSelection();
//    } else if (document.selection) {
//        selection = document.selection.createRange().text;
//    }
//    if (selection.anchorNode) {
//        range = document.createRange();
//        range.setStart(selection.anchorNode, selection.anchorOffset);
//        range.setEnd(selection.focusNode, selection.focusOffset);
//        if (!range.commonAncestorContainer.innerHTML) {
//            return   range.commonAncestorContainer.textContent;
//        } else {
//            return range.commonAncestorContainer.innerHTML;
//        }
//    }
//    return;
	var win = window, doc = win.document, body = doc.body, selection, range, bodyText;
    if (body.createTextRange) {
        return body.createTextRange().text;
    } else if (win.getSelection) {
        selection = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(body);
        selection.addRange(range);
        bodyText = selection.toString();
        selection.removeAllRanges();
        return bodyText;
    }
}

/*
 html2canvas 0.4.1 <http://html2canvas.hertzen.com>
 Copyright (c) 2013 Niklas von Hertzen

 Released under MIT License
 */

(function (window, document, undefined) {

    "use strict";

    var _html2canvas = {},
        previousElement,
        computedCSS,
        html2canvas;

    _html2canvas.Util = {};

    _html2canvas.Util.log = function (a) {
        if (_html2canvas.logging && window.console && window.console.log) {
            window.console.log(a);
        }
    };

    _html2canvas.Util.trimText = (function (isNative) {
        return function (input) {
            return isNative ? isNative.apply(input) : ((input || '') + '').replace(/^\s+|\s+$/g, '');
        };
    })(String.prototype.trim);

    _html2canvas.Util.asFloat = function (v) {
        return parseFloat(v);
    };

    (function () {
        // TODO: support all possible length values
        var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
        var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
        _html2canvas.Util.parseTextShadows = function (value) {
            if (!value || value === 'none') {
                return [];
            }

            // find multiple shadow declarations
            var shadows = value.match(TEXT_SHADOW_PROPERTY),
                results = [];
            for (var i = 0; shadows && (i < shadows.length); i++) {
                var s = shadows[i].match(TEXT_SHADOW_VALUES);
                results.push({
                    color:s[0],
                    offsetX:s[1] ? s[1].replace('px', '') : 0,
                    offsetY:s[2] ? s[2].replace('px', '') : 0,
                    blur:s[3] ? s[3].replace('px', '') : 0
                });
            }
            return results;
        };
    })();


    _html2canvas.Util.parseBackgroundImage = function (value) {
        var whitespace = ' \r\n\t',
            method, definition, prefix, prefix_i, block, results = [],
            c, mode = 0, numParen = 0, quote, args;

        var appendResult = function () {
            if (method) {
                if (definition.substr(0, 1) === '"') {
                    definition = definition.substr(1, definition.length - 2);
                }
                if (definition) {
                    args.push(definition);
                }
                if (method.substr(0, 1) === '-' &&
                    (prefix_i = method.indexOf('-', 1) + 1) > 0) {
                    prefix = method.substr(0, prefix_i);
                    method = method.substr(prefix_i);
                }
                results.push({
                    prefix:prefix,
                    method:method.toLowerCase(),
                    value:block,
                    args:args
                });
            }
            args = []; //for some odd reason, setting .length = 0 didn't work in safari
            method =
                prefix =
                    definition =
                        block = '';
        };

        appendResult();
        for (var i = 0, ii = value.length; i < ii; i++) {
            c = value[i];
            if (mode === 0 && whitespace.indexOf(c) > -1) {
                continue;
            }
            switch (c) {
                case '"':
                    if (!quote) {
                        quote = c;
                    }
                    else if (quote === c) {
                        quote = null;
                    }
                    break;

                case '(':
                    if (quote) {
                        break;
                    }
                    else if (mode === 0) {
                        mode = 1;
                        block += c;
                        continue;
                    } else {
                        numParen++;
                    }
                    break;

                case ')':
                    if (quote) {
                        break;
                    }
                    else if (mode === 1) {
                        if (numParen === 0) {
                            mode = 0;
                            block += c;
                            appendResult();
                            continue;
                        } else {
                            numParen--;
                        }
                    }
                    break;

                case ',':
                    if (quote) {
                        break;
                    }
                    else if (mode === 0) {
                        appendResult();
                        continue;
                    }
                    else if (mode === 1) {
                        if (numParen === 0 && !method.match(/^url$/i)) {
                            args.push(definition);
                            definition = '';
                            block += c;
                            continue;
                        }
                    }
                    break;
            }

            block += c;
            if (mode === 0) {
                method += c;
            }
            else {
                definition += c;
            }
        }
        appendResult();

        return results;
    };

    _html2canvas.Util.Bounds = function (element) {
        var clientRect, bounds = {};

        if (element.getBoundingClientRect) {
            clientRect = element.getBoundingClientRect();

            // TODO add scroll position to bounds, so no scrolling of window necessary
            bounds.top = clientRect.top;
            bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
            bounds.left = clientRect.left;

            bounds.width = element.offsetWidth;
            bounds.height = element.offsetHeight;
        }

        return bounds;
    };

// TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
// but would require further work to calculate the correct positions for elements with offsetParents
    _html2canvas.Util.OffsetBounds = function (element) {
        var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : {top:0, left:0};

        return {
            top:element.offsetTop + parent.top,
            bottom:element.offsetTop + element.offsetHeight + parent.top,
            left:element.offsetLeft + parent.left,
            width:element.offsetWidth,
            height:element.offsetHeight
        };
    };

    function toPX(element, attribute, value) {
        var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
            left,
            style = element.style;

        // Check if we are not dealing with pixels, (Opera has issues with this)
        // Ported from jQuery css.js
        // From the awesome hack by Dean Edwards
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

        // If we're not dealing with a regular pixel number
        // but a number that has a weird ending, we need to convert it to pixels

        if (!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(value) && /^-?\d/.test(value)) {
            // Remember the original values
            left = style.left;

            // Put in the new values to get a computed value out
            if (rsLeft) {
                element.runtimeStyle.left = element.currentStyle.left;
            }
            style.left = attribute === "fontSize" ? "1em" : (value || 0);
            value = style.pixelLeft + "px";

            // Revert the changed values
            style.left = left;
            if (rsLeft) {
                element.runtimeStyle.left = rsLeft;
            }
        }

        if (!/^(thin|medium|thick)$/i.test(value)) {
            return Math.round(parseFloat(value)) + "px";
        }

        return value;
    }

    function asInt(val) {
        return parseInt(val, 10);
    }

    function parseBackgroundSizePosition(value, element, attribute, index) {
        value = (value || '').split(',');
        value = value[index || 0] || value[0] || 'auto';
        value = _html2canvas.Util.trimText(value).split(' ');

        if (attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
            //these values will be handled in the parent function
        } else {
            value[0] = (value[0].indexOf("%") === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
            if (value[1] === undefined) {
                if (attribute === 'backgroundSize') {
                    value[1] = 'auto';
                    return value;
                } else {
                    // IE 9 doesn't return double digit always
                    value[1] = value[0];
                }
            }
            value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
        }
        return value;
    }

    _html2canvas.Util.getCSS = function (element, attribute, index) {
        if (previousElement !== element) {
            computedCSS = document.defaultView.getComputedStyle(element, null);
        }

        var value = computedCSS[attribute];

        if (/^background(Size|Position)$/.test(attribute)) {
            return parseBackgroundSizePosition(value, element, attribute, index);
        } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
            var arr = value.split(" ");
            if (arr.length <= 1) {
                arr[1] = arr[0];
            }
            return arr.map(asInt);
        }

        return value;
    };

    _html2canvas.Util.resizeBounds = function (current_width, current_height, target_width, target_height, stretch_mode) {
        var target_ratio = target_width / target_height,
            current_ratio = current_width / current_height,
            output_width, output_height;

        if (!stretch_mode || stretch_mode === 'auto') {
            output_width = target_width;
            output_height = target_height;
        } else if (target_ratio < current_ratio ^ stretch_mode === 'contain') {
            output_height = target_height;
            output_width = target_height * current_ratio;
        } else {
            output_width = target_width;
            output_height = target_width / current_ratio;
        }

        return {
            width:output_width,
            height:output_height
        };
    };

    function backgroundBoundsFactory(prop, el, bounds, image, imageIndex, backgroundSize) {
        var bgposition = _html2canvas.Util.getCSS(el, prop, imageIndex) ,
            topPos,
            left,
            percentage,
            val;

        if (bgposition.length === 1) {
            val = bgposition[0];

            bgposition = [];

            bgposition[0] = val;
            bgposition[1] = val;
        }

        if (bgposition[0].toString().indexOf("%") !== -1) {
            percentage = (parseFloat(bgposition[0]) / 100);
            left = bounds.width * percentage;
            if (prop !== 'backgroundSize') {
                left -= (backgroundSize || image).width * percentage;
            }
        } else {
            if (prop === 'backgroundSize') {
                if (bgposition[0] === 'auto') {
                    left = image.width;
                } else {
                    if (/contain|cover/.test(bgposition[0])) {
                        var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
                        left = resized.width;
                        topPos = resized.height;
                    } else {
                        left = parseInt(bgposition[0], 10);
                    }
                }
            } else {
                left = parseInt(bgposition[0], 10);
            }
        }


        if (bgposition[1] === 'auto') {
            topPos = left / image.width * image.height;
        } else if (bgposition[1].toString().indexOf("%") !== -1) {
            percentage = (parseFloat(bgposition[1]) / 100);
            topPos = bounds.height * percentage;
            if (prop !== 'backgroundSize') {
                topPos -= (backgroundSize || image).height * percentage;
            }

        } else {
            topPos = parseInt(bgposition[1], 10);
        }

        return [left, topPos];
    }

    _html2canvas.Util.BackgroundPosition = function (el, bounds, image, imageIndex, backgroundSize) {
        var result = backgroundBoundsFactory('backgroundPosition', el, bounds, image, imageIndex, backgroundSize);
        return { left:result[0], top:result[1] };
    };

    _html2canvas.Util.BackgroundSize = function (el, bounds, image, imageIndex) {
        var result = backgroundBoundsFactory('backgroundSize', el, bounds, image, imageIndex);
        return { width:result[0], height:result[1] };
    };

    _html2canvas.Util.Extend = function (options, defaults) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                defaults[key] = options[key];
            }
        }
        return defaults;
    };


    /*
     * Derived from jQuery.contents()
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     */
    _html2canvas.Util.Children = function (elem) {
        var children;
        try {
            children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function (array) {
                var ret = [];
                if (array !== null) {
                    (function (first, second) {
                        var i = first.length,
                            j = 0;

                        if (typeof second.length === "number") {
                            for (var l = second.length; j < l; j++) {
                                first[i++] = second[j];
                            }
                        } else {
                            while (second[j] !== undefined) {
                                first[i++] = second[j++];
                            }
                        }

                        first.length = i;

                        return first;
                    })(ret, array);
                }
                return ret;
            })(elem.childNodes);

        } catch (ex) {
            _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
            children = [];
        }
        return children;
    };

    _html2canvas.Util.isTransparent = function (backgroundColor) {
        return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
    };
    _html2canvas.Util.Font = (function () {

        var fontData = {};

        return function (font, fontSize, doc) {
            if (fontData[font + "-" + fontSize] !== undefined) {
                return fontData[font + "-" + fontSize];
            }

            var container = doc.createElement('div'),
                img = doc.createElement('img'),
                span = doc.createElement('span'),
                sampleText = 'Hidden Text',
                baseline,
                middle,
                metricsObj;

            container.style.visibility = "hidden";
            container.style.fontFamily = font;
            container.style.fontSize = fontSize;
            container.style.margin = 0;
            container.style.padding = 0;

            doc.body.appendChild(container);

            // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
            img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
            img.width = 1;
            img.height = 1;

            img.style.margin = 0;
            img.style.padding = 0;
            img.style.verticalAlign = "baseline";

            span.style.fontFamily = font;
            span.style.fontSize = fontSize;
            span.style.margin = 0;
            span.style.padding = 0;

            span.appendChild(doc.createTextNode(sampleText));
            container.appendChild(span);
            container.appendChild(img);
            baseline = (img.offsetTop - span.offsetTop) + 1;

            container.removeChild(span);
            container.appendChild(doc.createTextNode(sampleText));

            container.style.lineHeight = "normal";
            img.style.verticalAlign = "super";

            middle = (img.offsetTop - container.offsetTop) + 1;
            metricsObj = {
                baseline:baseline,
                lineWidth:1,
                middle:middle
            };

            fontData[font + "-" + fontSize] = metricsObj;

            doc.body.removeChild(container);

            return metricsObj;
        };
    })();

    (function () {
        var Util = _html2canvas.Util,
            Generate = {};

        _html2canvas.Generate = Generate;

        var reGradients = [
            /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
            /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
            /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
        ];

        /*
         * TODO: Add IE10 vendor prefix (-ms) support
         * TODO: Add W3C gradient (linear-gradient) support
         * TODO: Add old Webkit -webkit-gradient(radial, ...) support
         * TODO: Maybe some RegExp optimizations are possible ;o)
         */
        Generate.parseGradient = function (css, bounds) {
            var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl, tr, br, bl;

            for (i = 0; i < len; i += 1) {
                m1 = css.match(reGradients[i]);
                if (m1) {
                    break;
                }
            }

            if (m1) {
                switch (m1[1]) {
                    case '-webkit-linear-gradient':
                    case '-o-linear-gradient':

                        gradient = {
                            type:'linear',
                            x0:null,
                            y0:null,
                            x1:null,
                            y1:null,
                            colorStops:[]
                        };

                        // get coordinates
                        m2 = m1[2].match(/\w+/g);
                        if (m2) {
                            m2Len = m2.length;
                            for (i = 0; i < m2Len; i += 1) {
                                switch (m2[i]) {
                                    case 'top':
                                        gradient.y0 = 0;
                                        gradient.y1 = bounds.height;
                                        break;

                                    case 'right':
                                        gradient.x0 = bounds.width;
                                        gradient.x1 = 0;
                                        break;

                                    case 'bottom':
                                        gradient.y0 = bounds.height;
                                        gradient.y1 = 0;
                                        break;

                                    case 'left':
                                        gradient.x0 = 0;
                                        gradient.x1 = bounds.width;
                                        break;
                                }
                            }
                        }
                        if (gradient.x0 === null && gradient.x1 === null) { // center
                            gradient.x0 = gradient.x1 = bounds.width / 2;
                        }
                        if (gradient.y0 === null && gradient.y1 === null) { // center
                            gradient.y0 = gradient.y1 = bounds.height / 2;
                        }

                        // get colors and stops
                        m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3] === '%') {
                                        stop /= 100;
                                    } else { // px - stupid opera
                                        stop /= bounds.width;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color:m3[1],
                                    stop:stop
                                });
                            }
                        }
                        break;

                    case '-webkit-gradient':

                        gradient = {
                            type:m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
                            x0:0,
                            y0:0,
                            x1:0,
                            y1:0,
                            colorStops:[]
                        };

                        // get coordinates
                        m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
                        if (m2) {
                            gradient.x0 = (m2[1] * bounds.width) / 100;
                            gradient.y0 = (m2[2] * bounds.height) / 100;
                            gradient.x1 = (m2[3] * bounds.width) / 100;
                            gradient.y1 = (m2[4] * bounds.height) / 100;
                        }

                        // get colors and stops
                        m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
                        if (m2) {
                            m2Len = m2.length;
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
                                stop = parseFloat(m3[2]);
                                if (m3[1] === 'from') {
                                    stop = 0.0;
                                }
                                if (m3[1] === 'to') {
                                    stop = 1.0;
                                }
                                gradient.colorStops.push({
                                    color:m3[3],
                                    stop:stop
                                });
                            }
                        }
                        break;

                    case '-moz-linear-gradient':

                        gradient = {
                            type:'linear',
                            x0:0,
                            y0:0,
                            x1:0,
                            y1:0,
                            colorStops:[]
                        };

                        // get coordinates
                        m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

                        // m2[1] == 0%   -> left
                        // m2[1] == 50%  -> center
                        // m2[1] == 100% -> right

                        // m2[2] == 0%   -> top
                        // m2[2] == 50%  -> center
                        // m2[2] == 100% -> bottom

                        if (m2) {
                            gradient.x0 = (m2[1] * bounds.width) / 100;
                            gradient.y0 = (m2[2] * bounds.height) / 100;
                            gradient.x1 = bounds.width - gradient.x0;
                            gradient.y1 = bounds.height - gradient.y0;
                        }

                        // get colors and stops
                        m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3]) { // percentage
                                        stop /= 100;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color:m3[1],
                                    stop:stop
                                });
                            }
                        }
                        break;

                    case '-webkit-radial-gradient':
                    case '-moz-radial-gradient':
                    case '-o-radial-gradient':

                        gradient = {
                            type:'circle',
                            x0:0,
                            y0:0,
                            x1:bounds.width,
                            y1:bounds.height,
                            cx:0,
                            cy:0,
                            rx:0,
                            ry:0,
                            colorStops:[]
                        };

                        // center
                        m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
                        if (m2) {
                            gradient.cx = (m2[1] * bounds.width) / 100;
                            gradient.cy = (m2[2] * bounds.height) / 100;
                        }

                        // size
                        m2 = m1[3].match(/\w+/);
                        m3 = m1[4].match(/[a-z\-]*/);
                        if (m2 && m3) {
                            switch (m3[0]) {
                                case 'farthest-corner':
                                case 'cover': // is equivalent to farthest-corner
                                case '': // mozilla removes "cover" from definition :(
                                    tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                                    break;
                                case 'closest-corner':
                                    tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                                    break;
                                case 'farthest-side':
                                    if (m2[0] === 'circle') {
                                        gradient.rx = gradient.ry = Math.max(
                                            gradient.cx,
                                            gradient.cy,
                                            gradient.x1 - gradient.cx,
                                            gradient.y1 - gradient.cy
                                        );
                                    } else { // ellipse

                                        gradient.type = m2[0];

                                        gradient.rx = Math.max(
                                            gradient.cx,
                                            gradient.x1 - gradient.cx
                                        );
                                        gradient.ry = Math.max(
                                            gradient.cy,
                                            gradient.y1 - gradient.cy
                                        );
                                    }
                                    break;
                                case 'closest-side':
                                case 'contain': // is equivalent to closest-side
                                    if (m2[0] === 'circle') {
                                        gradient.rx = gradient.ry = Math.min(
                                            gradient.cx,
                                            gradient.cy,
                                            gradient.x1 - gradient.cx,
                                            gradient.y1 - gradient.cy
                                        );
                                    } else { // ellipse

                                        gradient.type = m2[0];

                                        gradient.rx = Math.min(
                                            gradient.cx,
                                            gradient.x1 - gradient.cx
                                        );
                                        gradient.ry = Math.min(
                                            gradient.cy,
                                            gradient.y1 - gradient.cy
                                        );
                                    }
                                    break;

                                // TODO: add support for "30px 40px" sizes (webkit only)
                            }
                        }

                        // color stops
                        m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3] === '%') {
                                        stop /= 100;
                                    } else { // px - stupid opera
                                        stop /= bounds.width;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color:m3[1],
                                    stop:stop
                                });
                            }
                        }
                        break;
                }
            }

            return gradient;
        };

        function addScrollStops(grad) {
            return function (colorStop) {
                try {
                    grad.addColorStop(colorStop.stop, colorStop.color);
                }
                catch (e) {
                    Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
                }
            };
        }

        Generate.Gradient = function (src, bounds) {
            if (bounds.width === 0 || bounds.height === 0) {
                return;
            }

            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d'),
                gradient, grad;

            canvas.width = bounds.width;
            canvas.height = bounds.height;

            // TODO: add support for multi defined background gradients
            gradient = _html2canvas.Generate.parseGradient(src, bounds);

            if (gradient) {
                switch (gradient.type) {
                    case 'linear':
                        grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
                        gradient.colorStops.forEach(addScrollStops(grad));
                        ctx.fillStyle = grad;
                        ctx.fillRect(0, 0, bounds.width, bounds.height);
                        break;

                    case 'circle':
                        grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
                        gradient.colorStops.forEach(addScrollStops(grad));
                        ctx.fillStyle = grad;
                        ctx.fillRect(0, 0, bounds.width, bounds.height);
                        break;

                    case 'ellipse':
                        var canvasRadial = document.createElement('canvas'),
                            ctxRadial = canvasRadial.getContext('2d'),
                            ri = Math.max(gradient.rx, gradient.ry),
                            di = ri * 2;

                        canvasRadial.width = canvasRadial.height = di;

                        grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
                        gradient.colorStops.forEach(addScrollStops(grad));

                        ctxRadial.fillStyle = grad;
                        ctxRadial.fillRect(0, 0, di, di);

                        ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
                        break;
                }
            }

            return canvas;
        };

        Generate.ListAlpha = function (number) {
            var tmp = "",
                modulus;

            do {
                modulus = number % 26;
                tmp = String.fromCharCode((modulus) + 64) + tmp;
                number = number / 26;
            } while ((number * 26) > 26);

            return tmp;
        };

        Generate.ListRoman = function (number) {
            var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
                decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                roman = "",
                v,
                len = romanArray.length;

            if (number <= 0 || number >= 4000) {
                return number;
            }

            for (v = 0; v < len; v += 1) {
                while (number >= decimal[v]) {
                    number -= decimal[v];
                    roman += romanArray[v];
                }
            }

            return roman;
        };
    })();
    function h2cRenderContext(width, height) {
        var storage = [];
        return {
            storage:storage,
            width:width,
            height:height,
            clip:function () {
                storage.push({
                    type:"function",
                    name:"clip",
                    'arguments':arguments
                });
            },
            translate:function () {
                storage.push({
                    type:"function",
                    name:"translate",
                    'arguments':arguments
                });
            },
            fill:function () {
                storage.push({
                    type:"function",
                    name:"fill",
                    'arguments':arguments
                });
            },
            save:function () {
                storage.push({
                    type:"function",
                    name:"save",
                    'arguments':arguments
                });
            },
            restore:function () {
                storage.push({
                    type:"function",
                    name:"restore",
                    'arguments':arguments
                });
            },
            fillRect:function () {
                storage.push({
                    type:"function",
                    name:"fillRect",
                    'arguments':arguments
                });
            },
            createPattern:function () {
                storage.push({
                    type:"function",
                    name:"createPattern",
                    'arguments':arguments
                });
            },
            drawShape:function () {

                var shape = [];

                storage.push({
                    type:"function",
                    name:"drawShape",
                    'arguments':shape
                });

                return {
                    moveTo:function () {
                        shape.push({
                            name:"moveTo",
                            'arguments':arguments
                        });
                    },
                    lineTo:function () {
                        shape.push({
                            name:"lineTo",
                            'arguments':arguments
                        });
                    },
                    arcTo:function () {
                        shape.push({
                            name:"arcTo",
                            'arguments':arguments
                        });
                    },
                    bezierCurveTo:function () {
                        shape.push({
                            name:"bezierCurveTo",
                            'arguments':arguments
                        });
                    },
                    quadraticCurveTo:function () {
                        shape.push({
                            name:"quadraticCurveTo",
                            'arguments':arguments
                        });
                    }
                };

            },
            drawImage:function () {
                storage.push({
                    type:"function",
                    name:"drawImage",
                    'arguments':arguments
                });
            },
            fillText:function () {
                storage.push({
                    type:"function",
                    name:"fillText",
                    'arguments':arguments
                });
            },
            setVariable:function (variable, value) {
                storage.push({
                    type:"variable",
                    name:variable,
                    'arguments':value
                });
                return value;
            }
        };
    }

    _html2canvas.Parse = function (images, options) {
        window.scroll(0, 0);

        var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
            numDraws = 0,
            doc = element.ownerDocument,
            Util = _html2canvas.Util,
            support = Util.Support(options, doc),
            ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
            body = doc.body,
            getCSS = Util.getCSS,
            pseudoHide = "___html2canvas___pseudoelement",
            hidePseudoElements = doc.createElement('style');

        hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
            '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

        body.appendChild(hidePseudoElements);

        images = images || {};

        function documentWidth() {
            return Math.max(
                Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
                Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
                Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
            );
        }

        function documentHeight() {
            return Math.max(
                Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
                Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
                Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
            );
        }

        function getCSSInt(element, attribute) {
            var val = parseInt(getCSS(element, attribute), 10);
            return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
        }

        function renderRect(ctx, x, y, w, h, bgcolor) {
            if (bgcolor !== "transparent") {
                ctx.setVariable("fillStyle", bgcolor);
                ctx.fillRect(x, y, w, h);
                numDraws += 1;
            }
        }

        function capitalize(m, p1, p2) {
            if (m.length > 0) {
                return p1 + p2.toUpperCase();
            }
        }

        function textTransform(text, transform) {
            switch (transform) {
                case "lowercase":
                    return text.toLowerCase();
                case "capitalize":
                    return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
                case "uppercase":
                    return text.toUpperCase();
                default:
                    return text;
            }
        }

        function noLetterSpacing(letter_spacing) {
            return (/^(normal|none|0px)$/.test(letter_spacing));
        }

        function drawText(currentText, x, y, ctx) {
            if (currentText !== null && Util.trimText(currentText).length > 0) {
                ctx.fillText(currentText, x, y);
                numDraws += 1;
            }
        }

        function setTextVariables(ctx, el, text_decoration, color) {
            var align = false,
                bold = getCSS(el, "fontWeight"),
                family = getCSS(el, "fontFamily"),
                size = getCSS(el, "fontSize"),
                shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

            switch (parseInt(bold, 10)) {
                case 401:
                    bold = "bold";
                    break;
                case 400:
                    bold = "normal";
                    break;
            }

            ctx.setVariable("fillStyle", color);
            ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
            ctx.setVariable("textAlign", (align) ? "right" : "left");

            if (shadows.length) {
                // TODO: support multiple text shadows
                // apply the first text shadow
                ctx.setVariable("shadowColor", shadows[0].color);
                ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
                ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
                ctx.setVariable("shadowBlur", shadows[0].blur);
            }

            if (text_decoration !== "none") {
                return Util.Font(family, size, doc);
            }
        }

        function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
            switch (text_decoration) {
                case "underline":
                    // Draws a line at the baseline of the font
                    // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
                    renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
                    break;
                case "overline":
                    renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
                    break;
                case "line-through":
                    // TODO try and find exact position for line-through
                    renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
                    break;
            }
        }

        function getTextBounds(state, text, textDecoration, isLast, transform) {
            var bounds;
            if (support.rangeBounds && !transform) {
                if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
                    bounds = textRangeBounds(text, state.node, state.textOffset);
                }
                state.textOffset += text.length;
            } else if (state.node && typeof state.node.nodeValue === "string") {
                var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
                bounds = textWrapperBounds(state.node, transform);
                state.node = newTextNode;
            }
            return bounds;
        }

        function textRangeBounds(text, textNode, textOffset) {
            var range = doc.createRange();
            range.setStart(textNode, textOffset);
            range.setEnd(textNode, textOffset + text.length);
            return range.getBoundingClientRect();
        }

        function textWrapperBounds(oldTextNode, transform) {
            var parent = oldTextNode.parentNode,
                wrapElement = doc.createElement('wrapper'),
                backupText = oldTextNode.cloneNode(true);

            wrapElement.appendChild(oldTextNode.cloneNode(true));
            parent.replaceChild(wrapElement, oldTextNode);

            var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
            parent.replaceChild(backupText, wrapElement);
            return bounds;
        }

        function renderText(el, textNode, stack) {
            var ctx = stack.ctx,
                color = getCSS(el, "color"),
                textDecoration = getCSS(el, "textDecoration"),
                textAlign = getCSS(el, "textAlign"),
                metrics,
                textList,
                state = {
                    node:textNode,
                    textOffset:0
                };

            if (Util.trimText(textNode.nodeValue).length > 0) {
                textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
                textAlign = textAlign.replace(["-webkit-auto"], ["auto"]);

                textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
                    textNode.nodeValue.split(/(\b| )/)
                    : textNode.nodeValue.split("");

                metrics = setTextVariables(ctx, el, textDecoration, color);

                if (options.chinese) {
                    textList.forEach(function (word, index) {
                        if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
                            word = word.split("");
                            word.unshift(index, 1);
                            textList.splice.apply(textList, word);
                        }
                    });
                }

                textList.forEach(function (text, index) {
                    var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
                    if (bounds) {
                        drawText(text, bounds.left, bounds.bottom, ctx);
                        renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
                    }
                });
            }
        }

        function listPosition(element, val) {
            var boundElement = doc.createElement("boundelement"),
                originalType,
                bounds;

            boundElement.style.display = "inline";

            originalType = element.style.listStyleType;
            element.style.listStyleType = "none";

            boundElement.appendChild(doc.createTextNode(val));

            element.insertBefore(boundElement, element.firstChild);

            bounds = Util.Bounds(boundElement);
            element.removeChild(boundElement);
            element.style.listStyleType = originalType;
            return bounds;
        }

        function elementIndex(el) {
            var i = -1,
                count = 1,
                childs = el.parentNode.childNodes;

            if (el.parentNode) {
                while (childs[++i] !== el) {
                    if (childs[i].nodeType === 1) {
                        count++;
                    }
                }
                return count;
            } else {
                return -1;
            }
        }

        function listItemText(element, type) {
            var currentIndex = elementIndex(element), text;
            switch (type) {
                case "decimal":
                    text = currentIndex;
                    break;
                case "decimal-leading-zero":
                    text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
                    break;
                case "upper-roman":
                    text = _html2canvas.Generate.ListRoman(currentIndex);
                    break;
                case "lower-roman":
                    text = _html2canvas.Generate.ListRoman(currentIndex).toLowerCase();
                    break;
                case "lower-alpha":
                    text = _html2canvas.Generate.ListAlpha(currentIndex).toLowerCase();
                    break;
                case "upper-alpha":
                    text = _html2canvas.Generate.ListAlpha(currentIndex);
                    break;
            }

            return text + ". ";
        }

        function renderListItem(element, stack, elBounds) {
            var x,
                text,
                ctx = stack.ctx,
                type = getCSS(element, "listStyleType"),
                listBounds;

            if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
                text = listItemText(element, type);
                listBounds = listPosition(element, text);
                setTextVariables(ctx, element, "none", getCSS(element, "color"));

                if (getCSS(element, "listStylePosition") === "inside") {
                    ctx.setVariable("textAlign", "left");
                    x = elBounds.left;
                } else {
                    return;
                }

                drawText(text, x, listBounds.bottom, ctx);
            }
        }

        function loadImage(src) {
            var img = images[src];
            return (img && img.succeeded === true) ? img.img : false;
        }

        function clipBounds(src, dst) {
            var x = Math.max(src.left, dst.left),
                y = Math.max(src.top, dst.top),
                x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
                y2 = Math.min((src.top + src.height), (dst.top + dst.height));

            return {
                left:x,
                top:y,
                width:x2 - x,
                height:y2 - y
            };
        }

        function setZ(element, stack, parentStack) {
            var newContext,
                isPositioned = stack.cssPosition !== 'static',
                zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
                opacity = getCSS(element, 'opacity'),
                isFloated = getCSS(element, 'cssFloat') !== 'none';

            // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
            // When a new stacking context should be created:
            // the root element (HTML),
            // positioned (absolutely or relatively) with a z-index value other than "auto",
            // elements with an opacity value less than 1. (See the specification for opacity),
            // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

            stack.zIndex = newContext = h2czContext(zIndex);
            newContext.isPositioned = isPositioned;
            newContext.isFloated = isFloated;
            newContext.opacity = opacity;
            newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

            if (parentStack) {
                parentStack.zIndex.children.push(stack);
            }
        }

        function renderImage(ctx, element, image, bounds, borders) {

            var paddingLeft = getCSSInt(element, 'paddingLeft'),
                paddingTop = getCSSInt(element, 'paddingTop'),
                paddingRight = getCSSInt(element, 'paddingRight'),
                paddingBottom = getCSSInt(element, 'paddingBottom');

            drawImage(
                ctx,
                image,
                0, //sx
                0, //sy
                image.width, //sw
                image.height, //sh
                bounds.left + paddingLeft + borders[3].width, //dx
                bounds.top + paddingTop + borders[0].width, // dy
                bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
            );
        }

        function getBorderData(element) {
            return ["Top", "Right", "Bottom", "Left"].map(function (side) {
                return {
                    width:getCSSInt(element, 'border' + side + 'Width'),
                    color:getCSS(element, 'border' + side + 'Color')
                };
            });
        }

        function getBorderRadiusData(element) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (side) {
                return getCSS(element, 'border' + side + 'Radius');
            });
        }

        var getCurvePoints = (function (kappa) {

            return function (x, y, r1, r2) {
                var ox = (r1) * kappa, // control point offset horizontal
                    oy = (r2) * kappa, // control point offset vertical
                    xm = x + r1, // x-middle
                    ym = y + r2; // y-middle
                return {
                    topLeft:bezierCurve({
                        x:x,
                        y:ym
                    }, {
                        x:x,
                        y:ym - oy
                    }, {
                        x:xm - ox,
                        y:y
                    }, {
                        x:xm,
                        y:y
                    }),
                    topRight:bezierCurve({
                        x:x,
                        y:y
                    }, {
                        x:x + ox,
                        y:y
                    }, {
                        x:xm,
                        y:ym - oy
                    }, {
                        x:xm,
                        y:ym
                    }),
                    bottomRight:bezierCurve({
                        x:xm,
                        y:y
                    }, {
                        x:xm,
                        y:y + oy
                    }, {
                        x:x + ox,
                        y:ym
                    }, {
                        x:x,
                        y:ym
                    }),
                    bottomLeft:bezierCurve({
                        x:xm,
                        y:ym
                    }, {
                        x:xm - ox,
                        y:ym
                    }, {
                        x:x,
                        y:y + oy
                    }, {
                        x:x,
                        y:y
                    })
                };
            };
        })(4 * ((Math.sqrt(2) - 1) / 3));

        function bezierCurve(start, startControl, endControl, end) {

            var lerp = function (a, b, t) {
                return {
                    x:a.x + (b.x - a.x) * t,
                    y:a.y + (b.y - a.y) * t
                };
            };

            return {
                start:start,
                startControl:startControl,
                endControl:endControl,
                end:end,
                subdivide:function (t) {
                    var ab = lerp(start, startControl, t),
                        bc = lerp(startControl, endControl, t),
                        cd = lerp(endControl, end, t),
                        abbc = lerp(ab, bc, t),
                        bccd = lerp(bc, cd, t),
                        dest = lerp(abbc, bccd, t);
                    return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
                },
                curveTo:function (borderArgs) {
                    borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
                },
                curveToReversed:function (borderArgs) {
                    borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
                }
            };
        }

        function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
                corner1[0].curveTo(borderArgs);
                corner1[1].curveTo(borderArgs);
            } else {
                borderArgs.push(["line", x, y]);
            }

            if (radius2[0] > 0 || radius2[1] > 0) {
                borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
            }
        }

        function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
            var borderArgs = [];

            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
                outer1[1].curveTo(borderArgs);
            } else {
                borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
            }

            if (radius2[0] > 0 || radius2[1] > 0) {
                borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
                outer2[0].curveTo(borderArgs);
                borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
                inner2[0].curveToReversed(borderArgs);
            } else {
                borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
                borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
            }

            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
                inner1[1].curveToReversed(borderArgs);
            } else {
                borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
            }

            return borderArgs;
        }

        function calculateCurvePoints(bounds, borderRadius, borders) {

            var x = bounds.left,
                y = bounds.top,
                width = bounds.width,
                height = bounds.height,

                tlh = borderRadius[0][0],
                tlv = borderRadius[0][1],
                trh = borderRadius[1][0],
                trv = borderRadius[1][1],
                brh = borderRadius[2][0],
                brv = borderRadius[2][1],
                blh = borderRadius[3][0],
                blv = borderRadius[3][1],

                topWidth = width - trh,
                rightHeight = height - brv,
                bottomWidth = width - brh,
                leftHeight = height - blv;

            return {
                topLeftOuter:getCurvePoints(
                    x,
                    y,
                    tlh,
                    tlv
                ).topLeft.subdivide(0.5),

                topLeftInner:getCurvePoints(
                    x + borders[3].width,
                    y + borders[0].width,
                    Math.max(0, tlh - borders[3].width),
                    Math.max(0, tlv - borders[0].width)
                ).topLeft.subdivide(0.5),

                topRightOuter:getCurvePoints(
                    x + topWidth,
                    y,
                    trh,
                    trv
                ).topRight.subdivide(0.5),

                topRightInner:getCurvePoints(
                    x + Math.min(topWidth, width + borders[3].width),
                    y + borders[0].width,
                    (topWidth > width + borders[3].width) ? 0 : trh - borders[3].width,
                    trv - borders[0].width
                ).topRight.subdivide(0.5),

                bottomRightOuter:getCurvePoints(
                    x + bottomWidth,
                    y + rightHeight,
                    brh,
                    brv
                ).bottomRight.subdivide(0.5),

                bottomRightInner:getCurvePoints(
                    x + Math.min(bottomWidth, width + borders[3].width),
                    y + Math.min(rightHeight, height + borders[0].width),
                    Math.max(0, brh - borders[1].width),
                    Math.max(0, brv - borders[2].width)
                ).bottomRight.subdivide(0.5),

                bottomLeftOuter:getCurvePoints(
                    x,
                    y + leftHeight,
                    blh,
                    blv
                ).bottomLeft.subdivide(0.5),

                bottomLeftInner:getCurvePoints(
                    x + borders[3].width,
                    y + leftHeight,
                    Math.max(0, blh - borders[3].width),
                    Math.max(0, blv - borders[2].width)
                ).bottomLeft.subdivide(0.5)
            };
        }

        function getBorderClip(element, borderPoints, borders, radius, bounds) {
            var backgroundClip = getCSS(element, 'backgroundClip'),
                borderArgs = [];

            switch (backgroundClip) {
                case "content-box":
                case "padding-box":
                    parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
                    parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
                    parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
                    parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
                    break;

                default:
                    parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
                    parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
                    parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
                    parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
                    break;
            }

            return borderArgs;
        }

        function parseBorders(element, bounds, borders) {
            var x = bounds.left,
                y = bounds.top,
                width = bounds.width,
                height = bounds.height,
                borderSide,
                bx,
                by,
                bw,
                bh,
                borderArgs,
            // http://www.w3.org/TR/css3-background/#the-border-radius
                borderRadius = getBorderRadiusData(element),
                borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
                borderData = {
                    clip:getBorderClip(element, borderPoints, borders, borderRadius, bounds),
                    borders:[]
                };

            for (borderSide = 0; borderSide < 4; borderSide++) {

                if (borders[borderSide].width > 0) {
                    bx = x;
                    by = y;
                    bw = width;
                    bh = height - (borders[2].width);

                    switch (borderSide) {
                        case 0:
                            // top border
                            bh = borders[0].width;

                            borderArgs = drawSide({
                                    c1:[bx, by],
                                    c2:[bx + bw, by],
                                    c3:[bx + bw - borders[1].width, by + bh],
                                    c4:[bx + borders[3].width, by + bh]
                                }, borderRadius[0], borderRadius[1],
                                borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                            break;
                        case 1:
                            // right border
                            bx = x + width - (borders[1].width);
                            bw = borders[1].width;

                            borderArgs = drawSide({
                                    c1:[bx + bw, by],
                                    c2:[bx + bw, by + bh + borders[2].width],
                                    c3:[bx, by + bh],
                                    c4:[bx, by + borders[0].width]
                                }, borderRadius[1], borderRadius[2],
                                borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                            break;
                        case 2:
                            // bottom border
                            by = (by + height) - (borders[2].width);
                            bh = borders[2].width;

                            borderArgs = drawSide({
                                    c1:[bx + bw, by + bh],
                                    c2:[bx, by + bh],
                                    c3:[bx + borders[3].width, by],
                                    c4:[bx + bw - borders[3].width, by]
                                }, borderRadius[2], borderRadius[3],
                                borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                            break;
                        case 3:
                            // left border
                            bw = borders[3].width;

                            borderArgs = drawSide({
                                    c1:[bx, by + bh + borders[2].width],
                                    c2:[bx, by],
                                    c3:[bx + bw, by + borders[0].width],
                                    c4:[bx + bw, by + bh]
                                }, borderRadius[3], borderRadius[0],
                                borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                            break;
                    }

                    borderData.borders.push({
                        args:borderArgs,
                        color:borders[borderSide].color
                    });

                }
            }

            return borderData;
        }

        function createShape(ctx, args) {
            var shape = ctx.drawShape();
            args.forEach(function (border, index) {
                shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
            });
            return shape;
        }

        function renderBorders(ctx, borderArgs, color) {
            if (color !== "transparent") {
                ctx.setVariable("fillStyle", color);
                createShape(ctx, borderArgs);
                ctx.fill();
                numDraws += 1;
            }
        }

        function renderFormValue(el, bounds, stack) {

            var valueWrap = doc.createElement('valuewrap'),
                cssPropertyArray = ['lineHeight', 'textAlign', 'fontFamily', 'color', 'fontSize', 'paddingLeft', 'paddingTop', 'width', 'height', 'border', 'borderLeftWidth', 'borderTopWidth'],
                textValue,
                textNode;

            cssPropertyArray.forEach(function (property) {
                try {
                    valueWrap.style[property] = getCSS(el, property);
                } catch (e) {
                    // Older IE has issues with "border"
                    Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
                }
            });

            valueWrap.style.borderColor = "black";
            valueWrap.style.borderStyle = "solid";
            valueWrap.style.display = "block";
            valueWrap.style.position = "absolute";

            if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT") {
                valueWrap.style.lineHeight = getCSS(el, "height");
            }

            valueWrap.style.top = bounds.top + "px";
            valueWrap.style.left = bounds.left + "px";

            textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
            if (!textValue) {
                textValue = el.placeholder;
            }

            textNode = doc.createTextNode(textValue);

            valueWrap.appendChild(textNode);
            body.appendChild(valueWrap);

            renderText(el, textNode, stack);
            body.removeChild(valueWrap);
        }

        function drawImage(ctx) {
            ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
            numDraws += 1;
        }

        function getPseudoElement(el, which) {
            var elStyle = window.getComputedStyle(el, which);
            if (!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
                return;
            }
            var content = elStyle.content + '',
                first = content.substr(0, 1);
            //strips quotes
            if (first === content.substr(content.length - 1) && first.match(/'|"/)) {
                content = content.substr(1, content.length - 2);
            }

            var isImage = content.substr(0, 3) === 'url',
                elps = document.createElement(isImage ? 'img' : 'span');

            elps.className = pseudoHide + "-before " + pseudoHide + "-after";

            Object.keys(elStyle).filter(indexedProperty).forEach(function (prop) {
                // Prevent assigning of read only CSS Rules, ex. length, parentRule
                try {
                    elps.style[prop] = elStyle[prop];
                } catch (e) {
                    Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
                }
            });

            if (isImage) {
                elps.src = Util.parseBackgroundImage(content)[0].args[0];
            } else {
                elps.innerHTML = content;
            }
            return elps;
        }

        function indexedProperty(property) {
            return (isNaN(window.parseInt(property, 10)));
        }

        function injectPseudoElements(el, stack) {
            var before = getPseudoElement(el, ':before'),
                after = getPseudoElement(el, ':after');
            if (!before && !after) {
                return;
            }

            if (before) {
                el.className += " " + pseudoHide + "-before";
                el.parentNode.insertBefore(before, el);
                parseElement(before, stack, true);
                el.parentNode.removeChild(before);
                el.className = el.className.replace(pseudoHide + "-before", "").trim();
            }

            if (after) {
                el.className += " " + pseudoHide + "-after";
                el.appendChild(after);
                parseElement(after, stack, true);
                el.removeChild(after);
                el.className = el.className.replace(pseudoHide + "-after", "").trim();
            }

        }

        function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
            var offsetX = Math.round(bounds.left + backgroundPosition.left),
                offsetY = Math.round(bounds.top + backgroundPosition.top);

            ctx.createPattern(image);
            ctx.translate(offsetX, offsetY);
            ctx.fill();
            ctx.translate(-offsetX, -offsetY);
        }

        function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
            var args = [];
            args.push(["line", Math.round(left), Math.round(top)]);
            args.push(["line", Math.round(left + width), Math.round(top)]);
            args.push(["line", Math.round(left + width), Math.round(height + top)]);
            args.push(["line", Math.round(left), Math.round(height + top)]);
            createShape(ctx, args);
            ctx.save();
            ctx.clip();
            renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
            ctx.restore();
        }

        function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
            renderRect(
                ctx,
                backgroundBounds.left,
                backgroundBounds.top,
                backgroundBounds.width,
                backgroundBounds.height,
                bgcolor
            );
        }

        function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
            var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
                backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
                backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

            image = resizeImage(image, backgroundSize);

            backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

            switch (backgroundRepeat) {
                case "repeat-x":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
                    break;

                case "repeat-y":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
                    break;

                case "no-repeat":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
                    break;

                default:
                    renderBackgroundRepeat(ctx, image, backgroundPosition, {
                        top:bounds.top,
                        left:bounds.left,
                        width:image.width,
                        height:image.height
                    });
                    break;
            }
        }

        function renderBackgroundImage(element, bounds, ctx) {
            var backgroundImage = getCSS(element, "backgroundImage"),
                backgroundImages = Util.parseBackgroundImage(backgroundImage),
                image,
                imageIndex = backgroundImages.length;

            while (imageIndex--) {
                backgroundImage = backgroundImages[imageIndex];

                if (!backgroundImage.args || backgroundImage.args.length === 0) {
                    continue;
                }

                var key = backgroundImage.method === 'url' ?
                    backgroundImage.args[0] :
                    backgroundImage.value;

                image = loadImage(key);

                // TODO add support for background-origin
                if (image) {
                    renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
                } else {
                    Util.log("html2canvas: Error loading background:", backgroundImage);
                }
            }
        }

        function resizeImage(image, bounds) {
            if (image.width === bounds.width && image.height === bounds.height) {
                return image;
            }

            var ctx, canvas = doc.createElement('canvas');
            canvas.width = bounds.width;
            canvas.height = bounds.height;
            ctx = canvas.getContext("2d");
            drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height);
            return canvas;
        }

        function setOpacity(ctx, element, parentStack) {
            return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
        }

        function removePx(str) {
            return str.replace("px", "");
        }

        var transformRegExp = /(matrix)\((.+)\)/;

        function getTransform(element, parentStack) {
            var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
            var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

            transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

            var matrix;
            if (transform && transform !== "none") {
                var match = transform.match(transformRegExp);
                if (match) {
                    switch (match[1]) {
                        case "matrix":
                            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
                            break;
                    }
                }
            }

            return {
                origin:transformOrigin,
                matrix:matrix
            };
        }

        function createStack(element, parentStack, bounds, transform) {
            var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width, (!parentStack) ? documentHeight() : bounds.height),
                stack = {
                    ctx:ctx,
                    opacity:setOpacity(ctx, element, parentStack),
                    cssPosition:getCSS(element, "position"),
                    borders:getBorderData(element),
                    transform:transform,
                    clip:(parentStack && parentStack.clip) ? Util.Extend({}, parentStack.clip) : null
                };

            setZ(element, stack, parentStack);

            // TODO correct overflow for absolute content residing under a static position
            if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false) {
                stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
            }

            return stack;
        }

        function getBackgroundBounds(borders, bounds, clip) {
            var backgroundBounds = {
                left:bounds.left + borders[3].width,
                top:bounds.top + borders[0].width,
                width:bounds.width - (borders[1].width + borders[3].width),
                height:bounds.height - (borders[0].width + borders[2].width)
            };

            if (clip) {
                backgroundBounds = clipBounds(backgroundBounds, clip);
            }

            return backgroundBounds;
        }

        function getBounds(element, transform) {
            var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
            transform.origin[0] += bounds.left;
            transform.origin[1] += bounds.top;
            return bounds;
        }

        function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
            var transform = getTransform(element, parentStack),
                bounds = getBounds(element, transform),
                image,
                stack = createStack(element, parentStack, bounds, transform),
                borders = stack.borders,
                ctx = stack.ctx,
                backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
                borderData = parseBorders(element, bounds, borders),
                backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


            createShape(ctx, borderData.clip);

            ctx.save();
            ctx.clip();

            if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
                renderBackgroundColor(ctx, bounds, backgroundColor);
                renderBackgroundImage(element, backgroundBounds, ctx);
            } else if (ignoreBackground) {
                stack.backgroundColor = backgroundColor;
            }

            ctx.restore();

            borderData.borders.forEach(function (border) {
                renderBorders(ctx, border.args, border.color);
            });

            if (!pseudoElement) {
                injectPseudoElements(element, stack);
            }

            switch (element.nodeName) {
                case "IMG":
                    if ((image = loadImage(element.getAttribute('src')))) {
                        renderImage(ctx, element, image, bounds, borders);
                    } else {
                        Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
                    }
                    break;
                case "INPUT":
                    // TODO add all relevant type's, i.e. HTML5 new stuff
                    // todo add support for placeholder attribute for browsers which support it
                    if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "TEXTAREA":
                    if ((element.value || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "SELECT":
                    if ((element.options || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "LI":
                    renderListItem(element, stack, backgroundBounds);
                    break;
                case "CANVAS":
                    renderImage(ctx, element, element, bounds, borders);
                    break;
            }

            return stack;
        }

        function isElementVisible(element) {
            return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
        }

        function parseElement(element, stack, pseudoElement) {
            if (isElementVisible(element)) {
                stack = renderElement(element, stack, pseudoElement, false) || stack;
                if (!ignoreElementsRegExp.test(element.nodeName)) {
                    parseChildren(element, stack, pseudoElement);
                }
            }
        }

        function parseChildren(element, stack, pseudoElement) {
            Util.Children(element).forEach(function (node) {
                if (node.nodeType === node.ELEMENT_NODE) {
                    parseElement(node, stack, pseudoElement);
                } else if (node.nodeType === node.TEXT_NODE) {
                    renderText(element, node, stack);
                }
            });
        }

        function init() {
            var background = getCSS(document.documentElement, "backgroundColor"),
                transparentBackground = (Util.isTransparent(background) && element === document.body),
                stack = renderElement(element, null, false, transparentBackground);
            parseChildren(element, stack);

            if (transparentBackground) {
                background = stack.backgroundColor;
            }

            body.removeChild(hidePseudoElements);
            return {
                backgroundColor:background,
                stack:stack
            };
        }

        return init();
    };

    function h2czContext(zindex) {
        return {
            zindex:zindex,
            children:[]
        };
    }

    _html2canvas.Preload = function (options) {

        var images = {
                numLoaded:0, // also failed are counted here
                numFailed:0,
                numTotal:0,
                cleanupDone:false
            },
            pageOrigin,
            Util = _html2canvas.Util,
            methods,
            i,
            count = 0,
            element = options.elements[0] || document.body,
            doc = element.ownerDocument,
            domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
            imgLen = domImages.length,
            link = doc.createElement("a"),
            supportCORS = (function (img) {
                return (img.crossOrigin !== undefined);
            })(new Image()),
            timeoutTimer;

        link.href = window.location.href;
        pageOrigin = link.protocol + link.host;

        function isSameOrigin(url) {
            link.href = url;
            link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
            var origin = link.protocol + link.host;
            return (origin === pageOrigin);
        }

        function start() {
            Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
            if (!images.firstRun && images.numLoaded >= images.numTotal) {
                Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

                if (typeof options.complete === "function") {
                    options.complete(images);
                }

            }
        }

        // TODO modify proxy to serve images with CORS enabled, where available
        function proxyGetImage(url, img, imageObj) {
            var callback_name,
                scriptUrl = options.proxy,
                script;

            link.href = url;
            url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

            callback_name = 'html2canvas_' + (count++);
            imageObj.callbackname = callback_name;

            if (scriptUrl.indexOf("?") > -1) {
                scriptUrl += "&";
            } else {
                scriptUrl += "?";
            }
            scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
            script = doc.createElement("script");

            window[callback_name] = function (a) {
                if (a.substring(0, 6) === "error:") {
                    imageObj.succeeded = false;
                    images.numLoaded++;
                    images.numFailed++;
                    start();
                } else {
                    setImageLoadHandlers(img, imageObj);
                    img.src = a;
                }
                window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                try {
                    delete window[callback_name];  // for all browser that support this
                } catch (ex) {
                }
                script.parentNode.removeChild(script);
                script = null;
                delete imageObj.script;
                delete imageObj.callbackname;
            };

            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", scriptUrl);
            imageObj.script = script;
            window.document.body.appendChild(script);

        }

        function loadPseudoElement(element, type) {
            var style = window.getComputedStyle(element, type),
                content = style.content;
            if (content.substr(0, 3) === 'url') {
                methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
            }
            loadBackgroundImages(style.backgroundImage, element);
        }

        function loadPseudoElementImages(element) {
            loadPseudoElement(element, ":before");
            loadPseudoElement(element, ":after");
        }

        function loadGradientImage(backgroundImage, bounds) {
            var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

            if (img !== undefined) {
                images[backgroundImage] = {
                    img:img,
                    succeeded:true
                };
                images.numTotal++;
                images.numLoaded++;
                start();
            }
        }

        function invalidBackgrounds(background_image) {
            return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
        }

        function loadBackgroundImages(background_image, el) {
            var bounds;

            _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function (background_image) {
                if (background_image.method === 'url') {
                    methods.loadImage(background_image.args[0]);
                } else if (background_image.method.match(/\-?gradient$/)) {
                    if (bounds === undefined) {
                        bounds = _html2canvas.Util.Bounds(el);
                    }
                    loadGradientImage(background_image.value, bounds);
                }
            });
        }

        function getImages(el) {
            var elNodeType = false;

            // Firefox fails with permission denied on pages with iframes
            try {
                Util.Children(el).forEach(getImages);
            }
            catch (e) {
            }

            try {
                elNodeType = el.nodeType;
            } catch (ex) {
                elNodeType = false;
                Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
            }

            if (elNodeType === 1 || elNodeType === undefined) {
                loadPseudoElementImages(el);
                try {
                    loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
                } catch (e) {
                    Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
                }
                loadBackgroundImages(el);
            }
        }

        function setImageLoadHandlers(img, imageObj) {
            img.onload = function () {
                if (imageObj.timer !== undefined) {
                    // CORS succeeded
                    window.clearTimeout(imageObj.timer);
                }

                images.numLoaded++;
                imageObj.succeeded = true;
                img.onerror = img.onload = null;
                start();
            };
            img.onerror = function () {
                if (img.crossOrigin === "anonymous") {
                    // CORS failed
                    window.clearTimeout(imageObj.timer);

                    // let's try with proxy instead
                    if (options.proxy) {
                        var src = img.src;
                        img = new Image();
                        imageObj.img = img;
                        img.src = src;

                        proxyGetImage(img.src, img, imageObj);
                        return;
                    }
                }

                images.numLoaded++;
                images.numFailed++;
                imageObj.succeeded = false;
                img.onerror = img.onload = null;
                start();
            };
        }

        methods = {
            loadImage:function (src) {
                var img, imageObj;
                if (src && images[src] === undefined) {
                    img = new Image();
                    if (src.match(/data:image\/.*;base64,/i)) {
                        img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
                        imageObj = images[src] = {
                            img:img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                    } else if (isSameOrigin(src) || options.allowTaint === true) {
                        imageObj = images[src] = {
                            img:img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                        img.src = src;
                    } else if (supportCORS && !options.allowTaint && options.useCORS) {
                        // attempt to load with CORS

                        img.crossOrigin = "anonymous";
                        imageObj = images[src] = {
                            img:img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                        img.src = src;
                    } else if (options.proxy) {
                        imageObj = images[src] = {
                            img:img
                        };
                        images.numTotal++;
                        proxyGetImage(src, img, imageObj);
                    }
                }

            },
            cleanupDOM:function (cause) {
                var img, src;
                if (!images.cleanupDone) {
                    if (cause && typeof cause === "string") {
                        Util.log("html2canvas: Cleanup because: " + cause);
                    } else {
                        Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
                    }

                    for (src in images) {
                        if (images.hasOwnProperty(src)) {
                            img = images[src];
                            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
                                // cancel proxy image request
                                window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                                try {
                                    delete window[img.callbackname];  // for all browser that support this
                                } catch (ex) {
                                }
                                if (img.script && img.script.parentNode) {
                                    img.script.setAttribute("src", "about:blank");  // try to cancel running request
                                    img.script.parentNode.removeChild(img.script);
                                }
                                images.numLoaded++;
                                images.numFailed++;
                                Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
                            }
                        }
                    }

                    // cancel any pending requests
                    if (window.stop !== undefined) {
                        window.stop();
                    } else if (document.execCommand !== undefined) {
                        document.execCommand("Stop", false);
                    }
                    if (document.close !== undefined) {
                        document.close();
                    }
                    images.cleanupDone = true;
                    if (!(cause && typeof cause === "string")) {
                        start();
                    }
                }
            },

            renderingDone:function () {
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }
            }
        };

        if (options.timeout > 0) {
            timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
        }

        Util.log('html2canvas: Preload starts: finding background-images');
        images.firstRun = true;

        getImages(element);

        Util.log('html2canvas: Preload: Finding images');
        // load <img> images
        for (i = 0; i < imgLen; i += 1) {
            methods.loadImage(domImages[i].getAttribute("src"));
        }

        images.firstRun = false;
        Util.log('html2canvas: Preload: Done.');
        if (images.numTotal === images.numLoaded) {
            start();
        }

        return methods;
    };

    _html2canvas.Renderer = function (parseQueue, options) {

        // http://www.w3.org/TR/CSS21/zindex.html
        function createRenderQueue(parseQueue) {
            var queue = [],
                rootContext;

            rootContext = (function buildStackingContext(rootNode) {
                var rootContext = {};

                function insert(context, node, specialParent) {
                    var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
                        contextForChildren = context, // the stacking context for children
                        isPositioned = node.zIndex.isPositioned,
                        isFloated = node.zIndex.isFloated,
                        stub = {node:node},
                        childrenDest = specialParent; // where children without z-index should be pushed into

                    if (node.zIndex.ownStacking) {
                        // '!' comes before numbers in sorted array
                        contextForChildren = stub.context = { '!':[
                            {node:node, children:[]}
                        ]};
                        childrenDest = undefined;
                    } else if (isPositioned || isFloated) {
                        childrenDest = stub.children = [];
                    }

                    if (zi === 0 && specialParent) {
                        specialParent.push(stub);
                    } else {
                        if (!context[zi]) {
                            context[zi] = [];
                        }
                        context[zi].push(stub);
                    }

                    node.zIndex.children.forEach(function (childNode) {
                        insert(contextForChildren, childNode, childrenDest);
                    });
                }

                insert(rootContext, rootNode);
                return rootContext;
            })(parseQueue);

            function sortZ(context) {
                Object.keys(context).sort().forEach(function (zi) {
                    var nonPositioned = [],
                        floated = [],
                        positioned = [],
                        list = [];

                    // positioned after static
                    context[zi].forEach(function (v) {
                        if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
                            // http://www.w3.org/TR/css3-color/#transparency
                            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
                            positioned.push(v);
                        } else if (v.node.zIndex.isFloated) {
                            floated.push(v);
                        } else {
                            nonPositioned.push(v);
                        }
                    });

                    (function walk(arr) {
                        arr.forEach(function (v) {
                            list.push(v);
                            if (v.children) {
                                walk(v.children);
                            }
                        });
                    })(nonPositioned.concat(floated, positioned));

                    list.forEach(function (v) {
                        if (v.context) {
                            sortZ(v.context);
                        } else {
                            queue.push(v.node);
                        }
                    });
                });
            }

            sortZ(rootContext);

            return queue;
        }

        function getRenderer(rendererName) {
            var renderer;

            if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
                renderer = _html2canvas.Renderer[rendererName](options);
            } else if (typeof rendererName === "function") {
                renderer = rendererName(options);
            } else {
                throw new Error("Unknown renderer");
            }

            if (typeof renderer !== "function") {
                throw new Error("Invalid renderer defined");
            }
            return renderer;
        }

        return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
    };

    _html2canvas.Util.Support = function (options, doc) {

        function supportSVGRendering() {
            var img = new Image(),
                canvas = doc.createElement("canvas"),
                ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
            if (ctx === false) {
                return false;
            }
            canvas.width = canvas.height = 10;
            img.src = [
                "data:image/svg+xml,",
                "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
                "<foreignObject width='10' height='10'>",
                "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
                "sup",
                "</div>",
                "</foreignObject>",
                "</svg>"
            ].join("");
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return false;
            }
            _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
            return true;
        }

        // Test whether we can use ranges to measure bounding boxes
        // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

        function supportRangeBounds() {
            var r, testElement, rangeBounds, rangeHeight, support = false;

            if (doc.createRange) {
                r = doc.createRange();
                if (r.getBoundingClientRect) {
                    testElement = doc.createElement('boundtest');
                    testElement.style.height = "123px";
                    testElement.style.display = "block";
                    doc.body.appendChild(testElement);

                    r.selectNode(testElement);
                    rangeBounds = r.getBoundingClientRect();
                    rangeHeight = rangeBounds.height;

                    if (rangeHeight === 123) {
                        support = true;
                    }
                    doc.body.removeChild(testElement);
                }
            }

            return support;
        }

        return {
            rangeBounds:supportRangeBounds(),
            svgRendering:options.svgRendering && supportSVGRendering()
        };
    };
    window.html2canvas = function (elements, opts) {
        elements = (elements.length) ? elements : [elements];
        var queue,
            canvas,
            options = {
                // general
                logging:false,
                elements:elements,
                background:"#fff",

                // preload options
                proxy:null,
                timeout:0, // no timeout
                useCORS:false, // try to load images as CORS (where available), before falling back to proxy
                allowTaint:false, // whether to allow images to taint the canvas, won't need proxy if set to true

                // parse options
                svgRendering:false, // use svg powered rendering where available (FF11+)
                ignoreElements:"IFRAME|OBJECT|PARAM",
                useOverflow:true,
                letterRendering:false,
                chinese:false,

                // render options

                width:null,
                height:null,
                taintTest:true, // do a taint test with all images before applying to canvas
                renderer:"Canvas"
            };

        options = _html2canvas.Util.Extend(opts, options);

        _html2canvas.logging = options.logging;
        options.complete = function (images) {

            if (typeof options.onpreloaded === "function") {
                if (options.onpreloaded(images) === false) {
                    return;
                }
            }
            queue = _html2canvas.Parse(images, options);

            if (typeof options.onparsed === "function") {
                if (options.onparsed(queue) === false) {
                    return;
                }
            }

            canvas = _html2canvas.Renderer(queue, options);

            if (typeof options.onrendered === "function") {
                options.onrendered(canvas);
            }


        };

        // for pages without images, we still want this to be async, i.e. return methods before executing
        window.setTimeout(function () {
            _html2canvas.Preload(options);
        }, 0);

        return {
            render:function (queue, opts) {
                return _html2canvas.Renderer(queue, _html2canvas.Util.Extend(opts, options));
            },
            parse:function (images, opts) {
                return _html2canvas.Parse(images, _html2canvas.Util.Extend(opts, options));
            },
            preload:function (opts) {
                return _html2canvas.Preload(_html2canvas.Util.Extend(opts, options));
            },
            log:_html2canvas.Util.log
        };
    };

    window.html2canvas.log = _html2canvas.Util.log; // for renderers
    window.html2canvas.Renderer = {
        Canvas:undefined // We are assuming this will be used
    };
    _html2canvas.Renderer.Canvas = function (options) {
        options = options || {};

        var doc = document,
            safeImages = [],
            testCanvas = document.createElement("canvas"),
            testctx = testCanvas.getContext("2d"),
            Util = _html2canvas.Util,
            canvas = options.canvas || doc.createElement('canvas');

        function createShape(ctx, args) {
            ctx.beginPath();
            args.forEach(function (arg) {
                ctx[arg.name].apply(ctx, arg['arguments']);
            });
            ctx.closePath();
        }

        function safeImage(item) {
            if (safeImages.indexOf(item['arguments'][0].src) === -1) {
                testctx.drawImage(item['arguments'][0], 0, 0);
                try {
                    testctx.getImageData(0, 0, 1, 1);
                } catch (e) {
                    testCanvas = doc.createElement("canvas");
                    testctx = testCanvas.getContext("2d");
                    return false;
                }
                safeImages.push(item['arguments'][0].src);
            }
            return true;
        }

        function renderItem(ctx, item) {
            switch (item.type) {
                case "variable":
                    ctx[item.name] = item['arguments'];
                    break;
                case "function":
                    switch (item.name) {
                        case "createPattern":
                            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
                                try {
                                    ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
                                }
                                catch (e) {
                                    Util.log("html2canvas: Renderer: Error creating pattern", e.message);
                                }
                            }
                            break;
                        case "drawShape":
                            createShape(ctx, item['arguments']);
                            break;
                        case "drawImage":
                            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
                                if (!options.taintTest || (options.taintTest && safeImage(item))) {
                                    ctx.drawImage.apply(ctx, item['arguments']);
                                }
                            }
                            break;
                        default:
                            ctx[item.name].apply(ctx, item['arguments']);
                    }
                    break;
            }
        }

        return function (parsedData, options, document, queue, _html2canvas) {
            var ctx = canvas.getContext("2d"),
                newCanvas,
                bounds,
                fstyle,
                zStack = parsedData.stack;

            canvas.width = canvas.style.width = options.width || zStack.ctx.width;
            canvas.height = canvas.style.height = options.height || zStack.ctx.height;

            fstyle = ctx.fillStyle;
            ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = fstyle;

            queue.forEach(function (storageContext) {
                // set common settings for canvas
                ctx.textBaseline = "bottom";
                ctx.save();

                if (storageContext.transform.matrix) {
                    ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
                    ctx.transform.apply(ctx, storageContext.transform.matrix);
                    ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
                }

                if (storageContext.clip) {
                    ctx.beginPath();
                    ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                    ctx.clip();
                }

                if (storageContext.ctx.storage) {
                    storageContext.ctx.storage.forEach(function (item) {
                        renderItem(ctx, item);
                    });
                }

                ctx.restore();
            });

            Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

            if (options.elements.length === 1) {
                if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
                    // crop image to the bounds of selected (single) element
                    bounds = _html2canvas.Util.Bounds(options.elements[0]);
                    newCanvas = document.createElement('canvas');
                    newCanvas.width = Math.ceil(bounds.width);
                    newCanvas.height = Math.ceil(bounds.height);
                    ctx = newCanvas.getContext("2d");

                    ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
                    canvas = null;
                    return newCanvas;
                }
            }

            return canvas;
        };
    };
})(window, document);

window.myBookmarklet = function () {
    html2canvas(document.body, {
        onrendered:function (canvas) {
            var pageContent = getSelText();
            if (!pageContent) {
            	console.log("pas de contenu");
            	return;
            }
            console.log(pageContent);
            var data = {
            	url : document.location.href,
            	content : $.base64.encode(pageContent.replace(/  /g,'')),
            	screenshot : canvas.toDataURL()
            };
            
            $.ajax({
                type:'POST',
                url:'http://localhost:8080/api/index',
                data:JSON.stringify(data),
                dataType : "json",
                contentType : "application/json; charset=utf-8"
            });
        },
        width:300,
        height:300
    });

};

