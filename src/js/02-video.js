// Імпорт бібліотек
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// Обробка події теперішній час при програванні відео з затримкою 1с
player.on('timeupdate',throttle(savedTime,1000) );
// Функція збереження часу з плейера до сховища
function savedTime (data) {
    const keys = Object.keys(data);
    for (const key of keys) {
        if (key === 'seconds') {
            console.log(data[key]);
            const currentTime = data[key];
            localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
        }
    }
}

// Всстановлення часу початку відтворення відео в плейер
player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0.0)
    .then(function (seconds) {
        seconds = JSON.parse(localStorage.getItem('videoplayer-current-time'));
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
}
);

