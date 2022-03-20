import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');
const key = localStorage.getItem(STORAGE_KEY);

if (key) {
    player.setCurrentTime(parseFloat(key));
  }

  

  player.on(
    'timeupdate',
    throttle(data => {
      localStorage.setItem(STORAGE_KEY, data.seconds.toString());
    }, 1000),
  );
  