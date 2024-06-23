function Utility() {
    var a = {
        isDoubleTapBug: function(a, b) { if ($.browser.android) { if ("touchstart" != a.type && "touchstart" == $(b).data("lastTouch")) return a.stopImmediatePropagation(), a.preventDefault(), !0; - 1 != a.type.indexOf("touch") && $(b).data("lastTouch", !0) } return !1 },
        getEventNames: function(a) {
            switch (a) {
                case "start":
                    return $.browser.ios || $.browser.android ? "touchstart" : "touchstart mousedown";
                case "end":
                    return $.browser.ios || $.browser.android ? "touchend" : "touchend mouseup";
                default:
                    return a
            }
        },
        touchEnded: function() { touchEndedSinceTap = !0 },
        isTouch: function() { return "ontouchstart" in document.documentElement },
        padLeft: function(a, b, c) { return Array(b - String(a).length + 1).join(c || "0") + a },
        trim: function(a) { return a.replace(/^\s*|\s*$/gi, "") },
        between: function(a, b, c) { return c ? 1 * (Math.random() * (b - a) + a).toFixed(c) : Math.floor(Math.random() * (b - a + 1) + a) },
        shuffleSimple: function(a) { return a.sort(function() { return .5 - Math.random() }), a },
        shuffle: function(a) {
            for (var b = 0; b < a.length - 1; b++) {
                var c = b + Math.floor(Math.random() * (a.length - b)),
                    d = a[c];
                a[c] = a[b], a[b] = d
            }
            return a
        },
        index: function(a, b) {
            var c = 0;
            for (var d in a) {
                if (c == b) return a[d];
                c++
            }
        },
        areArraysEqual: function(a, b) { return a && b ? a.join("|") === b.join("|") : !1 },
        count: function(a) { var b = 0; for (var c in a) b++; return b },
        eat: function(a) { return a.preventDefault(), a.stopPropagation(), !1 },
        pick: function(a) { var b = a; if (a.constructor == Object) { b = []; for (var c in a) b.push(c) } var d = Utils.between(0, b.length - 1); return 0 == b.length ? null : b[d] },
        draw: function(a, b) {
            var c = a;
            if (a.constructor == Object) { c = []; for (var d in a) c.push(d) }
            if (0 == c.length) return null;
            var e = Utils.between(0, c.length - 1);
            if (void 0 != b) {
                for (var f = !1, g = 0; g < c.length; g++)
                    if (c[g] == b) { e = g, f = !0; break }
                if (!f) return null
            }
            var h = c[e];
            return c.splice(e, 1), h
        },
        removeFromArray: function(a, b) {
            if (0 == a.length) return null;
            for (var c = !1, d = -1, e = 0; e < a.length; e++)
                if (a[e] == b) { d = e, c = !0; break }
            if (!c) return null;
            var f = a[d];
            return a.splice(d, 1), f
        },
        toArray: function(a) { var b = []; for (var c in a) b.push(c); return b },
        fillArray: function(a, b, c) {
            c || (c = 1);
            for (var d = new Array, e = 0; c > e; e++)
                for (var f = a; b >= f; f++) d.push(f);
            return d
        },
        contains: function(a, b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        setCookie: function(a, b, c) {
            if (c) {
                var d = new Date;
                d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
                var e = "; expires=" + d.toGMTString()
            } else var e = "";
            document.cookie = a + "=" + b + e + "; path=/"
        },
        getCookie: function(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " == e.charAt(0);) e = e.substring(1, e.length);
                if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
            }
            return null
        },
        clearCookie: function(a) { this.setCookie(a, "", -1) },
        cssVendor: function(a, b, c) {
            switch (b) {
                case "opacity":
                    $.browser.ie ? a.css("-ms-filter", '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + Math.round(100 * c) + ')"') : a.css(b, c);
                    break;
                default:
                    for (var d = ["", "-webkit-", "-moz-", "-o-", "-ms-"], e = 0; e < d.length; e++) a.css(d[e] + b, c)
            }
        },
        createCSS: function(a, b) { b = b || "tempcss", $("#" + b).remove(); var c = '<style id="' + b + '">' + a + "</style>";!window.isWebApp && window.MSApp && window.MSApp.execUnsafeLocalFunction ? MSApp.execUnsafeLocalFunction(function() { $("head").first().append($(c)) }) : $("head").first().append($(c)) },
        setColorScheme: function(a, b) {
            var b = b || Colors.getComplementary(a),
                c = .05,
                d = (Colors.luminateHex(a, c), Colors.luminateHex(b, c), ".odd  .tile-1 .inner { background-color: " + a + "; }.even .tile-1 .inner { background-color: " + a + "; }.odd  .tile-2 .inner { background-color: " + b + "; }.even .tile-2 .inner { background-color: " + b + "; }");
            Utils.createCSS(d)
        }
    };
    for (var b in a) this[b] = a[b]
}

function opposite(a) {
    switch (a) {
        case Directions.Right:
            return Directions.Left;
        case Directions.Left:
            return Directions.Right;
        case Directions.Up:
            return Directions.Down;
        case Directions.Down:
            return Directions.Up
    }
    return null
}

function generateUUID() {
    var a = (new Date).getTime(),
        b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) { var c = (a + 16 * Math.random()) % 16 | 0; return a = Math.floor(a / 16), ("x" == b ? c : 3 & c | 8).toString(16) });
    return b
}

function Grid(a, b, c) {
    function d(a) {
        for (var b = 0; b < tiles.length; b++) {
            var c = b % width,
                d = Math.floor(b / width),
                e = tiles[b],
                f = a.call(e, c, d, b, e);
            if (f) break
        }
        return G
    }

    function e(a) {
        currentPuzzle = a, width = a.size, b = a.size, tiles = [];
        for (var c = 0; c < a.empty.length; c++) {
            var d = a.empty[c],
                e = new Tile(d, G, c, !0);
            tiles.push(e)
        }
    }

    function f(a, c) { return 0 > a || a >= width || 0 > c || c >= b ? -1 : c * width + a }

    function g() {}

    function h(a) {
        if (!noRender) {
            if (clearTimeout(renderTOH), !a) return void(renderTOH = setTimeout(function() { h(!0) }, 0));
            Game.debug && console.log("rendering..."), rendered = !1;
            for (var d = '<table data-grid="' + c + '" id="grid" cellpadding=0 cellspacing=0>', e = 0; b > e; e++) {
                d += "<tr>";
                for (var g = 0; g < width; g++) {
                    var i = f(g, e),
                        j = tiles[i],
                        k = "",
                        l = "";
                    switch (j.type) {
                        case TileType.Value:
                            k = 2, l = j.value;
                            break;
                        case TileType.Wall:
                            k = 1;
                            break;
                        case TileType.Dot:
                            k = 2
                    }
                    var m = (g + e % 2) % 2;
                    d += '<td data-x="' + g + '" data-y="' + e + '" class="' + (m ? "even" : "odd") + '"><div id="tile-' + g + "-" + e + '" class="tile tile-' + k + '"><div class="inner">' + l + "</div></div></td>"
                }
                d += "</tr>"
            }
            return d += "</table>", $("#" + c).html(d), Game.resize(), rendered = !0, G
        }
    }

    function i(a) {
        for (var b = 0; b < tiles.length; b++)
            if (tiles[b].type == TileType.Unknown || !a && tiles[b].type == TileType.Dot) return !1;
        return !0
    }

    function j(a) {
        for (var b = 0; b < tiles.length; b++) {
            var c = tiles[b];
            c.type == TileType.Unknown && c.dot(), c.type == TileType.Value && a && c.dot()
        }
        return g(), G
    }

    function k(b) {
        overwriteNumbers = !0;
        for (var c = 0; a > c; c++) {
            var d = tiles[c * a + b.x];
            d.type == TileType.Unknown && d.dot(), d.type == TileType.Value && overwriteNumbers && d.dot();
            var d = tiles[b.y * a + c];
            d.type == TileType.Unknown && d.dot(), d.type == TileType.Value && overwriteNumbers && d.dot()
        }
        return g(), G
    }

    function l(a, b, c) { return o(a, b).number(c), g(), G }

    function m(a, b) { return o(a, b).dot(), g(), G }

    function n(a, b) { return o(a, b).wall(), g(), G }

    function o(a, c) { return 0 > a || a >= width || 0 > c || c >= b ? null : tiles[f(a, c)] }

    function p(a) {
        var c = a * a;
        width = b = a;
        for (var d = 0; c > d; d++) {
            var e = new Tile(2 * (a - 1), G, d);
            tiles.push(e)
        }
    }

    function q(b) {
        for (var c, d = !0, e = 0, b = b || width, f = [], h = 0; h < tiles.length; h++) c = tiles[h], c.value > b && f.push(c);
        Utils.shuffle(f);
        for (var i = 0; d && e++ < 99;) {
            d = !1;
            for (var h = i; h < f.length; h++) {
                var j = f[h].x,
                    l = f[h].y;
                if (c = tiles[l * a + j], c.value > b) {
                    var m = 1,
                        n = b,
                        o = c.getTilesInRange(m, n),
                        p = null,
                        q = null;
                    for (Utils.shuffle(o); !p && o.length;) p = o.pop(), q || (q = p);
                    p || (p = q), p ? (p.wall(!0), k(p), r(), d = !0) : console.log("no cut found for", c.x, c.y, c.value, o, m, n);
                    break
                }
            }
        }
        g()
    }

    function r(a, b) {
        var c = !0,
            d = 0,
            e = null,
            f = tiles;
        for (b && (f = tiles.concat(), Utils.shuffle(f)); c && d++ < 99;) { if (c = !1, i()) return a && clearTimeout(renderTOH), !0; for (var h = 0; h < f.length; h++) f[h].info = f[h].collect(); for (var j, k, h = 0; h < f.length; h++) { if (j = f[h], k = j.collect(j.info), j.isDot() && !k.unknownsAround && !b) { j.number(k.numberCount, !0), c = HintType.NumberCanBeEntered; break } if (j.isNumber() && k.unknownsAround) { if (k.numberReached) { b ? e = j : j.close(), c = HintType.ValueReached; break } if (k.singlePossibleDirection) { b ? e = j : j.closeDirection(k.singlePossibleDirection, !0, 1), c = HintType.OneDirectionLeft; break } for (var l in Directions) { var m = k.direction[l]; if (m.wouldBeTooMuch) { b ? e = j : j.closeDirection(l), c = HintType.WouldExceed; break } if (m.unknownCount && m.numberWhenDottingFirstUnknown + m.maxPossibleCountInOtherDirections <= j.value) { b ? e = j : j.closeDirection(l, !0, 1), c = HintType.OneDirectionRequired; break } } if (c) break } if (j.isUnknown() && !k.unknownsAround && !k.completedNumbersAround && 0 == k.numberCount) { b ? e = j : j.wall(!0), c = HintType.MustBeWall; break } } if (tileToSolve && tileToSolve.allowQuickSolve && j && tileToSolve.tile.x == j.x && tileToSolve.tile.y == j.y && tileToSolve.exportValue == j.getExportValue()) return !0; if (b) return H.mark(e, c), c = !1, !1 }
        return g(), a && clearTimeout(renderTOH), !1
    }

    function s(a) { a = a || 1, saveSlots[a] = { values: [] }; for (var b = 0; b < tiles.length; b++) saveSlots[a].values.push(tiles[b].value); return G }

    function t(a) { a = a || 1; var b = saveSlots[a]; if (!b) return console.log("Cannot restore save slot ", a), G; for (var c = 0; c < b.values.length; c++) tiles[c].value = b.values[c]; return g(), G }

    function u() { v(!0), r() || (t("full"), v(!1)), t("empty") }

    function v(a) {
        var b, c = 0,
            d = 0,
            e = 1,
            f = tiles.concat();
        tileToSolve = null, s("full");
        for (var g = 0; g < f.length; g++) tiles[g].isWall() && d++;
        Utils.shuffle(f);
        for (var g = 0; g < f.length && c++ < 6;) {
            if (tileToSove = null, b = f[g++], b.isWall()) {
                if (d == e) continue;
                d--
            }
            tileToSolve = { tile: b, exportValue: b.getExportValue(), allowQuickSolve: a }, b.clear(), s("breakdown"), r(!0) ? (t("breakdown"), c = 0) : (t("breakdown"), tileToSolve.tile.setExportValue(tileToSolve.exportValue), b.isWall() && d++)
        }
        tileToSolve = null, s("empty")
    }

    function w() {
        for (var a = tiles, b = [], c = 0; c < a.length; c++) a[c].info = a[c].collect();
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = d.collect(d.info);
            d.isNumber() && e.numberCount != d.value && 0 == e.unknownsAround && b.push(d)
        }
        return b
    }

    function x(a) {
        if (a) return y();
        for (var b = 0; b < tiles.length; b++) {
            var c = tiles[b];
            if (!c.isEmpty)
                if (1 == currentPuzzle.full[b]) { if (!c.isWall()) return !1 } else if (currentPuzzle.full[b] > 1 && !c.isNumberOrDot()) return !1
        }
        return !0
    }

    function y() { for (var a = 0; a < tiles.length; a++) { var b = tiles[a]; if (b.isEmpty) return !1; if (b.isNumber()) { var c = b.collect(); if (b.value != c.numberCount) return console.log(b.x, b.y, b.value, c.numberCount), !1 } } return !0 }

    function z(a, c) {
        if ("number" == typeof a && "number" == typeof c) return o(a, c).unmark(), G;
        for (var c = 0; b > c; c++)
            for (var a = 0; a < width; a++) o(a, c).unmark();
        return G
    }

    function A(a, b) { return o(a, b).mark(), G }

    function B() { d(function(a, b, c, d) { d.clear() }) }

    function C() { var a = []; return d(function() { a.push(this.getExportValue()) }), a }

    function D() { var a = []; return d(function() { this.isEmpty && a.push(this) }), a }

    function E() { return Math.round(100 * (D().length / (width * b))) }

    function F() { var a = []; return d(function(b, c, d, e) { e.isLockedIn() && a.push(e) }), a.length ? Utils.pick(a) : !1 }
    var G = this,
        c = c || "board";
    width = a, b = b || a, tiles = [], saveSlots = {}, renderTOH = 0, rendered = !1, noRender = !1, emptyTile = new Tile(-99, G, -99), currentPuzzle = null, tileToSolve = null;
    var H = G.hint = new Hint(this);
    this.activateDomRenderer = function() { g = this.render = h, noRender = !1 }, this.each = d, this.fillDots = j, this.render = g, this.solve = r, this.number = l, this.wall = n, this.dot = m, this.getIndex = f, this.tile = o, this.load = e, this.generate = p, this.maxify = q, this.save = s, this.restore = t, this.breakDown = u, this.clear = B, this.getNextLockedInTile = F, this.getValues = C, this.isValid = x, this.mark = A, this.unmark = z, this.getClosedWrongTiles = w, this.__defineGetter__("tiles", function() { return tiles }), this.__defineGetter__("width", function() { return width }), this.__defineGetter__("height", function() { return b }), this.__defineGetter__("rendered", function() { return rendered }), this.__defineGetter__("quality", function() { return E() }), this.__defineGetter__("emptyTileCount", function() { return D().length }), this.__defineGetter__("emptyTiles", function() { return D() }), this.__defineGetter__("hint", function() { return H })
}

