
define([
    'require',
    'angular',
    'app-async'], function(require, ng) {
        'use strict';

        require(['domReady!'], function (document) {
            ng.bootstrap(document, ['app-async']);
        });
    }
);