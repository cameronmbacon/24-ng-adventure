'use strict';

require('./_player-info.scss');

require('angular')
.module('horrorHouse')
.component('playerInfo', {
  template: require('./player-info.html'),
  controllerAs: 'playerInfoCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#playerInfoCtrl');
    this.player = playerService.player;
  }],
});
