'use strict';

function TodoListController($scope, $location, Todo) {
    $scope.todos = Todo.query();
    $scope.gotoTodoNewPage = function() {
        $location.path("/todo/new")
    };
}

function TodoDetailController($scope, $routeParams, $location, Todo) {
    $scope.todo = Todo.get({id:$routeParams.id}, function (todo) {
    });
    $scope.gotoTodoListPage = function() {
        $location.path("/")
    };
}

function TodoNewController($scope, $location, Todo) {
    $scope.project = {};
    $scope.submit = function () {
        Todo.save($scope.todo, function (todo) {
            $location.path('/');
        });
    };
    $scope.gotoTodoListPage = function() {
        $location.path("/")
    };
}
