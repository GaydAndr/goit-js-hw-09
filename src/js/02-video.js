import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerOn, 1000));

let currentTime = 0;
// console.log(currentTime);

function playerOn(event) {
  currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}
currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
