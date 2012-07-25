'use strict';

angular.module('todoService', ['ngResource']).
        factory('Todo', function ($resource) {
            return $resource('rest/todo/:id', {}, {
                'save': {method:'PUT'}
            });
        });
