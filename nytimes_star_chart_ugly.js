d3 = function() {
    function n(n) {
        return null != n && !isNaN(n)
    }
    function t(n) {
        return n.length
    }
    function e(n) {
        for (var t = 1; n * t % 1; )
            t *= 10;
        return t
    }
    function r(n, t) {
        try {
            for (var e in t)
                Object.defineProperty(n.prototype, e, {value: t[e],enumerable: !1})
        } catch (r) {
            n.prototype = t
        }
    }
    function u() {
    }
    function i() {
    }
    function o(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }
    function a(n, t) {
        if (t in n)
            return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var e = 0, r = Co.length; r > e; ++e) {
            var u = Co[e] + t;
            if (u in n)
                return u
        }
    }
    function c() {
    }
    function l() {
    }
    function s(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i; )
                (t = r[u].on) && t.apply(this, arguments);
            return n
        }
        var e = [], r = new u;
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {on: u})), n)
        }, t
    }
    function f() {
        vo.event.preventDefault()
    }
    function h() {
        for (var n, t = vo.event; n = t.sourceEvent; )
            t = n;
        return t
    }
    function g(n) {
        for (var t = new l, e = 0, r = arguments.length; ++e < r; )
            t[arguments[e]] = s(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = vo.event;
                    u.target = n, vo.event = u, t[u.type].apply(e, r)
                }finally {
                    vo.event = i
                }
            }
        }, t
    }
    function p(n) {
        return jo(n, Oo), n
    }
    function d(n) {
        return "function" == typeof n ? n : function() {
            return Lo(n, this)
        }
    }
    function v(n) {
        return "function" == typeof n ? n : function() {
            return Ho(n, this)
        }
    }
    function m(n, t) {
        function e() {
            this.removeAttribute(n)
        }
        function r() {
            this.removeAttributeNS(n.space, n.local)
        }
        function u() {
            this.setAttribute(n, t)
        }
        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }
        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }
        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = vo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }
    function y(n) {
        return n.trim().replace(/\s+/g, " ")
    }
    function M(n) {
        return new RegExp("(?:^|\\s+)" + vo.requote(n) + "(?:\\s+|$)", "g")
    }
    function x(n, t) {
        function e() {
            for (var e = -1; ++e < u; )
                n[e](this, t)
        }
        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u; )
                n[e](this, r)
        }
        n = n.trim().split(/\s+/).map(b);
        var u = n.length;
        return "function" == typeof t ? r : e
    }
    function b(n) {
        var t = M(n);
        return function(e, r) {
            if (u = e.classList)
                return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", y(u + " " + n))) : e.setAttribute("class", y(u.replace(t, " ")))
        }
    }
    function _(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }
        function u() {
            this.style.setProperty(n, t, e)
        }
        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null == t ? r : "function" == typeof t ? i : u
    }
    function w(n, t) {
        function e() {
            delete this[n]
        }
        function r() {
            this[n] = t
        }
        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e
        }
        return null == t ? e : "function" == typeof t ? u : r
    }
    function S(n) {
        return "function" == typeof n ? n : (n = vo.ns.qualify(n)).local ? function() {
            return Mo.createElementNS(n.space, n.local)
        } : function() {
            return Mo.createElementNS(this.namespaceURI, n)
        }
    }
    function E(n) {
        return {__data__: n}
    }
    function k(n) {
        return function() {
            return Fo(this, n)
        }
    }
    function A(n) {
        return arguments.length || (n = vo.ascending), function(t, e) {
            return t && e ? n(t.__data__, e.__data__) : !t - !e
        }
    }
    function N(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)
                (u = i[o]) && t(u, o, e);
        return n
    }
    function q(n) {
        return jo(n, Yo), n
    }
    function T(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update, c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c; )
                ;
            return o
        }
    }
    function z(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o])
        }
        function u() {
            var u = l(t, yo(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
        }
        function i() {
            var t, e = new RegExp("^__on([^.]+)" + vo.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$), delete this[r]
                }
        }
        var o = "__on" + n, a = n.indexOf("."), l = C;
        a > 0 && (n = n.substring(0, a));
        var s = Uo.get(n);
        return s && (n = s, l = D), a ? t ? u : r : t ? c : i
    }
    function C(n, t) {
        return function(e) {
            var r = vo.event;
            vo.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t)
            }finally {
                vo.event = r
            }
        }
    }
    function D(n, t) {
        var e = C(n, t);
        return function(n) {
            var t = this, r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }
    function j() {
        var n = ".dragsuppress-" + ++Zo, t = "touchmove" + n, e = "selectstart" + n, r = "dragstart" + n, u = "click" + n, i = vo.select(bo).on(t, f).on(e, f).on(r, f), o = xo.style, a = o[Vo];
        return o[Vo] = "none", function(t) {
            function e() {
                i.on(u, null)
            }
            i.on(n, null), o[Vo] = a, t && (i.on(u, function() {
                f(), e()
            }, !0), setTimeout(e, 0))
        }
    }
    function L(n, t) {
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > Xo && (bo.scrollX || bo.scrollY)) {
                e = vo.select("body").append("svg").style({position: "absolute",top: 0,left: 0,margin: 0,padding: 0,border: "none"}, "important");
                var u = e[0][0].getScreenCTM();
                Xo = !(u.f || u.e), e.remove()
            }
            return Xo ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
        }
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
    }
    function H(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }
    function P(n) {
        return n > 1 ? 0 : -1 > n ? Bo : Math.acos(n)
    }
    function F(n) {
        return n > 1 ? Bo / 2 : -1 > n ? -Bo / 2 : Math.asin(n)
    }
    function O(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2
    }
    function R(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2
    }
    function Y(n) {
        return O(n) / R(n)
    }
    function I(n) {
        return (n = Math.sin(n / 2)) * n
    }
    function U() {
    }
    function V(n, t, e) {
        return new Z(n, t, e)
    }
    function Z(n, t, e) {
        this.h = n, this.s = t, this.l = e
    }
    function X(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }
        function u(n) {
            return Math.round(255 * r(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, it(u(n + 120), u(n), u(n - 120))
    }
    function B(n, t, e) {
        return new $(n, t, e)
    }
    function $(n, t, e) {
        this.h = n, this.c = t, this.l = e
    }
    function W(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), J(e, Math.cos(n *= Jo) * t, Math.sin(n) * t)
    }
    function J(n, t, e) {
        return new G(n, t, e)
    }
    function G(n, t, e) {
        this.l = n, this.a = t, this.b = e
    }
    function K(n, t, e) {
        var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200;
        return u = nt(u) * aa, r = nt(r) * ca, i = nt(i) * la, it(et(3.2404542 * u - 1.5371385 * r - .4985314 * i), et(-.969266 * u + 1.8760108 * r + .041556 * i), et(.0556434 * u - .2040259 * r + 1.0572252 * i))
    }
    function Q(n, t, e) {
        return n > 0 ? B(Math.atan2(e, t) * Go, Math.sqrt(t * t + e * e), n) : B(0 / 0, 0 / 0, n)
    }
    function nt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }
    function tt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }
    function et(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }
    function rt(n) {
        return it(n >> 16, 255 & n >> 8, 255 & n)
    }
    function ut(n) {
        return rt(n) + ""
    }
    function it(n, t, e) {
        return new ot(n, t, e)
    }
    function ot(n, t, e) {
        this.r = n, this.g = t, this.b = e
    }
    function at(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }
    function ct(n, t, e) {
        var r, u, i, o = 0, a = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n))
            switch (u = r[2].split(","), r[1]) {
                case "hsl":
                    return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                case "rgb":
                    return t(ht(u[0]), ht(u[1]), ht(u[2]))
            }
        return (i = ha.get(n)) ? t(i.r, i.g, i.b) : (null != n && "#" === n.charAt(0) && (4 === n.length ? (o = n.charAt(1), o += o, a = n.charAt(2), a += a, c = n.charAt(3), c += c) : 7 === n.length && (o = n.substring(1, 3), a = n.substring(3, 5), c = n.substring(5, 7)), o = parseInt(o, 16), a = parseInt(a, 16), c = parseInt(c, 16)), t(o, a, c))
    }
    function lt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), V(r, u, c)
    }
    function st(n, t, e) {
        n = ft(n), t = ft(t), e = ft(e);
        var r = tt((.4124564 * n + .3575761 * t + .1804375 * e) / aa), u = tt((.2126729 * n + .7151522 * t + .072175 * e) / ca), i = tt((.0193339 * n + .119192 * t + .9503041 * e) / la);
        return J(116 * u - 16, 500 * (r - u), 200 * (u - i))
    }
    function ft(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }
    function ht(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }
    function gt(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }
    function pt(n) {
        return n
    }
    function dt(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), vt(t, e, n, r)
        }
    }
    function vt(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c)
                } catch (r) {
                    return o.error.call(i, r), void 0
                }
                o.load.call(i, n)
            } else
                o.error.call(i, c)
        }
        var i = {}, o = vo.dispatch("beforesend", "progress", "load", "error"), a = {}, c = new XMLHttpRequest, l = null;
        return !bo.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }, c.onprogress = function(n) {
            var t = vo.event;
            vo.event = n;
            try {
                o.progress.call(i, c)
            }finally {
                vo.event = t
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t
        }, i.responseType = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.response = function(n) {
            return e = n, i
        }, ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(yo(arguments)))
            }
        }), i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
                for (var s in a)
                    c.setRequestHeader(s, a[s]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
                u(null, n)
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
        }, i.abort = function() {
            return c.abort(), i
        }, vo.rebind(i, o, "on"), null == r ? i : i.get(mt(r))
    }
    function mt(n) {
        return 1 === n.length ? function(t, e) {
            n(null == t ? e : null)
        } : n
    }
    function yt() {
        var n = xt(), t = bt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(va), va = setTimeout(yt, t)), da = 0) : (da = 1, ya(yt))
    }
    function Mt(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now()), ma.callback = n, ma.time = e + t
    }
    function xt() {
        var n = Date.now();
        for (ma = ga; ma; )
            n >= ma.time && (ma.flush = ma.callback(n - ma.time)), ma = ma.next;
        return n
    }
    function bt() {
        for (var n, t = ga, e = 1 / 0; t; )
            t.flush ? t = n ? n.next = t.next : ga = t.next : (t.time < e && (e = t.time), t = (n = t).next);
        return pa = n, e
    }
    function _t(n, t) {
        var e = Math.pow(10, 3 * Math.abs(8 - t));
        return {scale: t > 8 ? function(n) {
                return n / e
            } : function(n) {
                return n * e
            },symbol: n}
    }
    function wt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }
    function St(n) {
        return n + ""
    }
    function Et() {
    }
    function kt(n, t, e) {
        var r = e.s = n + t, u = r - n, i = r - u;
        e.t = n - i + (t - u)
    }
    function At(n, t) {
        n && Ta.hasOwnProperty(n.type) && Ta[n.type](n, t)
    }
    function Nt(n, t, e) {
        var r, u = -1, i = n.length - e;
        for (t.lineStart(); ++u < i; )
            r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }
    function qt(n, t) {
        var e = -1, r = n.length;
        for (t.polygonStart(); ++e < r; )
            Nt(n[e], t, 1);
        t.polygonEnd()
    }
    function Tt() {
        function n(n, t) {
            n *= Jo, t = t * Jo / 2 + Bo / 4;
            var e = n - r, o = Math.cos(t), a = Math.sin(t), c = i * a, l = u * o + c * Math.cos(e), s = c * Math.sin(e);
            Ca.add(Math.atan2(s, l)), r = n, u = o, i = a
        }
        var t, e, r, u, i;
        Da.point = function(o, a) {
            Da.point = n, r = (t = o) * Jo, u = Math.cos(a = (e = a) * Jo / 2 + Bo / 4), i = Math.sin(a)
        }, Da.lineEnd = function() {
            n(t, e)
        }
    }
    function zt(n) {
        var t = n[0], e = n[1], r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }
    function Ct(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }
    function Dt(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }
    function jt(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }
    function Lt(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }
    function Ht(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t
    }
    function Pt(n) {
        return [Math.atan2(n[1], n[0]), F(n[2])]
    }
    function Ft(n, t) {
        return Math.abs(n[0] - t[0]) < $o && Math.abs(n[1] - t[1]) < $o
    }
    function Ot(n, t) {
        n *= Jo;
        var e = Math.cos(t *= Jo);
        Rt(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }
    function Rt(n, t, e) {
        ++ja, Ha += (n - Ha) / ja, Pa += (t - Pa) / ja, Fa += (e - Fa) / ja
    }
    function Yt() {
        function n(n, u) {
            n *= Jo;
            var i = Math.cos(u *= Jo), o = i * Math.cos(n), a = i * Math.sin(n), c = Math.sin(u), l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
            La += l, Oa += l * (t + (t = o)), Ra += l * (e + (e = a)), Ya += l * (r + (r = c)), Rt(t, e, r)
        }
        var t, e, r;
        Za.point = function(u, i) {
            u *= Jo;
            var o = Math.cos(i *= Jo);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Za.point = n, Rt(t, e, r)
        }
    }
    function It() {
        Za.point = Ot
    }
    function Ut() {
        function n(n, t) {
            n *= Jo;
            var e = Math.cos(t *= Jo), o = e * Math.cos(n), a = e * Math.sin(n), c = Math.sin(t), l = u * c - i * a, s = i * o - r * c, f = r * a - u * o, h = Math.sqrt(l * l + s * s + f * f), g = r * o + u * a + i * c, p = h && -P(g) / h, d = Math.atan2(h, g);
            Ia += p * l, Ua += p * s, Va += p * f, La += d, Oa += d * (r + (r = o)), Ra += d * (u + (u = a)), Ya += d * (i + (i = c)), Rt(r, u, i)
        }
        var t, e, r, u, i;
        Za.point = function(o, a) {
            t = o, e = a, Za.point = n, o *= Jo;
            var c = Math.cos(a *= Jo);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), Rt(r, u, i)
        }, Za.lineEnd = function() {
            n(t, e), Za.lineEnd = It, Za.point = Ot
        }
    }
    function Vt() {
        return !0
    }
    function Zt(n, t, e, r, u) {
        var i = [], o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, e = n[0], r = n[t];
                if (Ft(e, r)) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a)
                        u.point((e = n[a])[0], e[1]);
                    return u.lineEnd(), void 0
                }
                var c = {point: e,points: n,other: null,visited: !1,entry: !0,subject: !0}, l = {point: e,points: [e],other: c,visited: !1,entry: !1,subject: !1};
                c.other = l, i.push(c), o.push(l), c = {point: r,points: [r],other: null,visited: !1,entry: !1,subject: !0}, l = {point: r,points: [r],other: c,visited: !1,entry: !0,subject: !1}, c.other = l, i.push(c), o.push(l)
            }
        }), o.sort(t), Xt(i), Xt(o), i.length) {
            if (e)
                for (var a = 1, c = !e(o[0].point), l = o.length; l > a; ++a)
                    o[a].entry = c = !c;
            for (var s, f, h, g = i[0]; ; ) {
                for (s = g; s.visited; )
                    if ((s = s.next) === g)
                        return;
                f = s.points, u.lineStart();
                do {
                    if (s.visited = s.other.visited = !0, s.entry) {
                        if (s.subject)
                            for (var a = 0; a < f.length; a++)
                                u.point((h = f[a])[0], h[1]);
                        else
                            r(s.point, s.next.point, 1, u);
                        s = s.next
                    } else {
                        if (s.subject) {
                            f = s.prev.points;
                            for (var a = f.length; --a >= 0; )
                                u.point((h = f[a])[0], h[1])
                        } else
                            r(s.point, s.prev.point, -1, u);
                        s = s.prev
                    }
                    s = s.other, f = s.points
                } while (!s.visited);
                u.lineEnd()
            }
        }
    }
    function Xt(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t; )
                u.next = e = n[r], e.prev = u, u = e;
            u.next = e = n[0], e.prev = u
        }
    }
    function Bt(n, t, e, r) {
        return function(u) {
            function i(t, e) {
                n(t, e) && u.point(t, e)
            }
            function o(n, t) {
                d.point(n, t)
            }
            function a() {
                v.point = o, d.lineStart()
            }
            function c() {
                v.point = i, d.lineEnd()
            }
            function l(n, t) {
                y.point(n, t), p.push([n, t])
            }
            function s() {
                y.lineStart(), p = []
            }
            function f() {
                l(p[0][0], p[0][1]), y.lineEnd();
                var n, t = y.clean(), e = m.buffer(), r = e.length;
                if (p.pop(), g.push(p), p = null, r) {
                    if (1 & t) {
                        n = e[0];
                        var i, r = n.length - 1, o = -1;
                        for (u.lineStart(); ++o < r; )
                            u.point((i = n[o])[0], i[1]);
                        return u.lineEnd(), void 0
                    }
                    r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), h.push(e.filter($t))
                }
            }
            var h, g, p, d = t(u), v = {point: i,lineStart: a,lineEnd: c,polygonStart: function() {
                    v.point = l, v.lineStart = s, v.lineEnd = f, h = [], g = [], u.polygonStart()
                },polygonEnd: function() {
                    v.point = i, v.lineStart = a, v.lineEnd = c, h = vo.merge(h), h.length ? Zt(h, Jt, null, e, u) : r(g) && (u.lineStart(), e(null, null, 1, u), u.lineEnd()), u.polygonEnd(), h = g = null
                },sphere: function() {
                    u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd()
                }}, m = Wt(), y = t(m);
            return v
        }
    }
    function $t(n) {
        return n.length > 1
    }
    function Wt() {
        var n, t = [];
        return {lineStart: function() {
                t.push(n = [])
            },point: function(t, e) {
                n.push([t, e])
            },lineEnd: c,buffer: function() {
                var e = t;
                return t = [], n = null, e
            },rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }}
    }
    function Jt(n, t) {
        return ((n = n.point)[0] < 0 ? n[1] - Bo / 2 - $o : Bo / 2 - n[1]) - ((t = t.point)[0] < 0 ? t[1] - Bo / 2 - $o : Bo / 2 - t[1])
    }
    function Gt(n, t) {
        var e = n[0], r = n[1], u = [Math.sin(e), -Math.cos(e), 0], i = 0, o = !1, a = !1, c = 0;
        Ca.reset();
        for (var l = 0, s = t.length; s > l; ++l) {
            var f = t[l], h = f.length;
            if (h) {
                for (var g = f[0], p = g[0], d = g[1] / 2 + Bo / 4, v = Math.sin(d), m = Math.cos(d), y = 1; ; ) {
                    y === h && (y = 0), n = f[y];
                    var M = n[0], x = n[1] / 2 + Bo / 4, b = Math.sin(x), _ = Math.cos(x), w = M - p, S = Math.abs(w) > Bo, E = v * b;
                    if (Ca.add(Math.atan2(E * Math.sin(w), m * _ + E * Math.cos(w))), Math.abs(x) < $o && (a = !0), i += S ? w + (w >= 0 ? 2 : -2) * Bo : w, S ^ p >= e ^ M >= e) {
                        var k = Dt(zt(g), zt(n));
                        Ht(k);
                        var A = Dt(u, k);
                        Ht(A);
                        var N = (S ^ w >= 0 ? -1 : 1) * F(A[2]);
                        r > N && (c += S ^ w >= 0 ? 1 : -1)
                    }
                    if (!y++)
                        break;
                    p = M, v = b, m = _, g = n
                }
                Math.abs(i) > $o && (o = !0)
            }
        }
        return (!a && !o && 0 > Ca || -$o > i) ^ 1 & c
    }
    function Kt(n) {
        var t, e = 0 / 0, r = 0 / 0, u = 0 / 0;
        return {lineStart: function() {
                n.lineStart(), t = 1
            },point: function(i, o) {
                var a = i > 0 ? Bo : -Bo, c = Math.abs(i - e);
                Math.abs(c - Bo) < $o ? (n.point(e, r = (r + o) / 2 > 0 ? Bo / 2 : -Bo / 2), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Bo && (Math.abs(e - u) < $o && (e -= u * $o), Math.abs(i - a) < $o && (i -= a * $o), r = Qt(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
            },lineEnd: function() {
                n.lineEnd(), e = r = 0 / 0
            },clean: function() {
                return 2 - t
            }}
    }
    function Qt(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return Math.abs(o) > $o ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
    }
    function ne(n, t, e, r) {
        var u;
        if (null == n)
            u = e * Bo / 2, r.point(-Bo, u), r.point(0, u), r.point(Bo, u), r.point(Bo, 0), r.point(Bo, -u), r.point(0, -u), r.point(-Bo, -u), r.point(-Bo, 0), r.point(-Bo, u);
        else if (Math.abs(n[0] - t[0]) > $o) {
            var i = (n[0] < t[0] ? 1 : -1) * Bo;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
        } else
            r.point(t[0], t[1])
    }
    function te(n) {
        return Gt(Ba, n)
    }
    function ee(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > o
        }
        function e(n) {
            var e, i, o, c, s;
            return {lineStart: function() {
                    c = o = !1, s = 1
                },point: function(f, h) {
                    var g, p = [f, h], d = t(f, h), v = a ? d ? 0 : u(f, h) : d ? u(f + (0 > f ? Bo : -Bo), h) : 0;
                    if (!e && (c = o = d) && n.lineStart(), d !== o && (g = r(e, p), (Ft(e, g) || Ft(p, g)) && (p[0] += $o, p[1] += $o, d = t(p[0], p[1]))), d !== o)
                        s = 0, d ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (l && e && a ^ d) {
                        var m;
                        v & i || !(m = r(p, e, !0)) || (s = 0, a ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
                    }
                    !d || e && Ft(e, p) || n.point(p[0], p[1]), e = p, o = d, i = v
                },lineEnd: function() {
                    o && n.lineEnd(), e = null
                },clean: function() {
                    return s | (c && o) << 1
                }}
        }
        function r(n, t, e) {
            var r = zt(n), u = zt(t), i = [1, 0, 0], a = Dt(r, u), c = Ct(a, a), l = a[0], s = c - l * l;
            if (!s)
                return !e && n;
            var f = o * c / s, h = -o * l / s, g = Dt(i, a), p = Lt(i, f), d = Lt(a, h);
            jt(p, d);
            var v = g, m = Ct(p, v), y = Ct(v, v), M = m * m - y * (Ct(p, p) - 1);
            if (!(0 > M)) {
                var x = Math.sqrt(M), b = Lt(v, (-m - x) / y);
                if (jt(b, p), b = Pt(b), !e)
                    return b;
                var _, w = n[0], S = t[0], E = n[1], k = t[1];
                w > S && (_ = w, w = S, S = _);
                var A = S - w, N = Math.abs(A - Bo) < $o, q = N || $o > A;
                if (!N && E > k && (_ = E, E = k, k = _), q ? N ? E + k > 0 ^ b[1] < (Math.abs(b[0] - w) < $o ? E : k) : E <= b[1] && b[1] <= k : A > Bo ^ (w <= b[0] && b[0] <= S)) {
                    var T = Lt(v, (-m + x) / y);
                    return jt(T, p), [b, Pt(T)]
                }
            }
        }
        function u(t, e) {
            var r = a ? n : Bo - n, u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
        }
        function i(n) {
            return Gt(c, n)
        }
        var o = Math.cos(n), a = o > 0, c = [n, 0], l = Math.abs(o) > $o, s = Ne(n, 6 * Jo);
        return Bt(t, e, s, i)
    }
    function re(n, t, e, r) {
        function u(r, u) {
            return Math.abs(r[0] - n) < $o ? u > 0 ? 0 : 3 : Math.abs(r[0] - e) < $o ? u > 0 ? 2 : 1 : Math.abs(r[1] - t) < $o ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }
        function i(n, t) {
            return o(n.point, t.point)
        }
        function o(n, t) {
            var e = u(n, 1), r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }
        function a(u, i) {
            var o = i[0] - u[0], a = i[1] - u[1], c = [0, 1];
            return Math.abs(o) < $o && Math.abs(a) < $o ? n <= u[0] && u[0] <= e && t <= u[1] && u[1] <= r : ue(n - u[0], o, c) && ue(u[0] - e, -o, c) && ue(t - u[1], a, c) && ue(u[1] - r, -a, c) ? (c[1] < 1 && (i[0] = u[0] + c[1] * o, i[1] = u[1] + c[1] * a), c[0] > 0 && (u[0] += c[0] * o, u[1] += c[0] * a), !0) : !1
        }
        return function(c) {
            function l(i) {
                var o = u(i, -1), a = s([0 === o || 3 === o ? n : e, o > 1 ? r : t]);
                return a
            }
            function s(n) {
                for (var t = 0, e = M.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = M[u], c = a.length, l = a[0]; c > o; ++o)
                        i = a[o], l[1] <= r ? i[1] > r && f(l, i, n) > 0 && ++t : i[1] <= r && f(l, i, n) < 0 && --t, l = i;
                return 0 !== t
            }
            function f(n, t, e) {
                return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1])
            }
            function h(i, a, c, l) {
                var s = 0, f = 0;
                if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do
                        l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
                    while ((s = (s + c + 4) % 4) !== f)
                } else
                    l.point(a[0], a[1])
            }
            function g(u, i) {
                return u >= n && e >= u && i >= t && r >= i
            }
            function p(n, t) {
                g(n, t) && c.point(n, t)
            }
            function d() {
                T.point = m, M && M.push(x = []), A = !0, k = !1, S = E = 0 / 0
            }
            function v() {
                y && (m(b, _), w && k && q.rejoin(), y.push(q.buffer())), T.point = p, k && c.lineEnd()
            }
            function m(n, t) {
                n = Math.max(-$a, Math.min($a, n)), t = Math.max(-$a, Math.min($a, t));
                var e = g(n, t);
                if (M && x.push([n, t]), A)
                    b = n, _ = t, w = e, A = !1, e && (c.lineStart(), c.point(n, t));
                else if (e && k)
                    c.point(n, t);
                else {
                    var r = [S, E], u = [n, t];
                    a(r, u) ? (k || (c.lineStart(), c.point(r[0], r[1])), c.point(u[0], u[1]), e || c.lineEnd()) : e && (c.lineStart(), c.point(n, t))
                }
                S = n, E = t, k = e
            }
            var y, M, x, b, _, w, S, E, k, A, N = c, q = Wt(), T = {point: p,lineStart: d,lineEnd: v,polygonStart: function() {
                    c = q, y = [], M = []
                },polygonEnd: function() {
                    c = N, (y = vo.merge(y)).length ? (c.polygonStart(), Zt(y, i, l, h, c), c.polygonEnd()) : s([n, t]) && (c.polygonStart(), c.lineStart(), h(null, null, 1, c), c.lineEnd(), c.polygonEnd()), y = M = x = null
                }};
            return T
        }
    }
    function ue(n, t, e) {
        if (Math.abs(t) < $o)
            return 0 >= n;
        var r = n / t;
        if (t > 0) {
            if (r > e[1])
                return !1;
            r > e[0] && (e[0] = r)
        } else {
            if (r < e[0])
                return !1;
            r < e[1] && (e[1] = r)
        }
        return !0
    }
    function ie(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1])
        }), e
    }
    function oe(n) {
        var t = 0, e = Bo / 3, r = be(n), u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * Bo / 180, e = n[1] * Bo / 180) : [180 * (t / Bo), 180 * (e / Bo)]
        }, u
    }
    function ae(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [e * Math.sin(n *= u), o - e * Math.cos(n)]
        }
        var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [Math.atan2(n, e) / u, F((i - (n * n + e * e) * u * u) / (2 * u))]
        }, e
    }
    function ce() {
        function n(n, t) {
            Ja += u * n - r * t, r = n, u = t
        }
        var t, e, r, u;
        tc.point = function(i, o) {
            tc.point = n, t = r = i, e = u = o
        }, tc.lineEnd = function() {
            n(t, e)
        }
    }
    function le(n, t) {
        Ga > n && (Ga = n), n > Qa && (Qa = n), Ka > t && (Ka = t), t > nc && (nc = t)
    }
    function se() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }
        function t(n, t) {
            o.push("M", n, ",", t), a.point = e
        }
        function e(n, t) {
            o.push("L", n, ",", t)
        }
        function r() {
            a.point = n
        }
        function u() {
            o.push("Z")
        }
        var i = fe(4.5), o = [], a = {point: n,lineStart: function() {
                a.point = t
            },lineEnd: r,polygonStart: function() {
                a.lineEnd = u
            },polygonEnd: function() {
                a.lineEnd = r, a.point = n
            },pointRadius: function(n) {
                return i = fe(n), a
            },result: function() {
                if (o.length) {
                    var n = o.join("");
                    return o = [], n
                }
            }};
        return a
    }
    function fe(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }
    function he(n, t) {
        Ha += n, Pa += t, ++Fa
    }
    function ge() {
        function n(n, r) {
            var u = n - t, i = r - e, o = Math.sqrt(u * u + i * i);
            Oa += o * (t + n) / 2, Ra += o * (e + r) / 2, Ya += o, he(t = n, e = r)
        }
        var t, e;
        rc.point = function(r, u) {
            rc.point = n, he(t = r, e = u)
        }
    }
    function pe() {
        rc.point = he
    }
    function de() {
        function n(n, t) {
            var e = n - r, i = t - u, o = Math.sqrt(e * e + i * i);
            Oa += o * (r + n) / 2, Ra += o * (u + t) / 2, Ya += o, o = u * n - r * t, Ia += o * (r + n), Ua += o * (u + t), Va += 3 * o, he(r = n, u = t)
        }
        var t, e, r, u;
        rc.point = function(i, o) {
            rc.point = n, he(t = r = i, e = u = o)
        }, rc.lineEnd = function() {
            n(t, e)
        }
    }
    function ve(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, o, 0, 2 * Bo)
        }
        function e(t, e) {
            n.moveTo(t, e), a.point = r
        }
        function r(t, e) {
            n.lineTo(t, e)
        }
        function u() {
            a.point = t
        }
        function i() {
            n.closePath()
        }
        var o = 4.5, a = {point: t,lineStart: function() {
                a.point = e
            },lineEnd: u,polygonStart: function() {
                a.lineEnd = i
            },polygonEnd: function() {
                a.lineEnd = u, a.point = t
            },pointRadius: function(n) {
                return o = n, a
            },result: c};
        return a
    }
    function me(n) {
        function t(t) {
            function r(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            }
            function u() {
                M = 0 / 0, S.point = o, t.lineStart()
            }
            function o(r, u) {
                var o = zt([r, u]), a = n(r, u);
                e(M, x, y, b, _, w, M = a[0], x = a[1], y = r, b = o[0], _ = o[1], w = o[2], i, t), t.point(M, x)
            }
            function a() {
                S.point = r, t.lineEnd()
            }
            function c() {
                u(), S.point = l, S.lineEnd = s
            }
            function l(n, t) {
                o(f = n, h = t), g = M, p = x, d = b, v = _, m = w, S.point = o
            }
            function s() {
                e(M, x, y, b, _, w, g, p, f, d, v, m, i, t), S.lineEnd = a, a()
            }
            var f, h, g, p, d, v, m, y, M, x, b, _, w, S = {point: r,lineStart: u,lineEnd: a,polygonStart: function() {
                    t.polygonStart(), S.lineStart = c
                },polygonEnd: function() {
                    t.polygonEnd(), S.lineStart = u
                }};
            return S
        }
        function e(t, i, o, a, c, l, s, f, h, g, p, d, v, m) {
            var y = s - t, M = f - i, x = y * y + M * M;
            if (x > 4 * r && v--) {
                var b = a + g, _ = c + p, w = l + d, S = Math.sqrt(b * b + _ * _ + w * w), E = Math.asin(w /= S), k = Math.abs(Math.abs(w) - 1) < $o ? (o + h) / 2 : Math.atan2(_, b), A = n(k, E), N = A[0], q = A[1], T = N - t, z = q - i, C = M * T - y * z;
                (C * C / x > r || Math.abs((y * T + M * z) / x - .5) > .3 || u > a * g + c * p + l * d) && (e(t, i, o, a, c, l, N, q, k, b /= S, _ /= S, w, v, m), m.point(N, q), e(N, q, k, b, _, w, s, f, h, g, p, d, v, m))
            }
        }
        var r = .5, u = Math.cos(30 * Jo), i = 16;
        return t.precision = function(n) {
            return arguments.length ? (i = (r = n * n) > 0 && 16, t) : Math.sqrt(r)
        }, t
    }
    function ye(n) {
        this.stream = n
    }
    function Me(n) {
        var t = me(function(t, e) {
            return n([t * Go, e * Go])
        });
        return function(n) {
            var e = new ye(n = t(n));
            return e.point = function(t, e) {
                n.point(t * Jo, e * Jo)
            }, e
        }
    }
    function xe(n) {
        return be(function() {
            return n
        })()
    }
    function be(n) {
        function t(n) {
            return n = a(n[0] * Jo, n[1] * Jo), [n[0] * h + c, l - n[1] * h]
        }
        function e(n) {
            return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Go, n[1] * Go]
        }
        function r() {
            a = ie(o = Se(m, y, M), i);
            var n = i(d, v);
            return c = g - n[0] * h, l = p + n[1] * h, u()
        }
        function u() {
            return s && (s.valid = !1, s = null), t
        }
        var i, o, a, c, l, s, f = me(function(n, t) {
            return n = i(n, t), [n[0] * h + c, l - n[1] * h]
        }), h = 150, g = 480, p = 250, d = 0, v = 0, m = 0, y = 0, M = 0, x = Xa, b = pt, _ = null, w = null;
        return t.stream = function(n) {
            return s && (s.valid = !1), s = _e(o, x(f(b(n)))), s.valid = !0, s
        }, t.clipAngle = function(n) {
            return arguments.length ? (x = null == n ? (_ = n, Xa) : ee((_ = +n) * Jo), u()) : _
        }, t.clipExtent = function(n) {
            return arguments.length ? (w = n, b = n ? re(n[0][0], n[0][1], n[1][0], n[1][1]) : pt, u()) : w
        }, t.scale = function(n) {
            return arguments.length ? (h = +n, r()) : h
        }, t.translate = function(n) {
            return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
        }, t.center = function(n) {
            return arguments.length ? (d = n[0] % 360 * Jo, v = n[1] % 360 * Jo, r()) : [d * Go, v * Go]
        }, t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * Jo, y = n[1] % 360 * Jo, M = n.length > 2 ? n[2] % 360 * Jo : 0, r()) : [m * Go, y * Go, M * Go]
        }, vo.rebind(t, f, "precision"), function() {
            return i = n.apply(this, arguments), t.invert = i.invert && e, r()
        }
    }
    function _e(n, t) {
        var e = new ye(t);
        return e.point = function(e, r) {
            r = n(e * Jo, r * Jo), e = r[0], t.point(e > Bo ? e - 2 * Bo : -Bo > e ? e + 2 * Bo : e, r[1])
        }, e
    }
    function we(n, t) {
        return [n, t]
    }
    function Se(n, t, e) {
        return n ? t || e ? ie(ke(n), Ae(t, e)) : ke(n) : t || e ? Ae(t, e) : we
    }
    function Ee(n) {
        return function(t, e) {
            return t += n, [t > Bo ? t - 2 * Bo : -Bo > t ? t + 2 * Bo : t, e]
        }
    }
    function ke(n) {
        var t = Ee(n);
        return t.invert = Ee(-n), t
    }
    function Ae(n, t) {
        function e(n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * r + a * u;
            return [Math.atan2(c * i - s * o, a * r - l * u), F(s * i + c * o)]
        }
        var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * i - c * o;
            return [Math.atan2(c * i + l * o, a * r + s * u), F(s * r - a * u)]
        }, e
    }
    function Ne(n, t) {
        var e = Math.cos(n), r = Math.sin(n);
        return function(u, i, o, a) {
            null != u ? (u = qe(e, u), i = qe(e, i), (o > 0 ? i > u : u > i) && (u += 2 * o * Bo)) : (u = n + 2 * o * Bo, i = n);
            for (var c, l = o * t, s = u; o > 0 ? s > i : i > s; s -= l)
                a.point((c = Pt([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }
    function qe(n, t) {
        var e = zt(t);
        e[0] -= n, Ht(e);
        var r = P(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - $o) % (2 * Math.PI)
    }
    function Te(n, t, e) {
        var r = vo.range(n, t - $o, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [n, t]
            })
        }
    }
    function ze(n, t, e) {
        var r = vo.range(n, t - $o, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [t, n]
            })
        }
    }
    function Ce(n) {
        return n.source
    }
    function De(n) {
        return n.target
    }
    function je(n, t, e, r) {
        var u = Math.cos(t), i = Math.sin(t), o = Math.cos(r), a = Math.sin(r), c = u * Math.cos(n), l = u * Math.sin(n), s = o * Math.cos(e), f = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(I(r - t) + u * o * I(e - n))), g = 1 / Math.sin(h), p = h ? function(n) {
            var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * c + t * s, u = e * l + t * f, o = e * i + t * a;
            return [Math.atan2(u, r) * Go, Math.atan2(o, Math.sqrt(r * r + u * u)) * Go]
        } : function() {
            return [n * Go, t * Go]
        };
        return p.distance = h, p
    }
    function Le() {
        function n(n, u) {
            var i = Math.sin(u *= Jo), o = Math.cos(u), a = Math.abs((n *= Jo) - t), c = Math.cos(a);
            uc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
        }
        var t, e, r;
        ic.point = function(u, i) {
            t = u * Jo, e = Math.sin(i *= Jo), r = Math.cos(i), ic.point = n
        }, ic.lineEnd = function() {
            ic.point = ic.lineEnd = c
        }
    }
    function He(n, t) {
        function e(t, e) {
            var r = Math.cos(t), u = Math.cos(e), i = n(r * u);
            return [i * u * Math.sin(t), i * Math.sin(e)]
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), o = Math.cos(u);
            return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
        }, e
    }
    function Pe(n, t) {
        function e(n, t) {
            var e = Math.abs(Math.abs(t) - Bo / 2) < $o ? 0 : o / Math.pow(u(t), i);
            return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
        }
        var r = Math.cos(n), u = function(n) {
            return Math.tan(Bo / 4 + n / 2)
        }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t, r = H(i) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Bo / 2]
        }, e) : Oe
    }
    function Fe(n, t) {
        function e(n, t) {
            var e = i - t;
            return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
        }
        var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n;
        return Math.abs(u) < $o ? we : (e.invert = function(n, t) {
            var e = i - t;
            return [Math.atan2(n, e) / u, i - H(u) * Math.sqrt(n * n + e * e)]
        }, e)
    }
    function Oe(n, t) {
        return [n, Math.log(Math.tan(Bo / 4 + t / 2))]
    }
    function Re(n) {
        var t, e = xe(n), r = e.scale, u = e.translate, i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = Bo * r(), c = u();
                    i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]])
                }
            } else
                t && (o = null);
            return o
        }, e.clipExtent(null)
    }
    function Ye(n, t) {
        var e = Math.cos(t) * Math.sin(n);
        return [Math.log((1 + e) / (1 - e)) / 2, Math.atan2(Math.tan(t), Math.cos(n))]
    }
    function Ie(n) {
        function t(t) {
            function o() {
                l.push("M", i(n(s), a))
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = gt(e), p = gt(r); ++f < h; )
                u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
            return s.length && o(), l.length ? l.join("") : null
        }
        var e = Ue, r = Ve, u = Vt, i = Ze, o = i.key, a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = fc.get(n) || Ze).key, t) : o
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t
    }
    function Ue(n) {
        return n[0]
    }
    function Ve(n) {
        return n[1]
    }
    function Ze(n) {
        return n.join("L")
    }
    function Xe(n) {
        return Ze(n) + "Z"
    }
    function Be(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]), u.join("")
    }
    function $e(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("")
    }
    function We(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("")
    }
    function Je(n, t) {
        return n.length < 4 ? Ze(n) : n[1] + Qe(n.slice(1, n.length - 1), nr(n, t))
    }
    function Ge(n, t) {
        return n.length < 3 ? Ze(n) : n[0] + Qe((n.push(n[0]), n), nr([n[n.length - 2]].concat(n, [n[1]]), t))
    }
    function Ke(n, t) {
        return n.length < 3 ? Ze(n) : n[0] + Qe(n, nr(n, t))
    }
    function Qe(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
            return Ze(n);
        var e = n.length != t.length, r = "", u = n[0], i = n[1], o = t[0], a = o, c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var l = 2; l < t.length; l++, c++)
                i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (e) {
            var s = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }
    function nr(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c; )
            e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
        return r
    }
    function tr(n) {
        if (n.length < 3)
            return Ze(n);
        var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], o = [u, u, u, (r = n[1])[0]], a = [i, i, i, r[1]], c = [u, ",", i, "L", ir(pc, o), ",", ir(pc, a)];
        for (n.push(n[e - 1]); ++t <= e; )
            r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), or(c, o, a);
        return n.pop(), c.push("L", r), c.join("")
    }
    function er(n) {
        if (n.length < 4)
            return Ze(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3; )
            t = n[r], i.push(t[0]), o.push(t[1]);
        for (e.push(ir(pc, i) + "," + ir(pc, o)), --r; ++r < u; )
            t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), or(e, i, o);
        return e.join("")
    }
    function rr(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4; )
            e = n[r % u], o.push(e[0]), a.push(e[1]);
        for (t = [ir(pc, o), ",", ir(pc, a)], --r; ++r < i; )
            e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), or(t, o, a);
        return t.join("")
    }
    function ur(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e; )
                r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return tr(n)
    }
    function ir(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }
    function or(n, t, e) {
        n.push("C", ir(hc, t), ",", ir(hc, e), ",", ir(gc, t), ",", ir(gc, e), ",", ir(pc, t), ",", ir(pc, e))
    }
    function ar(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }
    function cr(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = ar(u, i); ++t < e; )
            r[t] = (o + (o = ar(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r
    }
    function lr(n) {
        for (var t, e, r, u, i = [], o = cr(n), a = -1, c = n.length - 1; ++a < c; )
            t = ar(n[a], n[a + 1]), Math.abs(t) < 1e-6 ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c; )
            u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
        return i
    }
    function sr(n) {
        return n.length < 3 ? Ze(n) : n[0] + Qe(n, lr(n))
    }
    function fr(n, t, e, r) {
        var u, i, o, a, c, l, s;
        return u = r[n], i = u[0], o = u[1], u = r[t], a = u[0], c = u[1], u = r[e], l = u[0], s = u[1], (s - o) * (a - i) - (c - o) * (l - i) > 0
    }
    function hr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }
    function gr(n, t, e, r) {
        var u = n[0], i = e[0], o = t[0] - u, a = r[0] - i, c = n[1], l = e[1], s = t[1] - c, f = r[1] - l, h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
        return [u + h * o, c + h * s]
    }
    function pr(n) {
        var t = n[0], e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }
    function dr(n, t) {
        var e = {list: n.map(function(n, t) {
                return {index: t,x: n[0],y: n[1]}
            }).sort(function(n, t) {
                return n.y < t.y ? -1 : n.y > t.y ? 1 : n.x < t.x ? -1 : n.x > t.x ? 1 : 0
            }),bottomSite: null}, r = {list: [],leftEnd: null,rightEnd: null,init: function() {
                r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
            },createHalfEdge: function(n, t) {
                return {edge: n,side: t,vertex: null,l: null,r: null}
            },insert: function(n, t) {
                t.l = n, t.r = n.r, n.r.l = t, n.r = t
            },leftBound: function(n) {
                var t = r.leftEnd;
                do
                    t = t.r;
                while (t != r.rightEnd && u.rightOf(t, n));
                return t = t.l
            },del: function(n) {
                n.l.r = n.r, n.r.l = n.l, n.edge = null
            },right: function(n) {
                return n.r
            },left: function(n) {
                return n.l
            },leftRegion: function(n) {
                return null == n.edge ? e.bottomSite : n.edge.region[n.side]
            },rightRegion: function(n) {
                return null == n.edge ? e.bottomSite : n.edge.region[vc[n.side]]
            }}, u = {bisect: function(n, t) {
                var e = {region: {l: n,r: t},ep: {l: null,r: null}}, r = t.x - n.x, u = t.y - n.y, i = r > 0 ? r : -r, o = u > 0 ? u : -u;
                return e.c = n.x * r + n.y * u + .5 * (r * r + u * u), i > o ? (e.a = 1, e.b = u / r, e.c /= r) : (e.b = 1, e.a = r / u, e.c /= u), e
            },intersect: function(n, t) {
                var e = n.edge, r = t.edge;
                if (!e || !r || e.region.r == r.region.r)
                    return null;
                var u = e.a * r.b - e.b * r.a;
                if (Math.abs(u) < 1e-10)
                    return null;
                var i, o, a = (e.c * r.b - r.c * e.b) / u, c = (r.c * e.a - e.c * r.a) / u, l = e.region.r, s = r.region.r;
                l.y < s.y || l.y == s.y && l.x < s.x ? (i = n, o = e) : (i = t, o = r);
                var f = a >= o.region.r.x;
                return f && "l" === i.side || !f && "r" === i.side ? null : {x: a,y: c}
            },rightOf: function(n, t) {
                var e = n.edge, r = e.region.r, u = t.x > r.x;
                if (u && "l" === n.side)
                    return 1;
                if (!u && "r" === n.side)
                    return 0;
                if (1 === e.a) {
                    var i = t.y - r.y, o = t.x - r.x, a = 0, c = 0;
                    if (!u && e.b < 0 || u && e.b >= 0 ? c = a = i >= e.b * o : (c = t.x + t.y * e.b > e.c, e.b < 0 && (c = !c), c || (a = 1)), !a) {
                        var l = r.x - e.region.l.x;
                        c = e.b * (o * o - i * i) < l * i * (1 + 2 * o / l + e.b * e.b), e.b < 0 && (c = !c)
                    }
                } else {
                    var s = e.c - e.a * t.x, f = t.y - s, h = t.x - r.x, g = s - r.y;
                    c = f * f > h * h + g * g
                }
                return "l" === n.side ? c : !c
            },endPoint: function(n, e, r) {
                n.ep[e] = r, n.ep[vc[e]] && t(n)
            },distance: function(n, t) {
                var e = n.x - t.x, r = n.y - t.y;
                return Math.sqrt(e * e + r * r)
            }}, i = {list: [],insert: function(n, t, e) {
                n.vertex = t, n.ystar = t.y + e;
                for (var r = 0, u = i.list, o = u.length; o > r; r++) {
                    var a = u[r];
                    if (!(n.ystar > a.ystar || n.ystar == a.ystar && t.x > a.vertex.x))
                        break
                }
                u.splice(r, 0, n)
            },del: function(n) {
                for (var t = 0, e = i.list, r = e.length; r > t && e[t] != n; ++t)
                    ;
                e.splice(t, 1)
            },empty: function() {
                return 0 === i.list.length
            },nextEvent: function(n) {
                for (var t = 0, e = i.list, r = e.length; r > t; ++t)
                    if (e[t] == n)
                        return e[t + 1];
                return null
            },min: function() {
                var n = i.list[0];
                return {x: n.vertex.x,y: n.ystar}
            },extractMin: function() {
                return i.list.shift()
            }};
        r.init(), e.bottomSite = e.list.shift();
        for (var o, a, c, l, s, f, h, g, p, d, v, m, y, M = e.list.shift(); ; )
            if (i.empty() || (o = i.min()), M && (i.empty() || M.y < o.y || M.y == o.y && M.x < o.x))
                a = r.leftBound(M), c = r.right(a), h = r.rightRegion(a), m = u.bisect(h, M), f = r.createHalfEdge(m, "l"), r.insert(a, f), d = u.intersect(a, f), d && (i.del(a), i.insert(a, d, u.distance(d, M))), a = f, f = r.createHalfEdge(m, "r"), r.insert(a, f), d = u.intersect(f, c), d && i.insert(f, d, u.distance(d, M)), M = e.list.shift();
            else {
                if (i.empty())
                    break;
                a = i.extractMin(), l = r.left(a), c = r.right(a), s = r.right(c), h = r.leftRegion(a), g = r.rightRegion(c), v = a.vertex, u.endPoint(a.edge, a.side, v), u.endPoint(c.edge, c.side, v), r.del(a), i.del(c), r.del(c), y = "l", h.y > g.y && (p = h, h = g, g = p, y = "r"), m = u.bisect(h, g), f = r.createHalfEdge(m, y), r.insert(l, f), u.endPoint(m, vc[y], v), d = u.intersect(l, f), d && (i.del(l), i.insert(l, d, u.distance(d, h))), d = u.intersect(f, s), d && i.insert(f, d, u.distance(d, h))
            }
        for (a = r.right(r.leftEnd); a != r.rightEnd; a = r.right(a))
            t(a.edge)
    }
    function vr(n) {
        return n.x
    }
    function mr(n) {
        return n.y
    }
    function yr() {
        return {leaf: !0,nodes: [],point: null,x: null,y: null}
    }
    function Mr(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u), a = .5 * (r + i), c = t.nodes;
            c[0] && Mr(n, c[0], e, r, o, a), c[1] && Mr(n, c[1], o, r, u, a), c[2] && Mr(n, c[2], e, a, o, i), c[3] && Mr(n, c[3], o, a, u, i)
        }
    }
    function xr(n, t) {
        n = vo.rgb(n), t = vo.rgb(t);
        var e = n.r, r = n.g, u = n.b, i = t.r - e, o = t.g - r, a = t.b - u;
        return function(n) {
            return "#" + at(Math.round(e + i * n)) + at(Math.round(r + o * n)) + at(Math.round(u + a * n))
        }
    }
    function br(n, t) {
        var e, r = {}, u = {};
        for (e in n)
            e in t ? r[e] = Sr(n[e], t[e]) : u[e] = n[e];
        for (e in t)
            e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r)
                u[e] = r[e](n);
            return u
        }
    }
    function _r(n, t) {
        return t -= n = +n, function(e) {
            return n + t * e
        }
    }
    function wr(n, t) {
        var e, r, u, i, o, a = 0, c = 0, l = [], s = [];
        for (n += "", t += "", mc.lastIndex = 0, r = 0; e = mc.exec(t); ++r)
            e.index && l.push(t.substring(a, c = e.index)), s.push({i: l.length,x: e[0]}), l.push(null), a = mc.lastIndex;
        for (a < t.length && l.push(t.substring(a)), r = 0, i = s.length; (e = mc.exec(n)) && i > r; ++r)
            if (o = s[r], o.x == e[0]) {
                if (o.i)
                    if (null == l[o.i + 1])
                        for (l[o.i - 1] += o.x, l.splice(o.i, 1), u = r + 1; i > u; ++u)
                            s[u].i--;
                    else
                        for (l[o.i - 1] += o.x + l[o.i + 1], l.splice(o.i, 2), u = r + 1; i > u; ++u)
                            s[u].i -= 2;
                else if (null == l[o.i + 1])
                    l[o.i] = o.x;
                else
                    for (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1), u = r + 1; i > u; ++u)
                        s[u].i--;
                s.splice(r, 1), i--, r--
            } else
                o.x = _r(parseFloat(e[0]), parseFloat(o.x));
        for (; i > r; )
            o = s.pop(), null == l[o.i + 1] ? l[o.i] = o.x : (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1)), i--;
        return 1 === l.length ? null == l[0] ? (o = s[0].x, function(n) {
            return o(n) + ""
        }) : function() {
            return t
        } : function(n) {
            for (r = 0; i > r; ++r)
                l[(o = s[r]).i] = o.x(n);
            return l.join("")
        }
    }
    function Sr(n, t) {
        for (var e, r = vo.interpolators.length; --r >= 0 && !(e = vo.interpolators[r](n, t)); )
            ;
        return e
    }
    function Er(n, t) {
        var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e)
            r.push(Sr(n[e], t[e]));
        for (; i > e; ++e)
            u[e] = n[e];
        for (; o > e; ++e)
            u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e)
                u[e] = r[e](n);
            return u
        }
    }
    function kr(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }
    function Ar(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }
    function Nr(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }
    function qr(n) {
        return n * n
    }
    function Tr(n) {
        return n * n * n
    }
    function zr(n) {
        if (0 >= n)
            return 0;
        if (n >= 1)
            return 1;
        var t = n * n, e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }
    function Cr(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }
    function Dr(n) {
        return 1 - Math.cos(n * Bo / 2)
    }
    function jr(n) {
        return Math.pow(2, 10 * (n - 1))
    }
    function Lr(n) {
        return 1 - Math.sqrt(1 - n * n)
    }
    function Hr(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / (2 * Bo) * Math.asin(1 / n) : (n = 1, e = t / 4), function(r) {
            return 1 + n * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Bo / t)
        }
    }
    function Pr(n) {
        return n || (n = 1.70158), function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }
    function Fr(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }
    function Or(n, t) {
        n = vo.hcl(n), t = vo.hcl(t);
        var e = n.h, r = n.c, u = n.l, i = t.h - e, o = t.c - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
            return W(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function Rr(n, t) {
        n = vo.hsl(n), t = vo.hsl(t);
        var e = n.h, r = n.s, u = n.l, i = t.h - e, o = t.s - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
            return X(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function Yr(n, t) {
        n = vo.lab(n), t = vo.lab(t);
        var e = n.l, r = n.a, u = n.b, i = t.l - e, o = t.a - r, a = t.b - u;
        return function(n) {
            return K(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function Ir(n, t) {
        return t -= n, function(e) {
            return Math.round(n + t * e)
        }
    }
    function Ur(n) {
        var t = [n.a, n.b], e = [n.c, n.d], r = Zr(t), u = Vr(t, e), i = Zr(Xr(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Go, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Go : 0
    }
    function Vr(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }
    function Zr(n) {
        var t = Math.sqrt(Vr(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }
    function Xr(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n
    }
    function Br(n, t) {
        var e, r = [], u = [], i = vo.transform(n), o = vo.transform(t), a = i.translate, c = o.translate, l = i.rotate, s = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({i: 1,x: _r(a[0], c[0])}, {i: 3,x: _r(a[1], c[1])})) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({i: r.push(r.pop() + "rotate(", null, ")") - 2,x: _r(l, s)})) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({i: r.push(r.pop() + "skewX(", null, ")") - 2,x: _r(f, h)}) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({i: e - 4,x: _r(g[0], p[0])}, {i: e - 2,x: _r(g[1], p[1])})) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function(n) {
            for (var t, i = -1; ++i < e; )
                r[(t = u[i]).i] = t.x(n);
            return r.join("")
        }
    }
    function $r(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function(e) {
            return (e - n) * t
        }
    }
    function Wr(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function(e) {
            return Math.max(0, Math.min(1, (e - n) * t))
        }
    }
    function Jr(n) {
        for (var t = n.source, e = n.target, r = Kr(t, e), u = [t]; t !== r; )
            t = t.parent, u.push(t);
        for (var i = u.length; e !== r; )
            u.splice(i, 0, e), e = e.parent;
        return u
    }
    function Gr(n) {
        for (var t = [], e = n.parent; null != e; )
            t.push(n), n = e, e = e.parent;
        return t.push(n), t
    }
    function Kr(n, t) {
        if (n === t)
            return n;
        for (var e = Gr(n), r = Gr(t), u = e.pop(), i = r.pop(), o = null; u === i; )
            o = u, u = e.pop(), i = r.pop();
        return o
    }
    function Qr(n) {
        n.fixed |= 2
    }
    function nu(n) {
        n.fixed &= -7
    }
    function tu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }
    function eu(n) {
        n.fixed &= -5
    }
    function ru(n, t, e) {
        var r = 0, u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a; )
                i = o[c], null != i && (ru(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var l = t * e[n.point.index];
            n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y
        }
        n.cx = r / n.charge, n.cy = u / n.charge
    }
    function uu(n, t) {
        return vo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = cu, n
    }
    function iu(n) {
        return n.children
    }
    function ou(n) {
        return n.value
    }
    function au(n, t) {
        return t.value - n.value
    }
    function cu(n) {
        return vo.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {source: n,target: t}
            })
        }))
    }
    function lu(n) {
        return n.x
    }
    function su(n) {
        return n.y
    }
    function fu(n, t, e) {
        n.y0 = t, n.y = e
    }
    function hu(n) {
        return vo.range(n.length)
    }
    function gu(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e; )
            r[t] = 0;
        return r
    }
    function pu(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)
            (t = n[e][1]) > u && (r = e, u = t);
        return r
    }
    function du(n) {
        return n.reduce(vu, 0)
    }
    function vu(n, t) {
        return n + t[1]
    }
    function mu(n, t) {
        return yu(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }
    function yu(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t; )
            i[e] = u * e + r;
        return i
    }
    function Mu(n) {
        return [vo.min(n), vo.max(n)]
    }
    function xu(n, t) {
        return n.parent == t.parent ? 1 : 2
    }
    function bu(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }
    function _u(n) {
        var t, e = n.children;
        return e && (t = e.length) ? e[t - 1] : n._tree.thread
    }
    function wu(n, t) {
        var e = n.children;
        if (e && (u = e.length))
            for (var r, u, i = -1; ++i < u; )
                t(r = wu(e[i], t), n) > 0 && (n = r);
        return n
    }
    function Su(n, t) {
        return n.x - t.x
    }
    function Eu(n, t) {
        return t.x - n.x
    }
    function ku(n, t) {
        return n.depth - t.depth
    }
    function Au(n, t) {
        function e(n, r) {
            var u = n.children;
            if (u && (o = u.length))
                for (var i, o, a = null, c = -1; ++c < o; )
                    i = u[c], e(i, a), a = i;
            t(n, r)
        }
        e(n, null)
    }
    function Nu(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0; )
            t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
    }
    function qu(n, t, e) {
        n = n._tree, t = t._tree;
        var r = e / (t.number - n.number);
        n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
    }
    function Tu(n, t, e) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
    }
    function zu(n, t) {
        return n.value - t.value
    }
    function Cu(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
    }
    function Du(n, t) {
        n._pack_next = t, t._pack_prev = n
    }
    function ju(n, t) {
        var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
        return .999 * u * u > e * e + r * r
    }
    function Lu(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (l = e.length)) {
            var e, r, u, i, o, a, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
            if (e.forEach(Hu), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
                for (i = e[2], Ou(r, u, i), t(i), Cu(r, i), r._pack_prev = i, Cu(i, u), u = r._pack_next, o = 3; l > o; o++) {
                    Ou(r, u, i = e[o]);
                    var p = 0, d = 1, v = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, d++)
                        if (ju(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !ju(c, i); c = c._pack_prev, v++)
                            ;
                    p ? (v > d || d == v && u.r < r.r ? Du(r, u = a) : Du(r = c, u), o--) : (Cu(r, i), u = i, t(i))
                }
            var m = (s + f) / 2, y = (h + g) / 2, M = 0;
            for (o = 0; l > o; o++)
                i = e[o], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = M, e.forEach(Pu)
        }
    }
    function Hu(n) {
        n._pack_next = n._pack_prev = n
    }
    function Pu(n) {
        delete n._pack_next, delete n._pack_prev
    }
    function Fu(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
            for (var i = -1, o = u.length; ++i < o; )
                Fu(u[i], t, e, r)
    }
    function Ou(n, t, e) {
        var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r, a = u * u + i * i;
            o *= o, r *= r;
            var c = .5 + (r - o) / (2 * a), l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u
        } else
            e.x = n.x + r, e.y = n.y
    }
    function Ru(n) {
        return 1 + vo.max(n, function(n) {
            return n.y
        })
    }
    function Yu(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }
    function Iu(n) {
        var t = n.children;
        return t && t.length ? Iu(t[0]) : n
    }
    function Uu(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Uu(e[t - 1]) : n
    }
    function Vu(n) {
        return {x: n.x,y: n.y,dx: n.dx,dy: n.dy}
    }
    function Zu(n, t) {
        var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {x: e,y: r,dx: u,dy: i}
    }
    function Xu(n) {
        var t = n[0], e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }
    function Bu(n) {
        return n.rangeExtent ? n.rangeExtent() : Xu(n.range())
    }
    function $u(n, t, e, r) {
        var u = e(n[0], n[1]), i = r(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }
    function Wu(n, t) {
        var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
    }
    function Ju(n) {
        return n ? {floor: function(t) {
                return Math.floor(t / n) * n
            },ceil: function(t) {
                return Math.ceil(t / n) * n
            }} : Nc
    }
    function Gu(n, t, e, r) {
        var u = [], i = [], o = 0, a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a; )
            u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = vo.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t))
        }
    }
    function Ku(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Gu : $u, c = r ? Wr : $r;
            return o = u(n, t, c, e), a = u(t, n, c, Sr), i
        }
        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(Ir)
        }, i.clamp = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.interpolate = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, i.ticks = function(t) {
            return ei(n, t)
        }, i.tickFormat = function(t, e) {
            return ri(n, t, e)
        }, i.nice = function(t) {
            return ni(n, t), u()
        }, i.copy = function() {
            return Ku(n, t, e, r)
        }, u()
    }
    function Qu(n, t) {
        return vo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }
    function ni(n, t) {
        return Wu(n, Ju(ti(n, t)[2]))
    }
    function ti(n, t) {
        null == t && (t = 10);
        var e = Xu(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
    }
    function ei(n, t) {
        return vo.range.apply(vo, ti(n, t))
    }
    function ri(n, t, e) {
        var r = -Math.floor(Math.log(ti(n, t)[2]) / Math.LN10 + .01);
        return vo.format(e ? e.replace(Sa, function(n, t, e, u, i, o, a, c, l, s) {
            return [t, e, u, i, o, a, c, l || "." + (r - 2 * ("%" === s)), s].join("")
        }) : ",." + r + "f")
    }
    function ui(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }
        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }
        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }, o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
        }, o.base = function(e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
        }, o.nice = function() {
            var t = Wu(r.map(u), e ? Math : Tc);
            return n.domain(t), r = t.map(i), o
        }, o.ticks = function() {
            var n = Xu(r), o = [], a = n[0], c = n[1], l = Math.floor(u(a)), s = Math.ceil(u(c)), f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (e) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++)
                            o.push(i(l) * h);
                    o.push(i(l))
                } else
                    for (o.push(i(l)); l++ < s; )
                        for (var h = f - 1; h > 0; h--)
                            o.push(i(l) * h);
                for (l = 0; o[l] < a; l++)
                    ;
                for (s = o.length; o[s - 1] > c; s--)
                    ;
                o = o.slice(l, s)
            }
            return o
        }, o.tickFormat = function(n, t) {
            if (!arguments.length)
                return qc;
            arguments.length < 2 ? t = qc : "function" != typeof t && (t = vo.format(t));
            var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : ""
            }
        }, o.copy = function() {
            return ui(n.copy(), t, e, r)
        }, Qu(o, n)
    }
    function ii(n, t, e) {
        function r(t) {
            return n(u(t))
        }
        var u = oi(t), i = oi(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
        }, r.ticks = function(n) {
            return ei(e, n)
        }, r.tickFormat = function(n, t) {
            return ri(e, n, t)
        }, r.nice = function(n) {
            return r.domain(ni(e, n))
        }, r.exponent = function(o) {
            return arguments.length ? (u = oi(t = o), i = oi(1 / t), n.domain(e.map(u)), r) : t
        }, r.copy = function() {
            return ii(n.copy(), t, e)
        }, Qu(r, n)
    }
    function oi(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }
    function ai(n, t) {
        function e(t) {
            return o[((i.get(t) || i.set(t, n.push(t))) - 1) % o.length]
        }
        function r(t, e) {
            return vo.range(n.length).map(function(n) {
                return t + e * n
            })
        }
        var i, o, a;
        return e.domain = function(r) {
            if (!arguments.length)
                return n;
            n = [], i = new u;
            for (var o, a = -1, c = r.length; ++a < c; )
                i.has(o = r[a]) || i.set(o, n.push(o));
            return e[t.t].apply(e, t.a)
        }, e.range = function(n) {
            return arguments.length ? (o = n, a = 0, t = {t: "range",a: arguments}, e) : o
        }, e.rangePoints = function(u, i) {
            arguments.length < 2 && (i = 0);
            var c = u[0], l = u[1], s = (l - c) / (Math.max(1, n.length - 1) + i);
            return o = r(n.length < 2 ? (c + l) / 2 : c + s * i / 2, s), a = 0, t = {t: "rangePoints",a: arguments}, e
        }, e.rangeBands = function(u, i, c) {
            arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
            var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = (f - s) / (n.length - i + 2 * c);
            return o = r(s + h * c, h), l && o.reverse(), a = h * (1 - i), t = {t: "rangeBands",a: arguments}, e
        }, e.rangeRoundBands = function(u, i, c) {
            arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
            var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = Math.floor((f - s) / (n.length - i + 2 * c)), g = f - s - (n.length - i) * h;
            return o = r(s + Math.round(g / 2), h), l && o.reverse(), a = Math.round(h * (1 - i)), t = {t: "rangeRoundBands",a: arguments}, e
        }, e.rangeBand = function() {
            return a
        }, e.rangeExtent = function() {
            return Xu(t.a[0])
        }, e.copy = function() {
            return ai(n, t)
        }, e.domain(n)
    }
    function ci(n, t) {
        function e() {
            var e = 0, i = t.length;
            for (u = []; ++e < i; )
                u[e - 1] = vo.quantile(n, e / i);
            return r
        }
        function r(n) {
            return isNaN(n = +n) ? void 0 : t[vo.bisect(u, n)]
        }
        var u;
        return r.domain = function(t) {
            return arguments.length ? (n = t.filter(function(n) {
                return !isNaN(n)
            }).sort(vo.ascending), e()) : n
        }, r.range = function(n) {
            return arguments.length ? (t = n, e()) : t
        }, r.quantiles = function() {
            return u
        }, r.invertExtent = function(e) {
            return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? u[e - 1] : n[0], e < u.length ? u[e] : n[n.length - 1]]
        }, r.copy = function() {
            return ci(n, t)
        }, e()
    }
    function li(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }
        function u() {
            return i = e.length / (t - n), o = e.length - 1, r
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
        }, r.range = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, r.invertExtent = function(t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
        }, r.copy = function() {
            return li(n, t, e)
        }, u()
    }
    function si(n, t) {
        function e(e) {
            return e >= e ? t[vo.bisect(n, e)] : void 0
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.invertExtent = function(e) {
            return e = t.indexOf(e), [n[e - 1], n[e]]
        }, e.copy = function() {
            return si(n, t)
        }, e
    }
    function fi(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t), t) : n
        }, t.ticks = function(t) {
            return ei(n, t)
        }, t.tickFormat = function(t, e) {
            return ri(n, t, e)
        }, t.copy = function() {
            return fi(n)
        }, t
    }
    function hi(n) {
        return n.innerRadius
    }
    function gi(n) {
        return n.outerRadius
    }
    function pi(n) {
        return n.startAngle
    }
    function di(n) {
        return n.endAngle
    }
    function vi(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i; )
            t = n[u], e = t[0], r = t[1] + Lc, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n
    }
    function mi(n) {
        function t(t) {
            function c() {
                d.push("M", a(n(m), f), s, l(n(v.reverse()), f), "Z")
            }
            for (var h, g, p, d = [], v = [], m = [], y = -1, M = t.length, x = gt(e), b = gt(u), _ = e === r ? function() {
                return g
            } : gt(r), w = u === i ? function() {
                return p
            } : gt(i); ++y < M; )
                o.call(this, h = t[y], y) ? (v.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : v.length && (c(), v = [], m = []);
            return v.length && c(), d.length ? d.join("") : null
        }
        var e = Ue, r = Ue, u = 0, i = Ve, o = Vt, a = Ze, c = a.key, l = a, s = "L", f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n, t) : r
        }, t.x0 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = fc.get(n) || Ze).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }
    function yi(n) {
        return n.radius
    }
    function Mi(n) {
        return [n.x, n.y]
    }
    function xi(n) {
        return function() {
            var t = n.apply(this, arguments), e = t[0], r = t[1] + Lc;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }
    function bi() {
        return 64
    }
    function _i() {
        return "circle"
    }
    function wi(n) {
        var t = Math.sqrt(n / Bo);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }
    function Si(n, t) {
        return jo(n, Ic), n.id = t, n
    }
    function Ei() {
        var n = this.__transition__;
        n && ++n.active
    }
    function ki(n, t, e, r) {
        var u = n.id;
        return N(n, "function" == typeof e ? function(n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
        } : (e = r(e), function(n) {
            n.__transition__[u].tween.set(t, e)
        }))
    }
    function Ai(n) {
        return null == n && (n = ""), function() {
            this.textContent = n
        }
    }
    function Ni(n, t, e, r) {
        var i = n.__transition__ || (n.__transition__ = {active: 0,count: 0}), o = i[e];
        if (!o) {
            var a = r.time;
            o = i[e] = {tween: new u,time: a,ease: r.ease,delay: r.delay,duration: r.duration}, ++i.count, vo.timer(function(r) {
                function u(r) {
                    return i.active > e ? l() : (i.active = e, o.event && o.event.start.call(n, s, t), o.tween.forEach(function(e, r) {
                        (r = r.call(n, s, t)) && p.push(r)
                    }), c(r) ? 1 : (Mt(c, 0, a), void 0))
                }
                function c(r) {
                    if (i.active !== e)
                        return l();
                    for (var u = (r - h) / g, a = f(u), c = p.length; c > 0; )
                        p[--c].call(n, a);
                    return u >= 1 ? (o.event && o.event.end.call(n, s, t), l()) : void 0
                }
                function l() {
                    return --i.count ? delete i[e] : delete n.__transition__, 1
                }
                var s = n.__data__, f = o.ease, h = o.delay, g = o.duration, p = [];
                return r >= h ? u(r) : (Mt(u, h, a), void 0)
            }, 0, a)
        }
    }
    function qi(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)"
        })
    }
    function Ti(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")"
        })
    }
    function zi() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function Ci(n, t, e) {
        function r(t) {
            var e = n(t), r = i(e, 1);
            return r - t > t - e ? e : r
        }
        function u(e) {
            return t(e = n(new Wc(e - 1)), 1), e
        }
        function i(n, e) {
            return t(n = new Wc(+n), e), n
        }
        function o(n, r, i) {
            var o = u(n), a = [];
            if (i > 1)
                for (; r > o; )
                    e(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; r > o; )
                    a.push(new Date(+o)), t(o, 1);
            return a
        }
        function a(n, t, e) {
            try {
                Wc = zi;
                var r = new zi;
                return r._ = n, o(r, t, e)
            }finally {
                Wc = Date
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Di(n);
        return c.floor = c, c.round = Di(r), c.ceil = Di(u), c.offset = Di(i), c.range = a, n
    }
    function Di(n) {
        return function(t, e) {
            try {
                Wc = zi;
                var r = new zi;
                return r._ = t, n(r, e)._
            }finally {
                Wc = Date
            }
        }
    }
    function ji(n) {
        function t(t) {
            for (var r, u, i, o = [], a = -1, c = 0; ++a < e; )
                37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = pl[r = n.charAt(++a)]) && (r = n.charAt(++a)), (i = dl[r]) && (r = i(t, null == u ? "e" === r ? " " : "0" : u)), o.push(r), c = a + 1);
            return o.push(n.substring(c, a)), o.join("")
        }
        var e = n.length;
        return t.parse = function(t) {
            var e = {y: 1900,m: 0,d: 1,H: 0,M: 0,S: 0,L: 0}, r = Li(e, n, t, 0);
            if (r != t.length)
                return null;
            "p" in e && (e.H = e.H % 12 + 12 * e.p);
            var u = new Wc;
            return "j" in e ? u.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (u.setFullYear(e.y, 0, 1), u.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (u.getDay() + 5) % 7 : e.w + 7 * e.U - (u.getDay() + 6) % 7)) : u.setFullYear(e.y, e.m, e.d), u.setHours(e.H, e.M, e.S, e.L), u
        }, t.toString = function() {
            return n
        }, t
    }
    function Li(n, t, e, r) {
        for (var u, i, o = 0, a = t.length, c = e.length; a > o; ) {
            if (r >= c)
                return -1;
            if (u = t.charCodeAt(o++), 37 === u) {
                if (i = vl[t.charAt(o++)], !i || (r = i(n, e, r)) < 0)
                    return -1
            } else if (u != e.charCodeAt(r++))
                return -1
        }
        return r
    }
    function Hi(n) {
        return new RegExp("^(?:" + n.map(vo.requote).join("|") + ")", "i")
    }
    function Pi(n) {
        for (var t = new u, e = -1, r = n.length; ++e < r; )
            t.set(n[e].toLowerCase(), e);
        return t
    }
    function Fi(n, t, e) {
        var r = 0 > n ? "-" : "", u = (r ? -n : n) + "", i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
    }
    function Oi(n, t, e) {
        al.lastIndex = 0;
        var r = al.exec(t.substring(e));
        return r ? (n.w = cl.get(r[0].toLowerCase()), e + r[0].length) : -1
    }
    function Ri(n, t, e) {
        il.lastIndex = 0;
        var r = il.exec(t.substring(e));
        return r ? (n.w = ol.get(r[0].toLowerCase()), e + r[0].length) : -1
    }
    function Yi(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1
    }
    function Ii(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1
    }
    function Ui(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1
    }
    function Vi(n, t, e) {
        fl.lastIndex = 0;
        var r = fl.exec(t.substring(e));
        return r ? (n.m = hl.get(r[0].toLowerCase()), e + r[0].length) : -1
    }
    function Zi(n, t, e) {
        ll.lastIndex = 0;
        var r = ll.exec(t.substring(e));
        return r ? (n.m = sl.get(r[0].toLowerCase()), e + r[0].length) : -1
    }
    function Xi(n, t, e) {
        return Li(n, dl.c.toString(), t, e)
    }
    function Bi(n, t, e) {
        return Li(n, dl.x.toString(), t, e)
    }
    function $i(n, t, e) {
        return Li(n, dl.X.toString(), t, e)
    }
    function Wi(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1
    }
    function Ji(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.y = Gi(+r[0]), e + r[0].length) : -1
    }
    function Gi(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }
    function Ki(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1
    }
    function Qi(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1
    }
    function no(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1
    }
    function to(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1
    }
    function eo(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1
    }
    function ro(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1
    }
    function uo(n, t, e) {
        ml.lastIndex = 0;
        var r = ml.exec(t.substring(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1
    }
    function io(n, t, e) {
        var r = yl.get(t.substring(e, e += 2).toLowerCase());
        return null == r ? -1 : (n.p = r, e)
    }
    function oo(n) {
        var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = ~~(Math.abs(t) / 60), u = Math.abs(t) % 60;
        return e + Fi(r, "0", 2) + Fi(u, "0", 2)
    }
    function ao(n, t, e) {
        gl.lastIndex = 0;
        var r = gl.exec(t.substring(e, e + 1));
        return r ? e + r[0].length : -1
    }
    function co(n) {
        function t(n) {
            try {
                Wc = zi;
                var t = new Wc;
                return t._ = n, e(t)
            }finally {
                Wc = Date
            }
        }
        var e = ji(n);
        return t.parse = function(n) {
            try {
                Wc = zi;
                var t = e.parse(n);
                return t && t._
            }finally {
                Wc = Date
            }
        }, t.toString = e.toString, t
    }
    function lo(n) {
        return n.toISOString()
    }
    function so(n, t, e) {
        function r(t) {
            return n(t)
        }
        function u(n, e) {
            var r = n[1] - n[0], u = r / e, i = vo.bisect(xl, u);
            return i == xl.length ? [t.year, ti(n.map(function(n) {
                    return n / 31536e6
                }), e)[2]] : i ? t[u / xl[i - 1] < xl[i] / u ? i - 1 : i] : [Sl, ti(n, e)[2]]
        }
        return r.invert = function(t) {
            return fo(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(fo)
        }, r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, fo(+e + 1), t).length
            }
            var i = r.domain(), o = Xu(i), a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Wu(i, t > 1 ? {floor: function(t) {
                    for (; e(t = n.floor(t)); )
                        t = fo(t - 1);
                    return t
                },ceil: function(t) {
                    for (; e(t = n.ceil(t)); )
                        t = fo(+t + 1);
                    return t
                }} : n))
        }, r.ticks = function(n, t) {
            var e = Xu(r.domain()), i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{range: n}, t];
            return i && (n = i[0], t = i[1]), n.range(e[0], fo(+e[1] + 1), t)
        }, r.tickFormat = function() {
            return e
        }, r.copy = function() {
            return so(n.copy(), t, e)
        }, Qu(r, n)
    }
    function fo(n) {
        return new Date(n)
    }
    function ho(n) {
        return function(t) {
            for (var e = n.length - 1, r = n[e]; !r[1](t); )
                r = n[--e];
            return r[0](t)
        }
    }
    function go(n) {
        return JSON.parse(n.responseText)
    }
    function po(n) {
        var t = Mo.createRange();
        return t.selectNode(Mo.body), t.createContextualFragment(n.responseText)
    }
    var vo = {version: "3.3.0"};
    Date.now || (Date.now = function() {
        return +new Date
    });
    var mo = [].slice, yo = function(n) {
        return mo.call(n)
    }, Mo = document, xo = Mo.documentElement, bo = window;
    try {
        yo(xo.childNodes)[0].nodeType
    } catch (_o) {
        yo = function(n) {
            for (var t = n.length, e = new Array(t); t--; )
                e[t] = n[t];
            return e
        }
    }
    try {
        Mo.createElement("div").style.setProperty("opacity", 0, "")
    } catch (wo) {
        var So = bo.Element.prototype, Eo = So.setAttribute, ko = So.setAttributeNS, Ao = bo.CSSStyleDeclaration.prototype, No = Ao.setProperty;
        So.setAttribute = function(n, t) {
            Eo.call(this, n, t + "")
        }, So.setAttributeNS = function(n, t, e) {
            ko.call(this, n, t, e + "")
        }, Ao.setProperty = function(n, t, e) {
            No.call(this, n, t + "", e)
        }
    }
    vo.ascending = function(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }, vo.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, vo.min = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null != (r = n[u]) && e > r && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null != (r = t.call(n, n[u], u)) && e > r && (e = r)
        }
        return e
    }, vo.max = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null != (r = n[u]) && r > e && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null != (r = t.call(n, n[u], u)) && r > e && (e = r)
        }
        return e
    }, vo.extent = function(n, t) {
        var e, r, u, i = -1, o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = u = n[i]) && e >= e); )
                e = u = void 0;
            for (; ++i < o; )
                null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
        } else {
            for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e); )
                e = void 0;
            for (; ++i < o; )
                null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
        }
        return [e, u]
    }, vo.sum = function(n, t) {
        var e, r = 0, u = n.length, i = -1;
        if (1 === arguments.length)
            for (; ++i < u; )
                isNaN(e = +n[i]) || (r += e);
        else
            for (; ++i < u; )
                isNaN(e = +t.call(n, n[i], i)) || (r += e);
        return r
    }, vo.mean = function(t, e) {
        var r, u = t.length, i = 0, o = -1, a = 0;
        if (1 === arguments.length)
            for (; ++o < u; )
                n(r = t[o]) && (i += (r - i) / ++a);
        else
            for (; ++o < u; )
                n(r = e.call(t, t[o], o)) && (i += (r - i) / ++a);
        return a ? i : void 0
    }, vo.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r;
        return i ? u + i * (n[r] - u) : u
    }, vo.median = function(t, e) {
        return arguments.length > 1 && (t = t.map(e)), t = t.filter(n), t.length ? vo.quantile(t.sort(vo.ascending), .5) : void 0
    }, vo.bisector = function(n) {
        return {left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    n.call(t, t[i], i) < e ? r = i + 1 : u = i
                }
                return r
            },right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    e < n.call(t, t[i], i) ? u = i : r = i + 1
                }
                return r
            }}
    };
    var qo = vo.bisector(function(n) {
        return n
    });
    vo.bisectLeft = qo.left, vo.bisect = vo.bisectRight = qo.right, vo.shuffle = function(n) {
        for (var t, e, r = n.length; r; )
            e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
        return n
    }, vo.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--; )
            r[e] = n[t[e]];
        return r
    }, vo.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e; )
            i[e] = [t = u, u = n[++e]];
        return i
    }, vo.zip = function() {
        if (!(u = arguments.length))
            return [];
        for (var n = -1, e = vo.min(arguments, t), r = new Array(e); ++n < e; )
            for (var u, i = -1, o = r[n] = new Array(u); ++i < u; )
                o[i] = arguments[i][n];
        return r
    }, vo.transpose = function(n) {
        return vo.zip.apply(vo, n)
    }, vo.keys = function(n) {
        var t = [];
        for (var e in n)
            t.push(e);
        return t
    }, vo.values = function(n) {
        var t = [];
        for (var e in n)
            t.push(n[e]);
        return t
    }, vo.entries = function(n) {
        var t = [];
        for (var e in n)
            t.push({key: e,value: n[e]});
        return t
    }, vo.merge = function(n) {
        return Array.prototype.concat.apply([], n)
    }, vo.range = function(n, t, r) {
        if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r)
            throw new Error("infinite range");
        var u, i = [], o = e(Math.abs(r)), a = -1;
        if (n *= o, t *= o, r *= o, 0 > r)
            for (; (u = n + r * ++a) > t; )
                i.push(u / o);
        else
            for (; (u = n + r * ++a) < t; )
                i.push(u / o);
        return i
    }, vo.map = function(n) {
        var t = new u;
        if (n instanceof u)
            n.forEach(function(n, e) {
                t.set(n, e)
            });
        else
            for (var e in n)
                t.set(e, n[e]);
        return t
    }, r(u, {has: function(n) {
            return To + n in this
        },get: function(n) {
            return this[To + n]
        },set: function(n, t) {
            return this[To + n] = t
        },remove: function(n) {
            return n = To + n, n in this && delete this[n]
        },keys: function() {
            var n = [];
            return this.forEach(function(t) {
                n.push(t)
            }), n
        },values: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push(e)
            }), n
        },entries: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push({key: t,value: e})
            }), n
        },forEach: function(n) {
            for (var t in this)
                t.charCodeAt(0) === zo && n.call(this, t.substring(1), this[t])
        }});
    var To = "\x00", zo = To.charCodeAt(0);
    vo.nest = function() {
        function n(t, a, c) {
            if (c >= o.length)
                return r ? r.call(i, a) : e ? a.sort(e) : a;
            for (var l, s, f, h, g = -1, p = a.length, d = o[c++], v = new u; ++g < p; )
                (h = v.get(l = d(s = a[g]))) ? h.push(s) : v.set(l, [s]);
            return t ? (s = t(), f = function(e, r) {
                s.set(e, n(t, r, c))
            }) : (s = {}, f = function(e, r) {
                s[e] = n(t, r, c)
            }), v.forEach(f), s
        }
        function t(n, e) {
            if (e >= o.length)
                return n;
            var r = [], u = a[e++];
            return n.forEach(function(n, u) {
                r.push({key: n,values: t(u, e)})
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }) : r
        }
        var e, r, i = {}, o = [], a = [];
        return i.map = function(t, e) {
            return n(e, t, 0)
        }, i.entries = function(e) {
            return t(n(vo.map, e, 0), 0)
        }, i.key = function(n) {
            return o.push(n), i
        }, i.sortKeys = function(n) {
            return a[o.length - 1] = n, i
        }, i.sortValues = function(n) {
            return e = n, i
        }, i.rollup = function(n) {
            return r = n, i
        }, i
    }, vo.set = function(n) {
        var t = new i;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e)
                t.add(n[e]);
        return t
    }, r(i, {has: function(n) {
            return To + n in this
        },add: function(n) {
            return this[To + n] = !0, n
        },remove: function(n) {
            return n = To + n, n in this && delete this[n]
        },values: function() {
            var n = [];
            return this.forEach(function(t) {
                n.push(t)
            }), n
        },forEach: function(n) {
            for (var t in this)
                t.charCodeAt(0) === zo && n.call(this, t.substring(1))
        }}), vo.behavior = {}, vo.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u; )
            n[e = arguments[r]] = o(n, t, t[e]);
        return n
    };
    var Co = ["webkit", "ms", "moz", "Moz", "o", "O"];
    vo.dispatch = function() {
        for (var n = new l, t = -1, e = arguments.length; ++t < e; )
            n[arguments[t]] = s(n);
        return n
    }, l.prototype.on = function(n, t) {
        var e = n.indexOf("."), r = "";
        if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n)
            return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this)
                    this.hasOwnProperty(n) && this[n].on(r, null);
            return this
        }
    }, vo.event = null, vo.requote = function(n) {
        return n.replace(Do, "\\$&")
    };
    var Do = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, jo = {}.__proto__ ? function(n, t) {
        n.__proto__ = t
    } : function(n, t) {
        for (var e in t)
            n[e] = t[e]
    }, Lo = function(n, t) {
        return t.querySelector(n)
    }, Ho = function(n, t) {
        return t.querySelectorAll(n)
    }, Po = xo[a(xo, "matchesSelector")], Fo = function(n, t) {
        return Po.call(n, t)
    };
    "function" == typeof Sizzle && (Lo = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, Ho = function(n, t) {
        return Sizzle.uniqueSort(Sizzle(n, t))
    }, Fo = Sizzle.matchesSelector), vo.selection = function() {
        return Io
    };
    var Oo = vo.selection.prototype = [];
    Oo.select = function(n) {
        var t, e, r, u, i = [];
        n = d(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, l = r.length; ++c < l; )
                (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
        }
        return p(i)
    }, Oo.selectAll = function(n) {
        var t, e, r = [];
        n = v(n);
        for (var u = -1, i = this.length; ++u < i; )
            for (var o = this[u], a = -1, c = o.length; ++a < c; )
                (e = o[a]) && (r.push(t = yo(n.call(e, e.__data__, a, u))), t.parentNode = e);
        return p(r)
    };
    var Ro = {svg: "http://www.w3.org/2000/svg",xhtml: "http://www.w3.org/1999/xhtml",xlink: "http://www.w3.org/1999/xlink",xml: "http://www.w3.org/XML/1998/namespace",xmlns: "http://www.w3.org/2000/xmlns/"};
    vo.ns = {prefix: Ro,qualify: function(n) {
            var t = n.indexOf(":"), e = n;
            return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), Ro.hasOwnProperty(e) ? {space: Ro[e],local: n} : n
        }}, Oo.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = vo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n)
                this.each(m(t, n[t]));
            return this
        }
        return this.each(m(n, t))
    }, Oo.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(), r = (n = n.trim().split(/^|\s+/g)).length, u = -1;
                if (t = e.classList) {
                    for (; ++u < r; )
                        if (!t.contains(n[u]))
                            return !1
                } else
                    for (t = e.getAttribute("class"); ++u < r; )
                        if (!M(n[u]).test(t))
                            return !1;
                return !0
            }
            for (t in n)
                this.each(x(t, n[t]));
            return this
        }
        return this.each(x(n, t))
    }, Oo.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n)
                    this.each(_(e, n[e], t));
                return this
            }
            if (2 > r)
                return bo.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = ""
        }
        return this.each(_(n, t, e))
    }, Oo.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n)
                return this.node()[n];
            for (t in n)
                this.each(w(t, n[t]));
            return this
        }
        return this.each(w(n, t))
    }, Oo.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    }, Oo.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, Oo.append = function(n) {
        return n = S(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    }, Oo.insert = function(n, t) {
        return n = S(n), t = d(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments))
        })
    }, Oo.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    }, Oo.data = function(n, t) {
        function e(n, e) {
            var r, i, o, a = n.length, f = e.length, h = Math.min(a, f), g = new Array(f), p = new Array(f), d = new Array(a);
            if (t) {
                var v, m = new u, y = new u, M = [];
                for (r = -1; ++r < a; )
                    v = t.call(i = n[r], i.__data__, r), m.has(v) ? d[r] = i : m.set(v, i), M.push(v);
                for (r = -1; ++r < f; )
                    v = t.call(e, o = e[r], r), (i = m.get(v)) ? (g[r] = i, i.__data__ = o) : y.has(v) || (p[r] = E(o)), y.set(v, o), m.remove(v);
                for (r = -1; ++r < a; )
                    m.has(M[r]) && (d[r] = n[r])
            } else {
                for (r = -1; ++r < h; )
                    i = n[r], o = e[r], i ? (i.__data__ = o, g[r] = i) : p[r] = E(o);
                for (; f > r; ++r)
                    p[r] = E(e[r]);
                for (; a > r; ++r)
                    d[r] = n[r]
            }
            p.update = g, p.parentNode = g.parentNode = d.parentNode = n.parentNode, c.push(p), l.push(g), s.push(d)
        }
        var r, i, o = -1, a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (r = this[0]).length); ++o < a; )
                (i = r[o]) && (n[o] = i.__data__);
            return n
        }
        var c = q([]), l = p([]), s = p([]);
        if ("function" == typeof n)
            for (; ++o < a; )
                e(r = this[o], n.call(r, r.parentNode.__data__, o));
        else
            for (; ++o < a; )
                e(r = this[o], n);
        return l.enter = function() {
            return c
        }, l.exit = function() {
            return s
        }, l
    }, Oo.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, Oo.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = k(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a) && t.push(r)
        }
        return p(u)
    }, Oo.order = function() {
        for (var n = -1, t = this.length; ++n < t; )
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0; )
                (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
        return this
    }, Oo.sort = function(n) {
        n = A.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e; )
            this[t].sort(n);
        return this.order()
    }, Oo.each = function(n) {
        return N(this, function(t, e, r) {
            n.call(t, t.__data__, e, r)
        })
    }, Oo.call = function(n) {
        var t = yo(arguments);
        return n.apply(t[0] = this, t), this
    }, Oo.empty = function() {
        return !this.node()
    }, Oo.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i)
                    return i
            }
        return null
    }, Oo.size = function() {
        var n = 0;
        return this.each(function() {
            ++n
        }), n
    };
    var Yo = [];
    vo.selection.enter = q, vo.selection.enter.prototype = Yo, Yo.append = Oo.append, Yo.empty = Oo.empty, Yo.node = Oo.node, Yo.call = Oo.call, Yo.size = Oo.size, Yo.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c; ) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var l = -1, s = u.length; ++l < s; )
                (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null)
        }
        return p(o)
    }, Yo.insert = function(n, t) {
        return arguments.length < 2 && (t = T(this)), Oo.insert.call(this, n, t)
    }, vo.select = function(n) {
        var t = ["string" == typeof n ? Lo(n, Mo) : n];
        return t.parentNode = xo, p([t])
    }, vo.selectAll = function(n) {
        var t = yo("string" == typeof n ? Ho(n, Mo) : n);
        return t.parentNode = xo, p([t])
    };
    var Io = vo.select(xo);
    Oo.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n)
                    this.each(z(e, n[e], t));
                return this
            }
            if (2 > r)
                return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(z(n, t, e))
    };
    var Uo = vo.map({mouseenter: "mouseover",mouseleave: "mouseout"});
    Uo.forEach(function(n) {
        "on" + n in Mo && Uo.remove(n)
    });
    var Vo = a(xo.style, "userSelect"), Zo = 0;
    vo.mouse = function(n) {
        return L(n, h())
    };
    var Xo = /WebKit/.test(bo.navigator.userAgent) ? -1 : 0;
    vo.touches = function(n, t) {
        return arguments.length < 2 && (t = h().touches), t ? yo(t).map(function(t) {
            var e = L(n, t);
            return e.identifier = t.identifier, e
        }) : []
    }, vo.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", o).on("touchstart.drag", a)
        }
        function t() {
            return vo.event.changedTouches[0].identifier
        }
        function e(n, t) {
            return vo.touches(n).filter(function(n) {
                return n.identifier === t
            })[0]
        }
        function r(n, t, e, r) {
            return function() {
                function o() {
                    if (!s)
                        return a();
                    var n = t(s, g), e = n[0] - d[0], r = n[1] - d[1];
                    v |= e | r, d = n, f({type: "drag",x: n[0] + c[0],y: n[1] + c[1],dx: e,dy: r})
                }
                function a() {
                    m.on(e + "." + p, null).on(r + "." + p, null), y(v && vo.event.target === h), f({type: "dragend"})
                }
                var c, l = this, s = l.parentNode, f = u.of(l, arguments), h = vo.event.target, g = n(), p = null == g ? "drag" : "drag-" + g, d = t(s, g), v = 0, m = vo.select(bo).on(e + "." + p, o).on(r + "." + p, a), y = j();
                i ? (c = i.apply(l, arguments), c = [c.x - d[0], c.y - d[1]]) : c = [0, 0], f({type: "dragstart"})
            }
        }
        var u = g(n, "drag", "dragstart", "dragend"), i = null, o = r(c, vo.mouse, "mousemove", "mouseup"), a = r(t, e, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (i = t, n) : i
        }, vo.rebind(n, u, "on")
    };
    var Bo = Math.PI, $o = 1e-6, Wo = $o * $o, Jo = Bo / 180, Go = 180 / Bo, Ko = Math.SQRT2, Qo = 2, na = 4;
    vo.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = R(d), o = i / (Qo * h) * (e * Y(Ko * t + d) - O(d));
                return [r + o * l, u + o * s, i * e / R(Ko * t + d)]
            }
            return [r + n * l, u + n * s, i * Math.exp(Ko * t)]
        }
        var r = n[0], u = n[1], i = n[2], o = t[0], a = t[1], c = t[2], l = o - r, s = a - u, f = l * l + s * s, h = Math.sqrt(f), g = (c * c - i * i + na * f) / (2 * i * Qo * h), p = (c * c - i * i - na * f) / (2 * c * Qo * h), d = Math.log(Math.sqrt(g * g + 1) - g), v = Math.log(Math.sqrt(p * p + 1) - p), m = v - d, y = (m || Math.log(c / i)) / Ko;
        return e.duration = 1e3 * y, e
    }, vo.behavior.zoom = function() {
        function n(n) {
            n.on(A, l).on(ra + ".zoom", h).on(N, p).on("dblclick.zoom", d).on(T, s)
        }
        function t(n) {
            return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
        }
        function e(n) {
            return [n[0] * S.k + S.x, n[1] * S.k + S.y]
        }
        function r(n) {
            S.k = Math.max(k[0], Math.min(k[1], n))
        }
        function u(n, t) {
            t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
        }
        function i() {
            b && b.domain(x.range().map(function(n) {
                return (n - S.x) / S.k
            }).map(x.invert)), w && w.domain(_.range().map(function(n) {
                return (n - S.y) / S.k
            }).map(_.invert))
        }
        function o(n) {
            n({type: "zoomstart"})
        }
        function a(n) {
            i(), n({type: "zoom",scale: S.k,translate: [S.x, S.y]})
        }
        function c(n) {
            n({type: "zoomend"})
        }
        function l() {
            function n() {
                s = 1, u(vo.mouse(r), h), a(i)
            }
            function e() {
                f.on(N, bo === r ? p : null).on(q, null), g(s && vo.event.target === l), c(i)
            }
            var r = this, i = D.of(r, arguments), l = vo.event.target, s = 0, f = vo.select(bo).on(N, n).on(q, e), h = t(vo.mouse(r)), g = j();
            Ei.call(r), o(i)
        }
        function s() {
            function n() {
                var n = vo.touches(d);
                return p = S.k, g = {}, n.forEach(function(n) {
                    g[n.identifier] = t(n)
                }), n
            }
            function e() {
                var t = Date.now(), e = n();
                if (1 === e.length) {
                    if (500 > t - M) {
                        var i = e[0], o = g[i.identifier];
                        r(2 * S.k), u(i, o), f(), a(v)
                    }
                    M = t
                } else if (e.length > 1) {
                    var i = e[0], c = e[1], l = i[0] - c[0], s = i[1] - c[1];
                    m = l * l + s * s
                }
            }
            function i() {
                var n = vo.touches(d), t = n[0], e = g[t.identifier];
                if (i = n[1]) {
                    var i, o = g[i.identifier], c = vo.event.scale;
                    if (null == c) {
                        var l = (l = i[0] - t[0]) * l + (l = i[1] - t[1]) * l;
                        c = m && Math.sqrt(l / m)
                    }
                    t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(c * p)
                }
                M = null, u(t, e), a(v)
            }
            function h() {
                vo.event.touches.length ? n() : (y.on(z, null).on(C, null), x.on(A, l).on(T, s), b(), c(v))
            }
            var g, p, d = this, v = D.of(d, arguments), m = 0, y = vo.select(bo).on(z, i).on(C, h), x = vo.select(d).on(A, null).on(T, e), b = j();
            Ei.call(d), e(), o(v)
        }
        function h() {
            var n = D.of(this, arguments);
            y ? clearTimeout(y) : (Ei.call(this), o(n)), y = setTimeout(function() {
                y = null, c(n)
            }, 50), f();
            var e = m || vo.mouse(this);
            v || (v = t(e)), r(Math.pow(2, .002 * ta()) * S.k), u(e, v), a(n)
        }
        function p() {
            v = null
        }
        function d() {
            var n = D.of(this, arguments), e = vo.mouse(this), i = t(e), l = Math.log(S.k) / Math.LN2;
            o(n), r(Math.pow(2, vo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), u(e, i), a(n), c(n)
        }
        var v, m, y, M, x, b, _, w, S = {x: 0,y: 0,k: 1}, E = [960, 500], k = ea, A = "mousedown.zoom", N = "mousemove.zoom", q = "mouseup.zoom", T = "touchstart.zoom", z = "touchmove.zoom", C = "touchend.zoom", D = g(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = D.of(this, arguments), t = S;
                Fc ? vo.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {x: 0,y: 0,k: 1}, o(n)
                }).tween("zoom:zoom", function() {
                    var e = E[0], r = E[1], u = e / 2, i = r / 2, o = vo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                    return function(t) {
                        var r = o(t), c = e / r[2];
                        this.__chart__ = S = {x: u - r[0] * c,y: i - r[1] * c,k: c}, a(n)
                    }
                }).each("end.zoom", function() {
                    c(n)
                }) : (this.__chart__ = S, o(n), a(n), c(n))
            })
        }, n.translate = function(t) {
            return arguments.length ? (S = {x: +t[0],y: +t[1],k: S.k}, i(), n) : [S.x, S.y]
        }, n.scale = function(t) {
            return arguments.length ? (S = {x: S.x,y: S.y,k: +t}, i(), n) : S.k
        }, n.scaleExtent = function(t) {
            return arguments.length ? (k = null == t ? ea : [+t[0], +t[1]], n) : k
        }, n.center = function(t) {
            return arguments.length ? (m = t && [+t[0], +t[1]], n) : m
        }, n.size = function(t) {
            return arguments.length ? (E = t && [+t[0], +t[1]], n) : E
        }, n.x = function(t) {
            return arguments.length ? (b = t, x = t.copy(), S = {x: 0,y: 0,k: 1}, n) : b
        }, n.y = function(t) {
            return arguments.length ? (w = t, _ = t.copy(), S = {x: 0,y: 0,k: 1}, n) : w
        }, vo.rebind(n, D, "on")
    };
    var ta, ea = [0, 1 / 0], ra = "onwheel" in Mo ? (ta = function() {
        return -vo.event.deltaY * (vo.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in Mo ? (ta = function() {
        return vo.event.wheelDelta
    }, "mousewheel") : (ta = function() {
        return -vo.event.detail
    }, "MozMousePixelScroll");
    U.prototype.toString = function() {
        return this.rgb() + ""
    }, vo.hsl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof Z ? V(n.h, n.s, n.l) : ct("" + n, lt, V) : V(+n, +t, +e)
    };
    var ua = Z.prototype = new U;
    ua.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), V(this.h, this.s, this.l / n)
    }, ua.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), V(this.h, this.s, n * this.l)
    }, ua.rgb = function() {
        return X(this.h, this.s, this.l)
    }, vo.hcl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof $ ? B(n.h, n.c, n.l) : n instanceof G ? Q(n.l, n.a, n.b) : Q((n = st((n = vo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : B(+n, +t, +e)
    };
    var ia = $.prototype = new U;
    ia.brighter = function(n) {
        return B(this.h, this.c, Math.min(100, this.l + oa * (arguments.length ? n : 1)))
    }, ia.darker = function(n) {
        return B(this.h, this.c, Math.max(0, this.l - oa * (arguments.length ? n : 1)))
    }, ia.rgb = function() {
        return W(this.h, this.c, this.l).rgb()
    }, vo.lab = function(n, t, e) {
        return 1 === arguments.length ? n instanceof G ? J(n.l, n.a, n.b) : n instanceof $ ? W(n.l, n.c, n.h) : st((n = vo.rgb(n)).r, n.g, n.b) : J(+n, +t, +e)
    };
    var oa = 18, aa = .95047, ca = 1, la = 1.08883, sa = G.prototype = new U;
    sa.brighter = function(n) {
        return J(Math.min(100, this.l + oa * (arguments.length ? n : 1)), this.a, this.b)
    }, sa.darker = function(n) {
        return J(Math.max(0, this.l - oa * (arguments.length ? n : 1)), this.a, this.b)
    }, sa.rgb = function() {
        return K(this.l, this.a, this.b)
    }, vo.rgb = function(n, t, e) {
        return 1 === arguments.length ? n instanceof ot ? it(n.r, n.g, n.b) : ct("" + n, it, X) : it(~~n, ~~t, ~~e)
    };
    var fa = ot.prototype = new U;
    fa.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r, e = this.g, r = this.b, u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), it(Math.min(255, ~~(t / n)), Math.min(255, ~~(e / n)), Math.min(255, ~~(r / n)))) : it(u, u, u)
    }, fa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), it(~~(n * this.r), ~~(n * this.g), ~~(n * this.b))
    }, fa.hsl = function() {
        return lt(this.r, this.g, this.b)
    }, fa.toString = function() {
        return "#" + at(this.r) + at(this.g) + at(this.b)
    };
    var ha = vo.map({aliceblue: 15792383,antiquewhite: 16444375,aqua: 65535,aquamarine: 8388564,azure: 15794175,beige: 16119260,bisque: 16770244,black: 0,blanchedalmond: 16772045,blue: 255,blueviolet: 9055202,brown: 10824234,burlywood: 14596231,cadetblue: 6266528,chartreuse: 8388352,chocolate: 13789470,coral: 16744272,cornflowerblue: 6591981,cornsilk: 16775388,crimson: 14423100,cyan: 65535,darkblue: 139,darkcyan: 35723,darkgoldenrod: 12092939,darkgray: 11119017,darkgreen: 25600,darkgrey: 11119017,darkkhaki: 12433259,darkmagenta: 9109643,darkolivegreen: 5597999,darkorange: 16747520,darkorchid: 10040012,darkred: 9109504,darksalmon: 15308410,darkseagreen: 9419919,darkslateblue: 4734347,darkslategray: 3100495,darkslategrey: 3100495,darkturquoise: 52945,darkviolet: 9699539,deeppink: 16716947,deepskyblue: 49151,dimgray: 6908265,dimgrey: 6908265,dodgerblue: 2003199,firebrick: 11674146,floralwhite: 16775920,forestgreen: 2263842,fuchsia: 16711935,gainsboro: 14474460,ghostwhite: 16316671,gold: 16766720,goldenrod: 14329120,gray: 8421504,green: 32768,greenyellow: 11403055,grey: 8421504,honeydew: 15794160,hotpink: 16738740,indianred: 13458524,indigo: 4915330,ivory: 16777200,khaki: 15787660,lavender: 15132410,lavenderblush: 16773365,lawngreen: 8190976,lemonchiffon: 16775885,lightblue: 11393254,lightcoral: 15761536,lightcyan: 14745599,lightgoldenrodyellow: 16448210,lightgray: 13882323,lightgreen: 9498256,lightgrey: 13882323,lightpink: 16758465,lightsalmon: 16752762,lightseagreen: 2142890,lightskyblue: 8900346,lightslategray: 7833753,lightslategrey: 7833753,lightsteelblue: 11584734,lightyellow: 16777184,lime: 65280,limegreen: 3329330,linen: 16445670,magenta: 16711935,maroon: 8388608,mediumaquamarine: 6737322,mediumblue: 205,mediumorchid: 12211667,mediumpurple: 9662683,mediumseagreen: 3978097,mediumslateblue: 8087790,mediumspringgreen: 64154,mediumturquoise: 4772300,mediumvioletred: 13047173,midnightblue: 1644912,mintcream: 16121850,mistyrose: 16770273,moccasin: 16770229,navajowhite: 16768685,navy: 128,oldlace: 16643558,olive: 8421376,olivedrab: 7048739,orange: 16753920,orangered: 16729344,orchid: 14315734,palegoldenrod: 15657130,palegreen: 10025880,paleturquoise: 11529966,palevioletred: 14381203,papayawhip: 16773077,peachpuff: 16767673,peru: 13468991,pink: 16761035,plum: 14524637,powderblue: 11591910,purple: 8388736,red: 16711680,rosybrown: 12357519,royalblue: 4286945,saddlebrown: 9127187,salmon: 16416882,sandybrown: 16032864,seagreen: 3050327,seashell: 16774638,sienna: 10506797,silver: 12632256,skyblue: 8900331,slateblue: 6970061,slategray: 7372944,slategrey: 7372944,snow: 16775930,springgreen: 65407,steelblue: 4620980,tan: 13808780,teal: 32896,thistle: 14204888,tomato: 16737095,turquoise: 4251856,violet: 15631086,wheat: 16113331,white: 16777215,whitesmoke: 16119285,yellow: 16776960,yellowgreen: 10145074});
    ha.forEach(function(n, t) {
        ha.set(n, rt(t))
    }), vo.functor = gt, vo.xhr = dt(pt), vo.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = vo.xhr(n, t, i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
            }, o.row(e)
        }
        function r(n) {
            return e.parse(n.responseText)
        }
        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n)
            }
        }
        function o(t) {
            return t.map(a).join(n)
        }
        function a(n) {
            return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var c = new RegExp('["' + n + "\n]"), l = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r)
                    return r(n, e - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e)
                } : u
            })
        }, e.parseRows = function(n, t) {
            function e() {
                if (s >= c)
                    return o;
                if (u)
                    return u = !1, i;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < c; )
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1))
                                break;
                            ++e
                        }
                    s = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"')
                }
                for (; c > s; ) {
                    var r = n.charCodeAt(s++), a = 1;
                    if (10 === r)
                        u = !0;
                    else if (13 === r)
                        u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
                    else if (r !== l)
                        continue;
                    return n.substring(t, s - a)
                }
                return n.substring(t)
            }
            for (var r, u, i = {}, o = {}, a = [], c = n.length, s = 0, f = 0; (r = e()) !== o; ) {
                for (var h = []; r !== i && r !== o; )
                    h.push(r), r = e();
                (!t || (h = t(h, f++))) && a.push(h)
            }
            return a
        }, e.format = function(t) {
            if (Array.isArray(t[0]))
                return e.formatRows(t);
            var r = new i, u = [];
            return t.forEach(function(n) {
                for (var t in n)
                    r.has(t) || u.push(r.add(t))
            }), [u.map(a).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return a(t[n])
                }).join(n)
            })).join("\n")
        }, e.formatRows = function(n) {
            return n.map(o).join("\n")
        }, e
    }, vo.csv = vo.dsv(",", "text/csv"), vo.tsv = vo.dsv("  ", "text/tab-separated-values");
    var ga, pa, da, va, ma, ya = bo[a(bo, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17)
    };
    vo.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t, i = {callback: n,time: u,next: null};
        pa ? pa.next = i : ga = i, pa = i, da || (va = clearTimeout(va), da = 1, ya(yt))
    }, vo.timer.flush = function() {
        xt(), bt()
    };
    var Ma = ".", xa = ",", ba = [3, 3], _a = "$", wa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(_t);
    vo.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = vo.round(n, wt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), wa[8 + e / 3]
    }, vo.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    }, vo.format = function(n) {
        var t = Sa.exec(n), e = t[1] || " ", r = t[2] || ">", u = t[3] || "", i = t[4] || "", o = t[5], a = +t[6], c = t[7], l = t[8], s = t[9], f = 1, h = "", g = !1;
        switch (l && (l = +l.substring(1)), (o || "0" === e && "=" === r) && (o = e = "0", r = "=", c && (a -= Math.floor((a - 1) / 4))), s) {
            case "n":
                c = !0, s = "g";
                break;
            case "%":
                f = 100, h = "%", s = "f";
                break;
            case "p":
                f = 100, h = "%", s = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X":
                "#" === i && (i = "0" + s.toLowerCase());
            case "c":
            case "d":
                g = !0, l = 0;
                break;
            case "s":
                f = -1, s = "r"
        }
        "#" === i ? i = "" : "$" === i && (i = _a), "r" != s || l || (s = "g"), null != l && ("g" == s ? l = Math.max(1, Math.min(21, l)) : ("e" == s || "f" == s) && (l = Math.max(0, Math.min(20, l)))), s = Ea.get(s) || St;
        var p = o && c;
        return function(n) {
            if (g && n % 1)
                return "";
            var t = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : u;
            if (0 > f) {
                var d = vo.formatPrefix(n, l);
                n = d.scale(n), h = d.symbol
            } else
                n *= f;
            n = s(n, l);
            var v = n.lastIndexOf("."), m = 0 > v ? n : n.substring(0, v), y = 0 > v ? "" : Ma + n.substring(v + 1);
            !o && c && (m = ka(m));
            var M = i.length + m.length + y.length + (p ? 0 : t.length), x = a > M ? new Array(M = a - M + 1).join(e) : "";
            return p && (m = ka(x + m)), t += i, n = m + y, ("<" === r ? t + n + x : ">" === r ? x + t + n : "^" === r ? x.substring(0, M >>= 1) + t + n + x.substring(M) : t + (p ? n : x + n)) + h
        }
    };
    var Sa = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, Ea = vo.map({b: function(n) {
            return n.toString(2)
        },c: function(n) {
            return String.fromCharCode(n)
        },o: function(n) {
            return n.toString(8)
        },x: function(n) {
            return n.toString(16)
        },X: function(n) {
            return n.toString(16).toUpperCase()
        },g: function(n, t) {
            return n.toPrecision(t)
        },e: function(n, t) {
            return n.toExponential(t)
        },f: function(n, t) {
            return n.toFixed(t)
        },r: function(n, t) {
            return (n = vo.round(n, wt(n, t))).toFixed(Math.max(0, Math.min(20, wt(n * (1 + 1e-15), t))))
        }}), ka = pt;
    if (ba) {
        var Aa = ba.length;
        ka = function(n) {
            for (var t = n.length, e = [], r = 0, u = ba[0]; t > 0 && u > 0; )
                e.push(n.substring(t -= u, t + u)), u = ba[r = (r + 1) % Aa];
            return e.reverse().join(xa)
        }
    }
    vo.geo = {}, Et.prototype = {s: 0,t: 0,add: function(n) {
            kt(n, this.t, Na), kt(Na.s, this.s, this), this.s ? this.t += Na.t : this.s = Na.t
        },reset: function() {
            this.s = this.t = 0
        },valueOf: function() {
            return this.s
        }};
    var Na = new Et;
    vo.geo.stream = function(n, t) {
        n && qa.hasOwnProperty(n.type) ? qa[n.type](n, t) : At(n, t)
    };
    var qa = {Feature: function(n, t) {
            At(n.geometry, t)
        },FeatureCollection: function(n, t) {
            for (var e = n.features, r = -1, u = e.length; ++r < u; )
                At(e[r].geometry, t)
        }}, Ta = {Sphere: function(n, t) {
            t.sphere()
        },Point: function(n, t) {
            n = n.coordinates, t.point(n[0], n[1], n[2])
        },MultiPoint: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                n = e[r], t.point(n[0], n[1], n[2])
        },LineString: function(n, t) {
            Nt(n.coordinates, t, 0)
        },MultiLineString: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                Nt(e[r], t, 0)
        },Polygon: function(n, t) {
            qt(n.coordinates, t)
        },MultiPolygon: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                qt(e[r], t)
        },GeometryCollection: function(n, t) {
            for (var e = n.geometries, r = -1, u = e.length; ++r < u; )
                At(e[r], t)
        }};
    vo.geo.area = function(n) {
        return za = 0, vo.geo.stream(n, Da), za
    };
    var za, Ca = new Et, Da = {sphere: function() {
            za += 4 * Bo
        },point: c,lineStart: c,lineEnd: c,polygonStart: function() {
            Ca.reset(), Da.lineStart = Tt
        },polygonEnd: function() {
            var n = 2 * Ca;
            za += 0 > n ? 4 * Bo + n : n, Da.lineStart = Da.lineEnd = Da.point = c
        }};
    vo.geo.bounds = function() {
        function n(n, t) {
            M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
        }
        function t(t, e) {
            var r = zt([t * Jo, e * Jo]);
            if (m) {
                var u = Dt(m, r), i = [u[1], -u[0], 0], o = Dt(i, u);
                Ht(o), o = Pt(o);
                var c = t - p, l = c > 0 ? 1 : -1, d = o[0] * Go * l, v = Math.abs(c) > 180;
                if (v ^ (d > l * p && l * t > d)) {
                    var y = o[1] * Go;
                    y > g && (g = y)
                } else if (d = (d + 360) % 360 - 180, v ^ (d > l * p && l * t > d)) {
                    var y = -o[1] * Go;
                    f > y && (f = y)
                } else
                    f > e && (f = e), e > g && (g = e);
                v ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
            } else
                n(t, e);
            m = r, p = t
        }
        function e() {
            b.point = t
        }
        function r() {
            x[0] = s, x[1] = h, b.point = n, m = null
        }
        function u(n, e) {
            if (m) {
                var r = n - p;
                y += Math.abs(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else
                d = n, v = e;
            Da.point(n, e), t(n, e)
        }
        function i() {
            Da.lineStart()
        }
        function o() {
            u(d, v), Da.lineEnd(), Math.abs(y) > $o && (s = -(h = 180)), x[0] = s, x[1] = h, m = null
        }
        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }
        function c(n, t) {
            return n[0] - t[0]
        }
        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var s, f, h, g, p, d, v, m, y, M, x, b = {point: n,lineStart: e,lineEnd: r,polygonStart: function() {
                b.point = u, b.lineStart = i, b.lineEnd = o, y = 0, Da.polygonStart()
            },polygonEnd: function() {
                Da.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > Ca ? (s = -(h = 180), f = -(g = 90)) : y > $o ? g = 90 : -$o > y && (f = -90), x[0] = s, x[1] = h
            }};
        return function(n) {
            g = h = -(s = f = 1 / 0), M = [], vo.geo.stream(n, b);
            var t = M.length;
            if (t) {
                M.sort(c);
                for (var e, r = 1, u = M[0], i = [u]; t > r; ++r)
                    e = M[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r)
                    e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1])
            }
            return M = x = null, 1 / 0 === s || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[s, f], [h, g]]
        }
    }(), vo.geo.centroid = function(n) {
        ja = La = Ha = Pa = Fa = Oa = Ra = Ya = Ia = Ua = Va = 0, vo.geo.stream(n, Za);
        var t = Ia, e = Ua, r = Va, u = t * t + e * e + r * r;
        return Wo > u && (t = Oa, e = Ra, r = Ya, $o > La && (t = Ha, e = Pa, r = Fa), u = t * t + e * e + r * r, Wo > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Go, F(r / Math.sqrt(u)) * Go]
    };
    var ja, La, Ha, Pa, Fa, Oa, Ra, Ya, Ia, Ua, Va, Za = {sphere: c,point: Ot,lineStart: Yt,lineEnd: It,polygonStart: function() {
            Za.lineStart = Ut
        },polygonEnd: function() {
            Za.lineStart = Yt
        }}, Xa = Bt(Vt, Kt, ne, te), Ba = [-Bo, 0], $a = 1e9;
    vo.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {stream: function(n) {
                return u && (u.valid = !1), u = i(n), u.valid = !0, u
            },extent: function(a) {
                return arguments.length ? (i = re(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [[n, t], [e, r]]
            }};
        return o.extent([[0, 0], [960, 500]])
    }, (vo.geo.conicEqualArea = function() {
        return oe(ae)
    }).raw = ae, vo.geo.albers = function() {
        return vo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, vo.geo.albersUsa = function() {
        function n(n) {
            var i = n[0], o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
        }
        var t, e, r, u, i = vo.geo.albers(), o = vo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = vo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {point: function(n, e) {
                t = [n, e]
            }};
        return n.invert = function(n) {
            var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
        }, n.stream = function(n) {
            var t = i.stream(n), e = o.stream(n), r = a.stream(n);
            return {point: function(n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u)
                },sphere: function() {
                    t.sphere(), e.sphere(), r.sphere()
                },lineStart: function() {
                    t.lineStart(), e.lineStart(), r.lineStart()
                },lineEnd: function() {
                    t.lineEnd(), e.lineEnd(), r.lineEnd()
                },polygonStart: function() {
                    t.polygonStart(), e.polygonStart(), r.polygonStart()
                },polygonEnd: function() {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }}
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
        }, n.translate = function(t) {
            if (!arguments.length)
                return i.translate();
            var l = i.scale(), s = +t[0], f = +t[1];
            return e = i.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + $o, f + .12 * l + $o], [s - .214 * l - $o, f + .234 * l - $o]]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + $o, f + .166 * l + $o], [s - .115 * l - $o, f + .234 * l - $o]]).stream(c).point, n
        }, n.scale(1070)
    };
    var Wa, Ja, Ga, Ka, Qa, nc, tc = {point: c,lineStart: c,lineEnd: c,polygonStart: function() {
            Ja = 0, tc.lineStart = ce
        },polygonEnd: function() {
            tc.lineStart = tc.lineEnd = tc.point = c, Wa += Math.abs(Ja / 2)
        }}, ec = {point: le,lineStart: c,lineEnd: c,polygonStart: c,polygonEnd: c}, rc = {point: he,lineStart: ge,lineEnd: pe,polygonStart: function() {
            rc.lineStart = de
        },polygonEnd: function() {
            rc.point = he, rc.lineStart = ge, rc.lineEnd = pe
        }};
    vo.geo.transform = function(n) {
        return {stream: function(t) {
                var e = new ye(t);
                for (var r in n)
                    e[r] = n[r];
                return e
            }}
    }, ye.prototype = {point: function(n, t) {
            this.stream.point(n, t)
        },sphere: function() {
            this.stream.sphere()
        },lineStart: function() {
            this.stream.lineStart()
        },lineEnd: function() {
            this.stream.lineEnd()
        },polygonStart: function() {
            this.stream.polygonStart()
        },polygonEnd: function() {
            this.stream.polygonEnd()
        }}, vo.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), vo.geo.stream(n, o)), i.result()
        }
        function t() {
            return o = null, n
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return Wa = 0, vo.geo.stream(n, u(tc)), Wa
        }, n.centroid = function(n) {
            return Ha = Pa = Fa = Oa = Ra = Ya = Ia = Ua = Va = 0, vo.geo.stream(n, u(rc)), Va ? [Ia / Va, Ua / Va] : Ya ? [Oa / Ya, Ra / Ya] : Fa ? [Ha / Fa, Pa / Fa] : [0 / 0, 0 / 0]
        }, n.bounds = function(n) {
            return Qa = nc = -(Ga = Ka = 1 / 0), vo.geo.stream(n, u(ec)), [[Ga, Ka], [Qa, nc]]
        }, n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || Me(n) : pt, t()) : e
        }, n.context = function(n) {
            return arguments.length ? (i = null == (r = n) ? new se : new ve(n), "function" != typeof a && i.pointRadius(a), t()) : r
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
        }, n.projection(vo.geo.albersUsa()).context(null)
    }, vo.geo.projection = xe, vo.geo.projectionMutator = be, (vo.geo.equirectangular = function() {
        return xe(we)
    }).raw = we.invert = we, vo.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * Jo, t[1] * Jo), t[0] *= Go, t[1] *= Go, t
        }
        return n = Se(n[0] % 360 * Jo, n[1] * Jo, n.length > 2 ? n[2] * Jo : 0), t.invert = function(t) {
            return t = n.invert(t[0] * Jo, t[1] * Jo), t[0] *= Go, t[1] *= Go, t
        }, t
    }, vo.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r, t = Se(-n[0] * Jo, -n[1] * Jo, 0).invert, u = [];
            return e(null, null, 1, {point: function(n, e) {
                    u.push(n = t(n, e)), n[0] *= Go, n[1] *= Go
                }}), {type: "Polygon",coordinates: [u]}
        }
        var t, e, r = [0, 0], u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.angle = function(r) {
            return arguments.length ? (e = Ne((t = +r) * Jo, u * Jo), n) : t
        }, n.precision = function(r) {
            return arguments.length ? (e = Ne(t * Jo, (u = +r) * Jo), n) : u
        }, n.angle(90)
    }, vo.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * Jo, u = n[1] * Jo, i = t[1] * Jo, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), l = Math.cos(u), s = Math.sin(i), f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
    }, vo.geo.graticule = function() {
        function n() {
            return {type: "MultiLineString",coordinates: t()}
        }
        function t() {
            return vo.range(Math.ceil(i / v) * v, u, v).map(h).concat(vo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(vo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return Math.abs(n % v) > $o
            }).map(s)).concat(vo.range(Math.ceil(a / d) * d, o, d).filter(function(n) {
                return Math.abs(n % m) > $o
            }).map(f))
        }
        var e, r, u, i, o, a, c, l, s, f, h, g, p = 10, d = p, v = 90, m = 360, y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {type: "LineString",coordinates: n}
            })
        }, n.outline = function() {
            return {type: "Polygon",coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]}
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [[i, l], [u, c]]
        }, n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [[r, a], [e, o]]
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function(t) {
            return arguments.length ? (v = +t[0], m = +t[1], n) : [v, m]
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], d = +t[1], n) : [p, d]
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, s = Te(a, o, 90), f = ze(r, e, y), h = Te(l, c, 90), g = ze(i, u, y), n) : y
        }, n.majorExtent([[-180, -90 + $o], [180, 90 - $o]]).minorExtent([[-180, -80 - $o], [180, 80 + $o]])
    }, vo.geo.greatArc = function() {
        function n() {
            return {type: "LineString",coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]}
        }
        var t, e, r = Ce, u = De;
        return n.distance = function() {
            return vo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
        }, n.source = function(e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
        }, n.target = function(t) {
            return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
        }, n.precision = function() {
            return arguments.length ? n : 0
        }, n
    }, vo.geo.interpolate = function(n, t) {
        return je(n[0] * Jo, n[1] * Jo, t[0] * Jo, t[1] * Jo)
    }, vo.geo.length = function(n) {
        return uc = 0, vo.geo.stream(n, ic), uc
    };
    var uc, ic = {sphere: c,point: c,lineStart: Le,lineEnd: c,polygonStart: c,polygonEnd: c}, oc = He(function(n) {
        return Math.sqrt(2 / (1 + n))
    }, function(n) {
        return 2 * Math.asin(n / 2)
    });
    (vo.geo.azimuthalEqualArea = function() {
        return xe(oc)
    }).raw = oc;
    var ac = He(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, pt);
    (vo.geo.azimuthalEquidistant = function() {
        return xe(ac)
    }).raw = ac, (vo.geo.conicConformal = function() {
        return oe(Pe)
    }).raw = Pe, (vo.geo.conicEquidistant = function() {
        return oe(Fe)
    }).raw = Fe;
    var cc = He(function(n) {
        return 1 / n
    }, Math.atan);
    (vo.geo.gnomonic = function() {
        return xe(cc)
    }).raw = cc, Oe.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - Bo / 2]
    }, (vo.geo.mercator = function() {
        return Re(Oe)
    }).raw = Oe;
    var lc = He(function() {
        return 1
    }, Math.asin);
    (vo.geo.orthographic = function() {
        return xe(lc)
    }).raw = lc;
    var sc = He(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (vo.geo.stereographic = function() {
        return xe(sc)
    }).raw = sc, Ye.invert = function(n, t) {
        return [Math.atan2(O(n), Math.cos(t)), F(Math.sin(t) / R(n))]
    }, (vo.geo.transverseMercator = function() {
        return Re(Ye)
    }).raw = Ye, vo.geom = {}, vo.svg = {}, vo.svg.line = function() {
        return Ie(pt)
    };
    var fc = vo.map({linear: Ze,"linear-closed": Xe,step: Be,"step-before": $e,"step-after": We,basis: tr,"basis-open": er,"basis-closed": rr,bundle: ur,cardinal: Ke,"cardinal-open": Je,"cardinal-closed": Ge,monotone: sr});
    fc.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var hc = [0, 2 / 3, 1 / 3, 0], gc = [0, 1 / 3, 2 / 3, 0], pc = [0, 1 / 6, 2 / 3, 1 / 6];
    vo.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3)
                return [];
            var t, u, i, o, a, c, l, s, f, h, g, p, d = gt(e), v = gt(r), m = n.length, y = m - 1, M = [], x = [], b = 0;
            if (d === Ue && r === Ve)
                t = n;
            else
                for (i = 0, t = []; m > i; ++i)
                    t.push([+d.call(this, u = n[i], i), +v.call(this, u, i)]);
            for (i = 1; m > i; ++i)
                (t[i][1] < t[b][1] || t[i][1] == t[b][1] && t[i][0] < t[b][0]) && (b = i);
            for (i = 0; m > i; ++i)
                i !== b && (c = t[i][1] - t[b][1], a = t[i][0] - t[b][0], M.push({angle: Math.atan2(c, a),index: i}));
            for (M.sort(function(n, t) {
                return n.angle - t.angle
            }), g = M[0].angle, h = M[0].index, f = 0, i = 1; y > i; ++i) {
                if (o = M[i].index, g == M[i].angle) {
                    if (a = t[h][0] - t[b][0], c = t[h][1] - t[b][1], l = t[o][0] - t[b][0], s = t[o][1] - t[b][1], a * a + c * c >= l * l + s * s) {
                        M[i].index = -1;
                        continue
                    }
                    M[f].index = -1
                }
                g = M[i].angle, f = i, h = o
            }
            for (x.push(b), i = 0, o = 0; 2 > i; ++o)
                M[o].index > -1 && (x.push(M[o].index), i++);
            for (p = x.length; y > o; ++o)
                if (!(M[o].index < 0)) {
                    for (; !fr(x[p - 2], x[p - 1], M[o].index, t); )
                        --p;
                    x[p++] = M[o].index
                }
            var _ = [];
            for (i = p - 1; i >= 0; --i)
                _.push(n[x[i]]);
            return _
        }
        var e = Ue, r = Ve;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    }, vo.geom.polygon = function(n) {
        return jo(n, dc), n
    };
    var dc = vo.geom.polygon.prototype = [];
    dc.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e; )
            n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
        return .5 * u
    }, dc.centroid = function(n) {
        var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u; )
            t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [i * n, o * n]
    }, dc.clip = function(n) {
        for (var t, e, r, u, i, o, a = pr(n), c = -1, l = this.length - pr(this), s = this[l - 1]; ++c < l; ) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r; )
                o = t[e], hr(o, s, u) ? (hr(i, s, u) || n.push(gr(i, o, s, u)), n.push(o)) : hr(i, s, u) && n.push(gr(i, o, s, u)), i = o;
            a && n.push(n[0]), s = u
        }
        return n
    }, vo.geom.delaunay = function(n) {
        var t = n.map(function() {
            return []
        }), e = [];
        return dr(n, function(e) {
            t[e.region.l.index].push(n[e.region.r.index])
        }), t.forEach(function(t, r) {
            var u = n[r], i = u[0], o = u[1];
            t.forEach(function(n) {
                n.angle = Math.atan2(n[0] - i, n[1] - o)
            }), t.sort(function(n, t) {
                return n.angle - t.angle
            });
            for (var a = 0, c = t.length - 1; c > a; a++)
                e.push([u, t[a], t[a + 1]])
        }), e
    }, vo.geom.voronoi = function(n) {
        function t(n) {
            var t, i, o, a = n.map(function() {
                return []
            }), c = gt(e), l = gt(r), s = n.length, f = 1e6;
            if (c === Ue && l === Ve)
                t = n;
            else
                for (t = new Array(s), o = 0; s > o; ++o)
                    t[o] = [+c.call(this, i = n[o], o), +l.call(this, i, o)];
            if (dr(t, function(n) {
                var t, e, r, u, i, o;
                1 === n.a && n.b >= 0 ? (t = n.ep.r, e = n.ep.l) : (t = n.ep.l, e = n.ep.r), 1 === n.a ? (i = t ? t.y : -f, r = n.c - n.b * i, o = e ? e.y : f, u = n.c - n.b * o) : (r = t ? t.x : -f, i = n.c - n.a * r, u = e ? e.x : f, o = n.c - n.a * u);
                var c = [r, i], l = [u, o];
                a[n.region.l.index].push(c, l), a[n.region.r.index].push(c, l)
            }), a = a.map(function(n, e) {
                var r = t[e][0], u = t[e][1], i = n.map(function(n) {
                    return Math.atan2(n[0] - r, n[1] - u)
                }), o = vo.range(n.length).sort(function(n, t) {
                    return i[n] - i[t]
                });
                return o.filter(function(n, t) {
                    return !t || i[n] - i[o[t - 1]] > $o
                }).map(function(t) {
                    return n[t]
                })
            }), a.forEach(function(n, e) {
                var r = n.length;
                if (!r)
                    return n.push([-f, -f], [-f, f], [f, f], [f, -f]);
                if (!(r > 2)) {
                    var u = t[e], i = n[0], o = n[1], a = u[0], c = u[1], l = i[0], s = i[1], h = o[0], g = o[1], p = Math.abs(h - l), d = g - s;
                    if (Math.abs(d) < $o) {
                        var v = s > c ? -f : f;
                        n.push([-f, v], [f, v])
                    } else if ($o > p) {
                        var m = l > a ? -f : f;
                        n.push([m, -f], [m, f])
                    } else {
                        var v = (l - a) * (g - s) > (h - l) * (s - c) ? f : -f, y = Math.abs(d) - p;
                        Math.abs(y) < $o ? n.push([0 > d ? v : -v, v]) : (y > 0 && (v *= -1), n.push([-f, v], [f, v]))
                    }
                }
            }), u)
                for (o = 0; s > o; ++o)
                    u.clip(a[o]);
            for (o = 0; s > o; ++o)
                a[o].point = n[o];
            return a
        }
        var e = Ue, r = Ve, u = null;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.clipExtent = function(n) {
            if (!arguments.length)
                return u && [u[0], u[2]];
            if (null == n)
                u = null;
            else {
                var e = +n[0][0], r = +n[0][1], i = +n[1][0], o = +n[1][1];
                u = vo.geom.polygon([[e, r], [e, o], [i, o], [i, r]])
            }
            return t
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [[0, 0], n]) : u && u[2]
        }, t.links = function(n) {
            var t, u, i, o = n.map(function() {
                return []
            }), a = [], c = gt(e), l = gt(r), s = n.length;
            if (c === Ue && l === Ve)
                t = n;
            else
                for (t = new Array(s), i = 0; s > i; ++i)
                    t[i] = [+c.call(this, u = n[i], i), +l.call(this, u, i)];
            return dr(t, function(t) {
                var e = t.region.l.index, r = t.region.r.index;
                o[e][r] || (o[e][r] = o[r][e] = !0, a.push({source: n[e],target: n[r]}))
            }), a
        }, t.triangles = function(n) {
            if (e === Ue && r === Ve)
                return vo.geom.delaunay(n);
            for (var t, u = new Array(c), i = gt(e), o = gt(r), a = -1, c = n.length; ++a < c; )
                (u[a] = [+i.call(this, t = n[a], a), +o.call(this, t, a)]).data = t;
            return vo.geom.delaunay(u).map(function(n) {
                return n.map(function(n) {
                    return n.data
                })
            })
        }, t)
    };
    var vc = {l: "r",r: "l"};
    vo.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x, s = n.y;
                        if (null != c)
                            if (Math.abs(c - e) + Math.abs(s - r) < .01)
                                l(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a)
                            }
                        else
                            n.x = e, n.y = r, n.point = t
                    } else
                        l(n, t, e, r, u, i, o, a)
            }
            function l(n, t, e, r, u, o, a, c) {
                var l = .5 * (u + a), s = .5 * (o + c), f = e >= l, h = r >= s, g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = yr()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c)
            }
            var s, f, h, g, p, d, v, m, y, M = gt(a), x = gt(c);
            if (null != t)
                d = t, v = e, m = r, y = u;
            else if (m = y = -(d = v = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g)
                    s = n[g], s.x < d && (d = s.x), s.y < v && (v = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var b = +M(s = n[g], g), _ = +x(s, g);
                    d > b && (d = b), v > _ && (v = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_)
                }
            var w = m - d, S = y - v;
            w > S ? y = v + w : m = d + S;
            var E = yr();
            if (E.add = function(n) {
                i(E, n, +M(n, ++g), +x(n, g), d, v, m, y)
            }, E.visit = function(n) {
                Mr(n, E, d, v, m, y)
            }, g = -1, null == t) {
                for (; ++g < p; )
                    i(E, n[g], f[g], h[g], d, v, m, y);
                --g
            } else
                n.forEach(E.add);
            return f = h = n = s = null, E
        }
        var o, a = Ue, c = Ve;
        return (o = arguments.length) ? (a = vr, c = mr, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [[t, e], [r, u]]
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
        }, i)
    }, vo.interpolateRgb = xr, vo.interpolateObject = br, vo.interpolateNumber = _r, vo.interpolateString = wr;
    var mc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    vo.interpolate = Sr, vo.interpolators = [function(n, t) {
            var e = typeof t;
            return ("string" === e ? ha.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? xr : wr : t instanceof U ? xr : "object" === e ? Array.isArray(t) ? Er : br : _r)(n, t)
        }], vo.interpolateArray = Er;
    var yc = function() {
        return pt
    }, Mc = vo.map({linear: yc,poly: Cr,quad: function() {
            return qr
        },cubic: function() {
            return Tr
        },sin: function() {
            return Dr
        },exp: function() {
            return jr
        },circle: function() {
            return Lr
        },elastic: Hr,back: Pr,bounce: function() {
            return Fr
        }}), xc = vo.map({"in": pt,out: Ar,"in-out": Nr,"out-in": function(n) {
            return Nr(Ar(n))
        }});
    vo.ease = function(n) {
        var t = n.indexOf("-"), e = t >= 0 ? n.substring(0, t) : n, r = t >= 0 ? n.substring(t + 1) : "in";
        return e = Mc.get(e) || yc, r = xc.get(r) || pt, kr(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, vo.interpolateHcl = Or, vo.interpolateHsl = Rr, vo.interpolateLab = Yr, vo.interpolateRound = Ir, vo.transform = function(n) {
        var t = Mo.createElementNS(vo.ns.prefix.svg, "g");
        return (vo.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Ur(e ? e.matrix : bc)
        })(n)
    }, Ur.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var bc = {a: 1,b: 0,c: 0,d: 1,e: 0,f: 0};
    vo.interpolateTransform = Br, vo.layout = {}, vo.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r; )
                t.push(Jr(n[e]));
            return t
        }
    }, vo.layout.chord = function() {
        function n() {
            var n, l, f, h, g, p = {}, d = [], v = vo.range(i), m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i; ) {
                for (l = 0, g = -1; ++g < i; )
                    l += u[h][g];
                d.push(l), m.push(vo.range(i)), n += l
            }
            for (o && v.sort(function(n, t) {
                return o(d[n], d[t])
            }), a && m.forEach(function(n, t) {
                n.sort(function(n, e) {
                    return a(u[t][n], u[t][e])
                })
            }), n = (2 * Bo - s * i) / n, l = 0, h = -1; ++h < i; ) {
                for (f = l, g = -1; ++g < i; ) {
                    var y = v[h], M = m[y][g], x = u[y][M], b = l, _ = l += x * n;
                    p[y + "-" + M] = {index: y,subindex: M,startAngle: b,endAngle: _,value: x}
                }
                r[y] = {index: y,startAngle: f,endAngle: l,value: (l - f) / n}, l += s
            }
            for (h = -1; ++h < i; )
                for (g = h - 1; ++g < i; ) {
                    var w = p[h + "-" + g], S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {source: S,target: w} : {source: w,target: S})
                }
            c && t()
        }
        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var e, r, u, i, o, a, c, l = {}, s = 0;
        return l.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u
        }, l.padding = function(n) {
            return arguments.length ? (s = n, e = r = null, l) : s
        }, l.sortGroups = function(n) {
            return arguments.length ? (o = n, e = r = null, l) : o
        }, l.sortSubgroups = function(n) {
            return arguments.length ? (a = n, e = null, l) : a
        }, l.sortChords = function(n) {
            return arguments.length ? (c = n, e && t(), l) : c
        }, l.chords = function() {
            return e || n(), e
        }, l.groups = function() {
            return r || n(), r
        }, l
    }, vo.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x, o = t.cy - n.y, a = u - e, c = i * i + o * o;
                    if (c > a * a / v) {
                        if (p > c) {
                            var l = t.charge / c;
                            n.px -= i * l, n.py -= o * l
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var l = t.pointCharge / c;
                        n.px -= i * l, n.py -= o * l
                    }
                }
                return !t.charge
            }
        }
        function t(n) {
            n.px = vo.event.x, n.py = vo.event.y, a.resume()
        }
        var e, r, u, i, o, a = {}, c = vo.dispatch("start", "tick", "end"), l = [1, 1], s = .9, f = _c, h = wc, g = -30, p = Sc, d = .1, v = .8 * .8, m = [], y = [];
        return a.tick = function() {
            if ((r *= .99) < .005)
                return c.end({type: "end",alpha: r = 0}), !0;
            var t, e, a, f, h, p, v, M, x, b = m.length, _ = y.length;
            for (e = 0; _ > e; ++e)
                a = y[e], f = a.source, h = a.target, M = h.x - f.x, x = h.y - f.y, (p = M * M + x * x) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, M *= p, x *= p, h.x -= M * (v = f.weight / (h.weight + f.weight)), h.y -= x * v, f.x += M * (v = 1 - v), f.y += x * v);
            if ((v = r * d) && (M = l[0] / 2, x = l[1] / 2, e = -1, v))
                for (; ++e < b; )
                    a = m[e], a.x += (M - a.x) * v, a.y += (x - a.y) * v;
            if (g)
                for (ru(t = vo.geom.quadtree(m), r, o), e = -1; ++e < b; )
                    (a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < b; )
                a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
            c.tick({type: "tick",alpha: r})
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y
        }, a.size = function(n) {
            return arguments.length ? (l = n, a) : l
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
        }, a.friction = function(n) {
            return arguments.length ? (s = +n, a) : s
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p)
        }, a.gravity = function(n) {
            return arguments.length ? (d = +n, a) : d
        }, a.theta = function(n) {
            return arguments.length ? (v = n * n, a) : Math.sqrt(v)
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({type: "start",alpha: r = n}), vo.timer(a.tick)), a) : r
        }, a.start = function() {
            function n(n, r) {
                for (var u, i = t(e), o = -1, a = i.length; ++o < a; )
                    if (!isNaN(u = i[o][n]))
                        return u;
                return Math.random() * r
            }
            function t() {
                if (!c) {
                    for (c = [], r = 0; p > r; ++r)
                        c[r] = [];
                    for (r = 0; d > r; ++r) {
                        var n = y[r];
                        c[n.source.index].push(n.target), c[n.target.index].push(n.source)
                    }
                }
                return c[e]
            }
            var e, r, c, s, p = m.length, d = y.length, v = l[0], M = l[1];
            for (e = 0; p > e; ++e)
                (s = m[e]).index = e, s.weight = 0;
            for (e = 0; d > e; ++e)
                s = y[e], "number" == typeof s.source && (s.source = m[s.source]), "number" == typeof s.target && (s.target = m[s.target]), ++s.source.weight, ++s.target.weight;
            for (e = 0; p > e; ++e)
                s = m[e], isNaN(s.x) && (s.x = n("x", v)), isNaN(s.y) && (s.y = n("y", M)), isNaN(s.px) && (s.px = s.x), isNaN(s.py) && (s.py = s.y);
            if (u = [], "function" == typeof f)
                for (e = 0; d > e; ++e)
                    u[e] = +f.call(this, y[e], e);
            else
                for (e = 0; d > e; ++e)
                    u[e] = f;
            if (i = [], "function" == typeof h)
                for (e = 0; d > e; ++e)
                    i[e] = +h.call(this, y[e], e);
            else
                for (e = 0; d > e; ++e)
                    i[e] = h;
            if (o = [], "function" == typeof g)
                for (e = 0; p > e; ++e)
                    o[e] = +g.call(this, m[e], e);
            else
                for (e = 0; p > e; ++e)
                    o[e] = g;
            return a.resume()
        }, a.resume = function() {
            return a.alpha(.1)
        }, a.stop = function() {
            return a.alpha(0)
        }, a.drag = function() {
            return e || (e = vo.behavior.drag().origin(pt).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", nu)), arguments.length ? (this.on("mouseover.force", tu).on("mouseout.force", eu).call(e), void 0) : e
        }, vo.rebind(a, c, "on")
    };
    var _c = 20, wc = 1, Sc = 1 / 0;
    vo.layout.hierarchy = function() {
        function n(t, o, a) {
            var c = u.call(e, t, o);
            if (t.depth = o, a.push(t), c && (l = c.length)) {
                for (var l, s, f = -1, h = t.children = [], g = 0, p = o + 1; ++f < l; )
                    s = n(c[f], p, a), s.parent = t, h.push(s), g += s.value;
                r && h.sort(r), i && (t.value = g)
            } else
                i && (t.value = +i.call(e, t, o) || 0);
            return t
        }
        function t(n, r) {
            var u = n.children, o = 0;
            if (u && (a = u.length))
                for (var a, c = -1, l = r + 1; ++c < a; )
                    o += t(u[c], l);
            else
                i && (o = +i.call(e, n, r) || 0);
            return i && (n.value = o), o
        }
        function e(t) {
            var e = [];
            return n(t, 0, e), e
        }
        var r = au, u = iu, i = ou;
        return e.sort = function(n) {
            return arguments.length ? (r = n, e) : r
        }, e.children = function(n) {
            return arguments.length ? (u = n, e) : u
        }, e.value = function(n) {
            return arguments.length ? (i = n, e) : i
        }, e.revalue = function(n) {
            return t(n, 0), n
        }, e
    }, vo.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, l = -1;
                for (r = t.value ? r / t.value : 0; ++l < o; )
                    n(a = i[l], e, c = a.value * r, u), e += c
            }
        }
        function t(n) {
            var e = n.children, r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u; )
                    r = Math.max(r, t(e[i]));
            return 1 + r
        }
        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o
        }
        var r = vo.layout.hierarchy(), u = [1, 1];
        return e.size = function(n) {
            return arguments.length ? (u = n, e) : u
        }, uu(e, r)
    }, vo.layout.pie = function() {
        function n(i) {
            var o = i.map(function(e, r) {
                return +t.call(n, e, r)
            }), a = +("function" == typeof r ? r.apply(this, arguments) : r), c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / vo.sum(o), l = vo.range(i.length);
            null != e && l.sort(e === Ec ? function(n, t) {
                return o[t] - o[n]
            } : function(n, t) {
                return e(i[n], i[t])
            });
            var s = [];
            return l.forEach(function(n) {
                var t;
                s[n] = {data: i[n],value: t = o[n],startAngle: a,endAngle: a += t * c}
            }), s
        }
        var t = Number, e = Ec, r = 0, u = 2 * Bo;
        return n.value = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.sort = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var Ec = {};
    vo.layout.stack = function() {
        function n(a, c) {
            var l = a.map(function(e, r) {
                return t.call(n, e, r)
            }), s = l.map(function(t) {
                return t.map(function(t, e) {
                    return [i.call(n, t, e), o.call(n, t, e)]
                })
            }), f = e.call(n, s, c);
            l = vo.permute(l, f), s = vo.permute(s, f);
            var h, g, p, d = r.call(n, s, c), v = l.length, m = l[0].length;
            for (g = 0; m > g; ++g)
                for (u.call(n, l[0][g], p = d[g], s[0][g][1]), h = 1; v > h; ++h)
                    u.call(n, l[h][g], p += s[h - 1][g][1], s[h][g][1]);
            return a
        }
        var t = pt, e = hu, r = gu, u = fu, i = lu, o = su;
        return n.values = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : kc.get(t) || hu, n) : e
        }, n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : Ac.get(t) || gu, n) : r
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var kc = vo.map({"inside-out": function(n) {
            var t, e, r = n.length, u = n.map(pu), i = n.map(du), o = vo.range(r).sort(function(n, t) {
                return u[n] - u[t]
            }), a = 0, c = 0, l = [], s = [];
            for (t = 0; r > t; ++t)
                e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
            return s.reverse().concat(l)
        },reverse: function(n) {
            return vo.range(n.length).reverse()
        },"default": hu}), Ac = vo.map({silhouette: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
            for (e = 0; i > e; ++e) {
                for (t = 0, r = 0; u > t; t++)
                    r += n[t][e][1];
                r > a && (a = r), o.push(r)
            }
            for (e = 0; i > e; ++e)
                c[e] = (a - o[e]) / 2;
            return c
        },wiggle: function(n) {
            var t, e, r, u, i, o, a, c, l, s = n.length, f = n[0], h = f.length, g = [];
            for (g[0] = c = l = 0, e = 1; h > e; ++e) {
                for (t = 0, u = 0; s > t; ++t)
                    u += n[t][e][1];
                for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                    for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                        o += (n[r][e][1] - n[r][e - 1][1]) / a;
                    i += o * n[t][e][1]
                }
                g[e] = c -= u ? i / u * a : 0, l > c && (l = c)
            }
            for (e = 0; h > e; ++e)
                g[e] -= l;
            return g
        },expand: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
            for (e = 0; i > e; ++e) {
                for (t = 0, r = 0; u > t; t++)
                    r += n[t][e][1];
                if (r)
                    for (t = 0; u > t; t++)
                        n[t][e][1] /= r;
                else
                    for (t = 0; u > t; t++)
                        n[t][e][1] = o
            }
            for (e = 0; i > e; ++e)
                a[e] = 0;
            return a
        },zero: gu});
    vo.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g; )
                o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h; )
                    a = l[i], a >= s[0] && a <= s[1] && (o = c[vo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c
        }
        var t = !0, e = Number, r = Mu, u = mu;
        return n.value = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function(t) {
            return arguments.length ? (r = gt(t), n) : r
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return yu(n, t)
            } : gt(t), n) : u
        }, n.frequency = function(e) {
            return arguments.length ? (t = !!e, n) : t
        }, n
    }, vo.layout.tree = function() {
        function n(n, i) {
            function o(n, t) {
                var r = n.children, u = n._tree;
                if (r && (i = r.length)) {
                    for (var i, a, l, s = r[0], f = s, h = -1; ++h < i; )
                        l = r[h], o(l, a), f = c(l, a, f), a = l;
                    Nu(n);
                    var g = .5 * (s._tree.prelim + l._tree.prelim);
                    t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
                } else
                    t && (u.prelim = t._tree.prelim + e(n, t))
            }
            function a(n, t) {
                n.x = n._tree.prelim + t;
                var e = n.children;
                if (e && (r = e.length)) {
                    var r, u = -1;
                    for (t += n._tree.mod; ++u < r; )
                        a(e[u], t)
                }
            }
            function c(n, t, r) {
                if (t) {
                    for (var u, i = n, o = n, a = t, c = n.parent.children[0], l = i._tree.mod, s = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = _u(a), i = bu(i), a && i; )
                        c = bu(c), o = _u(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - l + e(a, i), u > 0 && (qu(Tu(a, n, r), n, u), l += u, s += u), f += a._tree.mod, l += i._tree.mod, h += c._tree.mod, s += o._tree.mod;
                    a && !_u(o) && (o._tree.thread = a, o._tree.mod += f - s), i && !bu(c) && (c._tree.thread = i, c._tree.mod += l - h, r = n)
                }
                return r
            }
            var l = t.call(this, n, i), s = l[0];
            Au(s, function(n, t) {
                n._tree = {ancestor: n,prelim: 0,mod: 0,change: 0,shift: 0,number: t ? t._tree.number + 1 : 0}
            }), o(s), a(s, -s._tree.prelim);
            var f = wu(s, Eu), h = wu(s, Su), g = wu(s, ku), p = f.x - e(f, h) / 2, d = h.x + e(h, f) / 2, v = g.depth || 1;
            return Au(s, u ? function(n) {
                n.x *= r[0], n.y = n.depth * r[1], delete n._tree
            } : function(n) {
                n.x = (n.x - p) / (d - p) * r[0], n.y = n.depth / v * r[1], delete n._tree
            }), l
        }
        var t = vo.layout.hierarchy().sort(null).value(null), e = xu, r = [1, 1], u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, uu(n, t)
    }, vo.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i), a = o[0], c = u[0], l = u[1], s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                return t
            };
            if (a.x = a.y = 0, Au(a, function(n) {
                n.r = +s(n.value)
            }), Au(a, Lu), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                Au(a, function(n) {
                    n.r += f
                }), Au(a, Lu), Au(a, function(n) {
                    n.r -= f
                })
            }
            return Fu(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
        }
        var t, e = vo.layout.hierarchy().sort(zu), r = 0, u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.radius = function(e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
        }, n.padding = function(t) {
            return arguments.length ? (r = +t, n) : r
        }, uu(n, e)
    }, vo.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i), c = a[0], l = 0;
            Au(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = Yu(t), n.y = Ru(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n)
            });
            var s = Iu(c), f = Uu(c), h = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2;
            return Au(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
            } : function(n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }), a
        }
        var t = vo.layout.hierarchy().sort(null).value(null), e = xu, r = [1, 1], u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, uu(n, t)
    }, vo.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i; )
                r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
        }
        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, l = f(e), s = [], h = i.slice(), p = 1 / 0, d = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0; )
                    s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, d)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, d, l, !1), d = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
                s.length && (u(s, d, l, !0), s.length = s.area = 0), i.forEach(t)
            }
        }
        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t), a = r.slice(), c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop(); )
                    c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }
        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a; )
                (e = n[o].area) && (i > e && (i = e), e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
        }
        function u(n, t, e, r) {
            var u, i = -1, o = n.length, a = e.x, l = e.y, s = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); ++i < o; )
                    u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s
            } else {
                for ((r || s > e.dx) && (s = e.dx); ++i < o; )
                    u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
                u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s
            }
        }
        function i(r) {
            var u = o || a(r), i = u[0];
            return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
        }
        var o, a = vo.layout.hierarchy(), c = Math.round, l = [1, 1], s = null, f = Vu, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Vu(t) : Zu(t, "number" == typeof e ? [e, e, e, e] : e)
            }
            function e(t) {
                return Zu(t, n)
            }
            if (!arguments.length)
                return s;
            var r;
            return f = null == (s = n) ? Vu : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g
        }, uu(i, a)
    }, vo.random = {normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0), function() {
                var e, r, u;
                do
                    e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
                while (!u || u > 1);
                return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
            }
        },logNormal: function() {
            var n = vo.random.normal.apply(vo, arguments);
            return function() {
                return Math.exp(n())
            }
        },irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++)
                    t += Math.random();
                return t / n
            }
        }}, vo.scale = {};
    var Nc = {floor: pt,ceil: pt};
    vo.scale.linear = function() {
        return Ku([0, 1], [0, 1], Sr, !1)
    }, vo.scale.log = function() {
        return ui(vo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var qc = vo.format(".0e"), Tc = {floor: function(n) {
            return -Math.ceil(-n)
        },ceil: function(n) {
            return -Math.floor(-n)
        }};
    vo.scale.pow = function() {
        return ii(vo.scale.linear(), 1, [0, 1])
    }, vo.scale.sqrt = function() {
        return vo.scale.pow().exponent(.5)
    }, vo.scale.ordinal = function() {
        return ai([], {t: "range",a: [[]]})
    }, vo.scale.category10 = function() {
        return vo.scale.ordinal().range(zc)
    }, vo.scale.category20 = function() {
        return vo.scale.ordinal().range(Cc)
    }, vo.scale.category20b = function() {
        return vo.scale.ordinal().range(Dc)
    }, vo.scale.category20c = function() {
        return vo.scale.ordinal().range(jc)
    };
    var zc = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ut), Cc = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ut), Dc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ut), jc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ut);
    vo.scale.quantile = function() {
        return ci([], [])
    }, vo.scale.quantize = function() {
        return li(0, 1, [0, 1])
    }, vo.scale.threshold = function() {
        return si([.5], [0, 1])
    }, vo.scale.identity = function() {
        return fi([0, 1])
    }, vo.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments), i = e.apply(this, arguments), o = r.apply(this, arguments) + Lc, a = u.apply(this, arguments) + Lc, c = (o > a && (c = o, o = a, a = c), a - o), l = Bo > c ? "0" : "1", s = Math.cos(o), f = Math.sin(o), h = Math.cos(a), g = Math.sin(a);
            return c >= Hc ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
        }
        var t = hi, e = gi, r = pi, u = di;
        return n.innerRadius = function(e) {
            return arguments.length ? (t = gt(e), n) : t
        }, n.outerRadius = function(t) {
            return arguments.length ? (e = gt(t), n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = gt(t), n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = gt(t), n) : u
        }, n.centroid = function() {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2, i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + Lc;
            return [Math.cos(i) * n, Math.sin(i) * n]
        }, n
    };
    var Lc = -Bo / 2, Hc = 2 * Bo - 1e-6;
    vo.svg.line.radial = function() {
        var n = Ie(vi);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, $e.reverse = We, We.reverse = $e, vo.svg.area = function() {
        return mi(pt)
    }, vo.svg.area.radial = function() {
        var n = mi(vi);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, vo.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a), l = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
        }
        function t(n, t, e, r) {
            var u = t.call(n, e, r), i = a.call(n, u, r), o = c.call(n, u, r) + Lc, s = l.call(n, u, r) + Lc;
            return {r: i,a0: o,a1: s,p0: [i * Math.cos(o), i * Math.sin(o)],p1: [i * Math.cos(s), i * Math.sin(s)]}
        }
        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }
        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Bo) + ",1 " + t
        }
        function u(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var i = Ce, o = De, a = yi, c = pi, l = di;
        return n.radius = function(t) {
            return arguments.length ? (a = gt(t), n) : a
        }, n.source = function(t) {
            return arguments.length ? (i = gt(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (o = gt(t), n) : o
        }, n.startAngle = function(t) {
            return arguments.length ? (c = gt(t), n) : c
        }, n.endAngle = function(t) {
            return arguments.length ? (l = gt(t), n) : l
        }, n
    }, vo.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u), o = e.call(this, n, u), a = (i.y + o.y) / 2, c = [i, {x: i.x,y: a}, {x: o.x,y: a}, o];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = Ce, e = De, r = Mi;
        return n.source = function(e) {
            return arguments.length ? (t = gt(e), n) : t
        }, n.target = function(t) {
            return arguments.length ? (e = gt(t), n) : e
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n
    }, vo.svg.diagonal.radial = function() {
        var n = vo.svg.diagonal(), t = Mi, e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(xi(t = n)) : t
        }, n
    }, vo.svg.symbol = function() {
        function n(n, r) {
            return (Pc.get(t.call(this, n, r)) || wi)(e.call(this, n, r))
        }
        var t = _i, e = bi;
        return n.type = function(e) {
            return arguments.length ? (t = gt(e), n) : t
        }, n.size = function(t) {
            return arguments.length ? (e = gt(t), n) : e
        }, n
    };
    var Pc = vo.map({circle: wi,cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },diamond: function(n) {
            var t = Math.sqrt(n / (2 * Yc)), e = t * Yc;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        },square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },"triangle-down": function(n) {
            var t = Math.sqrt(n / Rc), e = t * Rc / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        },"triangle-up": function(n) {
            var t = Math.sqrt(n / Rc), e = t * Rc / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }});
    vo.svg.symbolTypes = Pc.keys();
    var Fc, Oc, Rc = Math.sqrt(3), Yc = Math.tan(30 * Jo), Ic = [], Uc = 0;
    Ic.call = Oo.call, Ic.empty = Oo.empty, Ic.node = Oo.node, Ic.size = Oo.size, vo.transition = function(n) {
        return arguments.length ? Fc ? n.transition() : n : Io.transition()
    }, vo.transition.prototype = Ic, Oo.transition = function() {
        for (var n, t, e = Fc || ++Uc, r = [], u = Oc || {time: Date.now(),ease: zr,delay: 0,duration: 250}, i = -1, o = this.length; ++i < o; ) {
            r.push(n = []);
            for (var a = this[i], c = -1, l = a.length; ++c < l; )
                (t = a[c]) && Ni(t, c, e, u), n.push(t)
        }
        return Si(r, e)
    }, Oo.interrupt = function() {
        return this.each(Ei)
    }, Ic.select = function(n) {
        var t, e, r, u = this.id, i = [];
        n = d(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []);
            for (var c = this[o], l = -1, s = c.length; ++l < s; )
                (r = c[l]) && (e = n.call(r, r.__data__, l, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Ni(e, l, u, r.__transition__[u]), t.push(e)) : t.push(null)
        }
        return Si(i, u)
    }, Ic.selectAll = function(n) {
        var t, e, r, u, i, o = this.id, a = [];
        n = v(n);
        for (var c = -1, l = this.length; ++c < l; )
            for (var s = this[c], f = -1, h = s.length; ++f < h; )
                if (r = s[f]) {
                    i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
                    for (var g = -1, p = e.length; ++g < p; )
                        (u = e[g]) && Ni(u, g, o, i), t.push(u)
                }
        return Si(a, o)
    }, Ic.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = k(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a) && t.push(r)
        }
        return Si(u, this.id)
    }, Ic.tween = function(n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : N(this, null == t ? function(t) {
            t.__transition__[e].tween.remove(n)
        } : function(r) {
            r.__transition__[e].tween.set(n, t)
        })
    }, Ic.attr = function(n, t) {
        function e() {
            this.removeAttribute(a)
        }
        function r() {
            this.removeAttributeNS(a.space, a.local)
        }
        function u(n) {
            return null == n ? e : (n += "", function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttribute(a, t(n))
                })
            })
        }
        function i(n) {
            return null == n ? r : (n += "", function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n)
                this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Br : Sr, a = vo.ns.qualify(n);
        return ki(this, "attr." + n, t, a.local ? i : u)
    }, Ic.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n))
            }
        }
        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n))
            }
        }
        var u = vo.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e)
    }, Ic.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }
        function u(t) {
            return null == t ? r : (t += "", function() {
                var r, u = bo.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = Sr(u, t), function(t) {
                    this.style.setProperty(n, r(t), e)
                })
            })
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n)
                    this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return ki(this, "style." + n, t, u)
    }, Ic.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, bo.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
    }, Ic.text = function(n) {
        return ki(this, "text", n, Ai)
    }, Ic.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        })
    }, Ic.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = vo.ease.apply(vo, arguments)), N(this, function(e) {
            e.__transition__[t].ease = n
        }))
    }, Ic.delay = function(n) {
        var t = this.id;
        return N(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
        } : (n = +n, function(e) {
            e.__transition__[t].delay = n
        }))
    }, Ic.duration = function(n) {
        var t = this.id;
        return N(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
        } : (n = Math.max(1, n), function(e) {
            e.__transition__[t].duration = n
        }))
    }, Ic.each = function(n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Oc, u = Fc;
            Fc = e, N(this, function(t, r, u) {
                Oc = t.__transition__[e], n.call(t, t.__data__, r, u)
            }), Oc = r, Fc = u
        } else
            N(this, function(r) {
                var u = r.__transition__[e];
                (u.event || (u.event = vo.dispatch("start", "end"))).on(n, t)
            });
        return this
    }, Ic.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++Uc, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], l = 0, s = t.length; s > l; l++)
                (e = t[l]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Ni(e, l, i, r)), n.push(e)
        }
        return Si(o, i)
    }, vo.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, l = vo.select(this), s = null == c ? e.ticks ? e.ticks.apply(e, a) : e.domain() : c, f = null == t ? e.tickFormat ? e.tickFormat.apply(e, a) : pt : t, h = l.selectAll(".tick.major").data(s, pt), g = h.enter().insert("g", ".domain").attr("class", "tick major").style("opacity", 1e-6), p = vo.transition(h.exit()).style("opacity", 1e-6).remove(), d = vo.transition(h).style("opacity", 1), v = Bu(e), m = l.selectAll(".domain").data([0]), y = (m.enter().append("path").attr("class", "domain"), vo.transition(m)), M = e.copy(), x = this.__chart__ || M;
                this.__chart__ = M, g.append("line"), g.append("text");
                var b = g.select("line"), _ = d.select("line"), w = h.select("text").text(f), S = g.select("text"), E = d.select("text");
                switch (r) {
                    case "bottom":
                        n = qi, b.attr("y2", u), S.attr("y", Math.max(u, 0) + o), _.attr("x2", 0).attr("y2", u), E.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), y.attr("d", "M" + v[0] + "," + i + "V0H" + v[1] + "V" + i);
                        break;
                    case "top":
                        n = qi, b.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), _.attr("x2", 0).attr("y2", -u), E.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), y.attr("d", "M" + v[0] + "," + -i + "V0H" + v[1] + "V" + -i);
                        break;
                    case "left":
                        n = Ti, b.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), _.attr("x2", -u).attr("y2", 0), E.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), y.attr("d", "M" + -i + "," + v[0] + "H0V" + v[1] + "H" + -i);
                        break;
                    case "right":
                        n = Ti, b.attr("x2", u), S.attr("x", Math.max(u, 0) + o), _.attr("x2", u).attr("y2", 0), E.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), y.attr("d", "M" + i + "," + v[0] + "H0V" + v[1] + "H" + i)
                }
                if (e.rangeBand) {
                    var k = M.rangeBand() / 2, A = function(n) {
                        return M(n) + k
                    };
                    g.call(n, A), d.call(n, A)
                } else
                    g.call(n, x), d.call(n, M), p.call(n, M)
            })
        }
        var t, e = vo.scale.linear(), r = Vc, u = 6, i = 6, o = 3, a = [10], c = null;
        return n.scale = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.orient = function(t) {
            return arguments.length ? (r = t in Zc ? t + "" : Vc, n) : r
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c
        }, n.tickFormat = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function() {
            return arguments.length && n
        }, n
    };
    var Vc = "bottom", Zc = {top: 1,right: 1,bottom: 1,left: 1};
    vo.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = vo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u), o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(v, pt);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return Xc[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var s, f = vo.transition(i), h = vo.transition(o);
                c && (s = Bu(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), e(f)), l && (s = Bu(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), t(f)
            })
        }
        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"
            })
        }
        function e(n) {
            n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0])
        }
        function r(n) {
            n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
        }
        function u() {
            function u() {
                var n = vo.event.changedTouches;
                return n ? vo.touches(_, n)[0] : vo.mouse(_)
            }
            function g() {
                32 == vo.event.keyCode && (q || (x = null, z[0] -= s[1], z[1] -= h[1], q = 2), f())
            }
            function v() {
                32 == vo.event.keyCode && 2 == q && (z[0] += s[1], z[1] += h[1], q = 0, f())
            }
            function m() {
                var n = u(), i = !1;
                b && (n[0] += b[0], n[1] += b[1]), q || (vo.event.altKey ? (x || (x = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]), z[0] = s[+(n[0] < x[0])], z[1] = h[+(n[1] < x[1])]) : x = null), A && y(n, c, 0) && (e(E), i = !0), N && y(n, l, 1) && (r(E), i = !0), i && (t(E), S({type: "brush",mode: q ? "move" : "resize"}))
            }
            function y(n, t, e) {
                var r, u, a = Bu(t), c = a[0], l = a[1], f = z[e], g = e ? h : s, v = g[1] - g[0];
                return q && (c -= f, l -= v + f), r = (e ? d : p) ? Math.max(c, Math.min(l, n[e])) : n[e], q ? u = (r += f) + v : (x && (f = Math.max(c, Math.min(l, 2 * x[e] - r))), r > f ? (u = r, r = f) : u = f), g[0] != r || g[1] != u ? (e ? o = null : i = null, g[0] = r, g[1] = u, !0) : void 0
            }
            function M() {
                m(), E.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), vo.select("body").style("cursor", null), C.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), T(), S({type: "brushend"})
            }
            var x, b, _ = this, w = vo.select(vo.event.target), S = a.of(_, arguments), E = vo.select(_), k = w.datum(), A = !/^(n|s)$/.test(k) && c, N = !/^(e|w)$/.test(k) && l, q = w.classed("extent"), T = j(), z = u(), C = vo.select(bo).on("keydown.brush", g).on("keyup.brush", v);
            if (vo.event.changedTouches ? C.on("touchmove.brush", m).on("touchend.brush", M) : C.on("mousemove.brush", m).on("mouseup.brush", M), E.interrupt().selectAll("*").interrupt(), q)
                z[0] = s[0] - z[0], z[1] = h[0] - z[1];
            else if (k) {
                var D = +/w$/.test(k), L = +/^n/.test(k);
                b = [s[1 - D] - z[0], h[1 - L] - z[1]], z[0] = s[D], z[1] = h[L]
            } else
                vo.event.altKey && (x = z.slice());
            E.style("pointer-events", "none").selectAll(".resize").style("display", null), vo.select("body").style("cursor", w.style("cursor")), S({type: "brushstart"}), m()
        }
        var i, o, a = g(n, "brushstart", "brush", "brushend"), c = null, l = null, s = [0, 0], h = [0, 0], p = !0, d = !0, v = Bc[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments), t = {x: s,y: h,i: i,j: o}, e = this.__chart__ || t;
                this.__chart__ = t, Fc ? vo.select(this).transition().each("start.brush", function() {
                    i = e.i, o = e.j, s = e.x, h = e.y, n({type: "brushstart"})
                }).tween("brush:brush", function() {
                    var e = Er(s, t.x), r = Er(h, t.y);
                    return i = o = null, function(u) {
                        s = t.x = e(u), h = t.y = r(u), n({type: "brush",mode: "resize"})
                    }
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({type: "brush",mode: "resize"}), n({type: "brushend"})
                }) : (n({type: "brushstart"}), n({type: "brush",mode: "resize"}), n({type: "brushend"}))
            })
        }, n.x = function(t) {
            return arguments.length ? (c = t, v = Bc[!c << 1 | !l], n) : c
        }, n.y = function(t) {
            return arguments.length ? (l = t, v = Bc[!c << 1 | !l], n) : l
        }, n.clamp = function(t) {
            return arguments.length ? (c && l ? (p = !!t[0], d = !!t[1]) : c ? p = !!t : l && (d = !!t), n) : c && l ? [p, d] : c ? p : l ? d : null
        }, n.extent = function(t) {
            var e, r, u, a, f;
            return arguments.length ? (c && (e = t[0], r = t[1], l && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (f = e, e = r, r = f), (e != s[0] || r != s[1]) && (s = [e, r])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], l.invert && (u = l(u), a = l(a)), u > a && (f = u, u = a, a = f), (u != h[0] || a != h[1]) && (h = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (f = e, e = r, r = f))), l && (o ? (u = o[0], a = o[1]) : (u = h[0], a = h[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (f = u, u = a, a = f))), c && l ? [[e, u], [r, a]] : c ? [e, r] : l && [u, a])
        }, n.clear = function() {
            return n.empty() || (s = [0, 0], h = [0, 0], i = o = null), n
        }, n.empty = function() {
            return !!c && s[0] == s[1] || !!l && h[0] == h[1]
        }, vo.rebind(n, a, "on")
    };
    var Xc = {n: "ns-resize",e: "ew-resize",s: "ns-resize",w: "ew-resize",nw: "nwse-resize",ne: "nesw-resize",se: "nwse-resize",sw: "nesw-resize"}, Bc = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], $c = vo.time = {}, Wc = Date, Jc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    zi.prototype = {getDate: function() {
            return this._.getUTCDate()
        },getDay: function() {
            return this._.getUTCDay()
        },getFullYear: function() {
            return this._.getUTCFullYear()
        },getHours: function() {
            return this._.getUTCHours()
        },getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },getMinutes: function() {
            return this._.getUTCMinutes()
        },getMonth: function() {
            return this._.getUTCMonth()
        },getSeconds: function() {
            return this._.getUTCSeconds()
        },getTime: function() {
            return this._.getTime()
        },getTimezoneOffset: function() {
            return 0
        },valueOf: function() {
            return this._.valueOf()
        },setDate: function() {
            Gc.setUTCDate.apply(this._, arguments)
        },setDay: function() {
            Gc.setUTCDay.apply(this._, arguments)
        },setFullYear: function() {
            Gc.setUTCFullYear.apply(this._, arguments)
        },setHours: function() {
            Gc.setUTCHours.apply(this._, arguments)
        },setMilliseconds: function() {
            Gc.setUTCMilliseconds.apply(this._, arguments)
        },setMinutes: function() {
            Gc.setUTCMinutes.apply(this._, arguments)
        },setMonth: function() {
            Gc.setUTCMonth.apply(this._, arguments)
        },setSeconds: function() {
            Gc.setUTCSeconds.apply(this._, arguments)
        },setTime: function() {
            Gc.setTime.apply(this._, arguments)
        }};
    var Gc = Date.prototype, Kc = "%a %b %e %X %Y", Qc = "%m/%d/%Y", nl = "%H:%M:%S", tl = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], el = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], rl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], ul = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $c.year = Ci(function(n) {
        return n = $c.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    }), $c.years = $c.year.range, $c.years.utc = $c.year.utc.range, $c.day = Ci(function(n) {
        var t = new Wc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    }), $c.days = $c.day.range, $c.days.utc = $c.day.utc.range, $c.dayOfYear = function(n) {
        var t = $c.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, Jc.forEach(function(n, t) {
        n = n.toLowerCase(), t = 7 - t;
        var e = $c[n] = Ci(function(n) {
            return (n = $c.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var e = $c.year(n).getDay();
            return Math.floor(($c.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        });
        $c[n + "s"] = e.range, $c[n + "s"].utc = e.utc.range, $c[n + "OfYear"] = function(n) {
            var e = $c.year(n).getDay();
            return Math.floor(($c.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }), $c.week = $c.sunday, $c.weeks = $c.sunday.range, $c.weeks.utc = $c.sunday.utc.range, $c.weekOfYear = $c.sundayOfYear, $c.format = ji;
    var il = Hi(tl), ol = Pi(tl), al = Hi(el), cl = Pi(el), ll = Hi(rl), sl = Pi(rl), fl = Hi(ul), hl = Pi(ul), gl = /^%/, pl = {"-": "",_: " ",0: "0"}, dl = {a: function(n) {
            return el[n.getDay()]
        },A: function(n) {
            return tl[n.getDay()]
        },b: function(n) {
            return ul[n.getMonth()]
        },B: function(n) {
            return rl[n.getMonth()]
        },c: ji(Kc),d: function(n, t) {
            return Fi(n.getDate(), t, 2)
        },e: function(n, t) {
            return Fi(n.getDate(), t, 2)
        },H: function(n, t) {
            return Fi(n.getHours(), t, 2)
        },I: function(n, t) {
            return Fi(n.getHours() % 12 || 12, t, 2)
        },j: function(n, t) {
            return Fi(1 + $c.dayOfYear(n), t, 3)
        },L: function(n, t) {
            return Fi(n.getMilliseconds(), t, 3)
        },m: function(n, t) {
            return Fi(n.getMonth() + 1, t, 2)
        },M: function(n, t) {
            return Fi(n.getMinutes(), t, 2)
        },p: function(n) {
            return n.getHours() >= 12 ? "PM" : "AM"
        },S: function(n, t) {
            return Fi(n.getSeconds(), t, 2)
        },U: function(n, t) {
            return Fi($c.sundayOfYear(n), t, 2)
        },w: function(n) {
            return n.getDay()
        },W: function(n, t) {
            return Fi($c.mondayOfYear(n), t, 2)
        },x: ji(Qc),X: ji(nl),y: function(n, t) {
            return Fi(n.getFullYear() % 100, t, 2)
        },Y: function(n, t) {
            return Fi(n.getFullYear() % 1e4, t, 4)
        },Z: oo,"%": function() {
            return "%"
        }}, vl = {a: Oi,A: Ri,b: Vi,B: Zi,c: Xi,d: Qi,e: Qi,H: to,I: to,j: no,L: uo,m: Ki,M: eo,p: io,S: ro,U: Ii,w: Yi,W: Ui,x: Bi,X: $i,y: Ji,Y: Wi,"%": ao}, ml = /^\s*\d+/, yl = vo.map({am: 0,pm: 1});
    ji.utc = co;
    var Ml = co("%Y-%m-%dT%H:%M:%S.%LZ");
    ji.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? lo : Ml, lo.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, lo.toString = Ml.toString, $c.second = Ci(function(n) {
        return new Wc(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    }), $c.seconds = $c.second.range, $c.seconds.utc = $c.second.utc.range, $c.minute = Ci(function(n) {
        return new Wc(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    }), $c.minutes = $c.minute.range, $c.minutes.utc = $c.minute.utc.range, $c.hour = Ci(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new Wc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    }), $c.hours = $c.hour.range, $c.hours.utc = $c.hour.utc.range, $c.month = Ci(function(n) {
        return n = $c.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    }), $c.months = $c.month.range, $c.months.utc = $c.month.utc.range;
    var xl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], bl = [[$c.second, 1], [$c.second, 5], [$c.second, 15], [$c.second, 30], [$c.minute, 1], [$c.minute, 5], [$c.minute, 15], [$c.minute, 30], [$c.hour, 1], [$c.hour, 3], [$c.hour, 6], [$c.hour, 12], [$c.day, 1], [$c.day, 2], [$c.week, 1], [$c.month, 1], [$c.month, 3], [$c.year, 1]], _l = [[ji("%Y"), Vt], [ji("%B"), function(n) {
                return n.getMonth()
            }], [ji("%b %d"), function(n) {
                return 1 != n.getDate()
            }], [ji("%a %d"), function(n) {
                return n.getDay() && 1 != n.getDate()
            }], [ji("%I %p"), function(n) {
                return n.getHours()
            }], [ji("%I:%M"), function(n) {
                return n.getMinutes()
            }], [ji(":%S"), function(n) {
                return n.getSeconds()
            }], [ji(".%L"), function(n) {
                return n.getMilliseconds()
            }]], wl = ho(_l);
    bl.year = $c.year, $c.scale = function() {
        return so(vo.scale.linear(), bl, wl)
    };
    var Sl = {range: function(n, t, e) {
            return vo.range(+n, +t, e).map(fo)
        }}, El = bl.map(function(n) {
        return [n[0].utc, n[1]]
    }), kl = [[co("%Y"), Vt], [co("%B"), function(n) {
                return n.getUTCMonth()
            }], [co("%b %d"), function(n) {
                return 1 != n.getUTCDate()
            }], [co("%a %d"), function(n) {
                return n.getUTCDay() && 1 != n.getUTCDate()
            }], [co("%I %p"), function(n) {
                return n.getUTCHours()
            }], [co("%I:%M"), function(n) {
                return n.getUTCMinutes()
            }], [co(":%S"), function(n) {
                return n.getUTCSeconds()
            }], [co(".%L"), function(n) {
                return n.getUTCMilliseconds()
            }]], Al = ho(kl);
    return El.year = $c.year.utc, $c.scale.utc = function() {
        return so(vo.scale.linear(), El, Al)
    }, vo.text = dt(function(n) {
        return n.responseText
    }), vo.json = function(n, t) {
        return vt(n, "application/json", go, t)
    }, vo.html = function(n, t) {
        return vt(n, "text/html", po, t)
    }, vo.xml = dt(function(n) {
        return n.responseXML
    }), vo
}(), function() {
    function n(n) {
        function r() {
            for (; a = s < l.length && n > f; ) {
                var t = s++, r = l[t], i = e.call(r, 1);
                i.push(u(t)), ++f, r[0].apply(null, i)
            }
        }
        function u(n) {
            return function(t, e) {
                --f, null == g && (null != t ? (g = t, s = h = 0 / 0, i()) : (l[n] = e, --h ? a || r() : i()))
            }
        }
        function i() {
            null != g ? p(g) : c ? p(g, l) : p.apply(null, [g].concat(l))
        }
        var o, a, c, l = [], s = 0, f = 0, h = 0, g = null, p = t;
        return n || (n = 1 / 0), o = {defer: function() {
                return g || (l.push(arguments), ++h, r()), o
            },await: function(n) {
                return p = n, c = !1, h || i(), o
            },awaitAll: function(n) {
                return p = n, c = !0, h || i(), o
            }}
    }
    function t() {
    }
    "undefined" == typeof module ? self.queue = n : module.exports = n, n.version = "1.0.4";
    var e = [].slice
}();