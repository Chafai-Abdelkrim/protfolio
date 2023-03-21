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
}

export default useCanvasEffect;
