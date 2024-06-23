/*
screenfull
v5.0.0 - 2019-09-09
(c) Sindre Sorhus; MIT License
Platform.js <https://mths.be/platform>
Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
Copyright 2011-2013 John-David Dalton
Available under MIT license <https://mths.be/mit>
 */
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
    l = "undefined" !== typeof module && module.exports,
    c = function () {
        for (var f, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], h = 0, k = d.length, b = {}; h < k; h++)
            if ((f = d[h]) && f[1]in a) {
                for (h = 0; h < f.length; h++)
                    b[d[0][h]] = f[h];
                return b
            }
        return !1
    }
    (),
    g = {
        change: c.fullscreenchange,
        error: c.fullscreenerror
    },
    e = {
        request: function (f) {
            return new Promise(function (d, h) {
                var k = function () {
                    this.off("change",
                        k);
                    d()
                }
                .bind(this);
                this.on("change", k);
                f = f || a.documentElement;
                Promise.resolve(f[c.requestFullscreen]())["catch"](h)
            }
                .bind(this))
        },
        exit: function () {
            return new Promise(function (f, d) {
                if (this.isFullscreen) {
                    var h = function () {
                        this.off("change", h);
                        f()
                    }
                    .bind(this);
                    this.on("change", h);
                    Promise.resolve(a[c.exitFullscreen]())["catch"](d)
                } else
                    f()
            }
                .bind(this))
        },
        toggle: function (f) {
            return this.isFullscreen ? this.exit() : this.request(f)
        },
        onchange: function (f) {
            this.on("change", f)
        },
        onerror: function (f) {
            this.on("error", f)
        },
        on: function (f, d) {
            var h = g[f];
            h && a.addEventListener(h, d, !1)
        },
        off: function (f, d) {
            var h = g[f];
            h && a.removeEventListener(h, d, !1)
        },
        raw: c
    };
    c ? (Object.defineProperties(e, {
            isFullscreen: {
                get: function () {
                    return !!a[c.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function () {
                    return a[c.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function () {
                    return !!a[c.fullscreenEnabled]
                }
            }
        }), l ? module.exports = e : window.screenfull = e) : l ? module.exports = {
        isEnabled: !1
    }
     : window.screenfull = {
        isEnabled: !1
    }
})();
var s_iScaleFactor = 1, s_bIsIphone = !1, s_iOffsetX, s_iOffsetY, s_bFocus = !0;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone"))
        return s_bIsIphone = !0;
    for (; a.length; )
        if (navigator.platform === a.pop())
            return !0;
    return s_bIsIphone = !1
}
function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}
function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}
function getSize(a) {
    var l = a.toLowerCase(),
    c = window.document,
    g = c.documentElement;
    if (void 0 === window["inner" + a])
        a = g["client" + a];
    else if (window["inner" + a] != g["client" + a]) {
        var e = c.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var f = c.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + l + ":" + g["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + l + ":7px!important}}</style>";
        e.appendChild(f);
        g.insertBefore(e, c.head);
        a = 7 == f["offset" + a] ? g["client" + a] : window["inner" + a];
        g.removeChild(e)
    } else
        a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var l = getSize("Width");
        s_bFocus && _checkOrientation(l, a);
        var c = Math.min(a / CANVAS_HEIGHT, l / CANVAS_WIDTH),
        g = Math.round(CANVAS_WIDTH * c);
        c = Math.round(CANVAS_HEIGHT * c);
        if (c < a) {
            var e = a - c;
            c += e;
            g += CANVAS_WIDTH / CANVAS_HEIGHT * e
        } else
            g < l && (e = l - g, g += e, c += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = a / 2 - c / 2;
        var f = l / 2 - g / 2,
        d = CANVAS_WIDTH / g;
        if (f * d < -EDGEBOARD_X ||
            e * d < -EDGEBOARD_Y)
            c = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), l / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), g = Math.round(CANVAS_WIDTH * c), c = Math.round(CANVAS_HEIGHT * c), e = (a - c) / 2, f = (l - g) / 2, d = CANVAS_WIDTH / g;
        s_iOffsetX = -1 * f * d;
        s_iOffsetY = -1 * e * d;
        0 <= e && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * g, s_oStage.canvas.height = 2 * c, canvas.style.width = g + "px",
            canvas.style.height = c + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(g / CANVAS_WIDTH, c / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", g + "px"), $("#canvas").css("height", c + "px")) : s_oStage && (s_oStage.canvas.width = g, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(g / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e || (e = (a - c) / 2);
        $("#canvas").css("top", e + "px");
        $("#canvas").css("left", f + "px");
        fullscreenHandler()
    }
}
function createBitmap(a, l, c) {
    var g = new createjs.Bitmap(a),
    e = new createjs.Shape;
    l && c ? e.graphics.beginFill("#fff").drawRect(0, 0, l, c) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    g.hitArea = e;
    return g
}
function createSprite(a, l, c, g, e, f) {
    a = null !== l ? new createjs.Sprite(a, l) : new createjs.Sprite(a);
    l = new createjs.Shape;
    l.graphics.beginFill("#000000").drawRect(-c, -g, e, f);
    a.hitArea = l;
    return a
}
function randomFloatBetween(a, l, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (l - a), l).toFixed(c))
}
function formatTime(a) {
    a /= 1E3;
    var l = Math.floor(a / 60);
    a = Math.floor(a - 60 * l);
    var c = "";
    c = 10 > l ? c + ("0" + l + ":") : c + (l + ":");
    return 10 > a ? c + ("0" + a) : c + a
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(a) {
    for (var l = a.length, c, g; 0 < l; )
        g = Math.floor(Math.random() * l), l--, c = a[l], a[l] = a[g], a[g] = c;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
        case "touchstart":
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            this.onTouchEnd(a)
        }
    },
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (a) {
        this.moved = !0
    },
    onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var l = document.createEvent("MouseEvents");
            l.initEvent("click", !0, !0);
            a.dispatchEvent(l)
        }
    }
};
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
    for (var l = window.location.search.substring(1).split("&"), c = 0; c < l.length; c++) {
        var g = l[c].split("=");
        if (g[0] == a)
            return g[1]
    }
}
function playSound(a, l, c) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(l), s_aSounds[a].loop(c), s_aSounds[a]) : null
}
function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}
function setVolume(a, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(l)
}
function setMute(a, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(l)
}
(function () {
    function a(c) {
        var g = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        c = c || window.event;
        c.type in g ? document.body.className = g[c.type] : (document.body.className = this[l] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
    }
    var l = "hidden";
    l in document ? document.addEventListener("visibilitychange", a) : (l = "mozHidden")in document ? document.addEventListener("mozvisibilitychange",
        a) : (l = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", a) : (l = "msHidden")in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();
function _checkOrientation(a, l) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > l ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
            s_oMain.stopUpdate()))
}
function easeLinear(a, l, c, g) {
    return c * a / g + l
}
function collisionWithCircle(a, l, c) {
    var g = a.getX() - l.getX(),
    e = a.getY() - l.getY();
    return Math.sqrt(g * g + e * e) < a.getCollision() * c + l.getCollision() * c ? !0 : !1
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.isEnabled)
    screenfull.on("change", function () {
        s_bFullscreen = screenfull.isFullscreen;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut()
    });
function CSpriteLibrary() {
    var a = {},
    l,
    c,
    g,
    e,
    f,
    d;
    this.init = function (h, k, b) {
        l = {};
        g = c = 0;
        e = h;
        f = k;
        d = b
    };
    this.addSprite = function (h, k) {
        if (!a.hasOwnProperty(h)) {
            var b = new Image;
            a[h] = l[h] = {
                szPath: k,
                oSprite: b,
                bLoaded: !1
            };
            c++
        }
    };
    this.getSprite = function (h) {
        return a.hasOwnProperty(h) ? a[h].oSprite : null
    };
    this._onSpritesLoaded = function () {
        c = 0;
        f.call(d)
    };
    this._onSpriteLoaded = function () {
        e.call(d);
        ++g === c && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var h in l)
            l[h].oSprite.oSpriteLibrary = this, l[h].oSprite.szKey =
                h, l[h].oSprite.onload = function () {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            },
        l[h].oSprite.onerror = function (k) {
            var b = k.currentTarget;
            setTimeout(function () {
                l[b.szKey].oSprite.src = l[b.szKey].szPath
            }, 500)
        },
        l[h].oSprite.src = l[h].szPath
    };
    this.setLoaded = function (h) {
        a[h].bLoaded = !0
    };
    this.isLoaded = function (h) {
        return a[h].bLoaded
    };
    this.getNumSprites = function () {
        return c
    }
}
var CANVAS_WIDTH = 960, CANVAS_HEIGHT = 1440, CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH, CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT, EDGEBOARD_X = 50, EDGEBOARD_Y = 130, FPS = 30, FPS_TIME = 1 / FPS, DISABLE_SOUND_MOBILE = !1, PRIMARY_FONT = "SHMUP in the zone", OUTLINE_TEXT = 4, CELL_OFFSET = {
    x: -9,
    y: -9
}, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, CONFIRMATION_EXIT = 0, CONFIRMATION_RESET = 1, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_TWEEN_ENDED = 6, ON_BUT_NO_DOWN = 7, ON_BUT_YES_DOWN = 8, BLOCK_TIME_SPAWN_RANGE = {
    min: 500,
    max: 1E4
}, LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3, GRID_Y = 20, GRID_X = 10, SHOW_CELL = !1, TIME_REFRESH_DIRECTION = .2, CELL_DESTROY_MS = 15, DELAY_CELL_DESTROY_MS = 20, DELAY_LINE_DOWN = 10, LINE_DOWN_TIME = 40, SHOW_FPS = !1, TIME_REFRESH_GAME = 1, TIME_REFRESH_GAME_KEY_DOWN, GRID_X_HALF = Math.floor(.5 * GRID_X), CELL_SIZE = 50, START_GRID_X = CANVAS_WIDTH_HALF - CELL_SIZE * GRID_X_HALF - 2.35 * EDGEBOARD_X, START_GRID_Y = CANVAS_HEIGHT_HALF - GRID_Y * GRID_Y, BLOCKS_TYPE = [[[0, 1, 0], [1, 1, 1]], [[0, 0, 1], [1, 1, 1]], [[1, 0, 0], [1, 1, 1]], [[0, 1, 1], [1, 1, 0]], [[1, 1, 0],
        [0, 1, 1]], [[1], [1], [1], [1]], [[1, 1], [1, 1]]], ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SOUNDTRACK_VOLUME_IN_GAME = .4;
