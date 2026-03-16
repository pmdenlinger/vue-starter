Vue.createApp({
    data() {
        return {
            name: "Chris Dixon",
            links:["home", "portfolio", "contact me"]
        };
    },
}).mount("header")

const posts = [
                {
                    id:1,
                    title: "Why I learned Vue",
                    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
                },
                {
                    id:2,
                    title: "Using the Vue CDN",
                    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
                },
                {
                    id:3, 
                    title: "How I mastered Vue",
                    body: "I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharonnes",
                },
            ]
Vue.createApp({
    data(){
        return {
            posts,
        };
    },
}).mount("#blog");