/* @flow */

module.exports = {
    'extends': './node_modules/grumbler-scripts/config/.eslintrc-browser.js',

    globals: {
        __STAGE__: true,
        __PARTNER_ATTRIBUTION_ID__: true,
        __LOCALE_COUNTRY__: true,
        __LOCALE_LANG__: true,
        __DEFAULT_LANG__: true,
        __CURRENCY__: true,
        __INTENT__: true,
        __COMMIT__: true,
        __VAULT__: true,
        __VERSION__: true,

        __HOST__: true,
        __HOSTNAME__: true,
        __PORT__: true,
        __PATH__: true,
        __STAGE_HOST__: true,
        __CORRELATION_ID__: true
    }
};