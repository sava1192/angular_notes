/*global angular, console */

'use strict';

angular.module('notesApp').controller('NoteController', function($scope) {
    this.notes = [{
        content: 'note content',
        title: 'noet title',
        offset: {
            top: '100px',
            left: '100px',
            position: 'absolute'
        }
    }, {
        content: 'note2 content',
        title: 'noet2 title',
        offset: {
            top: '200px',
            left: '200px',
        }
    }];

    $scope.notes = this.notes;

    $scope.addNote = function(e) {
        console.log(e);
    };
});
