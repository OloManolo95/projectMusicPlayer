import { templates, select, classNames} from '../settings.js';
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
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

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

    const idFromHash = window.location.hash.replace('#/', '');
    //console.log(idFromHash);
    let pageMatchingHash = thisHome.pages[0].id;
    console.log(thisHome.pages);
    for(let page of thisHome.pages) {
      if(page.id == idFromHash){
        console.log(page.id);
        pageMatchingHash = page.id;
        break;
      }
    }

    thisHome.activatePage(pageMatchingHash);

    thisHome.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      console.log('click');
      const clickedElement = event.target;

      /* get page id from href attribute */
      const id = clickedElement.getAttribute('href').replace('#', '');
      console.log(id);
      /* run thisApp.activatePage with that id */
      thisHome.activatePage(id);
      /* change URL hash */
      window.location.hash = '#/' + id;


    });
  }

  activatePage(pageId){
    const thisApp = this;
    console.log(thisApp.pages);
    //add class "active" to matching pages, remove from non-matching
    for(let page of thisApp.pages){
      console.log(page);
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    //add class "active" to matching links, remove from non=matching
    for(let link of thisApp.navLinks){
      console.log(link);
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId);
    }
  }


}

export default Home;
