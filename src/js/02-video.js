import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Player(iframe);

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    if (VIDEO_CURRENT_TIME) localStorage.setItem(VIDEO_CURRENT_TIME, seconds)
}

player.setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME));