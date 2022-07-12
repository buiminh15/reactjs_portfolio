import { WORKS_IMG } from "./images";

const worksData = [
  {
    id: 1,
    src: WORKS_IMG.DATA_RES,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "navbar-responsive",
    linkGithub: "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/navbar-responsive",
  },
  {
    id: 2,
    src: WORKS_IMG.GALAXY,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "galaxy",
    linkGithub: "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/galaxy-travel",
  },
  {
    id: 3,
    src: WORKS_IMG.NETFLIX,
    tech: ["Next Js", "TailwindCss", "Firebase", "TMDB Api"],
    linkWeb: "https://nextjs-movie-disney.vercel.app/",
    linkGithub: "https://github.com/buiminh15/nextjs_movie_disney",
    external: true,
  },
];

export { worksData };
