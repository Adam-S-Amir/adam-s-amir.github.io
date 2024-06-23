function Utility() {
    var def = {
        isDoubleTapBug: function(evt, target) { if ($.browser.android) { if ("touchstart" != evt.type && "touchstart" == $(target).data("lastTouch")) return evt.stopImmediatePropagation(), evt.preventDefault(), !0; - 1 != evt.type.indexOf("touch") && $(target).data("lastTouch", !0) } return !1 },
        getEventNames: function(name) {
            switch (name) {
                case "start":
                    return $.browser.ios || $.browser.android ? "touchstart" : "touchstart mousedown";
                case "end":
                    return $.browser.ios || $.browser.android ? "touchend" : "touchend mouseup";
                default:
                    return name
            }
        },
        touchEnded: function() { touchEndedSinceTap = !0 },
        isTouch: function() { return "ontouchstart" in document.documentElement },
        padLeft: function(nr, n, str) { return Array(n - String(nr).length + 1).join(str || "0") + nr },
        trim: function(s) { return s.replace(/^\s*|\s*$/gi, "") },
        between: function(min, max, decimals) { return decimals ? 1 * (Math.random() * (max - min) + min).toFixed(decimals) : Math.floor(Math.random() * (max - min + 1) + min) },
        shuffleSimple: function(sourceArray) { return sourceArray.sort(function() { return .5 - Math.random() }), sourceArray },
        shuffle: function(sourceArray) {
            for (var n = 0; n < sourceArray.length - 1; n++) {
                var k = n + Math.floor(Math.random() * (sourceArray.length - n)),
                    temp = sourceArray[k];
                sourceArray[k] = sourceArray[n], sourceArray[n] = temp
            }
            return sourceArray
        },
        index: function(obj, i) {
            var j = 0;
            for (var name in obj) {
                if (j == i) return obj[name];
                j++
            }
        },
        areArraysEqual: function(arr1, arr2) { return arr1 && arr2 ? arr1.join("|") === arr2.join("|") : !1 },
        count: function(obj) { var count = 0; for (var name in obj) count++; return count },
        eat: function(e) { return e.preventDefault(), e.stopPropagation(), !1 },
        pick: function(arr) { var drawFromArr = arr; if (arr.constructor == Object) { drawFromArr = []; for (var id in arr) drawFromArr.push(id) } var drawIndex = Utils.between(0, drawFromArr.length - 1); return 0 == drawFromArr.length ? null : drawFromArr[drawIndex] },
        draw: function(arr, optionalValueToMatch) {
            var drawFromArr = arr;
            if (arr.constructor == Object) { drawFromArr = []; for (var id in arr) drawFromArr.push(id) }
            if (0 == drawFromArr.length) return null;
            var drawIndex = Utils.between(0, drawFromArr.length - 1);
            if (void 0 != optionalValueToMatch) {
                for (var foundMatch = !1, i = 0; i < drawFromArr.length; i++)
                    if (drawFromArr[i] == optionalValueToMatch) { drawIndex = i, foundMatch = !0; break }
                if (!foundMatch) return null
            }
            var value = drawFromArr[drawIndex];
            return drawFromArr.splice(drawIndex, 1), value
        },
        removeFromArray: function(arr, val) {
            if (0 == arr.length) return null;
            for (var foundMatch = !1, drawIndex = -1, i = 0; i < arr.length; i++)
                if (arr[i] == val) { drawIndex = i, foundMatch = !0; break }
            if (!foundMatch) return null;
            var value = arr[drawIndex];
            return arr.splice(drawIndex, 1), value
        },
        toArray: function(obj) { var arr = []; for (var id in obj) arr.push(id); return arr },
        fillArray: function(min, max, repeatEachValue) {
            repeatEachValue || (repeatEachValue = 1);
            for (var arr = new Array, repeat = 0; repeatEachValue > repeat; repeat++)
                for (var i = min; max >= i; i++) arr.push(i);
            return arr
        },
        contains: function(arr, item) {
            for (var i = 0; i < arr.length; i++)
                if (arr[i] == item) return !0;
            return !1
        },
        setCookie: function(name, value, days) {
            if (days) {
                var date = new Date;
                date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3);
                var expires = "; expires=" + date.toGMTString()
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/"
        },
        getCookie: function(name) {
            for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                for (var c = ca[i];
                    " " == c.charAt(0);) c = c.substring(1, c.length);
                if (0 == c.indexOf(nameEQ)) return c.substring(nameEQ.length, c.length)
            }
            return null
        },
        clearCookie: function(name) { this.setCookie(name, "", -1) },
        cssVendor: function($el, prop, value) {
            switch (prop) {
                case "opacity":
                    $.browser.ie ? $el.css("-ms-filter", '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + Math.round(100 * value) + ')"') : $el.css(prop, value);
                    break;
                default:
                    for (var prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"], i = 0; i < prefixes.length; i++) $el.css(prefixes[i] + prop, value)
            }
        },
        createCSS: function(s, id) { id = id || "tempcss", $("#" + id).remove(); var style = '<style id="' + id + '">' + s + "</style>";!window.isWebApp && window.MSApp && window.MSApp.execUnsafeLocalFunction ? MSApp.execUnsafeLocalFunction(function() { $("head").first().append($(style)) }) : $("head").first().append($(style)) },
        setColorScheme: function(c1) {
            var c2 = Colors.getComplementary(c1),
                lum = .1,
                c1lum = Colors.luminateHex(c1, lum),
                c2lum = Colors.luminateHex(c2, lum),
                css = ".odd  .tile-1 .inner { background-color: " + c1 + "; }.even .tile-1 .inner { background-color: " + c1lum + "; }.odd  .tile-2 .inner { background-color: " + c2 + "; }.even .tile-2 .inner { background-color: " + c2lum + "; }";
            Utils.createCSS(css)
        }
    };
    for (var o in def) this[o] = def[o]
}

function opposite(value) {
    switch (value) {
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
    var d = (new Date).getTime(),
        uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) { var r = (d + 16 * Math.random()) % 16 | 0; return d = Math.floor(d / 16), ("x" == c ? r : 3 & r | 8).toString(16) });
    return uuid
}

function Grid(size, height, id) {
    function each(handler) {
        for (var i = 0; i < tiles.length; i++) {
            var x = i % width,
                y = Math.floor(i / width),
                tile = tiles[i],
                result = handler.call(tile, x, y, i, tile);
            if (result) break
        }
        return self
    }

    function load(values, fullStateValues) {
        values && (width = height = Math.sqrt(values.length), fullStateValues && self.state.save("full", fullStateValues)), tiles = [];
        for (var i = 0; i < width * height; i++) {
            var value = values ? values[i] : 0;
            tiles[i] = new Tile(value, self, i)
        }
        return render(), self
    }

    function getIndex(x, y) { return 0 > x || x >= width || 0 > y || y >= height ? -1 : y * width + x }

    function render() {}

    function domRenderer(direct) {
        if (!noRender) {
            if (clearTimeout(renderTOH), !direct) return void(renderTOH = setTimeout(function() { domRenderer(!0) }, 0));
            Game.debug && console.log("rendering..."), rendered = !1;
            for (var html = '<table data-grid="' + id + '" id="grid" cellpadding=0 cellspacing=0>', y = 0; height > y; y++) {
                html += "<tr>";
                for (var x = 0; x < width; x++) {
                    var index = getIndex(x, y),
                        tile = tiles[index],
                        label = tile && tile.value > 0 ? tile.value : "",
                        odd = (x + y % 2) % 2;
                    html += '<td data-x="' + x + '" data-y="' + y + '" class="' + (odd ? "even" : "odd") + '"><div id="tile-' + x + "-" + y + '" class="tile tile-' + label + '"><div class="inner"></div></div></td>'
                }
                html += "</tr>"
            }
            return html += "</table>", $("#" + id).html(html), Game.resize(), rendered = !0, self
        }
    }

    function getTile(x, y) {
        if (isNaN(x)) return emptyTile;
        if (isNaN(y)) {
            var i = x;
            x = i % width, y = Math.floor(i / width)
        }
        return 0 > x || x >= width || 0 > y || y >= height ? emptyTile : tiles[getIndex(x, y)]
    }

    function clear() { return each(function() { this.clear() }), self }

    function getEmptyTiles() { var emptyTiles = []; return each(function() { this.isEmpty && emptyTiles.push(this) }), emptyTiles }

    function generate() { var result = solve(!0); return self.state.save("full"), result }

    function step(isGenerating) { return solve(isGenerating, !0) }

    function ease(percentage) {
        var emptyTiles = getEmptyTiles(),
            easeCount = percentage ? Math.floor(percentage / 100 * emptyTiles.length) : 1;
        if (!emptyTiles.length) return self;
        Utils.shuffle(emptyTiles);
        for (var i = 0; easeCount > i; i++) {
            var tile = emptyTiles[i];
            tile.value = self.state.getValueForTile("full", tile.x, tile.y)
        }
        return self
    }

    function solve(isGenerating, stepByStep) {
        var tile, emptyTiles, attempts = 0,
            pool = tiles;
        if (self.state.clear(), noRender = !0, isGenerating || stepByStep) {
            var pool = tiles.concat();
            Utils.shuffle(pool)
        }
        if (tileToSolve) {
            var sameRow = [],
                sameCol = [],
                pool2 = [];
            each(function(x, y, i) { x == tileToSolve.x ? sameCol.push(this) : y == tileToSolve.y ? sameRow.push(this) : pool2.push(this) }), pool = sameRow.concat(sameCol, [tileToSolve], pool2)
        }
        for (var totalAtt = width * height * 50; attempts++ < totalAtt;) {
            emptyTiles = [];
            for (var tileChanged = !1, i = 0; i < pool.length; i++)
                if (tile = pool[i], tile.isEmpty) {
                    var tileCanBeSolved = solveTile(tile);
                    if (tileCanBeSolved) {
                        if (hint.active) return;
                        tileChanged = tile;
                        break
                    }
                    emptyTiles.push(tile)
                }
            if (tileToSolve && tileChanged && tileToSolve.x == tileChanged.x && tileToSolve.y == tileChanged.y) return !0;
            if (!tileChanged && emptyTiles.length && isGenerating) {
                tile = emptyTiles[0];
                var valueToTry = Utils.pick(tile.possibleValues);
                tile.value = valueToTry, self.state.push(tile), isValid() || (self.state.pop(tile), tile.value = 1 == valueToTry ? 2 : 1, self.state.push(tile), isValid() || self.state.pop(tile))
            } else { if (!tileChanged) break; if (self.state.push(tileChanged), isValid() || self.state.pop(), stepByStep) break }
        }
        return noRender = !1, render(), 0 == getEmptyTiles().length
    }

    function generateFast() {
        function generateCombos() {
            for (var i = 0, l = Math.pow(2, width); l > i; i++) {
                var c = Utils.padLeft(i.toString(2), width);
                c.match(tripleReg) || c.split(0).length - 1 > maxPerRow || c.split(1).length - 1 > maxPerRow || combos.push(c)
            }
        }

        function clearRow(y) {
            for (var x = 0; x < width; x++) {
                var tile = getTile(x, y);
                tile.clear()
            }
            var combo = comboUsed[y];
            combo && (combos.push(combo), delete comboUsed[y])
        }
        var combos = [],
            tripleReg = new RegExp("0{3}|1{3}", "g");
        noRender = !0, generateCombos(), Utils.shuffle(combos);
        var y = 0,
            comboUsed = [],
            attempts = Utils.fillArray(0, 0, width);
        do {
            attempts[y]++;
            for (var combo = combos.shift(), x = 0; x < width; x++) {
                var tile = getTile(x, y);
                tile.value = 1 * combo.charAt(x) + 1
            }
            if (isValid()) comboUsed[y] = combo, y++;
            else if (combos.push(combo), clearRow(y), attempts[y] >= combos.length) {
                attempts[y] = 0;
                for (var clearFromY = 1, y2 = clearFromY; y > y2; y2++) clearRow(y2), attempts[y2] = 0;
                y = clearFromY
            }
        } while (height > y);
        self.state.save("full"), noRender = !1
    }

    function solveTile(tile) {
        if (tile.collect(hint), self.state.currentState && (self.state.currentState[tile.id2] ? tile.possibleValues = [1] : self.state.currentState[tile.id1] && (tile.possibleValues = [2])), 1 == tile.possibleValues.length) return hint.active ? !0 : (tile.value = tile.possibleValues[0], !0);
        if (tile.emptyRowPairWith && findCombo(tile, tile.emptyRowPairWith)) {
            if (hint.active) {
                tile.clear();
                var hType = HintType.SinglePossibleRowCombo,
                    doubleRowOrCol = [];
                return hint.doubleColFound.length ? (hType = HintType.ColsMustBeUnique, doubleRowOrCol = hint.doubleColFound) : hint.doubleRowFound.length && (hType = HintType.RowsMustBeUnique, doubleRowOrCol = hint.doubleRowFound), hint.mark(tile, hType, tile.emptyRowPairWith, doubleRowOrCol), !0
            }
            return !0
        }
        if (tile.emptyColPairWith && findCombo(tile, tile.emptyColPairWith)) {
            if (hint.active) {
                tile.clear();
                var hType = HintType.SinglePossibleColCombo,
                    doubleRowOrCol = [];
                return hint.doubleColFound.length ? (hType = HintType.ColsMustBeUnique, doubleRowOrCol = hint.doubleColFound) : hint.doubleRowFound.length && (hType = HintType.RowsMustBeUnique, doubleRowOrCol = hint.doubleRowFound), hint.mark(tile, hType, tile.emptyColPairWith, doubleRowOrCol), !0
            }
            return !0
        }
        return !1
    }

    function findCombo(tile, tile2) {
        for (var valueForTile1 = 1; 2 >= valueForTile1; valueForTile1++)
            if (tile.value = valueForTile1, tile2.value = 1 == valueForTile1 ? 2 : 1, !isValid()) return tile.value = 1 == valueForTile1 ? 2 : 1, tile2.clear(), !0;
        return tile.clear(), tile2.clear(), !1
    }

    function setValue(x, y, i, v) { gridInfo.cols[x][y] = v, gridInfo.rows[y][x] = v, gridInfo.colInfo[x] = 0, gridInfo.rowInfo[y] = 0 }

    function getColInfo(i) {
        var info = gridInfo.colInfo[i];
        if (!info) {
            var str = gridInfo.cols[i].join("");
            info = gridInfo.colInfo[i] = { col: i, str: str, nr0s: str.replace(count0reg, "").length, nr1s: str.replace(count1reg, "").length, hasTriple: tripleReg.test(str) }, info.hasTriple && (info.hasTripleRed = tripleRedReg.test(str), info.hasTripleBlue = tripleBlueReg.test(str)), info.isFull = 0 == info.nr0s, info.nr2s = height - info.nr0s - info.nr1s, info.isInvalid = info.nr1s > maxPerRow || info.nr2s > maxPerRow || info.hasTriple
        }
        return info
    }

    function getRowInfo(i) {
        var info = gridInfo.rowInfo[i];
        if (!info) {
            var str = gridInfo.rows[i].join("");
            info = gridInfo.rowInfo[i] = { row: i, str: str, nr0s: str.replace(count0reg, "").length, nr1s: str.replace(count1reg, "").length, hasTriple: tripleReg.test(str) }, info.hasTriple && (info.hasTripleRed = tripleRedReg.test(str), info.hasTripleBlue = tripleBlueReg.test(str)), info.isFull = 0 == info.nr0s, info.nr2s = width - info.nr0s - info.nr1s, info.isInvalid = info.nr1s > maxPerRow || info.nr2s > maxPerRow || info.hasTriple
        }
        return info
    }

    function isValid(ignoreInvalidState) {
        hint.doubleColFound = [], hint.doubleRowFound = [];
        for (var rows = {}, cols = {}, i = 0; i < width; i++) {
            var info = getColInfo(i);
            if (info.isInvalid && !ignoreInvalidState) return !1;
            if (info.isFull)
                if (cols[info.str]) { if (info.unique = !1, info.similar = cols[info.str] - 1, hint.active && hint.doubleColFound.push(cols[info.str] - 1, i), !ignoreInvalidState) return !1 } else info.unique = !0, cols[info.str] = i + 1;
            var info = getRowInfo(i);
            if (info.isInvalid && !ignoreInvalidState) return !1;
            if (info.isFull)
                if (rows[info.str]) { if (info.unique = !1, info.similar = rows[info.str] - 1, hint.active && hint.doubleRowFound.push(rows[info.str] - 1, i), !ignoreInvalidState) return !1 } else info.unique = !0, rows[info.str] = i + 1
        }
        return !0
    }

    function breakDownSimple() {
        var tile, pool = tiles.concat(),
            i = 0;
        Utils.shuffle(pool);
        for (var remainingTiles = []; i < pool.length;) {
            tile = pool[i++];
            var prevValue = tile.value;
            tile.clear(), solveTile(tile) ? tile.clear() : (tile.value = prevValue, remainingTiles.push(tile))
        }
        return quality = Math.round(100 * (getEmptyTiles().length / (width * height))), remainingTiles
    }

    function breakDown(remainingTiles) {
        var tile, attempts = 0,
            pool = remainingTiles || tiles.concat();
        tileToSolve = null, self.state.clear(), remainingTiles || Utils.shuffle(pool);
        for (var i = 0; i < pool.length && attempts++ < 6;) {
            tile = pool[i++], tileToSolve = tile;
            var clearedTile = tile,
                clearedTileValue = tile.value;
            tile.clear(), self.state.save("breakdown"), solve() ? (self.state.restore("breakdown"), attempts = 0) : (self.state.restore("breakdown"), clearedTile.value = clearedTileValue)
        }
        tileToSolve = null, self.state.save("empty"), quality = Math.round(100 * (getEmptyTiles().length / (width * height))), each(function() { this.isEmpty || (this.system = !0) })
    }

    function markRow(y) { for (var x = 0; x < width; x++) tile(x, y).mark(); return self }

    function unmarkRow(y) { for (var x = 0; x < width; x++) tile(x, y).unmark(); return self }

    function markCol(x) { for (var y = 0; height > y; y++) tile(x, y).mark(); return self }

    function unmarkCol(x) { for (var y = 0; height > y; y++) tile(x, y).unmark(); return self }

    function unmark(x, y) {
        if ("number" == typeof x && "number" == typeof y) return tile(x, y).unmark(), self;
        for (var y = 0; height > y; y++)
            for (var x = 0; x < width; x++) tile(x, y).unmark();
        return self
    }

    function mark(x, y) { return tile(x, y).mark(), self }

    function getWrongTiles() {
        var wrongTiles = [];
        return each(function(x, y, i, tile) {
            var currentValue = tile.value,
                okValue = self.state.getValueForTile("full", x, y);
            currentValue > 0 && currentValue != okValue && wrongTiles.push(tile)
        }), wrongTiles
    }

    function getValues() { var values = []; return each(function() { values.push(this.value) }), values }
    var self = this,
        id = id || "board";
    width = size, height = height || size, tiles = [], renderTOH = 0, noRender = !1, emptyTile = new Tile(-99, self, -99), maxPerRow = Math.ceil(width / 2), maxPerCol = Math.ceil(height / 2), wreg = new RegExp("[12]{" + width + "}"), hreg = new RegExp("[12]{" + height + "}"), tripleReg = new RegExp("1{3}|2{3}"), tripleRedReg = new RegExp("1{3}"), tripleBlueReg = new RegExp("2{3}"), count0reg = new RegExp("[^0]", "g"), count1reg = new RegExp("[^1]", "g"), count2reg = new RegExp("[^2]", "g"), rendered = !1, quality = 0, tileToSolve = null;
    for (var hint = (self.state = new State(this), self.hint = new Hint(this)), tile = getTile, gridInfo = { cols: [], rows: [], colInfo: [], rowInfo: [] }, i = 0; i < width; i++) gridInfo.cols[i] = Utils.fillArray(0, 0, height), gridInfo.rows[i] = Utils.fillArray(0, 0, width);
    this.each = each, this.render = render, this.getIndex = getIndex, this.tile = tile, this.generate = generate, this.generateFast = generateFast, this.breakDown = breakDown, this.breakDownSimple = breakDownSimple, this.clear = clear, this.load = load, this.solve = solve, this.step = step, this.isValid = isValid, this.ease = ease, this.size = size, this.markRow = markRow, this.unmarkRow = unmarkRow, this.markCol = markCol, this.unmarkCol = unmarkCol, this.mark = mark, this.unmark = unmark, this.getValues = getValues, this.setValue = setValue, this.getColInfo = getColInfo, this.getRowInfo = getRowInfo, this.activateDomRenderer = function() { render = this.render = domRenderer, noRender = !1 }, this.__defineGetter__("tiles", function() { return tiles }), this.__defineGetter__("width", function() { return width }), this.__defineGetter__("height", function() { return height }), this.__defineGetter__("emptyTileCount", function() { return getEmptyTiles().length }), this.__defineGetter__("emptyTiles", function() { return getEmptyTiles() }), this.__defineGetter__("wrongTiles", function() { return getWrongTiles() }), this.__defineGetter__("rendered", function() { return rendered }), this.__defineGetter__("id", function() { return id }), this.__defineGetter__("quality", function() { return quality }), this.__defineGetter__("info", function() { return gridInfo }), this.__defineGetter__("maxPerRow", function() { return maxPerRow }), this.__defineGetter__("maxPerCol", function() { return maxPerCol }), this.__defineGetter__("hint", function() { return hint }), load()
}

