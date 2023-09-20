import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';
import { motion } from 'framer-motion';
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';

const skills = [
  {
    name: 'Next',
    icon: (
      <SiNextdotjs
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#000]"
      />
    ),
  },
  {
    name: 'CSS',
    icon: (
      <SiCss3
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#1572B6]"
      />
    ),
  },
  {
    name: 'Javascript',
    icon: (
      <SiJavascript
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#F7DF1E]"
      />
    ),
  },
  {
    name: 'React',
    icon: (
      <SiReact
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#61DAFB]"
      />
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <SiTypescript
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#3178C6]"
      />
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <SiTailwindcss
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#06B6D4]"
      />
    ),
  },
  {
    name: 'Jest',
    icon: (
      <SiJest
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#C21325]"
      />
    ),
  },
  {
    name: 'Git',
    icon: (
      <SiGit
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#F05032]"
      />
    ),
  },
  {
    name: 'Node',
    icon: (
      <SiNodedotjs
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#68A063]"
      />
    ),
  },
  {
    name: 'Express',
    icon: (
      <SiExpress
        size={'3em'}
        className="origin-bottom transition duration-300 group-hover:text-[#303030]"
      />
    ),
  },
];

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
            className="duration-400 flex max-w-max items-center justify-center gap-2 rounded-2xl p-2 text-lg font-semibold transition-shadow hover:border-2 hover:border-cyan-300 hover:p-[6px] hover:shadow-md hover:shadow-cyan-300 md:text-xl"
          >
            <SiGithub size={'1.5em'} />
            Abdelkrim Chafai
          </a>
        </div>
      </motion.div>
      <motion.div
        style={{ y: spring }}
        className="grid w-full max-w-sm grid-cols-[max-content,1fr] justify-items-end gap-4 p-2 text-sm sm:text-base 2xl:max-w-xl 2xl:gap-8 2xl:text-xl"
      >
        {skills.map((item) => (
          <div key={item.name} className="group flex items-center gap-2">
            <p className="text-base font-semibold sm:text-lg 2xl:text-2xl">
              {item.name}
            </p>
            {item.icon}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
