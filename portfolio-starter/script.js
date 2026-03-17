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

const links = [
  { id: 1, name: 'home', url: 'index.html' },
  { id: 2, name: 'portfolio', url: 'portfolio.html' },
  { id: 3, name: 'contact me', url: 'contact.html' },
];



Vue.createApp({
    created() {
        this.getPosts();
    },
  data() {
    return {
      name: 'Chris Dixon',
      links,
      posts: [],
      darkModeSet: false,
      darkMode: {
        background: '#38383a',
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
    async getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        this.posts = data.slice(0, 3);
    }
  },
}).mount('#blog');