function Tile(value, grid, index) {
    function clear() { setValue(0) }

    function traverse(hor, ver) {
        var newX = x + hor,
            newY = y + ver;
        return grid.tile(newX, newY)
    }

    function right() { return move(Directions.Right) }

    function left() { return move(Directions.Left) }

    function up() { return move(Directions.Up) }

    function down() { return move(Directions.Down) }

    function move(dir) {
        switch (dir) {
            case Directions.Right:
                return traverse(1, 0);
            case Directions.Left:
                return traverse(-1, 0);
            case Directions.Up:
                return traverse(0, -1);
            case Directions.Down:
                return traverse(0, 1)
        }
    }

    function setValue(v) {
        if (value = v, grid.setValue(x, y, index, v), grid.rendered) {
            var $tile = $("#tile-" + x + "-" + y);
            $tile.removeClass().addClass("tile tile-" + value)
        } else grid.render();
        return self
    }

    function isPartOfTripleX() {
        var partOfTripleX = !1,
            v = value;
        if (!v) return !1;
        var l = Directions.Left,
            r = Directions.Right;
        return partOfTripleX = move(l).value == v && move(l).move(l).value == v || move(r).value == v && move(r).move(r).value == v || move(l).value == v && move(r).value == v
    }

    function isPartOfTripleY() {
        var partOfTripleY = !1,
            v = value;
        if (!v) return !1;
        var u = Directions.Up,
            d = Directions.Down;
        return partOfTripleY = move(u).value == v && move(u).move(u).value == v || move(d).value == v && move(d).move(d).value == v || move(u).value == v && move(d).value == v
    }

    function isPartOfTriple() { return partOfTripleX() || partOfTripleY() }

    function collect(hint) {
        if (value > 0) return self;
        possibleValues = [1, 2], emptyRowPairWith = null, emptyColPairWith = null;
        for (var v = 1; 2 >= v; v++) {
            var opp = 1 == v ? 2 : 1;
            for (var dir in Directions)
                if (move(dir).value == v && move(dir).move(dir).value == v) return possibleValues = [opp], hint && hint.active && hint.mark(self, 2 == v ? HintType.MaxTwoBlue : HintType.MaxTwoRed), self;
            if (move(Directions.Left).value == v && move(Directions.Right).value == v || move(Directions.Up).value == v && move(Directions.Down).value == v) return possibleValues = [opp], hint && hint.active && hint.mark(self, 2 == v ? HintType.MaxTwoBlue : HintType.MaxTwoRed), self
        }
        var rowInfo = grid.getRowInfo(y);
        if (rowInfo.nr1s >= grid.maxPerRow) return possibleValues = [2], hint && hint.active && hint.mark(self, HintType.RowMustBeBalanced), self;
        if (rowInfo.nr2s >= grid.maxPerRow) return possibleValues = [1], hint && hint.active && hint.mark(self, HintType.RowMustBeBalanced), self;
        2 == rowInfo.nr0s && rowInfo.str.replace(reg0, function(m, i) { i != self.x && (emptyRowPairWith = grid.tile(i, self.y)) });
        var colInfo = grid.getColInfo(x);
        return colInfo.nr1s >= grid.maxPerCol ? (possibleValues = [2], hint && hint.active && hint.mark(self, HintType.ColMustBeBalanced), self) : colInfo.nr2s >= grid.maxPerCol ? (possibleValues = [1], hint && hint.active && hint.mark(self, HintType.ColMustBeBalanced), self) : (2 == colInfo.nr0s && colInfo.str.replace(reg0, function(m, i) { i != self.y && (emptyColPairWith = grid.tile(self.x, i)) }), self)
    }

    function mark() { var $tile = $("#tile-" + x + "-" + y); return $tile.addClass("marked"), self }

    function unmark() { var $tile = $("#tile-" + x + "-" + y); return $tile.removeClass("marked"), self }
    var self = this,
        x = this.x = index % grid.width,
        y = this.y = Math.floor(index / grid.width),
        id = this.id = x + "," + y,
        reg0 = new RegExp("0", "g"),
        possibleValues = [],
        emptyColPairWith = null,
        emptyRowPairWith = null;
    this.id1 = id + "=1", this.id2 = id + "=2", this.right = right, this.left = left, this.up = up, this.down = down, this.move = move, this.clear = clear, this.collect = collect, this.mark = mark, this.unmark = unmark, this.isPartOfTripleX = isPartOfTripleX, this.isPartOfTripleY = isPartOfTripleY, this.isPartOfTriple = isPartOfTriple, this.__defineGetter__("value", function() { return value }), this.__defineSetter__("value", function(v) { return setValue(v) }), this.__defineGetter__("isEmpty", function() { return 0 == value }), this.__defineGetter__("possibleValues", function() { return possibleValues }), this.__defineSetter__("possibleValues", function(v) { possibleValues = v }), this.__defineGetter__("emptyRowPairWith", function() { return emptyRowPairWith }), this.__defineGetter__("emptyColPairWith", function() { return emptyColPairWith })
}

function State(grid) {
    function clear() { stateStack = {}, currentState = stateStack }

    function push(tile) {
        var id = 1 == tile.value ? tile.id1 : tile.id2,
            newState = { parent: currentState, tile: tile };
        currentState[id] = newState, currentState[tile.id] ? currentState[tile.id]++ : currentState[tile.id] = 1, currentState = newState
    }

    function pop() {
        do {
            var tile = currentState.tile;
            tile.clear(), currentState = currentState.parent
        } while (currentState && 2 == currentState[tile.id])
    }

    function save(saveId, values) {
        saveId = saveId || "1";
        var slot = { id: saveId, values: [], restoreCount: 0 };
        if (values)
            for (var i = 0; i < values.length; i++) slot.values.push(values[i]);
        else
            for (var i = 0; i < self.grid.tiles.length; i++) slot.values.push(self.grid.tiles[i].value);
        return saveSlots[saveId] = slot, self
    }

    function restore(saveId) {
        saveId = saveId || "1";
        var slot = saveSlots[saveId];
        slot.restoreCount++;
        for (var i = 0; i < slot.values.length; i++) self.grid.tiles[i].value = slot.values[i];
        return self
    }

    function getValueForTile(saveId, x, y) {
        var slot = saveSlots[saveId];
        if (!slot) return -1;
        if (isNaN(y)) var i = x,
            x = i % self.grid.width,
            y = Math.floor(i / self.grid.width);
        return slot.values[y * self.grid.width + x]
    }
    var stateStack, currentState, self = this,
        saveSlots = {};
    this.grid = grid, this.clear = clear, this.save = save, this.restore = restore, this.push = push, this.pop = pop, this.getValueForTile = getValueForTile, this.__defineGetter__("currentState", function() { return currentState })
}

function Hint(grid) {
    function clear() { this.doubleColFound = [], this.doubleRowFound = [], hide(), grid && grid.unmark(), active = !1, info = { type: HintType.None, tile: null, tile2: null, doubleRowOrCol: [] } }

    function mark(tile, hintType, tile2, doubleRowOrCol) { return active ? (info.tile = tile, info.tile2 = tile2 || null, info.type = hintType, info.doubleRowOrCol = doubleRowOrCol, !0) : !1 }

    function next() {
        var wrongTiles = grid.wrongTiles;
        if (wrongTiles.length) { var handled = getErrorHintForCompleteGrid(); if (handled) return; return void(1 == wrongTiles.length ? (wrongTiles[0].mark(), show(HintType.Error)) : ($(wrongTiles).each(function() { this.mark() }), show(HintType.Errors))) }
        if (active = !0, grid.solve(!1, !0), info.tile) switch (show(info.type), info.type) {
            case HintType.RowMustBeBalanced:
                grid.markRow(info.tile.y);
                break;
            case HintType.ColMustBeBalanced:
                grid.markCol(info.tile.x);
                break;
            case HintType.RowsMustBeUnique:
                grid.markRow(info.tile.y), grid.markRow(info.doubleRowOrCol[0] != info.tile.y ? info.doubleRowOrCol[0] : info.doubleRowOrCol[1]);
                break;
            case HintType.ColsMustBeUnique:
                grid.markCol(info.tile.x), grid.markCol(info.doubleRowOrCol[0] != info.tile.x ? info.doubleRowOrCol[0] : info.doubleRowOrCol[1]);
                break;
            default:
                info.tile2 && info.tile2.mark(), info.tile.mark()
        }
    }

    function getErrorHintForCompleteGrid() {
        active = !0;
        var invalidStates = [],
            notUniqueStates = [];
        grid.isValid(!0);
        for (var i = 0; i < grid.width; i++) {
            var ci = grid.getColInfo(i),
                ri = grid.getRowInfo(i);
            ci.isFull && ci.isInvalid && invalidStates.push(ci), ri.isFull && ri.isInvalid && invalidStates.push(ri), ci.isFull && !ci.unique && notUniqueStates.push(ci), ri.isFull && !ri.unique && notUniqueStates.push(ri)
        }
        var item = null;
        if (invalidStates.length ? item = Utils.pick(invalidStates) : notUniqueStates.length && (item = Utils.pick(notUniqueStates)), item) {
            var index = -1,
                index2 = -1,
                isCol = 0 === item.col || item.col ? !0 : !1;
            if (hintType = null, index = isCol ? item.col : item.row, item.hasTriple ? hintType = item.hasTripleRed ? HintType.MaxTwoRed : HintType.MaxTwoBlue : item.nr2s > item.nr1s || item.nr1s > item.nr2s ? hintType = isCol ? HintType.ColMustBeBalanced : HintType.RowMustBeBalanced : item.nr1s > item.nr2s ? hintType = isCol ? HintType.ColMustBeBalanced : HintType.RowMustBeBalanced : item.unique || (hintType = isCol ? HintType.ColsMustBeUnique : HintType.RowsMustBeUnique, (0 == item.similar || item.similar) && (index2 = item.similar)), 0 == index || index) return isCol ? (grid.markCol(index), (0 == index2 || index2) && grid.markCol(index2)) : (grid.markRow(index), (0 == index2 || index2) && grid.markRow(index2)), show(hintType), !0
        }
        return !1
    }

    function show(type, arg1) {
        var s = type;
        arg1 && (s = s.replace(/\%s/gi, arg1)), $("#hintMsg").html("<span>" + s + "</span>"), $("html").addClass("showHint"), visible = !0
    }

    function hide() { $("html").removeClass("showHint"), visible = !1 }
    var active = !1,
        visible = !1,
        info = { type: HintType.None, tile: null, tile2: null, doubleRowOrCol: [] };
    this.doubleColFound = [], this.doubleRowFound = [], this.clear = clear, this.mark = mark, this.next = next, this.show = show, this.hide = hide, this.getErrorHintForCompleteGrid = getErrorHintForCompleteGrid, this.info = info, this.__defineGetter__("active", function() { return active }), this.__defineSetter__("active", function(v) { active = v }), this.__defineGetter__("visible", function() { return visible })
}

