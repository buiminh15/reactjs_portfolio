import Logo from "../assets/navbar/images/logo.png";
import GalaxySpaceVideo from "../assets/galaxy/images/space.mp4";
import GalaxyMoon from "../assets/galaxy/images/moon.jpg";
import GalaxyPod from "../assets/galaxy/images/pod.jpg";
import GalaxyHeroImg from "../assets/galaxy/images/heroImg.jpg";

// portfolio
import HTML from '../assets/portfolio/images/html.png';
import CSS from '../assets/portfolio/images/css.png';
import JavaScript from '../assets/portfolio/images/javascript.png';
import ReactImg from '../assets/portfolio/images/react.png';
import Node from '../assets/portfolio/images/node.png';
import FireBase from '../assets/portfolio/images/firebase.png';
import AWS from '../assets/portfolio/images/aws.png';
import GitHub from '../assets/portfolio/images/github.png';
import Tailwind from '../assets/portfolio/images/tailwind.png';
import Mongo from '../assets/portfolio/images/mongo.png';

import WorkImage from '../assets/portfolio/images/workImg.jpeg';
import WorkDataRes from '../assets/portfolio/images/data-responsive.PNG';
import WorkGalaxyTravel from '../assets/portfolio/images/galaxy-travel.PNG';


const skillsData = [
  {
    id: 1,
    src: HTML,
    name: 'HTML'
  },
  {
    id: 2,
    src: CSS,
    name: 'CSS'
  },
  {
    id: 3,
    src: JavaScript,
    name: 'JavaScript'
  },
  {
    id: 4,
    src: ReactImg,
    name: 'React'
  },
  {
    id: 5,
    src: Node,
    name: 'Node'
  },
  {
    id: 6,
    src: Mongo,
    name: 'Mongo'
  },
  {
    id: 7,
    src: GitHub,
    name: 'GitHub'
  },
  {
    id: 8,
    src: Tailwind,
    name: 'Tailwind'
  },
]

const WORKS_IMG = {
  DATA_RES: WorkDataRes,
  GALAXY: WorkGalaxyTravel,
}

export { Logo, GalaxyHeroImg, GalaxyMoon, GalaxyPod, GalaxySpaceVideo, skillsData, WorkImage, WORKS_IMG };
