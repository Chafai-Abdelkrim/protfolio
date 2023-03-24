import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';

const Projects = () => {
  const container = useRef(null);
  const spring = useSmoothScroll(container);

  return (
    <motion.div
      ref={container}
      id="projects"
      className="grid h-[100svh] grid-cols-1 grid-rows-[2fr,min-content,1fr] items-center justify-items-center gap-4 md:grid-cols-2 md:grid-rows-[2fr,1fr]"
    >
      <motion.div></motion.div>
    </motion.div>
  );
};

export default Projects;
