import { templates } from '../settings.js';

class Discover {
  constructor(element,data){
    const thisDiscover = this;

    thisDiscover.songs = data.songs;
    thisDiscover.authors = data.authors;

    thisDiscover.render(element);
  }

  render(wrapper) {
    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = wrapper;

    const generatedHTML = templates.discoverWidget();
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Discover;