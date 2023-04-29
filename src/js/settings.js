//SETTINGS

export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    searchWidget: 'template-search-widget',
    discoverWidget: 'template-discover-widget',
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
};