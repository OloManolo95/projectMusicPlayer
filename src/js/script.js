import { settings } from './settings.js';

const app = {
  initData: function() {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.data;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data = parsedResponse;
        console.log(thisApp.data);
      });
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();