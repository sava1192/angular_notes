/*global angular*/
'use strict';

angular.module('notesApp').
    directive('note', function() {
        return {
            restrict: 'E',
            templateUrl: 'js/templates/noteTemplate.html'
        };
    });
