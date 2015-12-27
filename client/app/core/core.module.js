(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngSanitize',
        //'ngAnimate', 'ngRoute', 'ngSanitize',
        /*
         * Our reusable cross app code modules
         */
        'blocks.socket', 'blocks.wlfgConfirm', 'blocks.wlfgAppTitle', 'blocks.wlfgWCL',
        //'blocks.exception', 'blocks.logger', 'blocks.router',
        /*
         * 3rd Party modules
         */
        'ui.router', 'pascalprecht.translate', 'btford.socket-io', 'angularMoment', 'infinite-scroll', 'ui.bootstrap', 'angular-ranger', 'isteven-multi-select', 'hc.marked'
    ]);
})();