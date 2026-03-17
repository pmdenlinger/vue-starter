const links = [
  { id: 1, name: 'home', url: 'index.html' },
  { id: 2, name: 'portfolio', url: 'portfolio.html' },
  { id: 3, name: 'contact me', url: 'contact.html' },
];

const posts = [
  {
    id: 1,
    title: 'Why I learned Vue',
    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
  },
  {
    id: 2,
    title: 'Using the Vue CDN',
    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
  },
  {
    id: 3,
    title: 'How I mastered Vue',
    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
  },
];

Vue.createApp({
  data() {
    return {
      name: 'Chris Dixon',
      links,
      posts,
      darkModeSet: false,
      textColor: 'hotpink',
    };
  },
}).mount('body');
