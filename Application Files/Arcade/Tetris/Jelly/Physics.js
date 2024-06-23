var canvasID = document.getElementById("GravityTetrisCanvas");
var canvas = canvasID.getContext("2d");
function GravityTetris() {
    var _0xc231x9 = canvasID.width;
    var _0xc231xa = canvasID.height;
    var _0xc231x10 = -1;
    var _0xc231x11 = -1;
    var _0xc231x12 = -1;
    var _0xc231x13 = -1;
    var _0xc231x18 = _0xc231x9 / 10 * 0.5;
    var _0xc231x19 = -200;
    var _0xc231x1a = -50;
    var _0xc231x31 = -1;
    var _0xc231x3a = -1;
    var _0xc231x40 = "rgb( 200, 50, 50 )";
    var _0xc231x41 = "rgb( 70, 170, 70 )";
    var _0xc231x42 = "rgb( 70, 90, 200 )";
    var _0xc231x43 = "rgb( 190, 190, 40 )";
    var _0xc231x44 = "rgb( 160, 50, 200 )";
    var _0xc231x45 = "rgb( 190, 130, 40 )";
    var _0xc231x46 = "rgb( 30, 150, 150 )";
    function _0xc231x47() {
        this.solid = false;
        this.nodeFilled = new Array(10);
    }
    function _0xc231x48() {
        this.x = 0;
        this.y = 0;
    }
    function _0xc231x49() {
        this.piece = _0xc231x10;
        this.node = _0xc231x11;
        this.active = false;
    }
    function _0xc231x4a() {
        this.position = new _0xc231x48;
        this.velocity = new _0xc231x48;
        this.gridPosition = new _0xc231x48;
        this.column = _0xc231x12;
        this.row = _0xc231x13;
    }
    function _0xc231x4b() {
        this.length = 0;
        this.node1 = _0xc231x11;
        this.node2 = _0xc231x11;
    }
    function _0xc231x4c() {
        this.numCollisions = 0;
        this.frigidity = 0;
        this.stressed = false;
        this.mode = _0xc231x3a;
        this.color = "rgb( 0, 0, 0 )";
        this.position = new _0xc231x48;
        this.axis = new _0xc231x48;
        this.type = _0xc231x31;
        this.axisNode = _0xc231x11;
        this.nodes = new Array(4);
        this.springs = new Array(6);
    }
    var _0xc231x4d = false;
    var _0xc231x4e = 200;
    var _0xc231x4f = 0;
    var _0xc231x50 = 0;
    var _0xc231x51 = new Array(150);
    var _0xc231x52 = false;
    var _0xc231x53 = new _0xc231x49;
    var _0xc231x54 = new Array(20);
    var _0xc231x55 = false;
    var _0xc231x56 = 0;
    var _0xc231x57 = 0;
    var _0xc231x58 = 0;
    var _0xc231x59 = 0;
    this.update = function () {
        if (!_0xc231x4d) {
            this.initialize();
            _0xc231x4d = true;
        } else {
            if (!_0xc231x55) {
                _0xc231x50++;
                if (_0xc231x50 % _0xc231x4e == 0) {
                    _0xc231x4e -= 1;
                    if (_0xc231x4e < 20) {
                        _0xc231x4e = 20;
                    }
                    if (_0xc231x4f < 150) {
                        var _0xc231x5c = Math.floor(Math.random() * 7);
                        var _0xc231x5d = _0xc231x9 * 0.5;
                        var _0xc231x5e = _0xc231x1a;
                        this.initializePiece(_0xc231x4f, _0xc231x5d, _0xc231x5e, _0xc231x5c);
                        _0xc231x4f++;
                    }
                }
                for (var _0xc231x5f = 0; _0xc231x5f < 4; _0xc231x5f++) {
                    this.updatePhysics();
                }
                for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
                    if (_0xc231x54[_0xc231x60].solid) {
                        this.removeRow(_0xc231x60);
                    }
                }
            }
            if (_0xc231x55) {
                this.renderGameOver();
            } else {
                this.renderGame();
            }
        }
        this.timer = setTimeout("tetris.update()", 20);
    };
    this.removeRow = function (_0xc231x61) {
        for (var _0xc231x60 = _0xc231x61; _0xc231x60 >= 0; _0xc231x60--) {
            for (var _0xc231x62 = 0; _0xc231x62 < _0xc231x4f; _0xc231x62++) {
                if (_0xc231x62 != _0xc231x53.piece) {
                    if (_0xc231x51[_0xc231x62].mode != 0) {
                        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
                            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].row == _0xc231x60) {
                                _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y += _0xc231x18 * 2;
                                this.calculateNodeGridPosition(_0xc231x62, _0xc231x63);
                            }
                        }
                    }
                }
            }
        }
        this.reCalculateRows();
    };
    this.initialize = function () {
        for (var _0xc231x62 = 0; _0xc231x62 < 150; _0xc231x62++) {
            _0xc231x51[_0xc231x62] = new _0xc231x4c;
            for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
                _0xc231x51[_0xc231x62].nodes[_0xc231x63] = new _0xc231x4a;
            }
            for (var _0xc231x64 = 0; _0xc231x64 < 6; _0xc231x64++) {
                _0xc231x51[_0xc231x62].springs[_0xc231x64] = new _0xc231x4b;
            }
        }
        for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
            _0xc231x54[_0xc231x60] = new _0xc231x47;
        }
        this.startGame();
    };
    this.startGame = function () {
        _0xc231x4f = 0;
        _0xc231x53.piece = _0xc231x10;
        _0xc231x53.node = _0xc231x11;
        _0xc231x53.active = false;
        _0xc231x4e = 200;
        _0xc231x50 = _0xc231x4e - 10;
        for (var _0xc231x62 = 0; _0xc231x62 < 150; _0xc231x62++) {
            _0xc231x51[_0xc231x62].numCollisions = 0;
            _0xc231x51[_0xc231x62].frigidity = 0;
            _0xc231x51[_0xc231x62].stressed = false;
            _0xc231x51[_0xc231x62].mode = _0xc231x3a;
        }
        for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
            _0xc231x54[_0xc231x60].solid = false;
            for (var _0xc231x65 = 0; _0xc231x65 < 10; _0xc231x65++) {
                _0xc231x54[_0xc231x60].nodeFilled[_0xc231x65] = false;
            }
        }
    };
    this.initializePiece = function (_0xc231x62, _0xc231x66, _0xc231x67, _0xc231x5c) {
        _0xc231x51[_0xc231x62].mode = 0;
        _0xc231x51[_0xc231x62].frigidity = 0;
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x = _0xc231x66;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y = _0xc231x67;
        }
        _0xc231x51[_0xc231x62].axisNode = 1;
        _0xc231x51[_0xc231x62].type = _0xc231x5c;
        if (_0xc231x51[_0xc231x62].type == 0) {
            _0xc231x51[_0xc231x62].color = _0xc231x40;
            _0xc231x51[_0xc231x62].nodes[0].position.x += _0xc231x18 * 0;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.x += _0xc231x18 * 6;
            _0xc231x51[_0xc231x62].axisNode = 3;
        }
        if (_0xc231x51[_0xc231x62].type == 1) {
            _0xc231x51[_0xc231x62].color = _0xc231x41;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 2;
        }
        if (_0xc231x51[_0xc231x62].type == 2) {
            _0xc231x51[_0xc231x62].color = _0xc231x42;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.y -= _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 2;
        }
        if (_0xc231x51[_0xc231x62].type == 3) {
            _0xc231x51[_0xc231x62].color = _0xc231x43;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[3].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 1;
        }
        if (_0xc231x51[_0xc231x62].type == 4) {
            _0xc231x51[_0xc231x62].color = _0xc231x44;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.y -= _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[3].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.y -= _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 1;
        }
        if (_0xc231x51[_0xc231x62].type == 5) {
            _0xc231x51[_0xc231x62].color = _0xc231x45;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[3].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[3].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 1;
        }
        if (_0xc231x51[_0xc231x62].type == 6) {
            _0xc231x51[_0xc231x62].color = _0xc231x46;
            _0xc231x51[_0xc231x62].nodes[1].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[2].position.x += _0xc231x18 * 4;
            _0xc231x51[_0xc231x62].nodes[3].position.x += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].nodes[3].position.y += _0xc231x18 * 2;
            _0xc231x51[_0xc231x62].axisNode = 1;
        }
        _0xc231x51[_0xc231x62].springs[0].node1 = 0;
        _0xc231x51[_0xc231x62].springs[0].node2 = 1;
        _0xc231x51[_0xc231x62].springs[1].node1 = 0;
        _0xc231x51[_0xc231x62].springs[1].node2 = 2;
        _0xc231x51[_0xc231x62].springs[2].node1 = 0;
        _0xc231x51[_0xc231x62].springs[2].node2 = 3;
        _0xc231x51[_0xc231x62].springs[3].node1 = 1;
        _0xc231x51[_0xc231x62].springs[3].node2 = 2;
        _0xc231x51[_0xc231x62].springs[4].node1 = 1;
        _0xc231x51[_0xc231x62].springs[4].node2 = 3;
        _0xc231x51[_0xc231x62].springs[5].node1 = 2;
        _0xc231x51[_0xc231x62].springs[5].node2 = 3;
        for (var _0xc231x64 = 0; _0xc231x64 < 6; _0xc231x64++) {
            var _0xc231x68 = _0xc231x51[_0xc231x62].springs[_0xc231x64].node1;
            var _0xc231x69 = _0xc231x51[_0xc231x62].springs[_0xc231x64].node2;
            var _0xc231x6a = _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.x - _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.x;
            var _0xc231x6b = _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.y - _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.y;
            _0xc231x51[_0xc231x62].springs[_0xc231x64].length = Math.sqrt(_0xc231x6a * _0xc231x6a + _0xc231x6b * _0xc231x6b);
        }
        this.calculateCentroid(_0xc231x62);
        this.spin(_0xc231x62, -0.1 + Math.random() * 0.2);
    };
    this.spin = function (_0xc231x62, _0xc231x64) {
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            var _0xc231x6a = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y - _0xc231x51[_0xc231x62].position.y;
            var _0xc231x6b = -(_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x - _0xc231x51[_0xc231x62].position.x);
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x += _0xc231x6a * _0xc231x64;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y += _0xc231x6b * _0xc231x64;
        }
    };
    this.calculateCentroid = function (_0xc231x62) {
        _0xc231x51[_0xc231x62].position.x = 0;
        _0xc231x51[_0xc231x62].position.y = 0;
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            _0xc231x51[_0xc231x62].position.x += _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x;
            _0xc231x51[_0xc231x62].position.y += _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y;
        }
        _0xc231x51[_0xc231x62].position.x /= 4;
        _0xc231x51[_0xc231x62].position.y /= 4;
    };
    this.calculateAxis = function (_0xc231x62) {
        _0xc231x51[_0xc231x62].axis.x = _0xc231x51[_0xc231x62].nodes[_0xc231x51[_0xc231x62].axisNode].position.x - _0xc231x51[_0xc231x62].nodes[0].position.x;
        _0xc231x51[_0xc231x62].axis.y = _0xc231x51[_0xc231x62].nodes[_0xc231x51[_0xc231x62].axisNode].position.y - _0xc231x51[_0xc231x62].nodes[0].position.y;
        var _0xc231x6c = Math.sqrt(_0xc231x51[_0xc231x62].axis.x * _0xc231x51[_0xc231x62].axis.x + _0xc231x51[_0xc231x62].axis.y * _0xc231x51[_0xc231x62].axis.y);
        if (_0xc231x6c > 0) {
            _0xc231x51[_0xc231x62].axis.x /= _0xc231x6c;
            _0xc231x51[_0xc231x62].axis.y /= _0xc231x6c;
        } else {
            _0xc231x51[_0xc231x62].axis.x = 1;
            _0xc231x51[_0xc231x62].axis.y = 0;
        }
    };
    this.updatePhysics = function () {
        for (var _0xc231x62 = 0; _0xc231x62 < _0xc231x4f; _0xc231x62++) {
            if (_0xc231x51[_0xc231x62].mode != 3) {
                this.updateSpringForces(_0xc231x62);
                if (_0xc231x51[_0xc231x62].mode == 0) {
                    if (_0xc231x51[_0xc231x62].numCollisions > 50) {
                        _0xc231x51[_0xc231x62].mode = 2;
                        _0xc231x51[_0xc231x62].frigidity = 0;
                    }
                } else {
                    if (_0xc231x51[_0xc231x62].mode == 1) {
                        if (_0xc231x51[_0xc231x62].numCollisions > 1) {
                            _0xc231x51[_0xc231x62].mode = 2;
                            _0xc231x51[_0xc231x62].frigidity = 0;
                        }
                    }
                }
                if (_0xc231x51[_0xc231x62].frigidity > 1) {
                    _0xc231x51[_0xc231x62].mode = 3;
                    _0xc231x51[_0xc231x62].frigidity = 1;
                    this.freeze(_0xc231x62);
                } else {
                    if (_0xc231x51[_0xc231x62].frigidity < 0) {
                        _0xc231x51[_0xc231x62].frigidity = 0;
                    } else {
                        this.updateFreezing(_0xc231x62);
                    }
                }
                for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x *= 0.99;
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y *= 0.99;
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y += 0.02;
                    if (_0xc231x51[_0xc231x62].mode != 3) {
                        if (_0xc231x62 == _0xc231x53.piece && _0xc231x63 == _0xc231x53.node) {
                            _0xc231x51[_0xc231x62].mode = 1;
                            _0xc231x51[_0xc231x62].numCollisions = 0;
                            _0xc231x51[_0xc231x62].frigidity = 0;
                            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x += (_0xc231x56 - _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x) * 0.1;
                            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y += (_0xc231x57 - _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y) * 0.1;
                            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x *= 0.8;
                            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y *= 0.8;
                        }
                    }
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x += _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x;
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y += _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y;
                    this.updateNodeCollisions(_0xc231x62, _0xc231x63);
                    this.updateWallCollisions(_0xc231x62, _0xc231x63);
                    this.calculateNodeGridPosition(_0xc231x62, _0xc231x63);
                }
                this.calculateCentroid(_0xc231x62);
                this.calculateAxis(_0xc231x62);
            }
        }
    };
    this.calculateNodeGridPosition = function (_0xc231x62, _0xc231x63) {
        var _0xc231x6d = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x / _0xc231x9;
        var _0xc231x6e = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y / _0xc231xa;
        _0xc231x51[_0xc231x62].nodes[_0xc231x63].column = Math.floor(_0xc231x6d * 10);
        _0xc231x51[_0xc231x62].nodes[_0xc231x63].row = Math.floor(_0xc231x6e * 20);
        var _0xc231x6f = (_0xc231x51[_0xc231x62].nodes[_0xc231x63].column + 0.5) / 10;
        var _0xc231x70 = (_0xc231x51[_0xc231x62].nodes[_0xc231x63].row + 0.5) / 20;
        _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.x = _0xc231x6f * _0xc231x9;
        _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.y = _0xc231x70 * _0xc231xa;
    };
    this.freeze = function (_0xc231x62) {
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x = _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.x;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y = _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.y;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x = 0;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y = 0;
            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y < _0xc231x18 * 2) {
                _0xc231x55 = true;
            }
        }
        this.reCalculateRows();
    };
    this.reCalculateRows = function () {
        for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
            _0xc231x54[_0xc231x60].solid = false;
            for (var _0xc231x65 = 0; _0xc231x65 < 10; _0xc231x65++) {
                _0xc231x54[_0xc231x60].nodeFilled[_0xc231x65] = false;
            }
        }
        for (var _0xc231x62 = 0; _0xc231x62 < _0xc231x4f; _0xc231x62++) {
            if (_0xc231x51[_0xc231x62].mode == 3) {
                for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
                    if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].row > _0xc231x13 && _0xc231x51[_0xc231x62].nodes[_0xc231x63].row < 20 && _0xc231x51[_0xc231x62].nodes[_0xc231x63].column > _0xc231x12 && _0xc231x51[_0xc231x62].nodes[_0xc231x63].column < 10) {
                        _0xc231x54[_0xc231x51[_0xc231x62].nodes[_0xc231x63].row].nodeFilled[_0xc231x51[_0xc231x62].nodes[_0xc231x63].column] = true;
                    }
                }
            }
        }
        for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
            var _0xc231x71 = 0;
            for (var _0xc231x65 = 0; _0xc231x65 < 10; _0xc231x65++) {
                if (_0xc231x54[_0xc231x60].nodeFilled[_0xc231x65]) {
                    _0xc231x71++;
                }
            }
            if (_0xc231x71 == 10) {
                _0xc231x54[_0xc231x60].solid = true;
            } else {
                _0xc231x54[_0xc231x60].solid = false;
            }
        }
    };
    this.updateFreezing = function (_0xc231x62) {
        if (_0xc231x51[_0xc231x62].mode == 2) {
            _0xc231x51[_0xc231x62].frigidity += 0.001;
        }
        var _0xc231x72 = 0;
        var _0xc231x73 = Math.abs(_0xc231x51[_0xc231x62].axis.x);
        var _0xc231x74 = Math.abs(_0xc231x51[_0xc231x62].axis.y);
        if (_0xc231x74 > _0xc231x73) {
            _0xc231x72 = -_0xc231x51[_0xc231x62].axis.x;
            if (_0xc231x51[_0xc231x62].axis.y < 0) {
                _0xc231x72 *= -1;
            }
        } else {
            _0xc231x72 = _0xc231x51[_0xc231x62].axis.y;
            if (_0xc231x51[_0xc231x62].axis.x < 0) {
                _0xc231x72 *= -1;
            }
        }
        this.spin(_0xc231x62, _0xc231x72 * 0.1 * _0xc231x51[_0xc231x62].frigidity);
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            var _0xc231x75 = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x - _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.x;
            var _0xc231x76 = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y - _0xc231x51[_0xc231x62].nodes[_0xc231x63].gridPosition.y;
            var _0xc231x77 = _0xc231x75 * _0xc231x51[_0xc231x62].frigidity * 0.02;
            var _0xc231x78 = _0xc231x76 * _0xc231x51[_0xc231x62].frigidity * 0.02;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x -= _0xc231x77;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y -= _0xc231x78;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x *= 1 - _0xc231x51[_0xc231x62].frigidity * 0.4;
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y *= 1 - _0xc231x51[_0xc231x62].frigidity * 0.4;
        }
    };
    this.updateSpringForces = function (_0xc231x62) {
        for (var _0xc231x64 = 0; _0xc231x64 < 6; _0xc231x64++) {
            var _0xc231x68 = _0xc231x51[_0xc231x62].springs[_0xc231x64].node1;
            var _0xc231x69 = _0xc231x51[_0xc231x62].springs[_0xc231x64].node2;
            var _0xc231x6a = _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.x - _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.x;
            var _0xc231x6b = _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.y - _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.y;
            var _0xc231x79 = Math.sqrt(_0xc231x6a * _0xc231x6a + _0xc231x6b * _0xc231x6b);
            if (_0xc231x79 > 0) {
                var _0xc231x7a = _0xc231x51[_0xc231x62].springs[_0xc231x64].length - _0xc231x79;
                var _0xc231x7b = _0xc231x7a * 0.3;
                var _0xc231x7c = _0xc231x7a * 0.5;
                var _0xc231x7d = _0xc231x6a / _0xc231x79;
                var _0xc231x7e = _0xc231x6b / _0xc231x79;
                _0xc231x51[_0xc231x62].nodes[_0xc231x68].velocity.x -= _0xc231x7d * _0xc231x7b;
                _0xc231x51[_0xc231x62].nodes[_0xc231x68].velocity.y -= _0xc231x7e * _0xc231x7b;
                _0xc231x51[_0xc231x62].nodes[_0xc231x69].velocity.x += _0xc231x7d * _0xc231x7b;
                _0xc231x51[_0xc231x62].nodes[_0xc231x69].velocity.y += _0xc231x7e * _0xc231x7b;
                _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.x -= _0xc231x7d * _0xc231x7c;
                _0xc231x51[_0xc231x62].nodes[_0xc231x68].position.y -= _0xc231x7e * _0xc231x7c;
                _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.x += _0xc231x7d * _0xc231x7c;
                _0xc231x51[_0xc231x62].nodes[_0xc231x69].position.y += _0xc231x7e * _0xc231x7c;
            }
        }
    };
    this.updateNodeCollisions = function (_0xc231x62, _0xc231x63) {
        for (var _0xc231x7f = 0; _0xc231x7f < _0xc231x4f; _0xc231x7f++) {
            if (_0xc231x7f != _0xc231x62) {
                for (var _0xc231x80 = 0; _0xc231x80 < 4; _0xc231x80++) {
                    var _0xc231x6a = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x - _0xc231x51[_0xc231x7f].nodes[_0xc231x80].position.x;
                    var _0xc231x6b = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y - _0xc231x51[_0xc231x7f].nodes[_0xc231x80].position.y;
                    var _0xc231x81 = Math.sqrt(_0xc231x6a * _0xc231x6a + _0xc231x6b * _0xc231x6b);
                    if (_0xc231x81 < _0xc231x18 * 2) {
                        if (_0xc231x81 < _0xc231x18 * 0.7) {
                            _0xc231x51[_0xc231x62].stressed = true;
                        } else {
                            _0xc231x51[_0xc231x62].stressed = false;
                        }
                        var _0xc231x82 = _0xc231x6a / _0xc231x81 * 1;
                        var _0xc231x83 = _0xc231x6b / _0xc231x81 * 1;
                        _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x += _0xc231x82;
                        _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y += _0xc231x83;
                        _0xc231x51[_0xc231x7f].nodes[_0xc231x80].velocity.x -= _0xc231x82;
                        _0xc231x51[_0xc231x7f].nodes[_0xc231x80].velocity.y -= _0xc231x83;
                        _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x *= 0.7;
                        _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y *= 0.7;
                        _0xc231x51[_0xc231x7f].nodes[_0xc231x80].velocity.x *= 0.7;
                        _0xc231x51[_0xc231x7f].nodes[_0xc231x80].velocity.y *= 0.7;
                        if (_0xc231x51[_0xc231x62].mode == 0 || _0xc231x51[_0xc231x62].mode == 1) {
                            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].column == _0xc231x51[_0xc231x7f].nodes[_0xc231x80].column && _0xc231x51[_0xc231x62].nodes[_0xc231x63].row < _0xc231x51[_0xc231x7f].nodes[_0xc231x80].row) {
                                if (_0xc231x62 != _0xc231x53.piece && _0xc231x7f != _0xc231x53.piece) {
                                    _0xc231x51[_0xc231x62].numCollisions++;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.updateWallCollisions = function (_0xc231x62, _0xc231x63) {
        if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x > _0xc231x9 - _0xc231x18) {
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x = _0xc231x9 - _0xc231x18;
            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x > 0) {
                _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x -= 0.8;
            }
        } else {
            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x < _0xc231x18) {
                _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x = _0xc231x18;
                if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x < 0) {
                    _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.x += 0.8;
                }
            }
        }
        if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y > _0xc231xa - _0xc231x18) {
            if (_0xc231x51[_0xc231x62].mode == 0 || _0xc231x51[_0xc231x62].mode == 1) {
                _0xc231x51[_0xc231x62].numCollisions++;
            }
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y = _0xc231xa - _0xc231x18;
            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y > 0) {
                _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y -= 0.8;
            }
        }
        if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y < _0xc231x19) {
            _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y = _0xc231x19;
            if (_0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y < 0) {
                _0xc231x51[_0xc231x62].nodes[_0xc231x63].velocity.y += 0.8;
            }
        }
    };
    this.renderGame = function () {
        canvas.fillStyle = "rgba( 0, 0, 0, 0.4 )";
        canvas.fillRect(0, 0, _0xc231x9, _0xc231xa);
        for (var _0xc231x62 = 0; _0xc231x62 < _0xc231x4f; _0xc231x62++) {
            this.renderPiece(_0xc231x62);
        }
        canvas.lineWidth = 1;
        canvas.strokeStyle = "rgb( 150, 150, 150 )";
        canvas.strokeRect(1, 1, _0xc231x9 - 2, _0xc231xa - 2);
    };
    this.showRows = function () {
        for (var _0xc231x60 = 0; _0xc231x60 < 20; _0xc231x60++) {
            var _0xc231x67 = (_0xc231x60 + 0.5) / 20 * _0xc231xa;
            if (_0xc231x54[_0xc231x60].solid) {
                canvas.fillStyle = "rgb( 0, 0, 0 )";
                canvas.fillRect(0, _0xc231x67 - 2, _0xc231x9, 4);
                canvas.strokeStyle = "rgb( 200, 200, 200 )";
                canvas.strokeRect(0, _0xc231x67 - 2, _0xc231x9, 4);
            }
            for (var _0xc231x65 = 0; _0xc231x65 < 10; _0xc231x65++) {
                if (_0xc231x54[_0xc231x60].nodeFilled[_0xc231x65]) {
                    var _0xc231x66 = (_0xc231x65 + 0.5) / 10 * _0xc231x9;
                    canvas.fillStyle = "rgb( 0, 0, 0 )";
                    canvas.beginPath();
                    canvas.arc(_0xc231x66, _0xc231x67, _0xc231x18 * 0.2, 0, Math.PI * 2, false);
                    canvas.fill();
                    canvas.closePath();
                    canvas.strokeStyle = "rgb( 200, 200, 200 )";
                    canvas.beginPath();
                    canvas.arc(_0xc231x66, _0xc231x67, _0xc231x18 * 0.2, 0, Math.PI * 2, false);
                    canvas.stroke();
                    canvas.closePath();
                }
            }
        }
    };
    this.renderPiece = function (_0xc231x62) {
        this.renderNodes(_0xc231x62);
    };
    this.renderNodes = function (_0xc231x62) {
        var _0xc231x84 = _0xc231x51[_0xc231x62].axis.y;
        var _0xc231x85 = -_0xc231x51[_0xc231x62].axis.x;
        var _0xc231x86 = _0xc231x18 * 1;
        var _0xc231x87 = _0xc231x86 * _0xc231x51[_0xc231x62].axis.x;
        var _0xc231x88 = _0xc231x86 * _0xc231x51[_0xc231x62].axis.y;
        var _0xc231x89 = _0xc231x86 * _0xc231x84;
        var _0xc231x8a = _0xc231x86 * _0xc231x85;
        for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
            canvas.fillStyle = _0xc231x51[_0xc231x62].color;
            if (_0xc231x51[_0xc231x62].mode != 3) {
                if (_0xc231x62 == _0xc231x53.piece && _0xc231x63 == _0xc231x53.node) {
                    canvas.fillStyle = "rgb( 200, 200, 200 )";
                }
            }
            var _0xc231x8b = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x - _0xc231x87 + _0xc231x89;
            var _0xc231x8c = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y - _0xc231x88 + _0xc231x8a;
            var _0xc231x8d = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x + _0xc231x87 + _0xc231x89;
            var _0xc231x8e = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y + _0xc231x88 + _0xc231x8a;
            var _0xc231x8f = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x - _0xc231x87 - _0xc231x89;
            var _0xc231x90 = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y - _0xc231x88 - _0xc231x8a;
            var _0xc231x91 = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x + _0xc231x87 - _0xc231x89;
            var _0xc231x92 = _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y + _0xc231x88 - _0xc231x8a;
            canvas.beginPath();
            canvas.moveTo(_0xc231x8b, _0xc231x8c);
            canvas.lineTo(_0xc231x8d, _0xc231x8e);
            canvas.lineTo(_0xc231x91, _0xc231x92);
            canvas.lineTo(_0xc231x8f, _0xc231x90);
            canvas.closePath();
            canvas.fill();
            canvas.lineWidth = 3;
            var _0xc231x93 = _0xc231x18 * 0.1;
            var _0xc231x94 = "rgba( 0, 0, 0, 0.0 )";
            var _0xc231x95 = "rgba( 0, 0, 0, 0.0 )";
            var _0xc231x96 = "rgba( 0, 0, 0, 0.0 )";
            var _0xc231x97 = "rgba( 0, 0, 0, 0.0 )";
            if (_0xc231x51[_0xc231x62].axis.y > 0.1) {
                _0xc231x94 = "rgba( 255, 255, 255, " + _0xc231x51[_0xc231x62].axis.y * 0.4 + ")";
                _0xc231x96 = "rgba( 0, 0, 0, " + _0xc231x51[_0xc231x62].axis.y * 0.4 + ")";
            } else {
                if (_0xc231x51[_0xc231x62].axis.y < -0.1) {
                    _0xc231x94 = "rgba( 0, 0, 0, " + -_0xc231x51[_0xc231x62].axis.y * 0.4 + ")";
                    _0xc231x96 = "rgba( 255, 255, 255, " + -_0xc231x51[_0xc231x62].axis.y * 0.4 + ")";
                }
            }
            if (_0xc231x51[_0xc231x62].axis.x > 0.1) {
                _0xc231x95 = "rgba( 0, 0, 0, " + _0xc231x51[_0xc231x62].axis.x * 0.4 + ")";
                _0xc231x97 = "rgba( 255, 255, 255, " + _0xc231x51[_0xc231x62].axis.x * 0.4 + ")";
            } else {
                if (_0xc231x51[_0xc231x62].axis.x < -0.1) {
                    _0xc231x95 = "rgba( 255, 255, 255, " + -_0xc231x51[_0xc231x62].axis.x * 0.4 + ")";
                    _0xc231x97 = "rgba( 0, 0, 0, " + -_0xc231x51[_0xc231x62].axis.x * 0.4 + ")";
                }
            }
            canvas.strokeStyle = _0xc231x94;
            canvas.beginPath();
            canvas.moveTo(_0xc231x8b + _0xc231x93 * _0xc231x51[_0xc231x62].axis.x - _0xc231x93 * _0xc231x84, _0xc231x8c + _0xc231x93 * _0xc231x51[_0xc231x62].axis.y - _0xc231x93 * _0xc231x85);
            canvas.lineTo(_0xc231x8f + _0xc231x93 * _0xc231x51[_0xc231x62].axis.x + _0xc231x93 * _0xc231x84, _0xc231x90 + _0xc231x93 * _0xc231x51[_0xc231x62].axis.y + _0xc231x93 * _0xc231x85);
            canvas.closePath();
            canvas.stroke();
            canvas.strokeStyle = _0xc231x95;
            canvas.beginPath();
            canvas.moveTo(_0xc231x8f + _0xc231x93 * _0xc231x51[_0xc231x62].axis.x + _0xc231x93 * _0xc231x84, _0xc231x90 + _0xc231x93 * _0xc231x51[_0xc231x62].axis.y + _0xc231x93 * _0xc231x85);
            canvas.lineTo(_0xc231x91 - _0xc231x93 * _0xc231x51[_0xc231x62].axis.x + _0xc231x93 * _0xc231x84, _0xc231x92 - _0xc231x93 * _0xc231x51[_0xc231x62].axis.y + _0xc231x93 * _0xc231x85);
            canvas.closePath();
            canvas.stroke();
            canvas.strokeStyle = _0xc231x96;
            canvas.beginPath();
            canvas.moveTo(_0xc231x8d - _0xc231x93 * _0xc231x51[_0xc231x62].axis.x - _0xc231x93 * _0xc231x84, _0xc231x8e - _0xc231x93 * _0xc231x51[_0xc231x62].axis.y - _0xc231x93 * _0xc231x85);
            canvas.lineTo(_0xc231x91 - _0xc231x93 * _0xc231x51[_0xc231x62].axis.x + _0xc231x93 * _0xc231x84, _0xc231x92 - _0xc231x93 * _0xc231x51[_0xc231x62].axis.y + _0xc231x93 * _0xc231x85);
            canvas.closePath();
            canvas.stroke();
            canvas.strokeStyle = _0xc231x97;
            canvas.beginPath();
            canvas.moveTo(_0xc231x8b + _0xc231x93 * _0xc231x51[_0xc231x62].axis.x - _0xc231x93 * _0xc231x84, _0xc231x8c + _0xc231x93 * _0xc231x51[_0xc231x62].axis.y - _0xc231x93 * _0xc231x85);
            canvas.lineTo(_0xc231x8d - _0xc231x93 * _0xc231x51[_0xc231x62].axis.x - _0xc231x93 * _0xc231x84, _0xc231x8e - _0xc231x93 * _0xc231x51[_0xc231x62].axis.y - _0xc231x93 * _0xc231x85);
            canvas.closePath();
            canvas.stroke();
            canvas.lineWidth = 1;
            canvas.strokeStyle = "rgba( 0, 0, 0, 0.4 )";
            canvas.beginPath();
            canvas.moveTo(_0xc231x8b, _0xc231x8c);
            canvas.lineTo(_0xc231x8d, _0xc231x8e);
            canvas.lineTo(_0xc231x91, _0xc231x92);
            canvas.lineTo(_0xc231x8f, _0xc231x90);
            canvas.closePath();
            canvas.stroke();
            if (_0xc231x51[_0xc231x62].stressed) {
                canvas.fillStyle = "rgb( 0, 0, 0 )";
                canvas.beginPath();
                canvas.arc(_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x, _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y, _0xc231x18 * 0.8, 0, Math.PI * 2, false);
                canvas.fill();
                canvas.closePath();
            }
            if (_0xc231x51[_0xc231x62].mode == 3) {
                canvas.lineWidth = 2;
                canvas.strokeStyle = "rgba( 0, 0, 0, 0.1 )";
                canvas.beginPath();
                canvas.moveTo(_0xc231x8b, _0xc231x8c);
                canvas.lineTo(_0xc231x91, _0xc231x92);
                canvas.closePath();
                canvas.stroke();
                canvas.beginPath();
                canvas.moveTo(_0xc231x8f, _0xc231x90);
                canvas.lineTo(_0xc231x8d, _0xc231x8e);
                canvas.closePath();
                canvas.stroke();
            }
            if (_0xc231x51[_0xc231x62].mode == 2) {
                canvas.lineWidth = 1;
                canvas.strokeStyle = "rgb( 255, 255, 255 )";
                canvas.beginPath();
                canvas.arc(_0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x, _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y, _0xc231x18 * _0xc231x51[_0xc231x62].frigidity, 0, Math.PI * 2, false);
                canvas.stroke();
                canvas.closePath();
            }
        }
    };
    this.renderGameOver = function () {
        canvas.fillStyle = "rgb( 0, 0, 0 )";
        canvas.fillRect(0, 0, _0xc231x9, _0xc231xa);
        canvas.fillStyle = "rgb( 255, 255, 255 )";
        canvas.font = "30px Arial";
        canvas.fillText("GAME OVER", _0xc231x9 * 0.25, _0xc231xa * 0.5);
        var _0xc231x9b = _0xc231x9 * 0.5;
        var _0xc231x9c = _0xc231xa * 0.15;
        var _0xc231x9d = _0xc231x9 * 0.5 - _0xc231x9b * 0.5;
        var _0xc231x9e = _0xc231xa * 0.6;
        canvas.fillStyle = "rgb( 80, 80, 80 )";
        canvas.fillRect(_0xc231x9d, _0xc231x9e, _0xc231x9b, _0xc231x9c);
        canvas.lineWidth = 2;
        canvas.strokeStyle = "rgb( 100, 150, 200 )";
        canvas.strokeRect(_0xc231x9d, _0xc231x9e, _0xc231x9b, _0xc231x9c);
        canvas.fillStyle = "rgb( 100, 250, 90 )";
        canvas.font = "30px Arial";
        canvas.fillText("start again!", _0xc231x9d + 15, _0xc231x9e + 60);
        canvas.lineWidth = 1;
        canvas.strokeStyle = "rgb( 150, 150, 150 )";
        canvas.strokeRect(1, 1, _0xc231x9 - 2, _0xc231xa - 2);
    };
    this.mouseDown = function (_0xc231x66, _0xc231x67) {
        _0xc231x52 = true;
        _0xc231x56 = _0xc231x66 - 10;
        _0xc231x57 = _0xc231x67 - 10;
        _0xc231x58 = _0xc231x56;
        _0xc231x59 = _0xc231x57;
        if (_0xc231x55) {
            _0xc231x55 = false;
            this.startGame();
        }
        var _0xc231x9f = 1e3;
        for (var _0xc231x62 = 0; _0xc231x62 < _0xc231x4f; _0xc231x62++) {
            for (var _0xc231x63 = 0; _0xc231x63 < 4; _0xc231x63++) {
                var _0xc231x6a = _0xc231x56 - _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.x;
                var _0xc231x6b = _0xc231x57 - _0xc231x51[_0xc231x62].nodes[_0xc231x63].position.y;
                var _0xc231x81 = Math.sqrt(_0xc231x6a * _0xc231x6a + _0xc231x6b * _0xc231x6b);
                if (_0xc231x81 < _0xc231x18 * 2) {
                    if (_0xc231x81 < _0xc231x9f) {
                        _0xc231x9f = _0xc231x81;
                        _0xc231x53.active = true;
                        _0xc231x53.piece = _0xc231x62;
                        _0xc231x53.node = _0xc231x63;
                    }
                }
            }
        }
    };
    this.mouseMove = function (_0xc231x66, _0xc231x67) {
        _0xc231x58 = _0xc231x56;
        _0xc231x59 = _0xc231x57;
        _0xc231x56 = _0xc231x66 - 10;
        _0xc231x57 = _0xc231x67 - 10;
    };
    this.mouseUp = function (_0xc231x66, _0xc231x67) {
        _0xc231x52 = false;
        _0xc231x56 = _0xc231x66 - 10;
        _0xc231x57 = _0xc231x67 - 10;
        _0xc231x53.active = false;
        _0xc231x53.piece = _0xc231x10;
        _0xc231x53.node = _0xc231x11;
    };
    this.timer = setTimeout("tetris.update()", 20);
}
document.onmousedown = function (_0xc231xa0) {
    tetris.mouseDown(_0xc231xa0.pageX, _0xc231xa0.pageY);
};
document.onmousemove = function (_0xc231xa0) {
    tetris.mouseMove(_0xc231xa0.pageX, _0xc231xa0.pageY);
};
document.onmouseup = function (_0xc231xa0) {
    tetris.mouseUp(_0xc231xa0.pageX, _0xc231xa0.pageY);
};
