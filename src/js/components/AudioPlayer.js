import { templates } from '../settings.js';

class AudioPlayer {
  constructor(song, authors, wrapper) {
    const thisAudioPlayer = this;

    thisAudioPlayer.song = song;
    thisAudioPlayer.authors = authors;

    thisAudioPlayer.render(wrapper);
  }

  render(wrapper) {
    const thisAudioPlayer = this;

    thisAudioPlayer.dom = {};

    thisAudioPlayer.dom.wrapper = wrapper;

    const generatedHTML = templates.audioPlayerWidget();
    thisAudioPlayer.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default AudioPlayer;