function Tile(a, b, c, d) {
    function e() { q() }

    function f(a) { return -2 == a ? (H = a, I = TileType.Dot) : isNaN(a) || 0 > a || a > 90 ? (H = -1, I = TileType.Unknown) : (H = a, I = 0 == a ? TileType.Wall : TileType.Value), g(), H }

    function g() {
        if (b.render) {
            if (b.rendered) {
                var a = $("#tile-" + J + "-" + K),
                    c = "",
                    d = "";
                switch (I) {
                    case TileType.Value:
                        c = 2, d = tile.value;
                        break;
                    case TileType.Wall:
                        c = 1;
                        break;
                    case TileType.Dot:
                        c = 2
                }
                a.removeClass().addClass("tile tile-" + c), a.find(".inner").text(d)
            } else b.render();
            return G
        }
    }

    function h(a) {
        switch (a) {
            case TileType.Unknown:
                I = a, H = -1;
                break;
            case TileType.Wall:
                I = a, H = 0;
                break;
            case TileType.Dot:
                I = a, H = -2;
                break;
            case TileType.Value:
                console.log("Error. Don't set tile type directly to TileType.Value.")
        }
        g()
    }

    function i() { return I == TileType.Dot }

    function j() { return I == TileType.Wall }

    function k() { return I == TileType.Value }

    function l() { return I == TileType.Unknown }

    function m() { return k() || i() }

    function n() { h(TileType.Dot); return G }

    function o() { h(TileType.Wall); return G }

    function p(a) { f(a); return G }

    function q() { h(TileType.Unknown); return G }

    function r(a, c) {
        var d = J + a,
            e = K + c;
        return b.tile(d, e)
    }

    function s() { return r(1, 0) }

    function t() { return r(-1, 0) }

    function u() { return r(0, -1) }

    function v() { return r(0, 1) }

    function w(a) {
        switch (a) {
            case Directions.Right:
                return r(1, 0);
            case Directions.Left:
                return r(-1, 0);
            case Directions.Up:
                return r(0, -1);
            case Directions.Down:
                return r(0, 1)
        }
    }

    function x(a) {
        if (a)
            for (var b in Directions) { for (var c = a.direction[b], d = G.move(b); d && !d.isWall(); d = d.move(b)) d.isNumber() && d.info.numberReached && (a.completedNumbersAround = !0); if (k() && !a.numberReached && c.unknownCount) { c.maxPossibleCountInOtherDirections = 0; for (var e in Directions) e != b && (c.maxPossibleCountInOtherDirections += a.direction[e].maxPossibleCount) } } else {
                a = { unknownsAround: 0, numberCount: 0, numberReached: !1, canBeCompletedWithUnknowns: !1, completedNumbersAround: !1, singlePossibleDirection: null, direction: {} };
                for (var b in Directions) a.direction[b] = { unknownCount: 0, numberCountAfterUnknown: 0, wouldBeTooMuch: !1, maxPossibleCount: 0, maxPossibleCountInOtherDirections: 0, numberWhenDottingFirstUnknown: 0 };
                var f = null,
                    g = 0;
                for (var b in Directions)
                    for (var d = G.move(b); d && !d.isWall(); d = d.move(b)) {
                        var c = a.direction[b];
                        d.isUnknown() ? (c.unknownCount || c.numberWhenDottingFirstUnknown++, c.unknownCount++, c.maxPossibleCount++, a.unknownsAround++, k() && f != b && (g++, f = b)) : (d.isNumber() || d.isDot()) && (c.maxPossibleCount++, c.unknownCount ? k() && 1 == c.unknownCount && (c.numberCountAfterUnknown++, c.numberWhenDottingFirstUnknown++, c.numberCountAfterUnknown + 1 > H && (c.wouldBeTooMuch = !0)) : (a.numberCount++, c.numberWhenDottingFirstUnknown++))
                    }
                1 == g && (a.singlePossibleDirection = f), k() && H == a.numberCount ? a.numberReached = !0 : k() && H == a.numberCount + a.unknownsAround && (a.canBeCompletedWithUnknowns = !0)
            }
        return 1 == g && (a.singlePossibleDirection = f), k() && H == a.numberCount ? a.numberReached = !0 : k() && H == a.numberCount + a.unknownsAround && (a.canBeCompletedWithUnknowns = !0), a
    }

    function y(a) { for (var b in Directions) z(b, a) }

    function z(a, b, c) {
        for (var d = G.move(a), e = 0; d && !d.isWall(); d = d.move(a)) {
            if (d.isUnknown()) {
                if (e++, !b) { d.wall(!0); break }
                d.dot(!0)
            }
            if (e >= c) break
        }
    }

    function A(a, b) {
        var c = this,
            d = [],
            b = b || a;
        for (var e in Directions)
            for (var f = 0, g = c.move(e); g && !g.isWall(); g = g.move(e)) f++, f >= a && b >= f && d.push(g);
        return d
    }

    function B() { var a = $("#tile-" + J + "-" + K); return a.addClass("marked"), G }

    function C() { var a = $("#tile-" + J + "-" + K); return a.removeClass("marked"), G }

    function D() {
        switch (I) {
            case TileType.Unknown:
                return 0;
            case TileType.Wall:
                return 1;
            case TileType.Dot:
                return 2;
            case TileType.Value:
                return H + 2
        }
    }

    function E(a) {
        switch (a) {
            case 0:
                q();
                break;
            case 1:
                o();
                break;
            case 2:
                n();
                break;
            default:
                f(a - 2)
        }
    }

    function F() {
        if (!i()) return !1;
        for (var a in Directions)
            if (G.move(a) && !G.move(a).isWall()) return !1;
        return !0
    }
    var G = this,
        H = -1,
        I = TileType.Unknown,
        J = this.x = c % b.width,
        K = this.y = Math.floor(c / b.width);
    this.id = J + "," + K;
    d ? E(a) : f(a), this.mark = B, this.unmark = C, this.dot = n, this.wall = o, this.number = p, this.unknown = q, this.isDot = i, this.isWall = j, this.isNumber = k, this.isNumberOrDot = m, this.isUnknown = l, this.isLockedIn = F, this.collect = x, this.traverse = r, this.right = s, this.left = t, this.up = u, this.down = v, this.move = w, this.close = y, this.clear = e, this.render = g, this.closeDirection = z, this.getTilesInRange = A, this.getExportValue = D, this.setExportValue = E, this.__defineGetter__("value", function() { return H }), this.__defineSetter__("value", function(a) { return f(a) }), this.__defineGetter__("type", function() { return I }), this.__defineSetter__("type", function(a) { return f(a) }), this.__defineGetter__("isEmpty", function() { return -1 == H })
}

function Hint(a) {
    function b() { f(), a && a.unmark(), g = !1, i = { type: HintType.None, tile: null } }

    function c(a, b) { return g ? (i.tile = a, i.type = b, !0) : !1 }

    function d() {
        var b = a.getClosedWrongTiles();
        if (b.length) {
            var c = Utils.pick(b),
                d = c.collect(),
                f = d.numberCount > c.value ? HintType.ErrorClosedTooLate : HintType.ErrorClosedTooEarly;
            return c.mark(), void e(f)
        }
        var h = a.getNextLockedInTile();
        return h ? (e(HintType.LockedIn), void h.mark()) : (g = !0, a.solve(!1, !0), void(i.tile && (e(i.type), i.tile.mark())))
    }

    function e(a, b) {
        var c = a;
        b && (c = c.replace(/\%s/gi, b)), $("#hintMsg").html("<span>" + c + "</span>"), $("html").addClass("showHint"), h = !0, a == HintType.LockedIn && setTimeout(function() { PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.locked_in) }, 2500)
    }

    function f() { $("html").removeClass("showHint"), h = !1 }
    var g = !1,
        h = !1,
        i = { type: HintType.None, tile: null };
    this.clear = b, this.mark = c, this.next = d, this.show = e, this.hide = f, this.info = i, this.__defineGetter__("active", function() { return g }), this.__defineSetter__("active", function(a) { g = a }), this.__defineGetter__("visible", function() { return h })
}

