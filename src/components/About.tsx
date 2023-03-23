import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

const About = () => {
  const container = useRef(null);
  const spring = useSmoothScroll(container);

  return (
    <motion.div
      id="about"
      ref={container}
      style={{ color: '#fefedf' }}
      className="grid h-[100svh] grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2"
    >
      <motion.div
        style={{ y: spring }}
        className="flex w-[90%] max-w-lg flex-col gap-4 p-4 text-center md:text-start"
      >
        <h3 className="text-3xl font-bold sm:text-4xl 2xl:text-5xl">
          About Me
        </h3>
        <p className="md:text-lg 2xl:text-xl">
          <em className="text-cyan-300">
            Committed to the idea of life-long learning
          </em>
          , I am passionate about web development and the endless possibilities
          it offers. I am always seeking new challenges and opportunities to
          grow and improve as a developer.
        </p>
        <p className="md:text-lg 2xl:text-xl">
          Whether working on a personal project or collaborating with a team, I
          am committed to delivering high-quality and scalable web applications
          that meet the needs of users and businesses.
        </p>
        <div className="mr-5 flex justify-center">
          <a
            href="https://github.com/Chafai-Abdelkrim"
            target="_blank"
            rel="noreferrer"
            className="flex max-w-max items-center justify-center gap-2 rounded-2xl p-2 text-lg font-semibold hover:border-2 hover:border-cyan-300 hover:p-[6px] hover:shadow-md hover:shadow-cyan-300 md:text-xl"
          >
            <SiGithub size={'1.5em'} />
            Abdelkrim Chafai
          </a>
        </div>
      </motion.div>
      <motion.div></motion.div>
    </motion.div>
  );
};

export default About;
