import { templates } from '../settings.js';

class Search {
  constructor(element, data){

    const thisSearch = this;
    thisSearch.render(element);

    thisSearch.songs = data.songs;
    thisSearch.authors = data.authors;

  }

  render(element){
    const thisSearch = this;

    thisSearch.dom = {};
    thisSearch.dom.wrapper = element;

    const generatedHTML = templates.searchWidget();
    thisSearch.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Search;