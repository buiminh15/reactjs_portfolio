import { WORKS_IMG } from "./images";
import { faker } from "@faker-js/faker";

const worksData = [
  {
    id: 1,
    src: WORKS_IMG.DATA_RES,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "navbar-responsive",
    linkGithub:
      "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/navbar-responsive",
    desc: "I code this project to learn the mobile first principle of tailwind css",
  },
  {
    id: 2,
    src: WORKS_IMG.GALAXY,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "galaxy",
    linkGithub:
      "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/galaxy-travel",
    desc: "I code this project to learn grid, react-scroll and image optimization of webpack",
  },
  {
    id: 3,
    src: WORKS_IMG.NETFLIX,
    tech: ["Next Js", "TailwindCss", "Firebase", "TMDB Api"],
    linkWeb: "https://nextjs-movie-disney.vercel.app/",
    linkGithub: "https://github.com/buiminh15/nextjs_movie_disney",
    external: true,
    desc: "I code this project to learn how nextjs working",
  },
  {
    id: 4,
    src: WORKS_IMG.GALAXY,
    tech: ["React Js", "TailwindCss"],
    linkWeb: "twitter-clone",
    linkGithub:
      "https://github.com/buiminh15/reactjs_portfolio/tree/master/src/modules/galaxy-travel",
    desc: "I code this project to learn grid, react-scroll and image optimization of webpack",
  },
];

function randomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}

function capFirst(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
  const name1 = [
    "abandoned",
    "able",
    "absolute",
    "adorable",
    "adventurous",
    "academic",
    "acceptable",
    "acclaimed",
    "accomplished",
    "accurate",
    "aching",
  ];
  const name2 = [
    "government",
    "health",
    "system",
    "computer",
    "meat",
    "year",
    "thanks",
    "music",
    "person",
    "reading",
    "method",
    "data",
    "food",
    "understanding",
    "theory",
  ];
  const name =
    capFirst(name1[getRandomInt(0, name1.length + 1)]) +
    " " +
    capFirst(name2[getRandomInt(0, name2.length + 1)]);
  const nickname =
    capFirst(name1[getRandomInt(0, name1.length + 1)]) +
    capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return { name, nickname };
}

function generateImage() {
  const ids = [0, 1, 10, 100, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1008];
  const id = ids[Math.floor(Math.random() * ids.length)];
  return `https://picsum.photos/id/${id}/200/300`;
}

function generateTwitterPosts(num) {
  return Array(num)
    .fill(1)
    .map((_, index) => ({
      id: index + 1,
      avatar: generateImage(),
      name: generateName().name,
      nickname: generateName().nickname,
      postedTime: "2h",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replyNum: randomNumber(50),
      retweetNum: randomNumber(100),
      likesNum: randomNumber(1000),
    }));
}

function generateTwitterTrends(num) {
  return Array(num)
    .fill(1)
    .map((_) => ({
      id: faker.datatype.uuid(),
      trending_country: `Trending in ${faker.address.country()}`,
      author: `${faker.name.findName()} ${faker.name.lastName()}`,
      tweet_no: faker.datatype.number({ max: 100 }),
    }));
}

export { worksData, generateTwitterPosts, generateTwitterTrends };
