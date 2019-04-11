/**
 * 用户中心控制器
 */
appModule.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', "$httpProvider", function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
    appModule.controller = $controllerProvider.register;
    appModule.directive = $compileProvider.directive;
    appModule.filter = $filterProvider.register;
    appModule.factory = $provide.factory;
    appModule.service = $provide.service;
    appModule.constant = $provide.constant;
    appModule.value = $provide.value;
    $httpProvider.interceptors.push('interceptors');//控制器loading

    $urlRouterProvider.otherwise('user_info');
    $stateProvider
        .state('user_info', {
            url: '/user_info',
            templateUrl: 'pages/user/user_info.html',
            resolve: {
                deps: ['uiLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/controller/user/user_info.js?ver=' + new Date().getTime()]);
                    }]
            }
        })
        .state('user_pass', {
            url: '/user_pass',
            templateUrl: 'pages/user/user_pass.html',
            resolve: {
                deps: ['uiLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/controller/user/user_pass.js?ver=' + new Date().getTime(),'../js/jquery.base64.js?ver=' + new Date().getTime()]);
                    }]
            }
        })
        .state('user_list', {
            url: '/user_list',
            templateUrl: 'pages/user/user_list.html',
            resolve: {
                deps: ['uiLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/controller/user/user_list.js?ver=' + new Date().getTime()]);
                    }]
            }
        })
}]);

