import { useState, useEffect } from 'react';

const useCanvasEffect = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;
    //setting canvas width and height
    canvas.width = window.innerWidth > 1600 ? 1600 : window.innerWidth;
    canvas.height = window.innerHeight > 900 ? 900 : window.innerHeight;

    const effect = new Effect(ctx, canvas.width, canvas.height);
  }, [firstLoad]);
};

class Particle {}

class Effect {
  context: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  maxLineHeight: number;
  lineHeight: number;
  textX: number;
  textY: number;
  particles: any;
  gap: number;
  mouse: {
    radius: number;
    x: number;
    y: number;
  };

  constructor(
    context: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    //canvas values
    this.context = context;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.maxLineHeight = this.canvasWidth * 0.15;
    this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
    this.textX = this.canvasWidth / 2;
    this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
    //particules values
    this.particles = [];
    this.gap = 2;
    this.mouse = {
      radius: 1000,
      x: 0,
      y: 0,
    };
    document
      .querySelector('canvas')
      ?.addEventListener('mousemove', (e: any) => {
        const pageOffset = e.currentTarget.getBoundingClientRect();
        this.mouse.x = e.x - pageOffset.left;
        this.mouse.y = e.y - pageOffset.top;
      });
  }

  createText(textArr: string[]) {
    this.context.fillStyle = '#fde9ff';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.textAlign = 'center';

    textArr.forEach((word, index) => {
      if (index === 2) {
        this.context.font = 'clamp(2rem, 0.6667rem + 3.3333vw, 4rem) Lusitana';
        this.context.fillText(
          word,
          this.textX,
          this.textY + index * this.lineHeight * 0.85
        );
      }
      this.context.font = 'bold clamp(6rem, 15vw, 15rem) Raleway';
      this.context.fillText(
        word,
        this.textX,
        this.textY + index * this.lineHeight
      );
    });
  }

  convertToParticles() {
    this.particles.length = 0;
    const pixels = this.context.getImageData(
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    ).data;
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let y = 0; y < this.canvasHeight; y += this.gap) {
      for (let x = 0; x < this.canvasWidth; x += this.gap) {
        const index = (y * this.canvasWidth + x) * 4;
        const alpha = pixels[index + 3];
        if (alpha > 0) {
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const color = `rgb(${red}, ${green}, ${blue})`;
          this.particles.push(new Particle(this, x, y, color));
        }
      }
    }
  }
}

export default useCanvasEffect;
