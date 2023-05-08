import { templates, select } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Discover {
  constructor(element,data){
    const thisDiscover = this;

    thisDiscover.songs = data.songs;
    thisDiscover.authors = data.authors;
    thisDiscover.songsLength = thisDiscover.songs.length;
    //console.log(thisDiscover.songsLength);

    thisDiscover.render(element);
    thisDiscover.getRandomSong();
    thisDiscover.initWidgets();
  }

  render(wrapper) {
    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = wrapper;

    const generatedHTML = templates.discoverWidget();
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;

    thisDiscover.dom.song = thisDiscover.dom.wrapper.querySelector(select.discover.song);
    thisDiscover.dom.link = thisDiscover.dom.wrapper.querySelector(select.nav.discover);
  }

  initWidgets() {
    const thisDiscover = this;

    new AudioPlayer(this.getRandomSong(), thisDiscover.authors, thisDiscover.dom.song);

    // eslint-disable-next-line
    GreenAudioPlayer.init({
      selector: select.discover.player, // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true,
    });


  }

  getRandomSong() {
    const thisDiscover = this;

    const randomSong = thisDiscover.songs[Math.floor(Math.random() * thisDiscover.songs.length)];
    //console.log(randomSong);

    return randomSong;
  }
}


export default Discover;