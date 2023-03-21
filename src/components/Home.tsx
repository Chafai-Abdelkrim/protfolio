import { useRef } from 'react';
import { useSmoothScroll, useCanvasEffect } from '../hooks';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { motion } from 'framer-motion';

const Home = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);
  useCanvasEffect();

  return (
    <div id="Home" ref={container} className="grid h-[100svh] grid-rows-[1fr]">
      <header className="fixed z-50 flex w-full justify-end p-2">
        <a
          className="fold relative text-base text-[#58545B]"
          href="mailto:chafai.abdelkrim@gmail.com"
        >
          <MdOutlineMailOutline size={'2em'} />
        </a>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center text-center leading-none">
        <motion.div style={{ y: spring }}>
          <canvas className="canvas"></canvas>
        </motion.div>
      </div>
      <motion.button
        style={{ y: spring }}
        onClick={() => document.getElementById('projects')?.scrollIntoView()}
        className="absolute bottom-0 animate-bounce justify-self-center rounded-full transition duration-300 hover:bg-white/30"
      >
        <MdOutlineKeyboardArrowDown size={'4em'} />
      </motion.button>
    </div>
  );
};

export default Home;
