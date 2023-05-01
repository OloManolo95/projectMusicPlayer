//SETTINGS

export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    searchWidget: '#template-search-widget',
    discoverWidget: '#template-discover-widget',
    songWidget: '#template-song-widget',
  },
  containerOf: {
    pages: '#pages',
    home: '.page-home',
    search: '.page-search',
    discover: '.page-discover'
  },
  nav: {
    links: '.navbar-link',
  },
  home: {
    player: '.page-home .audio-player',
    songsList: '.songs',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    data: 'data',
  },
};

export const templates = {
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  searchWidget: Handlebars.compile(document.querySelector(select.templateOf.searchWidget).innerHTML),
  discoverWidget: Handlebars.compile(document.querySelector(select.templateOf.discoverWidget).innerHTML),
  songWidget: Handlebars.compile(document.querySelector(select.templateOf.songWidget).innerHTML),
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};