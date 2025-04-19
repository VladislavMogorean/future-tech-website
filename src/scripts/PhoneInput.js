import { countryMasks } from './PhoneMasks.js';
import IMask from 'imask';

const rootSelector = ['data-js-phone-input'];

class PhoneInput {
  classes = {
    root: rootSelector,
    input: 'input',
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.inputElement = this.rootElement.querySelector(this.classes.input);

    if (!this.inputElement) return;

    this.init();
    this.bindEvents();
  }

  init() {
    this.iti = window.intlTelInput(this.inputElement, {
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js',
      initialCountry: 'us',
    });

    this.applyMask(this.iti.getSelectedCountryData().iso2);
  }

  applyMask(countryCode) {
    if (this.maskInstance) {
      this.maskInstance.destroy();
    }

    const mask = countryMasks[countryCode] || countryMasks['default'];

    this.maskInstance = IMask(this.inputElement, {
      mask: mask,
    });
  }

  onCountryChange = () => {
    const countryData = this.iti.getSelectedCountryData();
    this.applyMask(countryData.iso2);
  };

  bindEvents() {
    this.inputElement.addEventListener('countrychange', this.onCountryChange);
  }

  getNumber() {
    return this.iti.getNumber();
  }

  isValid() {
    return this.iti.isValidNumber();
  }
}

class PhoneInputCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(`[${rootSelector}]`).forEach(root => {
      new PhoneInput(root);
    });
  }
}

export default PhoneInputCollection;