function generateGridAndSolution(a) {
    for (var b, c = null, d = 0; d++ < 10;) {
        c = new Grid(a), b = { size: a, full: [], empty: [], quality: 0, ms: 0 };
        var e = new Date;
        if (c.clear(), c.generate(a), c.maxify(a), c.isValid(!0)) { b.full = c.getValues(), c.breakDown(), b.empty = c.getValues(), b.ms = new Date - e, b.quality = c.quality; break }
        c = null
    }
    self.postMessage(JSON.stringify(b))
}
window.isWebApp = !0, ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = aa.type(a);
        return "function" === c || aa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (aa.isFunction(b)) return aa.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return aa.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (ha.test(b)) return aa.filter(b, a, c);
            b = aa.filter(b, a)
        }
        return aa.grep(a, function(a) { return U.call(b, a) >= 0 !== c })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) { var b = oa[a] = {}; return aa.each(a.match(na) || [], function(a, c) { b[c] = !0 }), b }

    function g() { $.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), aa.ready() }

    function h() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = aa.expando + Math.random() }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? aa.parseJSON(c) : c } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() { return !0 }

    function k() { return !1 }

    function l() { try { return $.activeElement } catch (a) {} }

    function m(a, b) { return aa.nodeName(a, "table") && aa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function n(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function o(a) { var b = Ka.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function p(a, b) { for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval")) }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) aa.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = aa.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && aa.nodeName(a, b) ? aa.merge([a], c) : c }

    function s(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) }

    function t(b, c) {
        var d = aa(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : aa.css(d[0], "display");
        return d.detach(), e
    }

    function u(a) {
        var b = $,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || aa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || aa.contains(a.ownerDocument, a) || (g = aa.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function w(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) { var d = Ta.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function z(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += aa.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= aa.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= aa.css(a, "border" + wa[f] + "Width", !0, e))) : (g += aa.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += aa.css(a, "border" + wa[f] + "Width", !0, e))); return g }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === aa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Z.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : f[g] || (e = xa(d), (c && "none" !== c || !e) && ra.set(d, "olddisplay", e ? c : aa.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function C(a, b, c, d, e) { return new C.prototype.init(a, b, c, d, e) }

    function D() { return setTimeout(function() { Ya = void 0 }), Ya = aa.now() }

    function E(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && xa(a),
            o = ra.get(a, "fxshow");
        c.queue || (h = aa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, k.always(function() { k.always(function() { h.unqueued--, aa.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = aa.css(a, "display"), "none" === j && (j = u(a.nodeName)), "inline" === j && "none" === aa.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() { m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d]) continue;
                    n = !0
                }
                l[d] = o && o[d] || aa.style(a, d)
            }
        if (!aa.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = ra.access(a, "fxshow", {}), f && (o.hidden = !n), n ? aa(a).show() : k.done(function() { aa(a).hide() }), k.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in l) aa.style(a, b, l[b])
            });
            for (d in l) g = F(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = aa.camelCase(c), e = b[d], f = a[c], aa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = aa.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = aa.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: aa.extend({}, b),
                opts: aa.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = aa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return aa.map(k, F, j), aa.isFunction(j.opts.start) && j.opts.start.call(a, j), aa.fx.timer(aa.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (aa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) { var i; return f[h] = !0, aa.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i }
        var f = {},
            g = a === vb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) { var c, d, e = aa.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && aa.extend(!0, a, d), a }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }

    function O(a, b, c, d) {
        var e;
        if (aa.isArray(b)) aa.each(b, function(b, e) { c || zb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== aa.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) { return aa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = "".trim,
        Z = {},
        $ = a.document,
        _ = "2.1.0",
        aa = function(a, b) { return new aa.fn.init(a, b) },
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) { return b.toUpperCase() };
    aa.fn = aa.prototype = {
        jquery: _,
        constructor: aa,
        selector: "",
        length: 0,
        toArray: function() { return R.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this) },
        pushStack: function(a) { var b = aa.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a, b) { return aa.each(this, a, b) },
        map: function(a) { return this.pushStack(aa.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(R.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, aa.extend = aa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || aa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (aa.isPlainObject(d) || (e = aa.isArray(d))) ? (e ? (e = !1, f = c && aa.isArray(c) ? c : []) : f = c && aa.isPlainObject(c) ? c : {}, g[b] = aa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, aa.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === aa.type(a) },
        isArray: Array.isArray,
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { return a - parseFloat(a) >= 0 },
        isPlainObject: function(a) { if ("object" !== aa.type(a) || a.nodeType || aa.isWindow(a)) return !1; try { if (a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (b) { return !1 } return !0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a },
        globalEval: function(a) {
            var b, c = eval;
            a = aa.trim(a), a && (1 === a.indexOf("use strict") ? (b = $.createElement("script"), b.text = a, $.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) { return a.replace(ba, "ms-").replace(ca, da) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : Y.call(a) },
        makeArray: function(a, b) { var d = b || []; return null != a && (c(Object(a)) ? aa.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d },
        inArray: function(a, b, c) { return null == b ? -1 : U.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; return "string" == typeof b && (c = a[b], b = a, a = c), aa.isFunction(a) ? (d = R.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(R.call(arguments))) }, e.guid = a.guid = a.guid || aa.guid++, e) : void 0 },
        now: Date.now,
        support: Z
    }), aa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { V["[object " + b + "]"] = b.toLowerCase() });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, o, p, q;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sa.exec(a))
                    if (g = e[1]) { if (9 === h) { if (f = b.getElementById(g), !f || !f.parentNode) return c; if (f.id === g) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c } else { if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c; if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c }
                if (x.qsa && (!J || !J.test(a))) {
                    if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ua, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;) j[i] = o + n(j[i]);
                        p = ta.test(a) && k(b.parentNode) || b, q = j.join(",")
                    }
                    if (q) try { return _.apply(c, p.querySelectorAll(q)), c } catch (r) {} finally { l || b.removeAttribute("id") }
                }
            }
            return v(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) { return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d }
            var b = [];
            return a
        }

        function d(a) { return a[N] = !0, a }

        function e(a) { var b = G.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function f(a, b) { for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function j(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function k(a) { return a && typeof a.getElementsByTagName !== V && a }

        function l() {}

        function m(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = y.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ia, " ") }), h = h.slice(d.length));
                for (g in y.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) { if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = d || u(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !d && b ? p : q(p, m, a, h, i),
                    s = c ? f || (d ? a : o || e) ? [] : g : r;
                if (c && c(r, s, h, i), e)
                    for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) { return a === b }, g, !0), j = o(function(a) { return ba.call(b, a) > -1 }, g, !0), k = [function(a, c, d) { return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)) }]; e > h; h++)
                if (c = y.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) { for (d = ++h; e > d && !y.relative[a[d].type]; d++); return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a)) }
                    k.push(c)
                }
            return p(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && y.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) { i.push(k); break }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }

        function u(a, c, d) { for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d); return d }

        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                    if (b = (y.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                    if ((i = y.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && n(f), !a) return _.apply(c, d), c; break }
            }
            return B(a, j)(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) { return a === b && (E = !0), 0 },
            V = "undefined",
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            $ = Y.push,
            _ = Y.push,
            aa = Y.slice,
            ba = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            da = "[\\x20\\t\\r\\n\\f]",
            ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            fa = ea.replace("w", "w#"),
            ga = "\\[" + da + "*(" + ea + ")" + da + "*(?:([*^$|!~]?=)" + da + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fa + ")|)|)" + da + "*\\]",
            ha = ":(" + ea + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)",
            ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
            ja = new RegExp("^" + da + "*," + da + "*"),
            ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
            la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
            ma = new RegExp(ha),
            na = new RegExp("^" + fa + "$"),
            oa = { ID: new RegExp("^#(" + ea + ")"), CLASS: new RegExp("^\\.(" + ea + ")"), TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ga), PSEUDO: new RegExp("^" + ha), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"), bool: new RegExp("^(?:" + ca + ")$", "i"), needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i") },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
            wa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) };
        try { _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType } catch (xa) {
            _ = {
                apply: Y.length ? function(a, b) { $.apply(a, aa.call(b)) } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        x = b.support = {}, A = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() { F() }, !1) : d.attachEvent && d.attachEvent("onunload", function() { F() })), x.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), x.getElementsByTagName = e(function(a) { return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length }), x.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), x.getById = e(function(a) { return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length }), x.getById ? (y.find.ID = function(a, b) { if (typeof b.getElementById !== V && I) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, y.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { return a.getAttribute("id") === b } }) : (delete y.find.ID, y.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id"); return c && c.value === b } }), y.find.TAG = x.getElementsByTagName ? function(a, b) { return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                return f
            }, y.find.CLASS = x.getElementsByClassName && function(a, b) { return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0 }, K = [], J = [], (x.qsa = ra.test(c.querySelectorAll)) && (e(function(a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked") }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = ra.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) { x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha) }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) { if (a === b) return E = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try { var d = L.call(a, c); if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) { return (a.ownerDocument || a) !== G && F(a), M(a, b) }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = y.attrHandle[b.toLowerCase()],
                d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) }
            return D = null, a
        }, z = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += z(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                for (; b = a[d++];) c += z(b);
            return c
        }, y = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(va, wa), a[3] = (a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[5] && a[2]; return oa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ma.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(va, wa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = R[a + " "]; return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "") }) },
                ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [P, n, m]; break }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) { var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = B(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), !c.pop() }
                }),
                has: d(function(a) { return function(c) { return b(a, c).length > 0 } }),
                contains: d(function(a) { return function(b) { return (b.textContent || b.innerText || z(b)).indexOf(a) > -1 } }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === H },
                focus: function(a) { return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !y.pseudos.empty(a) },
                header: function(a) { return qa.test(a.nodeName) },
                input: function(a) { return pa.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: j(function() { return [0] }),
                last: j(function(a, b) { return [b - 1] }),
                eq: j(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: j(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: j(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, y.pseudos.nth = y.pseudos.eq;
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) y.pseudos[w] = h(w);
        for (w in { submit: !0, reset: !0 }) y.pseudos[w] = i(w);
        return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(G.createElement("div")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), x.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ca, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
    }(a);
    aa.find = ea, aa.expr = ea.selectors, aa.expr[":"] = aa.expr.pseudos, aa.unique = ea.uniqueSort, aa.text = ea.getText, aa.isXMLDoc = ea.isXML, aa.contains = ea.contains;
    var fa = aa.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    aa.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? aa.find.matchesSelector(d, a) ? [d] : [] : aa.find.matches(a, aa.grep(b, function(a) { return 1 === a.nodeType })) }, aa.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(aa(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (aa.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) aa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? aa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) { return this.pushStack(d(this, a || [], !1)) },
        not: function(a) { return this.pushStack(d(this, a || [], !0)) },
        is: function(a) { return !!d(this, "string" == typeof a && fa.test(a) ? aa(a) : a || [], !1).length }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = aa.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof aa ? b[0] : b, aa.merge(this, aa.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : $, !0)), ga.test(c[1]) && aa.isPlainObject(b))
                        for (c in b) aa.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = $.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = $, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : aa.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(aa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), aa.makeArray(a, this))
        };
    ka.prototype = aa.fn, ia = aa($);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = { children: !0, contents: !0, next: !0, prev: !0 };
    aa.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && aa(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }
    }), aa.fn.extend({
        has: function(a) {
            var b = aa(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (aa.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? aa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && aa.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? aa.unique(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? U.call(aa(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(aa.unique(aa.merge(this.get(), aa(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }), aa.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return aa.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return aa.dir(a, "parentNode", c) }, next: function(a) { return e(a, "nextSibling") }, prev: function(a) { return e(a, "previousSibling") }, nextAll: function(a) { return aa.dir(a, "nextSibling") }, prevAll: function(a) { return aa.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return aa.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return aa.dir(a, "previousSibling", c) }, siblings: function(a) { return aa.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return aa.sibling(a.firstChild) }, contents: function(a) { return a.contentDocument || aa.merge([], a.childNodes) } }, function(a, b) { aa.fn[a] = function(c, d) { var e = aa.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = aa.filter(d, e)), this.length > 1 && (ma[a] || aa.unique(e), la.test(a) && e.reverse()), this.pushStack(e) } });
    var na = /\S+/g,
        oa = {};
    aa.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : aa.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) { b = !1; break }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() { if (i) { var c = i.length;! function f(b) { aa.each(b, function(b, c) { var d = aa.type(c); "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), d ? g = i.length : b && (e = c, k(b)) } return this },
                remove: function() {
                    return i && aa.each(arguments, function(a, b) {
                        for (var c;
                            (c = aa.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) { return a ? aa.inArray(a, i) > -1 : !(!i || !i.length) },
                empty: function() { return i = [], g = 0, this },
                disable: function() { return i = j = b = void 0, this },
                disabled: function() { return !i },
                lock: function() { return j = void 0, b || l.disable(), this },
                locked: function() { return !j },
                fireWith: function(a, b) { return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this },
                fire: function() { return l.fireWith(this, arguments), this },
                fired: function() { return !!c }
            };
        return l
    }, aa.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", aa.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", aa.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", aa.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return aa.Deferred(function(c) {
                            aa.each(b, function(b, f) {
                                var g = aa.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && aa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? aa.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, aa.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && aa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : aa.Deferred(),
                j = function(a, c, d) { return function(e) { c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && aa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    aa.fn.ready = function(a) { return aa.ready.promise().done(a), this }, aa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? aa.readyWait++ : aa.ready(!0) },
        ready: function(a) {
            (a === !0 ? --aa.readyWait : aa.isReady) || (aa.isReady = !0, a !== !0 && --aa.readyWait > 0 || (pa.resolveWith($, [aa]), aa.fn.trigger && aa($).trigger("ready").off("ready")))
        }
    }), aa.ready.promise = function(b) { return pa || (pa = aa.Deferred(), "complete" === $.readyState ? setTimeout(aa.ready) : ($.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b) }, aa.ready.promise();
    var qa = aa.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === aa.type(c)) { e = !0; for (h in c) aa.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, aa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(aa(a), c) })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    aa.acceptData = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }, h.uid = 1, h.accepts = aa.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) { c = h.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, aa.extend(a, b) } }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (aa.isEmptyObject(f)) aa.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c : c[b] },
        access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, aa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else { aa.isArray(b) ? d = b.concat(b.map(aa.camelCase)) : (e = aa.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length; for (; c--;) delete g[d[c]] }
        },
        hasData: function(a) { return !aa.isEmptyObject(this.cache[a[this.expando]] || {}) },
        discard: function(a) { a[this.expando] && delete this.cache[a[this.expando]] }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    aa.extend({ hasData: function(a) { return sa.hasData(a) || ra.hasData(a) }, data: function(a, b, c) { return sa.access(a, b, c) }, removeData: function(a, b) { sa.remove(a, b) }, _data: function(a, b, c) { return ra.access(a, b, c) }, _removeData: function(a, b) { ra.remove(a, b) } }), aa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = aa.camelCase(d.slice(5)), i(f, d, e[d]));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { sa.set(this, a) }) : qa(this, function(b) {
                var c, d = aa.camelCase(a);
                if (f && void 0 === b) { if (c = sa.get(f, a), void 0 !== c) return c; if (c = sa.get(f, d), void 0 !== c) return c; if (c = i(f, d, void 0), void 0 !== c) return c } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { sa.remove(this, a) }) }
    }), aa.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || aa.isArray(c) ? d = ra.access(a, b, aa.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = aa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = aa._queueHooks(a, b),
                g = function() { aa.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return ra.get(a, c) || ra.access(a, c, { empty: aa.Callbacks("once memory").add(function() { ra.remove(a, [b + "queue", c]) }) }) }
    }), aa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? aa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = aa.queue(this, a, b);
                aa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && aa.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { aa.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = aa.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) { return a = b || a, "none" === aa.css(a, "display") || !aa.contains(a.ownerDocument, a) },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = $.createDocumentFragment(),
            b = a.appendChild($.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", Z.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Z.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    aa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = aa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return typeof aa !== za && aa.event.triggered !== b.type ? aa.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = aa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = aa.event.special[n] || {}, k = aa.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && aa.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), aa.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = aa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || aa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) aa.event.remove(a, n + b[j], c, d, !0);
                aa.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || $],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || $, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + aa.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[aa.expando] ? b : new aa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : aa.makeArray(c, [b]), l = aa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !aa.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || $) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && aa.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !aa.acceptData(d) || j && aa.isFunction(d[n]) && !aa.isWindow(d) && (h = d[j], h && (d[j] = null), aa.event.triggered = n, d[n](), aa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = aa.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = aa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = aa.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((aa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? aa(e, this).index(i) >= 0 : aa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || $, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[aa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new aa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = $), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== l() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === l() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && aa.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return aa.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c, d) {
            var e = aa.extend(new aa.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? aa.event.trigger(e, null, b) : aa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, aa.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, aa.Event = function(a, b) { return this instanceof aa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? j : k) : this.type = a, b && aa.extend(this, b), this.timeStamp = a && a.timeStamp || aa.now(), void(this[aa.expando] = !0)) : new aa.Event(a, b) }, aa.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = j, this.stopPropagation() }
    }, aa.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) {
        aa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !aa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Z.focusinBubbles || aa.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { aa.event.simulate(b, a.target, aa.event.fix(a), !0) };
        aa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), aa.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) { return aa().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = aa.guid++)), this.each(function() { aa.event.add(this, a, d, c, b) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, aa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() { aa.event.remove(this, a, c, b) }) },
        trigger: function(a, b) { return this.each(function() { aa.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { var c = this[0]; return c ? aa.event.trigger(a, b, c, !0) : void 0 }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, aa.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = aa.contains(a.ownerDocument, a);
            if (!(Z.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || aa.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === aa.type(e)) aa.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                aa.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === aa.inArray(e, d)) && (i = aa.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, g, h = aa.event.special, i = 0; void 0 !== (c = a[i]); i++) {
                if (aa.acceptData(c) && (f = c[ra.expando], f && (b = ra.cache[f]))) {
                    if (d = Object.keys(b.events || {}), d.length)
                        for (g = 0; void 0 !== (e = d[g]); g++) h[e] ? aa.event.remove(c, e) : aa.removeEvent(c, e, b.handle);
                    ra.cache[f] && delete ra.cache[f]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), aa.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? aa.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        remove: function(a, b) { for (var c, d = a ? aa.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || aa.cleanData(r(c)), c.parentNode && (b && aa.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c)); return this },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (aa.cleanData(r(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return aa.clone(this, a, b) }) },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (aa.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, aa.cleanData(r(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = aa.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Z.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = aa.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = aa.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = aa.clone(g, !0, !0), f && aa.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, aa.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && aa.contains(h, g) && (g.src ? aa._evalUrl && aa._evalUrl(g.src) : aa.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), aa.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { aa.fn[a] = function(a) { for (var c, d = [], e = aa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), aa(e[g])[b](c), T.apply(d, c.get()); return this.pushStack(d) } });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) };
    ! function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", f.appendChild(g);
            var b = a.getComputedStyle(h, null);
            c = "1%" !== b.top, d = "4px" === b.width, f.removeChild(g)
        }
        var c, d, e = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            f = $.documentElement,
            g = $.createElement("div"),
            h = $.createElement("div");
        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(h), a.getComputedStyle && aa.extend(Z, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return null == d && b(), d }, reliableMarginRight: function() { var b, c = h.appendChild($.createElement("div")); return c.style.cssText = h.style.cssText = e, c.style.marginRight = c.style.width = "0", h.style.width = "1px", f.appendChild(g), b = !parseFloat(a.getComputedStyle(c, null).marginRight), f.removeChild(g), h.innerHTML = "", b } })
    }(), aa.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = { position: "absolute", visibility: "hidden", display: "block" },
        Wa = { letterSpacing: 0, fontWeight: 400 },
        Xa = ["Webkit", "O", "Moz", "ms"];
    aa.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = v(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = aa.camelCase(b),
                    i = a.style;
                return b = aa.cssProps[h] || (aa.cssProps[h] = x(i, h)), g = aa.cssHooks[b] || aa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(aa.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || aa.cssNumber[h] || (c += "px"), Z.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c))))
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = aa.camelCase(b); return b = aa.cssProps[h] || (aa.cssProps[h] = x(a.style, h)), g = aa.cssHooks[b] || aa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || aa.isNumeric(f) ? f || 0 : e) : e }
    }), aa.each(["height", "width"], function(a, b) { aa.cssHooks[b] = { get: function(a, c, d) { return c ? 0 === a.offsetWidth && Sa.test(aa.css(a, "display")) ? aa.swap(a, Va, function() { return A(a, b, d) }) : A(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ra(a); return y(a, c, d ? z(a, b, d, "border-box" === aa.css(a, "boxSizing", !1, e), e) : 0) } } }), aa.cssHooks.marginRight = w(Z.reliableMarginRight, function(a, b) { return b ? aa.swap(a, { display: "inline-block" }, v, [a, "marginRight"]) : void 0 }), aa.each({ margin: "", padding: "", border: "Width" }, function(a, b) { aa.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Pa.test(a) || (aa.cssHooks[a + b].set = y) }), aa.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (aa.isArray(b)) { for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = aa.css(a, b[g], !1, d); return f }
                return void 0 !== c ? aa.style(a, b, c) : aa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return B(this, !0) },
        hide: function() { return B(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { xa(this) ? aa(this).show() : aa(this).hide() }) }
    }), aa.Tween = C, C.prototype = { constructor: C, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (aa.cssNumber[c] ? "" : "px") }, cur: function() { var a = C.propHooks[this.prop]; return a && a.get ? a.get(this) : C.propHooks._default.get(this) }, run: function(a) { var b, c = C.propHooks[this.prop]; return this.pos = b = this.options.duration ? aa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this } }, C.prototype.init.prototype = C.prototype, C.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = aa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { aa.fx.step[a.prop] ? aa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[aa.cssProps[a.prop]] || aa.cssHooks[a.prop]) ? aa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, C.propHooks.scrollTop = C.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, aa.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, aa.fx = C.prototype.init, aa.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (aa.cssNumber[a] ? "" : "px"),
                    g = (aa.cssNumber[a] || "px" !== f && +d) && _a.exec(aa.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, aa.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    aa.Animation = aa.extend(I, { tweener: function(a, b) { aa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b) }, prefilter: function(a, b) { b ? bb.unshift(a) : bb.push(a) } }), aa.speed = function(a, b, c) { var d = a && "object" == typeof a ? aa.extend({}, a) : { complete: c || !c && b || aa.isFunction(a) && a, duration: a, easing: c && b || b && !aa.isFunction(b) && b }; return d.duration = aa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in aa.fx.speeds ? aa.fx.speeds[d.duration] : aa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { aa.isFunction(d.old) && d.old.call(this), d.queue && aa.dequeue(this, d.queue) }, d }, aa.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(xa).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = aa.isEmptyObject(a),
                    f = aa.speed(b, c, d),
                    g = function() {
                        var b = I(this, aa.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = aa.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && aa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = aa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, aa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), aa.each(["toggle", "show", "hide"], function(a, b) {
            var c = aa.fn[b];
            aa.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e) }
        }), aa.each({ slideDown: E("show"), slideUp: E("hide"), slideToggle: E("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { aa.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), aa.timers = [], aa.fx.tick = function() {
            var a, b = 0,
                c = aa.timers;
            for (Ya = aa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || aa.fx.stop(), Ya = void 0
        }, aa.fx.timer = function(a) { aa.timers.push(a), a() ? aa.fx.start() : aa.timers.pop() }, aa.fx.interval = 13, aa.fx.start = function() { Za || (Za = setInterval(aa.fx.tick, aa.fx.interval)) }, aa.fx.stop = function() { clearInterval(Za), Za = null }, aa.fx.speeds = { slow: 600, fast: 200, _default: 400 }, aa.fn.delay = function(a, b) {
            return a = aa.fx ? aa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        function() {
            var a = $.createElement("input"),
                b = $.createElement("select"),
                c = b.appendChild($.createElement("option"));
            a.type = "checkbox", Z.checkOn = "" !== a.value, Z.optSelected = c.selected, b.disabled = !0, Z.optDisabled = !c.disabled, a = $.createElement("input"), a.value = "t", a.type = "radio", Z.radioValue = "t" === a.value
        }();
    var db, eb, fb = aa.expr.attrHandle;
    aa.fn.extend({ attr: function(a, b) { return qa(this, aa.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { aa.removeAttr(this, a) }) } }), aa.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? aa.prop(a, b, c) : (1 === f && aa.isXMLDoc(a) || (b = b.toLowerCase(), d = aa.attrHooks[b] || (aa.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = aa.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void aa.removeAttr(a, b)) : void 0 },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = aa.propFix[c] || c, aa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: { type: { set: function(a, b) { if (!Z.radioValue && "radio" === b && aa.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), eb = { set: function(a, b, c) { return b === !1 ? aa.removeAttr(a, c) : a.setAttribute(c, c), c } }, aa.each(aa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || aa.find.attr;
        fb[b] = function(a, b, d) { var e, f; return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    aa.fn.extend({ prop: function(a, b) { return qa(this, aa.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[aa.propFix[a] || a] }) } }), aa.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !aa.isXMLDoc(a), f && (b = aa.propFix[b] || b, e = aa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0 }, propHooks: { tabIndex: { get: function(a) { return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), Z.optSelected || (aa.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null } }), aa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { aa.propFix[this.toLowerCase()] = this });
    var hb = /[\t\r\n\f]/g;
    aa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (aa.isFunction(a)) return this.each(function(b) { aa(this).addClass(a.call(this, b, this.className)) });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = aa.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (aa.isFunction(a)) return this.each(function(b) { aa(this).removeClass(a.call(this, b, this.className)) });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? aa.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(aa.isFunction(a) ? function(c) { aa(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = aa(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    aa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = aa.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, aa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : aa.isArray(e) && (e = aa.map(e, function(a) { return null == a ? "" : a + "" })), b = aa.valHooks[this.type] || aa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = aa.valHooks[e.type] || aa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), aa.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Z.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && aa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = aa(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) { for (var c, d, e = a.options, f = aa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = aa.inArray(aa(d).val(), f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f }
            }
        }
    }), aa.each(["radio", "checkbox"], function() { aa.valHooks[this] = { set: function(a, b) { return aa.isArray(b) ? a.checked = aa.inArray(aa(a).val(), b) >= 0 : void 0 } }, Z.checkOn || (aa.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }), aa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { aa.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), aa.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var jb = aa.now(),
        kb = /\?/;
    aa.parseJSON = function(a) { return JSON.parse(a + "") }, aa.parseXML = function(a) { var b, c; if (!a || "string" != typeof a) return null; try { c = new DOMParser, b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName("parsererror").length) && aa.error("Invalid XML: " + a), b };
    var lb, mb, nb = /#.*$/,
        ob = /([?&])_=[^&]*/,
        pb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rb = /^(?:GET|HEAD)$/,
        sb = /^\/\//,
        tb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ub = {},
        vb = {},
        wb = "*/".concat("*");
    try { mb = location.href } catch (xb) { mb = $.createElement("a"), mb.href = "", mb = mb.href }
    lb = tb.exec(mb.toLowerCase()) || [], aa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: mb, type: "GET", isLocal: qb.test(lb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": wb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": aa.parseJSON, "text xml": aa.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? L(L(a, aa.ajaxSettings), b) : L(aa.ajaxSettings, a) },
        ajaxPrefilter: J(ub),
        ajaxTransport: J(vb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (aa.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (aa.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --aa.active || aa.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = aa.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? aa(m) : aa.event,
                o = aa.Deferred(),
                p = aa.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = pb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === t ? f : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                    overrideMimeType: function(a) { return t || (l.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) { var b = a || u; return d && d.abort(b), c(0, b), this }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mb) + "").replace(nb, "").replace(sb, lb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = aa.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = tb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lb[1] && i[2] === lb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lb[3] || ("http:" === lb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = aa.param(l.data, l.traditional)), K(ub, l, b, v), 2 === t) return v;
            j = l.global, j && 0 === aa.active++ && aa.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = ob.test(e) ? e.replace(ob, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (aa.lastModified[e] && v.setRequestHeader("If-Modified-Since", aa.lastModified[e]), aa.etag[e] && v.setRequestHeader("If-None-Match", aa.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wb + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
            if (d = K(vb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() { v.abort("timeout") }, l.timeout));
                try { t = 1, d.send(r, c) } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) { return aa.get(a, b, c, "json") },
        getScript: function(a, b) { return aa.get(a, void 0, b, "script") }
    }), aa.each(["get", "post"], function(a, b) { aa[b] = function(a, c, d, e) { return aa.isFunction(c) && (e = e || d, d = c, c = void 0), aa.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), aa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { aa.fn[b] = function(a) { return this.on(b, a) } }), aa._evalUrl = function(a) { return aa.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, aa.fn.extend({
        wrapAll: function(a) { var b; return aa.isFunction(a) ? this.each(function(b) { aa(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = aa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this) },
        wrapInner: function(a) {
            return this.each(aa.isFunction(a) ? function(b) { aa(this).wrapInner(a.call(this, b)) } : function() {
                var b = aa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = aa.isFunction(a); return this.each(function(c) { aa(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { aa.nodeName(this, "body") || aa(this).replaceWith(this.childNodes) }).end() }
    }), aa.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, aa.expr.filters.visible = function(a) { return !aa.expr.filters.hidden(a) };
    var yb = /%20/g,
        zb = /\[\]$/,
        Ab = /\r?\n/g,
        Bb = /^(?:submit|button|image|reset|file)$/i,
        Cb = /^(?:input|select|textarea|keygen)/i;
    aa.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = aa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = aa.ajaxSettings && aa.ajaxSettings.traditional), aa.isArray(a) || a.jquery && !aa.isPlainObject(a)) aa.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(yb, "+")
    }, aa.fn.extend({ serialize: function() { return aa.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = aa.prop(this, "elements"); return a ? aa.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !aa(this).is(":disabled") && Cb.test(this.nodeName) && !Bb.test(a) && (this.checked || !ya.test(a)) }).map(function(a, b) { var c = aa(this).val(); return null == c ? null : aa.isArray(c) ? aa.map(c, function(a) { return { name: b.name, value: a.replace(Ab, "\r\n") } }) : { name: b.name, value: c.replace(Ab, "\r\n") } }).get() } }), aa.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (a) {} };
    var Db = 0,
        Eb = {},
        Fb = { 0: 200, 1223: 204 },
        Gb = aa.ajaxSettings.xhr();
    a.ActiveXObject && aa(a).on("unload", function() { for (var a in Eb) Eb[a]() }), Z.cors = !!Gb && "withCredentials" in Gb, Z.ajax = Gb = !!Gb, aa.ajaxTransport(function(a) {
        var b;
        return Z.cors || Gb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Db;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) { return function() { b && (delete Eb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b("error"), b = Eb[g] = b("abort"), f.send(a.hasContent && a.data || null)
            },
            abort: function() { b && b() }
        } : void 0
    }), aa.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return aa.globalEval(a), a } } }), aa.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), aa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) { b = aa("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), $.head.appendChild(b[0]) },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hb = [],
        Ib = /(=)\?(?=&|$)|\?\?/;
    aa.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Hb.pop() || aa.expando + "_" + jb++; return this[a] = !0, a } }), aa.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ib.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ib.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = aa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ib, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || aa.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hb.push(e)), g && aa.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), aa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || $;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = aa.buildFragment([a], b, e), e && e.length && aa(e).remove(), aa.merge([], d.childNodes))
    };
    var Jb = aa.fn.load;
    aa.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jb) return Jb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), aa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && aa.ajax({ url: a, type: e, dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? aa("<div>").append(aa.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, f || [a.responseText, b, a]) }), this
    }, aa.expr.filters.animated = function(a) { return aa.grep(aa.timers, function(b) { return a === b.elem }).length };
    var Kb = a.document.documentElement;
    aa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = aa.css(a, "position"),
                l = aa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = aa.css(a, "top"), i = aa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), aa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, aa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { aa.offset.setOffset(this, a, b) });
            var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, aa.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === aa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), aa.nodeName(a[0], "html") || (d = a.offset()), d.top += aa.css(a[0], "borderTopWidth", !0), d.left += aa.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - aa.css(c, "marginTop", !0), left: b.left - d.left - aa.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || Kb; a && !aa.nodeName(a, "html") && "static" === aa.css(a, "position");) a = a.offsetParent; return a || Kb }) }
    }), aa.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, c) {
        var d = "pageYOffset" === c;
        aa.fn[b] = function(e) { return qa(this, function(b, e, f) { var g = P(b); return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f) }, b, e, arguments.length, null) }
    }), aa.each(["top", "left"], function(a, b) { aa.cssHooks[b] = w(Z.pixelPosition, function(a, c) { return c ? (c = v(a, b), Qa.test(c) ? aa(a).position()[b] + "px" : c) : void 0 }) }), aa.each({ Height: "height", Width: "width" }, function(a, b) {
        aa.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            aa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) { var e; return aa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? aa.css(b, c, g) : aa.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), aa.fn.size = function() { return this.length }, aa.fn.andSelf = aa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return aa });
    var Lb = a.jQuery,
        Mb = a.$;
    return aa.noConflict = function(b) { return a.$ === aa && (a.$ = Mb), b && a.jQuery === aa && (a.jQuery = Lb), aa }, typeof b === za && (a.jQuery = a.$ = aa), aa
});
var app = { fontsLoaded: !1, deviceReady: !1, started: !1, initialize: function() { this.bindEvents() }, bindEvents: function() { document.addEventListener("deviceready", this.onDeviceReady, !1) }, onDeviceReady: function() { setTimeout(function() { navigator && navigator.splashscreen && navigator.splashscreen.hide() }, 100), app.deviceReady = !0, app.startTheGameIfWeCan(), PlayCenter.autoSignIn() }, receivedEvent: function(a) {}, fontsLoaded: function() { app.fontsLoaded = !0 }, startTheGameIfWeCan: function() { return app.started ? !1 : (app.started = !0, Game.init(), void Game.start()) } };
app.initialize();
var Utils = new Utility,
    Colors = new function() {
        function a(a) { var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a); return b ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16) } : null }

        function b(a) { var b = a.toString(16); return 1 == b.length ? "0" + b : b }

        function c(a, c, d) { return "object" == typeof a && (c = a.g, d = a.b, a = a.r), "#" + b(a) + b(c) + b(d) }

        function d(b) { return isNaN(b) || (b = PALETTE[b]), a(b) }

        function e(a, b) { return a.r != b.r ? !1 : a.g != b.g ? !1 : a.b != b.b ? !1 : !0 }

        function g(b) {
            var d = !1;
            "string" == typeof b && (d = !0), d && (b = a(b));
            var e = h(b);
            e.hue = l(e.hue, 180);
            var f = j(e);
            return d && (f = c(f)), f
        }

        function h(a) { return hsv = new Object, max = n(a.r, a.g, a.b), dif = max - m(a.r, a.g, a.b), hsv.saturation = 0 == max ? 0 : 100 * dif / max, 0 == hsv.saturation ? hsv.hue = 0 : a.r == max ? hsv.hue = 60 * (a.g - a.b) / dif : a.g == max ? hsv.hue = 120 + 60 * (a.b - a.r) / dif : a.b == max && (hsv.hue = 240 + 60 * (a.r - a.g) / dif), hsv.hue < 0 && (hsv.hue += 360), hsv.value = Math.round(100 * max / 255), hsv.hue = Math.round(hsv.hue), hsv.saturation = Math.round(hsv.saturation), hsv }

        function j(a) {
            var b = new Object;
            if (0 == a.saturation) b.r = b.g = b.b = Math.round(2.55 * a.value);
            else {
                switch (a.hue /= 60, a.saturation /= 100, a.value /= 100, i = Math.floor(a.hue), f = a.hue - i, p = a.value * (1 - a.saturation), q = a.value * (1 - a.saturation * f), t = a.value * (1 - a.saturation * (1 - f)), i) {
                    case 0:
                        b.r = a.value, b.g = t, b.b = p;
                        break;
                    case 1:
                        b.r = q, b.g = a.value, b.b = p;
                        break;
                    case 2:
                        b.r = p, b.g = a.value, b.b = t;
                        break;
                    case 3:
                        b.r = p, b.g = q, b.b = a.value;
                        break;
                    case 4:
                        b.r = t, b.g = p, b.b = a.value;
                        break;
                    default:
                        b.r = a.value, b.g = p, b.b = q
                }
                b.r = Math.round(255 * b.r), b.g = Math.round(255 * b.g), b.b = Math.round(255 * b.b)
            }
            return b
        }

        function k(a, b) { a = String(a).replace(/[^0-9a-f]/gi, ""), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), b = b || 0; var c, d, e = "#"; for (d = 0; 3 > d; d++) c = parseInt(a.substr(2 * d, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16), e += ("00" + c).substr(c.length); return e }

        function l(a, b) { for (a += b; a >= 360;) a -= 360; for (; 0 > a;) a += 360; return a }

        function m(a, b, c) { return b > a ? c > a ? a : c : c > b ? b : c }

        function n(a, b, c) { return a > b ? a > c ? a : c : b > c ? b : c }
        this.hexToRgb = a, this.componentToHex = b, this.rgbToHex = c, this.colorToRgb = d, this.colorsMatch = e, this.getComplementary = g, this.rgbToHsv = h, this.hsvToRgb = j, this.luminateHex = k
    };
