const rootSelector = ['data-js-header-promo'];

class ClosePromo {
  classes = {
    root: rootSelector,
    button: '[data-js-header-promo-close]',
  };

  stateClasses = {
    visuallyHidden: 'visually-hidden',
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttonElement = this.rootElement.querySelector(this.classes.button);
    this.bindEvents();
  }

  hide() {
    this.rootElement.classList.add(this.stateClasses.visuallyHidden);
    this.rootElement.inert = true;
    this.rootElement.setAttribute('aria-hidden', 'true');
  }

  onButtonClick = () => {
    this.hide();
  };

  bindEvents() {
    this.buttonElement.addEventListener('click', this.onButtonClick);
  }
}

class ClosePromoCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(`[${rootSelector}]`).forEach(root => {
      new ClosePromo(root);
    });
  }
}

export default ClosePromoCollection;
