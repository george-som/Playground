'use strict';
// Example from http://www.startersquad.com/blog/angularjs-requirejs/


require.config({
    paths: {
        domReady: "lib/requirejs-domready/domReady",
        angular: "lib/angular-1.2.8/angular",
        angularRoute: "lib/angular-1.2.8/angular-route"
    },
    shim: {
        'angular': {
            exports : 'angular'
        },
        'angularRoute': ['angular']
    },
    deps: ['./bootstrap-async']
});

/*
requirejs(['angular'], function(angular) {

});
    */