window.$ = window.$ || {}, $.browser = {}, $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), $.browser.android = /android/.test(navigator.userAgent.toLowerCase()), $.browser.safari = /safari/.test(navigator.userAgent.toLowerCase()), $.browser.ipad = /ipad/.test(navigator.userAgent.toLowerCase()), $.browser.iphone = /iphone|ipod/.test(navigator.userAgent.toLowerCase()), $.browser.ios = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase()), $.browser.ie = /msie/.test(navigator.userAgent.toLowerCase()), $.browser.chromeWebStore = window.chrome && window.chrome.storage ? !0 : !1;
for (var o in $.browser) $.browser[o] && $("html").addClass(o);
window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) { window.setTimeout(function() { a(+new Date) }, 10) } }(), window.cancelAnimFrame = function() { return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || function() {} }();
var HintType = { None: "None", NumberCanBeEntered: "NumberCanBeEntered", OneDirectionLeft: 'Only one direction remains for this number to look in <span id="nextdot"></span>', ValueReached: 'This number can see all its dots <span id="nextdot" class="red"></span>', WouldExceed: 'Looking further in one direction would exceed this number <span id="nextdot" class="red"></span>', OneDirectionRequired: 'One specific dot is included <br>in all solutions imaginable <span id="nextdot"></span>', MustBeWall: 'This one should be easy... <span id="nextdot" class="red"></span>', ErrorClosedTooEarly: 'This number can\'t see enough <span id="nextdot"></span>', ErrorClosedTooLate: 'This number sees a bit too much <span id="nextdot" class="red"></span>', Error: 'This one doesn\'t seem right <span id="nextdot" class="red"></span>', Errors: 'These don\'t seem right <span id="nextdot" class="red"></span>', LockedIn: 'A blue dot should always see at least one other <span id="nextdot"></span>', GameContinued: 'You can now continue<br>your previous game <span id="nextdot"></span>', TimeTrialShown: 'Elapsed time is now shown. <br>Time to beat: %s <span id="nextdot"></span>' },
    TileType = { Unknown: "Unknown", Dot: "Dot", Wall: "Wall", Value: "Value" },
    Directions = { Left: "Left", Right: "Right", Up: "Up", Down: "Down" },
    Game = new function() {
        function a() {
            window.Analytics && Analytics.init();
            var a = 1 * document.location.hash.replace(/#/g, "");
            a > 0 && (ka = !0, ja = a), Storage.getDataValue("donated", !1) && _(), window.Themes && Themes.init(), pa = Storage.getDataValue("showTimeTrial", !1), $("#toggleTimeTrialValue").text(pa ? "Yes" : "No"), theme = Storage.getDataValue("theme", 1), X(theme), K(function(a) { $("#scorenr").html(a) }), $("#tweeturl, #facebook").hide(), window.isWebApp ? ka || aa() : $("#app, #q42adrow").hide(), Utils.isTouch() && $("html").addClass("touch"), $("#menugrid [data-size]").each(function(a, b) {
                var c = $(b),
                    d = 1 * c.attr("data-size"),
                    e = va[d - 1];
                c.html(e), c.on(Utils.getEventNames("start"), function(a) {
                    if (Utils.isDoubleTapBug(a)) return !1;
                    var b = va[1 * $(a.target).closest("[data-size]").attr("data-size") - 1];
                    s(b)
                })
            }), e(), $(window).on(Utils.getEventNames("resize"), e), $(window).on(Utils.getEventNames("orientationchange"), e), Store.init(), f(), e(), Utils.setColorScheme("#ff384b", "#1cc0e0"), window.SocialSharing && b(), window.isWebApp && PlayCenter.enabled && !PlayCenter.isSignedIn && PlayCenter.autoSignIn()
        }

        function b() { window.plugins && window.plugins.socialsharing || SocialSharing.install(), ma = !0, na = !0, $("#tweeturl").on(Utils.getEventNames("click"), function(a) { return a.stopPropagation(), a.preventDefault(), setTimeout(function() { window.plugins.socialsharing.shareViaTwitter(Qa), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.how_very_social_of_you) }, 0), !1 }), $("#facebook").on(Utils.getEventNames("click"), function(a) { return a.stopPropagation(), a.preventDefault(), setTimeout(function() { window.plugins.socialsharing.shareViaFacebook(Qa), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.how_very_social_of_you) }, 0), !1 }) }

        function c() { return setTimeout(function() { Levels.init() }, 100), z(), ka ? void(ja ? s(ja) : h()) : (setTimeout(function() { $(".hide0").removeClass("hide0") }, 300), setTimeout(function() { $(".hide1").removeClass("hide1") }, 1300), setTimeout(function() { $(".hide-title").removeClass("hide-title") }, 2300), void setTimeout(function() { $(".hide-subtitle").removeClass("hide-subtitle"), ua = !0 }, 3500)) }

        function d() {
            if (!ua && !Storage.getDataValue("splashSkibbable", !1)) {
                if (ta++, 8 > ta) return;
                Storage.setDataValue("splashSkibbable", !0), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.the_impatient_one)
            }
            F(function(a) { a ? h() : H() })
        }

        function e() {
            var a = { iphone4: { width: 320, height: 480 }, iphone5: { width: 320, height: 568 }, nexus5: { width: 360, height: 640 }, nexus7: { width: 604, height: 966 } };
            for (var b in a) a[b].id = b;
            var c = { width: $("#feelsize").width(), height: $("#feelsize").height() },
                d = c.width / c.height,
                e = "iphone4",
                f = a[e],
                g = 999;
            for (var h in a) {
                var i = a[h],
                    j = i.width / i.height,
                    k = Math.abs(d - j);
                g > k && (e = h, f = a[h], g = k)
            }
            var l = c.width / c.height < d,
                m = { width: Math.floor(l ? c.width : c.height / f.height * f.width), height: Math.floor(l ? c.width / f.width * f.height : c.height) };
            $("#container").css({ width: m.width + "px", height: m.height + "px" });
            var n = m.width;
            $("h1").css("font-size", Math.round(.24 * n) + "px"), $("h2").css("font-size", Math.round(.18 * n) + "px"), $("h3").css("font-size", Math.round(.15 * n) + "px"), $("p").css("font-size", Math.round(.07 * n) + "px"), $("#menu h2").css("font-size", Math.round(.24 * n) + "px"), $("#menu p").css("font-size", Math.round(.1 * n) + "px"), $("#menu p").css("padding", Math.round(.05 * n) + "px 0"), $("#menu p").css("line-height", Math.round(.08 * n) + "px"), $("#hiddendigit, #timer").css("font-size", Math.round(.05 * n) + "px");
            var o = Math.round(.1 * n);
            $("#score").css({ "font-size": o + "px", "line-height": .85 * o + "px", height: o + "px" });
            var p = Math.floor(.075 * n);
            $(".icon").css({ width: p, height: p, marginLeft: .7 * p, marginRight: .7 * p }), $(".board table").each(function(a, b) {
                var c = $(b),
                    d = (c.attr("data-grid"), c.width()),
                    e = c.find("tr").first().children("td").length,
                    f = Math.floor(d / e);
                f && c.find(".tile").css({ width: f, height: f, "line-height": Math.round(.9 * f) + "px", "font-size": Math.round(.5 * f) + "px" })
            }), $("#digits").width($("#titlegrid table").width()).height($("#titlegrid table").height()), $("#digits").css({ "line-height": Math.round(.92 * $("#titlegrid table").height()) + "px", "font-size": .5 * $("#titlegrid table").height() + "px" });
            var q = Math.floor($("#container").height() / 2 - $("#board").height() / 2);
            $("#hintMsg").height(q + "px"), $(".digit").css("width", $("#hiddendigit").width() + "px"), window.Themes && Themes.resize(m.width, m.height)
        }

        function f() { Ba = !0, $(".screen").hide().removeClass("show"), $("#title").show(), setTimeout(function() { $("#title").addClass("show") }, 0) }

        function g() { Ba = !1, $(".screen").hide().removeClass("show"), $("#game").show(), setTimeout(function() { $("#game").addClass("show") }, 0), e(), xa && !xa.isTutorial && ($("#bar [data-action]").show(), $('#bar [data-action="playcenter"]').hide(), $('#bar [data-action="continue"]').hide(), $('#bar [data-action="achievements"]').hide(), $('#bar [data-action="leaderboards"]').hide(), $('#tweeturl, #facebook, [data-action="apps"]').hide()) }

        function h() { Ea = !1, Fa = !1, Ba = !0, O(), clearTimeout(ia), $("#playcenter").removeClass("spin"), $(".screen").hide().removeClass("show"), $("#menu").show(), $("#bar").show(), $("#bar [data-action]").hide(), PlayCenter.enabled && $('#bar [data-action="playcenter"]').show(), K(function(a) { $("#scorenr").html(a) }), setTimeout(function() { $("#menu").addClass("show") }, 0), e() }

        function i() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#about").show(), $("#bar [data-action]").hide(), setTimeout(function() { $("#about").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "about") }

        function j() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#online").show(), $("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), setTimeout(function() { $("#online").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "online") }

        function k() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#rules").show(), setTimeout(function() { $("#rules").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "rules") }

        function l() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#thanks").show(), setTimeout(function() { $("#thanks").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "thanks") }

        function m() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#apps").show(), setTimeout(function() { $("#apps").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "apps") }

        function n() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#settings").show(), $("#settings [data-action]").show(), setTimeout(function() { $("#settings").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "settings") }

        function o(a) { a && (Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#message").show(), $("#message-body").html(a), setTimeout(function() { $("#message").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "message"), clearTimeout(ia), $("#playcenter").removeClass("spin")) }

        function p() { Ba = !1, Fa = !0, $(".screen").hide().removeClass("show"), $("#ohhi").show(), setTimeout(function() { $("#ohhi").addClass("show") }, 0), e(), window.Marker && Marker.save("page", "0hh1") }

        function q() { Ba = !1, Fa = !1, $("#donate").hide(), g(), $("#boardsize").html("<span>Select a size</span>"), $(".menugrid").removeClass("hidden"), $("#board").addClass("hidden"), $("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), PlayCenter.isSignedIn && $('[data-action="achievements"],[data-action="leaderboards"]').show(), Ha && !xa.isTutorial && $('[data-action="continue"]').show().addClass("subtleHintOnce"), $("#board").addClass("hidden"), $("#score").show(), setTimeout(function() { da && da.clear(), $("#score").addClass("show") }, 0) }

        function r() { Ba = !1, $(".screen").hide().removeClass("show"), $("#loading").show(), setTimeout(function() { $("#loading").addClass("show") }, 0) }

        function s(a) {
            Ba = !1, $("#game").removeClass("show"), r(), e(), setTimeout(function() {
                var b = Levels.getSize(a);
                t(b)
            }, 100)
        }

        function t(a, b) {
            if (!isNaN(a)) return void s(a);
            if (Ba = !1, !a || !a.size || !a.full) throw "no proper puzzle object received";
            ka && console.log(a), O(), window.STOPPED || (ra = !1, $("#undo").closest(".iconcon").css("display", "inline-block"), $(".menugrid").addClass("hidden"), $("#board").removeClass("hidden"), $("#chooseSize").removeClass("show"), $("#score").removeClass("show").hide(), $('#bar [data-action="help"]').removeClass("hidden wiggle"), $('#bar [data-action="help"]').removeClass("subtleHint"), $("#boardsize").html("<span>" + a.size + " x " + a.size + "</span>"), da = new Grid(a.size, a.size), wa = a.size, Ha = !0, Ea = !0, Fa = !1, Ma = 0, Na = 0, Oa = 0, Pa = 0, systemTilesLockToggleable = !0, da.load(a), da.each(function() { this.value = this.value, (this.isWall() || this.isNumber()) && (this.system = !0) }), xa = a, da.hint.active = !0, da.activateDomRenderer(), da.render(), Ca = [], Da = !1, Ga = !1, a.isTutorial || window.Marker && Marker.save("level", "start", a.size), b || (Ja = new Date), la && Ja.setSeconds(Ja.getSeconds() - a.size * a.size * 5), clearTimeout(La), v(a.size), w(), u(pa && !a.isTutorial ? !0 : !1), setTimeout(function() { g() }, 0))
        }

        function u(a) {
            if (pa = void 0 != a ? a : !pa, Storage.setDataValue("showTimeTrial", pa), pa) {
                if ($("#toggleTimeTrialValue").text("Yes"), Ea) {
                    $("#time").show();
                    var b = v(xa.size);
                    void 0 == a && da.hint.show(HintType.TimeTrialShown, b)
                }
            } else $("#toggleTimeTrialValue").text("No"), Ea && ($("#time").hide(), void 0 == a && da.hint.hide(), $("#boardsize").html("<span>" + xa.size + " x " + xa.size + "</span>"))
        }

        function v(a) {
            var b = Storage.getDataValue("bestTimeSize" + a, 60 * a);
            if (!b || 0 === b || b > 60 * a) return !1;
            var c = 1e3 * b,
                d = parseInt(c / 1e3 % 60),
                e = parseInt(c / 6e4 % 60),
                f = parseInt(c / 36e5 % 24);
            e = f > 0 && 10 > e ? "0" + e : e, d = 10 > d ? "0" + d : d;
            var g = "";
            return f > 0 && (g = g + f + ":"), g = g + e + ":", g += d, $("#boardsize span").text(g), g
        }

        function w() {
            var a = new Date,
                b = a - Ja,
                c = parseInt(b / 1e3 % 60),
                d = parseInt(b / 6e4 % 60),
                e = parseInt(b / 36e5 % 24);
            Ma = parseInt(b / 1e3), d = 10 > d ? "0" + d : d, c = 10 > c ? "0" + c : c, Ka = "", d += "", c += "", e > 0 && (Ka = Ka + e + ":"), Ka = Ka + d + ":", Ka += c, $("#minutes-l").text(d.split("")[0]), $("#minutes-r").text(d.split("")[1]), $("#seconds-l").text(c.split("")[0]), $("#seconds-r").text(c.split("")[1]), Ga || (La = setTimeout(w, 1e3))
        }

        function x() {
            clearTimeout(La), K(function(a) {
                var b = 1 * a,
                    c = L(da.width * da.height, a);
                $("#scorenr").html(c), Ha = !1, da.unmark(), da.hint.hide(), da.hint.active = !1, Tutorial.end(), systemTilesLockToggleable = !1;
                var d = J() + "!";
                $("#boardsize").html("<span>" + d + "</span>"), da.each(function() { this.system = !0 }), $("#bar [data-action]").hide(), da.solve(), da.render(), $("#donate").hide(), 0 == Storage.getDataValue("donated", !1) && Storage.getDataValue("gamesPlayed", 0) >= 5 && $("#donate").show(), Storage.levelCompleted(xa.size, c, Ma, xa.isTutorial, Na, Oa), ga = setTimeout(function() { $("#grid").addClass("completed"), ea = setTimeout(function() { $("#board").addClass("hidden"), fa = setTimeout(function() { Ga = !0, $(".menugrid").removeClass("hidden"), $("#chooseSize").addClass("show"), $("#score").show(), 0 == Storage.getDataValue("donated", !1) && Storage.getDataValue("gamesPlayed", 0) >= 5 && $("#donate").show(), PlayCenter.isSignedIn && $('[data-action="achievements"],[data-action="leaderboards"]').show(), ra ? window.Marker && Marker.save("tutorial", "completed") : (window.Marker && Marker.save("level", "completed", xa.size), window.Marker && Marker.save("score", c), c > b && (M(b, c), oa && $('[data-action="apps"]').show(), ma && !xa.isTutorial && (P(xa.size), $("#tweeturl").show()), na && !xa.isTutorial && $("#facebook").show())), $('#bar [data-action="back"]').show(), $("#time").hide(), setTimeout(function() { $("#score").addClass("show"), $("#grid").removeClass("completed") }, 0) }, 50) }, 2e3) }, 2e3), xa.isTutorial || Levels.finishedSize(da.width)
            })
        }

        function y() { Storage.gameQuitted(), Ea = !1, Ga = !0, O(), clearTimeout(La), $("#time").hide(), da && (da.unmark(), da.hint.hide(), da.hint.active = !1, da.each(function() { this.system = !0 })), q() }

        function z() { document.addEventListener("backbutton", I, !1), window.WinJS && (WinJS.Application.onbackclick = I), $(document).on(Utils.getEventNames("keydown"), function(a) { return 27 == a.keyCode ? (I(), !1) : 32 == a.keyCode ? (C("help"), !1) : 90 == a.keyCode && (a.metaKey || a.ctrlKey) ? (C("undo"), !1) : void 0 }), $(document).on(Utils.getEventNames("end"), B), $(document).on(Utils.getEventNames("start"), "#grid td", A), $(document).on(Utils.getEventNames("end"), "#hintMsg, #boardsize", function() { return Tutorial.active && Tutorial.nextAllowed() ? Tutorial.next() : da && da.hint && da.hint.active && da.hint.clear(), !1 }), $(document).on(Utils.getEventNames("contextmenu"), function(a) { return a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), !1 }), $(window).on("orientationchange", e), la && $(document).on("touchend mouseup", "#boardsize", function() { da && da.solve(), D() }) }

        function A(a) {
            if (window.Utils && Utils.isDoubleTapBug(a)) return !1;
            var b = $(a.target).closest("td"),
                c = 1 * b.attr("data-x"),
                d = 1 * b.attr("data-y"),
                e = da.tile(c, d),
                f = 3 === a.which;
            if (Tutorial.active && Tutorial.nextAllowed()) return Tutorial.next(), !1;
            if (e.system) { var g = b.find(".tile"); return g.addClass("error"), Ia ? S() : R(), setTimeout(function() { g.removeClass("error") }, 500), !1 }
            if (clearTimeout(ya), Tutorial.active) return Tutorial.tapTile(e), Tutorial.active || (ya = setTimeout(function() { D() }, 700)), !1;
            da && da.hint && da.hint.clear();
            var h, i = { x: e.x, y: e.y, oldValue: e.getExportValue(), time: new Date };
            if (Ca.length) {
                h = Ca[Ca.length - 1];
                var j = da.tile(h.x, h.y),
                    k = h.time;
                (j.id != e.id || new Date - k > 500) && Ca.push(i)
            } else Ca.push(i);
            return f ? e.isUnknown() ? e.wall() : e.isWall() ? e.dot() : e.clear() : e.isUnknown() ? e.dot() : e.isDot() ? e.wall() : e.clear(), Ca.length && (h = Ca[Ca.length - 1], h.newValue = e.getExportValue()), ya = setTimeout(function() { D() }, 700), !1
        }

        function B(a) {
            if (window.Utils && Utils.isDoubleTapBug(a)) return !1;
            var b = $(a.target).closest("*[data-action]"),
                c = $(a.target).closest("*[data-action]").attr("data-action"),
                d = b.attr("data-value"),
                e = b && b.length && "A" == b[0].nodeName ? !0 : !1;
            if (!e && a.target && "A" == a.target.nodeName && (e = !0), c && !e) return C(c, d), !1;
            if (e && !window.isWebApp) {
                if ($(a.target).closest('[data-link="social"]').length) return;
                a.preventDefault();
                var f = $(a.target).attr("href");
                return $.browser.android ? navigator.app.loadUrl(f, { openExternal: !0 }) : window.open(f, "_system"), !1
            }
        }

        function C(a, b) {
            switch (a) {
                case "games":
                    ca();
                    break;
                case "close-titleScreen":
                    d();
                    break;
                case "show-menu":
                    clearTimeout(ya), Tutorial.end(), da && da.hint.clear(), h(), Ga = !0;
                    break;
                case "back":
                    if (Ea && Fa) return C("show-game");
                    if (Ga || Tutorial.active) return C("show-menu");
                    clearTimeout(ya), Tutorial.end(), y(), window.Marker && Marker.save("level", "end", xa ? xa.size : void 0);
                    break;
                case "next":
                    clearTimeout(ya), Tutorial.end(), da && da.hint.clear(), s(wa);
                    break;
                case "undo":
                    Ga || (window.Marker && Marker.save("button", "undo", xa ? xa.size : void 0), N());
                    break;
                case "continue":
                    if (Tutorial.active) return Tutorial.next();
                    Q(), window.Marker && Marker.save("button", "continue", xa ? xa.size : void 0);
                    break;
                case "retry":
                    break;
                case "help":
                    if (Ga) break;
                    if (clearTimeout(ya), Tutorial.active && !Tutorial.hintAllowed()) return;
                    da.hint.visible ? da.hint.clear() : (da.hint.clear(), da.hint.next(), Na++, window.Marker && Marker.save("button", "hint", xa ? xa.size : void 0));
                    break;
                case "in-game-about":
                    Ea = !0, i();
                    break;
                case "rules":
                    k();
                    break;
                case "thanks":
                    l();
                    break;
                case "show-0hh1":
                    ca();
                    break;
                case "apps":
                    if (!oa) return C("show-0hh1");
                    m();
                    break;
                case "show-game":
                    Fa = !1, g();
                    break;
                case "play":
                    q();
                    break;
                case "tutorial":
                    H();
                    break;
                case "about":
                    i();
                    break;
                case "achievements":
                    PlayCenter.showAchievements();
                    break;
                case "leaderboards":
                    PlayCenter.showLeaderboard();
                    break;
                case "playcenter":
                    $.browser.ios && !window.isWebApp && PlayCenter.enabled && !PlayCenter.isSignedIn ? ($("#playcenter").addClass("spin"), PlayCenter.signIn(), clearTimeout(ia), ia = setTimeout(function() { $("#playcenter").removeClass("spin") }, 4e3)) : j();
                    break;
                case "sign-out":
                    PlayCenter.signOut();
                    break;
                case "sign-in":
                    PlayCenter.signIn();
                    break;
                case "stopwatch":
                    n();
                    break;
                case "settings":
                    n();
                    break;
                case "color-theme":
                    W();
                    break;
                case "toggleTimeTrial":
                    u();
                    break;
                case "toggleDonate":
                    Y();
                    break;
                case "afterThanks":
                    if (!sa) return sa = !0, void h();
                    i();
                    break;
                case "contranoid":
                    ba()
            }
        }

        function D() { return da.emptyTileCount > 0 ? void(da.isValid() ? $('#bar [data-action="help"]').removeClass("subtleHint") : E()) : void(da.isValid() ? x() : da.hint.next()) }

        function E() {
            $('#bar [data-action="help"]').removeClass("subtleHint"), clearTimeout(ha), setTimeout(function() {
                var a = da.getClosedWrongTiles();
                a.length && ($('#bar [data-action="help"]').addClass("subtleHint"), ha = setTimeout(function() { $('#bar [data-action="help"]').removeClass("subtleHint") }, 2e3))
            }, 0)
        }

        function F(a) {
            Storage.getItem("tutorialPlayed", function(b) {
                var c = b.tutorialPlayed + "" == "true";
                a(c)
            })
        }

        function G() { Storage.setItem("tutorialPlayed", !0) }

        function H() { $("#bar [data-action]").hide(), Ba = !1, Tutorial.start(), ra = !0, F(function(a) { a || (ra = !1), G(), $("#undo").closest(".iconcon").css("display", "none") }) }

        function I() { return Ba ? window.WinJS ? window.close() : navigator.app && navigator.app.exitApp() : C("back"), !0 }

        function J() { return Aa.length || (Aa = Utils.shuffle(za.slice(0))), Utils.draw(Aa) }

        function K(a) {
            Storage.getItem("score", function(b) {
                var c = b.score;
                c || (c = 0), a(c)
            })
        }

        function L(a, b) {
            clearTimeout(L.TOH);
            var c = score = 1 * b,
                d = c + (a ? a : 0);
            return c >= d ? c : (Storage.setItem("score", d), d)
        }

        function M(a, b) {
            function c() { $("#scorenr").html(a), b > a && a++, L.TOH = setTimeout(c, d) }
            var d = 500 / (b - a);
            c()
        }

        function N() {
            if (!Ca.length) return da.hint.visible ? (da.unmark(), void da.hint.hide()) : void(Da ? da.hint.show("Nothing to undo.") : da.hint.show("That's the undo button."));
            var a = Ca.pop(),
                b = da.tile(a.x, a.y),
                c = a.oldValue;
            da.unmark(), c >= 0 ? b.setExportValue(c) : b.clear(), b.mark();
            var d = "This tile was reversed to ";
            1 == c && (d += "red."), 2 == c && (d += "blue."), 0 == c && (d += "its empty state."), da.hint.show(d), Da = !0, Oa++, clearTimeout(ya), ya = setTimeout(function() { D() }, 700)
        }

        function O() { clearTimeout(ea), clearTimeout(fa), clearTimeout(ga), clearTimeout(ha) }

        function P(a) {
            K(function(b) {
                var c = "#0hn0 It's 0h h1's companion! I just completed a " + a + " x " + a + " puzzle and my score is " + b + ". http://0hn0.com (or get the App) ",
                    d = "https://twitter.com/share?text=" + encodeURIComponent(c);
                Qa = c, $("#tweeturl").attr("href", d)
            })
        }

        function Q() {
            var a = JSON.parse(JSON.stringify(Ca));
            t(xa, !0), $(a).each(function() {
                var a = da.tile(this.x, this.y);
                a.setExportValue(this.newValue)
            }), Ca = a, setTimeout(function() { da.hint.show(HintType.GameContinued) }, 0)
        }

        function R() {
            xa.isTutorial || systemTilesLockToggleable && (da.each(function(a, b, c, d) {
                if (this.system) {
                    var e = $("#tile-" + a + "-" + b);
                    this.isWall() && e.addClass("system")
                }
            }), Ia = !0, Pa++, 10 == Pa && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.happy_lock_toggler))
        }

        function S() { $(".system").removeClass("system"), Ia = !1 }

        function T(a) { a = a || 512, Game.startGame({ size: 2, empty: [4, 3, 0, 1], full: [0, 0, 0, 0] }), $("body, #container").css("background-color", "transparent"), $("#bar, #boardsize").hide(), $("html, body").css("background", "#000"), $("#board").css("background", "#fff"), $("#container").css("overflow", "auto"), $("#feelsize").css("width", a + "px"), Game.resize(), $("#board").css("height", a + "px"), setTimeout(function() { Game.resize(), $("#board").css("height", a + "px"), setTimeout(function() { $("#board #tile-0-1").hide(), $("#board").css("height", a + "px") }, 0) }, 10) }

        function U() { pa = !0 }

        function V() { pa = !0 }

        function W() { theme = Storage.getDataValue("theme", 1), theme++, theme > 3 && (theme = 1), X(theme) }

        function X(a) { $("html").removeClass("theme1 theme2 theme3").addClass("theme" + a), Storage.setDataValue("theme", a), window.Themes && Themes.apply(a) }

        function Y() { Storage.getDataValue("donated", !1) || (ka ? confirm("Purchase 0h h1 for a $?") && Z() : Store.buyFullVersion()) }

        function Z() { _(), sa = !1, l() }

        function _() { Storage.setDataValue("donated", !0), $('[data-action="thanks"]').show(), $('p[data-action="about"]').hide(), $("#donate").hide(), $("#toggleDonateValue").removeClass("link").html("Yes"), qa = !0, Storage.data.achievementsUnlocked && Storage.data.achievementsUnlocked.pay_to_win || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.pay_to_win) }

        function aa() { $("#donate").remove(), $("#toggleDonateValue").remove(), $("#toggleDontae").remove() }

        function ba() {
            var a;
            a = $.browser.ios ? "https://itunes.apple.com/us/app/contranoid/id1027717534?mt=8" : $.browser.android ? "https://play.google.com/store/apps/details?id=com.q42.contranoid" : $.browser.chromeWebStore ? "https://chrome.google.com/webstore/detail/contranoid/ineojkjjajpfglpmjnndfioncfjkmmdn" : "http://contranoid.com", window.isWebApp ? window.open(a, "_blank") : $.browser.android ? navigator.app.loadUrl(a, { openExternal: !0 }) : $.browser.ios ? window.open(a, "_system") : window.open(a, "_blank")
        }

        function ca() { Fa = !0, Ba = !1, $(".screen").hide().removeClass("show"), $("#games").show(), setTimeout(function() { $("#games").addClass("show") }, 0), e() }
        var da, ea, fa, ga, ha, ia, ja = 0,
            ka = "#debug" == document.location.hash,
            la = !1,
            ma = window.isWebApp,
            na = window.isWebApp && !$.browser.chromeWebStore,
            oa = window.isWebApp,
            pa = !1,
            qa = !1,
            ra = !1,
            sa = !0,
            ta = 0,
            ua = !1,
            va = [4, 5, 6, 7, 8, 9],
            wa = 0,
            xa = null,
            ya = 0,
            za = ["Wonderful", "Spectacular", "Marvelous", "Outstanding", "Remarkable", "Shazam", "Impressive", "Great", "Well done", "Fabulous", "Clever", "Dazzling", "Fantastic", "Excellent", "Nice", "Super", "Awesome", "Ojoo", "Brilliant", "Splendid", "Exceptional", "Magnificent", "Yay"],
            Aa = [],
            Ba = !0,
            Ca = [],
            Da = !1,
            Ea = !1,
            Fa = !1,
            Ga = !0,
            Ha = !1,
            Ia = !1,
            Ja = 0,
            Ka = "",
            La = 0,
            Ma = 0,
            Na = 0,
            Oa = 0,
            Pa = 0,
            Qa = "#0hn0 It's 0h h1's companion! Go get addicted to this lovely puzzle game http://0hn0.com (or get the app)!";
        this.start = c, this.init = a, this.startGame = t, this.showTitleScreen = f, this.showGame = g, this.showMenu = h, this.resize = e, this.showAbout = i, this.showApps = m, this.showSettings = n, this.showMessage = o, this.showOnline = j, this.show0hh1 = p, this.startTutorial = H, this.checkForLevelComplete = D, this.enableTimer = U, this.disableTimer = V, this.undo = N, this.logo = T, this.applyColorTheme = X, this.purchaseReceived = Z, this.enableDonatedState = _, this.gotoContranoid = ba, window.__defineGetter__("tile", function() { return da.tile }), this.__defineGetter__("grid", function() { return da }), this.__defineGetter__("debug", function() { return ka }), this.__defineGetter__("fullVersion", function() { return qa })
    },
    TutorialMessages = [{ msg: 'Blue dots can see others <br>in their own row and column <span id="nextdot"></span>', tiles: [], next: !0 }, { msg: 'Red dots block their view <span id="nextdot" class="red"></span>', tiles: [], next: !0 }, { msg: 'Numbers tell how many others each blue dot can see <span id="nextdot"></span>', tiles: [], next: !0 }, {
        msg: 'This 2 says it sees two dots <br>so they must be on the right <span id="nextdot"></span>',
        tiles: [
            [0, 0]
        ],
        next: !0
    }, {
        msg: 'These two. <br>Tap to make them blue <span id="nextdot"></span>',
        tiles: [
            [1, 0, 2],
            [2, 0, 2]
        ]
    }, {
        msg: 'Now close its path.<br>Tap twice for a red dot <span id="nextdot" class="red"></span>',
        tiles: [
            [3, 0, 1]
        ]
    }, {
        msg: 'This 1 can see only one. <br>It already does - below <span id="nextdot"></span>',
        tiles: [
            [3, 1]
        ],
        next: !0
    }, {
        msg: 'So a red dot must be <br>blocking its view here <span id="nextdot" class="red"></span>',
        tiles: [
            [2, 1, 1]
        ]
    }, {
        msg: 'This 3 can\'t see left or right.<br>But it does see a dot above <span id="nextdot"></span>',
        tiles: [
            [1, 1]
        ],
        next: !0
    }, {
        msg: 'To make it see three dots <br>it needs two more... <span id="nextdot"></span>',
        tiles: [
            [1, 2, 2],
            [1, 3, 2]
        ]
    }, {
        msg: 'Can you fill out <br>the remaining dots? <span id="nextdot" class="red"></span>',
        tiles: [
            [0, 2, 1],
            [2, 2, 2],
            [2, 3, 1]
        ]
    }, { msg: "", tiles: [], last: !0 }],
    Tutorial = new function() {
        function a() { $("html").addClass("tutorial"), k = -1, l = !0, Game.startGame({ size: 4, empty: [4, 0, 0, 0, 1, 5, 0, 3, 0, 0, 0, 5, 3, 0, 0, 1], full: [4, 2, 2, 1, 1, 5, 1, 3, 1, 2, 2, 5, 3, 2, 1, 1], isTutorial: !0 }), c(), window.Marker && Marker.save("tutorial", "start") }

        function b() {
            l && window.Marker && Marker.save("tutorial", "end"), $("html").removeClass("tutorial");
            for (var a = 0; 20 > a; a++) $("html").removeClass("tutorial-" + a);
            $('#bar [data-action="help"]').removeClass("hidden wiggle"), l = !1
        }

        function c() {
            for (var a = 0; 20 > a; a++) $("html").removeClass("tutorial-" + a);
            if ($("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), k >= Utils.count(TutorialMessages)) return f(), l = !1, void setTimeout(function() { Game.checkForLevelComplete() }, 1e3);
            k++;
            var b = TutorialMessages[k];
            msg = b.msg, $("html").addClass("tutorial-" + k), e(msg), n = [], Game.grid.unmark(), $(b.tiles).each(function() { n.push(Game.grid.tile(this[0], this[1])) }), setTimeout(function() { d() }, 0), b.next, b.last && (l = !1)
        }

        function d() {
            var a = TutorialMessages[k];
            a.rows ? $(a.rows).each(function() { Game.grid.markRow(this) }) : a.cols ? $(a.cols).each(function() { Game.grid.markCol(this) }) : $(a.tiles).each(function() { Game.grid.mark(this[0], this[1]) })
        }

        function e(a) { $("#hintMsg").html("<span>" + a + "</span>"), $("html").addClass("showHint"), m = !0 }

        function f() { $("html").removeClass("showHint"), m = !1 }

        function g(a) {
            TutorialMessages[k];
            if (j()) return void c();
            var b = !1;
            $(n).each(function() { a.x == this.x && a.y == this.y && (b = !0) }), b && (a.isEmpty ? a.dot() : a.isDot() ? a.wall() : a.clear(), setTimeout(d, 0), h())
        }

        function h() {
            var a = !0;
            $(TutorialMessages[k].tiles).each(function() {
                var b = this[0],
                    c = this[1],
                    d = Game.grid.tile(b, c),
                    e = this[2];
                d.getExportValue() != e ? a = !1 : setTimeout(function() { d.unmark(), d.system = !0 }, 0)
            }), a && ($(n).each(function() { this.system = !0 }), c())
        }

        function i() { return k >= 9 }

        function j() { var a = TutorialMessages[k]; return a && a.next ? !0 : !1 }
        var k = 0,
            l = !1,
            m = !1,
            n = [];
        this.start = a, this.end = b, this.next = c, this.show = e, this.hide = f, this.tapTile = g, this.hintAllowed = i, this.nextAllowed = j, this.__defineGetter__("active", function() { return l }), this.__defineSetter__("active", function(a) { l = a }), this.__defineGetter__("visible", function() { return m }), this.__defineGetter__("step", function() { return k })
    };
! function(a, b, c) {
    function d(a) { return function() { return this[a] } }

    function e(a, b) {
        var c = a.split("."),
            d = fa;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || b === ba ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function f(a, b, c) { return a.call.apply(a.bind, arguments) }

    function g(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(c, d), a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

    function h(a, b, c) { return h = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? f : g, h.apply(da, arguments) }

    function i(a, b) { this.G = a, this.u = b || a, this.z = this.u.document, this.R = ba }

    function j(a, c, d) { a = a.z.getElementsByTagName(c)[0], a || (a = b.documentElement), a && a.lastChild && a.insertBefore(d, a.lastChild) }

    function k(a, b) { return a.createElement("link", { rel: "stylesheet", href: b }) }

    function l(a, b) { return a.createElement("script", { src: b }) }

    function m(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
            if (c[d] == b) return;
        c.push(b), a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function n(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; f > e; e++) c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function o(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
            if (c[d] == b) return ca;
        return ea
    }

    function p(a) {
        if (a.R === ba) {
            var b = a.z.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>', a.R = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.R
    }

    function q(a) { var b = a.u.location.protocol; return "about:" == b && (b = a.G.location.protocol), "https:" == b ? "https:" : "http:" }

    function r(a, b, c) { this.w = a, this.T = b, this.Aa = c }

    function s(a, b, c, d) { this.e = a != da ? a : da, this.o = b != da ? b : da, this.ba = c != da ? c : da, this.f = d != da ? d : da }

    function t(a) {
        a = ha.exec(a);
        var b = da,
            c = da,
            d = da,
            e = da;
        return a && (a[1] !== da && a[1] && (b = parseInt(a[1], 10)), a[2] !== da && a[2] && (c = parseInt(a[2], 10)), a[3] !== da && a[3] && (d = parseInt(a[3], 10)), a[4] !== da && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])), new s(b, c, d, e)
    }

    function u(a, b, c, d, e, f, g, h, i, j, k) { this.J = a, this.Ha = b, this.za = c, this.ga = d, this.Fa = e, this.fa = f, this.xa = g, this.Ga = h, this.wa = i, this.ea = j, this.k = k }

    function v(a, b) { this.a = a, this.H = b }

    function w(a) { var b = y(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1); return "" != b ? (/BB\d{2}/.test(b) && (b = "BlackBerry"), b) : (a = y(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown") }

    function x(a) {
        var b = y(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = y(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = y(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = y(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = y(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function y(a, b, c) { return (a = a.match(b)) && a[c] ? a[c] : "" }

    function z(a) { return a.documentMode ? a.documentMode : void 0 }

    function A(a) { this.va = a || "-" }

    function B(a, b) {
        this.J = a, this.U = 4, this.K = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.K = c[1], this.U = parseInt(c[2], 10))
    }

    function C(a) { return a.K + a.U }

    function D(a) {
        var b = 4,
            c = "n",
            d = da;
        return a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))), c + b
    }

    function E(a, b, c) { this.c = a, this.h = b, this.M = c, this.j = "wf", this.g = new A("-") }

    function F(a) { m(a.h, a.g.f(a.j, "loading")), H(a, "loading") }

    function G(a) { n(a.h, a.g.f(a.j, "loading")), o(a.h, a.g.f(a.j, "active")) || m(a.h, a.g.f(a.j, "inactive")), H(a, "inactive") }

    function H(a, b, c) { a.M[b] && (c ? a.M[b](c.getName(), C(c)) : a.M[b]()) }

    function I(a, b) { this.c = a, this.C = b, this.s = this.c.createElement("span", { "aria-hidden": "true" }, this.C) }

    function J(a, b) {
        var c, d = a.s;
        c = [];
        for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) { var g = e[f].replace(/['"]/g, ""); - 1 == g.indexOf(" ") ? c.push(g) : c.push("'" + g + "'") }
        c = c.join(","), e = "normal", f = b.U + "00", "o" === b.K ? e = "oblique" : "i" === b.K && (e = "italic"), c = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + c + ";" + ("font-style:" + e + ";font-weight:" + f + ";"), p(a.c) ? d.setAttribute("style", c) : d.style.cssText = c
    }

    function K(a) { j(a.c, "body", a.s) }

    function L(a, b, c, d, e, f, g, h) {
        this.V = a, this.ta = b, this.c = c, this.q = d, this.C = h || "BESbswy", this.k = e, this.F = {}, this.S = f || 5e3, this.Z = g || da, this.B = this.A = da, a = new I(this.c, this.C), K(a);
        for (var i in ja) ja.hasOwnProperty(i) && (J(a, new B(ja[i], C(this.q))), this.F[ja[i]] = a.s.offsetWidth);
        a.remove()
    }

    function M(a, b, c) {
        for (var d in ja)
            if (ja.hasOwnProperty(d) && b === a.F[ja[d]] && c === a.F[ja[d]]) return ca;
        return ea
    }

    function N(a) {
        var b = a.A.s.offsetWidth,
            c = a.B.s.offsetWidth;
        b === a.F.serif && c === a.F["sans-serif"] || a.k.T && M(a, b, c) ? ga() - a.ya >= a.S ? a.k.T && M(a, b, c) && (a.Z === da || a.Z.hasOwnProperty(a.q.getName())) ? O(a, a.V) : O(a, a.ta) : setTimeout(h(function() { N(this) }, a), 25) : O(a, a.V)
    }

    function O(a, b) { a.A.remove(), a.B.remove(), b(a.q) }

    function P(a, b, c, d) { this.c = b, this.t = c, this.N = 0, this.ca = this.Y = ea, this.S = d, this.k = a.k }

    function Q(a, b, c, d, e) {
        if (0 === b.length && e) G(a.t);
        else
            for (a.N += b.length, e && (a.Y = e), e = 0; e < b.length; e++) {
                var f = b[e],
                    g = c[f.getName()],
                    i = a.t,
                    j = f;
                m(i.h, i.g.f(i.j, j.getName(), C(j).toString(), "loading")), H(i, "fontloading", j), new L(h(a.ha, a), h(a.ia, a), a.c, f, a.k, a.S, d, g).start()
            }
    }

    function R(a) { 0 == --a.N && a.Y && (a.ca ? (a = a.t, n(a.h, a.g.f(a.j, "loading")), n(a.h, a.g.f(a.j, "inactive")), m(a.h, a.g.f(a.j, "active")), H(a, "active")) : G(a.t)) }

    function S(a, b, c) { this.G = a, this.W = b, this.a = c, this.O = this.P = 0 }

    function T(a, b) { ma.W.$[a] = b }

    function U(a, b) { this.c = a, this.d = b }

    function V(a, b) { this.c = a, this.d = b }

    function W(a) {
        var b = a.split(":");
        if (a = b[0], b[1]) {
            for (var c = b[1].split(","), b = [], d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (f) {
                    var g = na[f];
                    b.push(g ? g : f)
                }
            }
            for (c = [], d = 0; d < b.length; d += 1) c.push(new B(a, b[d]));
            return c
        }
        return [new B(a)]
    }

    function X(a, b, c) { this.a = a, this.c = b, this.d = c, this.m = [] }

    function Y(a, b) { this.c = a, this.d = b, this.m = [] }

    function Z(a, b, c) { this.L = a ? a : b + oa, this.p = [], this.Q = [], this.da = c || "" }

    function $(a) { this.p = a, this.aa = [], this.I = {} }

    function _(a, b, c) { this.a = a, this.c = b, this.d = c }

    function aa(a, b) { this.c = a, this.d = b, this.m = [] }
    var ba = void 0,
        ca = !0,
        da = null,
        ea = !1,
        fa = this;
    fa.Ba = ca;
    var ga = Date.now || function() { return +new Date };
    i.prototype.createElement = function(a, b, c) {
        if (a = this.z.createElement(a), b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a,
                            f = b[d];
                        p(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else a.setAttribute(d, b[d]);
        return c && a.appendChild(this.z.createTextNode(c)), a
    }, e("webfont.BrowserInfo", r), r.prototype.qa = d("w"), r.prototype.hasWebFontSupport = r.prototype.qa, r.prototype.ra = d("T"), r.prototype.hasWebKitFallbackBug = r.prototype.ra, r.prototype.sa = d("Aa"), r.prototype.hasWebKitMetricsBug = r.prototype.sa;
    var ha = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    s.prototype.toString = function() { return [this.e, this.o || "", this.ba || "", this.f || ""].join("") }, e("webfont.UserAgent", u), u.prototype.getName = d("J"), u.prototype.getName = u.prototype.getName, u.prototype.pa = d("za"), u.prototype.getVersion = u.prototype.pa, u.prototype.la = d("ga"), u.prototype.getEngine = u.prototype.la, u.prototype.ma = d("fa"), u.prototype.getEngineVersion = u.prototype.ma, u.prototype.na = d("xa"), u.prototype.getPlatform = u.prototype.na, u.prototype.oa = d("wa"), u.prototype.getPlatformVersion = u.prototype.oa, u.prototype.ka = d("ea"), u.prototype.getDocumentMode = u.prototype.ka, u.prototype.ja = d("k"), u.prototype.getBrowserInfo = u.prototype.ja;
    var ia = new u("Unknown", new s, "Unknown", "Unknown", new s, "Unknown", "Unknown", new s, "Unknown", ba, new r(ea, ea, ea));
    v.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = w(this);
            var b = x(this),
                c = t(b),
                d = y(this.a, /MSIE ([\d\w\.]+)/, 1),
                e = t(d);
            a = new u("MSIE", e, d, "MSIE", e, d, a, c, b, z(this.H), new r("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e, ea, ea))
        } else if (-1 != this.a.indexOf("Opera")) a: {
            a = "Unknown";
            var b = y(this.a, /Presto\/([\d\w\.]+)/, 1),
                c = t(b),
                d = x(this),
                e = t(d),
                f = z(this.H);
            if (c.e !== da ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"), b = y(this.a, /rv:([^\)]+)/, 1), c = t(b)), -1 != this.a.indexOf("Opera Mini/")) {
                var g = y(this.a, /Opera Mini\/([\d\.]+)/, 1),
                    h = t(g);
                a = new u("OperaMini", h, g, a, c, b, w(this), e, d, f, new r(ea, ea, ea))
            } else {
                if (-1 != this.a.indexOf("Version/") && (g = y(this.a, /Version\/([\d\.]+)/, 1), h = t(g), h.e !== da)) { a = new u("Opera", h, g, a, c, b, w(this), e, d, f, new r(10 <= h.e, ea, ea)); break a }
                g = y(this.a, /Opera[\/ ]([\d\.]+)/, 1), h = t(g), a = h.e !== da ? new u("Opera", h, g, a, c, b, w(this), e, d, f, new r(10 <= h.e, ea, ea)) : new u("Opera", new s, "Unknown", a, c, b, w(this), e, d, f, new r(ea, ea, ea))
            }
        }
        else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = w(this);
            var b = x(this),
                c = t(b),
                d = y(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = t(d),
                f = "Unknown",
                g = new s,
                h = "Unknown",
                i = ea; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? f = "Chrome" : /Silk\/\d/.test(this.a) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? f = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (f = "AdobeAIR"), "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = y(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == f ? h = y(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? h = y(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == f && (h = y(this.a, /AdobeAIR\/([\d\.]+)/, 1)), g = t(h), i = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o, a = new u(f, g, h, "AppleWebKit", e, d, a, c, b, z(this.H), new r(i, 536 > e.e || 536 == e.e && 11 > e.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else -1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new s, c = "Unknown", d = x(this), e = t(d), f = ea, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", c = y(this.a, /Firefox\/([\d\w\.]+)/, 1), b = t(c), f = 3 <= b.e && 5 <= b.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), g = y(this.a, /rv:([^\)]+)/, 1), h = t(g), f || (f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match(/1\.9\.1b[123]/) != da || g.match(/1\.9\.1\.[\d\.]+/) != da), a = new u(a, b, c, "Gecko", h, g, w(this), e, d, z(this.H), new r(f, ea, ea))) : a = ia;
        return a
    }, A.prototype.f = function(a) { for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase()); return b.join(this.va) }, B.prototype.getName = d("J"), I.prototype.remove = function() {
        var a = this.s;
        a.parentNode && a.parentNode.removeChild(a)
    };
    var ja = { Ea: "serif", Da: "sans-serif", Ca: "monospace" };
    L.prototype.start = function() { this.A = new I(this.c, this.C), K(this.A), this.B = new I(this.c, this.C), K(this.B), this.ya = ga(), J(this.A, new B(this.q.getName() + ",serif", C(this.q))), J(this.B, new B(this.q.getName() + ",sans-serif", C(this.q))), N(this) }, P.prototype.ha = function(a) {
        var b = this.t;
        n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "loading")), n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "inactive")), m(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "active")), H(b, "fontactive", a), this.ca = ca, R(this)
    }, P.prototype.ia = function(a) {
        var b = this.t;
        n(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "loading")), o(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "active")) || m(b.h, b.g.f(b.j, a.getName(), C(a).toString(), "inactive")), H(b, "fontinactive", a), R(this)
    }, S.prototype.load = function(a) {
        var b = a.context || this.G;
        if (this.c = new i(this.G, b), b = new E(this.c, b.document.documentElement, a), this.a.k.w) {
            var c, d = this.W,
                e = this.c,
                f = [];
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var g = d.$[c];
                    g && f.push(g(a[c], e))
                }
            for (a = a.timeout, this.O = this.P = f.length, a = new P(this.a, this.c, b, a), c = 0, d = f.length; d > c; c++) e = f[c], e.v(this.a, h(this.ua, this, e, b, a))
        } else G(b)
    }, S.prototype.ua = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, f) {
            var g = 0 == --e.P;
            g && F(b), setTimeout(function() { Q(c, a, d || {}, f || da, g) }, 0)
        }) : (a = 0 == --this.P, this.O--, a && (0 == this.O ? G(b) : F(b)), Q(c, [], {}, da, a))
    };
    var ka = a,
        la = new v(navigator.userAgent, b).parse(),
        ma = ka.WebFont = new S(a, new function() { this.$ = {} }, la);
    ma.load = ma.load, U.prototype.load = function(a) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        for (b = 0, c = d.length; c > b; b++) j(this.c, "head", k(this.c, d[b]));
        for (d = [], b = 0, c = e.length; c > b; b++) {
            var f = e[b].split(":");
            if (f[1])
                for (var g = f[1].split(","), h = 0; h < g.length; h += 1) d.push(new B(f[0], g[h]));
            else d.push(new B(f[0]))
        }
        a(d)
    }, U.prototype.v = function(a, b) { return b(a.k.w) }, T("custom", function(a, b) { return new U(b, a) });
    var na = { regular: "n4", bold: "n7", italic: "i4", bolditalic: "i7", r: "n4", b: "n7", i: "i4", bi: "i7" };
    V.prototype.v = function(a, b) { return b(a.k.w) }, V.prototype.load = function(a) {
        j(this.c, "head", k(this.c, q(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        for (var b = this.d.families, c = [], d = 0, e = b.length; e > d; d++) c.push.apply(c, W(b[d]));
        a(c)
    }, T("ascender", function(a, b) { return new V(b, a) }), X.prototype.v = function(a, b) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if (d) {
            var f = c.c.u,
                g = c.c.createElement("script");
            g.id = "__MonotypeAPIScript__" + d;
            var h = ea;
            g.onload = g.onreadystatechange = function() {
                if (!(h || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                    if (h = ca, f["__mti_fntLst" + d]) {
                        var e = f["__mti_fntLst" + d]();
                        if (e)
                            for (var i = 0; i < e.length; i++) c.m.push(new B(e[i].fontfamily))
                    }
                    b(a.k.w), g.onload = g.onreadystatechange = da
                }
            }, g.src = c.D(d, e), j(this.c, "head", g)
        } else b(ca)
    }, X.prototype.D = function(a, b) {
        var c = q(this.c),
            d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    }, X.prototype.load = function(a) { a(this.m) }, T("monotype", function(a, c) { var d = new v(navigator.userAgent, b).parse(); return new X(d, c, a) }), Y.prototype.D = function(a) { var b = q(this.c); return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js" }, Y.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.d,
            e = this.c.u,
            f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function(c) {
            c(a, d, function(a, c, d) {
                for (var e = 0; e < c.length; e += 1) {
                    var g = d[c[e]];
                    if (g)
                        for (var h = 0; h < g.length; h += 1) f.m.push(new B(c[e], g[h]));
                    else f.m.push(new B(c[e]))
                }
                b(a)
            })
        }, c = l(this.c, this.D(c)), j(this.c, "head", c)) : b(ca)
    }, Y.prototype.load = function(a) { a(this.m) }, T("typekit", function(a, b) { return new Y(b, a) });
    var oa = "//fonts.googleapis.com/css";
    Z.prototype.f = function() { if (0 == this.p.length) throw Error("No fonts to load !"); if (-1 != this.L.indexOf("kit=")) return this.L; for (var a = this.p.length, b = [], c = 0; a > c; c++) b.push(this.p[c].replace(/ /g, "+")); return a = this.L + "?family=" + b.join("%7C"), 0 < this.Q.length && (a += "&subset=" + this.Q.join(",")), 0 < this.da.length && (a += "&text=" + encodeURIComponent(this.da)), a };
    var pa = { latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;" },
        qa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
        ra = { i: "i", italic: "i", n: "n", normal: "n" },
        sa = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    $.prototype.parse = function() {
        for (var a = this.p.length, b = 0; a > b; b++) {
            var c = this.p[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f, g = c[1];
                if (f = [], g)
                    for (var g = g.split(","), h = g.length, i = 0; h > i; i++) {
                        var j;
                        if (j = g[i], j.match(/^[\w]+$/)) {
                            j = sa.exec(j.toLowerCase());
                            var k = ba;
                            if (j == da) k = "";
                            else {
                                if (k = ba, k = j[1], k == da || "" == k) k = "4";
                                else var l = qa[k],
                                    k = l ? l : isNaN(k) ? "4" : k.substr(0, 1);
                                k = [j[2] == da || "" == j[2] ? "n" : ra[j[2]], k].join("")
                            }
                            j = k
                        } else j = "";
                        j && f.push(j)
                    }
                0 < f.length && (e = f), 3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = pa[c[0]]) && (this.I[d] = c))
            }
            for (this.I[d] || (c = pa[d]) && (this.I[d] = c), c = 0; c < e.length; c += 1) this.aa.push(new B(d, e[c]))
        }
    };
    var ta = { Arimo: ca, Cousine: ca, Tinos: ca };
    _.prototype.v = function(a, b) { b(a.k.w) }, _.prototype.load = function(a) {
        var b = this.c;
        if ("MSIE" == this.a.getName() && this.d.blocking != ca) {
            var c = h(this.X, this, a),
                d = function() { b.z.body ? c() : setTimeout(d, 0) };
            d()
        } else this.X(a)
    }, _.prototype.X = function(a) {
        for (var b = this.c, c = new Z(this.d.api, q(b), this.d.text), d = this.d.families, e = d.length, f = 0; e > f; f++) {
            var g = d[f].split(":");
            3 == g.length && c.Q.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":"), c.p.push(g.join(h))
        }
        d = new $(d), d.parse(), j(b, "head", k(b, c.f())), a(d.aa, d.I, ta)
    }, T("google", function(a, c) { var d = new v(navigator.userAgent, b).parse(); return new _(d, c, a) }), aa.prototype.D = function(a) { return q(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + a + ".js" }, aa.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.c.u,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, f = c.fonts.length; f > d; ++d) {
                var g = c.fonts[d];
                e.m.push(new B(g.name, D("font-weight:" + g.weight + ";font-style:" + g.style)))
            }
            b(a)
        }, c = l(this.c, this.D(c)), j(this.c, "head", c)) : b(ca)
    }, aa.prototype.load = function(a) { a(this.m) }, T("fontdeck", function(a, b) { return new aa(b, a) }), a.WebFontConfig && ma.load(a.WebFontConfig)
}(this, document);
var Levels = new function() {
        function a() { b(), BackgroundService.kick() }

        function b() {
            try {
                var a = JSON.parse(Storage.getDataValue("puzzles", JSON.stringify(j)));
                a.size5 && (j = a), j.size4 || (j.size4 = [], j.size9 = [])
            } catch (b) {}
        }

        function c() { Storage.setDataValue("puzzles", JSON.stringify(j)) }

        function d(a) {
            var b = j["size" + a];
            b && b.length && (b.shift(), c(), BackgroundService.kick())
        }

        function e(a, b) { var d = j["size" + a]; return d ? (d.push(b), c(), void BackgroundService.kick()) : !1 }

        function f(a) { var b = j["size" + a]; return b && b.length ? !0 : !1 }

        function g(a) { var b = j["size" + a]; if (!b || !b.length) return i(a); var d = b[0]; return b.length > 1 && (b.shift(), c(), BackgroundService.kick()), d }

        function h() {
            for (var a = 1; 2 >= a; a++)
                for (var b in k) { b = 1 * b; var c = j["size" + b]; if (c && c.length < a) return b }
            return !1
        }

        function i(a) {
            for (var b, c = null, d = 0; d++ < 10;) {
                c = new Grid(a), b = { size: a, full: [], empty: [], quality: 0, ms: 0 };
                var e = new Date;
                if (c.clear(), c.generate(a), c.maxify(a), Game.debug && console.log("attempt", d, "valid", c.isValid(!0)), c.isValid(!0)) { b.full = c.getValues(), c.breakDown(), b.empty = c.getValues(), b.ms = new Date - e, b.quality = c.quality; break }
                Game.debug && console.warn("INVALID!", c), c = null
            }
            return Game.debug && console.log("attempts, ", d), Game.debug && console.log(b.ms, b), b
        }
        var j = { size4: [], size5: [], size6: [], size7: [], size8: [], size9: [] },
            k = { 4: 60, 5: 60, 6: 60, 7: 60, 8: 60, 9: 60 };
        this.hasPuzzleAvailable = f, this.finishedSize = d, this.addSize = e, this.getSize = g, this.create = i, this.needs = h, this.init = a, this.__defineGetter__("puzzles", function() { return j })
    },
    FixedLevels = new function() {
        function a(a) { var b = "fixedLevelSize" + a; return alreadyServed = 1 * Storage.getDataValue(b, 0), pool = c["size" + a], pool && alreadyServed < pool.length ? !0 : !1 }

        function b(a) { var b = "fixedLevelSize" + a; if (alreadyServed = 1 * Storage.getDataValue(b, 0), pool = c["size" + a], Game.debug && console.log("retrieving fixed level " + a + ", ", alreadyServed), pool && alreadyServed < pool.length) { var d = pool[alreadyServed]; return Storage.setDataValue(b, alreadyServed + 1), d } return null }
        var c = { size4: [{ size: 4, full: [3, 4, 1, 4, 1, 5, 6, 6, 3, 1, 5, 5, 3, 1, 4, 1], empty: [0, 4, 0, 0, 1, 0, 6, 0, 0, 0, 5, 5, 3, 0, 4, 0], quality: 56, ms: 26 }, { size: 4, full: [4, 5, 6, 1, 1, 5, 6, 6, 3, 1, 5, 5, 4, 3, 1, 4], empty: [0, 5, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4], quality: 69, ms: 26 }], size5: [{ size: 5, full: [5, 4, 1, 5, 3, 7, 6, 5, 7, 1, 4, 1, 1, 4, 1, 1, 4, 4, 1, 1, 6, 7, 7, 6, 6], empty: [5, 0, 0, 0, 3, 0, 0, 5, 0, 1, 0, 0, 0, 4, 0, 0, 4, 0, 0, 1, 0, 7, 7, 6, 0], quality: 60, ms: 26 }, { size: 5, full: [4, 3, 1, 4, 5, 3, 1, 4, 5, 6, 1, 4, 1, 1, 4, 6, 7, 5, 5, 1, 4, 5, 1, 1, 1], empty: [0, 3, 0, 0, 5, 3, 0, 0, 5, 0, 0, 4, 0, 0, 4, 0, 7, 0, 0, 0, 4, 0, 1, 1, 0], quality: 60, ms: 16 }], size6: [{ size: 6, full: [1, 5, 8, 6, 7, 1, 1, 1, 8, 6, 7, 7, 1, 4, 6, 1, 5, 5, 6, 6, 8, 7, 1, 4, 3, 1, 1, 4, 1, 1, 1, 6, 6, 8, 6, 6], empty: [0, 5, 8, 6, 7, 0, 0, 0, 0, 0, 7, 0, 0, 4, 0, 0, 5, 0, 0, 6, 0, 0, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 8, 6, 0], quality: 64, ms: 54 }, { size: 6, full: [4, 5, 5, 1, 4, 3, 1, 6, 6, 7, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 6, 6, 4, 1, 1, 4, 5, 1, 1, 1, 1, 4, 5, 1, 1, 1], empty: [0, 5, 5, 1, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 6, 0, 1, 1, 0, 0, 1, 1, 0, 1, 4, 5, 1, 0, 1], quality: 53, ms: 46 }], size7: [{ size: 7, full: [3, 5, 1, 4, 4, 1, 4, 1, 7, 6, 6, 6, 1, 4, 6, 6, 5, 1, 1, 7, 5, 4, 1, 1, 4, 4, 8, 1, 6, 4, 6, 1, 1, 6, 1, 1, 1, 7, 6, 5, 9, 1, 5, 5, 7, 6, 1, 6, 1], empty: [0, 5, 1, 0, 4, 0, 0, 0, 7, 0, 6, 6, 1, 4, 0, 0, 5, 0, 1, 0, 0, 0, 0, 1, 4, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 1, 0, 0, 6, 0, 9, 1, 5, 0, 0, 0, 0, 0, 1], quality: 59, ms: 234 }, { size: 7, full: [4, 1, 1, 1, 7, 7, 5, 6, 5, 4, 1, 7, 7, 5, 5, 4, 1, 7, 7, 7, 1, 1, 1, 7, 9, 9, 9, 6, 5, 7, 6, 8, 1, 1, 1, 1, 4, 1, 8, 6, 6, 6, 4, 6, 4, 1, 5, 5, 5], empty: [0, 1, 1, 0, 0, 7, 0, 0, 5, 0, 0, 7, 7, 5, 5, 0, 0, 7, 0, 0, 0, 0, 1, 0, 0, 0, 9, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 4, 0, 0, 5, 5], quality: 65, ms: 155 }], size8: [{ size: 8, full: [4, 4, 1, 9, 6, 8, 8, 7, 6, 6, 8, 8, 1, 6, 6, 5, 1, 1, 9, 9, 6, 8, 8, 1, 9, 8, 8, 8, 1, 1, 1, 6, 8, 7, 7, 1, 8, 8, 6, 9, 7, 6, 1, 8, 9, 9, 7, 10, 7, 6, 1, 6, 7, 7, 1, 6, 6, 1, 1, 8, 9, 9, 6, 10], empty: [4, 4, 0, 9, 0, 8, 0, 7, 0, 0, 8, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 1, 0, 6, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 9, 7, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0], quality: 67, ms: 277 }, { size: 8, full: [4, 5, 9, 1, 5, 6, 5, 8, 1, 5, 9, 5, 1, 3, 1, 5, 5, 1, 9, 5, 7, 1, 1, 5, 7, 8, 9, 1, 8, 7, 9, 8, 7, 8, 9, 1, 7, 6, 8, 1, 7, 8, 9, 1, 8, 7, 9, 7, 1, 6, 1, 3, 1, 1, 7, 5, 6, 10, 6, 7, 6, 1, 7, 5], empty: [4, 0, 0, 0, 5, 6, 0, 8, 0, 0, 9, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 6, 8, 1, 7, 8, 0, 0, 0, 0, 0, 0, 0, 6, 0, 3, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 0, 5], quality: 70, ms: 417 }], size9: [{ size: 9, full: [1, 10, 7, 10, 7, 8, 8, 1, 4, 3, 6, 1, 5, 1, 6, 6, 9, 7, 1, 8, 9, 8, 8, 1, 1, 7, 5, 8, 10, 11, 10, 10, 11, 1, 6, 1, 3, 1, 6, 1, 9, 10, 10, 10, 10, 1, 6, 7, 1, 9, 10, 10, 10, 10, 7, 8, 9, 7, 1, 7, 7, 1, 6, 5, 6, 1, 4, 1, 9, 9, 6, 9, 8, 9, 6, 8, 6, 1, 8, 5, 8], empty: [0, 0, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 5, 0, 0, 0, 0, 7, 1, 0, 0, 8, 0, 0, 1, 0, 0, 8, 10, 11, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 10, 0, 0, 0, 1, 0, 7, 0, 9, 10, 0, 10, 10, 0, 0, 0, 0, 0, 0, 7, 0, 6, 0, 6, 0, 0, 1, 0, 0, 6, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0], quality: 68, ms: 733 }, { size: 9, full: [10, 7, 7, 8, 7, 9, 1, 6, 6, 5, 1, 1, 3, 1, 7, 9, 8, 8, 5, 1, 1, 1, 8, 8, 10, 9, 9, 6, 7, 1, 5, 5, 1, 8, 7, 7, 1, 6, 1, 7, 7, 6, 9, 1, 1, 6, 9, 5, 7, 1, 6, 9, 6, 8, 4, 7, 1, 1, 1, 1, 1, 4, 6, 1, 11, 8, 8, 8, 8, 8, 1, 5, 1, 1, 9, 9, 9, 9, 9, 8, 11], empty: [10, 7, 7, 8, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 9, 8, 0, 5, 0, 0, 0, 0, 8, 0, 0, 0, 6, 7, 0, 5, 0, 1, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 6, 0, 5, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 8, 0, 8, 0, 0, 1, 0, 0, 0, 9, 0, 0, 0, 0, 8, 11], quality: 67, ms: 578 }] };
        this.has = a, this.get = b
    },
    Store = new function() {
        function a() { window.store && (store.verbosity = store.DEBUG, c(), store.ready(d), store.refresh(), i && store.error(function(a) { alert("STORE ERROR " + a.code + ": " + a.message) })), window.MSApp && (currentApp = Windows.ApplicationModel.Store.CurrentApp, k = currentApp.licenseInformation, h = !0, k.addEventListener("licensechanged", b)) }

        function b() { k.isActive && (k.isTrial || Game.purchaseReceived()) }

        function c() { store.register({ id: j, alias: j, type: store.NON_CONSUMABLE }) }

        function d() { h = !0, e(), Game.fullVersion || g(), i && alert("\\o/ STORE READY \\o/") }

        function e() { h && (store.when(j).owned(function(a) { i && alert("FULL VERSION OWNED, UNLOCKING"), Game.enableDonatedState() }), store.when(j).approved(function(a) { i && alert("FULL VERSION APPROVED, UNLOCKING"), a.finish(), Game.purchaseReceived() }), store.when(j).cancelled(function(a) { i && alert("FULL VERSION CANCELLED") }), store.when(j).error(function(a) { i && alert("FULL VERSION ERROR") }), window.MSApp && b()) }

        function f() { if (h && (window.MSApp || store.order(j), window.MSApp)) { var a = currentApp.licenseInformation;!a.isActive || a.isTrial ? currentApp.requestAppPurchaseAsync(!1).done(function() { a.isActive && !a.isTrial ? (WinJS.log && WinJS.log("You successfully upgraded your app to the fully-licensed version.", "sample", "status"), Game.purchaseReceived()) : WinJS.log && WinJS.log("You still have a trial license for this app.", "sample", "error") }, function() { WinJS.log && WinJS.log("The upgrade transaction failed. You still have a trial license for this app.", "sample", "error") }) : (WinJS.log && WinJS.log("You already bought this app and have a fully-licensed version.", "sample", "error"), Game.purchaseReceived()) } }

        function g(a) {
            if (h && !Game.fullVersion) {
                if (i && alert("RESTORE PURCHASE?"), window.store) {
                    var c = store.get(j);
                    if (c && c.transaction && c.transaction.id) i && alert("RESTORING PURCHASE BY TRANSACTION"), a ? Game.purchaseReceived() : Game.enableDonatedState();
                    else if (a) {
                        var d = { action: "back", text: "<h1>" + lang("couldNotRestorePurchase") + "</h1>" };
                        Game.showMessages(d)
                    }
                    i && alert(JSON.stringify(c))
                }
                window.MSApp && b()
            }
        }
        var h = !1,
            i = !1,
            j = "0hn0_supporter",
            k = null;
        this.init = a, this.buyFullVersion = f, this.restorePurchases = g, this.__defineGetter__("enabled", function() { return h })
    },
    BackgroundService = new function() {
        function a() {
            if (g) {
                Game.debug && console.log("Web worker created on the fly");
                var a = "var HintType = " + JSON.stringify(HintType) + ";var TileType = {Unknown: 'Unknown',Dot: 'Dot',Wall: 'Wall',Value: 'Value'};var Directions = {Left: 'Left',Right: 'Right',Up: 'Up',Down: 'Down'};",
                    c = [Utility, Grid, Tile, generateGridAndSolution, a, "\nvar Utils = new Utility();", "\nfunction Hint() { this.active = false; }", "self.onmessage = function(e) {generateGridAndSolution(e.data.size)};"].join(""),
                    d = new Blob([c], { type: "text/javascript" });
                h = new Worker(f.createObjectURL(d))
            } else h = new Worker("js/webworker.js"), Game.debug && console.log("Web worker created statically");
            h.onmessage = function(a) {
                var c = JSON.parse(a.data);
                b(c)
            }
        }

        function b(a) { Game.debug && console.log("generated puzzle", a), Levels.addSize(a.size, a) }

        function c(b) { e && (h || a(), h.postMessage({ size: b })) }

        function d() {
            var a = Levels.needs();
            if (a) {
                if (window.FixedLevels && FixedLevels.has(a)) { var b = FixedLevels.get(a); if (b) return void Levels.addSize(b.size, b) }
                c(a)
            }
        }
        var e = window.Worker ? !0 : !1,
            f = window.URL || window.webkitURL,
            g = window.Blob && f ? !0 : !1,
            h = null;
        Game.debug && console.log("BackgroundService:", e), this.generatePuzzle = c, this.kick = d, this.__defineGetter__("enabled", function() { return e })
    },
    Storage = new function() {
        function a() {
            var a = JSON.parse(JSON.stringify(n));
            j(m, function(c) {
                if (c && c[m]) {
                    var d = c[m],
                        e = JSON.parse(d);
                    e && 42 == e.q && (n = e, b(a))
                }
            })
        }

        function b(a) {
            var b = !1;
            for (var d in a) void 0 === n[d] && (n[d] = a[d], b = !0, Game.debug && console.log("upgraded from template", d, a[d]));
            b && c()
        }

        function c() { k(m, JSON.stringify(n)) }

        function d(a, b, d, e, f, g) {
            if (Game.debug && console.log("levelCompleted", a, b, d, e, f, g), Game.debug && console.log("data", n), !(!a || 4 > a || a > 9) && d && !isNaN(d)) {
                if (e) return void PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.apprentice);
                if (!(4 > a)) {
                    if (n.gamesPlayed++, b > 0 && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.score, b), PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.games_played, n.gamesPlayed), 4 == a && (n.size4played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._4_x_4_played, n.size4played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_4_x_4), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_4_x_4)), 5 == a && (n.size5played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._5_x_5_played, n.size5played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_5_x_5), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_5_x_5)), 6 == a && (n.size6played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._6_x_6_played, n.size6played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_6_x_6), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_6_x_6)), 7 == a && (n.size7played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._7_x_7_played, n.size7played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_7_x_7), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_7_x_7)), 8 == a && (n.size8played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._8_x_8_played, n.size8played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_8_x_8), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_8_x_8)), 9 == a && (n.size9played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._9_x_9_played, n.size9played), f || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_9_x_9), g || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_9_x_9)), 10 == n.gamesPlayed && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.ten), 42 == n.gamesPlayed && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.q42), 100 == n.gamesPlayed && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.hundred), !(n.gamesPlayed >= 1e3) || Storage.data.achievementsUnlocked && Storage.data.achievementsUnlocked.thousand || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.thousand), 1 == n["size" + a + "played"]) {
                        for (var h = !0, i = 5; 8 >= i; i++)
                            if (i != a) {
                                var j = n["size" + i + "played"] >= 1;
                                j || (h = !1)
                            }
                        h && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.allfour)
                    }
                    n["size" + a + "played"] >= 10 && (4 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._160_dots), 5 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._250_dots), 6 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._360_dots), 7 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._490_dots), 8 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._640_dots), 9 == a && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._810_dots));
                    var k = 1e3 * d;
                    if (d > 0) { PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time, k), 4 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_4_x_4, k), 5 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_5_x_5, k), 6 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_6_x_6, k), 7 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_7_x_7, k), 8 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_8_x_8, k), 9 == a && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_9_x_9, k); var l = n["bestTimeSize" + a];!isNaN(l) && l > d && d >= 1 && (n["bestTimeSize" + a] = d) }
                    c()
                }
            }
        }

        function e() { n.gamesQuitted++, c(), 10 == n.gamesQuitted && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.quitter) }

        function f(a) { n.achievementsUnlocked[a] || (Game.debug && console.log("achievement unlocked: " + a), n.achievementsUnlocked[a] = !0, n.achievementsNotSent[a] = !0, c()) }

        function g(a) { n.achievementsUnlocked[a] && n.achievementsNotSent[a] && (delete n.achievementsNotSent[a], c()) }

        function h(a, b) { return void 0 === n[a] ? void 0 != b ? b : !1 : n[a] }

        function i(a, b) { n[a] = b, c() }

        function j(a, b) {
            if ($.browser.chromeWebStore) chrome.storage.local.get(a, b);
            else {
                var c = {};
                c[a] = localStorage.getItem(a), b(c)
            }
        }

        function k(a, b, c) {
            if ($.browser.chromeWebStore) {
                var d = {};
                d[a] = b, chrome.storage.local.set(d, c)
            } else localStorage.setItem(a, b), c && c()
        }

        function l(a) { $.browser.chromeWebStore ? chrome.storage.local.clear(a) : (localStorage.clear(), a && a()) }
        var m = "0hn0_storage",
            n = { q: 42, size4played: 0, size5played: 0, size6played: 0, size7played: 0, size8played: 0, size9played: 0, gamesPlayed: 0, bestTimeSize4: 240, bestTimeSize5: 300, bestTimeSize6: 360, bestTimeSize7: 420, bestTimeSize8: 480, bestTimeSize9: 540, gamesQuitted: 0, autoSignIn: !0, showTimeTrial: !1, achievementsUnlocked: {}, achievementsNotSent: {}, theme: 1, splashSkibbable: !1, donated: !1 };
        $(a), this.getItem = j, this.setItem = k, this.clear = l, this.levelCompleted = d, this.gameQuitted = e, this.setDataValue = i, this.getDataValue = h, this.achievementUnlocked = f, this.achievementSent = g, this.__defineGetter__("data", function() { return n })
    },
    PlayCenter = new function() {
        var a = !1,
            b = !1;
        this.IDS = { Leaderboards: {}, Achievements: {} }, this.autoSignIn = function(a) {}, this.signIn = function(a, b) {}, this.signOut = function(a) {}, this.submitScore = function(a, b) {}, this.showLeaderboard = function(a) {}, this.unlockAchievement = function(a) {}, this.showAchievements = function() {}, this.resetAchievements = function() {}, this.__defineGetter__("enabled", function() { return a }), this.__defineGetter__("isSignedIn", function() { return b })
    },
    Themes = new function() {
        function a() {
            $("#container").append('<canvas id="scratch-canvas"/>'), h = $("#scratch-canvas")[0], i = h.getContext("2d"), f = $("#gameContainer")[0], g = $("#grain")[0];
            var a = Storage.getDataValue("theme", 1);
            for (var b in r) document.location.hash == "#" + r[b] && (a = b, q = !0);
            Storage.setDataValue("theme", a)
        }

        function b(a, b) { n.width = a, n.height = b, h.width = a, h.height = b, m = .5 / 320 * a }

        function c() { o && (o = !0, p = requestAnimFrame(c), cycleTime = new Date, e()) }

        function d(a) { 3 == a ? (o = !0, c()) : (o = !1, cancelAnimFrame && cancelAnimFrame(p)), q && r[a] && (document.location.hash = r[a]) }

        function e() {
            if (!(cycleTime < k)) {
                var a = Utils.between(-m, m, 4),
                    b = Utils.between(-m, m, 4),
                    c = Utils.between(29, 31) / 100;
                f.style.webkitTransform = "translate3d(" + a + "px, " + b + "px, 0)", f.style.transform = "translate3d(" + a + "px, " + b + "px, 0)", g.style.opacity = c, k = new Date((new Date).getTime() + 50);
                for (var d = 0; d < l.length; d++) {
                    var e = l[d];
                    i.clearRect(e[0], e[1], e[2] - e[0], e[3] - e[1])
                }
                l = [];
                var h = Utils.between(1, 5);
                i.fillStyle = "rgba(0,0,0,0.3)";
                for (var d = 0; h > d; d++) {
                    var a = Utils.between(0, n.width);
                    b = Utils.between(0, n.height), i.beginPath(), i.arc(a, b, Utils.between(.1, 3, 2), 0, j, !0), i.fill(), l.push([a - 4, b - 4, a + 4, b + 4])
                }
                var o = Utils.between(1, 5);
                i.lineWidth = .2, i.strokeStyle = "rgba(0,0,0,0.7)";
                for (var d = 0; o > d; d++) {
                    var a = Utils.between(0, n.width);
                    b = Utils.between(0, n.height), dy = Utils.between(-n.height / 2, n.height, 2), i.beginPath(), i.moveTo(a, b), i.lineTo(a, b + dy), i.stroke();
                    var p = dy >= 0 ? b : b + dy,
                        q = dy >= 0 ? b + dy : b;
                    l.push([a - 1, p - 1, a + 1, q + 1])
                }
            }
        }
        var f, g, h, i, j = 2 * Math.PI,
            k = 0,
            i = null,
            l = [],
            m = 0,
            n = { width: 0, height: 0 },
            o = !1,
            p = 0,
            q = !1,
            r = { 1: "0hn0", 2: "0hh1", 3: "contranoid" };
        this.init = a, this.cycle = c, this.grain = e, this.resize = b, this.apply = d
    },
    Links = new function() {
        function a() {
            var a = /android/.test(navigator.userAgent.toLowerCase()),
                c = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase());
            for (var d in b) {
                var e = $("#game_link_" + d),
                    f = b[d].web;
                c && (f = b[d].ios), a && (f = b[d].android), e.attr("href", f)
            }
        }
        $(a);
        var b = { quento: { ios: "https://itunes.apple.com/us/app/quento/id583954698?mt=8", android: "https://play.google.com/store/apps/details?id=nl.q42.quento&hl=en", web: "http://quento.com" }, numolition: { ios: "https://itunes.apple.com/us/app/numolition/id824164747?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.numolition", web: "http://numolition.com" }, "0hn0": { ios: "https://itunes.apple.com/us/app/0h-n0/id957191082?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.ohno", web: "http://0hn0.com" }, contranoid: { ios: "https://itunes.apple.com/us/app/contranoid/id1027717534?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.contranoid", web: "http://contranoid.com" }, "0hh1": { ios: "https://itunes.apple.com/us/app/0h-h1/id936504196?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.ohhi", web: "http://0hh1.com" }, flippybit: { ios: "https://itunes.apple.com/us/app/flippy-bit-attack-hexadecimals/id853100169?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.flippybitandtheattackofthehexadecimalsfrombase16&hl=en", web: "http://flippybitandtheattackofthehexadecimalsfrombase16.com" } }
    };
$(app.onDeviceReady);