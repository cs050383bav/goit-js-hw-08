import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');
const key = localStorage.getItem(KEY);
if (key) {
    player.setCurrentTime(parseFloat(key));
  }

  