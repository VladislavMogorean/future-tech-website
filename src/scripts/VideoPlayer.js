const rootSelector = '[data-js-video-player]';

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    panel: '[data-js-video-player-panel]',
    playButton: '[data-js-video-player-play-button]',
  };

  stateSelectors = {
    isActive: 'is-active',
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.videoElement = rootElement.querySelector(this.selectors.video);
    this.panelElement = rootElement.querySelector(this.selectors.panel);
    this.playButtonElement = rootElement.querySelector(
      this.selectors.playButton
    );

    this.bindEvents();
  }

  onPlayerButtonClick = () => {
    this.videoElement.play();
    this.videoElement.controls = true;
    this.panelElement.classList.remove(this.stateSelectors.isActive);
  };

  onVideoPause = () => {
    this.videoElement.controls = false;
    this.panelElement.classList.add(this.stateSelectors.isActive);
  };

  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayerButtonClick);
    this.videoElement.addEventListener('pause', this.onVideoPause);
  }
}

class VideoPlayerCollection {
  constructor() {
    this.init();
  }

  init() {
    const players = document.querySelectorAll('[data-js-video-player]');

    players.forEach(root => {
      new VideoPlayer(root);
    });
  }
}

export default VideoPlayerCollection;