function generateGridAndSolution(size) {
    var d = new Date,
        grid = new Grid(size);
    grid.generateFast();
    var result = {};
    result.size = size, result.full = grid.getValues();
    var quality = 0,
        qualityThreshold = { 4: 60, 6: 60, 8: 60, 10: 60 },
        attempts = 0;
    do attempts > 0 && (grid.clear(), grid.state.restore("full")), grid.breakDown(), quality = grid.quality; while (quality < qualityThreshold[size] && attempts++ < 42);
    grid.getValues();
    result.empty = grid.getValues(), result.quality = grid.quality, result.ms = new Date - d, self.postMessage(JSON.stringify(result))
}
window.isWebApp = !0, ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = a.length,
            c = o.type(a);
        return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function x(a, b, c) {
        if (o.isFunction(b)) return o.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return o.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (w.test(b)) return o.filter(b, a, c);
            b = o.filter(b, a)
        }
        return o.grep(a, function(a) { return g.call(b, a) >= 0 !== c })
    }

    function D(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function G(a) { var b = F[a] = {}; return o.each(a.match(E) || [], function(a, c) { b[c] = !0 }), b }

    function I() { m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready() }

    function K() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = o.expando + Math.random() }

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }

    function Z() { return !0 }

    function $() { return !1 }

    function _() { try { return m.activeElement } catch (a) {} }

    function jb(a, b) { return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function kb(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function lb(a) { var b = gb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function mb(a, b) { for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval")) }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) o.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c }

    function pb(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) }

    function sb(b, c) {
        var d = o(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display");
        return d.detach(), e
    }

    function tb(a) {
        var b = m,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    function xb(a, b, c) { var d, e, f, g, h = a.style; return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function yb(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

    function Fb(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--;)
            if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) { var d = Ab.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Hb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e))); return g }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === o.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function Kb(a, b, c, d, e) { return new Kb.prototype.init(a, b, c, d, e) }

    function Sb() { return setTimeout(function() { Lb = void 0 }), Lb = o.now() }

    function Tb(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && S(a),
            p = L.get(a, "fxshow");
        c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, k.always(function() { k.always(function() { h.unqueued--, o.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() { m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    n = !0
                }
                l[d] = p && p[d] || o.style(a, d)
            }
        if (!o.isEmptyObject(l)) {
            p ? "hidden" in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function() { o(a).hide() }), k.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in l) o.style(a, b, l[b])
            });
            for (d in l) g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = o.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: o.extend({}, b),
                opts: o.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (o.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        function g(h) { var i; return e[h] = !0, o.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        var e = {},
            f = a === oc;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) { var c, d, e = o.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && o.extend(!0, a, d), a }

    function uc(a, b, c) {
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

    function vc(a, b, c, d) {
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

    function Bc(a, b, c, d) {
        var e;
        if (o.isArray(b)) o.each(b, function(b, e) { c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== o.type(b)) d(a, b);
        else
            for (e in b) Bc(a + "[" + e + "]", b[e], c, d)
    }

    function Kc(a) { return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = a.document,
        n = "2.1.0",
        o = function(a, b) { return new o.fn.init(a, b) },
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    o.fn = o.prototype = {
        jquery: n,
        constructor: o,
        selector: "",
        length: 0,
        toArray: function() { return d.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) },
        pushStack: function(a) { var b = o.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a, b) { return o.each(this, a, b) },
        map: function(a) { return this.pushStack(o.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, o.extend = o.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, o.extend({
        expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === o.type(a) },
        isArray: Array.isArray,
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { return a - parseFloat(a) >= 0 },
        isPlainObject: function(a) { if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1; try { if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (b) { return !1 } return !0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a },
        globalEval: function(a) {
            var b, c = eval;
            a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g)
                    for (; f > e && (d = b.apply(a[e], c), d !== !1); e++);
                else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g)
                for (; f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++);
            else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : k.call(a) },
        makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : g.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) { var c, e, f; return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function() { return a.apply(b || this, e.concat(d.call(arguments))) }, f.guid = a.guid = a.guid || o.guid++, f) : void 0 },
        now: Date.now,
        support: l
    }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });
    var t = function(a) {
        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) { if (9 === i) { if (g = b.getElementById(h), !g || !g.parentNode) return d; if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else { if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        for (m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length; j--;) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try { return G.apply(d, u.querySelectorAll(v)), d } catch (w) {} finally { p || b.removeAttribute("id") }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            var a = [];
            return b
        }

        function fb(a) { return a[s] = !0, a }

        function gb(a) { var b = l.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function hb(a, b) { for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function kb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function lb(a) { return fb(function(b) { return b = +b, fb(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function mb(a) { return a && typeof a.getElementsByTagName !== A && a }

        function nb() {}

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) { if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = sb(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) { return a === b }, i, !0), l = qb(function(a) { return I.call(b, a) > -1 }, i, !0), m = [function(a, c, d) { return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) { for (e = ++j; f > e && !d.relative[a[e].type]; e++); return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            for (n = 0; o = a[n++];)
                                if (o(m, g, i)) { j.push(m); break }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        for (n = 0; o = b[n++];) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                for (; q--;) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }

        function wb(a, b, c) { for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c); return c }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                for (h = V.needsContext.test(a) ? 0 : i.length; h-- && (j = i[h], !d.relative[k = j.type]);)
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) { if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e; break }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) { return a === b && (j = !0), 0 },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) };
        try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) {
            G = {
                apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = db.support = {}, f = db.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function() { k() })), c.attributes = gb(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function(a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function(a) { return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function(a, b) { if (typeof b.getElementById !== A && n) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ab, bb); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ab, bb); return function(a) { var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) { if (a === b) return j = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) k.unshift(c);
                for (; h[d] === k[d];) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) { return db(a, null, null, b) }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try { var d = q.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) { return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) { for (; b = a[f++];) b === a[f] && (e = d.push(f)); for (; e--;) a.splice(d[e], 1) }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[5] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(ab, bb).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = w[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = db.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                for (k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m]; break }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a); return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) { for (var d, f = e(a, b), g = f.length; g--;) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) { for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() }
                }),
                has: fb(function(a) { return function(b) { return db(a, b).length > 0 } }),
                contains: fb(function(a) { return function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === m },
                focus: function(a) { return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return X.test(a.nodeName) },
                input: function(a) { return W.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: lb(function() { return [0] }),
                last: lb(function(a, b) { return [b - 1] }),
                eq: lb(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: lb(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: lb(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: lb(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: lb(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b);
        return nb.prototype = d.filters = d.pseudos, d.setFilters = new nb, g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                for (b || (b = ob(a)), c = b.length; c--;) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        }, c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) { return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function(a) { return null == a.getAttribute("disabled") }) || hb(J, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db
    }(a);
    o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;
    var u = o.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    o.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function(a) { return 1 === a.nodeType })) }, o.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(o(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (o.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) o.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) { return this.pushStack(x(this, a || [], !1)) },
        not: function(a) { return this.pushStack(x(this, a || [], !0)) },
        is: function(a) { return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = o.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b))
                        for (c in b) o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this))
        };
    A.prototype = o.fn, y = o(m);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    o.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && o(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }
    }), o.fn.extend({
        has: function(a) {
            var b = o(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (o.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? o.unique(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(o.unique(o.merge(this.get(), o(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }), o.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return o.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return o.dir(a, "parentNode", c) }, next: function(a) { return D(a, "nextSibling") }, prev: function(a) { return D(a, "previousSibling") }, nextAll: function(a) { return o.dir(a, "nextSibling") }, prevAll: function(a) { return o.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return o.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return o.dir(a, "previousSibling", c) }, siblings: function(a) { return o.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return o.sibling(a.firstChild) }, contents: function(a) { return a.contentDocument || o.merge([], a.childNodes) } }, function(a, b) { o.fn[a] = function(c, d) { var e = o.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e) } });
    var E = /\S+/g,
        F = {};
    o.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) { b = !1; break }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() { if (h) { var c = h.length;! function g(b) { o.each(b, function(b, c) { var d = o.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c) }) }(arguments), d ? f = h.length : b && (e = c, j(b)) } return this },
                remove: function() {
                    return h && o.each(arguments, function(a, b) {
                        for (var c;
                            (c = o.inArray(b, h, c)) > -1;) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) { return a ? o.inArray(a, h) > -1 : !(!h || !h.length) },
                empty: function() { return h = [], f = 0, this },
                disable: function() { return h = i = b = void 0, this },
                disabled: function() { return !h },
                lock: function() { return i = void 0, b || k.disable(), this },
                locked: function() { return !i },
                fireWith: function(a, b) { return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this },
                fire: function() { return k.fireWith(this, arguments), this },
                fired: function() { return !!c }
            };
        return k
    }, o.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", o.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", o.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", o.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return o.Deferred(function(c) {
                            o.each(b, function(b, f) {
                                var g = o.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? o.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, o.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && o.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : o.Deferred(),
                h = function(a, b, c) { return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } };
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    o.fn.ready = function(a) { return o.ready.promise().done(a), this }, o.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? o.readyWait++ : o.ready(!0) },
        ready: function(a) {
            (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")))
        }
    }), o.ready.promise = function(b) { return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b) }, o.ready.promise();
    var J = o.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === o.type(c)) { e = !0; for (h in c) o.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(o(a), c) })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    o.acceptData = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }, K.uid = 1, K.accepts = o.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) { c = K.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, o.extend(a, b) } }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (o.isEmptyObject(f)) o.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c : c[b] },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c),
                void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else { o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length; for (; c--;) delete g[d[c]] }
        },
        hasData: function(a) { return !o.isEmptyObject(this.cache[a[this.expando]] || {}) },
        discard: function(a) { a[this.expando] && delete this.cache[a[this.expando]] }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    o.extend({ hasData: function(a) { return M.hasData(a) || L.hasData(a) }, data: function(a, b, c) { return M.access(a, b, c) }, removeData: function(a, b) { M.remove(a, b) }, _data: function(a, b, c) { return L.access(a, b, c) }, _removeData: function(a, b) { L.remove(a, b) } }), o.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d]));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { M.set(this, a) }) : J(this, function(b) {
                var c, d = o.camelCase(a);
                if (f && void 0 === b) { if (c = M.get(f, a), void 0 !== c) return c; if (c = M.get(f, d), void 0 !== c) return c; if (c = P(f, d, void 0), void 0 !== c) return c } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { M.remove(this, a) }) }
    }), o.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = o.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = o._queueHooks(a, b),
                g = function() { o.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return L.get(a, c) || L.access(a, c, { empty: o.Callbacks("once memory").add(function() { L.remove(a, [b + "queue", c]) }) }) }
    }), o.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = o.queue(this, a, b);
                o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { o.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = o.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) { return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a) },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = m.createDocumentFragment(),
            b = a.appendChild(m.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    l.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    o.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.get(a);
            if (r)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) { return typeof o !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(E) || [""], j = b.length; j--;) h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({ type: n, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && o.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [""], j = b.length; j--;)
                    if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
                        for (l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n])
                    } else
                        for (n in i) o.event.remove(a, n + b[j], c, d, !0);
                o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, p = [d || m],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) {
                if (!e && !n.noBubble && !o.isWindow(d)) {
                    for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = p[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = o.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = o.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = o.event.handlers.call(this, a, j), b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, d, e, f = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } },
        fix: function(a) {
            if (a[o.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== _() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === _() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return o.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c, d) {
            var e = o.extend(new o.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, o.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, o.Event = function(a, b) { return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void(this[o.expando] = !0)) : new o.Event(a, b) }, o.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = Z, this.stopPropagation() }
    }, o.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) {
        o.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.focusinBubbles || o.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { o.event.simulate(b, a.target, o.event.fix(a), !0) };
        o.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), o.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) { return o().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function() { o.event.add(this, a, d, c, b) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() { o.event.remove(this, a, c, b) }) },
        trigger: function(a, b) { return this.each(function() { o.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { var c = this[0]; return c ? o.event.trigger(a, b, c, !0) : void 0 }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td, o.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = o.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
                else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === o.type(e)) o.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                o.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c))
                    for (j = 0; e = f[j++];) fb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) {
                if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) {
                    if (d = Object.keys(b.events || {}), d.length)
                        for (g = 0; void 0 !== (e = d[g]); g++) h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle);
                    L.cache[f] && delete L.cache[f]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), o.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? o.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        remove: function(a, b) { for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c)); return this },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return o.clone(this, a, b) }) },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                n = k - 1,
                p = a[0],
                q = o.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++) h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { o.fn[a] = function(a) { for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get()); return this.pushStack(d) } });
    var qb, rb = {},
        ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) };
    ! function() {
        function h() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f);
            var d = a.getComputedStyle(g, null);
            b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f)
        }
        var b, c, d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            e = m.documentElement,
            f = m.createElement("div"),
            g = m.createElement("div");
        g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g), a.getComputedStyle && o.extend(l, { pixelPosition: function() { return h(), b }, boxSizingReliable: function() { return null == c && h(), c }, reliableMarginRight: function() { var b, c = g.appendChild(m.createElement("div")); return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b } })
    }(), o.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = { position: "absolute", visibility: "hidden", display: "block" },
        Db = { letterSpacing: 0, fontWeight: 400 },
        Eb = ["Webkit", "O", "Moz", "ms"];
    o.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = xb(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = o.camelCase(b),
                    i = a.style;
                return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c))))
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = o.camelCase(b); return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e }
    }), o.each(["height", "width"], function(a, b) { o.cssHooks[b] = { get: function(a, c, d) { return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function() { return Ib(a, b, d) }) : Ib(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && wb(a); return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0) } } }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function(a, b) { return b ? o.swap(a, { display: "inline-block" }, xb, [a, "marginRight"]) : void 0 }), o.each({ margin: "", padding: "", border: "Width" }, function(a, b) { o.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, ub.test(a) || (o.cssHooks[a + b].set = Gb) }), o.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (o.isArray(b)) { for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = o.css(a, b[g], !1, d); return f }
                return void 0 !== c ? o.style(a, b, c) : o.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return Jb(this, !0) },
        hide: function() { return Jb(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { S(this) ? o(this).show() : o(this).hide() }) }
    }), o.Tween = Kb, Kb.prototype = { constructor: Kb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px") }, cur: function() { var a = Kb.propHooks[this.prop]; return a && a.get ? a.get(this) : Kb.propHooks._default.get(this) }, run: function(a) { var b, c = Kb.propHooks[this.prop]; return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, o.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, o.fx = Kb.prototype.init, o.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (o.cssNumber[a] ? "" : "px"),
                    g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, o.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    o.Animation = o.extend(Xb, { tweener: function(a, b) { o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b) }, prefilter: function(a, b) { b ? Qb.unshift(a) : Qb.push(a) } }), o.speed = function(a, b, c) { var d = a && "object" == typeof a ? o.extend({}, a) : { complete: c || !c && b || o.isFunction(a) && a, duration: a, easing: c && b || b && !o.isFunction(b) && b }; return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue) }, d }, o.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = o.isEmptyObject(a),
                    f = o.speed(b, c, d),
                    g = function() {
                        var b = Xb(this, o.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
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
                        f = o.timers,
                        g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && o.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = o.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), o.each(["toggle", "show", "hide"], function(a, b) {
            var c = o.fn[b];
            o.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e) }
        }), o.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { o.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), o.timers = [], o.fx.tick = function() {
            var a, b = 0,
                c = o.timers;
            for (Lb = o.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || o.fx.stop(), Lb = void 0
        }, o.fx.timer = function(a) { o.timers.push(a), a() ? o.fx.start() : o.timers.pop() }, o.fx.interval = 13, o.fx.start = function() { Mb || (Mb = setInterval(o.fx.tick, o.fx.interval)) }, o.fx.stop = function() { clearInterval(Mb), Mb = null }, o.fx.speeds = { slow: 600, fast: 200, _default: 400 }, o.fn.delay = function(a, b) {
            return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        function() {
            var a = m.createElement("input"),
                b = m.createElement("select"),
                c = b.appendChild(m.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = o.expr.attrHandle;
    o.fn.extend({ attr: function(a, b) { return J(this, o.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { o.removeAttr(this, a) }) } }), o.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b)) : void 0 },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), Zb = { set: function(a, b, c) { return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c } }, o.each(o.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || o.find.attr;
        $b[b] = function(a, b, d) { var e, f; return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    o.fn.extend({ prop: function(a, b) { return J(this, o.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[o.propFix[a] || a] }) } }), o.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0 }, propHooks: { tabIndex: { get: function(a) { return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), l.optSelected || (o.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null } }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { o.propFix[this.toLowerCase()] = this });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) return this.each(function(b) { o(this).addClass(a.call(this, b, this.className)) });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = o.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) return this.each(function(b) { o(this).removeClass(a.call(this, b, this.className)) });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? o.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function(c) { o(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = o(this), f = a.match(E) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    o.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = o.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function(a) { return null == a ? "" : a + "" })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)) : void 0
        }
    }), o.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) {
                            if (b = o(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) { for (var c, d, e = a.options, f = o.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f }
            }
        }
    }), o.each(["radio", "checkbox"], function() { o.valHooks[this] = { set: function(a, b) { return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0 } }, l.checkOn || (o.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { o.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), o.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var cc = o.now(),
        dc = /\?/;
    o.parseJSON = function(a) { return JSON.parse(a + "") }, o.parseXML = function(a) { var b, c; if (!a || "string" != typeof a) return null; try { c = new DOMParser, b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b };
    var ec, fc, gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try { fc = location.href } catch (qc) { fc = m.createElement("a"), fc.href = "", fc = fc.href }
    ec = mc.exec(fc.toLowerCase()) || [],
        o.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: fc, type: "GET", isLocal: jc.test(ec[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": o.parseJSON, "text xml": o.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(a, b) { return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a) },
            ajaxPrefilter: rc(nc),
            ajaxTransport: rc(oc),
            ajax: function(a, b) {
                function x(a, b, f, h) {
                    var j, r, s, u, w, x = b;
                    2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var c, d, e, f, g, h, i, j, k = o.ajaxSetup({}, b),
                    l = k.context || k,
                    m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event,
                    n = o.Deferred(),
                    p = o.Callbacks("once memory"),
                    q = k.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!f)
                                    for (f = {}; b = ic.exec(e);) f[b[1].toLowerCase()] = b[2];
                                b = f[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() { return 2 === t ? e : null },
                        setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                        overrideMimeType: function(a) { return t || (k.mimeType = a), this },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) { var b = a || u; return c && c.abort(b), x(0, b), this }
                    };
                if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;
                i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
                for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
                if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
                if (c = sc(oc, k, b, v)) {
                    v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout));
                    try { t = 1, c.send(r, x) } catch (w) {
                        if (!(2 > t)) throw w;
                        x(-1, w)
                    }
                } else x(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) { return o.get(a, b, c, "json") },
            getScript: function(a, b) { return o.get(a, void 0, b, "script") }
        }), o.each(["get", "post"], function(a, b) { o[b] = function(a, c, d, e) { return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { o.fn[b] = function(a) { return this.on(b, a) } }), o._evalUrl = function(a) { return o.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, o.fn.extend({
            wrapAll: function(a) { var b; return o.isFunction(a) ? this.each(function(b) { o(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this) },
            wrapInner: function(a) {
                return this.each(o.isFunction(a) ? function(b) { o(this).wrapInner(a.call(this, b)) } : function() {
                    var b = o(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) { var b = o.isFunction(a); return this.each(function(c) { o(this).wrapAll(b ? a.call(this, c) : a) }) },
            unwrap: function() { return this.parent().each(function() { o.nodeName(this, "body") || o(this).replaceWith(this.childNodes) }).end() }
        }), o.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, o.expr.filters.visible = function(a) { return !o.expr.filters.hidden(a) };
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;
    o.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) o.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, o.fn.extend({ serialize: function() { return o.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = o.prop(this, "elements"); return a ? o.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a)) }).map(function(a, b) { var c = o(this).val(); return null == c ? null : o.isArray(c) ? o.map(c, function(a) { return { name: b.name, value: a.replace(yc, "\r\n") } }) : { name: b.name, value: c.replace(yc, "\r\n") } }).get() } }), o.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (a) {} };
    var Cc = 0,
        Dc = {},
        Ec = { 0: 200, 1223: 204 },
        Fc = o.ajaxSettings.xhr();
    a.ActiveXObject && o(a).on("unload", function() { for (var a in Dc) Dc[a]() }), l.cors = !!Fc && "withCredentials" in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function(a) {
        var b;
        return l.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) { return function() { b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort"), f.send(a.hasContent && a.data || null)
            },
            abort: function() { b && b() }
        } : void 0
    }), o.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return o.globalEval(a), a } } }), o.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), o.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(d, e) { b = o("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), m.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Gc.pop() || o.expando + "_" + cc++; return this[a] = !0, a } }), o.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || o.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), o.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || m;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes))
    };
    var Ic = o.fn.load;
    o.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && o.ajax({ url: a, type: e, dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, f || [a.responseText, b, a]) }), this
    }, o.expr.filters.animated = function(a) { return o.grep(o.timers, function(b) { return a === b.elem }).length };
    var Jc = a.document.documentElement;
    o.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = o.css(a, "position"),
                l = o(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, o.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { o.offset.setOffset(this, a, b) });
            var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, o.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - o.css(c, "marginTop", !0), left: b.left - d.left - o.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || Jc; a && !o.nodeName(a, "html") && "static" === o.css(a, "position");) a = a.offsetParent; return a || Jc }) }
    }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, c) {
        var d = "pageYOffset" === c;
        o.fn[b] = function(e) { return J(this, function(b, e, f) { var g = Kc(b); return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f) }, b, e, arguments.length, null) }
    }), o.each(["top", "left"], function(a, b) { o.cssHooks[b] = yb(l.pixelPosition, function(a, c) { return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0 }) }), o.each({ Height: "height", Width: "width" }, function(a, b) {
        o.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            o.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) { var e; return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), o.fn.size = function() { return this.length }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return o });
    var Lc = a.jQuery,
        Mc = a.$;
    return o.noConflict = function(b) { return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o }, typeof b === U && (a.jQuery = a.$ = o), o
});
var app = { fontsLoaded: !1, deviceReady: !1, started: !1, initialize: function() { this.bindEvents() }, bindEvents: function() { document.addEventListener("deviceready", this.onDeviceReady, !1) }, onDeviceReady: function() { setTimeout(function() { navigator && navigator.splashscreen && navigator.splashscreen.hide() }, 100), app.deviceReady = !0, app.startTheGameIfWeCan(), PlayCenter.autoSignIn() }, receivedEvent: function(id) {}, fontsLoaded: function() { app.fontsLoaded = !0 }, startTheGameIfWeCan: function() { return app.started ? !1 : (app.started = !0, Game.init(), void Game.start()) } };
app.initialize();
var Utils = new Utility,
    Colors = new function() {
        function hexToRgb(hex) { var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null }

        function componentToHex(c) { var hex = c.toString(16); return 1 == hex.length ? "0" + hex : hex }

        function rgbToHex(r, g, b) { return "object" == typeof r && (g = r.g, b = r.b, r = r.r), "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) }

        function colorToRgb(color) { return isNaN(color) || (color = PALETTE[color]), hexToRgb(color) }

        function colorsMatch(c1, c2) { return c1.r != c2.r ? !1 : c1.g != c2.g ? !1 : c1.b != c2.b ? !1 : !0 }

        function getComplementary(rgb) {
            var asHex = !1;
            "string" == typeof rgb && (asHex = !0), asHex && (rgb = hexToRgb(rgb));
            var comp = rgbToHsv(rgb);
            comp.hue = hueShift(comp.hue, 180);
            var result = hsvToRgb(comp);
            return asHex && (result = rgbToHex(result)), result
        }

        function rgbToHsv(rgb) { return hsv = new Object, max = max3(rgb.r, rgb.g, rgb.b), dif = max - min3(rgb.r, rgb.g, rgb.b), hsv.saturation = 0 == max ? 0 : 100 * dif / max, 0 == hsv.saturation ? hsv.hue = 0 : rgb.r == max ? hsv.hue = 60 * (rgb.g - rgb.b) / dif : rgb.g == max ? hsv.hue = 120 + 60 * (rgb.b - rgb.r) / dif : rgb.b == max && (hsv.hue = 240 + 60 * (rgb.r - rgb.g) / dif), hsv.hue < 0 && (hsv.hue += 360), hsv.value = Math.round(100 * max / 255), hsv.hue = Math.round(hsv.hue), hsv.saturation = Math.round(hsv.saturation), hsv }

        function hsvToRgb(hsv) {
            var rgb = new Object;
            if (0 == hsv.saturation) rgb.r = rgb.g = rgb.b = Math.round(2.55 * hsv.value);
            else {
                switch (hsv.hue /= 60, hsv.saturation /= 100, hsv.value /= 100, i = Math.floor(hsv.hue), f = hsv.hue - i, p = hsv.value * (1 - hsv.saturation), q = hsv.value * (1 - hsv.saturation * f), t = hsv.value * (1 - hsv.saturation * (1 - f)), i) {
                    case 0:
                        rgb.r = hsv.value, rgb.g = t, rgb.b = p;
                        break;
                    case 1:
                        rgb.r = q, rgb.g = hsv.value, rgb.b = p;
                        break;
                    case 2:
                        rgb.r = p, rgb.g = hsv.value, rgb.b = t;
                        break;
                    case 3:
                        rgb.r = p, rgb.g = q, rgb.b = hsv.value;
                        break;
                    case 4:
                        rgb.r = t, rgb.g = p, rgb.b = hsv.value;
                        break;
                    default:
                        rgb.r = hsv.value, rgb.g = p, rgb.b = q
                }
                rgb.r = Math.round(255 * rgb.r), rgb.g = Math.round(255 * rgb.g), rgb.b = Math.round(255 * rgb.b)
            }
            return rgb
        }

        function luminateHex(hex, lum) { hex = String(hex).replace(/[^0-9a-f]/gi, ""), hex.length < 6 && (hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]), lum = lum || 0; var c, i, rgb = "#"; for (i = 0; 3 > i; i++) c = parseInt(hex.substr(2 * i, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16), rgb += ("00" + c).substr(c.length); return rgb }

        function hueShift(h, s) { for (h += s; h >= 360;) h -= 360; for (; 0 > h;) h += 360; return h }

        function min3(a, b, c) { return b > a ? c > a ? a : c : c > b ? b : c }

        function max3(a, b, c) { return a > b ? a > c ? a : c : b > c ? b : c }
        this.hexToRgb = hexToRgb, this.componentToHex = componentToHex, this.rgbToHex = rgbToHex, this.colorToRgb = colorToRgb, this.colorsMatch = colorsMatch, this.getComplementary = getComplementary, this.rgbToHsv = rgbToHsv, this.hsvToRgb = hsvToRgb, this.luminateHex = luminateHex
    };
window.$ = window.$ || {}, $.browser = {}, $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), $.browser.android = /android/.test(navigator.userAgent.toLowerCase()), $.browser.safari = /safari/.test(navigator.userAgent.toLowerCase()), $.browser.ipad = /ipad/.test(navigator.userAgent.toLowerCase()), $.browser.iphone = /iphone|ipod/.test(navigator.userAgent.toLowerCase()), $.browser.ios = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase()), $.browser.ie = /msie/.test(navigator.userAgent.toLowerCase()), $.browser.chromeWebStore = window.chrome && window.chrome.storage ? !0 : !1;
for (var o in $.browser) $.browser[o] && $("html").addClass(o);
window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) { window.setTimeout(function() { callback(+new Date) }, 10) } }(), window.cancelAnimFrame = function() { return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || function() {} }();
var HintType = { None: "None", RowsMustBeUnique: "No two rows are the same.", ColsMustBeUnique: "No two columns are the same.", RowMustBeBalanced: "Rows have an equal number of each color.", ColMustBeBalanced: "Columns have an equal number of each color.", MaxTwoRed: "Three red tiles aren't allowed next to each other.", MaxTwoBlue: "Three blue tiles aren't allowed next to each other.", SinglePossibleRowCombo: "Only one combination is possible here.", SinglePossibleColCombo: "Only one combination is possible here.", Error: "This one doesn't seem right.", Errors: "These don't seem right.", GameContinued: "You can now continue with your previous game...", TimeTrialShown: 'Elapsed time is now shown. <br>Time to beat: %s <span id="nextdot"></span>' },
    Directions = { Left: "Left", Right: "Right", Up: "Up", Down: "Down" },
    Game = new function() {
        function init() {
            window.Logger && (debug = !0), getScore(function(value) { $("#scorenr").html(value) }), $("#tweeturl, #facebook").hide(), showTime = Storage.getDataValue("showTimeTrial", !1), $("#toggleTimeTrialValue").text(showTime ? "Yes" : "No"), Storage.getDataValue("donated", !1) && enableDonatedState(), Themes.init(), window.isWebApp ? debug || disableDonation() : $("#app").hide(), Utils.isTouch() && $("html").addClass("touch"), $("[data-size]").each(function(i, el) {
                var $el = $(el),
                    size = 1 * $el.attr("data-size"),
                    label = sizes[size - 1];
                $el.html(label), $el.on(Utils.getEventNames("start"), function(evt) { if (Utils.isDoubleTapBug(evt)) return !1; var size = sizes[1 * $(evt.target).closest("[data-size]").attr("data-size") - 1]; return $(evt.target).hasClass("gift") ? !1 : void loadGame(size) })
            }), resize(), $(window).on(Utils.getEventNames("resize"), resize), $(window).on(Utils.getEventNames("orientationchange"), resize), Store.init(), showTitleScreen(), resize(), Storage.getDataValue("unpacked") && openGift(), hideHintIcon = Storage.getDataValue("hideHintIcon", !1), updateHintIconState();
            var colors = ["#a7327c", "#c24b31", "#c0cd31"];
            Utils.setColorScheme(colors[1]), window.SocialSharing && addNativeSocialHooks(), window.isWebApp && PlayCenter.enabled && !PlayCenter.isSignedIn && PlayCenter.autoSignIn()
        }

        function addNativeSocialHooks() { window.plugins && window.plugins.socialsharing || SocialSharing.install(), tweet = !0, facebook = !0, $("#tweeturl").on(Utils.getEventNames("click"), function(evt) { return evt.stopPropagation(), evt.preventDefault(), setTimeout(function() { window.plugins.socialsharing.shareViaTwitter(shareMsg), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.how_very_social_of_you) }, 0), !1 }), $("#facebook").on(Utils.getEventNames("click"), function(evt) { return evt.stopPropagation(), evt.preventDefault(), setTimeout(function() { window.plugins.socialsharing.shareViaFacebook(shareMsg), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.how_very_social_of_you) }, 0), !1 }) }

        function start() { return setTimeout(function() { Levels.init() }, 100), addEventListeners(), debug ? void showMenu() : (tohs.hide0 = setTimeout(function() { $(".hide0").removeClass("hide0") }, 300), tohs.hide1 = setTimeout(function() { $(".hide1").removeClass("hide1") }, 1300), tohs.show01 = setTimeout(function() { $(".show01").removeClass("hidehs") }, 2300), void(tohs.hide01 = setTimeout(function() { $(".show01").removeClass("show01").addClass("hidehs finalanim"), skipSplash = !0 }, 4200))) }

        function touchSplashScreen() {
            if (!skipSplash && !Storage.getDataValue("splashSkibbable", !1)) {
                if (splashScreenTouched++, 8 > splashScreenTouched) return;
                Storage.setDataValue("splashSkibbable", !0), PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.the_impatient_one)
            }
            checkTutorialPlayed(showMenu)
        }

        function resize() {
            var devices = { iphone4: { width: 320, height: 480 }, iphone5: { width: 320, height: 568 }, nexus5: { width: 360, height: 640 }, nexus7: { width: 604, height: 966 } };
            for (var id in devices) devices[id].id = id;
            var viewport = { width: $("#feelsize").width(), height: $("#feelsize").height() },
                aspectRatio = viewport.width / viewport.height,
                desiredType = "iphone4",
                desired = devices[desiredType],
                closest = 999;
            for (var type in devices) {
                var curDevice = devices[type],
                    deviceAspectRatio = curDevice.width / curDevice.height,
                    difference = Math.abs(aspectRatio - deviceAspectRatio);
                closest > difference && (desiredType = type, desired = devices[type], closest = difference)
            }
            var sizeToWidth = viewport.width / viewport.height < aspectRatio,
                box = { width: Math.floor(sizeToWidth ? viewport.width : viewport.height / desired.height * desired.width), height: Math.floor(sizeToWidth ? viewport.width / desired.width * desired.height : viewport.height) };
            $("#container").css({ width: box.width + "px", height: box.height + "px" });
            var containerSize = box.width;
            $("h1").css("font-size", Math.round(.24 * containerSize) + "px"), $("h2").css("font-size", Math.round(.18 * containerSize) + "px"), $("h3").css("font-size", Math.round(.15 * containerSize) + "px"), $("p").css("font-size", Math.round(.07 * containerSize) + "px"), $("#menu h2").css("font-size", Math.round(.24 * containerSize) + "px"), $("#menu p").css("font-size", Math.round(.1 * containerSize) + "px"), $("#menu p").css("padding", Math.round(.05 * containerSize) + "px 0"), $("#menu p").css("line-height", Math.round(.08 * containerSize) + "px");
            var scoreSize = Math.round(.1 * containerSize);
            $("#score").css({ "font-size": scoreSize + "px", "line-height": .85 * scoreSize + "px", height: scoreSize + "px" });
            var iconSize = Math.floor(.06875 * containerSize);
            $(".icon").css({ width: iconSize, height: iconSize, marginLeft: .7 * iconSize, marginRight: .7 * iconSize }), $(".board table").each(function(i, el) {
                var $el = $(el),
                    id = $el.attr("data-grid"),
                    w = $el.width(),
                    size = $el.find("tr").first().children("td").length,
                    tileSize = Math.floor(w / size);
                if (tileSize) {
                    var lineHeightFactor = .85;
                    Themes && Themes.theme > 1 && (lineHeightFactor = .89), $el.find(".tile").css({ width: tileSize, height: tileSize, "line-height": Math.round(tileSize * lineHeightFactor) + "px", "font-size": Math.round(.5 * tileSize) + "px" });
                    var radius = Math.round(.1 * tileSize),
                        radiusCss = "#" + id + " .tile .inner { border-radius: " + radius + "px; }#" + id + " .tile-1 .inner:after, #" + id + " .tile-2 .inner:after { border-radius: " + radius + "px; }";
                    Utils.createCSS(radiusCss, id + "radius"), Utils.createCSS(".tile.marked .inner { border-width: " + Math.floor(tileSize / 24) + "px }", "tileSize")
                }
            }), $("#digits").width($("#titlegrid table").width()).height($("#titlegrid table").height()), $("#digits").css({ "line-height": Math.round(.92 * $("#titlegrid table").height()) + "px", "font-size": .5 * $("#titlegrid table").height() + "px" });
            var topVSpace = Math.floor($("#container").height() / 2 - $("#board").height() / 2);
            $("#hintMsg").height(topVSpace + "px"), $(".digit").css("width", $("#hiddendigit").width() + "px"), window.Themes && Themes.resize(box.width, box.height)
        }

        function showTitleScreen() { onHomeScreen = !0, inGame = !1, inText = !1, $(".screen").hide().removeClass("show"), $("#title").show(), setTimeout(function() { $("#title").addClass("show") }, 0) }

        function showGame() { onHomeScreen = !1, inGame = !0, inText = !1, $(".screen").hide().removeClass("show"), $("#game").show(), setTimeout(function() { $("#game").addClass("show") }, 0), resize(), currentPuzzle && !currentPuzzle.isTutorial && ($("#bar [data-action]").show(), $('#bar [data-action="playcenter"]').hide(), $('#bar [data-action="continue"]').hide(), $('#bar [data-action="achievements"]').hide(), $('#bar [data-action="leaderboards"]').hide(), $('#tweeturl, #facebook, [data-action="apps"]').hide()), currentPuzzle && currentPuzzle.isTutorial && ($("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), $('#bar [data-action="help"]').show(), $('#bar [data-action="about"]').show()) }

        function showMenu() { onHomeScreen = !0, inGame = !1, inText = !1, clearTimeouts(), clearTimeout(removeSpinTOH), $("#playcenter").removeClass("spin"), $(".screen").hide().removeClass("show"), $("#menu").show(), $("#bar").show(), $("#bar [data-action]").hide(), PlayCenter.enabled && $('#bar [data-action="playcenter"]').show(), getScore(function(value) { $("#scorenr").html(value) }), setTimeout(function() { $("#menu").addClass("show") }, 0), resize() }

        function showAbout() { onHomeScreen = !1, inText = !0, $(".screen").hide().removeClass("show"), $("#about").show(), $("#bar [data-action]").hide(), setTimeout(function() { $("#about").addClass("show") }, 0), resize() }

        function showRules() { inText = !0, onHomeScreen = !1, $(".screen").hide().removeClass("show"), $("#rules").show(), setTimeout(function() { $("#rules").addClass("show") }, 0), resize() }

        function showApps() { inText = !0, onHomeScreen = !1, $(".screen").hide().removeClass("show"), $("#apps").show(), setTimeout(function() { $("#apps").addClass("show") }, 0), resize() }

        function showGames() { inText = !0, onHomeScreen = !1, $(".screen").hide().removeClass("show"), $("#games").show(), setTimeout(function() { $("#games").addClass("show") }, 0), resize() }

        function showSizes() { showGame(), inGame = !1, inText = !1, onHomeScreen = !1, $("#donate").hide(), $("#boardsize").html("<span>Select a size</span>"), $("#menugrid").removeClass("hidden"), $("#board").addClass("hidden"), $("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), PlayCenter.isSignedIn && $('[data-action="achievements"],[data-action="leaderboards"]').show(), continueLastGame && !currentPuzzle.isTutorial && $('[data-action="continue"]').show().addClass("subtleHintOnce"), $("#board").addClass("hidden"), $("#score").show(), setTimeout(function() { grid && grid.clear(), $("#score").addClass("show") }, 0) }

        function showLoad() { onHomeScreen = !1, $(".screen").hide().removeClass("show"), $("#loading").show(), setTimeout(function() { $("#loading").addClass("show") }, 0) }

        function loadGame(size) {
            return onHomeScreen = !1, $("#game").removeClass("show"), showLoad(), resize(), Levels.hasPuzzleAvailable(size) ? void setTimeout(function() { startGame(Levels.getSize(size)) }, 100) : void setTimeout(function() {
                var puzzle = Levels.getSize(size);
                startGame(puzzle)
            }, 100)
        }

        function startGame(puzzle, isContinued) {
            if (!isNaN(puzzle) && puzzle > 0) return loadGame(puzzle);
            if (onHomeScreen = !1, !puzzle || !puzzle.size || !puzzle.full) throw "no proper puzzle object received";
            debug && console.log(puzzle), clearTimeouts(), window.STOPPED || (startedTutorial = !1, $("#undo").closest(".iconcon").css("display", "inline-block"), $("#menugrid").addClass("hidden"), $("#board").removeClass("hidden"), $("#chooseSize").removeClass("show"), $("#score").removeClass("show").hide(), $('#bar [data-action="help"]').removeClass("hidden wiggle"), $('#bar [data-action="help"]').removeClass("subtleHint").css("display", "inline-block"), $("#boardsize").html("<span>" + puzzle.size + " x " + puzzle.size + "</span>"), grid = new Grid(puzzle.size, puzzle.size), lastSize = puzzle.size, inText = !1, inGame = !0, continueLastGame = !0, systemTilesLockToggleable = !0, timeInSeconds = 0, hintsUsed = 0, undosUsed = 0, grid.load(puzzle.empty, puzzle.full), grid.each(function() { this.value = this.value, this.value > 0 && (this.system = !0) }), grid.state.save("empty"), currentPuzzle = puzzle, grid.hint.active = !0, grid.activateDomRenderer(), grid.render(), undoStack = [], undone = !1, gameEnded = !1, locksToggled = 0, isContinued || (time = new Date), tapBoardSizeToSolve && time.setSeconds(time.getSeconds() - puzzle.size * puzzle.size * 5), clearTimeout(timerTOH), showBestTime(puzzle.size), updateTime(), updatePercentage(!0), puzzle.isTutorial ? $("#game").addClass("isTutorial") : $("#game").removeClass("isTutorial"), toggleTimeTrial(showTime && !puzzle.isTutorial ? !0 : !1), setTimeout(function() { showGame(), hideSystemTiles() }, 0))
        }

        function toggleTimeTrial(forceState) {
            if (showTime = void 0 != forceState ? forceState : !showTime, Storage.setDataValue("showTimeTrial", showTime), inGame ? $("#time").show() : $("#time").hide(), showTime) {
                if ($("#time").removeClass("hidden"), $("#toggleTimeTrialValue").text("Yes"), inGame) {
                    var timeStr = showBestTime(currentPuzzle.size);
                    void 0 == forceState && grid.hint.show(HintType.TimeTrialShown, timeStr)
                }
            } else $("#time").addClass("hidden"), $("#toggleTimeTrialValue").text("No"), inGame && (void 0 == forceState && grid.hint.hide(), $("#boardsize").html("<span>" + currentPuzzle.size + " x " + currentPuzzle.size + "</span>"))
        }

        function showBestTime(size) {
            var bestSeconds = Storage.getDataValue("bestTimeSize" + size, 60 * size);
            if (!bestSeconds || 0 === bestSeconds || bestSeconds > 60 * size) return !1;
            var ms = 1e3 * bestSeconds,
                seconds = parseInt(ms / 1e3 % 60),
                minutes = parseInt(ms / 6e4 % 60),
                hours = parseInt(ms / 36e5 % 24);
            minutes = hours > 0 && 10 > minutes ? "0" + minutes : minutes, seconds = 10 > seconds ? "0" + seconds : seconds;
            var timeStr = "";
            return hours > 0 && (timeStr = timeStr + hours + ":"), timeStr = timeStr + minutes + ":", timeStr += seconds, $("#boardsize span").text(timeStr), timeStr
        }

        function updateTime() {
            var newTime = new Date,
                ms = newTime - time,
                seconds = parseInt(ms / 1e3 % 60),
                minutes = parseInt(ms / 6e4 % 60),
                hours = parseInt(ms / 36e5 % 24);
            timeInSeconds = parseInt(ms / 1e3), minutes = 10 > minutes ? "0" + minutes : minutes, seconds = 10 > seconds ? "0" + seconds : seconds, timeStr = "", minutes += "", seconds += "", hours > 0 && (timeStr = timeStr + hours + ":"), timeStr = timeStr + minutes + ":", timeStr += seconds, $("#minutes-l").text(minutes.split("")[0]), $("#minutes-r").text(minutes.split("")[1]), $("#seconds-l").text(seconds.split("")[0]), $("#seconds-r").text(seconds.split("")[1]), gameEnded || (timerTOH = setTimeout(updateTime, 1e3))
        }

        function endGame() {
            clearTimeout(timerTOH), getScore(function(value) {
                var oldScore = 1 * value,
                    newScore = setScore(grid.width * grid.height, value);
                $("#scorenr").html(newScore), continueLastGame = !1, grid.unmark(), grid.hint.hide(), grid.hint.active = !1, systemTilesLockToggleable = !1, hideSystemTiles();
                var ojoo = getOjoo() + "!";
                $("#boardsize").html("<span>" + ojoo + "</span>"), grid.each(function() { this.system = !0 }), $("#bar [data-action]").hide(), $("#donate").hide(), 0 == Storage.getDataValue("donated", !1) && Storage.getDataValue("gamesPlayed", 0) >= 5 && $("#donate").show(), Storage.levelCompleted(currentPuzzle.size, newScore, timeInSeconds, currentPuzzle.isTutorial, hintsUsed, undosUsed), endGameTOH3 = setTimeout(function() { $("#grid").addClass("completed"), endGameTOH1 = setTimeout(function() { $("#board").addClass("hidden"), endGameTOH2 = setTimeout(function() { gameEnded = !0, $("#menugrid").removeClass("hidden"), $("#score").show(), 0 == Storage.getDataValue("donated", !1) && Storage.getDataValue("gamesPlayed", 0) >= 5 && $("#donate").show(), PlayCenter.isSignedIn && $('[data-action="achievements"],[data-action="leaderboards"]').show(), startedTutorial || newScore > oldScore && (animateScore(oldScore, newScore), showAppsIcon && $('[data-action="apps"]').show(), tweet && !currentPuzzle.isTutorial && (updateTweetUrl(currentPuzzle.size), $("#tweeturl").show()), facebook && !currentPuzzle.isTutorial && $("#facebook").show()), currentPuzzle.isTutorial && $("#boardsize").html("<span>Select a size</span>"), $('#bar [data-action="back"]').show(), $("#time").hide(), $("#promo").show(), setTimeout(function() { $("#score").addClass("show"), $("#grid").removeClass("completed") }, 0) }, 50) }, 2e3) }, 1200), currentPuzzle.isTutorial || Levels.finishedSize(grid.width)
            })
        }

        function quitCurrentGame() { Storage.gameQuitted(), gameEnded = !0, clearTimeouts(), clearTimeout(timerTOH), $("#time").hide(), grid && (grid.unmark(), grid.hint.hide(), grid.hint.active = !1, grid.each(function() { this.system = !0 })), showSizes() }

        function addEventListeners() {
            listenersAdded || (document.addEventListener("backbutton", backButtonPressed, !1), window.isWebApp || $(document).on(Utils.getEventNames("click"), "#games a", function(evt) { if (evt.preventDefault(), evt.stopPropagation(), evt.stopImmediatePropagation(), Utils.isDoubleTapBug(evt, this)) return !1; var url = $(evt.target).closest("a").attr("href"); return $.browser.android ? navigator.app.loadUrl(url, { openExternal: !0 }) : $.browser.ios && window.open(url, "_system"), !1 }), window.WinJS && (WinJS.Application.onbackclick = backButtonPressed), $(document).on(Utils.getEventNames("keydown"), function(evt) { return 27 == evt.keyCode ? (backButtonPressed(), !1) : 32 == evt.keyCode ? (doAction("help"), !1) : 90 == evt.keyCode && (evt.metaKey || evt.ctrlKey) ? (doAction("undo"), !1) : void 0 }), $(document).on(Utils.getEventNames("end"), click), $(document).on(Utils.getEventNames("start"), "#grid td", tapTile),
                $(document).on(Utils.getEventNames("contextmenu"), function(e) { return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1 }), tapBoardSizeToSolve && $(document).on(Utils.getEventNames("end"), "#boardsize", function() { grid && grid.solve() }), listenersAdded = !0)
        }

        function tapTile(e) {
            if (Utils.isDoubleTapBug(e, this)) return !1;
            var $el = $(e.target).closest("td"),
                x = 1 * $el.attr("data-x"),
                y = 1 * $el.attr("data-y"),
                tile = grid.tile(x, y),
                rightClick = 3 === e.which;
            if (tile.system) { var $tile = $el.find(".tile"); return $tile.addClass("error"), systemTilesLockShown ? hideSystemTiles() : showSystemTiles(), setTimeout(function() { $tile.removeClass("error") }, 500), !1 }
            if (clearTimeout(checkTOH), Tutorial.active) return Tutorial.tapTile(tile), !1;
            grid && grid.hint && grid.hint.clear();
            var lastState, undoState = { x: tile.x, y: tile.y, oldValue: tile.value, time: new Date };
            if (undoStack.length) {
                lastState = undoStack[undoStack.length - 1];
                var lastTile = grid.tile(lastState.x, lastState.y),
                    lastChange = lastState.time;
                (lastTile.id != tile.id || new Date - lastChange > 500) && undoStack.push(undoState)
            } else undoStack.push(undoState);
            return rightClick ? tile.isEmpty ? tile.value = 2 : 2 == tile.value ? tile.value = 1 : tile.clear() : tile.isEmpty ? tile.value = 1 : 1 == tile.value ? tile.value = 2 : tile.clear(), undoStack.length && (lastState = undoStack[undoStack.length - 1], lastState.newValue = tile.value), updatePercentage(), checkTOH = setTimeout(function() { checkForLevelComplete() }, 700), !1
        }

        function click(evt) {
            if (window.Utils && Utils.isDoubleTapBug(evt)) return !1;
            var $el = $(evt.target).closest("*[data-action]"),
                action = $(evt.target).closest("*[data-action]").attr("data-action"),
                value = $el.attr("data-value"),
                isLink = $el && $el.length && "A" == $el[0].nodeName ? !0 : !1;
            return !isLink && evt.target && "A" == evt.target.nodeName && (isLink = !0), action && !isLink ? (doAction(action, value), !1) : void 0
        }

        function doAction(action, value) {
            switch (action) {
                case "gift":
                    openGift(!0);
                    break;
                case "toggleHintIcon":
                    toggleHintIcon();
                    break;
                case "close-titleScreen":
                    touchSplashScreen();
                    break;
                case "show-menu":
                    clearTimeout(checkTOH), Tutorial.end(), grid && grid.hint.clear(), showMenu();
                    break;
                case "back":
                    if (backAction) { var tmp = backAction; return backAction = null, doAction(tmp) }
                    return inGame && inText ? doAction("show-game") : !inGame && inText ? doAction("show-menu") : inGame && currentPuzzle && currentPuzzle.isTutorial ? (Tutorial.end(), quitCurrentGame(), clearTimeout(checkTOH), doAction("show-menu")) : inGame && currentPuzzle && !currentPuzzle.isTutorial ? (quitCurrentGame(), clearTimeout(checkTOH), doAction("show-sizes")) : doAction("show-menu");
                case "next":
                    clearTimeout(checkTOH), Tutorial.end(), grid && grid.hint.clear(), loadGame(lastSize);
                    break;
                case "undo":
                    gameEnded || undo();
                    break;
                case "continue":
                    continueGame();
                    break;
                case "retry":
                    if (clearTimeout(checkTOH), $("#game").removeClass("show"), Tutorial.active || currentPuzzle.isTutorial) return void setTimeout(function() { Tutorial.start() }, 300);
                    setTimeout(function() { startGame(currentPuzzle) }, 300);
                    break;
                case "help":
                    if (gameEnded) break;
                    if (clearTimeout(checkTOH), Tutorial.active && !Tutorial.hintAllowed()) return;
                    grid.hint.visible ? grid.hint.clear() : (hintsUsed++, grid.hint.clear(), grid.hint.next());
                    break;
                case "rules":
                    showRules();
                    break;
                case "end-rules":
                    return doAction(window.isWebApp ? "apps" : "games");
                case "games":
                    backAction = "sizes" == value ? "play" : null, showGames();
                    break;
                case "apps":
                    showApps();
                    break;
                case "show-game":
                    showGame();
                    break;
                case "play":
                    tutorialPlayed ? showSizes() : startTutorial();
                    break;
                case "tutorial":
                    startTutorial();
                    break;
                case "about":
                    showAbout();
                    break;
                case "stopwatch":
                    toggleTimeTrial();
                    break;
                case "goto-0hn0":
                    goto0hn0();
                    break;
                case "achievements":
                    PlayCenter.showAchievements();
                    break;
                case "leaderboards":
                    PlayCenter.showLeaderboard();
                    break;
                case "playcenter":
                    $.browser.ios && !window.isWebApp && PlayCenter.enabled && !PlayCenter.isSignedIn ? ($("#playcenter").addClass("spin"), PlayCenter.signIn(), clearTimeout(removeSpinTOH), removeSpinTOH = setTimeout(function() { $("#playcenter").removeClass("spin") }, 4e3)) : showOnline();
                    break;
                case "sign-out":
                    PlayCenter.signOut();
                    break;
                case "sign-in":
                    PlayCenter.signIn();
                    break;
                case "stopwatch":
                    showSettings();
                    break;
                case "settings":
                    showSettings();
                    break;
                case "color-theme":
                    Themes.toggle();
                    break;
                case "toggleTimeTrial":
                    toggleTimeTrial();
                    break;
                case "toggleDonate":
                    purchaseInitiated();
                    break;
                case "thanks":
                    showThanks();
                    break;
                case "afterThanks":
                    if (!thanksShownOnce) return thanksShownOnce = !0, void showMenu();
                    showAbout()
            }
        }

        function checkForLevelComplete() { return grid.emptyTileCount > 0 ? void(grid.isValid() ? $('#bar [data-action="help"]').removeClass("subtleHint") : hintAboutError()) : grid.wrongTiles.length > 0 ? void grid.hint.next() : void endGame() }

        function hintAboutError() {
            $('#bar [data-action="help"]').removeClass("subtleHint"), clearTimeout(endSubtleHintTOH), setTimeout(function() {
                grid.isValid(!0);
                for (var invalidFullRowOrColumnFound = !1, i = 0; i < grid.width; i++) {
                    var ci = grid.getColInfo(i),
                        ri = grid.getRowInfo(i);
                    if (ci.isFull && (ci.isInvalid || !ci.unique) || ri.isFull && (ri.isInvalid || !ri.unique)) { invalidFullRowOrColumnFound = !0; break }
                }
                invalidFullRowOrColumnFound && ($('#bar [data-action="help"]').addClass("subtleHint"), endSubtleHintTOH = setTimeout(function() { $('#bar [data-action="help"]').removeClass("subtleHint") }, 2e3))
            }, 0)
        }

        function checkTutorialPlayed(callback) {
            Storage.getItem("tutorialPlayed", function(resultSet) {
                var played = resultSet.tutorialPlayed + "" == "true";
                tutorialPlayed = played, callback(played)
            })
        }

        function markTutorialAsPlayed() { Storage.setItem("tutorialPlayed", !0), tutorialPlayed = !0, $('#menu [data-action="play"]').removeClass("locked") }

        function startTutorial() { $("#bar [data-action]").hide(), onHomeScreen = !1, Tutorial.start(), startedTutorial = !0, checkTutorialPlayed(function(played) { played || (startedTutorial = !1), markTutorialAsPlayed(), $("#undo").closest(".iconcon").css("display", "none") }) }

        function backButtonPressed() { return onHomeScreen ? window.WinJS ? window.close() : navigator.app && navigator.app.exitApp() : doAction("back"), !0 }

        function getOjoo() { return remainingOjoos.length || (remainingOjoos = Utils.shuffle(ojoos.slice(0))), Utils.draw(remainingOjoos) }

        function getScore(cb) {
            Storage.getItem("score", function(resultSet) {
                var value = resultSet.score;
                value || (value = 0), cb(value)
            })
        }

        function setScore(addPoints, oldScore) {
            clearTimeout(setScore.TOH);
            var curScore = score = 1 * oldScore,
                newScore = curScore + (addPoints ? addPoints : 0);
            return curScore >= newScore ? curScore : (Storage.setItem("score", newScore), newScore)
        }

        function animateScore(curScore, newScore) {
            function next() { $("#scorenr").html(curScore), newScore > curScore && curScore++, setScore.TOH = setTimeout(next, delay) }
            var delay = 500 / (newScore - curScore);
            next()
        }

        function undo() {
            if (!undoStack.length) return grid.hint.visible ? (grid.unmark(), void grid.hint.hide()) : void(undone ? grid.hint.show("Nothing to undo.") : grid.hint.show("That's the undo button."));
            var undoState = undoStack.pop(),
                tile = grid.tile(undoState.x, undoState.y),
                value = undoState.oldValue;
            grid.unmark(), value >= 0 ? tile.value = value : tile.clear(), tile.mark();
            var s = "This tile was reversed to ";
            1 == value && (s += "red."), 2 == value && (s += "blue."), 0 == value && (s += "its empty state."), grid.hint.show(s), undone = !0, undosUsed++, updatePercentage(), clearTimeout(checkTOH), checkTOH = setTimeout(function() { checkForLevelComplete() }, 700)
        }

        function clearTimeouts() { clearTimeout(endGameTOH1), clearTimeout(endGameTOH2), clearTimeout(endGameTOH3), clearTimeout(endSubtleHintTOH), clearTimeout(tohs.hide0), clearTimeout(tohs.hide1), clearTimeout(tohs.show01), clearTimeout(tohs.hide01) }

        function updateTweetUrl(size) {
            getScore(function(value) {
                var msg = "#0hh1 I just completed a " + size + " x " + size + " puzzle and my score is " + value + ". http://0hh1.com (or get the App!) ",
                    url = "https://twitter.com/share?text=" + encodeURIComponent(msg);
                shareMsg = msg, $("#tweeturl").attr("href", url)
            })
        }

        function continueGame() {
            var oldUndoStack = JSON.parse(JSON.stringify(undoStack));
            startGame(currentPuzzle, !0), $(oldUndoStack).each(function() {
                var tile = grid.tile(this.x, this.y);
                tile.value = this.newValue
            }), undoStack = oldUndoStack, setTimeout(function() { hideSystemTiles(), grid.hint.show(HintType.GameContinued), updatePercentage() }, 0)
        }

        function showSystemTiles() {
            currentPuzzle.isTutorial || systemTilesLockToggleable && (grid.each(function(x, y, i, t) {
                if (this.system) {
                    var $tile = $("#tile-" + x + "-" + y);
                    $tile.addClass("system")
                }
            }), systemTilesLockShown = !0, locksToggled++, 10 == locksToggled && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.happy_lock_toggler))
        }

        function hideSystemTiles() { $(".system").removeClass("system"), systemTilesLockShown = !1 }

        function goto0hn0() {
            var url = "http://0hn0.com";
            window.isWebApp ? window.open(url, "_blank") : $.browser.android ? (url = "https://play.google.com/store/apps/details?id=com.q42.ohno", navigator.app.loadUrl(url, { openExternal: !0 })) : $.browser.ios ? (url = "https://itunes.apple.com/us/app/0h-n0/id957191082?mt=8", window.open(url, "_system")) : window.open(url, "_blank")
        }

        function showOnline() { onHomeScreen = !1, inText = !0, $(".screen").hide().removeClass("show"), $("#online").show(), $("#bar [data-action]").hide(), $('#bar [data-action="back"]').show(), setTimeout(function() { $("#online").addClass("show") }, 0), resize() }

        function showSettings() { onHomeScreen = !1, inText = !0, $(".screen").hide().removeClass("show"), $("#settings").show(), $("#settings [data-action]").show(), setTimeout(function() { $("#settings").addClass("show") }, 0), resize() }

        function showThanks() { onHomeScreen = !1, inText = !0, $(".screen").hide().removeClass("show"), $("#thanks").show(), setTimeout(function() { $("#thanks").addClass("show") }, 0), resize() }

        function purchaseInitiated() { Storage.getDataValue("donated", !1) || (debug ? confirm("Purchase 0h h1 for a $?") && purchaseReceived() : Store.buyFullVersion()) }

        function purchaseReceived() { enableDonatedState(), thanksShownOnce = !1, showThanks() }

        function enableDonatedState() { Storage.setDataValue("donated", !0), $('[data-action="thanks"]').show(), $('p[data-action="about"]').hide(), $("#donate").hide(), $("#toggleDonateValue").removeClass("link").html("Yes"), fullVersion = !0, Storage.data.achievementsUnlocked && Storage.data.achievementsUnlocked.pay_to_win || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.pay_to_win) }

        function disableDonation() { $("#donate").remove(), $("#toggleDonateValue").remove(), $("#toggleDontae").remove() }

        function openGift(unpack) {
            var $el = $(".gift");
            $el.removeClass("gift"), unpack && ($el.addClass("unpack"), Storage.setDataValue("unpacked", !0), setTimeout(function() { $(".unpack").removeClass("unpack") }, 300))
        }

        function toggleHintIcon() { hideHintIcon = !hideHintIcon, Storage.setDataValue("hideHintIcon", hideHintIcon), updateHintIconState() }

        function updateHintIconState() { hideHintIcon ? ($("#toggleHintIcon").text("No"), $('[data-action="help"]').addClass("disabled")) : ($("#toggleHintIcon").text("Yes"), $('[data-action="help"]').removeClass("disabled").css("display", "inline-block")) }

        function updatePercentage(isEmpty) {
            isEmpty && (updatePercentage.totalTiles = grid.size * grid.size, updatePercentage.initialEmptyTileCount = grid.emptyTileCount, updatePercentage.initialTileCount = updatePercentage.totalTiles - updatePercentage.initialEmptyTileCount);
            var curTileCount = updatePercentage.totalTiles - grid.emptyTileCount,
                tilesDoneByUser = curTileCount - updatePercentage.initialTileCount,
                percentage = Math.ceil(tilesDoneByUser / updatePercentage.initialEmptyTileCount * 100);
            $("#percentage .value").html(percentage + "%")
        }
        var grid, endGameTOH1, endGameTOH2, endGameTOH3, endSubtleHintTOH, removeSpinTOH, debug = "#debug" == document.location.hash,
            tapBoardSizeToSolve = !1,
            tweet = window.isWebApp,
            facebook = window.isWebApp && !$.browser.chromeWebStore,
            showAppsIcon = window.isWebApp,
            showTime = !1,
            backAction = null,
            thanksShownOnce = !0,
            tohs = {},
            listenersAdded = !1,
            startedTutorial = !1,
            tutorialPlayed = !1,
            skipSplash = !1,
            splashScreenTouched = 0,
            sizes = [4, 6, 8, 10, 12],
            lastSize = 0,
            currentPuzzle = null,
            checkTOH = 0,
            ojoos = ["Wonderful", "Spectacular", "Marvelous", "Outstanding", "Remarkable", "Shazam", "Impressive", "Great", "Well done", "Fabulous", "Clever", "Dazzling", "Fantastic", "Excellent", "Nice", "Super", "Awesome", "Ojoo", "Brilliant", "Splendid", "Exceptional", "Magnificent", "Yay"],
            remainingOjoos = [],
            onHomeScreen = !0,
            inGame = !1,
            inText = !1,
            undoStack = [],
            undone = !1,
            gameEnded = !1,
            continueLastGame = !1,
            systemTilesLockShown = !1,
            systemTilesLockToggleable = !0,
            hideHintIcon = !1,
            time = 0,
            timeStr = "",
            timerTOH = 0,
            timeInSeconds = 0,
            hintsUsed = 0,
            undosUsed = 0,
            locksToggled = 0,
            shareMsg = "#0hh1 I'm playing 0h h1 and I think you should too! http://0hh1.com (or get the App!)";
        this.showSettings = showSettings, this.start = start, this.init = init, this.startGame = startGame, this.showTitleScreen = showTitleScreen, this.showGame = showGame, this.showMenu = showMenu, this.resize = resize, this.showAbout = showAbout, this.showApps = showApps, this.showGames = showGames, this.showOnline = showOnline, this.startTutorial = startTutorial, this.checkForLevelComplete = checkForLevelComplete, this.undo = undo, this.showSystemTiles = showSystemTiles, this.hideSystemTiles = hideSystemTiles, this.getScore = getScore, this.setScore = setScore, this.purchaseReceived = purchaseReceived, this.enableDonatedState = enableDonatedState, window.__defineGetter__("tile", function() { return grid.tile }), this.__defineGetter__("grid", function() { return grid }), this.__defineGetter__("debug", function() { return debug })
    };
Grid.generate = function(size) {
    var grid, attempts = 0;
    do grid = new Grid(size), grid.generate(); while (grid.emptyTileCount > 0 && attempts++ < 1);
    return grid
};
var TutorialMessages = {
        1: {
            msg: "We're going to fill the grid.<br>Tap the tile to make it red.",
            tiles: [
                [0, 0, 1]
            ]
        },
        2: {
            msg: "Excellent!<br>Tap twice to turn a tile blue.",
            tiles: [
                [0, 1, 2]
            ]
        },
        3: {
            msg: "Three red tiles next to each other in a row isn't allowed.",
            tiles: [
                [2, 0, 2]
            ]
        },
        4: {
            msg: "Never have three blue tiles together in a row either.",
            tiles: [
                [1, 1, 1]
            ]
        },
        5: {
            msg: "Three red or blue tiles below each other is invalid too!",
            tiles: [
                [1, 2, 2],
                [2, 2, 1]
            ]
        },
        6: {
            msg: "A full row must have as many red tiles as it has blue ones.",
            tiles: [
                [3, 1, 1]
            ],
            rows: [1]
        },
        7: {
            msg: "Columns have an equal number of each color too.",
            tiles: [
                [1, 3, 2]
            ],
            cols: [1]
        },
        8: {
            msg: "You should be able to know what color this one is...",
            tiles: [
                [2, 3, 1]
            ]
        },
        9: {
            msg: "No two rows and no two columns are the same.",
            tiles: [
                [0, 3, 1],
                [0, 2, 2],
                [3, 2, 1]
            ],
            rows: [2, 3]
        },
        10: {
            msg: "If you get stuck, tap the eye to peek.",
            tiles: [
                [3, 0, 2]
            ],
            wiggle: !0
        }
    },
    Tutorial = new function() {
        function start() { step = 0, active = !0, $('#bar [data-action="next"]').hide(), Game.startGame({ size: 4, empty: [0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2], full: [1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2], isTutorial: !0 }), next() }

        function end() { $('#bar [data-action="help"]').removeClass("hidden wiggle"), active = !1 }

        function next() {
            if (step >= Utils.count(TutorialMessages)) return hide(), active = !1, void setTimeout(function() { Game.checkForLevelComplete() }, 1e3);
            step++;
            var t = TutorialMessages[step];
            msg = t.msg, show(msg), tilesToTapThisStep = [], Game.grid.unmark(), $(t.tiles).each(function() { tilesToTapThisStep.push(Game.grid.tile(this[0], this[1])) }), setTimeout(function() { markTilesForThisStep() }, 0), t.wiggle && $('#bar [data-action="help"]').addClass("wiggle")
        }

        function markTilesForThisStep() {
            var t = TutorialMessages[step];
            t.rows ? $(t.rows).each(function() { Game.grid.markRow(this) }) : t.cols ? $(t.cols).each(function() { Game.grid.markCol(this) }) : $(t.tiles).each(function() { Game.grid.mark(this[0], this[1]) })
        }

        function show(msg) { $("#hintMsg").html("<span>" + msg + "</span>"), $("html").addClass("showHint"), visible = !0 }

        function hide() { $("html").removeClass("showHint"), visible = !1 }

        function tapTile(tile) {
            var tapAllowed = !1;
            $(tilesToTapThisStep).each(function() { tile.x == this.x && tile.y == this.y && (tapAllowed = !0) }), tapAllowed && (tile.isEmpty ? tile.value = 1 : 1 == tile.value ? tile.value = 2 : tile.clear(), setTimeout(markTilesForThisStep, 0), checkStepCompleted())
        }

        function checkStepCompleted() {
            var completed = !0;
            $(TutorialMessages[step].tiles).each(function() {
                var x = this[0],
                    y = this[1],
                    tile = Game.grid.tile(x, y),
                    value = this[2];
                tile.value != value ? completed = !1 : setTimeout(function() { tile.unmark(), tile.system = !0 }, 0)
            }), completed && ($(tilesToTapThisStep).each(function() { this.system = !0 }), next())
        }

        function hintAllowed() { return step >= 9 }
        var step = 0,
            active = !1,
            visible = !1,
            tilesToTapThisStep = [];
        this.start = start, this.end = end, this.next = next, this.show = show, this.hide = hide, this.tapTile = tapTile, this.hintAllowed = hintAllowed, this.__defineGetter__("active", function() { return active }), this.__defineSetter__("active", function(v) { active = v }), this.__defineGetter__("visible", function() { return visible }), this.__defineGetter__("step", function() { return step })
    };
! function(window, document, undefined) {
    function q(a) { return function() { return this[a] } }

    function ba(a, b) {
        var c = a.split("."),
            d = aa;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || b === j ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function ca(a, b, c) { return a.call.apply(a.bind, arguments) }

    function da(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(c, d), a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

    function s(a, b, c) { return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da, s.apply(l, arguments) }

    function fa(a, b) { this.G = a, this.u = b || a, this.z = this.u.document, this.R = j }

    function t(a, b, c) { a = a.z.getElementsByTagName(b)[0], a || (a = document.documentElement), a && a.lastChild && a.insertBefore(c, a.lastChild) }

    function u(a, b) { return a.createElement("link", { rel: "stylesheet", href: b }) }

    function ha(a, b) { return a.createElement("script", { src: b }) }

    function v(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
            if (c[d] == b) return;
        c.push(b), a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; f > e; e++) c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ia(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
            if (c[d] == b) return k;
        return p
    }

    function ga(a) {
        if (a.R === j) {
            var b = a.z.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>', a.R = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.R
    }

    function x(a) { var b = a.u.location.protocol; return "about:" == b && (b = a.G.location.protocol), "https:" == b ? "https:" : "http:" }

    function y(a, b, c) { this.w = a, this.T = b, this.Aa = c }

    function z(a, b, c, d) { this.e = a != l ? a : l, this.o = b != l ? b : l, this.ba = c != l ? c : l, this.f = d != l ? d : l }

    function A(a) {
        a = ja.exec(a);
        var b = l,
            c = l,
            d = l,
            e = l;
        return a && (a[1] !== l && a[1] && (b = parseInt(a[1], 10)), a[2] !== l && a[2] && (c = parseInt(a[2], 10)), a[3] !== l && a[3] && (d = parseInt(a[3], 10)), a[4] !== l && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])), new z(b, c, d, e)
    }

    function B(a, b, c, d, e, f, g, h, n, m, r) { this.J = a, this.Ha = b, this.za = c, this.ga = d, this.Fa = e, this.fa = f, this.xa = g, this.Ga = h, this.wa = n, this.ea = m, this.k = r }

    function C(a, b) { this.a = a, this.H = b }

    function D(a) { var b = F(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1); return "" != b ? (/BB\d{2}/.test(b) && (b = "BlackBerry"), b) : (a = F(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown") }

    function E(a) {
        var b = F(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = F(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = F(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = F(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = F(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function F(a, b, c) { return (a = a.match(b)) && a[c] ? a[c] : "" }

    function G(a) { return a.documentMode ? a.documentMode : void 0 }

    function la(a) { this.va = a || "-" }

    function H(a, b) {
        this.J = a, this.U = 4, this.K = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.K = c[1], this.U = parseInt(c[2], 10))
    }

    function I(a) { return a.K + a.U }

    function ma(a) {
        var b = 4,
            c = "n",
            d = l;
        return a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))), c + b
    }

    function na(a, b, c) { this.c = a, this.h = b, this.M = c, this.j = "wf", this.g = new la("-") }

    function pa(a) { v(a.h, a.g.f(a.j, "loading")), J(a, "loading") }

    function K(a) { w(a.h, a.g.f(a.j, "loading")), ia(a.h, a.g.f(a.j, "active")) || v(a.h, a.g.f(a.j, "inactive")), J(a, "inactive") }

    function J(a, b, c) { a.M[b] && (c ? a.M[b](c.getName(), I(c)) : a.M[b]()) }

    function L(a, b) { this.c = a, this.C = b, this.s = this.c.createElement("span", { "aria-hidden": "true" }, this.C) }

    function M(a, b) {
        var d, c = a.s;
        d = [];
        for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) { var g = e[f].replace(/['"]/g, ""); - 1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'") }
        d = d.join(","), e = "normal", f = b.U + "00", "o" === b.K ? e = "oblique" : "i" === b.K && (e = "italic"), d = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + e + ";font-weight:" + f + ";"), ga(a.c) ? c.setAttribute("style", d) : c.style.cssText = d
    }

    function N(a) { t(a.c, "body", a.s) }

    function qa(a, b, c, d, e, f, g, h) {
        this.V = a, this.ta = b, this.c = c, this.q = d, this.C = h || "BESbswy", this.k = e, this.F = {}, this.S = f || 5e3, this.Z = g || l, this.B = this.A = l, a = new L(this.c, this.C), N(a);
        for (var n in O) O.hasOwnProperty(n) && (M(a, new H(O[n], I(this.q))), this.F[O[n]] = a.s.offsetWidth);
        a.remove()
    }

    function sa(a, b, c) {
        for (var d in O)
            if (O.hasOwnProperty(d) && b === a.F[O[d]] && c === a.F[O[d]]) return k;
        return p
    }

    function ra(a) {
        var b = a.A.s.offsetWidth,
            c = a.B.s.offsetWidth;
        b === a.F.serif && c === a.F["sans-serif"] || a.k.T && sa(a, b, c) ? ea() - a.ya >= a.S ? a.k.T && sa(a, b, c) && (a.Z === l || a.Z.hasOwnProperty(a.q.getName())) ? P(a, a.V) : P(a, a.ta) : setTimeout(s(function() { ra(this) }, a), 25) : P(a, a.V)
    }

    function P(a, b) { a.A.remove(), a.B.remove(), b(a.q) }

    function R(a, b, c, d) { this.c = b, this.t = c, this.N = 0, this.ca = this.Y = p, this.S = d, this.k = a.k }

    function ta(a, b, c, d, e) {
        if (0 === b.length && e) K(a.t);
        else
            for (a.N += b.length, e && (a.Y = e), e = 0; e < b.length; e++) {
                var f = b[e],
                    g = c[f.getName()],
                    h = a.t,
                    n = f;
                v(h.h, h.g.f(h.j, n.getName(), I(n).toString(), "loading")), J(h, "fontloading", n), new qa(s(a.ha, a), s(a.ia, a), a.c, f, a.k, a.S, d, g).start()
            }
    }

    function ua(a) { 0 == --a.N && a.Y && (a.ca ? (a = a.t, w(a.h, a.g.f(a.j, "loading")), w(a.h, a.g.f(a.j, "inactive")), v(a.h, a.g.f(a.j, "active")), J(a, "active")) : K(a.t)) }

    function S(a, b, c) { this.G = a, this.W = b, this.a = c, this.O = this.P = 0 }

    function T(a, b) { U.W.$[a] = b }

    function V(a, b) { this.c = a, this.d = b }

    function W(a, b) { this.c = a, this.d = b }

    function ya(a) {
        var b = a.split(":");
        if (a = b[0], b[1]) {
            for (var c = b[1].split(","), b = [], d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (f) {
                    var g = xa[f];
                    b.push(g ? g : f)
                }
            }
            for (c = [], d = 0; d < b.length; d += 1) c.push(new H(a, b[d]));
            return c
        }
        return [new H(a)]
    }

    function X(a, b, c) { this.a = a, this.c = b, this.d = c, this.m = [] }

    function Y(a, b) { this.c = a, this.d = b, this.m = [] }

    function za(a, b, c) { this.L = a ? a : b + Aa, this.p = [], this.Q = [], this.da = c || "" }

    function Ba(a) { this.p = a, this.aa = [], this.I = {} }

    function Z(a, b, c) { this.a = a, this.c = b, this.d = c }

    function $(a, b) { this.c = a, this.d = b, this.m = [] }
    var j = void 0,
        k = !0,
        l = null,
        p = !1,
        aa = this;
    aa.Ba = k;
    var ea = Date.now || function() { return +new Date };
    fa.prototype.createElement = function(a, b, c) {
        if (a = this.z.createElement(a), b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a,
                            f = b[d];
                        ga(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else a.setAttribute(d, b[d]);
        return c && a.appendChild(this.z.createTextNode(c)), a
    }, ba("webfont.BrowserInfo", y), y.prototype.qa = q("w"), y.prototype.hasWebFontSupport = y.prototype.qa, y.prototype.ra = q("T"), y.prototype.hasWebKitFallbackBug = y.prototype.ra, y.prototype.sa = q("Aa"), y.prototype.hasWebKitMetricsBug = y.prototype.sa;
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    z.prototype.toString = function() { return [this.e, this.o || "", this.ba || "", this.f || ""].join("") }, ba("webfont.UserAgent", B), B.prototype.getName = q("J"), B.prototype.getName = B.prototype.getName, B.prototype.pa = q("za"), B.prototype.getVersion = B.prototype.pa, B.prototype.la = q("ga"), B.prototype.getEngine = B.prototype.la, B.prototype.ma = q("fa"), B.prototype.getEngineVersion = B.prototype.ma, B.prototype.na = q("xa"), B.prototype.getPlatform = B.prototype.na, B.prototype.oa = q("wa"), B.prototype.getPlatformVersion = B.prototype.oa, B.prototype.ka = q("ea"), B.prototype.getDocumentMode = B.prototype.ka, B.prototype.ja = q("k"), B.prototype.getBrowserInfo = B.prototype.ja;
    var ka = new B("Unknown", new z, "Unknown", "Unknown", new z, "Unknown", "Unknown", new z, "Unknown", j, new y(p, p, p));
    C.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = D(this);
            var b = E(this),
                c = A(b),
                d = F(this.a, /MSIE ([\d\w\.]+)/, 1),
                e = A(d);
            a = new B("MSIE", e, d, "MSIE", e, d, a, c, b, G(this.H), new y("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e, p, p))
        } else if (-1 != this.a.indexOf("Opera")) a: {
            a = "Unknown";
            var b = F(this.a, /Presto\/([\d\w\.]+)/, 1),
                c = A(b),
                d = E(this),
                e = A(d),
                f = G(this.H);
            if (c.e !== l ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"), b = F(this.a, /rv:([^\)]+)/, 1), c = A(b)), -1 != this.a.indexOf("Opera Mini/")) {
                var g = F(this.a, /Opera Mini\/([\d\.]+)/, 1),
                    h = A(g);
                a = new B("OperaMini", h, g, a, c, b, D(this), e, d, f, new y(p, p, p))
            } else {
                if (-1 != this.a.indexOf("Version/") && (g = F(this.a, /Version\/([\d\.]+)/, 1), h = A(g), h.e !== l)) { a = new B("Opera", h, g, a, c, b, D(this), e, d, f, new y(10 <= h.e, p, p)); break a }
                g = F(this.a, /Opera[\/ ]([\d\.]+)/, 1), h = A(g), a = h.e !== l ? new B("Opera", h, g, a, c, b, D(this), e, d, f, new y(10 <= h.e, p, p)) : new B("Opera", new z, "Unknown", a, c, b, D(this), e, d, f, new y(p, p, p))
            }
        }
        else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = D(this);
            var b = E(this),
                c = A(b),
                d = F(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = A(d),
                f = "Unknown",
                g = new z,
                h = "Unknown",
                n = p; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? f = "Chrome" : /Silk\/\d/.test(this.a) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? f = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (f = "AdobeAIR"), "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = F(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == f ? h = F(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? h = F(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == f && (h = F(this.a, /AdobeAIR\/([\d\.]+)/, 1)), g = A(h), n = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o, a = new B(f, g, h, "AppleWebKit", e, d, a, c, b, G(this.H), new y(n, 536 > e.e || 536 == e.e && 11 > e.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else -1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new z, c = "Unknown", d = E(this), e = A(d), f = p, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", c = F(this.a, /Firefox\/([\d\w\.]+)/, 1), b = A(c), f = 3 <= b.e && 5 <= b.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), g = F(this.a, /rv:([^\)]+)/, 1), h = A(g), f || (f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match(/1\.9\.1b[123]/) != l || g.match(/1\.9\.1\.[\d\.]+/) != l), a = new B(a, b, c, "Gecko", h, g, D(this), e, d, G(this.H), new y(f, p, p))) : a = ka;
        return a
    }, la.prototype.f = function(a) { for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase()); return b.join(this.va) }, H.prototype.getName = q("J"), L.prototype.remove = function() {
        var a = this.s;
        a.parentNode && a.parentNode.removeChild(a)
    };
    var O = { Ea: "serif", Da: "sans-serif", Ca: "monospace" };
    qa.prototype.start = function() { this.A = new L(this.c, this.C), N(this.A), this.B = new L(this.c, this.C), N(this.B), this.ya = ea(), M(this.A, new H(this.q.getName() + ",serif", I(this.q))), M(this.B, new H(this.q.getName() + ",sans-serif", I(this.q))), ra(this) }, R.prototype.ha = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading")), w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive")), v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active")), J(b, "fontactive", a), this.ca = k, ua(this)
    }, R.prototype.ia = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading")), ia(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active")) || v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive")), J(b, "fontinactive", a), ua(this)
    }, S.prototype.load = function(a) {
        var b = a.context || this.G;
        if (this.c = new fa(this.G, b), b = new na(this.c, b.document.documentElement, a), this.a.k.w) {
            var f, c = this.W,
                d = this.c,
                e = [];
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = c.$[f];
                    g && e.push(g(a[f], d))
                }
            for (a = a.timeout, this.O = this.P = e.length, a = new R(this.a, this.c, b, a), f = 0, c = e.length; c > f; f++) d = e[f], d.v(this.a, s(this.ua, this, d, b, a))
        } else K(b)
    }, S.prototype.ua = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, h) {
            var n = 0 == --e.P;
            n && pa(b), setTimeout(function() { ta(c, a, d || {}, h || l, n) }, 0)
        }) : (a = 0 == --this.P, this.O--, a && (0 == this.O ? K(b) : pa(b)), ta(c, [], {}, l, a))
    };
    var va = window,
        wa = new C(navigator.userAgent, document).parse(),
        U = va.WebFont = new S(window, new function() { this.$ = {} }, wa);
    U.load = U.load, V.prototype.load = function(a) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        for (b = 0, c = d.length; c > b; b++) t(this.c, "head", u(this.c, d[b]));
        for (d = [], b = 0, c = e.length; c > b; b++) {
            var f = e[b].split(":");
            if (f[1])
                for (var g = f[1].split(","), h = 0; h < g.length; h += 1) d.push(new H(f[0], g[h]));
            else d.push(new H(f[0]))
        }
        a(d)
    }, V.prototype.v = function(a, b) { return b(a.k.w) }, T("custom", function(a, b) { return new V(b, a) });
    var xa = { regular: "n4", bold: "n7", italic: "i4", bolditalic: "i7", r: "n4", b: "n7", i: "i4", bi: "i7" };
    W.prototype.v = function(a, b) { return b(a.k.w) }, W.prototype.load = function(a) {
        t(this.c, "head", u(this.c, x(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        for (var b = this.d.families, c = [], d = 0, e = b.length; e > d; d++) c.push.apply(c, ya(b[d]));
        a(c)
    }, T("ascender", function(a, b) { return new W(b, a) }), X.prototype.v = function(a, b) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if (d) {
            var f = c.c.u,
                g = c.c.createElement("script");
            g.id = "__MonotypeAPIScript__" + d;
            var h = p;
            g.onload = g.onreadystatechange = function() {
                if (!(h || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                    if (h = k, f["__mti_fntLst" + d]) {
                        var e = f["__mti_fntLst" + d]();
                        if (e)
                            for (var m = 0; m < e.length; m++) c.m.push(new H(e[m].fontfamily))
                    }
                    b(a.k.w), g.onload = g.onreadystatechange = l
                }
            }, g.src = c.D(d, e), t(this.c, "head", g)
        } else b(k)
    }, X.prototype.D = function(a, b) {
        var c = x(this.c),
            d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    }, X.prototype.load = function(a) { a(this.m) }, T("monotype", function(a, b) { var c = new C(navigator.userAgent, document).parse(); return new X(c, b, a) }), Y.prototype.D = function(a) { var b = x(this.c); return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js" }, Y.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.d,
            e = this.c.u,
            f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function(c) {
            c(a, d, function(a, c, d) {
                for (var e = 0; e < c.length; e += 1) {
                    var g = d[c[e]];
                    if (g)
                        for (var Q = 0; Q < g.length; Q += 1) f.m.push(new H(c[e], g[Q]));
                    else f.m.push(new H(c[e]))
                }
                b(a)
            })
        }, c = ha(this.c, this.D(c)), t(this.c, "head", c)) : b(k)
    }, Y.prototype.load = function(a) { a(this.m) }, T("typekit", function(a, b) { return new Y(b, a) });
    var Aa = "//fonts.googleapis.com/css";
    za.prototype.f = function() { if (0 == this.p.length) throw Error("No fonts to load !"); if (-1 != this.L.indexOf("kit=")) return this.L; for (var a = this.p.length, b = [], c = 0; a > c; c++) b.push(this.p[c].replace(/ /g, "+")); return a = this.L + "?family=" + b.join("%7C"), 0 < this.Q.length && (a += "&subset=" + this.Q.join(",")), 0 < this.da.length && (a += "&text=" + encodeURIComponent(this.da)), a };
    var Ca = { latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;" },
        Da = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
        Ea = { i: "i", italic: "i", n: "n", normal: "n" },
        Fa = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    Ba.prototype.parse = function() {
        for (var a = this.p.length, b = 0; a > b; b++) {
            var c = this.p[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f, g = c[1];
                if (f = [], g)
                    for (var g = g.split(","), h = g.length, n = 0; h > n; n++) {
                        var m;
                        if (m = g[n], m.match(/^[\w]+$/)) {
                            m = Fa.exec(m.toLowerCase());
                            var r = j;
                            if (m == l) r = "";
                            else {
                                if (r = j, r = m[1], r == l || "" == r) r = "4";
                                else var oa = Da[r],
                                    r = oa ? oa : isNaN(r) ? "4" : r.substr(0, 1);
                                r = [m[2] == l || "" == m[2] ? "n" : Ea[m[2]], r].join("")
                            }
                            m = r
                        } else m = "";
                        m && f.push(m)
                    }
                0 < f.length && (e = f), 3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = Ca[c[0]]) && (this.I[d] = c))
            }
            for (this.I[d] || (c = Ca[d]) && (this.I[d] = c), c = 0; c < e.length; c += 1) this.aa.push(new H(d, e[c]))
        }
    };
    var Ga = { Arimo: k, Cousine: k, Tinos: k };
    Z.prototype.v = function(a, b) { b(a.k.w) }, Z.prototype.load = function(a) {
        var b = this.c;
        if ("MSIE" == this.a.getName() && this.d.blocking != k) {
            var c = s(this.X, this, a),
                d = function() {
                    b.z.body ? c() : setTimeout(d, 0)
                };
            d()
        } else this.X(a)
    }, Z.prototype.X = function(a) {
        for (var b = this.c, c = new za(this.d.api, x(b), this.d.text), d = this.d.families, e = d.length, f = 0; e > f; f++) {
            var g = d[f].split(":");
            3 == g.length && c.Q.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":"), c.p.push(g.join(h))
        }
        d = new Ba(d), d.parse(), t(b, "head", u(b, c.f())), a(d.aa, d.I, Ga)
    }, T("google", function(a, b) { var c = new C(navigator.userAgent, document).parse(); return new Z(c, b, a) }), $.prototype.D = function(a) { return x(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + a + ".js" }, $.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.c.u,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, n = c.fonts.length; n > d; ++d) {
                var m = c.fonts[d];
                e.m.push(new H(m.name, ma("font-weight:" + m.weight + ";font-style:" + m.style)))
            }
            b(a)
        }, c = ha(this.c, this.D(c)), t(this.c, "head", c)) : b(k)
    }, $.prototype.load = function(a) { a(this.m) }, T("fontdeck", function(a, b) { return new $(b, a) }), window.WebFontConfig && U.load(window.WebFontConfig)
}(this, document);
var Levels = new function() {
        function init() { loadFromStorage(), BackgroundService.kick() }

        function loadFromStorage() {
            try {
                var loadedPuzzles = JSON.parse(Storage.getDataValue("puzzles", JSON.stringify(puzzles)));
                loadedPuzzles.size4 && (puzzles = loadedPuzzles), puzzles.size12 || (puzzles.size12 = [])
            } catch (e) {}
        }

        function saveToStorage() { Storage.setDataValue("puzzles", JSON.stringify(puzzles)) }

        function finishedSize(size) {
            var puzzleArr = puzzles["size" + size];
            puzzleArr && puzzleArr.length && (puzzleArr.shift(), saveToStorage(), BackgroundService.kick())
        }

        function addSize(size, puzzle) { var puzzleArr = puzzles["size" + size]; return puzzleArr ? (puzzleArr.push(puzzle), saveToStorage(), void BackgroundService.kick()) : !1 }

        function hasPuzzleAvailable(size) { var puzzleArr = puzzles["size" + size]; return puzzleArr && puzzleArr.length ? !0 : !1 }

        function getSize(size) { var puzzleArr = puzzles["size" + size]; if (!puzzleArr || !puzzleArr.length) return create(size); var puzzle = puzzleArr[0]; return puzzleArr.length > 1 && (puzzleArr.shift(), saveToStorage(), BackgroundService.kick()), puzzle }

        function needs() {
            for (var checkForLength = 1; 2 >= checkForLength; checkForLength++)
                for (var size in qualityThreshold) { size = 1 * size; var arr = puzzles["size" + size]; if (arr && arr.length < checkForLength) return size }
            return !1
        }

        function create(size) {
            var grid = new Grid(size),
                attempts = 0,
                puzzle = { size: size, full: [], empty: [], quality: 0, ms: 0 },
                d = new Date;
            grid.clear(), grid.generateFast(), puzzle.full = grid.getValues();
            do attempts > 0 && (grid.clear(), grid.state.restore("full")), grid.breakDown(), puzzle.quality = grid.quality; while (puzzle.quality < qualityThreshold[size] && attempts++ < 42);
            return puzzle.empty = grid.getValues(), puzzle.ms = new Date - d, puzzle.quality = quality, puzzle
        }
        var puzzles = { size4: [], size6: [], size8: [], size10: [] },
            qualityThreshold = { 4: 60, 6: 60, 8: 60, 10: 60, 12: 60 };
        this.init = init, this.hasPuzzleAvailable = hasPuzzleAvailable, this.finishedSize = finishedSize, this.addSize = addSize, this.getSize = getSize, this.create = create, this.needs = needs, this.__defineGetter__("puzzles", function() { return puzzles })
    },
    FixedLevels = new function() {
        function has(size) { var id = "fixedLevelSize" + size; return alreadyServed = 1 * Storage.getDataValue(id, 0), pool = emptyPuzzles["size" + size], pool && alreadyServed < pool.length ? !0 : !1 }

        function get(size) { var id = "fixedLevelSize" + size; if (alreadyServed = 1 * Storage.getDataValue(id, 0), pool = emptyPuzzles["size" + size], Game.debug && console.log("retrieving fixed level " + size + ", ", alreadyServed), pool && alreadyServed < pool.length) { var puzzle = pool[alreadyServed]; return Storage.setDataValue(id, alreadyServed + 1), puzzle } return null }
        var emptyPuzzles = { size4: [{ size: 4, full: [2, 2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2], empty: [0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 1, 0, 0], quality: 69, ms: 8 }, { size: 4, full: [1, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2], empty: [0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0], quality: 75, ms: 8 }], size6: [{ size: 6, full: [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2], empty: [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0], quality: 75, ms: 38 }, { size: 6, full: [2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2], empty: [0, 1, 0, 0, 2, 1, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2], quality: 64, ms: 34 }], size8: [{ size: 8, full: [2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2], empty: [0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], quality: 80, ms: 137 }, { size: 8, full: [2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2], empty: [0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0], quality: 73, ms: 99 }], size10: [{ size: 10, full: [1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1], empty: [0, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0], quality: 71, ms: 258 }, { size: 10, full: [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2], empty: [1, 0, 1, 0, 0, 1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0], quality: 74, ms: 250 }], size12: [{ size: 12, full: [1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1], empty: [0, 0, 1, 0, 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 1, 0, 2, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 1, 2, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0], quality: 74, ms: 787 }, { size: 12, full: [1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2], empty: [0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0], quality: 73, ms: 494 }, { size: 12, full: [2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1], empty: [0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 2, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0], quality: 70, ms: 534 }, { size: 12, full: [2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2], empty: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 2, 2, 0, 0, 1, 2, 1, 0, 2, 0, 0, 2, 2, 0, 2, 2, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], quality: 68, ms: 548 }, { size: 12, full: [2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1], empty: [0, 0, 0, 0, 1, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0], quality: 74, ms: 706 }] };
        this.has = has, this.get = get
    },
    Store = new function() {
        function init() { window.store && (store.verbosity = store.DEBUG, registerProducts(), store.ready(storeIsReady), store.refresh(), debug && store.error(function(e) { alert("STORE ERROR " + e.code + ": " + e.message) })), window.MSApp && (currentApp = Windows.ApplicationModel.Store.CurrentApp, licenseInformation = currentApp.licenseInformation, enabled = !0, licenseInformation.addEventListener("licensechanged", reloadLicense)) }

        function reloadLicense() { licenseInformation.isActive && (licenseInformation.isTrial || Game.purchaseReceived()) }

        function registerProducts() { store.register({ id: fullVersionId, alias: fullVersionId, type: store.NON_CONSUMABLE }) }

        function storeIsReady() { enabled = !0, registerPurchaseFlow(), Game.fullVersion || restorePurchases(), debug && alert("\\o/ STORE READY \\o/") }

        function registerPurchaseFlow() { enabled && (store.when(fullVersionId).owned(function(product) { debug && alert("FULL VERSION OWNED, UNLOCKING"), Game.enableDonatedState() }), store.when(fullVersionId).approved(function(product) { debug && alert("FULL VERSION APPROVED, UNLOCKING"), product.finish(), Game.purchaseReceived() }), store.when(fullVersionId).cancelled(function(product) { debug && alert("FULL VERSION CANCELLED") }), store.when(fullVersionId).error(function(product) { debug && alert("FULL VERSION ERROR") }), window.MSApp && reloadLicense()) }

        function buyFullVersion() { if (enabled && (window.MSApp || store.order(fullVersionId), window.MSApp)) { var licenseInformation = currentApp.licenseInformation;!licenseInformation.isActive || licenseInformation.isTrial ? currentApp.requestAppPurchaseAsync(!1).done(function() { licenseInformation.isActive && !licenseInformation.isTrial ? (WinJS.log && WinJS.log("You successfully upgraded your app to the fully-licensed version.", "sample", "status"), Game.purchaseReceived()) : WinJS.log && WinJS.log("You still have a trial license for this app.", "sample", "error") }, function() { WinJS.log && WinJS.log("The upgrade transaction failed. You still have a trial license for this app.", "sample", "error") }) : (WinJS.log && WinJS.log("You already bought this app and have a fully-licensed version.", "sample", "error"), Game.purchaseReceived()) } }

        function restorePurchases(manually) {
            if (enabled && !Game.fullVersion) {
                if (debug && alert("RESTORE PURCHASE?"), window.store) {
                    var p = store.get(fullVersionId);
                    if (p && p.transaction && p.transaction.id) debug && alert("RESTORING PURCHASE BY TRANSACTION"), manually ? Game.purchaseReceived() : Game.enableDonatedState();
                    else if (manually) {
                        var msgObj = { action: "back", text: "<h1>" + lang("couldNotRestorePurchase") + "</h1>" };
                        Game.showMessages(msgObj)
                    }
                    debug && alert(JSON.stringify(p))
                }
                window.MSApp && reloadLicense()
            }
        }
        var enabled = !1,
            debug = !1,
            fullVersionId = "0hh1_supporter",
            licenseInformation = null;
        this.init = init, this.buyFullVersion = buyFullVersion, this.restorePurchases = restorePurchases, this.__defineGetter__("enabled", function() { return enabled })
    },
    BackgroundService = new function() {
        function createWorker() {
            if (supportsRuntimeWorker) {
                Game.debug && console.log("Web worker created on the fly");
                var js1 = "var HintType = " + JSON.stringify(HintType) + ";var Directions = {Left: 'Left',Right: 'Right',Up: 'Up',Down: 'Down'};",
                    js = [Utility, State, Grid, Tile, generateGridAndSolution, js1, "\nvar Utils = new Utility();", "\nfunction Hint() { this.active = false; }", "self.onmessage = function(e) {generateGridAndSolution(e.data.size)};"].join(""),
                    blob = new Blob([js], { type: "text/javascript" });
                worker = new Worker(url.createObjectURL(blob))
            } else worker = new Worker("js/webworker.js"), Game.debug && console.log("Web worker created statically");
            worker.onmessage = function(e) {
                var puzzle = JSON.parse(e.data);
                onPuzzleGenerated(puzzle)
            }
        }

        function onPuzzleGenerated(puzzle) { Game.debug && console.log("generated puzzle", puzzle), Levels.addSize(puzzle.size, puzzle) }

        function generatePuzzle(size) { enabled && (worker || createWorker(), worker.postMessage({ size: size })) }

        function kick() {
            var needsSize = Levels.needs();
            if (needsSize) {
                if (window.FixedLevels && FixedLevels.has(needsSize)) { var puzzle = FixedLevels.get(needsSize); if (puzzle) return void Levels.addSize(puzzle.size, puzzle) }
                generatePuzzle(needsSize)
            }
        }
        var enabled = window.Worker ? !0 : !1,
            url = window.URL || window.webkitURL,
            supportsRuntimeWorker = window.Blob && url ? !0 : !1,
            worker = null;
        Game.debug && console.log("BackgroundService:", enabled), this.generatePuzzle = generatePuzzle, this.kick = kick, this.__defineGetter__("enabled", function() { return enabled })
    },
    Storage = new function() {
        function init() {
            var templateData = JSON.parse(JSON.stringify(data));
            getItem(id, function(obj) {
                var dataFound = !1;
                if (obj && obj[id]) {
                    var str = obj[id],
                        tempData = JSON.parse(str);
                    tempData && 42 == tempData.q && (data = tempData, dataFound = !0, upgradeUserDataWithTemplateValues(templateData))
                }
                dataFound || Game.getScore(function(value) {!(value > 0 && data) || data.size4played || data.size6played || data.size8played || data.size10played || convertScoreToGamesPlayed(value) })
            })
        }

        function upgradeUserDataWithTemplateValues(templateData) {
            var changed = !1;
            for (var name in templateData) void 0 === data[name] && (data[name] = templateData[name], changed = !0, Game.debug && console.log("upgraded from template", name, templateData[name]));
            changed && save()
        }

        function convertScoreToGamesPlayed(score) {
            for (var remain = score; remain >= 16;)
                for (var i = 10; i >= 4; i -= 2) {
                    var points = i * i;
                    remain >= points && (remain -= points, data["size" + i + "played"]++, data.gamesPlayed++)
                }
            save()
        }

        function save() { setItem(id, JSON.stringify(data)) }

        function levelCompleted(size, score, seconds, isTutorial, hintsUsed, undosUsed) {
            if (Game.debug && console.log("levelCompleted", size, score, seconds, isTutorial, hintsUsed, undosUsed), Game.debug && console.log("data", data), !(!size || 4 > size || size > 12) && seconds && !isNaN(seconds)) {
                if (isTutorial) return void PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.apprentice);
                if (data.gamesPlayed++, score > 0 && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.score, score), PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.games_played, data.gamesPlayed), 4 == size && (data.size4played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._4_x_4_played, data.size4played), hintsUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_4_x_4), undosUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_4_x_4)), 6 == size && (data.size6played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._6_x_6_played, data.size6played), hintsUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_6_x_6), undosUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_6_x_6)), 8 == size && (data.size8played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._8_x_8_played, data.size8played), hintsUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_8_x_8), undosUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_8_x_8)), 10 == size && (data.size10played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._10_x_10_played, data.size10played), hintsUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_10_x_10), undosUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_10_x_10)), 12 == size && (data.size12played++, PlayCenter.submitScore(PlayCenter.IDS.Leaderboards._12_x_12_played, data.size12played), hintsUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.no_questions_asked_12_x_12), undosUsed || PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.forward_12_x_12)), data.gamesPlayed >= 10 && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.ten), data.gamesPlayed >= 42 && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.q42), data.gamesPlayed >= 100 && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.hundred), data.gamesPlayed >= 1e3 && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.thousand), data.gamesPlayed >= 25e3 && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.jennifer), data["size" + size + "played"] >= 1) {
                    for (var allFourUnlocked = !0, i = 4; 10 >= i; i += 2)
                        if (i != size) {
                            var unlockedOther = data["size" + i + "played"] >= 1;
                            unlockedOther || (allFourUnlocked = !1)
                        }
                    allFourUnlocked && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.allfour)
                }
                data["size" + size + "played"] >= 10 && (4 == size && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._160_dots), 6 == size && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._360_dots), 8 == size && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._640_dots), 10 == size && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._1000_dots), 12 == size && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements._1440_dots));
                var milliseconds = 1e3 * seconds;
                if (seconds > 0) { PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time, milliseconds), 4 == size && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_4_x_4, milliseconds), 6 == size && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_6_x_6, milliseconds), 8 == size && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_8_x_8, milliseconds), 10 == size && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_10_x_10, milliseconds), 12 == size && PlayCenter.submitScore(PlayCenter.IDS.Leaderboards.best_time_12_x_12, milliseconds); var currentBestTime = data["bestTimeSize" + size];!isNaN(currentBestTime) && currentBestTime > seconds && (data["bestTimeSize" + size] = seconds) }
                Game.debug && console.log(data), save()
            }
        }

        function gameQuitted() { data.gamesQuitted++, save(), 10 == data.gamesQuitted && PlayCenter.unlockAchievement(PlayCenter.IDS.Achievements.quitter) }

        function achievementUnlocked(id) { data.achievementsUnlocked[id] || (Game.debug && console.log("achievement unlocked: " + id), data.achievementsUnlocked[id] = !0, data.achievementsNotSent[id] = !0, save()) }

        function achievementSent(id) { data.achievementsUnlocked[id] && data.achievementsNotSent[id] && (delete data.achievementsNotSent[id], save()) }

        function getDataValue(name, defaultValue) { return void 0 === data[name] ? void 0 != defaultValue ? defaultValue : !1 : data[name] }

        function setDataValue(name, value) { data[name] = value, save() }

        function getItem(name, cb) {
            if ($.browser.chromeWebStore) chrome.storage.local.get(name, cb);
            else {
                var result = {};
                result[name] = localStorage.getItem(name), cb(result)
            }
        }

        function setItem(name, value, cb) {
            if ($.browser.chromeWebStore) {
                var command = {};
                command[name] = value, chrome.storage.local.set(command, cb)
            } else localStorage.setItem(name, value), cb && cb()
        }

        function clear(cb) { $.browser.chromeWebStore ? chrome.storage.local.clear(cb) : (localStorage.clear(), cb && cb()) }
        var id = "0hh1_storage",
            data = { q: 42, size4played: 0, size6played: 0, size8played: 0, size10played: 0, size12played: 0, gamesPlayed: 0, bestTimeSize4: 240, bestTimeSize6: 360, bestTimeSize8: 480, bestTimeSize10: 600, bestTimeSize12: 720, gamesQuitted: 0, autoSignIn: !0, showTimeTrial: !1, achievementsUnlocked: {}, achievementsNotSent: {}, theme: 1, hideHintIcon: !1 };
        $(init), this.getItem = getItem, this.setItem = setItem, this.clear = clear, this.levelCompleted = levelCompleted, this.gameQuitted = gameQuitted, this.setDataValue = setDataValue, this.getDataValue = getDataValue, this.achievementUnlocked = achievementUnlocked, this.achievementSent = achievementSent, this.__defineGetter__("data", function() { return data })
    },
    PlayCenter = new function() {
        var enabled = !1,
            isSignedIn = !1;
        this.IDS = { Leaderboards: {}, Achievements: {} }, this.autoSignIn = function(handler) {}, this.signIn = function(auto, handler) {}, this.signOut = function(handler) {}, this.submitScore = function(leaderboardObj, score) {}, this.showLeaderboard = function(id) {}, this.unlockAchievement = function(achievementObj) {}, this.showAchievements = function() {}, this.resetAchievements = function() {}, this.__defineGetter__("enabled", function() { return enabled }), this.__defineGetter__("isSignedIn", function() { return isSignedIn })
    },
    Themes = new function() {
        function init() {
            $("#container").append('<canvas id="scratch-canvas"/>'), canvas = $("#scratch-canvas")[0], ctx = canvas.getContext("2d"), elGame = $("#gameContainer")[0], elGrain = $("#grain")[0], theme = Storage.getDataValue("theme", 1);
            for (var id in hashMap) document.location.hash == "#" + hashMap[id] && (theme = id, hashEnabled = !0);
            Storage.setDataValue("theme", theme), applyTheme(theme)
        }

        function resize(w, h) { viewport.width = w, viewport.height = h, canvas.width = w, canvas.height = h, grainOffset = .5 / 320 * w }

        function cycle() { cycling && (cycling = !0, frameId = requestAnimFrame(cycle), cycleTime = new Date, grain()) }

        function grain() {
            if (!(cycleTime < nextGrain)) {
                var x = Utils.between(-grainOffset, grainOffset, 4),
                    y = Utils.between(-grainOffset, grainOffset, 4),
                    opacity = Utils.between(29, 31) / 100;
                elGame.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, 0)", elGame.style.transform = "translate3d(" + x + "px, " + y + "px, 0)", elGrain.style.opacity = opacity, nextGrain = new Date((new Date).getTime() + 50);
                for (var i = 0; i < scratches.length; i++) {
                    var scratch = scratches[i];
                    ctx.clearRect(scratch[0], scratch[1], scratch[2] - scratch[0], scratch[3] - scratch[1])
                }
                scratches = [];
                var dotCount = Utils.between(1, 5);
                ctx.fillStyle = "rgba(0,0,0,0.3)";
                for (var i = 0; dotCount > i; i++) {
                    var x = Utils.between(0, viewport.width);
                    y = Utils.between(0, viewport.height), ctx.beginPath(), ctx.arc(x, y, Utils.between(.1, 3, 2), 0, pi2, !0), ctx.fill(), scratches.push([x - 4, y - 4, x + 4, y + 4])
                }
                var scratchCount = Utils.between(1, 5);
                ctx.lineWidth = .2, ctx.strokeStyle = "rgba(0,0,0,0.7)";
                for (var i = 0; scratchCount > i; i++) {
                    var x = Utils.between(0, viewport.width);
                    y = Utils.between(0, viewport.height), dy = Utils.between(-viewport.height / 2, viewport.height, 2), ctx.beginPath(), ctx.moveTo(x, y), ctx.lineTo(x, y + dy), ctx.stroke();
                    var top = dy >= 0 ? y : y + dy,
                        bottom = dy >= 0 ? y + dy : y;
                    scratches.push([x - 1, top - 1, x + 1, bottom + 1])
                }
            }
        }

        function toggle() { theme = Storage.getDataValue("theme", 1), theme++, theme > 3 && (theme = 1), applyTheme(theme) }

        function applyTheme() { 3 == theme ? (cycling = !0, cycle()) : (cycling = !1, cancelAnimFrame && cancelAnimFrame(frameId), elGame.style.webkitTransform = "none", elGame.style.transform = "none"), hashEnabled && hashMap[theme] && (document.location.hash = hashMap[theme]), $("html").removeClass("theme1 theme2 theme3").addClass("theme" + theme), Storage.setDataValue("theme", theme), Game.resize() }
        var theme, elGame, elGrain, canvas, ctx, pi2 = 2 * Math.PI,
            nextGrain = 0,
            ctx = null,
            scratches = [],
            grainOffset = 0,
            viewport = { width: 0, height: 0 },
            cycling = !1,
            frameId = 0,
            hashEnabled = !1,
            hashMap = { 1: "0hn0", 2: "0hh1", 3: "contranoid" };
        this.init = init, this.cycle = cycle, this.grain = grain, this.resize = resize, this.toggle = toggle, this.__defineGetter__("theme", function() { return theme })
    },
    Links = new function() {
        function init() {
            var android = /android/.test(navigator.userAgent.toLowerCase()),
                ios = /ipad|iphone|ipod/.test(navigator.userAgent.toLowerCase());
            for (var id in links) {
                var $el = $("#game_link_" + id),
                    href = links[id].web;
                ios && (href = links[id].ios), android && (href = links[id].android), $el.attr("href", href)
            }
        }
        $(init);
        var links = { quento: { ios: "https://itunes.apple.com/us/app/quento/id583954698?mt=8", android: "https://play.google.com/store/apps/details?id=nl.q42.quento&hl=en", web: "http://quento.com" }, numolition: { ios: "https://itunes.apple.com/us/app/numolition/id824164747?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.numolition", web: "http://numolition.com" }, "0hn0": { ios: "https://itunes.apple.com/us/app/0h-n0/id957191082?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.ohno", web: "http://0hn0.com" }, contranoid: { ios: "https://itunes.apple.com/us/app/contranoid/id1027717534?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.contranoid", web: "http://contranoid.com" }, "0hh1": { ios: "https://itunes.apple.com/us/app/0h-h1/id936504196?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.ohhi", web: "http://0hh1.com" }, flippybit: { ios: "https://itunes.apple.com/us/app/flippy-bit-attack-hexadecimals/id853100169?mt=8", android: "https://play.google.com/store/apps/details?id=com.q42.flippybitandtheattackofthehexadecimalsfrombase16&hl=en", web: "http://flippybitandtheattackofthehexadecimalsfrombase16.com" } }
    };
$(app.onDeviceReady);