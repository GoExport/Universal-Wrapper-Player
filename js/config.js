// js/config.js

// Refers to video player environment (e.g. 'local', 'ft', etc.)
const environment = {
    // All these properties are filled in by the user via GET parameters
    local: {
        special: {
            'swf': 'http://localhost:4343/animation/414827163ad4eb60/player.swf'
        },
        attributes: {},
        flashvars: {
            'autostart': 1,
            'isWide': 1,
            'ut': 60,
            'isEmbed': 1,
            'playerWidth': 1280,
            'playerHeight': 720,
            'apiserver': 'http://localhost:4343/',
            'storePath': 'http://localhost:4343/store/3a981f5cb2739137/<store>',
            'clientThemePath': 'http://localhost:4343/static/ad44370a650793d9/<client_theme>',
            'movieId': null,
            'isVideoRecord': 0,
            'isSpeedy': 0,
        },
        params: {
            'allowFullScreen': 'true',
            'allowScriptAccess': 'always',
        }
    },
    ft: {
        special: {
            'swf': 'https://lightspeed.flashthemes.net/static/animation/aisd82ij/player.swf?v=2'
        },
        attributes: {},
        flashvars: {
            'movieOwnerId': null,
            'movieId': null,
            'isVideoRecord': 0,
            'playerWidth': 1280,
            'playerHeight': 720,
            'isSpeedy': 0,
            'ut': '-1',
            'apiserver': 'https://flashthemes.net/',
            'autostart': 1,
            'storePath': 'https://flashthemes.net/static/store/<store>?v=%userid%',
            'clientThemePath': 'https://lightspeed.flashthemes.net/static/ct/ad44370a650793d9/<client_theme>',
            'isEmbed': 1,
            'chain_mids': '',
            'ad': 0,
            'endStyle': 1,
            'isWide': 1,
            'pwm': 1
        },
        params: {
            'allowFullScreen': 'true',
            'allowScriptAccess': 'always',
        }
    },
}

// Placeholder values
const placeholders = [
    "%userid%"
];