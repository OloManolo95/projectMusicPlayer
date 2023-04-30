import { templates } from '../settings.js';

class Home {
  constructor(element,data) {
    const thisHome = this;

    thisHome.data = data;
    thisHome.render(element);
  }

  render(wrapper) {
    const thisHome = this;

    thisHome.dom = {};

    thisHome.dom.wrapper = wrapper;

    const generatedHTML = templates.homeWidget();
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;
