class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-burger-button]',
  };

  stateSelectors = {
    isActive: 'is-active',
    isLocked: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.bindElement();
  }

  onClickBurgerButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateSelectors.isActive);
    this.overlayElement.classList.toggle(this.stateSelectors.isActive);
    document.documentElement.classList.toggle(this.stateSelectors.isLocked);
  };

  bindElement() {
    this.burgerButtonElement.addEventListener(
      'click',
      this.onClickBurgerButton
    );
  }
}

export default Header;
