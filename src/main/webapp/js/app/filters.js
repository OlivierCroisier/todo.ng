angular.module('filters', []).
        filter('ellipsis', function () {
            return function (text, length) {
                if (isNaN(length))
                    length = 10;

                var end = "...";

                if (text.length <= length || text.length - end.length <= length) {
                    return text;
                } else {
                    return String(text).substring(0, length - end.length) + end;
                }

            };
        });
