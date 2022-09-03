const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

let ravens = [];
class Raven {
  constructor() {
    this.width = 100;
    this.height = 50;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 3;
    this.directionY = Math.random() * 5 - 2.5;
  }
  update() {};
}
