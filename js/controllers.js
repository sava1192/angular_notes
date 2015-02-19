/*global angular */
'use strict';

angular.module('notesApp').
    controller('NotesController', ['$scope', 'localStorage', function ($scope, store) {
        //defautl initialization
        $scope.notes = store.getAll();
    }]);