(function () {
    function a(r) {
        r = String(r);
        return r.charAt(0).toUpperCase() + r.slice(1)
    }
    function l(r, J) {
        var F = -1,
        B = r ? r.length : 0;
        if ("number" == typeof B && -1 < B && B <= t)
            for (; ++F < B; )
                J(r[F], F, r);
        else
            g(r, J)
    }
    function c(r) {
        r = String(r).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(r) ? r : a(r)
    }
    function g(r, J) {
        for (var F in r)
            A.call(r, F) && J(r[F], F, r)
    }
    function e(r) {
        return null == r ? a(r) : z.call(r).slice(8, -1)
    }
    function f(r, J) {
        var F = null != r ? typeof r[J] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(F) &&
        ("object" == F ? !!r[J] : !0)
    }
    function d(r) {
        return String(r).replace(/([ -])(?!$)/g, "$1?")
    }
    function h(r, J) {
        var F = null;
        l(r, function (B, y) {
            F = J(F, B, y, r)
        });
        return F
    }
    function k(r) {
        function J(M) {
            return h(M, function (K, I) {
                var P = I.pattern || d(I);
                !K && (K = RegExp("\\b" + P + " *\\d+[.\\w_]*", "i").exec(r) || RegExp("\\b" + P + " *\\w+-[\\w]*", "i").exec(r) || RegExp("\\b" + P + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(r)) && ((K = String(I.label && !RegExp(P, "i").test(I.label) ? I.label : K).split("/"))[1] && !/[\d.]+/.test(K[0]) && (K[0] +=
                        " " + K[1]), I = I.label || I, K = c(K[0].replace(RegExp(P, "i"), I).replace(RegExp("; *(?:" + I + "[_-])?", "i"), " ").replace(RegExp("(" + I + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return K
            })
        }
        function F(M) {
            return h(M, function (K, I) {
                return K || (RegExp(I + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(r) || 0)[1] || null
            })
        }
        var B = p,
        y = r && "object" == typeof r && "String" != e(r);
        y && (B = r, r = null);
        var D = B.navigator || {},
        x = D.userAgent || "";
        r || (r = x);
        var N = y ? !!D.likeChrome : /\bChrome\b/.test(r) && !/internal|\n/i.test(z.toString()),
        V = y ? "Object" : "ScriptBridgingProxyObject",
        C = y ? "Object" : "Environment",
        L = y && B.java ? "JavaPackage" : e(B.java),
        O = y ? "Object" : "RuntimeObject";
        C = (L = /\bJava/.test(L) && B.java) && e(B.environment) == C;
        var R = L ? "a" : "\u03b1",
        W = L ? "b" : "\u03b2",
        aa = B.document || {},
        T = B.operamini || B.opera,
        X = u.test(X = y && T ? T["[[Class]]"] : e(T)) ? X : T = null,
        m,
        Y = r;
        y = [];
        var Z = null,
        U = r == x;
        x = U && T && "function" == typeof T.version && T.version();
        var G = function (M) {
            return h(M, function (K, I) {
                return K || RegExp("\\b" + (I.pattern || d(I)) + "\\b", "i").exec(r) && (I.label ||
                    I)
            })
        }
        ([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
        v = function (M) {
            return h(M, function (K, I) {
                return K || RegExp("\\b" + (I.pattern || d(I)) + "\\b", "i").exec(r) && (I.label || I)
            })
        }
        (["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]),
        H = J([{
                        label: "BlackBerry",
                        pattern: "BB10"
                    }, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {
                        label: "Galaxy S2",
                        pattern: "GT-I9100"
                    }, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, {
                        label: "Galaxy S5",
                        pattern: "SM-G900"
                    }, {
                        label: "Galaxy S6",
                        pattern: "SM-G920"
                    }, {
                        label: "Galaxy S6 Edge",
                        pattern: "SM-G925"
                    }, {
                        label: "Galaxy S7",
                        pattern: "SM-G930"
                    }, {
                        label: "Galaxy S7 Edge",
                        pattern: "SM-G935"
                    }, "Google TV", "Lumia", "iPad",
                    "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {
                        label: "Xbox 360",
                        pattern: "Xbox"
                    }, "Xoom"]),
        Q = function (M) {
            return h(M, function (K, I, P) {
                return K || (I[H] || I[/^[a-z]+(?: +[a-z]+\b)*/i.exec(H)] || RegExp("\\b" + d(P) + "(?:\\b|\\w*\\d)", "i").exec(r)) && P
            })
        }
        ({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        }),
        w = function (M) {
            return h(M, function (K, I) {
                var P = I.pattern || d(I);
                if (!K && (K = RegExp("\\b" + P + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(r))) {
                    var S = K,
                    ba = I.label || I,
                    ca = {
                        "10.0": "10",
                        "6.4": "10 Technical Preview",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        "5.2": "Server 2003 / XP 64-bit",
                        "5.1": "XP",
                        "5.01": "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    P && ba && /^Win/i.test(S) && !/^Windows Phone /i.test(S) && (ca = ca[/[\d.]+$/.exec(S)]) && (S = "Windows " + ca);
                    S = String(S);
                    P && ba && (S = S.replace(RegExp(P, "i"), ba));
                    K = S = c(S.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
                                "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }
                return K
            })
        }
        (["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
                "Macintosh", "Mac", "Windows 98;", "Windows "]);
        G && (G = [G]);
        Q && !H && (H = J([Q]));
        if (m = /\bGoogle TV\b/.exec(H))
            H = m[0];
        /\bSimulator\b/i.test(r) && (H = (H ? H + " " : "") + "Simulator");
        "Opera Mini" == v && /\bOPiOS\b/.test(r) && y.push("running in Turbo/Uncompressed mode");
        "IE" == v && /\blike iPhone OS\b/.test(r) ? (m = k(r.replace(/like iPhone OS/, "")), Q = m.manufacturer, H = m.product) : /^iP/.test(H) ? (v || (v = "Safari"), w = "iOS" + ((m = / OS ([\d_]+)/i.exec(r)) ? " " + m[1].replace(/_/g, ".") : "")) : "Konqueror" != v || /buntu/i.test(w) ? Q && "Google" != Q &&
        (/Chrome/.test(v) && !/\bMobile Safari\b/i.test(r) || /\bVita\b/.test(H)) || /\bAndroid\b/.test(w) && /^Chrome/.test(v) && /\bVersion\//i.test(r) ? (v = "Android Browser", w = /\bAndroid\b/.test(w) ? w : "Android") : "Silk" == v ? (/\bMobi/i.test(r) || (w = "Android", y.unshift("desktop mode")), /Accelerated *= *true/i.test(r) && y.unshift("accelerated")) : "PaleMoon" == v && (m = /\bFirefox\/([\d.]+)\b/.exec(r)) ? y.push("identifying as Firefox " + m[1]) : "Firefox" == v && (m = /\b(Mobile|Tablet|TV)\b/i.exec(r)) ? (w || (w = "Firefox OS"), H || (H = m[1])) : !v ||
        (m = !/\bMinefield\b/i.test(r) && /\b(?:Firefox|Safari)\b/.exec(v)) ? (v && !H && /[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(m + "/") + 8)) && (v = null), (m = H || Q || w) && (H || Q || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) && (v = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : m) + " Browser")) : "Electron" == v && (m = (/\bChrome\/([\d.]+)\b/.exec(r) || 0)[1]) && y.push("Chromium " + m) : w = "Kubuntu";
        x || (x = F(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(v),
                        "(?:Firefox|Minefield|NetFront)"]));
        if (m = "iCab" == G && 3 < parseFloat(x) && "WebKit" || /\bOpera\b/.test(v) && (/\bOPR\b/.test(r) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(r) && !/^(?:Trident|EdgeHTML)$/.test(G) && "WebKit" || !G && /\bMSIE\b/i.test(r) && ("Mac OS" == w ? "Tasman" : "Trident") || "WebKit" == G && /\bPlayStation\b(?! Vita\b)/i.test(v) && "NetFront")
            G = [m];
        "IE" == v && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r) || 0)[1]) ? (v += " Mobile", w = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), y.unshift("desktop mode")) : /\bWPDesktop\b/i.test(r) ?
        (v = "IE Mobile", w = "Windows Phone 8.x", y.unshift("desktop mode"), x || (x = (/\brv:([\d.]+)/.exec(r) || 0)[1])) : "IE" != v && "Trident" == G && (m = /\brv:([\d.]+)/.exec(r)) && (v && y.push("identifying as " + v + (x ? " " + x : "")), v = "IE", x = m[1]);
        if (U) {
            if (f(B, "global"))
                if (L && (m = L.lang.System, Y = m.getProperty("os.arch"), w = w || m.getProperty("os.name") + " " + m.getProperty("os.version")), C) {
                    try {
                        x = B.require("ringo/engine").version.join("."),
                        v = "RingoJS"
                    } catch (M) {
                        (m = B.system) && m.global.system == B.system && (v = "Narwhal", w || (w = m[0].os || null))
                    }
                    v ||
                    (v = "Rhino")
                } else
                    "object" == typeof B.process && !B.process.browser && (m = B.process) && ("object" == typeof m.versions && ("string" == typeof m.versions.electron ? (y.push("Node " + m.versions.node), v = "Electron", x = m.versions.electron) : "string" == typeof m.versions.nw && (y.push("Chromium " + x, "Node " + m.versions.node), v = "NW.js", x = m.versions.nw)), v || (v = "Node.js", Y = m.arch, w = m.platform, x = (x = /[\d.]+/.exec(m.version)) ? x[0] : null));
            else
                e(m = B.runtime) == V ? (v = "Adobe AIR", w = m.flash.system.Capabilities.os) : e(m = B.phantom) == O ? (v = "PhantomJS",
                    x = (m = m.version || null) && m.major + "." + m.minor + "." + m.patch) : "number" == typeof aa.documentMode && (m = /\bTrident\/(\d+)/i.exec(r)) ? (x = [x, aa.documentMode], (m = +m[1] + 4) != x[1] && (y.push("IE " + x[1] + " mode"), G && (G[1] = ""), x[1] = m), x = "IE" == v ? String(x[1].toFixed(1)) : x[0]) : "number" == typeof aa.documentMode && /^(?:Chrome|Firefox)\b/.test(v) && (y.push("masking as " + v + " " + x), v = "IE", x = "11.0", G = ["Trident"], w = "Windows");
            w = w && c(w)
        }
        x && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(x) || /(?:alpha|beta)(?: ?\d)?/i.exec(r + ";" + (U &&
                        D.appMinorVersion)) || /\bMinefield\b/i.test(r) && "a") && (Z = /b/i.test(m) ? "beta" : "alpha", x = x.replace(RegExp(m + "\\+?$"), "") + ("beta" == Z ? W : R) + (/\d+\+?/.exec(m) || ""));
        if ("Fennec" == v || "Firefox" == v && /\b(?:Android|Firefox OS)\b/.test(w))
            v = "Firefox Mobile";
        else if ("Maxthon" == v && x)
            x = x.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(H))
            "Xbox 360" == H && (w = null), "Xbox 360" == H && /\bIEMobile\b/.test(r) && y.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(v) && (!v || H || /Browser|Mobi/.test(v)) || "Windows CE" !=
            w && !/Mobi/i.test(r))
            if ("IE" == v && U)
                try {
                    null === B.external && y.unshift("platform preview")
                } catch (M) {
                    y.unshift("embedded")
                }
            else (/\bBlackBerry\b/.test(H) || /\bBB10\b/.test(r)) && (m = (RegExp(H.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(r) || 0)[1] || x) ? (m = [m, /BB10/.test(r)], w = (m[1] ? (H = null, Q = "BlackBerry") : "Device Software") + " " + m[0], x = null) : this != g && "Wii" != H && (U && T || /Opera/.test(v) && /\b(?:MSIE|Firefox)\b/i.test(r) || "Firefox" == v && /\bOS X (?:\d+\.){2,}/.test(w) || "IE" == v && (w && !/^Win/.test(w) && 5.5 < x || /\bWindows XP\b/.test(w) &&
                        8 < x || 8 == x && !/\bTrident\b/.test(r))) && !u.test(m = k.call(g, r.replace(u, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), u.test(v) ? (/\bIE\b/.test(m) && "Mac OS" == w && (w = null), m = "identify" + m) : (m = "mask" + m, v = X ? c(X.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(m) && (w = null), U || (x = null)), G = ["Presto"], y.push(m));
        else
            v += " Mobile";
        if (m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(r) || 0)[1]) {
            m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m];
            if ("Safari" == v && "+" == m[1].slice(-1))
                v = "WebKit Nightly", Z = "alpha",
                x = m[1].slice(0, -1);
            else if (x == m[1] || x == (m[2] = (/\bSafari\/([\d.]+\+?)/i.exec(r) || 0)[1]))
                x = null;
            m[1] = (/\bChrome\/([\d.]+)/i.exec(r) || 0)[1];
            537.36 == m[0] && 537.36 == m[2] && 28 <= parseFloat(m[1]) && "WebKit" == G && (G = ["Blink"]);
            U && (N || m[1]) ? (G && (G[1] = "like Chrome"), m = m[1] || (m = m[0], 530 > m ? 1 : 532 > m ? 2 : 532.05 > m ? 3 : 533 > m ? 4 : 534.03 > m ? 5 : 534.07 > m ? 6 : 534.1 > m ? 7 : 534.13 > m ? 8 : 534.16 > m ? 9 : 534.24 > m ? 10 : 534.3 > m ? 11 : 535.01 > m ? 12 : 535.02 > m ? "13+" : 535.07 > m ? 15 : 535.11 > m ? 16 : 535.19 > m ? 17 : 536.05 > m ? 18 : 536.1 > m ? 19 : 537.01 > m ? 20 : 537.11 > m ? "21+" : 537.13 > m ?
                        23 : 537.18 > m ? 24 : 537.24 > m ? 25 : 537.36 > m ? 26 : "Blink" != G ? "27" : "28")) : (G && (G[1] = "like Safari"), m = (m = m[0], 400 > m ? 1 : 500 > m ? 2 : 526 > m ? 3 : 533 > m ? 4 : 534 > m ? "4+" : 535 > m ? 5 : 537 > m ? 6 : 538 > m ? 7 : 601 > m ? 8 : "8"));
            G && (G[1] += " " + (m += "number" == typeof m ? ".x" : /[.+]/.test(m) ? "" : "+"));
            "Safari" == v && (!x || 45 < parseInt(x)) && (x = m)
        }
        "Opera" == v && (m = /\bzbov|zvav$/.exec(w)) ? (v += " ", y.unshift("desktop mode"), "zvav" == m ? (v += "Mini", x = null) : v += "Mobile", w = w.replace(RegExp(" *" + m + "$"), "")) : "Safari" == v && /\bChrome\b/.exec(G && G[1]) && (y.unshift("desktop mode"),
            v = "Chrome Mobile", x = null, /\bOS X\b/.test(w) ? (Q = "Apple", w = "iOS 4.3+") : w = null);
        x && 0 == x.indexOf(m = /[\d.]+$/.exec(w)) && -1 < r.indexOf("/" + m + "-") && (w = String(w.replace(m, "")).replace(/^ +| +$/g, ""));
        G && !/\b(?:Avant|Nook)\b/.test(v) && (/Browser|Lunascape|Maxthon/.test(v) || "Safari" != v && /^iOS/.test(w) && /\bSafari\b/.test(G[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(v) && G[1]) && (m = G[G.length - 1]) && y.push(m);
        y.length && (y = ["(" + y.join("; ") + ")"]);
        Q && H && 0 > H.indexOf(Q) &&
        y.push("on " + Q);
        H && y.push((/^on /.test(y[y.length - 1]) ? "" : "on ") + H);
        if (w) {
            var da = (m = / ([\d.+]+)$/.exec(w)) && "/" == w.charAt(w.length - m[0].length - 1);
            w = {
                architecture: 32,
                family: m && !da ? w.replace(m[0], "") : w,
                version: m ? m[1] : null,
                toString: function () {
                    var M = this.version;
                    return this.family + (M && !da ? " " + M : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }
        (m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Y)) && !/\bi686\b/i.test(Y) ? (w && (w.architecture = 64, w.family = w.family.replace(RegExp(" *" + m), "")), v && (/\bWOW64\b/i.test(r) || U &&
                /\w(?:86|32)$/.test(D.cpuClass || D.platform) && !/\bWin64; x64\b/i.test(r)) && y.unshift("32-bit")) : w && /^OS X/.test(w.family) && "Chrome" == v && 39 <= parseFloat(x) && (w.architecture = 64);
        r || (r = null);
        B = {};
        B.description = r;
        B.layout = G && G[0];
        B.manufacturer = Q;
        B.name = v;
        B.prerelease = Z;
        B.product = H;
        B.ua = r;
        B.version = v && x;
        B.os = w || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
                return "null"
            }
        };
        B.parse = k;
        B.toString = function () {
            return this.description || ""
        };
        B.version && y.unshift(x);
        B.name && y.unshift(v);
        w && v && (w !=
            String(w).split(" ")[0] || w != v.split(" ")[0] && !H) && y.push(H ? "(" + w + ")" : "on " + w);
        y.length && (B.description = y.join(" "));
        return B
    }
    var b = {
        "function": !0,
        object: !0
    },
    p = b[typeof window] && window || this,
    q = b[typeof exports] && exports;
    b = b[typeof module] && module && !module.nodeType && module;
    var n = q && b && "object" == typeof global && global;
    !n || n.global !== n && n.window !== n && n.self !== n || (p = n);
    var t = Math.pow(2, 53) - 1,
    u = /\bOpera/;
    n = Object.prototype;
    var A = n.hasOwnProperty,
    z = n.toString,
    E = k();
    "function" == typeof define && "object" == typeof define.amd &&
    define.amd ? (p.platform = E, define(function () {
            return E
        })) : q && b ? g(E, function (r, J) {
        q[J] = r
    }) : p.platform = E
}).call(this);
function CPreloader() {
    var a,
    l,
    c,
    g,
    e,
    f,
    d,
    h,
    k,
    b;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        b = new createjs.Container;
        s_oStage.addChild(b)
    };
    this.unload = function () {
        b.removeAllChildren()
    };
    this._onImagesLoaded = function () {};
    this._onAllImagesLoaded =
    function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(p);
        p = s_oSpriteLibrary.getSprite("200x200");
        d = createBitmap(p);
        d.regX = .5 * p.width;
        d.regY = .5 * p.height;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 80;
        b.addChild(d);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(d.x - 100, d.y - 100, 200, 200, 10);
        b.addChild(h);
        d.mask = h;
        p = s_oSpriteLibrary.getSprite("progress_bar");
        g = createBitmap(p);
        g.x = CANVAS_WIDTH / 2 - p.width / 2;
        g.y = CANVAS_HEIGHT / 2 + 70;
        b.addChild(g);
        a = p.width;
        l = p.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(g.x, g.y, 1, l);
        b.addChild(e);
        g.mask = e;
        c = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 120;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        b.addChild(c);
        p = s_oSpriteLibrary.getSprite("but_start");
        k = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100, p, TEXT_PRELOADER_CONTINUE, "Arial", "#000",
                36, b);
        k.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        k.setVisible(!1);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function () {
            createjs.Tween.removeTweens(f);
            b.removeChild(f)
        })
    };
    this._onButStartRelease = function () {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function (p) {
        c.text = p + "%";
        100 === p && (s_oMain._onRemovePreloader(), c.visible = !1, g.visible = !1);
        e.graphics.clear();
        p = Math.floor(p *
                a / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(g.x, g.y, p, l)
    };
    this._init()
}
function CMain(a) {
    var l,
    c = 0,
    g = 0,
    e = STATE_LOADING,
    f,
    d;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? f = new CPreloader : window.location.href = "https://www.w3technic.com/contact"
    };
    this.preloaderReady = function () {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        l = !0
    };
    this.soundLoaded = function () {
        c++;
        f.refreshLoader(Math.floor(c / g * 100))
    };
    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "delete_lines",
            loop: !1,
            volume: 1,
            ingamename: "delete_lines"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "shift_piece",
            loop: !1,
            volume: 1,
            ingamename: "shift_piece"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        g += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var k = 0; k < s_aSoundsInfo.length; k++)
            this.tryToLoadSound(s_aSoundsInfo[k], !1)
    };
    this.tryToLoadSound = function (k,
        b) {
        setTimeout(function () {
            s_aSounds[k.ingamename] = new Howl({
                src: [k.path + k.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: k.loop,
                volume: k.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function (p, q) {
                    for (var n = 0; n < s_aSoundsInfo.length; n++)
                        if (p === s_aSounds[s_aSoundsInfo[n].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[n], !0);
                            break
                        }
                },
                onplayerror: function (p) {
                    for (var q = 0; q < s_aSoundsInfo.length; q++)
                        if (p === s_aSounds[s_aSoundsInfo[q].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[q].ingamename].once("unlock",
                                function () {
                                s_aSounds[s_aSoundsInfo[q].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[q].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_pause",
            "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("icon_audio", "./sprites/icon_audio.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_not", "./sprites/but_not.png");
        s_oSpriteLibrary.addSprite("but_rotation", "./sprites/but_rotation.png");
        s_oSpriteLibrary.addSprite("small_logo",
            "./sprites/small_logo.png");
        s_oSpriteLibrary.addSprite("block_blur", "./sprites/block_blur.png");
        s_oSpriteLibrary.addSprite("block_rotation", "./sprites/block_rotation.png");
        s_oSpriteLibrary.addSprite("block_down", "./sprites/block_down.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("pause_text", "./sprites/pause_text.png");
        s_oSpriteLibrary.addSprite("cell", "./sprites/cell.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_yes",
            "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("next_board", "./sprites/next_board.png");
        s_oSpriteLibrary.addSprite("info_board", "./sprites/info_board.png");
        s_oSpriteLibrary.addSprite("score_board", "./sprites/score_board.png");
        s_oSpriteLibrary.addSprite("frame_top", "./sprites/frame_top.png");
        s_oSpriteLibrary.addSprite("frame_bottom", "./sprites/frame_bottom.png");
        s_oSpriteLibrary.addSprite("key_down",
            "./sprites/key_down.png");
        s_oSpriteLibrary.addSprite("key_up", "./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("key_right", "./sprites/key_right.png");
        s_oSpriteLibrary.addSprite("key_left", "./sprites/key_left.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var k = 0; k < BLOCKS_TYPE.length; k++)
            s_oSpriteLibrary.addSprite("cell_" + k, "./sprites/cell_" + k + ".png");
        g += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function () {
        c++;
        f.refreshLoader(Math.floor(c / g * 100))
    };
    this._onAllImagesLoaded = function () {};
    this._onRemovePreloader = function () {
        f.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        s_oMain.gotoMenu()
    };
    this.gotoMenu = function () {
        new CMenu;
        e = STATE_MENU
    };
    this.gotoGame = function () {
        d = new CGame(h);
        e = STATE_GAME;
        $(s_oMain).trigger("start_session")
    };
    this.stopUpdate = function () {
        l = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        l = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (k) {
        if (!1 !== l) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_GAME && d.update();
            s_oStage.update(k)
        }
    };
    s_oMain = this;
    var h = a;
    ENABLE_FULLSCREEN =
        a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_iAdsLevel = 1, s_iLevelReached = 1, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null, s_oCanvas, s_aSounds, s_bFullscreen = !1, s_aSoundsInfo;
function CTextButton(a, l, c, g, e, f, d) {
    var h,
    k,
    b,
    p,
    q;
    this._init = function (n, t, u, A, z, E, r) {
        h = [];
        k = [];
        z = createBitmap(u);
        var J = Math.ceil(r / 20);
        q = new createjs.Text(A, r + "px " + PRIMARY_FONT, "#fff");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        var F = q.getBounds();
        q.x = u.width / 2 + J;
        q.y = Math.floor(u.height / 2) + F.height / 3 + J;
        p = new createjs.Text(A, r + "px " + PRIMARY_FONT, E);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        F = p.getBounds();
        p.x = u.width / 2;
        p.y = Math.floor(u.height / 2) + F.height / 3;
        b = new createjs.Container;
        b.x =
            n;
        b.y = t;
        b.regX = u.width / 2;
        b.regY = u.height / 2;
        b.addChild(z, q, p);
        s_oStage.addChild(b);
        s_bMobile || (b.cursor = "pointer");
        this._initListener()
    };
    this.unload = function () {
        b.off("mousedown");
        b.off("pressup");
        s_oStage.removeChild(b)
    };
    this.setVisible = function (n) {
        b.visible = n
    };
    this._initListener = function () {
        oParent = this;
        b.on("mousedown", this.buttonDown);
        b.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (n, t, u) {
        h[n] = t;
        k[n] = u
    };
    this.buttonRelease = function () {
        b.scaleX = 1;
        b.scaleY = 1;
        playSound("click", 1, !1);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
    };
    this.buttonDown = function () {
        b.scaleX = .9;
        b.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function (n) {
        p.y = n;
        q.y = n + 2
    };
    this.setPosition = function (n, t) {
        b.x = n;
        b.y = t
    };
    this.setX = function (n) {
        b.x = n
    };
    this.setY = function (n) {
        b.y = n
    };
    this.getButtonImage = function () {
        return b
    };
    this.getX = function () {
        return b.x
    };
    this.getY = function () {
        return b.y
    };
    this._init(a, l, c, g, e, f, d);
    return this
}
function CToggle(a, l, c, g, e) {
    var f,
    d,
    h,
    k = [],
    b;
    this._init = function (q, n, t, u) {
        d = [];
        h = [];
        var A = new createjs.SpriteSheet({
            images: [t],
            frames: {
                width: t.width / 2,
                height: t.height,
                regX: t.width / 2 / 2,
                regY: t.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = u;
        b = createSprite(A, "state_" + f, t.width / 2 / 2, t.height / 2, t.width / 2, t.height);
        b.mouseEnabled = !0;
        b.x = q;
        b.y = n;
        b.stop();
        s_bMobile || (b.cursor = "pointer");
        p.addChild(b);
        this._initListener()
    };
    this.unload = function () {
        b.off("mousedown", this.buttonDown);
        b.off("pressup",
            this.buttonRelease);
        b.mouseEnabled = !1;
        p.removeChild(b)
    };
    this._initListener = function () {
        b.on("mousedown", this.buttonDown);
        b.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (q, n, t) {
        d[q] = n;
        h[q] = t
    };
    this.addEventListenerWithParams = function (q, n, t, u) {
        d[q] = n;
        h[q] = t;
        k = u
    };
    this.setActive = function (q) {
        f = q;
        b.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function () {
        b.scaleX = 1;
        b.scaleY = 1;
        playSound("click", 1, !1);
        f = !f;
        b.gotoAndStop("state_" + f);
        d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k)
    };
    this.buttonDown =
    function () {
        b.scaleX = .9;
        b.scaleY = .9;
        d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], k)
    };
    this.setPosition = function (q, n) {
        b.x = q;
        b.y = n
    };
    this.setVisible = function (q) {
        b.visible = q
    };
    var p = e;
    this._init(a, l, c, g)
}
function CNumToggle(a, l, c, g) {
    var e,
    f,
    d,
    h,
    k,
    b,
    p,
    q = [];
    this._init = function (n, t, u, A) {
        f = !1;
        d = [];
        h = [];
        k = new createjs.Container;
        k.x = n;
        k.y = t;
        A.addChild(k);
        n = s_oSpriteLibrary.getSprite("num_button");
        t = {
            images: [n],
            framerate: 5,
            frames: {
                width: n.width / 2,
                height: n.height,
                regX: n.width / 2 / 2,
                regY: n.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        };
        t = new createjs.SpriteSheet(t);
        e = !1;
        b = createSprite(t, "state_" + e, n.width / 2 / 2, n.height / 2, n.width / 2, n.height);
        b.stop();
        n = s_oSpriteLibrary.getSprite("ball");
        t = {
            images: [n],
            frames: {
                width: n.width / NUM_DIFFERENT_BALLS,
                height: n.height,
                regX: n.width / NUM_DIFFERENT_BALLS / 2,
                regY: n.height / 2
            },
            animations: {
                red: [0],
                green: [1],
                cyan: [0],
                violet: [1],
                blue: [1]
            }
        };
        t = new createjs.SpriteSheet(t);
        p = createSprite(t, "red", n.width / NUM_DIFFERENT_BALLS / 2, n.height / 2, n.width / NUM_DIFFERENT_BALLS, n.height);
        p.gotoAndStop(0);
        p.visible = !1;
        k.addChild(b, p);
        this._initListener()
    };
    this.unload = function () {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        g.removeChild(k)
    };
    this._initListener =
    function () {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (n, t, u) {
        d[n] = t;
        h[n] = u
    };
    this.addEventListenerWithParams = function (n, t, u, A) {
        d[n] = t;
        h[n] = u;
        q = A
    };
    this.setActive = function (n) {
        e = n;
        b.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function () {
        f || (playSound("click", 1, !1), e = !e, b.gotoAndStop("state_" + e), d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(h[ON_MOUSE_UP], q))
    };
    this.buttonDown = function () {
        f || d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], q)
    };
    this.setPosition =
    function (n, t) {
        k.x = n;
        k.y = t
    };
    this.getGlobalPosition = function () {
        return {
            x: k.localToGlobal(0, 0).x,
            y: k.localToGlobal(0, 0).y
        }
    };
    this.block = function (n) {
        f = n
    };
    this.setExtracted = function (n, t) {
        p.visible = n;
        p.gotoAndStop(t)
    };
    this.highlight = function () {
        b.gotoAndPlay(0)
    };
    this.stopHighlight = function () {
        b.gotoAndStop(1)
    };
    this._init(a, l, c, g)
}
function CGfxButton(a, l, c, g) {
    var e,
    f,
    d,
    h,
    k = [],
    b,
    p;
    this._init = function (t, u, A, z) {
        e = f = 1;
        d = [];
        h = [];
        b = createBitmap(A);
        b.x = t;
        b.y = u;
        b.regX = A.width / 2;
        b.regY = A.height / 2;
        s_bMobile || (b.cursor = "pointer");
        q ? q.addChild(b) : s_oStage.addChild(b);
        p = !1;
        this._initListener()
    };
    this.unload = function () {
        createjs.Tween.removeTweens(b);
        b.off("mousedown", this.buttonDown);
        b.off("pressup", this.buttonRelease);
        q ? q.removeChild(b) : s_oStage.removeChild(b)
    };
    this.setVisible = function (t) {
        b.visible = t
    };
    this._initListener = function () {
        b.on("mousedown",
            this.buttonDown);
        b.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (t, u, A) {
        d[t] = u;
        h[t] = A
    };
    this.addEventListenerWithParams = function (t, u, A, z) {
        d[t] = u;
        h[t] = A;
        k = z
    };
    this.buttonRelease = function () {
        p || (b.scaleX = f, b.scaleY = e, playSound("click", 1, !1), d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k))
    };
    this.buttonDown = function () {
        p || (b.scaleX = .9 * f, b.scaleY = .9 * e, d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], k))
    };
    this.setScale = function (t) {
        e = f = t;
        b.scaleX = t;
        b.scaleY = t
    };
    this.setScaleX =
    function (t) {
        f = t;
        b.scaleX = t
    };
    this.setPosition = function (t, u) {
        b.x = t;
        b.y = u
    };
    this.setX = function (t) {
        b.x = t
    };
    this.setY = function (t) {
        b.y = t
    };
    this.getButtonImage = function () {
        return b
    };
    this.getX = function () {
        return b.x
    };
    this.getY = function () {
        return b.y
    };
    this.block = function (t) {
        p = t
    };
    this.rotation = function (t) {
        b.rotation = t
    };
    this.pulseAnimation = function () {
        createjs.Tween.get(b, {
            loop: -1
        }).to({
            scaleX: .9 * f,
            scaleY: .9 * e
        }, 850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: e
        }, 650, createjs.Ease.quadIn)
    };
    this.trebleAnimation = function () {
        createjs.Tween.get(b).to({
            rotation: 5
        },
            75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function () {
            n.trebleAnimation()
        })
    };
    var q = g;
    var n = this;
    this._init(a, l, c, g);
    return this
}
function CMenu() {
    var a,
    l,
    c,
    g,
    e,
    f,
    d,
    h,
    k,
    b,
    p,
    q,
    n,
    t,
    u = null,
    A = null;
    this._init = function () {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var z = s_oSpriteLibrary.getSprite("logo_menu");
        n = createBitmap(z);
        n.x = CANVAS_WIDTH_HALF;
        n.y = .5 * -z.width;
        n.regX = .5 * z.width;
        n.regY = .5 * z.height;
        n.rotation = -15;
        s_oStage.addChild(n);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            z = s_oSpriteLibrary.getSprite("icon_audio"), e = CANVAS_WIDTH - z.width / 2 + 15, f = z.height / 2 + 30, q = new CToggle(e, f, z, s_bAudioActive,
                    s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        z = s_oSpriteLibrary.getSprite("but_play");
        h = new CGfxButton(CANVAS_WIDTH / 2, 1100, z);
        h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        h.pulseAnimation();
        z = s_oSpriteLibrary.getSprite("but_info");
        c = z.width / 2 + 30;
        g = z.height / 2 + 30;
        b = new CGfxButton(c, g, z);
        b.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        z = window.document;
        var E = z.documentElement;
        u = E.requestFullscreen || E.mozRequestFullScreen || E.webkitRequestFullScreen || E.msRequestFullscreen;
        A = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (u = !1);
        u && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), a = c + z.width / 2 + 10, l = g, t = new CToggle(a, l, z, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(p);
        createjs.Tween.get(n).wait(300).to({
            rotation: 0
        }, 1E3, createjs.Ease.cubicOut);
        createjs.Tween.get(n).wait(300).to({
            y: CANVAS_HEIGHT_HALF - 100
        }, 1E3, createjs.Ease.bounceOut);
        createjs.Tween.get(p).to({
            alpha: 0
        }, 1E3).call(function () {
            s_oStage.removeChild(p)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function () {
        h.unload();
        h = null;
        b.unload();
        b = null;
        k && (k.unload(), k = null);
        u && screenfull.isEnabled && t.unload();
        s_oStage.removeChild(d);
        d = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            q.unload(), q = null;
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.exitFromCredits = function () {};
    this.refreshButtonPos = function () {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(e - s_iOffsetX, f + s_iOffsetY);
        u && screenfull.isEnabled && t.setPosition(a + s_iOffsetX, l + s_iOffsetY);
        b.setPosition(c + s_iOffsetX, g + s_iOffsetY)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function () {
        u && screenfull.isEnabled && t.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? A.call(window.document) : u.call(window.document.documentElement);
        sizeHandler()
    };
    this._onCredits = function () {
        new CCreditsPanel
    };
    this._onButPlayRelease = function () {
        this.unload();
        s_oMain.gotoGame()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CGame(a) {
    function l(D) {
        A || z || s_oGameField.isAnimFullLines() || (37 === D.keyCode ? (s_oGame.onLeft(), A = !0) : 39 === D.keyCode ? (s_oGame.onRight(), A = !0) : 38 === D.keyCode && (s_oGame.onUp(), A = !0));
        if (40 === D.keyCode && !1 === E && !z)
            s_oGame.onDown();
        D.preventDefault();
        return !1
    }
    function c(D) {
        !A || z || s_oGameField.isAnimFullLines() || (37 === D.keyCode ? (A = !1, s_oGame.dirKeyUp()) : 39 === D.keyCode ? (A = !1, s_oGame.dirKeyUp()) : 38 === D.keyCode ? A = !1 : 80 === D.keyCode ? A = !1 : 32 === D.keyCode && (A = !1));
        if (40 === D.keyCode && !0 === E)
            s_oGame.onDownKeyUp();
        D.preventDefault();
        return !1
    }
    var g,
    e,
    f,
    d,
    h,
    k,
    b,
    p,
    q,
    n,
    t,
    u,
    A,
    z,
    E = !1,
    r = !1,
    J,
    F,
    B,
    y;
    this._init = function () {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        this.setPause(!0);
        g = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(g);
        b = new CEdges;
        this.createGameContainer();
        A = !1;
        f = new CGameField;
        u = t = n = p = 0;
        J = F = TIME_REFRESH_GAME;
        y = [];
        for (var D = 0; D < BLOCKS_TYPE.length; D++)
            for (; 0 < BLOCKS_OCCURENCE[D]; D++)
                y.push(D);
        this.createBlock(y[Math.floor(Math.random() * y.length)]);
        this.nextType();
        e = new CInterface(q);
        e.refreshLevel(n + 1);
        this.canInput(!0);
        b.createIEdge();
        $(s_oMain).trigger("start_level", 1);
        e.showHelpPanel();
        s_bMobile || (document.onkeydown = l, document.onkeyup = c)
    };
    this.createGameContainer = function () {
        h = new createjs.Container;
        s_oStage.addChild(h)
    };
    this.nextType = function () {
        q = y[Math.floor(Math.random() * y.length)]
    };
    this.setPause = function (D) {
        z = D
    };
    this._onExitHelpPanel = function () {
        this.setPause(!1);
        e.unloadHelp()
    };
    this.onExit = function () {
        setVolume("soundtrack", 1);
        s_oGame.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_level",
            1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.restartGame = function () {
        f.unload();
        f = null;
        h.removeAllChildren();
        d = null;
        r = !1;
        this.nextType();
        e.refreshNextBlock(q);
        f = new CGameField;
        this.createBlock(y[Math.floor(Math.random() * y.length)]);
        F = TIME_REFRESH_GAME;
        u = t = n = p = 0;
        e.refreshLevel(n + 1);
        e.refreshLines(t);
        e.refreshScore(p);
        z = !1
    };
    this.unload = function () {
        s_bMobile || (document.onkeydown = null, document.onkeyup = null);
        f.unload();
        f = null;
        e.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onLeft = function () {
        d.getReplace() || (k = s_oGame.onLeft, r = !0, B = TIME_REFRESH_DIRECTION, 0 < d.getCol() && !f.checkDirection(d, LEFT) && (d.setCol(d.getCol() - 1), d.refreshCellPosition()))
    };
    this.onRight = function () {
        d.getReplace() || (k = s_oGame.onRight, r = !0, B = TIME_REFRESH_DIRECTION, d.getCol() < GRID_X - d.getWidth() && !f.checkDirection(d, RIGHT) && (d.setCol(d.getCol() + 1), d.refreshCellPosition()))
    };
    this.onUp = function () {
        playSound("shift_piece", 1, !1);
        d.setOrientation(d.getOrientation() + 90);
        d.refreshCellPosition()
    };
    this.onDown = function () {
        E = !0;
        d.getReplace() || d.down();
        J = TIME_REFRESH_GAME_KEY_DOWN
    };
    this.calculateScore = function (D) {
        this.addScore(SCORE_LINE[D - 1] * (n + 1))
    };
    this.checkForNewLevel = function (D) {
        t += D;
        u += D;
        e.refreshLines(t);
        u >= LEVEL_UP_LINES && (n++, u -= LEVEL_UP_LINES, e.refreshLevel(n + 1), D = F - STEP_DECREASE, D >= MIN_REFRESH_GAME && (F = D), STEP_DECREASE -= .05, .05 > STEP_DECREASE && (STEP_DECREASE = .05))
    };
    this.canInput = function (D) {};
    this.addScore = function (D) {
        p += D;
        e.refreshScore(p)
    };
    this.dirKeyUp = function () {
        r = !1
    };
    this.onDownKeyUp =
    function () {
        E = !1;
        J = F
    };
    this.createBlock = function (D) {
        var x = s_oSpriteLibrary.getSprite("cell_" + D);
        d = new CBlock(D, x, h)
    };
    this.getContainerGame = function () {
        return h
    };
    this.gameOver = function () {
        this.setPause(!0);
        s_aSounds.game_over.on("end", function () {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
        });
        playSound("game_over", 1, !1);
        setVolume("soundtrack", 0);
        $(s_oMain).trigger("end_level", 1);
        e.gameOver(p, n + 1, t)
    };
    this.keysDirectionPress = function () {
        r && k()
    };
    this.update = function () {
        if (!1 === z && !s_oGameField.isAnimFullLines()) {
            if (!0 ===
                d.getReplace() && (d = null, this.createBlock(q), this.nextType(), e.refreshNextBlock(q), s_oGameField.checkDirection(d))) {
                this.gameOver();
                return
            }
            0 > J ? (d.down(), J = E ? TIME_REFRESH_GAME_KEY_DOWN : 1E3 * F) : J -= s_iTimeElaps;
            0 > B ? (B = TIME_REFRESH_DIRECTION, this.keysDirectionPress()) : r && (B -= FPS_TIME)
        }
    };
    s_oGame = this;
    LEVEL_UP_LINES = a.level_up_lines;
    MIN_REFRESH_GAME = a.min_refresh_game;
    SCORE_LINE = a.score_line;
    TIME_REFRESH_GAME = a.start_refresh_game;
    STEP_DECREASE = a.step_decrease_refresh_game;
    BLOCKS_OCCURENCE = a.blocks_occurence;
    NUM_LEVEL_FOR_ADS = a.num_levels_for_ads;
    TIME_REFRESH_GAME_KEY_DOWN = MIN_REFRESH_GAME;
    this._init()
}
var s_oGame, s_oScrollStage;
function CInterface(a) {
    var l,
    c,
    g,
    e,
    f,
    d,
    h,
    k,
    b,
    p = null,
    q = null,
    n,
    t,
    u,
    A,
    z,
    E,
    r,
    J,
    F,
    B,
    y,
    D,
    x,
    N = null,
    V;
    this._init = function (C) {
        var L = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - L.width / 2 - 30;
        e = L.height / 2 + 30;
        u = new CGfxButton(g, e, L);
        u.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var O = s_oSpriteLibrary.getSprite("but_pause");
        h = CANVAS_WIDTH - O.width / 2 - L.width - 30 - 15;
        k = O.height / 2 + 30;
        t = new CGfxButton(h, k, O);
        t.addEventListener(ON_MOUSE_UP, this.onButPauseRelease, this);
        var R = s_oSpriteLibrary.getSprite("but_fullscreen");
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var W = s_oSpriteLibrary.getSprite("icon_audio");
            f = CANVAS_WIDTH - W.width / 2 - O.width - L.width / 2 - 30 - 30;
            d = W.height / 2 + 30;
            n = new CToggle(f, d, W, s_bAudioActive, s_oStage);
            n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            l = f - R.width / 2 - 10;
            c = d
        } else
            l = CANVAS_WIDTH - R.width / 2 - O.width - L.width / 2 - 30 - 30, c = R.height / 2 + 30;
        L = window.document;
        O = L.documentElement;
        p = O.requestFullscreen || O.mozRequestFullScreen || O.webkitRequestFullScreen || O.msRequestFullscreen;
        q = L.exitFullscreen ||
            L.mozCancelFullScreen || L.webkitExitFullscreen || L.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (p = !1);
        p && screenfull.isEnabled && (V = new CToggle(l, c, R, s_bFullscreen, s_oStage), V.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        R = s_oSpriteLibrary.getSprite("next_board");
        B = new CNextBlockBoard(800, 417, R, C, s_oStage);
        C = s_oSpriteLibrary.getSprite("info_board");
        y = new CInfoBoard(800, 757, C, s_oStage);
        C = s_oSpriteLibrary.getSprite("score_board");
        D = new CScoreBoard(800, 1051, C, s_oStage);
        C = s_oSpriteLibrary.getSprite("small_logo");
        b = {
            x: .5 * C.width + 30,
            y: .5 * C.height + 30
        };
        x = createBitmap(C);
        x.x = b;
        x.y = b;
        x.regX = .5 * C.width;
        x.regY = .5 * C.height;
        s_oStage.addChild(x);
        !0 === SHOW_FPS && (z = new createjs.Text("", "normal 60px " + PRIMARY_FONT, "#ffd800"), z.textAlign = "center", z.textBaseline = "alphabetic", z.x = .5 * CANVAS_WIDTH + -330, z.y = .5 * CANVAS_HEIGHT + 550, E = new createjs.Text("", "normal 60px " + PRIMARY_FONT, "#025cce"), E.textAlign = "center", E.textBaseline = "alphabetic", E.x = .5 * CANVAS_WIDTH + -328, E.y = .5 * CANVAS_HEIGHT + 552, s_oStage.addChild(E, z));
        s_bMobile && (N =
                new CController);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function () {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(f - s_iOffsetX, d + s_iOffsetY);
        p && screenfull.isEnabled && V.setPosition(l - s_iOffsetX, c + s_iOffsetY);
        t.setPosition(h - s_iOffsetX, k + s_iOffsetY);
        u.setPosition(g - s_iOffsetX, e + s_iOffsetY);
        var C = B.getStartPos();
        B.setPosition(C.x - s_iOffsetX, C.y);
        C = y.getStartPos();
        y.setPosition(C.x - s_iOffsetX, C.y);
        C = D.getStartPos();
        D.setPosition(C.x - s_iOffsetX, C.y);
        x.x = b.x + s_iOffsetX;
        x.y = b.y + s_iOffsetY;
        null !== N && (C = N.getStartPositionControlLeft(), N.setPositionControlLeft(C.x + s_iOffsetX, C.y - s_iOffsetY), C = N.getStartPositionControlRight(), N.setPositionControlRight(C.x + s_iOffsetX, C.y - s_iOffsetY), C = N.getStartPositionControlUp(), N.setPositionControlUp(C.x - s_iOffsetX, C.y - s_iOffsetY), C = N.getStartPositionControlDown(), N.setPositionControlDown(C.x + s_iOffsetX, C.y - s_iOffsetY))
    };
    this.finishGame = function (C) {
        var L = s_oSpriteLibrary.getSprite("msg_box");
        J = new CCongratulations(L, C)
    };
    this._onButNextLevelRelease =
    function () {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        r = null;
        s_oGame.nextLevel()
    };
    this._onButSpaceBarRelease = function () {
        r && r._onContinue()
    };
    this._onButMenuRelease = function () {
        J && (J.unload(), J = null);
        s_oGame.onExit()
    };
    this.refreshScore = function (C) {
        D.refreshScore(C)
    };
    this.refreshLevel = function (C) {
        y.refreshLevel(C)
    };
    this.refreshLines = function (C) {
        y.refreshLines(C)
    };
    this.unloadPause = function () {
        F.unload();
        F = null
    };
    this.onButPauseRelease = function () {
        F = new CPause
    };
    this.onContinuePauseRelease = function () {
        F &&
        F._onLeavePause()
    };
    this.showHelpPanel = function () {
        var C = s_oSpriteLibrary.getSprite("msg_box");
        A = new CHelpPanel(0, 0, C)
    };
    this.gameOver = function (C, L, O) {
        var R = s_oSpriteLibrary.getSprite("msg_box");
        new CGameOver(R, C, L, O)
    };
    this.unloadHelp = function () {
        A.unload();
        A = null
    };
    this._onButRestartLevelRelease = function () {
        s_oGame.restartLevelFromGameOver();
        u.block(!1)
    };
    this.unload = function () {
        u.unload();
        u = null;
        t.unload();
        t = null;
        null !== N && (N.unload(), N = null);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            n.unload(), n = null;
        p && screenfull.isEnabled && V.unload();
        s_oInterface = null
    };
    this.refreshNextBlock = function (C) {
        B.refreshBlock(C)
    };
    this.refreshFPS = function () {
        var C = Math.ceil(createjs.Ticker.getMeasuredFPS());
        z.text = "FPS:" + C;
        E.text = "FPS:" + C
    };
    this._onExit = function () {
        (new CAreYouSurePanel(s_oStage)).show()
    };
    this._onButRestartLevelRelease = function () {
        s_oGame.restartGame()
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function () {
        p && screenfull.isEnabled && V.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? q.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;
function CHelpPanel(a, l, c) {
    var g,
    e,
    f,
    d,
    h,
    k = !1;
    this._init = function (b, p, q) {
        d = new createjs.Container;
        d.x = b;
        d.y = p;
        s_oStage.addChild(d);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .7;
        d.addChild(f);
        e = createBitmap(q);
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        e.regX = .5 * q.width;
        e.regY = .5 * q.height;
        d.addChild(e);
        g = new CTLText(d, CANVAS_WIDTH / 2 - 300, .5 * CANVAS_HEIGHT - 230, 600, 50, 50, "center", "#0025c2", PRIMARY_FONT, 1, 0, 0, TEXT_HOW_TO_PLAY, !0, !0, !1, !1);
        g.setOutline(4);
        new CTLText(d, CANVAS_WIDTH / 2 - 300, .5 * CANVAS_HEIGHT - 230, 600, 50, 50, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_HOW_TO_PLAY, !0, !0, !1, !1);
        h = new createjs.Container;
        if (s_bMobile) {
            var n = s_oSpriteLibrary.getSprite("arrow");
            var t = s_oSpriteLibrary.getSprite("arrow");
            var u = s_oSpriteLibrary.getSprite("arrow");
            var A = s_oSpriteLibrary.getSprite("but_rotation")
        } else
            n = s_oSpriteLibrary.getSprite("key_left"), t = s_oSpriteLibrary.getSprite("key_up"), u = s_oSpriteLibrary.getSprite("key_right"), A = s_oSpriteLibrary.getSprite("key_down");
        b = this.createKey(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 100, s_oSpriteLibrary.getSprite("block_blur"));
        p = this.createKey(CANVAS_WIDTH_HALF - 125, CANVAS_HEIGHT_HALF + 30, s_oSpriteLibrary.getSprite("block_down"));
        q = this.createKey(CANVAS_WIDTH_HALF + 125, CANVAS_HEIGHT_HALF + 30, s_oSpriteLibrary.getSprite("block_rotation"));
        n = this.createKey(CANVAS_WIDTH_HALF - 135, CANVAS_HEIGHT_HALF - 90, n);
        t = this.createKey(CANVAS_WIDTH_HALF + 125, CANVAS_HEIGHT_HALF + 170, t);
        u = this.createKey(CANVAS_WIDTH_HALF + 135, CANVAS_HEIGHT_HALF - 90, u);
        A = this.createKey(CANVAS_WIDTH_HALF - 125, CANVAS_HEIGHT_HALF + 170, A);
        s_bMobile && (n.scaleX = -1, t.rotation = 270);
        h.addChild(n, t, u, A, b, p, q);
        d.addChild(h);
        s_bMobile || (d.cursor = "pointer");
        var z = this;
        d.on("pressup", function () {
            z._onExitHelp()
        })
    };
    this.createKey = function (b, p, q) {
        var n = createBitmap(q);
        n.x = b;
        n.y = p;
        n.regX = .5 * q.width;
        n.regY = .5 * q.height;
        return n
    };
    this.unload = function () {
        createjs.Tween.removeAllTweens();
        createjs.Tween.get(d).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).call(function () {
            s_oStage.removeChild(d)
        });
        var b = this;
        d.off("pressup", function () {
            b._onExitHelp()
        })
    };
    this._onExitHelp = function () {
        k || (k = !0, this.unload(), s_oGame._onExitHelpPanel())
    };
    this._init(a, l, c);
    return this
}
function CGameOver(a, l, c, g) {
    var e,
    f,
    d,
    h,
    k,
    b;
    this._init = function (p, q, n, t) {
        s_oGame.setPause(!0);
        e = new createjs.Container;
        f = new createjs.Container;
        f.y = -CANVAS_WIDTH_HALF - .5 * p.width;
        d = createBitmap(p);
        d.x = .5 * CANVAS_WIDTH;
        d.y = .5 * CANVAS_HEIGHT;
        d.regX = .5 * p.width;
        d.regY = .5 * p.height;
        f.addChild(d);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = 0;
        h.on("click", function () {});
        e.addChild(h);
        p = .5 * CANVAS_WIDTH;
        var u = .5 * CANVAS_HEIGHT - 75;
        (new CTLText(f, p - 300, u - 150,
                600, 60, 60, "center", "#0025c2", PRIMARY_FONT, 1, 0, 0, TEXT_GAMEOVER, !0, !0, !1, !1)).setOutline(OUTLINE_TEXT);
        new CTLText(f, p - 300, u - 150, 600, 60, 60, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_GAMEOVER, !0, !0, !1, !1);
        (new CTLText(f, p - 300, u - 25, 250, 80, 40, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_LEVEL + "\n" + n, !0, !0, !0, !1)).setOutline(OUTLINE_TEXT);
        new CTLText(f, p - 300, u - 25, 250, 80, 40, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_LEVEL + "\n" + n, !0, !0, !0, !1);
        (new CTLText(f, p + 50, u - 25, 250, 80, 40, "center", "#025cce", PRIMARY_FONT,
                1, 0, 0, TEXT_LINES + "\n" + t, !0, !0, !0, !1)).setOutline(OUTLINE_TEXT);
        new CTLText(f, p + 50, u - 25, 250, 80, 40, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_LINES + "\n" + t, !0, !0, !0, !1);
        (new CTLText(f, p - 150, u + 100, 300, 120, 40, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_SCORE_GAMEOVER + "\n\n" + q, !0, !0, !0, !1)).setOutline(4);
        new CTLText(f, p - 150, u + 100, 300, 120, 40, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_SCORE_GAMEOVER + "\n\n" + q, !0, !0, !0, !1);
        e.addChild(f);
        s_oStage.addChild(e);
        n = s_oSpriteLibrary.getSprite("but_restart");
        t = s_oSpriteLibrary.getSprite("but_home");
        k = new CGfxButton(CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 + 150, t, f);
        k.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        b = new CGfxButton(CANVAS_WIDTH / 2 + 250, CANVAS_HEIGHT / 2 + 150, n, f);
        b.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        b.pulseAnimation();
        createjs.Tween.get(h).to({
            alpha: .5
        }, 750, createjs.Ease.cubicOut);
        createjs.Tween.get(f).to({
            y: 0
        }, 1500, createjs.Ease.bounceOut).call(function () {
            s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
        });
        $(s_oMain).trigger("save_score",
            q);
        $(s_oMain).trigger("share_event", q)
    };
    this.unload = function () {
        h.off("click", function () {});
        k && (k.unload(), k = null);
        s_oStage.removeChild(e)
    };
    this._onMenu = function () {
        this.unload();
        s_oInterface._onButMenuRelease()
    };
    this._onRestart = function () {
        this.unload();
        s_oInterface._onButRestartLevelRelease()
    };
    this._init(a, l, c, g);
    return this
}
function CPause() {
    var a,
    l,
    c;
    this._init = function () {
        a = new createjs.Container;
        a.alpha = 0;
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        l.alpha = 1;
        l.on("click", function () {});
        a.addChild(l);
        var g = s_oSpriteLibrary.getSprite("pause_text");
        c = createBitmap(g);
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF - 200;
        c.regX = .5 * g.width;
        c.regY = .5 * g.height;
        a.addChild(c);
        g = s_oSpriteLibrary.getSprite("but_continue");
        (new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 100, g, a)).addEventListener(ON_MOUSE_UP, this._onLeavePause,
            this);
        s_oStage.addChild(a);
        this.onPause(!0);
        createjs.Tween.get(a).to({
            alpha: 1
        }, 300, createjs.quartOut).call(function () {
            createjs.Ticker.paused = !0
        })
    };
    this.onPause = function (g) {
        s_oGame.setPause(g);
        s_oGame.canInput(!g)
    };
    this.unload = function () {
        l.off("click", function () {});
        s_oStage.removeChild(a)
    };
    this._onLeavePause = function () {
        createjs.Ticker.paused = !1;
        createjs.Tween.removeTweens(a);
        var g = this;
        createjs.Tween.get(a).to({
            alpha: 0
        }, 300, createjs.quartIn).call(function () {
            g.onPause(!1);
            s_oInterface.unloadPause()
        })
    };
    this._init();
    return this
}
function CAreYouSurePanel(a) {
    var l,
    c,
    g,
    e,
    f,
    d;
    this._init = function () {
        f = new createjs.Container;
        f.visible = !1;
        h.addChild(f);
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = .7;
        d.on("click", function () {});
        f.addChild(d);
        var k = s_oSpriteLibrary.getSprite("msg_box");
        e = createBitmap(k);
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        e.regX = .5 * k.width;
        e.regY = .5 * k.height;
        f.addChild(e);
        e.on("click", function () {});
        l = new CTLText(f, CANVAS_WIDTH / 2 - 300, .5 * CANVAS_HEIGHT - 150,
                600, 150, 70, "center", "#0025c2", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1);
        l.setOutline(5);
        new CTLText(f, CANVAS_WIDTH / 2 - 300, .5 * CANVAS_HEIGHT - 150, 600, 150, 70, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1);
        c = new CGfxButton(CANVAS_WIDTH / 2 + 170, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_yes"), f);
        c.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        g = new CGfxButton(CANVAS_WIDTH / 2 - 170, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_not"), f);
        g.addEventListener(ON_MOUSE_UP,
            this._onButNo, this)
    };
    this.onPause = function (k) {
        s_oGame.setPause(k);
        createjs.Ticker.paused = k;
        !0 === k ? s_oGame.canInput(!1) : s_oGame.canInput(!0)
    };
    this.show = function () {
        this.onPause(!0);
        f.visible = !0
    };
    this.unload = function () {
        g.unload();
        c.unload();
        d.off("click", function () {})
    };
    this._onButYes = function () {
        this.unload();
        this.onPause(!1);
        s_oGame.onExit()
    };
    this._onButNo = function () {
        this.unload();
        this.onPause(!1);
        f.visible = !1
    };
    var h = a;
    this._init()
}
function CCreditsPanel() {
    var a,
    l,
    c,
    g,
    e,
    f,
    d,
    h,
    k;
    this._init = function () {
        k = new createjs.Container;
        k.y = -130;
        s_oStage.addChild(k);
        var b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 130, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = .7;
        k.addChild(b);
        b = s_oSpriteLibrary.getSprite("msg_box");
        a = createBitmap(b);
        k.addChild(a);
        a.x = .5 * CANVAS_WIDTH;
        a.y = .5 * CANVAS_HEIGHT + 130;
        a.regX = .5 * b.width;
        a.regY = .5 * b.height;
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha =
            .01;
        f.on("click", this._onLogoButRelease);
        s_bMobile || (f.cursor = "pointer");
        k.addChild(f);
        b = s_oSpriteLibrary.getSprite("but_exit");
        c = new CGfxButton(800, 640, b, k);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        e = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, "#025cce");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = 770;
        e.outline = OUTLINE_TEXT;
        k.addChild(e);
        g = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, "#ffd800");
        g.textAlign = "center";
        g.textBaseline =
            "alphabetic";
        g.x = CANVAS_WIDTH / 2;
        g.y = e.y;
        k.addChild(g);
        b = s_oSpriteLibrary.getSprite("logo_ctl");
        l = createBitmap(b);
        l.regX = b.width / 2;
        l.regY = b.height / 2;
        l.x = CANVAS_WIDTH / 2;
        l.y = 850;
        k.addChild(l);
        h = new createjs.Text(TEXT_LINK1, "40px " + PRIMARY_FONT, "#025cce");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 980;
        h.outline = OUTLINE_TEXT;
        k.addChild(h);
        d = new createjs.Text(TEXT_LINK1, "40px " + PRIMARY_FONT, "#ffd800");
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = CANVAS_WIDTH / 2;
        d.y = h.y;
        k.addChild(d);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function (b, p) {};
    this.unload = function () {
        f.off("click", this._onLogoButRelease);
        c.unload();
        c = null;
        s_oStage.removeChild(k);
        s_oMenu.exitFromCredits()
    };
    this._onLogoButRelease = function () {
        window.open("http://www.w3technic.com/game", "_blank")
    };
    this._init()
}
function CBlock(a, l, c) {
    var g = 0,
    e,
    f,
    d = !1,
    h,
    k = BLOCKS_TYPE[a];
    this._init = function (b) {
        f = Math.floor(GRID_X_HALF - this.getWidth() / 2);
        e = 0;
        h = this.createSpriteBlock(b);
        this.refreshCellPosition();
        this.orderCellsChildIndex()
    };
    this.getHeight = function () {
        return k.length
    };
    this.getWidth = function () {
        return k[0].length
    };
    this.createSpriteBlock = function (b) {
        for (var p = [], q = f, n = e, t = s_oGameField.getXByCol(q), u = s_oGameField.getYByRow(n), A = k.length * k[0].length, z = 0, E = 0; E < k.length; E++) {
            for (var r = 0; r < k[E].length; r++)
                1 === k[E][r] &&
                (p[z] = this.createCell(t, u, b, n, q, 0), z++), q++, t = s_oGameField.getXByCol(q), A--;
            n++;
            q = f;
            u = s_oGameField.getYByRow(n);
            t = s_oGameField.getXByCol(q)
        }
        return p
    };
    this.createCell = function (b, p, q, n, t, u) {
        b = new CCell(b, p, u, q, c);
        b.setRow(n);
        b.setCol(t);
        return b
    };
    this.orderCellsChildIndex = function () {
        for (var b = c.numChildren - 1, p = 0; p < h.length; p++)
            h[p].setChildIndex(b), b--
    };
    this.updateRenderOffsets = function (b) {
        b.x++;
        b.x >= this.getWidth() && (b.y++, b.x = 0);
        return b
    };
    this.pieceFilled = function (b) {
        b = this.stepToCooordinates(b);
        return !!k[b.y][b.x]
    };
    this.stepToCooordinates = function (b) {
        var p = {
            x: 0,
            y: 0
        };
        p.x = b % this.getWidth();
        p.y = Math.floor(b / this.getWidth());
        return p
    };
    this.down = function () {
        s_oGameField.checkHitBottom(this, DOWN);
        !0 !== d && (e += 1, this.refreshCellPosition())
    };
    this.refreshCellPosition = function () {
        for (var b = f, p = e, q = 0, n = s_oGameField.getXByCol(b), t = s_oGameField.getYByRow(p), u = 0; u < k.length; u++) {
            for (var A = 0; A < k[u].length; A++)
                1 === k[u][A] && (h[q].setPosition(n, t), h[q].setRow(p), h[q].setCol(b), h[q].setChildIndex(s_oGameField.getChildID(p,
                            b)), q++), b++, b < GRID_X && (n = s_oGameField.getXByCol(b));
            if (p + 1 > GRID_Y - 1)
                break;
            p++;
            b = f;
            t = s_oGameField.getYByRow(p);
            n = s_oGameField.getXByCol(b)
        }
    };
    this.setReplace = function (b) {
        d = b
    };
    this.getReplace = function () {
        return d
    };
    this.getCol = function () {
        return f
    };
    this.getRow = function () {
        return e
    };
    this.getBlock = function () {
        return h
    };
    this.setRow = function (b) {
        e = b
    };
    this.setCol = function (b) {
        f = b
    };
    this.__rotateBlock = function (b) {
        for (var p = [], q = b[0].length - 1; -1 < q; q--) {
            for (var n = [], t = 0; t < b.length; t++)
                n.push(b[t][q]);
            p.push(n)
        }
        return p
    };
    this.getOrientation = function () {
        return g
    };
    this.setOrientation = function (b) {
        360 === b && (b = 0);
        var p = this.__rotateBlock(k),
        q = s_oGameField.badRotation(p, this);
        1 !== q && (0 === q ? (g = b, k = p) : 2 === q && this.setOrientation(b))
    };
    this.unload = function () {
        for (var b = 0; b < h.length; b++)
            h[b].unload();
        h = null
    };
    this._init(l);
    return this
}
function CGameField() {
    var a = [],
    l = !1;
    this._init = function () {
        s_bMobile && (START_GRID_Y = CANVAS_HEIGHT_HALF - GRID_Y * GRID_Y);
        for (var c = START_GRID_X, g = START_GRID_Y, e = 0; e < GRID_Y; e++) {
            a[e] = [];
            for (var f = 0; f < GRID_X; f++)
                a[e][f] = {
                    x: c,
                    y: g,
                    occupied: !1,
                    cell: null,
                    childID: null
                },
            this.createCellTest(c, g),
            c += CELL_SIZE + CELL_OFFSET.x;
            g += CELL_SIZE + CELL_OFFSET.y;
            c = START_GRID_X
        }
        this.setID()
    };
    this.createCellTest = function (c, g) {
        if (SHOW_CELL) {
            var e = s_oSpriteLibrary.getSprite("cell");
            var f = createBitmap(e);
            f.x = c;
            f.y = g;
            f.regX = .5 * e.width;
            f.regY = .5 * e.height;
            s_oStage.addChild(f);
            s_oStage.setChildIndex(f, 1)
        }
    };
    this.setID = function () {
        for (var c = s_oSpriteLibrary.getSprite("cell_0"), g = GRID_Y - 1; -1 < g; g--)
            for (var e = GRID_X - 1; -1 < e; e--)
                a[g][e].childID = new CCell(a[g][e].x, a[g][e].y, 0, c, s_oGame.getContainerGame()), a[g][e].childID.setVisible(!1)
    };
    this.getMiddleGridX = function () {
        return a[0][GRID_X_HALF].x
    };
    this.getStartGridY = function () {
        return a[0][0].y
    };
    this.getXByCol = function (c) {
        return a[0][c].x
    };
    this.getYByRow = function (c) {
        return a[c][0].y
    };
    this.setCellState =
    function (c, g, e) {
        a[c][g].occupied = e
    };
    this.getCellState = function (c, g) {
        return a[c][g].occupied
    };
    this.checkDirection = function (c, g) {
        for (var e = !1, f = {
                x: 0,
                y: 0
            }, d, h, k = 0; k < c.getWidth() * c.getHeight(); k++) {
            d = c.getCol() + f.x;
            h = c.getRow() + f.y;
            switch (g) {
            case UP:
                h--;
                break;
            case RIGHT:
                d++;
                break;
            case DOWN:
                h++;
                break;
            case LEFT:
                d--
            }
            if (h > GRID_Y - 1)
                return !0;
            if (a[h][d].occupied && (d = c.pieceFilled(k))) {
                e = !0;
                break
            }
            f = c.updateRenderOffsets(f)
        }
        return e
    };
    this.getChildID = function (c, g) {
        return a[c][g].childID.getChildIndex()
    };
    this.checkHitBottom =
    function (c) {
        var g = this.checkDirection(c, DOWN);
        c.getRow() + c.getHeight() >= a.length && (g = !0);
        if (g) {
            c.setReplace(!0);
            c = c.getBlock();
            for (g = 0; g < c.length; g++)
                a[c[g].getRow()][c[g].getCol()].occupied = !0, a[c[g].getRow()][c[g].getCol()].cell = c[g];
            this.checkForFullLines()
        }
    };
    this.badRotation = function (c, g) {
        for (var e = 0, f = 0, d = 0, h, k, b = 0; b < c[0].length * c.length; b++) {
            h = g.getCol() + f;
            k = g.getRow() + d;
            if (k > GRID_Y - 1)
                return 1;
            if (h > GRID_X - 1)
                return g.setCol(g.getCol() - g.getWidth() + 1), 2;
            if (a[k][h].occupied) {
                e = 1;
                break
            }
            f++;
            f >= c[0].length &&
            (d++, f = 0)
        }
        return e
    };
    this.isAnimFullLines = function () {
        return l
    };
    this.checkForFullLines = function () {
        for (var c = 0, g, e = [], f = 0, d = 0; d < a.length; d++) {
            for (var h = g = 0; h < a[0].length; h++)
                a[d][h].occupied && g++;
            if (g === a[0].length) {
                c++;
                e[f] = d;
                f++;
                var k = DELAY_CELL_DESTROY_MS;
                for (h = 0; h < a[0].length; h++)
                    a[d][h].occupied = !1, this.animCellDestroy(a[d][h], k), k += DELAY_CELL_DESTROY_MS
            }
        }
        0 < c && (l = !0, playSound("delete_lines", 1, !1), k += 2 * CELL_DESTROY_MS, createjs.Tween.get(this).wait(k).call(function () {
                s_oGame.calculateScore(c);
                s_oGame.checkForNewLevel(c);
                this.checkEmptyRowForFall(e);
                l = !1
            }))
    };
    this.animCellDestroy = function (c, g) {
        c.cell.changeState(1);
        createjs.Tween.get(c.cell.getSprite()).wait(g).to({
            scaleX: 0,
            scaleY: 0
        }, CELL_DESTROY_MS, createjs.Ease.cubicOut).call(function () {
            !0 === c.occupied && c.cell.unload()
        })
    };
    this.checkEmptyRowForFall = function (c) {
        for (var g = 0, e = 0; e < c.length; e++)
            for (var f = 0; f < a[e].length; f++)
                for (var d = c[e] - 1; -1 < d; d--)
                    !0 === a[d][f].occupied && (a[d][f].occupied = !1, a[d + 1][f].cell = a[d][f].cell, a[d][f].cell = null, a[d + 1][f].occupied = !0);
        for (d =
                a[e].length - 1; -1 < d; d--)
            for (e = a.length - 1; -1 < e; e--)
                !0 === a[e][d].occupied && (a[e][d].cell.setChildIndex(this.getChildID(e, d)), this.animateLineDown(a[e][d].cell.getSprite(), a[e][d].y, g), g += DELAY_LINE_DOWN)
    };
    this.animateLineDown = function (c, g, e) {
        createjs.Tween.get(c).wait(e).to({
            y: g
        }, LINE_DOWN_TIME, createjs.Ease.cubicOut)
    };
    this.unload = function () {
        for (var c = 0; c < a.length; c++)
            for (var g = 0; g < a[0].length; g++)
                a[c][g].occupied && a[c][g].cell.unload();
        s_oGameField = a = null
    };
    this._init();
    s_oGameField = this;
    return this
}
var s_oGameField;
function CCell(a, l, c, g, e) {
    var f,
    d,
    h;
    this._init = function (k, b, p, q) {
        f = createBitmap(q);
        f.x = k;
        f.y = b;
        k = new createjs.SpriteSheet({
            images: [q],
            frames: {
                width: q.width / 2,
                height: q.height,
                regX: q.width / 2 / 2,
                regY: q.height / 2 + p
            },
            animations: {
                normal: [0],
                complete: [1]
            }
        });
        f = createSprite(k, "normal", q.width / 2 / 2, q.height / 2 + p, q.width / 2, q.height);
        f.stop();
        e.addChild(f)
    };
    this.setPosition = function (k, b) {
        f.x = k;
        f.y = b
    };
    this.getY = function () {
        return f.y
    };
    this.getX = function () {
        return f.x
    };
    this.setRow = function (k) {
        d = k
    };
    this.setCol = function (k) {
        h =
            k
    };
    this.getRow = function () {
        return d
    };
    this.getCol = function () {
        return h
    };
    this.setRegY = function (k) {
        f.regY = k
    };
    this.changeState = function (k) {
        f.gotoAndStop(k)
    };
    this.getSprite = function () {
        return f
    };
    this.getRegY = function () {
        return f.regY
    };
    this.setVisible = function (k) {
        f.visible = k
    };
    this.getChildIndex = function () {
        return e.getChildIndex(f)
    };
    this.setChildIndex = function (k) {
        e.setChildIndex(f, k)
    };
    this.unload = function () {
        e.removeChild(f)
    };
    this._init(a, l, c, g);
    return this
}
function CNextBlockBoard(a, l, c, g, e) {
    var f,
    d,
    h,
    k,
    b,
    p,
    q,
    n;
    this._init = function (u, A, z, E) {
        n = {
            x: u,
            y: A
        };
        h = new createjs.Container;
        h.x = u;
        h.y = A;
        t.addChild(h);
        d = createBitmap(E);
        d.regX = .5 * E.width;
        d.regY = .5 * E.height;
        h.addChild(d);
        f = new CTLText(h, -90, -d.regY + 36, 180, 33, 33, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_NEXT, !0, !0, !1, !1);
        f.setOutline(5);
        new CTLText(h, -90, -d.regY + 36, 180, 33, 33, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_NEXT, !0, !0, !1, !1);
        k = new createjs.Container;
        p = .15 * d.regX;
        q = .25 * d.regY + 16;
        h.addChild(k);
        this.createNextBlock(z)
    };
    this.createNextBlock = function (u) {
        b = new CNextBlock(BLOCKS_TYPE[u], s_oSpriteLibrary.getSprite("cell_" + u), k);
        k.x = p - b.getOffsetX();
        k.y = q - b.getOffsetY()
    };
    this.refreshBlock = function (u) {
        b.unload();
        this.createNextBlock(u)
    };
    this.getStartPos = function () {
        return n
    };
    this.setPosition = function (u, A) {
        h.x = u;
        h.y = A
    };
    var t = e;
    this._init(a, l, g, c);
    return this
}
function CNextBlock(a, l, c) {
    var g,
    e,
    f;
    this._init = function (d, h) {
        e = 0;
        g = this.createSpriteBlock(d, h);
        this.orderCellsChildIndex()
    };
    this.createSpriteBlock = function (d, h) {
        for (var k = [], b = 0, p = 0, q = 0; q < d.length; q++) {
            for (var n = 0; n < d[q].length; n++)
                1 === d[q][n] && k.push(this.createCell(b, p, h, 0)), b += CELL_SIZE + CELL_OFFSET.x;
            p += CELL_SIZE + CELL_OFFSET.y;
            b = 0
        }
        e = .5 * (CELL_SIZE + CELL_OFFSET.y) * d[0].length;
        f = .5 * (CELL_SIZE + CELL_OFFSET.x) * d.length;
        return k
    };
    this.createCell = function (d, h, k, b) {
        k = new CCell(d, h, b, k, c);
        k.setPosition(d,
            h);
        return k
    };
    this.orderCellsChildIndex = function () {
        for (var d = c.numChildren - 1, h = 0; h < g.length; h++)
            g[h].setChildIndex(d), d--
    };
    this.getOffsetX = function () {
        return e
    };
    this.getOffsetY = function () {
        return f
    };
    this.unload = function () {
        for (var d = 0; d < g.length; d++)
            g[d].unload();
        g = null
    };
    this._init(a, l);
    return this
}
function CInfoBoard(a, l, c, g) {
    var e,
    f,
    d,
    h,
    k,
    b,
    p;
    this._init = function (q, n, t) {
        p = {
            x: q,
            y: n
        };
        b = new createjs.Container;
        b.x = q;
        b.y = n;
        g.addChild(b);
        e = createBitmap(t);
        e.regX = .5 * t.width;
        e.regY = .5 * t.height;
        b.addChild(e);
        (new CTLText(b, -90, .5 * -e.regY - 24, 180, 33, 33, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_LEVEL, !0, !0, !1, !1)).setOutline(4);
        new CTLText(b, -90, .5 * -e.regY - 24, 180, 33, 33, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_LEVEL, !0, !0, !1, !1);
        d = new CTLText(b, -45, .5 * -e.regY + 25, 100, 33, 33, "center", "#025cce", PRIMARY_FONT,
                1, 0, 0, "1", !0, !0, !1, !1);
        d.setOutline(4);
        f = new CTLText(b, -45, .5 * -e.regY + 25, 100, 33, 33, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, "1", !0, !0, !1, !1);
        (new CTLText(b, -90, .5 * -e.regY + 74, 180, 33, 33, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_LINES, !0, !0, !1, !1)).setOutline(4);
        new CTLText(b, -90, .5 * -e.regY + 74, 180, 33, 33, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_LINES, !0, !0, !1, !1);
        k = new CTLText(b, -45, .5 * -e.regY + 124, 100, 33, 33, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, "1", !0, !0, !1, !1);
        k.setOutline(4);
        h = new CTLText(b, -45, .5 *
                -e.regY + 124, 100, 33, 33, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, "1", !0, !0, !1, !1)
    };
    this.refreshLevel = function (q) {
        f.refreshText(q);
        d.refreshText(q)
    };
    this.refreshLines = function (q) {
        k.refreshText(q);
        h.refreshText(q)
    };
    this.getStartPos = function () {
        return p
    };
    this.setPosition = function (q, n) {
        b.x = q;
        b.y = n
    };
    this._init(a, l, c);
    return this
}
function CScoreBoard(a, l, c, g) {
    var e,
    f,
    d,
    h,
    k;
    this._init = function (b, p, q) {
        k = {
            x: b,
            y: p
        };
        h = new createjs.Container;
        h.x = b;
        h.y = p;
        g.addChild(h);
        e = createBitmap(q);
        e.regX = .5 * q.width;
        e.regY = .5 * q.height;
        h.addChild(e);
        (new CTLText(h, -90, -45, 180, 36, 36, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, TEXT_SCORE, !0, !0, !1, !1)).setOutline(4);
        new CTLText(h, -90, -45, 180, 36, 36, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, TEXT_SCORE, !0, !0, !1, !1);
        d = new CTLText(h, -80, 6, 170, 36, 36, "center", "#025cce", PRIMARY_FONT, 1, 0, 0, "0", !0, !0, !1, !1);
        d.setOutline(4);
        f = new CTLText(h, -80, 6, 170, 36, 36, "center", "#ffd800", PRIMARY_FONT, 1, 0, 0, "0", !0, !0, !1, !1)
    };
    this.refreshScore = function (b) {
        f.refreshText(b);
        d.refreshText(b)
    };
    this.getStartPos = function () {
        return k
    };
    this.setPosition = function (b, p) {
        h.x = b;
        h.y = p
    };
    this._init(a, l, c);
    return this
}
function CController() {
    var a,
    l,
    c,
    g,
    e,
    f,
    d,
    h;
    this._init = function () {
        a = {
            x: .5 * CANVAS_WIDTH - 210,
            y: CANVAS_HEIGHT - 80
        };
        l = {
            x: .5 * CANVAS_WIDTH - 380,
            y: CANVAS_HEIGHT - 80
        };
        c = {
            x: .5 * CANVAS_WIDTH + 380,
            y: CANVAS_HEIGHT - 80
        };
        g = {
            x: .5 * CANVAS_WIDTH - 60,
            y: CANVAS_HEIGHT - 80
        };
        var k = s_oSpriteLibrary.getSprite("arrow"),
        b = s_oSpriteLibrary.getSprite("but_rotation");
        e = new CGfxButton(l.x, l.y, k, s_oStage);
        e.addEventListener(ON_MOUSE_DOWN, s_oGame.onLeft, this);
        e.addEventListener(ON_MOUSE_UP, s_oGame.dirKeyUp, this);
        e.setScaleX(-1);
        f = new CGfxButton(a.x,
                a.y, k, s_oStage);
        f.addEventListener(ON_MOUSE_DOWN, s_oGame.onRight, this);
        f.addEventListener(ON_MOUSE_UP, s_oGame.dirKeyUp, this);
        d = new CGfxButton(c.x, c.y, b, s_oStage);
        d.addEventListener(ON_MOUSE_DOWN, s_oGame.onUp, this);
        h = new CGfxButton(g.x, g.y, k, s_oStage);
        h.addEventListener(ON_MOUSE_DOWN, s_oGame.onDown, this);
        h.addEventListener(ON_MOUSE_UP, s_oGame.onDownKeyUp, this);
        h.rotation(90)
    };
    this.getStartPositionControlRight = function () {
        return a
    };
    this.getStartPositionControlLeft = function () {
        return l
    };
    this.getStartPositionControlUp =
    function () {
        return c
    };
    this.getStartPositionControlDown = function () {
        return g
    };
    this.setPositionControlRight = function (k, b) {
        f.setPosition(k, b)
    };
    this.setPositionControlLeft = function (k, b) {
        e.setPosition(k, b)
    };
    this.setPositionControlUp = function (k, b) {
        d.setPosition(k, b)
    };
    this.setPositionControlDown = function (k, b) {
        h.setPosition(k, b)
    };
    this.unload = function () {
        e.unload();
        e = null;
        f.unload();
        f = null;
        d.unload();
        d = null;
        h.unload();
        h = null
    };
    this._init();
    return this
}
function CEdges() {
    var a,
    l;
    this._init = function () {
        var c = s_oSpriteLibrary.getSprite("frame_bottom");
        a = createBitmap(c);
        a.x = 300 + .5 * c.width;
        a.y = 713;
        a.regX = c.width;
        a.regY = .5 * c.height;
        s_oStage.addChild(a)
    };
    this.createIEdge = function () {
        var c = s_oSpriteLibrary.getSprite("frame_top");
        l = createBitmap(c);
        l.x = 88;
        l.y = 709;
        l.regX = .5 * c.width;
        l.regY = .5 * c.height;
        s_oStage.addChild(l)
    };
    this._init();
    return this
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function () {
        if (this._bFitText) {
            for (var a = this._iFontSize; (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a); );
            this._iFontSize = a
        }
    },
    __verticalAlign: function () {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
            (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function () {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
        case "middle":
            this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function (a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
                this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
        case "center":
            this._oText.x = this._x + this._iWidth / 2;
            break;
        case "left":
            this._oText.x = this._x + this._iPaddingH;
            break;
        case "right":
            this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function (a) {
        this._bVerticalAlign = a
    },
    setOutline: function (a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function (a, l, c, g) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, l, c, g))
    },
    setColor: function (a) {
        this._oText.color = a
    },
    setAlpha: function (a) {
        this._oText.alpha = a
    },
    removeTweens: function () {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function () {
        return this._oText
    },
    getY: function () {
        return this._y
    },
    getFontSize: function () {
        return this._iFontSize
    },
    refreshText: function (a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
function CTLText(a, l, c, g, e, f, d, h, k, b, p, q, n, t, u, A, z) {
    this._oContainer = a;
    this._x = l;
    this._y = c;
    this._iWidth = g;
    this._iHeight = e;
    this._bMultiline = A;
    this._iFontSize = f;
    this._szAlign = d;
    this._szColor = h;
    this._szFont = k;
    this._iPaddingH = p;
    this._iPaddingV = q;
    this._bVerticalAlign = u;
    this._bFitText = t;
    this._bDebug = z;
    this._oDebugShape = null;
    this._fLineHeightFactor = b;
    this._oText = null;
    n && this.__createText(n)
}
function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}
function extractRootDomain(a) {
    a = extractHostname(a);
    var l = a.split("."),
    c = l.length;
    2 < c && (a = l[c - 2] + "." + l[c - 1]);
    return a
}
var getClosestTop = function () {
    var a = window,
    l = !1;
    try {
        for (; a.parent.document !== a.document; )
            if (a.parent.document)
                a = a.parent;
            else {
                l = !0;
                break
            }
    } catch (c) {
        l = !0
    }
    return {
        topFrame: a,
        err: l
    }
}, getBestPageUrl = function (a) {
    var l = a.topFrame,
    c = "";
    if (a.err)
        try {
            try {
                c = window.top.location.href
            } catch (e) {
                var g = window.location.ancestorOrigins;
                c = g[g.length - 1]
            }
        } catch (e) {
            c = l.document.referrer
        }
    else
        c = l.location.href;
    return c
}, TOPFRAMEOBJ = getClosestTop(), PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), l = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], c = 0; c < l.length; c++)
        if (l[c] === a)
            return !0;
    return !0
};