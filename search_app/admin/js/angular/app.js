var appModule = angular.module('adminApp', ['ui.router', 'ui.load', 'datatables', 'ui.bootstrap', "oc.lazyLoad", 'ngCookies']); //定义路由，注入ui.router依赖

//设置地址域
var httpsrc = "";

/*js原生获取cookie参数*/
function getcookies(value) {
    var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
    var arrCookie = getCookie.split(";"); //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
    var tips; //声明变量tips
    for (var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
        var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if (value == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
            tips = arr[1]; //将cookie的值赋给变量tips
            break; //终止for循环遍历
        }
    }
    return tips;
}

if (!getcookies("token")) {
    // window.location.href = "login.html";
} else {
    //设置token
    var token = getcookies("token");
    var username = getcookies("username");
    $(".username").html(username);
}

/*console.log("token:");
console.log(token);*/
var token = "a75fa39a-6437-4272-bac1-afaa9f6730a3:0a0a6fb7cb590cbcc2b31195b44d9d91fdab5b0aa1f257e49e4a575a196d7d55";

//刷新时使用默认值
//var pidnomail = '';

// var pid = GetQueryString("pid");
var pid = 111;
var tab_index = GetQueryString("tab_index");

/**
 * 控制器loading
 */

appModule.factory("interceptors", [function () {
    return {
        'request': function (request) {
            if (request.beforeSend)
                request.beforeSend();
            return request;
        },
        'response': function (response) {
            if (response.config.complete)
                response.config.complete(response);
            return response;
        }
    };
}]);

/**
 * UNDERSCORE
 */
appModule.factory('_', function () {
    return _;
});
/**
 * API 服务
 */
appModule.service("apiService", function ($http) {
    /**
     * 二次封装API请求
     * @param url 请求URL
     * @param postData
     * @param callback
     * @param beforeCallback
     */
    this.queryAPI = function (url, postData, callback, beforeCallback) {

        if (isNullOrEmpty(url) || isNullOrEmpty(token)) {
            console.log('queryAPI发生异常，URL或者Token不能为空！');
            return;
        }

        // console.log(token);

        // 尚未解决在Service里面注入interceptor，只能先手动进行处理了。
        if (beforeCallback) beforeCallback();

        var _url = url.startWith('http') ? url : httpsrc + url; //如果URL是http开头的，直接调用，不需要拼接URL

        $http({
            method: 'POST',
            headers: {
                "Authorization": token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: _url,
            data: postData ? postData : '',
            // beforeSend: beforeCallback ? beforeCallback() : null,
            complete: function (res) {

                // console.log('API请求[' + _url + ']，发送的postdata为：');
                // console.log(postData);
                // console.log('返回结果为：');
                // console.log(res.data);

                if (callback)
                    callback(res)
            }
        });
    }

});
//
// /**
//  * 测试API请求
//  * @param pid
//  */
// function queryAPITest(pid) {
//
//     var apiUrl = "/article/linkInfo/" + pid;
//     var postData = {"projectId": pid, "": token, "": api};
//     queryAPI(apiUrl, postData, function (data) {
//         console.log('请求结果：');
//         console.log(data);
//     });
// }

/**
 * 绝对值的过滤器
 */
appModule.filter('absFilter', function () { //可以注入依赖
    return function (text) {
        return Math.abs(text);
    }
});

/**
 * 百分比过滤器
 */
appModule.filter('percentNick', function () {
    return function () {
        var arr = Array.prototype.slice.call(arguments),
            sum = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
            sum += arr[i] ? arr[i] : 0;
        }
        //0/0也是nan
        return sum == 0 ? '0%' : Math.round((arr[0] ? arr[0] : 0) / sum * 10000) / 100 + "%";
    }
});


/**
 * 处理angular 渲染和jquery冲突的问题（加载完数据再渲染）
 */
appModule.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});


/**
 * 字符长度过滤
 */
appModule.filter('textLengthSet', function() {
    return function(value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');//'...'可以换成其它文字
    };
});


//多选单选按钮初始化
function icheckbox_addfl() {
    $('.mormalcheckbox,.mormalradio').iCheck({
        labelHover: false,
        cursor: true,
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
};

/**
 * 倒序排列
 */
appModule.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

/**
 * 提示框
 */
function tip(msg){
    $('body').find(".tip").remove();
    var html = '<div class="tip"></div>';
    $('body').append(html);
    $('.tip').html(msg).stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
}

/**
 * 输入数据格式化json，去除逗号，空格，换行
 */
function toJson(txt){
    return txt.split(/[,， \n]/);
}

/**
 * 输入数据格式化json，去除逗号，空格，换行 并格式化为统一英文逗号，方便数据存储到数据库 varchar类型
 */
function toArr(txt){
    var thisValue = txt.split(/[,， \n]/);
    // console.log(thisValue);
    return thisValue.join();
}

appModule.controller('mainController', ['$scope', '$http', '$location', '$cookies', '$cookieStore', function ($scope, $http, $location, ipCookie, $cookies, $cookieStore) {

    $scope.$on("BUSY", function () {
        $scope.busy = true;
    }); //显示loading

    $scope.$on("NOTBUSY", function () {
        $scope.busy = false;
    }); //隐藏loading

    //註銷按鈕（銷毀cookies）
    $scope.loginOutBtn = function () {
        $cookies.remove('token', {
            path: '/'
        });
        window.location.href = "login.html";
    };

    $scope.pid = pid;
    $scope.tab_index = tab_index;

    $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState) { //toParams 传的参数
            $scope.current_state_name = $location.path(); //获取子页面路径名
            //console.log($scope.current_state_name);
            $scope.current_state_name = $scope.current_state_name.replace(/\//g, '.').substr(1); //获取子页面路径名去掉斜杠
            //console.log($scope.current_state_name);
            var index_p = $scope.current_state_name.replace('.', 'a').indexOf('.');
            $scope.parent_state = $scope.current_state_name.replace('.', 'a');
            $scope.child_state = $scope.parent_state.replace('.', 'a');
            var index_p = $scope.parent_state.indexOf('.');
            var index_c = $scope.child_state.indexOf('.');
            $scope.parent_state_name = $scope.current_state_name;
            $scope.child_state_name = $scope.current_state_name;
        });


}]);