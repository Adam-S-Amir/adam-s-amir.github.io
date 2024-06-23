const config = {
    "base_path": "./assets/",
    "logs": true,
    "debug": false,
    "camera": {
        "fov": 45,
        "aspect": window.innerWidth / window.innerHeight,
        "near": 0.1,
        "far": 150,
        "controls": false,
        "helper": false
    },
    "renderer": {
        "width": window.innerWidth,
        "height": window.innerHeight,
        "render_at": .9,
        "interval": false,
        "fps_counter": true,
        "antialias": false,
        "shadows": false,
        "shadows_type": THREE.PCFSoftShadowMap,
        "fog": true,
        "toneMapping": true,
        "effects": true,
        "postprocessing": {
            "enable": false,
            "sao": false,
        }
    },
    "IS_HIDPI": window.devicePixelRatio > 1,
    "IS_IOS": (/CriOS/.test(window.navigator.userAgent) || /iPad|iPhone|iPod|MacIntel/.test(window.navigator.platform) && !(/Safari/.test(window.navigator.userAgent))),
    "IS_MOBILE": /Android/.test(window.navigator.userAgent) || this.IS_IOS
}