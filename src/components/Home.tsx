import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';

const Home = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);

  return (
    <div
      id="Home"
      ref={container}
      className="grid h-[100svh] grid-rows-[1fr]"
    ></div>
  );
};

export default Home;
