import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';

import cvAppDesktop from '../assets/cv-app_desktop_.webp';
import cvAppMobile from '../assets/cv-app_mobile_.webp';

import shoppingCartDesktop from '../assets/shopping-cart_desktop_.webp';
import shoppingCartMobile from '../assets/shopping-cart_mobile_.webp';

import todoListDesktop from '../assets/todo-list_desktop_.webp';
import todoListMobile from '../assets/todo-list_mobile_.webp';

import weatherAppDesktop from '../assets/weather-app_desktop_.webp';
import weatherAppMobile from '../assets/weather-app_mobile_.webp';

import chatAppDesktop from '../assets/chat-app_desktop_.webp';
import chatAppMobile from '../assets/chat-app_mobile_.webp';

import battleshipDesktop from '../assets/battleship_desktop_.webp';
import battleshipMobile from '../assets/battleship_mobile_.webp';

import memoryGameDesktop from '../assets/memory-game_desktop_.webp';
import memoryGameMobile from '../assets/memory-game_mobile_.webp';

const projectsArray = [
  {
    title: 'CV Generator',
    desc: 'A CV builder application. Users can create a customised CV with optional picture upload and ability to download the finished CV.',
    demoLink: 'https://chafai-abdelkrim.github.io/cv-app/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/cv-app',
    desktopImg: cvAppDesktop,
    mobileImg: cvAppMobile,
    icons: [
      <SiReact key={'React'} title={'React'} />,
      <SiJavascript key={'Javascript'} title={'Javascript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
    ],
  },
  {
    title: 'Game Shop',
    desc: 'Fake game shop with a shopping cart, Users can browse and search for any game with the help of the RAWG game database API.',
    demoLink: 'https://chafai-abdelkrim.github.io/shopping-cart/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/shopping-cart',
    desktopImg: shoppingCartDesktop,
    mobileImg: shoppingCartMobile,
    icons: [
      <SiReact key={'React'} title={'React'} />,
      <SiTypescript key={'TypeScript'} title={'TypeScript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
    ],
  },
  {
    title: 'Todo List',
    desc: 'A todo list application where users can create todos and projects and sort them by importance. Completed and Deleted todos or projects are also tracked.',
    demoLink: 'https://chafai-abdelkrim.github.io/Todo-List/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/Todo-List',
    desktopImg: todoListDesktop,
    mobileImg: todoListMobile,
    icons: [
      <SiHtml5 key={'Html5'} title={'Html5'} />,
      <SiJavascript key={'Javascript'} title={'Javascript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
      <SiWebpack key={'Webpack'} title={'Webpack'} />,
    ],
  },
  {
    title: 'Weather App',
    desc: 'A weather application built with the Open Weather API. Users can search for any locations weather with daily and hourly forecast',
    demoLink: 'https://chafai-abdelkrim.github.io/weather-app/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/weather-app',
    desktopImg: weatherAppDesktop,
    mobileImg: weatherAppMobile,
    icons: [
      <SiHtml5 key={'Html5'} title={'Html5'} />,
      <SiJavascript key={'Javascript'} title={'Javascript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
      <SiWebpack key={'Webpack'} title={'Webpack'} />,
    ],
  },
  {
    title: 'Chat App',
    desc: 'Simple chat application that allows users to chat with each other in the same room, using the Firebase Firestore and Authentication services.',
    demoLink: 'https://chafai-abdelkrim.github.io/chat-app/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/chat-app',
    desktopImg: chatAppDesktop,
    mobileImg: chatAppMobile,
    icons: [
      <SiReact key={'React'} title={'React'} />,
      <SiTypescript key={'Typescript'} title={'Typescript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
      <SiFirebase key={'Firebase'} title={'Firebase'} />,
    ],
  },
  {
    title: 'Battleship',
    desc: 'A classic battleship game. Users can play against a relatively smart AI.',
    demoLink: 'https://chafai-abdelkrim.github.io/battleship/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/battleship',
    desktopImg: battleshipDesktop,
    mobileImg: battleshipMobile,
    icons: [
      <SiHtml5 key={'Html5'} title={'Html5'} />,
      <SiJavascript key={'Javascript'} title={'Javascript'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
      <SiWebpack key={'Webpack'} title={'Webpack'} />,
      <SiJest key={'Jest'} title={'Jest'} />,
    ],
  },
  {
    title: 'Memory Game',
    desc: 'Cat pics memory game where you try not to select the same Cat more than once.',
    demoLink: 'https://chafai-abdelkrim.github.io/memory-card/',
    codeLink: 'https://github.com/Chafai-Abdelkrim/memory-card',
    desktopImg: memoryGameDesktop,
    mobileImg: memoryGameMobile,
    icons: [
      <SiReact key={'React'} title={'React'} />,
      <SiCss3 key={'Css'} title={'Css'} />,
    ],
  },
];

export default projectsArray;
