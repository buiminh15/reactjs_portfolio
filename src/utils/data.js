import { WORKS_IMG } from "./images";

const worksData = [
  {
    id: 1,
    src: WORKS_IMG.DATA_RES,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "navbar-responsive",
    linkGithub: "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/navbar-responsive",
    desc: 'I code this project to learn the mobile first principle of tailwind css'
  },
  {
    id: 2,
    src: WORKS_IMG.GALAXY,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "galaxy",
    linkGithub: "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/galaxy-travel",
    desc: 'I code this project to learn grid, react-scroll and image optimization of webpack'
  },
  {
    id: 3,
    src: WORKS_IMG.NETFLIX,
    tech: ["Next Js", "TailwindCss", "Firebase", "TMDB Api"],
    linkWeb: "https://nextjs-movie-disney.vercel.app/",
    linkGithub: "https://github.com/buiminh15/nextjs_movie_disney",
    external: true,
    desc: 'I code this project to learn how nextjs working'
  },
];

export { worksData };
