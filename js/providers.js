/*global angular*/
'use strict';

angular.module('notesApp').
    factory('localStorage', function() {
        var store = {
            notes: [{
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
            }],
            getAll: function() {
                return store.notes;
            }
        };

        return store;
    });
