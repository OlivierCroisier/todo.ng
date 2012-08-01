'use strict';

angular.module('todoApp', ['todoService']).
        config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
            when('/todo/list', {templateUrl:'views/todo-list.html', controller:TodoListController}).
            when('/todo/new', {templateUrl:'views/todo-new.html', controller:TodoNewController}).
            when('/todo/:id', {templateUrl:'views/todo-detail.html', controller:TodoDetailController}).
            otherwise({redirectTo:'/todo/list'});
}]);
