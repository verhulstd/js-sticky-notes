export class StickyNotes {
  constructor(msg, options = {}) {
    this.msg = msg;
    this.bgImage = this.getRandomBgImg();
    this.rotation = this.getRandomRotation();
    this.position = this.getRandomPosition();
    this.htmlElement = "";
    this.init();
    this.setUpEventListeners();
  }
  init() {
    document.body.insertAdjacentHTML('afterbegin', `
    <div class="postit">
      <strong class="close"></strong>
      <strong class="drag"></strong>
      ${this.msg}
    </div>`);
    this.htmlElement = document.querySelector('div');
    Object.assign(this.htmlElement.style, {
      left: this.position.x + 'px',
      top: this.position.y + 'px',
      transform: `rotate(${this.rotation}deg)`,
      backgroundImage: `url('images/${this.bgImage}.png')`
    })
  }

  setUpEventListeners() {
    this.htmlElement.querySelector('.close').addEventListener('click', this.handleClose.bind(this));
    /*
    Draggable.create(this.htmlElement, {
      type: "x,y",
      trigger: this.htmlElement.querySelector('.drag'),
      edgeResistance: 0.65,
      bounds: "body",
      onDragStart: function () {
        this.target.style.opacity = '.4';
        this.target.style.transform = 'scale(1.1)';
      },
      onDragEnd: function () {
        this.target.style.opacity = '1';
      }
    });
    */
  }

  handleClose(e) {
    this.htmlElement.remove();
  }

  getRandomBgImg() {
    var colors = ['pink', 'yellow', 'green'];
    return colors[Math.floor(Math.random() * 3)];
  }

  getRandomRotation() {
    return Math.floor(Math.random() * 30) - 15;
  }

  getRandomPosition() {
    var resolution = this.getResolution();
    var position = {
      x: Math.floor(Math.random() * (resolution.width - 370)) + (370 / 2),
      y: Math.floor(Math.random() * (resolution.height - 400)) + (400 / 2)
    }
    return position;
  }

  getResolution() {
    var resolution = {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    return resolution;
  }
}