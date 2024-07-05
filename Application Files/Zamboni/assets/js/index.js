(function () {
    var h = void 0,
        i = !0,
        k = null,
        l = !1,
        m, aa = this,
        ba = function (a) {
            a = a.split(".");
            var b = aa;
            !(a[0] in b) && b.execScript && b.execScript("var " + a[0]);
            for (var c; a.length && (c = a.shift());) !a.length ? b[c] = i : b = b[c] ? b[c] : b[c] = {}
        },
        ca = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        da = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        ea = 0,
        fa = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments,
                    2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        ja = function (a, b, c) {
            ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ia;
            return ja.apply(k, arguments)
        },
        ka = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Va = b.prototype;
            a.prototype = new c
        };
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return ja.apply(k, c)
        }
        return ja(this, a)
    };
    var la = function (a, b, c) {
            a = Math.min(1, Math.max(0, a));
            return b + (a + Math.abs(Math.sin(2 * a * Math.PI)) * (1 - a)) * (c - b)
        },
        ma = function (a) {
            a.getContext("2d").clearRect(0, 0, a.width, a.height)
        },
        na = function (a, b, c) {
            a = Math.pow(a, 0.33);
            return q(a, b, c)
        },
        oa = function () {
            return (new Date).getTime()
        },
        pa = function (a) {
            if (window.localStorage) {
                if (a = window.localStorage.getItem(a))
                    if (a = a.toLowerCase(), "0" != a && "no" != a && "false" != a) return i;
                if (a != k) return l
            }
            return k
        },
        q = function (a, b, c) {
            return b + Math.min(1, Math.max(0, a)) * (c - b)
        },
        qa = function (a,
            b) {
            var c = a / b,
                c = 0 > c ? Math.ceil(c) : Math.floor(c);
            return a - c * b
        },
        ra = function (a) {
            a: {
                for (var b = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], c = 0; c < b.length; c++) {
                    var d = window[b[c]];
                    if (d) {
                        ra = ja(d, window);
                        break a
                    }
                }
                ra = function (a) {
                    window.setTimeout(a, 17)
                }
            }
            return ra(a)
        },
        sa = function (a) {
            var b = r,
                c = Math.max(0, a - 207) + "px";
            b.style.width = "650px";
            b.style.height = a + "px";
            if (a = document.getElementById("lga")) a.style.marginBottom = c;
            if (a =
                document.getElementById("searchform") || document.getElementById("gbq2")) a.style.marginTop = c;
            c = document.createEvent("UIEvents");
            c.initUIEvent("resize", l, l, window, 0);
            window.dispatchEvent(c)
        };
    var ta = l,
        t = function () {
            this.Ga = this.Fa = this.s = 0;
            this.va = []
        };
    t.prototype.play = function () {
        ta || (this.stop(), this.Fa = 0, this.Ga = oa(), this.s = window.setInterval(ja(this.Za, this), 16), this.Za())
    };
    var u = function (a, b, c) {
        a.va.push({
            duration: c || 0,
            wa: b
        })
    };
    t.prototype.stop = function () {
        if (this.s) {
            for (var a; a = this.va[this.Fa++];) a.wa(1);
            window.clearInterval(this.s);
            this.s = 0
        }
    };
    var v = function (a, b) {
        u(a, function () {}, b)
    };
    t.prototype.Za = function () {
        var a = oa();
        if (!ta)
            for (var b; b = this.va[this.Fa]; this.Fa++) {
                var c = a - this.Ga;
                if (c < b.duration) {
                    b.wa(c / b.duration);
                    return
                }
                b.wa(1);
                0 < b.duration && (this.Ga += b.duration)
            }
        this.stop()
    };
    var w = function (a, b, c, d, e, f, g, j) {
        this.reset = function () {
            this.xa = this.p = 0;
            this.ra = "source-over";
            this.T = this.frame = 0;
            this.offsetX = g || 0;
            this.offsetY = j || 0;
            this.F = this.i = this.opacity = 1;
            this.J = this.La = 0;
            this.k = f;
            this.D = e;
            this.Ja = c || 0;
            this.L = d || 0;
            this.S = this.R = k;
            this.y = this.x = 0;
            this.ta = a;
            this.la = this.Na = this.ka = this.Ma = 0;
            this.V = a.getContext("2d");
            this.ma = k;
            this.N = b
        };
        this.reset()
    };
    w.prototype.clip = function (a, b, c, d) {
        var e = this.x + this.offsetX * this.i,
            f = Math.max(0, a - e);
        a = Math.max(0, e + this.getWidth() - a - c);
        0 < this.i ? (this.ka = f, this.Na = a) : (this.ka = a, this.Na = f);
        a = this.y + this.offsetY * this.F;
        f = Math.max(0, b - a);
        b = Math.max(0, a + this.getHeight() - b - d);
        0 < this.F ? (this.la = f, this.Ma = b) : (this.la = b, this.Ma = f)
    };
    w.prototype.o = function () {
        var a = new w(this.ta, this.N, this.Ja, this.L, this.D, this.k, this.offsetX, this.offsetY);
        a.xa = this.xa;
        a.p = this.p;
        a.frame = this.frame;
        a.T = this.T;
        a.opacity = this.opacity;
        a.i = this.i;
        a.F = this.F;
        a.La = this.La;
        a.J = this.J;
        a.R = this.R;
        a.S = this.S;
        a.x = this.x;
        a.y = this.y;
        return a
    };
    var ua = function (a, b, c) {
            var d = new t;
            c /= b;
            for (var e = function (a, b) {
                    return function () {
                        a.frame = b
                    }
                }, f = 0; f < b; f++) u(d, e(a, f), c);
            return d
        },
        va = function (a, b, c) {
            var d = a.x + a.offsetX,
                e = a.y + a.offsetY;
            return b >= d && b < d + a.getWidth() && c >= e && c < e + a.getHeight()
        };
    w.prototype.a = function () {
        if (!this.N.complete && "complete" != this.N.readyState || !this.opacity) return l;
        this.D || (this.D = this.N.width);
        this.k || (this.k = this.N.height);
        var a = this.getWidth(),
            b = this.getHeight();
        if (!a || !b) return l;
        var c = this.p ? 0.2071 * Math.max(a, b) : 0,
            d = this.x + this.offsetX,
            e = this.y + this.offsetY;
        if (0 >= d + a + c || 0 >= e + b + c || d - c > this.ta.width || e - c > this.ta.height) return l;
        this.V.save();
        this.V.globalAlpha = this.opacity;
        this.V.globalCompositeOperation = this.ra;
        e = this.p;
        this.xa && (e += this.xa * (Math.random() -
            0.5));
        c = 0;
        d = 1;
        e && (c = Math.sin(e), d = Math.cos(e));
        var f = (0 > this.i ? -a : a) / 2,
            g = (0 > this.F ? -b : b) / 2,
            e = this.x + f - d * f + c * g,
            f = this.y + g - d * g - c * f;
        this.T && (e += this.T * (Math.random() - 0.5), f += this.T * (Math.random() - 0.5));
        0 > this.i && (e += a);
        0 > this.F && (f += b);
        var g = this.La / b,
            j = this.J / a;
        this.V.transform(this.i * (d - j * c), this.i * (j * d + c), this.F * (g * d - c), this.F * (d + g * c), e, f);
        try {
            if (this.S || this.R)
                for (var n = this.D * this.i, p = this.k * this.F, s = Math.ceil(a / n), A = Math.ceil(b / p), ga = qa(a, n) || n, ha = qa(b, p) || p, a = 0; a < A; a++)
                    for (b = 0; b < s; b++) wa(this,
                        b * this.D, a * this.k, b == s - 1 ? ga : this.D, a == A - 1 ? ha : this.k);
            else wa(this, 0, 0, this.D, this.k)
        } catch (Pf) {}
        this.V.restore();
        return i
    };
    var xa = function (a, b, c, d) {
        d == h && (d = a.opacity);
        if (d == c) a.opacity = c;
        else {
            a.ma && a.ma.stop();
            a.ma = new t;
            var e = a.ma,
                f = d;
            d = ja(function (a) {
                this.opacity = q(a, f, c)
            }, a);
            u(e, d, b);
            a.ma.play()
        }
    };
    w.prototype.getHeight = function () {
        if (this.R != h) return this.R;
        this.k || (this.k = this.N.height);
        return this.k * Math.abs(this.F)
    };
    w.prototype.getWidth = function () {
        if (this.S != h) return this.S;
        this.D || (this.D = this.N.width);
        return this.D * Math.abs(this.i)
    };
    var wa = function (a, b, c, d, e) {
        var f = a.Ja + a.ka,
            g = a.L + a.la;
        d = d - a.Na - a.ka;
        e = e - a.Ma - a.la;
        0 > d || 0 > e || a.V.drawImage(a.N, f + a.frame * a.D, g, d, e, a.ka + a.offsetX + b, a.la + a.offsetY + c, d, e)
    };
    var ya = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, ya) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    ka(ya, Error);
    var za = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    };
    var Aa = function (a, b) {
        b.unshift(a);
        ya.call(this, za.apply(k, b));
        b.shift()
    };
    ka(Aa, ya);
    var Ba = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (b) var e = e + (": " + b),
                f = d;
            throw new Aa("" + e, f || []);
        }
    };
    var Ca = Array.prototype,
        Da = Ca.indexOf ? function (a, b, c) {
            Ba(a.length != k);
            return Ca.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
    var Ea = function () {};
    var Fa, Ga, Ha, Ia, Ja = function () {
        return aa.navigator ? aa.navigator.userAgent : k
    };
    Ia = Ha = Ga = Fa = l;
    var Ka;
    if (Ka = Ja()) {
        var La = aa.navigator;
        Fa = 0 == Ka.indexOf("Opera");
        Ga = !Fa && -1 != Ka.indexOf("MSIE");
        Ha = !Fa && -1 != Ka.indexOf("WebKit");
        Ia = !Fa && !Ha && "Gecko" == La.product
    }
    var Ma = Fa,
        Na = Ga,
        Oa = Ia,
        Pa = Ha,
        Qa = function () {
            var a = aa.document;
            return a ? a.documentMode : h
        },
        Ra;
    a: {
        var Sa = "",
            Ta;
        if (Ma && aa.opera) var Ua = aa.opera.version,
            Sa = "function" == typeof Ua ? Ua() : Ua;
        else if (Oa ? Ta = /rv\:([^\);]+)(\)|;)/ : Na ? Ta = /MSIE\s+([^\);]+)(\)|;)/ : Pa && (Ta = /WebKit\/(\S+)/), Ta) var Va = Ta.exec(Ja()),
            Sa = Va ? Va[1] : "";
        if (Na) {
            var Wa = Qa();
            if (Wa > parseFloat(Sa)) {
                Ra = String(Wa);
                break a
            }
        }
        Ra = Sa
    }
    var Xa = Ra,
        Ya = {},
        Za = function (a) {
            var b;
            if (!(b = Ya[a])) {
                b = 0;
                for (var c = String(Xa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        j = d[f] || "",
                        n = RegExp("(\\d*)(\\D*)", "g"),
                        p = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var s = n.exec(g) || ["", "", ""],
                            A = p.exec(j) || ["", "", ""];
                        if (0 == s[0].length && 0 == A[0].length) break;
                        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? -1 : (0 == s[1].length ?
                            0 : parseInt(s[1], 10)) > (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == A[2].length) ? -1 : (0 == s[2].length) > (0 == A[2].length) ? 1 : 0) || (s[2] < A[2] ? -1 : s[2] > A[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Ya[a] = 0 <= b
            }
            return b
        },
        $a = aa.document,
        ab = !$a || !Na ? h : Qa() || ("CSS1Compat" == $a.compatMode ? parseInt(Xa, 10) : 5);
    var bb = function (a) {
        bb[" "](a);
        return a
    };
    bb[" "] = function () {};
    var cb;
    if (!(cb = !Na)) cb = Na && 9 <= ab;
    var db = cb,
        eb = Na && !Za("9");
    !Pa || Za("528");
    Oa && Za("1.9b") || Na && Za("8") || Ma && Za("9.5") || Pa && Za("528");
    Oa && !Za("8") || Na && Za("9");
    var fb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    fb.prototype.Qa = l;
    fb.prototype.defaultPrevented = l;
    fb.prototype.preventDefault = function () {
        this.defaultPrevented = i
    };
    var gb = function (a, b) {
        a && this.init(a, b)
    };
    ka(gb, fb);
    m = gb.prototype;
    m.target = k;
    m.relatedTarget = k;
    m.offsetX = 0;
    m.offsetY = 0;
    m.clientX = 0;
    m.clientY = 0;
    m.screenX = 0;
    m.screenY = 0;
    m.button = 0;
    m.keyCode = 0;
    m.charCode = 0;
    m.ctrlKey = l;
    m.altKey = l;
    m.shiftKey = l;
    m.metaKey = l;
    m.fb = k;
    m.init = function (a, b) {
        var c = this.type = a.type;
        fb.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Oa) {
                var e;
                a: {
                    try {
                        bb(d.nodeName);
                        e = i;
                        break a
                    } catch (f) {}
                    e = l
                }
                e || (d = k)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Pa || a.offsetX !== h ? a.offsetX : a.layerX;
        this.offsetY = Pa || a.offsetY !== h ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== h ? a.clientX : a.pageX;
        this.clientY = a.clientY !== h ? a.clientY : a.pageY;
        this.screenX =
            a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.fb = a;
        a.defaultPrevented && this.preventDefault();
        delete this.Qa
    };
    m.preventDefault = function () {
        gb.Va.preventDefault.call(this);
        var a = this.fb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = l, eb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var hb = function () {},
        ib = 0;
    m = hb.prototype;
    m.key = 0;
    m.ea = l;
    m.Da = l;
    m.init = function (a, b, c, d, e, f) {
        if ("function" == ca(a)) this.$a = i;
        else if (a && a.handleEvent && "function" == ca(a.handleEvent)) this.$a = l;
        else throw Error("Invalid listener argument");
        this.Ea = a;
        this.Xa = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.Wa = f;
        this.Da = l;
        this.key = ++ib;
        this.ea = l
    };
    m.handleEvent = function (a) {
        return this.$a ? this.Ea.call(this.Wa || this.src, a) : this.Ea.handleEvent.call(this.Ea, a)
    };
    var jb = {},
        kb = {},
        lb = {},
        mb = {},
        nb = function (a, b, c, d, e) {
            if ("array" == ca(b)) {
                for (var f = 0; f < b.length; f++) nb(a, b[f], c, d, e);
                return k
            }
            a: {
                if (!b) throw Error("Invalid event type");d = !!d;
                var g = kb;b in g || (g[b] = {
                    K: 0,
                    W: 0
                });g = g[b];d in g || (g[d] = {
                    K: 0,
                    W: 0
                }, g.K++);
                var g = g[d],
                    f = a[da] || (a[da] = ++ea),
                    j;g.W++;
                if (g[f]) {
                    j = g[f];
                    for (var n = 0; n < j.length; n++)
                        if (g = j[n], g.Ea == c && g.Wa == e) {
                            if (g.ea) break;
                            j[n].Da = l;
                            a = j[n].key;
                            break a
                        }
                } else j = g[f] = [],
                g.K++;
                var p = ob,
                    s = db ? function (a) {
                        return p.call(s.src, s.key, a)
                    } : function (a) {
                        a = p.call(s.src,
                            s.key, a);
                        if (!a) return a
                    },
                    n = s;n.src = a;g = new hb;g.init(c, n, a, b, d, e);g.Da = l;c = g.key;n.key = c;j.push(g);jb[c] = g;lb[f] || (lb[f] = []);lb[f].push(g);a.addEventListener ? (a == aa || !a.ib) && a.addEventListener(b, n, d) : a.attachEvent(b in mb ? mb[b] : mb[b] = "on" + b, n);a = c
            }
            return a
        },
        pb = function (a, b, c, d) {
            if (!d.Ha && d.Ya) {
                for (var e = 0, f = 0; e < d.length; e++) d[e].ea ? d[e].Xa.src = k : (e != f && (d[f] = d[e]), f++);
                d.length = f;
                d.Ya = l;
                0 == f && (delete kb[a][b][c], kb[a][b].K--, 0 == kb[a][b].K && (delete kb[a][b], kb[a].K--), 0 == kb[a].K && delete kb[a])
            }
        },
        rb =
        function (a, b, c, d, e) {
            var f = 1;
            b = b[da] || (b[da] = ++ea);
            if (a[b]) {
                a.W--;
                a = a[b];
                a.Ha ? a.Ha++ : a.Ha = 1;
                try {
                    for (var g = a.length, j = 0; j < g; j++) {
                        var n = a[j];
                        n && !n.ea && (f &= qb(n, e) !== l)
                    }
                } finally {
                    a.Ha--, pb(c, d, b, a)
                }
            }
            return Boolean(f)
        },
        qb = function (a, b) {
            if (a.Da) {
                var c = a.key;
                if (jb[c]) {
                    var d = jb[c];
                    if (!d.ea) {
                        var e = d.src,
                            f = d.type,
                            g = d.Xa,
                            j = d.capture;
                        e.removeEventListener ? (e == aa || !e.ib) && e.removeEventListener(f, g, j) : e.detachEvent && e.detachEvent(f in mb ? mb[f] : mb[f] = "on" + f, g);
                        e = e[da] || (e[da] = ++ea);
                        if (lb[e]) {
                            var g = lb[e],
                                n = Da(g, d);
                            0 <= n && (Ba(g.length != k), Ca.splice.call(g, n, 1));
                            0 == g.length && delete lb[e]
                        }
                        d.ea = i;
                        if (d = kb[f][j][e]) d.Ya = i, pb(f, j, e, d);
                        delete jb[c]
                    }
                }
            }
            return a.handleEvent(b)
        },
        ob = function (a, b) {
            if (!jb[a]) return i;
            var c = jb[a],
                d = c.type,
                e = kb;
            if (!(d in e)) return i;
            var e = e[d],
                f, g;
            if (!db) {
                var j;
                if (!(j = b)) a: {
                    j = ["window", "event"];
                    for (var n = aa; f = j.shift();)
                        if (n[f] != k) n = n[f];
                        else {
                            j = k;
                            break a
                        } j = n
                }
                f = j;
                j = i in e;
                n = l in e;
                if (j) {
                    if (0 > f.keyCode || f.returnValue != h) return i;
                    a: {
                        var p = l;
                        if (0 == f.keyCode) try {
                            f.keyCode = -1;
                            break a
                        } catch (s) {
                            p = i
                        }
                        if (p ||
                            f.returnValue == h) f.returnValue = i
                    }
                }
                p = new gb;
                p.init(f, this);
                f = i;
                try {
                    if (j) {
                        for (var A = [], ga = p.currentTarget; ga; ga = ga.parentNode) A.push(ga);
                        g = e[i];
                        g.W = g.K;
                        for (var ha = A.length - 1; !p.Qa && 0 <= ha && g.W; ha--) p.currentTarget = A[ha], f &= rb(g, A[ha], d, i, p);
                        if (n) {
                            g = e[l];
                            g.W = g.K;
                            for (ha = 0; !p.Qa && ha < A.length && g.W; ha++) p.currentTarget = A[ha], f &= rb(g, A[ha], d, l, p)
                        }
                    } else f = qb(c, p)
                } finally {
                    A && (A.length = 0)
                }
                return f
            }
            d = new gb(b, this);
            return f = qb(c, d)
        };
    var sb = function (a) {
        this.nb = a;
        this.ob = []
    };
    ka(sb, Ea);
    var tb = [];
    sb.prototype.listen = function (a, b, c, d, e) {
        "array" != ca(b) && (tb[0] = b, b = tb);
        for (var f = 0; f < b.length; f++) {
            var g = nb(a, b[f], c || this, d || l, e || this.nb || this);
            this.ob.push(g)
        }
        return this
    };
    sb.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ub = function (a, b, c, d, e) {
        sb.call(this);
        this.kb = a;
        this.jb = b;
        this.bb = c;
        this.ab = d;
        (this.cb = e || k) && this.listen(this.cb, "click", this.show)
    };
    ka(ub, sb);
    ub.prototype.show = function () {
        window.gapi && window.gbar && window.gbar.asmc ? window.gapi.load("share", ja(this.eb, this)) : window.open("about:blank").location = "https://plus.google.com"
    };
    ub.prototype.eb = function () {
        if (window.gapi && window.gapi.share) {
            var a = {
                    items: [{
                        type: "http://schema.org/WebPage",
                        id: location.protocol + "//" + location.host,
                        properties: {
                            description: [this.bb],
                            url: [this.kb],
                            name: [this.jb],
                            image: [this.ab]
                        }
                    }]
                },
                b = window.location.toString().match(/[?&]authuser=(\d+)/);
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: !(!window.gbar || !window.gbar.asmc) || !!window.google.doodle.sf,
                onLoginPopupBlocked: function () {
                    window.google.log && window.google.log("DOODLE", "popupblocked")
                },
                sessionIndex: b &&
                    b[1] || "",
                sourceForLogging: "doodle",
                onLoginStateChanged: ja(function () {
                    ba("google.doodle.sf");
                    this.eb()
                }, this)
            })
        }
    };
    var vb = function (a, b, c) {
        this.Ia = {};
        this.lb = b || "";
        this.mb = c || document.body;
        if (a)
            for (var d in a) this.load(a[d])
    };
    ka(vb, Ea);
    m = vb.prototype;
    m.load = function (a) {
        var b;
        if (a && !(b = this.Ia[a])) {
            var c = document.createElement("audio");
            c && (c.controls = l, c.hidden = i, c.loaded = l, nb(c, "loadedmetadata", function () {
                c.loaded = i
            }), b = this.lb + "/" + a, wb(c, b + ".ogg", "audio/ogg"), wb(c, b + ".mp3", "audio/mpeg"), this.Ia[a] = c, this.mb.appendChild(c));
            b = c
        }
        return b
    };
    m.loop = function (a) {
        if (a = this.play(a)) a.loop = i;
        return a
    };
    m.play = function (a) {
        if ((a = this.load(a)) && a.play) a.autoplay = i, a.loop = l, a.play();
        return a
    };
    m.pause = function (a) {
        if (a) {
            var b = this.Ia[a];
            b && b.pause && (b.pause(), b.autoplay = l, b.loop = l)
        }
        return b
    };
    m.stop = function (a) {
        if ((a = this.pause(a)) && a.loaded) a.currentTime = 0;
        return a
    };
    var xb = function () {
            var a = x,
                b;
            for (b in a.Ia) a.stop(b)
        },
        wb = function (a, b, c) {
            var d = document.createElement("source");
            d.src = b;
            d.type = c;
            a.appendChild(d)
        };
    var yb = function (a, b) {
        this.x = a !== h ? a : 0;
        this.y = b !== h ? b : 0
    };
    m = yb.prototype;
    m.o = function () {
        return new yb(this.x, this.y)
    };
    m.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    };
    m.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.scale = function (a, b) {
        this.x *= a;
        this.y *= "number" == typeof b ? b : a;
        return this
    };
    var zb = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    zb.prototype.o = function () {
        return new zb(this.left, this.top, this.width, this.height)
    };
    zb.prototype.toString = function () {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    var Ab = function (a, b) {
        return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
    };
    zb.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    zb.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    zb.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    zb.prototype.scale = function (a, b) {
        var c = "number" == typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var y = function (a, b) {
        this.x = a;
        this.y = b
    };
    ka(y, yb);
    y.prototype.o = function () {
        return new y(this.x, this.y)
    };
    var Bb = function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y)
    };
    y.prototype.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    var Cb = new y(-1, 0),
        Db = new y(1, 0),
        Eb = new y(0, 1),
        Fb = new y(0, -1),
        Jb = function (a) {
            var b = Gb,
                c = Hb;
            c && (a.left < c.left && (a.left = c.left), a.top < c.top && (a.top = c.top), a.left + a.width > c.left + c.width && (a.left = c.left + c.width - a.width), a.top + a.height > c.top + c.height && (a.top = c.top + c.height - a.height));
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                if (Ib(a, d)) {
                    var e, f, g, j = d.top + d.height - a.top;
                    if (0 < j && (!g || j < g)) g = j, e = a.left, f = a.top + j;
                    j = d.left + d.width - a.left;
                    if (0 < j && (!g || j < g)) g = j, e = a.left + j, f = a.top;
                    j = a.left + a.width - d.left;
                    if (0 < j && (!g ||
                            j < g)) g = j, e = a.left - j, f = a.top;
                    d = a.top + a.height - d.top;
                    if (0 < d && (!g || d < g)) g = d, e = a.left, f = a.top - d;
                    g && (a.left = e, a.top = f)
                }
            }
        },
        Ib = function (a, b) {
            return a.left + a.width > b.left && a.top + a.height > b.top && b.left + b.width > a.left && b.top + b.height > a.top
        };
    var Kb, Lb, z, Mb, Nb, Ob, Pb, Qb, Rb, B, r, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, C, ac, bc, cc, dc, ec, fc, D, gc, hc, ic, jc, x, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, E, yc, zc, F, G, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Hb, Sc = [],
        Gb = [],
        Tc = function () {
            zb.call(this, 0, 0, 0, 0);
            this.g = new y(0, 0);
            this.ua = 1;
            this.B = this.Ka = 0;
            this.X = this.d = k;
            this.H = new y(0, 0);
            this.U = this.I = l
        };
    ka(Tc, zb);
    Tc.prototype.a = function () {
        Ab(this, Hb) && this.d && (this.d.x = this.left + H - Kb, this.d.y = this.top + I, this.d.a(), this.X ? (this.X.x = this.d.x, this.X.y = this.d.y, Uc(this.X)) : Uc(this.d))
    };
    var Vc = function (a, b) {
            a.U || (a.U = i, Sc.push(a), a.Oa = !!b, a.Oa && Gb.push(a))
        },
        Wc = function (a) {
            if (a.U) {
                a.U = l;
                for (var b = 0; b < Sc.length; b++)
                    if (Sc[b] == a) {
                        Sc.splice(b, 1);
                        break
                    } if (a.Oa)
                    for (b = 0; b < Gb.length; b++)
                        if (Gb[b] == a) {
                            Gb.splice(b, 1);
                            break
                        }
            }
        };
    Tc.prototype.update = function (a) {
        this.Ua = l;
        if (!this.Oa) {
            var b = this.g.o();
            if (!this.I) {
                if (0 > b.x && 0 >= this.left || 0 < b.x && this.left + this.width >= Hb.width) b.x = 0;
                if (0 > b.y && 0 >= this.top || 0 < b.y && this.top + this.height >= Hb.height) b.y = 0;
                if (this.Aa) {
                    var c = this.Aa.ca;
                    if (c) {
                        if (0 > b.x && c.left + c.width == this.left || 0 < b.x && c.left == this.left + this.width) b.x = 0;
                        if (0 > b.y && c.top + c.height == this.top || 0 < b.y && c.top == this.top + this.height) b.y = 0
                    }
                }
            }
            var b = this.H.o().add(b.scale(a)),
                c = 0,
                d = Bb(b);
            d && (c = 1 - Math.min(1, this.Ka * a / d));
            b.scale(c);
            a = this.H.o().add(b).scale(a / 2);
            this.H = b;
            a = new y(this.left + a.x, this.top + a.y);
            if (!this.I) {
                a: {
                    var e = a;a = Gb;
                    var f = Hb,
                        b = {
                            direction: k,
                            end: new y(e.x, e.y),
                            ca: k,
                            C: 1,
                            Ba: l
                        },
                        c = e.x - this.left,
                        d = e.y - this.top,
                        g = new zb(Math.min(this.left, e.x), Math.min(this.top, e.y), this.width + Math.abs(c), this.height + Math.abs(d));
                    if (f) {
                        var j = f.left + f.width,
                            n = f.top + f.height;
                        if (this.left < f.left || this.top < f.top || this.left + this.width > j || this.top + this.height > n) {
                            b.end = new y(this.left, this.top);
                            b.ca = f;
                            b.Ba = i;
                            b.C = 0;
                            a = b;
                            break a
                        }
                        var p = 1,
                            s = 1;
                        e.x < f.left ? (p = (f.left - this.left) / c, b.direction = Cb) : e.x + this.width > j && (p = (j - this.width - this.left) / c, b.direction = Db);
                        e.y < f.top ? (s = (f.top - this.top) / d, b.direction = Fb) : e.y + this.height > n && (s = (n - this.height - this.top) / d, b.direction = Eb);
                        b.C = Math.min(p, s);
                        1 > b.C && (b.ca = f)
                    }
                    for (e = 0; e < a.length; e++)
                        if (f = a[e], Ib(g, f)) {
                            if (Ib(this, f)) {
                                b.end = new y(this.left, this.top);
                                b.Ba = i;
                                b.ca = f;
                                b.C = 0;
                                a = b;
                                break a
                            }
                            c && (p = f.left - this.left + (0 < c ? -this.width : f.width), p /= c, 0 <= p && p < b.C && (s = this.top + p * d, s < f.top + f.height && s + this.height > f.top &&
                                (b.ca = f, b.C = p, b.direction = 0 < c ? Db : Cb)));
                            d && (p = f.top - this.top + (0 < d ? -this.height : f.height), s = p / d, 0 <= s && s < b.C && (p = this.left + s * c, p < f.left + f.width && p + this.width > f.left && (b.ca = f, b.C = s, b.direction = 0 < d ? Eb : Fb)))
                        } 1 > b.C && (b.end = new y(1E-4 * Math.round((this.left + c * b.C) / 1E-4), 1E-4 * Math.round((this.top + d * b.C) / 1E-4)));a = b
                }
                1 > a.C && (this.Ua = i, a.Ba ? Jb(this) : a.direction && (a.direction.x && (this.H.x *= -this.ua), a.direction.y && (this.H.y *= -this.ua)));this.Aa = a;
                if (this.Aa.Ba) return;a = this.Aa.end
            }
            a && (this.B += Bb(new y(a.x - this.left,
                a.y - this.top)), this.left = a.x, this.top = a.y)
        }
    };
    Tc.prototype.stop = function () {
        this.H.x = this.H.y = this.g.x = this.g.y = 0
    };
    var Xc = function () {
            var a = Sc;
            Sc = [];
            Gb = [];
            for (var b = 0; b < a.length; b++) Wc(a[b])
        },
        Yc = function (a, b) {
            return a.top - b.top
        };
    var H, I, Zc, $c, J, ad, bd, K, L, M, cd, dd, ed, fd, gd, hd, id, jd, kd, N, ld, md, nd, od, O, pd, qd = [],
        rd = 0,
        sd = 0,
        P = l,
        td = k,
        ud = [],
        Q = [],
        R = [],
        vd = function (a, b, c, d, e, f, g) {
            this.opacity = 0;
            if (this.Z = a) this.aa = a.o(), this.aa.i = -1;
            if (this.ia = b) this.ba = this.ia.o(), this.ba.i = -1;
            this.M = c;
            this.G = e;
            if (this.fa = d) this.ha = this.fa.o(), this.ha.i = -1;
            this.Y = f;
            this.$ = g
        };
    vd.prototype.a = function () {
        if (this.opacity && this.M) {
            this.ia.opacity = this.M.opacity = this.ba.opacity = this.Z.opacity = this.aa.opacity = this.fa.opacity = this.G.opacity = this.ha.opacity = this.Y.opacity = this.opacity;
            this.$.opacity = 0.2 * this.opacity;
            this.fa.x = this.Z.x = this.ia.x = H - this.Z.getWidth();
            this.ha.x = this.aa.x = H + K;
            this.ba.x = H + K - this.ba.getWidth() + this.aa.getWidth();
            this.fa.y = this.ha.y = this.G.y = L + M;
            this.M.y = this.ba.y = this.ia.y = L - this.M.getHeight();
            for (var a = 0; a < K; a += this.M.getWidth()) this.M.x = H + a, this.M.clip(H,
                0, K, L), this.M.a();
            for (a = 0; a < K; a += this.G.getWidth()) this.G.x = H + a, this.G.clip(H, 0, K, cd.height), this.G.a();
            for (a = 0; a < M; a += this.Z.getHeight()) this.Z.y = this.aa.y = L + a, this.Z.a(), this.aa.a();
            this.fa.a();
            this.ha.a();
            this.ia.a();
            this.ba.a();
            this.v && this.v.k && (this.v.x = H - 4, this.v.y = I + -11 - this.v.getHeight(), this.v.S = K + 8, this.v.R = this.v.k, this.v.a());
            this.Y.x = H + (K - this.Y.getWidth()) / 2;
            this.Y.y = L - this.Y.getHeight();
            this.Y.a();
            this.$.x = H + (K - this.$.getWidth()) / 2;
            this.$.y = L + (M - this.$.getHeight()) / 2;
            this.$.a()
        }
    };
    var wd = function () {
            for (var a = Math.floor(Math.random() * dd), b = 0, c = 0; c < dd; c++) {
                for (var d = 0, e = 0; e < ed; e++) 2 == qd[c][e] && d++;
                d > b && (b = d, a = c)
            }
            return 2 * a
        },
        yd = function () {
            var a = ud;
            ud = [];
            for (var b = 0; b < a.length; b++) {
                for (var c = a[b], d = c[0], c = c[1], e = 0, f = -1; 1 >= f; f++)
                    for (var g = -1; 1 >= g; g++) {
                        var j = c + f,
                            n = d + g;
                        0 <= n && (n < ed && 0 <= j && j < dd && 2 == qd[j][n]) && e++
                    }
                f = qd[c][d];
                0 == f && 1 < e || 2 == f && 4 > e ? xd(d, c, 1) : 1 == f && 1 > e && xd(d, c, 0)
            }
        },
        zd = function (a, b, c, d) {
            if (N != a || O != b || I != d || c != bd) {
                if (!K || !M) K = a, M = b, L = d, fd = Q[c].G ? Q[c].G.getHeight() : 0, P = i;
                else {
                    td && td.stop();
                    var e = new t,
                        f = N || 0,
                        g = O || 0,
                        j = I || 0,
                        n = bd,
                        p = Q[n].G ? Q[n].G.getHeight() : 0,
                        s = Q[c].G ? Q[c].G.getHeight() : 0;
                    u(e, function (b) {
                        K = na(b, f, a);
                        P = i
                    }, 500);
                    u(e, function (a) {
                        L = na(a, j, d);
                        M = na(a, g, b);
                        fd = na(a, p, s);
                        P = i
                    }, 500);
                    n != c && (u(e, function () {
                        Q[n] && Q[n].z && Q[n].z.play();
                        Q[c] && Q[c].w && Q[c].w.play()
                    }), v(e, 750));
                    u(e, function () {
                        td = k
                    });
                    td = e;
                    td.play()
                }
                N = a;
                O = b;
                I = d;
                dd = Math.ceil(b / 2);
                ed = Math.ceil(a / 2);
                bd = c;
                Hb = new zb(0, 0, a, b)
            }
            qd = [];
            for (e = rd = 0; e < dd; e++) {
                for (var A = [], ga = 0; ga < ed; ga++) A.push(0);
                qd[e] = A
            }
            ud = [];
            P = i
        },
        Ad = function (a) {
            for (var b = 0; b < dd; b++)
                for (var c = 0; c < ed; c++) qd[b][c] == a && md.rect(H - Kb + 2 * c, I + 2 * b, 2, 2)
        },
        Bd = function (a, b) {
            var c = 2 * a,
                d = 2 * b;
            nd.clearRect(c, d, 2, 2);
            var e = qd[b][a];
            if (0 != e) {
                var f = pd;
                f.opacity = 1 == e ? 0.5 : 1;
                f.x = c;
                f.y = d;
                f.Ja = 0 + c % 172;
                f.L = 0 + d % 120;
                f.a()
            }
        },
        Cd = function (a, b) {
            for (var c = 0, d = Math.max(0, a.left), e = Math.min(N - 1, a.left + a.width), f = Math.max(0, a.top), g = Math.min(O - 1, a.top + a.height), d = Math.floor(d / 2), e = Math.floor(e / 2), g = Math.floor(g / 2), f = Math.floor(f / 2); f <= g; f++)
                for (var j = d; j <= e; j++) {
                    var n = qd[f][j];
                    n != b && (xd(j, f, b), 1 != n && c++)
                }
            return c
        },
        xd = function (a, b, c) {
            var d = qd[b][a];
            if (d != c && (qd[b][a] = c, Bd(a, b), 2 == c || 2 == d)) {
                2 == c ? rd++ : rd--;
                for (c = -1; 1 >= c; c++)
                    for (d = -1; 1 >= d; d++) {
                        var e = b + c,
                            f = a + d;
                        (f != a || e != b) && (0 <= f && f < ed && 0 <= e && e < dd) && ud.push([f, e])
                    }
            }
        },
        Dd = function () {
            $c.top = ad.top = (M - 20) / 2;
            $c.left = K / 2 - sd - 18;
            ad.left = K / 2 + sd
        };
    var Ed, Fd, S, Gd, Hd, Id, Jd, Kd, T, Ld, U, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, ke, le, me, ne = 0,
        oe = function (a, b) {
            this.y = this.x = 0;
            this.A = a;
            this.hb = b;
            this.Q = this.Pa = this.Ca = l;
            a.offsetX = a.offsetY = 2;
            var c = this;
            c.pa = new t;
            u(c.pa, function (a) {
                c.A.offsetX = c.A.offsetY = 2 * (1 - a)
            }, 50);
            c.qa = new t;
            u(c.qa, function (a) {
                c.A.offsetX = c.A.offsetY = 2 * a
            }, 50)
        };
    oe.prototype.a = function () {
        this.A.x = this.x;
        this.A.y = this.y;
        this.A.ra = "source-over";
        this.A.opacity = 1;
        this.A.a();
        this.Pa && (this.A.ra = "lighter", this.A.opacity = 0.1, this.A.a())
    };
    var pe = function (a, b, c) {
            !a.Q && va(a.A, b, c) && (a.qa.stop(), a.pa.play(), a.Q = i, a.Ca = i, V("bp"))
        },
        qe = function (a, b, c) {
            (b = va(a.A, b, c)) && (Lb = i);
            !a.Pa && b && V("bh");
            a.Pa = b;
            a.Ca && (a.Q && !b ? (a.pa.stop(), a.qa.play(), a.Q = l) : !a.Q && b && (a.qa.stop(), a.pa.play(), a.Q = i))
        },
        re = function (a) {
            a.Ca && (a.Q && (a.pa.stop(), a.qa.play(), a.hb(), a.Q = l), a.Ca = l)
        },
        se = function () {
            0 >= S && (0 > S && (Hd || (re(Td), re(Sd)), re(Ud)), re(Vd))
        },
        te = function () {
            ke = 0;
            U = [0, 0, 0, 0, 0, 0];
            le = [0, 0, 0, 0, 0, 0];
            me = [l, l, l, l, l, l]
        },
        ue = function () {
            Ed = !Ed;
            window.localStorage && window.localStorage.setItem("doodle-zamboni-audio",
                Ed ? "true" : "false");
            Ed ? Vd.A = ge : (Vd.A = he, x && xb())
        };
    var ve = [],
        we = [],
        xe = [],
        ye = function (a, b) {
            Tc.call(this);
            this.type = a;
            this.C = b;
            this.Sa = this.Ra = k;
            this.Ta = l;
            this.d = ve[a].o();
            this.width = this.height = 16
        };
    ka(ye, Tc);
    ye.prototype.a = function () {
        this.d.a();
        Uc(this.d)
    };
    var ze = function () {
            for (var a = 0; a < xe.length; a++) Wc(xe[a]);
            xe = []
        },
        Ce = function (a) {
            ze();
            for (var b = 1; b < a.length; b++) {
                var c = Math.floor(Math.random() * (b + 1));
                if (b != c) {
                    var d = a[b];
                    a[b] = a[c];
                    a[c] = d
                }
            }
            for (b = 0; b < a.length; b++) c = a[b], 0 == c && (c = Math.floor(6 * Math.random())), c && (c = new ye(c, b / a.length + Math.random() / a.length), c.Ra = Ae(c), c.Sa = Be(c), xe.push(c))
        },
        Ae = function (a) {
            var b = new t;
            u(b, function (b) {
                a.d.x = 16 + a.left + b * (a.left > N / 2 ? -32 : 32) + (16 - a.d.getWidth()) / 2;
                a.d.y = L + a.top + 64 * (b * b - b) + (16 - a.d.getHeight()) / 2
            }, 500);
            u(b,
                function () {
                    a.left += a.left > N / 2 ? -32 : 32
                });
            return b
        },
        Be = function (a) {
            var b = new t;
            u(b, function () {
                a.d = we[a.type].o()
            });
            u(b, function (b) {
                var d = b * Math.PI;
                a.d.opacity = 1 - b;
                a.d.p = 2 * d;
                a.d.x = a.left + 24 * (Math.cos(d) - 1);
                a.d.y = L + a.top - 24 * (Math.sin(d) + 1)
            }, 500);
            return b
        };
    var W = function (a, b) {
        Tc.call(this);
        this.gb = b;
        this.oa = i;
        this.ya = l;
        this.za = [];
        this.top = -10;
        this.width = this.height = 4;
        this.ua = 0.5;
        this.Ka = 1.5E-4;
        this.d = a
    };
    ka(W, Tc);
    var Ee = function (a) {
        if (!De(a)) {
            var b = Math.max(0, Math.min(N - 4, a.left)),
                c = Math.max(0, Math.min(O - 4, a.top));
            a.target(b, c);
            a.ya = l;
            a.I = i;
            Vc(a)
        }
    };
    W.prototype.a = function () {
        0 < this.H.x ? this.d.i = 1 : 0 > this.H.x && (this.d.i = -1);
        30 < this.B && (this.d.frame = this.d.frame ? 0 : 1, this.B = 0);
        this.d.x = this.left + H - Kb - (this.d.getWidth() - 4) / 2;
        this.d.y = this.top + I - this.d.getHeight() + 4;
        this.d.a();
        Uc(this.d)
    };
    W.prototype.moveTo = function (a, b) {
        this.left = a - 2;
        this.top = b - 2
    };
    var Fe = function (a, b, c) {
        a.ya = i;
        a.oa = l;
        a.za.push([b, c])
    };
    W.prototype.reset = function () {
        var a = (N - 4) / 2;
        this.moveTo(a, -10);
        this.target(a, -10)
    };
    W.prototype.target = function (a, b) {
        this.ya = i;
        this.oa = l;
        this.za = [];
        this.O = a;
        this.P = b;
        V("sk")
    };
    W.prototype.update = function (a) {
        var b = 0 > this.O || this.O > N || 0 > this.P || this.P > O;
        if (!Ab(this, Hb) && b) Wc(this), this.oa = i;
        else if (b = De(this), this.I = !b || Ge(this), !td || !td.s) {
            var c = new y(this.O - this.left, this.P - this.top),
                d = Bb(c);
            4 < d ? (this.g = c.o(), this.g.scale(this.gb / d)) : (this.g.x = this.g.y = 0, this.ya ? this.za.length ? (c = this.za.shift(), this.O = c[0], this.P = c[1], V("sk")) : this.oa = i : (this.O = 2 + Math.random() * (N - 4), this.P = 2 + Math.random() * (O - 4), V("sk")));
            W.Va.update.call(this, a);
            b && (!De(this) && !Ge(this)) && Jb(this);
            Cd(this,
                2)
        }
    };
    var Ge = function (a) {
            return (0 > a.O || a.O > N) && 15 > Math.abs(a.top - a.P) || (0 > a.P || a.P > O) && 15 > Math.abs(a.left - a.O)
        },
        De = function (a) {
            return 0 <= a.left && 0 <= a.top && a.left < N - 4 && a.top < O - 4
        };
    var He = {
            en: ["Happy Birthday, Frank Zamboni!", "I resurfaced ice on the Google homepage!", "My score:"],
            af: ["Lekker verjaar, Frank Zamboni!", "Ek het ys hervlak op die Google-tuisblad!", "My telling:"],
            bg: ["\u0427\u0435\u0441\u0442\u0438\u0442 \u0440\u043e\u0436\u0434\u0435\u043d \u0434\u0435\u043d, \u0424\u0440\u0430\u043d\u043a \u0417\u0430\u043c\u0431\u043e\u043d\u0438!", "\u0427\u0438\u0441\u0442\u0438\u0445 \u043b\u0435\u0434\u0430 \u043d\u0430 \u043d\u0430\u0447\u0430\u043b\u043d\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 Google!",
                "\u041c\u043e\u044f\u0442 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442:"
            ],
            cs: ["Je v\u00fdro\u010d\u00ed narozen\u00ed Franka Zamboniho!", "Vyzkou\u0161ejte si taky \u00fapravu ledov\u00e9 plochy na str\u00e1nce Google!", "Moje sk\u00f3re je:"],
            da: ["Tillykke med f\u00f8dselsdagen, Frank Zamboni!", "Jeg k\u00f8rte med ismaskinen p\u00e5 Googles startside!", "Mit resultat:"],
            de: ["Alles Gute zum Geburtstag, Frank Zamboni!", "Ich habe auf der Google-Startseite Eis pr\u00e4pariert!", "Meine Punktzahl:"],
            el: ["\u03a7\u03c1\u03cc\u03bd\u03b9\u03b1 \u03c0\u03bf\u03bb\u03bb\u03ac, \u03a6\u03c1\u03ac\u03bd\u03ba \u0396\u03b1\u03bc\u03c0\u03cc\u03bd\u03b9", "\u0393\u03c5\u03ac\u03bb\u03b9\u03c3\u03b1 \u03c4\u03bf\u03bd \u03c0\u03ac\u03b3\u03bf \u03c3\u03c4\u03b7\u03bd \u03ba\u03b5\u03bd\u03c4\u03c1\u03b9\u03ba\u03ae \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c4\u03b7\u03c2 Google!", "\u0397 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03bc\u03bf\u03c5:"],
            es: ["\u00a1Feliz cumplea\u00f1os Frank Zamboni!",
                "\u00a1Limpi\u00e9 el hielo en la p\u00e1gina principal de Google!", "Mi marcador:"
            ],
            et: ["Palju \u00f5nne Frank Zamboni!", "T\u00f5stsin j\u00e4\u00e4d Google'i avalehel!", "Minu tulemus:"],
            fi: ["Paljon onnea Frank Zamboni!", "Tasoitin j\u00e4\u00e4n Googlen kotisivulla!", "Tulokseni:"],
            fr: ["Joyeux Anniversaire Frank Zamboni !", "J'ai surfac\u00e9 la glace sur la page d'accueil de Google !", "Mon score :"],
            fr_ca: ["Joyeux Anniversaire Frank Zamboni!", "J'ai surfac\u00e9 la glace sur la page d'accueil de Google!",
                "Mon score :"
            ],
            ga: ["Breithl\u00e1 shona, Frank Zamboni!", "T\u00e1 dromchl\u00fa oighir d\u00e9anta agam ar leathanach baile Google!", "Mo sc\u00f3r f\u00e9in:"],
            hu: ["Boldog sz\u00fclet\u00e9snapot Frank Zamboni!", "Lecsiszoltam a jeget a Google-on!", "A pontsz\u00e1mom:"],
            it: ["Buon compleanno, Frank Zamboni!", "Ho rifatto il ghiaccio sull'home page di Google!", "Il mio punteggio:"],
            iw: ["\u05d9\u05d5\u05dd \u05d4\u05d5\u05dc\u05d3\u05ea \u05e9\u05de\u05d7 \u05dc\u05e4\u05e8\u05e0\u05e7 \u05d6\u05de\u05d1\u05d5\u05e0\u05d9!",
                "\u05d0\u05e0\u05d9 \u05d4\u05e6\u05e4\u05ea\u05d9 \u05d1\u05e7\u05e8\u05d7 \u05d0\u05ea \u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea \u05e9\u05dc Google", "\u05d4\u05e6\u05d9\u05d5\u05df \u05e9\u05dc\u05d9:"
            ],
            ja: ["\u30d5\u30e9\u30f3\u30af \u30b6\u30f3\u30dc\u30cb\u30fc\u3055\u3093\u3001\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01", "\u30b6\u30f3\u30dc\u30cb\u30fc\u3067 Google \u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306e\u6c37\u9762\u3092\u306a\u3089\u3057\u305f\uff01", "\u30b9\u30b3\u30a2:"],
            lt: ["Su gimimo diena, Frank Zamboni!", "A\u0161 i\u0161lyginau led\u0105 Google paie\u0161kos puslapyje!", "Mano rezultatas:"],
            lv: ["Daudz laimes dzim\u0161anas dien\u0101, Frenk Zamboni!", "Es uzkopu ledu Google m\u0101jaslap\u0101!", "Mans rezult\u0101ts:"],
            mk: ["\u0421\u0440\u0435\u045c\u0435\u043d \u0440\u043e\u0434\u0435\u043d\u0434\u0435\u043d, \u0424\u0440\u0435\u043d\u043a \u0417\u0430\u043c\u0431\u043e\u043d\u0438!", "\u0413\u043e \u0438\u0441\u0447\u0438\u0441\u0442\u0438\u0432 \u043b\u0435\u0434\u043e\u0442 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0430 \u043d\u0430 Google!",
                "\u041c\u043e\u0458 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442:"
            ],
            nl: ["Gefeliciteerd Frank Zamboni!", "Ik heb ijs gedweild op de Google-homepage!", "Mijn score:"],
            pl: ["Rocznica urodzin Franka Zamboniego!", "Wyg\u0142adzam l\u00f3d na Google.pl!", "M\u00f3j wynik:"],
            pt: ["Feliz Anivers\u00e1rio, Frank Zamboni!", "Refiz a superf\u00edcie de gelo da p\u00e1gina inicial do Google!", "A minha pontua\u00e7\u00e3o:"],
            ru: ["\u0421 \u0434\u043d\u0435\u043c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u0424\u0440\u044d\u043d\u043a \u0417\u0430\u043c\u0431\u043e\u043d\u0438!",
                "\u042f \u043c\u0435\u043d\u044f\u044e \u043b\u0435\u0434 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 Google!", "\u041c\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"
            ],
            sk: ["Je v\u00fdro\u010die narodenia Franka Zamboniho!", "Vysk\u00fa\u0161ajte si tie\u017e \u00fapravu \u013eadovej plochy na str\u00e1nke Google!", "Moje sk\u00f3re je:"],
            sl: ["Vse najbolj\u0161e, Frank Zamboni!", "Po\u010distil sem led na Googlovi doma\u010di strani!",
                "Moj rezultat je:"
            ],
            sr: ["\u0421\u0440\u0435\u045b\u0430\u043d \u0440\u043e\u0452\u0435\u043d\u0434\u0430\u043d, \u0424\u0440\u0435\u043d\u043a \u0417\u0430\u043c\u0431\u043e\u043d\u0438!", "\u0420\u0430\u0432\u043d\u0430\u043c \u043b\u0435\u0434\u0435\u043d\u0443 \u043f\u043e\u0432\u0440\u0448\u0438\u043d\u0443 \u043d\u0430 \u043d\u0430\u0441\u043b\u043e\u0432\u043d\u043e\u0458 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438 Google-a!", "\u041c\u043e\u0458 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442:"],
            sv: ["Grattis p\u00e5 f\u00f6delsedagen Frank Zamboni!", "Jag spolade is p\u00e5 Googles startsida!", "Mitt resultat:"],
            tr: ["\u0130yi ki Do\u011fdun, Frank Zamboni!", "Google Ana Sayfas\u0131nda Buz Pistini D\u00fczelttim!", "Puan\u0131m:"],
            uk: ["\u0417 \u0414\u043d\u0435\u043c \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f, \u0424\u0440\u0435\u043d\u043a\u0443 \u0417\u0430\u043c\u0431\u043e\u043d\u0456!", "\u042f \u0440\u0456\u0432\u043d\u044f\u044e \u043a\u0440\u0438\u0433\u0443 \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0456\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456 Google!",
                "\u041c\u0456\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"
            ],
            "zh-cn": ["\u751f\u65e5\u5feb\u4e50\uff0cFrank Zamboni!", "\u6211\u5728 Google \u9996\u9875\u628a\u51b0\u78e8\u5e73\u4e86!", "\u6211\u7684\u5f97\u5206:"],
            "zh-tw": ["\u751f\u65e5\u5feb\u6a02, Frank Zamboni!", "\u6211\u5728 Google \u9996\u9801\u628a\u51b0\u78e8\u5e73\u4e86!", "\u6211\u7684\u5f97\u5206:"]
        },
        Ie = /_\w+$/,
        Je = /-\w+$/,
        Ke = function (a) {
            var b = window.google,
                b = (b && b.kHL || "en").toLowerCase();
            b in He || (b = b.replace(Ie, ""), b in He ||
                (b = b.replace(Je, ""), b in He || (b = "en")));
            return He[b][a]
        };
    var Le = {
            pb: "bh",
            qb: "bp",
            rb: "cp",
            tb: "do",
            ub: "ec",
            vb: "ed",
            wb: "fv",
            xb: "hw",
            yb: "hn",
            zb: "in",
            Ab: "lf",
            Bb: "lw",
            Cb: "lm",
            Db: "pp",
            Eb: "rb",
            Fb: "sk",
            Gb: "sm",
            Hb: "tr",
            Ib: "wh"
        },
        Me = [],
        Ne = 0,
        Oe = l,
        Pe = l,
        Qe = l,
        Re = l,
        Se = 0,
        Te = 0,
        Ue = 0,
        X = 0,
        Ve = 2,
        We = 6,
        Xe = 0,
        Ye = 0,
        Ze = l,
        $e = 0,
        Y = 0,
        af = 0,
        bf = 0,
        cf = 0,
        Uc = function (a) {
            if (a.opacity) {
                var b = a.o(),
                    c = Sb;
                b.ta = c;
                b.V = c.getContext("2d");
                b.F = -a.F;
                b.x += Kb - H;
                b.y += a.getHeight() + 2 * a.offsetY - L;
                b.a()
            }
        },
        ef = function () {
            0 > S && !Id.s && (Jd.stop(), Id.play());
            te();
            Qb = af = 0;
            df()
        },
        ff = function () {
            google.nav && (google.nav.go &&
                google.doodle && google.doodle.url) && google.nav.go(google.doodle.url)
        },
        gf = function () {
            Pb.bb = Rb + " " + Math.floor(X) + " #zambonidoodle";
            Pb.ab = "https://www.google.com/logos/2013/zamboni/share_" + ne + ".png";
            Pb.show()
        },
        V = function (a) {
            x && (Ed && 2 != z && 1 != z) && x.play(a)
        },
        hf = function (a, b, c, d, e) {
            return a.width != b || a.height != c ? (d && (a.style.marginLeft = d + "px"), e && (a.style.marginTop = e + "px"), a.width = b, a.height = c, i) : l
        },
        df = function () {
            9 <= Qb ? Z(15) : (0 != Qb && (X += 10 * Qb, be.play()), jf(Qb + 1, oa()), Z(8))
        },
        kf = function () {
            var a = document.createElement("canvas");
            a.style.position = "absolute";
            a.height = 198;
            a.width = 650;
            r.appendChild(a);
            return a
        },
        lf = function () {
            if (Oe && (12 == z || 6 == z) && kc >= H && kc < H + N && lc > L && lc < L + O) {
                var a = kc - D.left - D.width / 2 - H,
                    b = lc - D.top - D.height / 2 - L,
                    c = Math.sqrt(a * a + b * b);
                if (10 < c) {
                    D.g.x = 3.4E-4 * a / c;
                    D.g.y = 3.4E-4 * b / c;
                    Qe = i;
                    return
                }
            }
            Qe && (D.g.x = D.g.y = 0, Qe = l)
        },
        mf = function () {
            for (var a = 0; a < B.length; a++)
                if (!B[a].oa) return l;
            return i
        },
        $ = function (a) {
            var b = D;
            if (Ve != a) {
                var c = 1 == Ve || 3 == Ve,
                    d = 1 == a || 3 == a;
                if (d != c) {
                    var e = 3,
                        f = -9;
                    c && (e = -e, f = -f);
                    b.top += e;
                    b.left += f;
                    d ? (b.width =
                        42, b.height = 24) : (b.width = 24, b.height = 30)
                }
                Ve = a
            }
            b.d = 3 == a ? Vb : 2 == a ? qc : 0 == a ? rc : Wb
        },
        nf = function (a) {
            var b;
            if (b = Cd(D, 0)) 12 == z && (X += b / 100), Se = a
        },
        of = function () {
            1 == mc && x.stop("cp");
            mc = k
        },
        pf = function (a) {
            if (rd && 20 > rd && 3E3 < a - Se) {
                a = 0.6 * Math.abs(Math.sin(0.005 * a));
                var b = md;
                b.save();
                b.beginPath();
                b.fillStyle = "#f66";
                b.globalAlpha = a;
                Ad(2);
                b.fill();
                b.beginPath();
                b.globalAlpha = a / 2;
                Ad(1);
                b.fill();
                b.restore()
            }
        },
        qf = function () {
            return Math.random() * (M - 4)
        },
        rf = function () {
            for (var a = 0, b = 0; b < B.length; b++) B[b].U && a++;
            return a
        },
        uf = function (a) {
            var b = document.createElement("img");
            b.src = "./assets/img" + a;
            !b.complete && "complete" != b.readyState ? (b.onload = sf, Ne++) : Qc || (Qc = window.setTimeout(tf, 10));
            return b
        },
        vf = function () {
            window.google && window.google.log && window.google.log("doodle-zamboni", "s:" + z + ",o:" + Math.floor(X) + ",l:" + Qb + ",t:" + Math.floor(af / 1E3) + ",p:" + bf + ",w:" + cf + ",a:" + (Ed ? "1" : "0"))
        },
        wf = function (a) {
            x && (Ed && 2 != z && 1 != z) && x.loop(a)
        },
        yf = function (a) {
            Te = oa();
            Re || xf();
            document.activeElement == r && (37 <= a.keyCode && 40 >= a.keyCode) &&
                a.preventDefault();
            if (!Qe && (12 == z || 6 == z)) {
                var b = 3.4E-4;
                1 == mc && (b = 4.5E-4);
                3 != mc && (37 == a.keyCode ? D.g.x = -b : 39 == a.keyCode ? D.g.x = b : 38 == a.keyCode ? D.g.y = -b : 40 == a.keyCode && (D.g.y = b))
            }
        },
        zf = function (a) {
            if (37 == a.keyCode && 0 > D.g.x || 39 == a.keyCode && 0 < D.g.x) D.g.x = 0;
            else if (38 == a.keyCode && 0 > D.g.y || 40 == a.keyCode && 0 < D.g.y) D.g.y = 0
        },
        tf = function () {
            Qc && (window.clearTimeout(Qc), Qc = k);
            if (0 == z) {
                r.onmouseout = Af;
                r.onmouseup = Bf;
                r.onmousedown = Cf;
                r.onmousemove = Df;
                r.onkeydown = yf;
                r.onkeyup = zf;
                r.style.backgroundImage = "none";
                Te = oa();
                Rc = 0;
                Z(1);
                xf();
                var a = Ub,
                    b = uf("./sprite_p.png"),
                    c = cd,
                    d = new vd(new w(c, b, 1095, 158, 13, 25), new w(c, b, 939, 203, 13, 49), new w(c, b, 260, 181, 25, 49), new w(c, b, 1041, 286, 13, 47), new w(c, b, 306, 124, 25, 47), new w(c, b, 174, 109, 23, 7), new w(c, b, 502, 56, 372, 79));
                Q[1] = d;
                ld = new w(od, b, 877, 214, 5, 9);
                ld.opacity = 0;
                ld.offsetX = 10;
                var e = new w(c, b, 1041, 253, 40, 30),
                    f = new w(c, b, 0, 109, 32, 24);
                J = [];
                for (var g = 0; 6 > g; g++) J.push(e.o());
                J.push(f.o());
                J.push(f.o());
                J.push(new w(c, b, 1041, 212, 38, 38));
                R = [new w(c, b, 565, 236, 22, 32), new w(c, b, 0, 0, 22, 24)];
                d.w = new t;
                v(d.w, 500);
                u(d.w, function (a) {
                    Q[1].opacity = a;
                    P = i
                }, 250);
                u(d.w, function (a) {
                    var b = H + K / 2;
                    J[0].x = b - 75;
                    J[1].x = b - 137;
                    J[2].x = b - 179;
                    J[3].x = b + 39;
                    J[4].x = b + 72;
                    J[5].x = b + 139;
                    J[6].x = b - 95;
                    J[7].x = b + 104;
                    J[8].x = b - J[8].getWidth() / 2;
                    R[0].x = b - 48;
                    R[0].offsetY = -R[0].getHeight();
                    R[1].x = b + 25;
                    R[1].offsetY = -R[1].getHeight();
                    R[0].y = R[1].y = L + -11;
                    R[0].p = R[1].p = Math.PI;
                    for (b = 0; b < J.length; b++) {
                        var c = L + -11,
                            d = c - J[b].getHeight(),
                            e = Math.min(1, Math.max(0, (a - 0.4 * b / J.length - 0) / 0.6));
                        J[b].y = la(e, c, d)
                    }
                    a = la(a, 0, 1);
                    for (b = 0; b < R.length; b++) R[b].p =
                        q(a, Math.PI / 2, 0);
                    P = i
                }, 750);
                u(d.w, function (a) {
                    ld.opacity = a
                }, 1E3);
                d.z = new t;
                u(d.z, function (a) {
                    for (var b = 0; b < J.length; b++) {
                        var c = L + -11,
                            d = c - J[b].getHeight();
                        J[b].y = q(a, d, c)
                    }
                    for (b = 0; b < R.length; b++) R[b].p = q(a, 0, Math.PI);
                    ld.opacity = 1 - a;
                    P = i
                }, 500);
                v(d.z, 250);
                u(d.z, function () {
                    Q[1].opacity = 0
                });
                Ld = new w(T, b, 502, 138, 359, 45);
                ge = new w(T, b, 0, 80, 25, 26);
                he = new w(T, b, 625, 186, 25, 26);
                Zd = new w(T, b, 200, 181, 57, 47, -7.5);
                Yd = new w(T, b, 227, 56, 57, 47, -7.5);
                Yd.opacity = 0;
                Xd = new w(T, b, 565, 186, 57, 47, -7.5);
                Xd.opacity = 0;
                Wd = new w(T,
                    b, 502, 186, 60, 45, 25, 4);
                Wd.opacity = 0;
                Md = new w(T, b, 288, 56, 15, 200);
                Nd = new w(T, b, 939, 0, 15, 200);
                Od = new w(T, b, 306, 99, 100, 22);
                Od.opacity = 0;
                Od.ra = "lighter";
                ae = new t;
                u(ae, function () {
                    Xd.opacity = 1
                });
                u(ae, function (a) {
                    Yd.opacity = a
                }, 32);
                u(ae, function (a) {
                    Yd.opacity = 1 - a
                }, 150);
                u(ae, function (a) {
                    Xd.opacity = 1 - a
                }, 500);
                be = new t;
                u(be, function (a) {
                    Od.opacity = a
                }, 32);
                u(be, function (a) {
                    Od.opacity = 1 - a
                }, 1E3);
                $d = new t;
                u($d, function (a) {
                    Wd.opacity = a
                }, 500);
                u($d, function (a) {
                    Wd.opacity = 1 - a
                }, 500);
                ie = new t;
                u(ie, function (a) {
                        S = 49 * (1 - a)
                    },
                    500);
                Vd = new oe(Ed ? ge : he, ue);
                sc = new w(a, b, 116, 0, 53, 53);
                tc = new w(a, b, 1041, 158, 51, 51, 1, 1);
                uc = new w(a, b, 200, 109, 69, 69, -8, -8);
                vc = ua(sc, 8, 500);
                v(vc, 6E3);
                qc = new w(a, b, 957, 145, 25, 50, 0, -20);
                rc = new w(a, b, 174, 56, 25, 50, 0, -20);
                Hc = new w(a, b, 0, 27, 48, 50, 0, -26);
                Ic = new w(a, b, 0, 294, 56, 50, -8, -26);
                Jc = new w(a, b, 116, 282, 82, 55, 0, -29);
                G = new w(a, b, 1041, 0, 55, 155);
                F = new w(a, b, 877, 56, 55, 155);
                E = new w(a, b, 58, 109, 55, 155);
                zc = new w(a, b, 0, 136, 55, 155);
                yc = new w(a, b, 116, 56, 55, 155);
                Bc = new w(a, b, 306, 56, 57, 40, -1, 19);
                wc = new w(a, b, 955, 293,
                    81, 142);
                xc = new w(a, b, 957, 0, 81, 142);
                Kc = new t;
                u(Kc, function () {
                    Vc(D, l);
                    D.I = i;
                    $(2);
                    Ef()
                });
                u(Kc, function (a) {
                    D.top = q(a, -10, 0)
                }, 250);
                u(Kc, function () {
                    D.I = l;
                    Z(5 == z ? 6 : 12)
                });
                Lc = new t;
                u(Lc, function (a) {
                    Yb.k = 91 * (1 - a)
                }, 500);
                u(Lc, function () {
                    Mb && Mb.stop();
                    pa("doodle-zamboni-tutorial") ? (Qb = 0, df()) : Z(4)
                });
                v(Lc, 1E3);
                u(Lc, function () {
                    0 < S && ie.play()
                });
                var j, n;
                Mc = new t;
                u(Mc, function () {
                    $(3);
                    D.d = Hc;
                    D.g.x = D.g.y = 0;
                    V("lw")
                });
                v(Mc, 150);
                u(Mc, function () {
                    D.d = Ic
                });
                v(Mc, 1E3);
                u(Mc, function () {
                    of ();
                    var a = D.left - N / 2;
                    0 > a && -a > D.top ? $(3) :
                        0 < a && a > D.top ? $(1) : $(0);
                    j = D.left;
                    n = D.top;
                    D.I = i
                });
                u(Mc, function (a) {
                    var b = D.left,
                        c = D.top;
                    D.left = q(a, j, (N - 24) / 2);
                    D.top = q(a, n, -10);
                    a = b - D.left;
                    c -= D.top;
                    D.B += Math.sqrt(a * a + c * c)
                }, 1E3);
                u(Mc, function () {
                    Wc(D);
                    df()
                });
                oc = ua(Jc, 10, 750);
                oc.va.splice(0, 0, {
                    duration: 0,
                    wa: function () {
                        D.d = Jc;
                        D.g.x = D.g.y = 0
                    }
                });
                v(oc, 1E3);
                u(oc, function () {
                    D.d.T = 0;
                    Jd.s || Jd.play();
                    V("lm")
                });
                nc = new t;
                u(nc, function () {
                    F.opacity = E.opacity = zc.opacity = yc.opacity = G.opacity = Bc.opacity = wc.opacity = xc.opacity = 0;
                    Nc.height = O;
                    Vc(Nc, i);
                    x.play("in")
                });
                v(nc,
                    2500);
                u(nc, function () {
                    B[0].reset();
                    Ee(B[0]);
                    Fe(B[0], 225, 100);
                    Fe(B[0], 250, 100);
                    Fe(B[0], 220, 50)
                });
                Oc = new t;
                u(Oc, function () {
                    Ef();
                    Ve = 3;
                    G.x = F.x = E.x = zc.x = Bc.x = 77;
                    yc.x = 132;
                    xc.x = yc.x - 21;
                    F.y = E.y = zc.y = yc.y = Bc.y = I + 10;
                    wc.y = xc.y = E.y + 18
                });
                u(Oc, function (a) {
                    G.y = q(a, Ub.height, L + 10);
                    G.opacity = a;
                    G.p = 1 - a
                }, 500);
                u(Oc, function () {
                    F.opacity = 1
                });
                u(Oc, function (a) {
                    Ff(a)
                }, 300);
                u(Oc, function (a) {
                    Gf(a)
                }, 300);
                u(Oc, function () {
                    Ac = i
                });
                Pc = new t;
                u(Pc, function () {
                    Ac = l;
                    Wc(Nc)
                });
                u(Pc, function (a) {
                    a *= 1.2;
                    Ff(1 - a);
                    Gf(0.8 - a)
                }, 350);
                u(Pc, function () {
                    F.opacity =
                        E.opacity = yc.opacity = zc.opacity = 0
                });
                u(Pc, function (a) {
                    G.y = q(a, L + 10, Ub.height);
                    G.opacity = 1 - a;
                    G.p = a
                }, 500);
                Nc = new Tc;
                Nc.left = Nc.top = 0;
                Nc.width = 175;
                x = new vb(["in", "sk"], "./assets/audio", r)
            } else 1 == z && Z(2)
        },
        sf = function () {
            --Ne || tf()
        },
        Cf = function (a) {
            Oe = i;
            Hf(a);
            document.activeElement != r && r.focus();
            a.preventDefault();
            a = kc - Kb;
            var b = lc;
            0 >= S && (0 > S && (Hd || (pe(Td, a, b), pe(Sd, a, b)), pe(Ud, a, b), !fe.s && va(Qd, a, b) && fe.play()), pe(Vd, a, b))
        },
        Df = function (a) {
            var b = Lb;
            Lb = l;
            Pe = i;
            Hf(a);
            a = kc - Kb;
            var c = lc;
            0 >= S && (0 > S && (Hd ||
                (qe(Td, a, c), qe(Sd, a, c)), qe(Ud, a, c), va(Qd, a, c) && (Lb = i)), qe(Vd, a, c));
            2 == z && (Lb = i);
            if ((12 == z || 6 == z) && kc >= H && lc >= I && kc < H + K && lc < I + M) Lb = i;
            b != Lb && (r.style.cursor = Lb ? "pointer" : "default")
        },
        Af = function (a) {
            Pe = Oe = l;
            Hf(a);
            se()
        },
        Bf = function (a) {
            Oe && 2 == z && Z(3);
            Oe = l;
            Hf(a);
            se()
        },
        Ff = function (a) {
            a = Math.max(0, Math.min(1, a));
            0.5 >= a ? (a *= 2, wc.opacity = E.opacity = 0, G.opacity = zc.opacity = 1, G.i = 1 - a, G.J = -12 * a) : (a = 2 * (a - 0.5), G.opacity = 0, zc.opacity = wc.opacity = E.opacity = 1, wc.i = E.i = a, E.x = 77 - E.getWidth(), E.J = q(a, 12, 4), E.y = L + 10 - E.J, wc.x =
                E.x - 6)
        },
        Gf = function (a) {
            a = Math.max(0, Math.min(1, a));
            0.5 >= a ? (a *= 2, xc.opacity = yc.opacity = 0, F.opacity = 1, F.i = 1 - a, F.x = 77 + 55 * a, F.J = 12 * a, F.y = L + 10 - F.J) : (a = 2 * (a - 0.5), xc.opacity = yc.opacity = 1, F.opacity = 0, xc.i = yc.i = a, yc.J = q(a, -12, -4))
        },
        Ef = function () {
            var a = D;
            a.stop();
            a.left = (N - 24) / 2;
            a.top = -10
        },
        xf = function () {
            var a = oa(),
                b = Math.min(33, a - Rc);
            if (16 > b) window.setTimeout(xf, 16 - b);
            else {
                var c;
                if (c = !Ze) {
                    yd();
                    if (P) {
                        P = l;
                        hf(cd, 650, M + L + fd);
                        H = Math.floor((cd.width - K) / 2);
                        hf(gd, K, M, H, L);
                        ma(cd);
                        ma(gd);
                        Q[0].opacity && (hd.x = H, hd.a(),
                            id.x = H + K - id.getWidth(), id.a());
                        (c = Q[2]) && c.opacity && Dd();
                        jd.x = H;
                        jd.y = L;
                        jd.S = K;
                        jd.R = M;
                        jd.a();
                        if (rd)
                            for (c = 0; c < dd; c++)
                                for (var d = 0; d < ed; d++) 0 != qd[c][d] && Bd(d, c);
                        for (c = 0; c < Q.length; c++) Q[c] && Q[c].a();
                        if ((c = Q[1]) && c.opacity) {
                            kd.save();
                            kd.beginPath();
                            kd.rect(H, 0, N, L + -11);
                            kd.clip();
                            for (c = 0; c < J.length; c++) J[c].a();
                            for (c = 0; c < R.length; c++) R[c].a();
                            kd.restore()
                        }
                    }
                    c = H || 0;
                    var d = K || 0,
                        e = Tb.height;
                    1 != z && (2 != z && 3 != z) && (c -= 16, d += 32);
                    hf(Ub, d, e, c, 0) && (Kb = c, hf(Sb, K || 0, M || 0, H, L), sa(e));
                    ma(Sb);
                    ma(Ub);
                    ld && ld.opacity && (ld.x =
                        H - Kb + K / 2, ld.y = 12 - 0.0075 * a % 24, ld.clip(0, 0, 650, 12), ld.a());
                    if ((c = Q[3]) && c.opacity) {
                        c = Zc.length;
                        d = H - Kb + (K - 100 * (c - 1)) / 2;
                        for (e = 0; e < c; e++) {
                            var f = Zc[e];
                            f.x = d + 100 * e;
                            f.frame = Math.floor(a / 150 % 4);
                            f.a()
                        }
                    }
                    if ((c = 1 - Math.min(1, rd / 100)) && (!td || !td.s)) {
                        if (!Cc) {
                            Cc = [];
                            for (d = 0; 5 > d; d++) e = Xb.o(), e.x = H - Kb + Math.random() * K - e.getWidth() / 2, e.y = L + Math.random() * M - e.getHeight() / 2, Cc.push(e)
                        }
                        for (d = 0; d < Cc.length; d++) f = 0.002 * a + 2 * d, e = Cc[d], e.p = f % (2 * Math.PI), e.frame = f & 1, e.opacity = c, e.a()
                    } else Cc && (Cc = k);
                    switch (z) {
                        case 2:
                            We = Oe ? Math.min(6,
                                We + 0.05 * b) : Math.max(0, We - 0.05 * b);
                        case 1:
                            if (Mb) {
                                if (!Mb.s && mf()) {
                                    Xc();
                                    B = [];
                                    var g = [hc];
                                    c = function (a) {
                                        Mb != a && g.push(a)
                                    };
                                    rd && (c(fc), c(gc));
                                    c(jc);
                                    c(ic);
                                    Mb = g[Math.floor(Math.random() * g.length)];
                                    Mb.play()
                                }
                            } else c = N / 2, Cd(new zb(c, 30, c, 4), 2), yd(), Mb = fc, Mb.play();
                        case 3:
                            If(a, b);
                            for (c = 0; c < Me.length; c++) d = Me[c], d.x += b * (2E-4 + 1E-5 * (75 - d.y)), d.x > K && (d.x = -d.getWidth()), d.a();
                            C.a();
                            Uc(C);
                            Yb.x = (N - Yb.getWidth()) / 2;
                            Yb.y = I - Yb.getHeight();
                            Yb.a();
                            Uc(Yb);
                            sc && (sc.x = tc.x = uc.x = Yb.x + 159, sc.y = tc.y = Yb.y + 21, sc.y -= 6 - We, uc.y = sc.y,
                                tc.clip(0, 0, 650, I), tc.a(), sc.clip(0, 0, 650, I), sc.a(), 2 == z && (Pe && uc.a(), vc.s || vc.play()));
                            nf(a);
                            break;
                        case 4:
                            if (!nc.s && mf())
                                if (rf())
                                    for (c = 0; c < B.length; c++) B[c].target(N / 2, -10);
                                else Z(5);
                            break;
                        case 6:
                            lf(), rd || Z(7), Jf(a), Kf(a), If(a, b), pf(a);
                        case 5:
                            nf(a);
                        case 7:
                            wc.a();
                            xc.a();
                            E.a();
                            yc.a();
                            zc.a();
                            F.a();
                            G.a();
                            Ac && (Bc.opacity = Math.abs(Math.sin(0.005 * a)), Bc.a());
                            break;
                        case 12:
                            lf();
                            a: {
                                c = D;
                                for (d = 0; d < xe.length; d++)
                                    if (e = xe[d], e.U && !e.Ta && Ab(c, e)) {
                                        e.Ta = i;
                                        e.Sa.play();
                                        c = e.type;
                                        break a
                                    } c = k
                            }
                            c && (V("pp"), 2 == c ? (ae.play(),
                                Y = Math.min(6E4, Y + 18E3)) : 4 == c ? (be.play(), X += 50) : 5 == c ? (be.play(), X += 75) : c && ( of (), mc = c, 3 == c ? (D.g.x = D.g.y = 0, Xe = a + 1E3) : 1 == c && (wf("cp"), Xe = a + 6E3)));
                            nf(a);
                            c = Math.floor(Y / 1E3);
                            if (D.g.x || D.g.y) Y -= b;
                            d = Math.floor(Y / 1E3);
                            0 >= Y ? (Y = 0, oc.s || Z(14)) : 10 > d && c != d && ($d.play(), V("tr"));
                            pf(a);
                            !rd && !oc.s && Z(13);
                            Jf(a);
                            Kf(a);
                        case 11:
                        case 13:
                            If(a, b);
                            break;
                        case 8:
                            if ((!td || !td.s) && 0 != Qb) Nb -= b, 0 >= Nb && (Ee(B[pc++]), Nb += 500);
                            pc >= B.length && Z(9);
                            break;
                        case 9:
                            e = B[Math.floor(Math.random() * B.length)];
                            c = Math.max(0, 1 - Ye / 8E3);
                            if (0 <= e.top &&
                                (d = Math.max(16, Math.min(N - 16, e.left + (e.width - 16) / 2)), e = Math.max(16, Math.min(O - 16, e.top - e.height)), !(64 > Math.abs(d - N / 2) && 64 > e)))
                                for (f = 0; f < xe.length; f++) {
                                    var j = xe[f];
                                    !j.U && j.C < c && (j.left = d, j.top = e, Vc(j), j.Ra.play())
                                }
                            Ye -= b;
                            0 >= Ye && (Ye = 0, Z(10));
                            break;
                        case 10:
                            rf() || Z(11)
                    }
                    c = k;
                    if (Ed && (6 == z || 12 == z) && (D.g.x || D.g.y)) c = 500 > a - Se ? "ed" : "ec";
                    Ob != c && (x.stop(Ob), c && wf(c), Ob = c);
                    for (c = 0; c < Sc.length; c++) Sc[c].update(b);
                    Sc.sort(Yc);
                    for (c = 0; c < Sc.length; c++) Sc[c].a();
                    ke = Math.min(6E4, Y) / 6E4 * Math.PI;
                    c = X;
                    c = Math.floor(c);
                    for (d =
                        0; d < U.length; d++) le[d] = c % 10, c = Math.floor(c / 10);
                    if (!(49 <= S)) {
                        Fd && (Kd.beginPath(), Kd.fillStyle = "rgba(255,255,255," + Fd + ")", Kd.rect(0, 0, T.width, T.height), Kd.fill());
                        c = 16 + Math.floor((K - Ld.getWidth()) / 2);
                        d = L + M + S + 2;
                        e = c + 131;
                        f = d + 16;
                        a: {
                            for (j = U.length - 1; U[j] == le[j];)
                                if (0 > --j) break a;
                            var n = Math.min(1, 0.01 * b);me[0] = i;
                            for (var p = 0; p <= j; p++)
                                if (me[p]) {
                                    9 == U[p] && p < j && (me[p + 1] = i);
                                    var s = Math.floor(U[p] + 1);
                                    U[p] += n;
                                    U[p] >= s && (10 <= s && (s = 0), U[p] = s, me[p] = l)
                                }
                        }
                        for (j = 0; j < U.length; j++) {
                            var s = U[j],
                                A = f,
                                n = 0 != j ? Md : Nd,
                                p = n.L,
                                ga = 20 * s;
                            n.x = e + 17 * (U.length - j - 1);
                            n.y = A;
                            n.L += ga;
                            9 < s ? (s = 20 * (1 - Math.min(1, s - 9)), A = 20 - s, n.k = s, n.a(), n.y += s, n.L = p, n.k = A, n.a()) : (n.k = 20, n.a(), n.L = p)
                        }
                        Od.x = e;
                        Od.y = f;
                        Od.a();
                        Ld.x = c;
                        Ld.y = d;
                        Ld.a();
                        S && (Pd.x = c, Pd.y = d, Pd.a(), Qd.x = c + 20, Qd.y = d + 63, Qd.a(), Rd.x = c + 20 + 4, Rd.y = d + 63 + 4, Rd.a(), Hd ? (Kd.save(), Kd.beginPath(), Kd.rect(c + 321 - 2 - 1, d + 67 - 2 - 1, 30, 70), Kd.fillStyle = "#516a88", Kd.fill(), Kd.restore()) : (Sd.x = Td.x = c + 321, Td.y = d + 67, Td.a(), Sd.y = d + 108, Sd.a()), Ud.x = c + 321, Ud.y = d + 149, Ud.a(), e = Gd[ne], e.x = c + 225 - e.getWidth() / 2, e.y = d + 130 - e.getHeight() /
                            2, e.a());
                        Vd.x = c + 321;
                        Vd.y = d + 13;
                        Vd.a();
                        Wd.x = c;
                        Wd.y = d;
                        Xd.x = Yd.x = Zd.x = c + 27;
                        Xd.y = Yd.y = Zd.y = d + 8;
                        c = ke - Zd.p;
                        d = Math.abs(c);
                        b *= 0.002;
                        e = ke;
                        d >= b && (e = Zd.p + c / d * b);
                        Xd.p = Yd.p = Zd.p = e;
                        Wd.a();
                        Zd.a();
                        Xd.a();
                        Yd.a()
                    }
                    c = 12E4 > a - Te
                }
                c ? (ra(xf), Rc = a, Re = i) : Re = l
            }
        },
        Z = function (a) {
            if (a != z) {
                z = a;
                var b = oa();
                switch (a) {
                    case 0:
                        Ze = ta = l;
                        Mb = k;
                        B = [];
                        Xc();
                        break;
                    case 1:
                        zd(570, 83, 0, 114);
                        D.left = -42;
                        Me = [];
                        for (var c = 0; 10 > c; c++) a = (0.5 < Math.random() ? Zb : $b).o(), a.x = K * Math.random() - a.getWidth(), a.y = 75 * Math.random() - a.getHeight(), xa(a, 3E3, 1, 0), Me.push(a);
                        break;
                    case 3:
                        for (a = 0; 10 > a; a++) xa(Me[a], 500, 0);
                        We = 6;
                        Lc.play();
                        a = Ub;
                        var b = uf("./sprite_f.png"),
                            d = cd,
                            e = new vd(new w(d, b, 1489, 0, 9, 25), new w(d, b, 0, 0, 12, 49), new w(d, b, 359, 21, 75, 49), new w(d, b, 2110, 0, 9, 47), new w(d, b, 469, 166, 25, 47), new w(d, b, 1489, 51, 46, 49), new w(d, b, 626, 0, 388, 200));
                        Q[2] = e;
                        e.v = new w(d, b, 59, 172, 5, 15);
                        var f = new vd(new w(d, b, 497, 149, 9, 26), new w(d, b, 437, 21, 10, 49), new w(d, b, 1017, 157, 65, 49), new w(d, b, 347, 21, 9, 47), new w(d, b, 509, 149, 26, 47), new w(d, b, 1489, 150, 46, 40), new w(d, b, 1726, 0, 381, 218));
                        Q[3] = f;
                        f.v = new w(d, b, 173, 0, 249, 18);
                        f.v.opacity = 0.8;
                        d = new w(od, b, 59, 148, 25, 21);
                        d.y = -21;
                        Zc = [];
                        for (var g = 0; 6 > g; g++) Zc.push(d.o());
                        d = new w(od, b, 1489, 28, 18, 20);
                        g = d.o();
                        g.i = -1;
                        $c = new Tc;
                        $c.d = new w(od, b, 538, 149, 18, 40);
                        $c.d.offsetY = -20;
                        $c.width = 18;
                        $c.height = 20;
                        $c.X = d;
                        ad = new Tc;
                        ad.d = $c.d.o();
                        ad.d.i = -1;
                        ad.width = 18;
                        ad.height = 20;
                        ad.X = g;
                        e.w = new t;
                        v(e.w, 500);
                        u(e.w, function () {
                            e.v.k = 0
                        });
                        u(e.w, function (a) {
                            Q[2].opacity = a;
                            P = i
                        }, 250);
                        u(e.w, function () {
                            Vc($c, i);
                            Vc(ad, i)
                        });
                        u(e.w, function (a) {
                            e.v.k = la(a, 0, 14);
                            sd = q(a, N / 2 + 10, 173);
                            Dd();
                            P = i
                        }, 750);
                        e.z = new t;
                        u(e.z, function (a) {
                            e.v.k = 14 * (1 - a);
                            sd = q(a, 173, N / 2 + 10);
                            Dd();
                            P = i
                        }, 500);
                        u(e.z, function () {
                            Wc($c);
                            Wc(ad)
                        });
                        v(e.z, 250);
                        u(e.z, function () {
                            Q[2].opacity = 0
                        });
                        f.w = new t;
                        u(f.w, function () {
                            f.v.k = 0
                        });
                        v(f.w, 500);
                        u(f.w, function (a) {
                            Q[3].opacity = a;
                            P = i
                        }, 250);
                        u(f.w, function (a) {
                            for (var b = 0; b < Zc.length; b++) {
                                var c = Zc[b],
                                    d = I + -40 + (b & 1 ? -4 : 0);
                                c.y = q(a, -c.getHeight(), d);
                                c.opacity = 0.9 * a
                            }
                            f.v.k = la(a, 0, 18);
                            P = i
                        }, 750);
                        f.z = new t;
                        u(f.z, function (a) {
                            for (var b = 0; b < Zc.length; b++) {
                                var c = Zc[b];
                                c.y = q(a, I + -40 + (b & 1 ? -4 : 0),
                                    -c.getHeight())
                            }
                            f.v.k = 18 * (1 - a);
                            P = i
                        }, 500);
                        u(f.z, function (a) {
                            Q[3].opacity = 1 - a;
                            P = i
                        }, 250);
                        Pd = new w(T, b, 1127, 0, 359, 208, 0, 45);
                        Hd || (ce = new w(T, b, 359, 73, 25, 26), de = new w(T, b, 559, 149, 25, 26));
                        ee = new w(T, b, 1085, 157, 25, 26);
                        Qd = new w(T, b, 359, 102, 107, 107);
                        Rd = new w(T, b, 1017, 0, 107, 107);
                        Gd = [];
                        Gd.push(new w(T, b, 15, 0, 155, 145));
                        Gd.push(new w(T, b, 469, 0, 154, 146));
                        Gd.push(new w(T, b, 173, 21, 171, 160));
                        Gd.push(new w(T, b, 1560, 0, 163, 151));
                        Jd = new t;
                        u(Jd, function (a) {
                            S = -208 * a;
                            Fd = 0.67 * a
                        }, 750);
                        Id = new t;
                        u(Id, function (a) {
                            S = -208 * (1 - a);
                            Fd = 0.67 * (1 - a)
                        }, 750);
                        fe = new t;
                        u(fe, function () {
                            V("hn")
                        });
                        u(fe, function (a) {
                            Rd.p = Qd.p = Math.sin(2 * Math.PI * a)
                        }, 1E3);
                        Hd || (Td = new oe(ce, gf), Sd = new oe(de, ff));
                        Ud = new oe(ee, ef);
                        we[1] = new w(a, b, 37, 148, 19, 17);
                        ve[1] = new w(a, b, 15, 148, 19, 17);
                        we[2] = ve[2] = new w(a, b, 587, 195, 20, 17);
                        we[3] = ve[3] = new w(a, b, 587, 149, 20, 20);
                        we[4] = new w(a, b, 144, 195, 10, 10);
                        ve[4] = new w(a, b, 144, 172, 12, 20);
                        we[5] = new w(a, b, 469, 149, 15, 14);
                        ve[5] = new w(a, b, 587, 172, 20, 20);
                        Dc = new w(a, b, 1017, 110, 37, 44);
                        Ec = new w(a, b, 67, 172, 37, 44);
                        Fc = new w(a, b, 1489, 103,
                            34, 44);
                        Gc = new w(a, b, 1560, 154, 34, 44);
                        a = x;
                        for (c in Le) a.load(Le[c]);
                        Pb = new ub("http://www.google.com/doodles/zamboni", Ke(0), "", "");
                        Rb = Ke(1) + " " + Ke(2);
                        break;
                    case 4:
                        jf(0, b);
                        Y = 6E4;
                        nc.play();
                        break;
                    case 8:
                        for (a = 0; a < B.length; a++) B[a].reset();
                        pc = Nb = 0;
                        V("do");
                        wf("sm");
                        Ye = 8E3;
                        break;
                    case 10:
                        for (a = 0; a < B.length; a++) B[a].target(N / 2, -10);
                        V("wh");
                        x.stop("sm");
                        break;
                    case 5:
                        Oc.play();
                    case 11:
                        Kc.play();
                        break;
                    case 7:
                        window.localStorage && window.localStorage.setItem("doodle-zamboni-tutorial", "true"), Pc.play();
                    case 13:
                        Mc.play();
                        break;
                    case 14:
                        ne = bd - 1; of ();
                        oc.play();
                        V("lf");
                        vf();
                        break;
                    case 15:
                        ne = 3, Jd.s || Jd.play(), be.play(), of (), x.stop("lw"), V("fv"), X += Y / 250, Y = 0, cf++, vf()
                }
            }
        },
        jf = function (a, b) {
            Qb = a;
            Te = b;
            Y = Math.max(15E3, Y);
            for (var c = 0; c < B.length; c++) Wc(B[c]);
            B = [];
            Wc(D);
            ze();
            switch (a) {
                case 1:
                    bf++;
                case 0:
                    X = 0;
                    Y = 6E4;
                    B = [new W(ac, 2E-4)];
                    zd(396, 172, 1, 49);
                    break;
                case 2:
                    B = [new W(ac, 2E-4), new W(bc, 2.2E-4)];
                    Ce([2]);
                    break;
                case 3:
                    B = [new W(ac, 2E-4), new W(bc, 2.2E-4), new W(cc, 2.5E-4)];
                    Ce([4, 2]);
                    break;
                case 4:
                    B = [new W(dc, 2.7E-4), new W(ec, 3E-4),
                        new W(dc, 3.3E-4), new W(ec, 3.6E-4)
                    ];
                    Ce([2, 3, 3]);
                    zd(440, 196, 2, 49);
                    V("rb");
                    break;
                case 5:
                    B = [new W(ec, 3E-4), new W(dc, 3.3E-4), new W(ec, 3.6E-4), new W(dc, 3.9E-4)];
                    Ce([2, 2, 3, 3, 3]);
                    break;
                case 6:
                    B = [new W(dc, 3.3E-4), new W(ec, 3.6E-4), new W(ec, 3.9E-4), new W(dc, 4.2E-4)];
                    Ce([4, 2, 2, 3, 3, 3, 3]);
                    break;
                case 7:
                    B = [new W(Dc, 3.5E-4), new W(Fc, 3.7E-4), new W(Ec, 3.9E-4), new W(Gc, 4.1E-4)];
                    Ce([2, 2, 1, 1, 3, 3, 0]);
                    zd(550, 250, 3, 49);
                    V("rb");
                    break;
                case 8:
                    B = [new W(Dc, 3.5E-4), new W(Fc, 3.7E-4), new W(Ec, 3.9E-4), new W(Gc, 4.1E-4), new W(dc, 3.3E-4),
                        new W(ec, 3.6E-4), new W(dc, 3.9E-4), new W(ec, 4.2E-4)
                    ];
                    Ce([2, 2, 2, 1, 1, 1, 3, 3, 0]);
                    zd(575, 275, 3, 49);
                    V("rb");
                    break;
                case 9:
                    B = [new W(Dc, 3.5E-4), new W(Fc, 3.7E-4), new W(Ec, 3.9E-4), new W(Gc, 4.1E-4), new W(dc, 3.3E-4), new W(ec, 3.6E-4), new W(dc, 3.9E-4), new W(ec, 4.2E-4), new W(ac, 2E-4), new W(bc, 2.2E-4), new W(cc, 2.5E-4)], Ce([4, 2, 2, 2, 1, 1, 1, 1, 3, 3, 0]), zd(600, 300, 3, 49), V("rb")
            }
            vf();
            af = 0
        },
        Hf = function (a) {
            Te = oa();
            Re || xf();
            a.target == Ub && (kc = (a.offsetX || a.layerX || 0) + Kb, lc = a.offsetY || a.layerY || 0)
        },
        Jf = function (a) {
            if (!Mc.s)
                if (3 ==
                    mc) a = Math.floor((Xe - a) / 66), 0 <= a && $(a % 4);
                else if (!Qe || 100 < a - Ue) {
                Ue = a;
                a = Math.abs(D.g.x);
                var b = Math.abs(D.g.y);
                a > b ? 0 > D.g.x ? $(1) : 0 < D.g.x && $(3) : a < b && (0 > D.g.y ? $(0) : 0 < D.g.y && $(2))
            }
        },
        If = function (a, b) {
            var c = D;
            mc && a > Xe && of ();
            14 != z && (c.B += 0.05 * b, 15 < c.B && (c.B = 0, c.d.frame = 0 == c.d.frame ? 1 : 0));
            if (12 == z || 6 == z) {
                var d = 2.5E-4;
                3 == mc ? d = 0 : 50 > a - Se && (d = 2.7E-4);
                c.Ka = d;
                if (c.g.x || c.g.y) af += b
            }
            c.Ua && a > $e && (V("hw"), $e = a + 150);
            c.d.T = 1 == mc || a < $e ? 3 : 0
        },
        Kf = function (a) {
            var b = D;
            3E4 < a - Te && b.d != Jc && ($(3), b.d = Jc)
        },
        Lf = function () {
            if (!r && (r =
                    document.getElementById("hplogo"))) {
                Z(0);
                var a = kf();
                if (a && a.getContext) {
                    Tb = a;
                    Sb = kf();
                    Sb.style.opacity = 0.1;
                    var b = kf(),
                        c = kf();
                    Ub = c;
                    c.getContext("2d");
                    var d = uf("./sprite_a.png");
                    cd = a;
                    kd = a.getContext("2d");
                    gd = b;
                    nd = b.getContext("2d");
                    od = c;
                    md = c.getContext("2d");
                    N = O = K = M = k;
                    bd = 0;
                    a = new vd(k, k, k, k, k, k, k);
                    a.opacity = 1;
                    Q[0] = a;
                    hd = new w(cd, d, 175, 0, 285, 115);
                    id = hd.o();
                    id.i = -1;
                    pd = new w(b, d);
                    pd.k = 2;
                    pd.D = 2;
                    jd = new w(cd, d, 0, 123, 172, 120);
                    a.z = new t;
                    v(a.z, 750);
                    u(a.z, function () {
                        Q[0].opacity = 0
                    });
                    T = c;
                    Kd = c.getContext("2d");
                    b = (b =
                        window.google) && b.doodle;
                    Hd = !(!b || !b.standalone);
                    b = pa("doodle-zamboni-audio");
                    Ed = !!b || b == k;
                    S = 49;
                    Fd = 0;
                    te();
                    Vb = new w(c, d, 473, 0, 49, 50, -1, -26);
                    Wb = Vb.o();
                    Wb.offsetX = 7;
                    Wb.i = -1;
                    Xb = new w(c, d, 175, 118, 15, 15);
                    Yb = new w(c, d, 175, 158, 436, 91);
                    Zb = new w(c, d, 473, 53, 33, 6);
                    $b = new w(c, d, 509, 53, 28, 6);
                    C = new w(c, d, 263, 118, 69, 37);
                    C.opacity = 0;
                    ac = new w(c, d, 558, 109, 23, 33);
                    bc = new w(c, d, 558, 62, 26, 30);
                    cc = new w(c, d, 208, 118, 26, 34);
                    dc = new w(c, d, 473, 109, 41, 44);
                    ec = new w(c, d, 473, 62, 41, 44);
                    fc = new t;
                    u(fc, function () {
                        $(3);
                        D.top = Math.min(M -
                            24, wd() - 12);
                        D.I = i;
                        Vc(D)
                    });
                    u(fc, function (a) {
                        var b = D.left;
                        D.left = q(a, -42, 650);
                        D.B += Math.abs(D.left - b)
                    }, 1E4);
                    u(fc, function () {
                        Wc(D)
                    });
                    gc = new t;
                    u(gc, function () {
                        $(1);
                        D.top = Math.max(0, Math.min(M - 24, wd() - 12));
                        D.I = i;
                        Vc(D)
                    });
                    u(gc, function (a) {
                        var b = D.left;
                        D.left = q(a, 650, -42);
                        D.B += Math.abs(D.left - b)
                    }, 1E4);
                    u(gc, function () {
                        Wc(D)
                    });
                    hc = new t;
                    u(hc, function () {
                        var a = Math.floor(3 * Math.random()),
                            b = ac;
                        1 == a ? b = bc : 2 == a && (b = cc);
                        B = [new W(b, 1.8E-4)];
                        B[0].moveTo(-10, qf());
                        Ee(B[0]);
                        Fe(B[0], 2 * N / 3, qf());
                        Fe(B[0], N / 3, qf());
                        Fe(B[0],
                            N + 10, qf())
                    });
                    ic = new t;
                    u(ic, function () {
                        B = [new W(ec, 2.5E-4), new W(dc, 2.5E-4)];
                        B[0].moveTo(-10, qf());
                        B[1].moveTo(N + 10, qf());
                        Ee(B[0]);
                        Ee(B[1]);
                        Fe(B[0], N / 2, 30);
                        Fe(B[1], N / 2, 60);
                        Fe(B[0], N / 2 - 30, 60);
                        Fe(B[1], N / 2 + 30, 30);
                        Fe(B[0], N + 10, qf());
                        Fe(B[1], -10, qf())
                    });
                    jc = new t;
                    u(jc, function () {
                        C.opacity = 1;
                        C.y = I - C.getHeight();
                        C.i = 1
                    });
                    u(jc, function (a) {
                        C.x = q(a, -C.getWidth(), 0);
                        C.frame = C.x / 5 & 1 ? 1 : 0
                    }, 3E3);
                    v(jc, 1E3);
                    u(jc, function () {
                        C.frame = 2
                    }, 500);
                    u(jc, function (a) {
                        C.offsetY = -10 * Math.sin(a * Math.PI)
                    }, 200);
                    u(jc, function () {
                        C.i = -1
                    });
                    u(jc, function (a) {
                        C.x = q(a, 0, -C.getWidth());
                        C.frame = C.x / 5 & 1 ? 1 : 0
                    }, 500);
                    u(jc, function () {
                        C.opacity = 0
                    });
                    D = new Tc;
                    D.ua = 0.3;
                    D.d = Vb;
                    D.width = 42;
                    D.height = 24;
                    Ve = 3
                }
            }
        },
        Mf = function () {
            16 != z && (Z(16), x && xb(), ta = Ze = i, r && (sa(198), r.innerHTML = "", r = k))
        },
        Nf = function () {
            var a = window.google;
            if (a) {
                var b = a.msg,
                    c = function () {
                        var a = b && b.unlisten;
                        a && a(67, c);
                        Mf();
                        return i
                    },
                    d = function () {
                        var d = document.getElementById("hplogo");
                        if (d && "hidden" != d.style.visibility) {
                            var d = a.psy,
                                f = b && b.listen;
                            d && (d.q && f) && f(67, c)
                        }
                    };
                d();
                if (!a.doodle || !a.doodle.jesr) ba("google.doodle.jesr"),
                    a.rein && a.dstr && (a.rein.push(d, Lf), a.dstr.push(c))
            }
            if ((d = window.google) && d.doodle) Mf && (d.doodle.cpDestroy = Mf), d.doodle.cpInit = function () {
                Mf && Mf();
                Lf()
            };
            Lf()
        },
        Of = window.google;
    Of && Of.x ? Of.x({
        id: "DOODLE"
    }, Nf) : Nf();
})();