import { templates, select} from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Home {
  constructor(element,data) {
    const thisHome = this;

    thisHome.data = data;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(wrapper) {
    const thisHome = this;

    thisHome.dom = {};

    thisHome.dom.wrapper = wrapper;

    const generatedHTML = templates.homeWidget();
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.songsList = thisHome.dom.wrapper.querySelector(select.home.songsList);
    thisHome.dom.button = thisHome.dom.wrapper.querySelector(select.home.subscribeButton);

  }

  initWidgets() {
    const thisHome = this;
    console.log(thisHome.data);
    for (let song of thisHome.data.songs) {
      //console.log(song);
      new AudioPlayer(song, thisHome.data, thisHome.dom.songsList);
    }

    // eslint-disable-next-line
    GreenAudioPlayer.init({
      selector: select.home.player,
      stopOthersOnPlay: true,
    });
  }

}

export default Home;
