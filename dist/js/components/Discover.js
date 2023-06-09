import { templates, select } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Discover {
  constructor(element,data){
    const thisDiscover = this;

    thisDiscover.songs = data.songs;
    thisDiscover.authors = data.authors;
    thisDiscover.songsLength = thisDiscover.songs.length;
    thisDiscover.randomSong = thisDiscover.getRandomSong();
    console.log(thisDiscover.randomSong);

    thisDiscover.render(element);
    thisDiscover.initWidgets();
    thisDiscover.initActions();
  }

  render(wrapper) {
    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = wrapper;

    const generatedHTML = templates.discoverWidget();
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;

    thisDiscover.dom.song = thisDiscover.dom.wrapper.querySelector(select.discover.song);
    thisDiscover.dom.button = thisDiscover.dom.wrapper.querySelector(select.discover.button);

  }

  initWidgets() {
    const thisDiscover = this;

    new AudioPlayer(thisDiscover.randomSong, thisDiscover.authors, thisDiscover.dom.song);

    // eslint-disable-next-line
    GreenAudioPlayer.init({
      selector: select.discover.player, // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true,
    });

  }

  initActions() {
    const thisDiscover = this;

    thisDiscover.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      console.log('click');
      thisDiscover.dom.song.innerHTML = '';
      thisDiscover.initWidgets();
    });
  }

  getRandomSong() {
    const thisDiscover = this;
    console.log(thisDiscover.songs);
    console.log(thisDiscover.songs.length);
    const randomSong = thisDiscover.songs[Math.floor(Math.random() * thisDiscover.songs.length)];
    console.log(randomSong);
    return randomSong;
  }
}


export default Discover;