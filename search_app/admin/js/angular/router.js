/**
 * router 路由页面
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

    $urlRouterProvider.otherwise('home');
    $stateProvider
        //list 页面路由
        .state('home', {
            url: '/home',
            templateUrl: 'pages/list/home.html'
        })
        .state('set_websit', {
            url: '/set_websit',
            templateUrl: 'pages/list/set_websit.html',
            resolve: {
                deps: ['uiLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'js/common/cropper/cropper.min.css?ver=' + new Date().getTime(),
                            'js/common/cropper/sitelogo.css?ver=' + new Date().getTime(),
                            'js/common/js/vendor/bootstrap/bootstrap-datepicker.js',
                            'js/common/cropper/cropper.js',
                            // 'js/common/cropper/sitelogo.js',
                            'js/common/cropper/html2canvas.min.js',
                            // 'js/common/cropper/upload.js',
                            ]);
                    }]
            }
        })
        .state('set_case', {
            url: '/set_case',
            templateUrl: 'pages/list/set_case.html',
            resolve: {
                deps: ['uiLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'js/common/js/uploadimg/uploadimg.css?ver=' + new Date().getTime()
                        ]);
                    }]
            }
        })

        //article 页面路由
}]);
