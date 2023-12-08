const users = [
  {
    id: "1",
    name: "David",
    email: "somemail@gmail.com",
    password: "somepassword",
  },
];
const shows = [
  {
    show_id: "1",
    name: "The Mentalist",
    episodes: 150,
    imageSrc: "/thumbnails/mentalist.jpeg",
  },
  {
    show_id: "2",
    name: "The Dragon Prince",
    episodes: 45,
    imageSrc: "/thumbnails/dragonprince.jpg",
  },
  {
    show_id: "3",
    name: "Loki",
    episodes: 12,
    imageSrc: "/thumbnails/loki.jpeg",
  },
  {
    show_id: "4",
    name: "Marvel What if...?",
    episodes: 9,
    imageSrc: "/thumbnails/whatif.jpeg",
  },
  {
    show_id: "5",
    name: "Avatar the Last Airbender",
    episodes: 61,
    imageSrc: "/thumbnails/atla.jpeg",
  },
];

const movies = [
  {
    movie_id: "1",
    name: "The Avengers",
    imageSrc: "/thumbnails/avengers.jpg",
  },
  {
    movie_id: "2",
    name: "Transformers",
    imageSrc: "/thumbnails/transformers.jpg",
  },
  {
    movie_id: "3",
    name: "Kong Skull Island",
    imageSrc: "/thumbnails/kingkong,jpeg",
  },
  {
    movie_id: "4",
    name: "Bolt",
    imageSrc: "/thumbnails/bolt.jpg",
  },
  {
    movie_id: "5",
    name: "Dr. Strange",
    imageSrc: "/thumbnails/drstrange.jpg",
  },
  {
    movie_id: "6",
    name: "The Karate Kid",
    imageSrc: "/thumbnails/karatakid.jpg",
  },
  {
    movie_id: "7",
    name: "Forbidden Kingdom",
    imageSrc: "/thumbnails/forbiddenkingdom.jpg",
  },
  {
    movie_id: "8",
    name: "The Transporter",
    imageSrc: "/thumbnails/transporter.jpeg",
  },
  {
    movie_id: "9",
    name: "Batman Begins",
    imageSrc: "/thumbnails/batman.jpg",
  },
  {
    movie_id: "10",
    name: "The Mummy",
    imageSrc: "/thumbnails/mummy.jpg",
  },
  {
    movie_id: "11",
    name: "The Tomorrow War",
    imageSrc: "/thumbnails/thetomorrowwar.jpeg",
  },
  {
    movie_id: "12",
    name: "How to train your dragon",
    imageSrc: "/thumbnails/httyd.jpg",
  },
  {
    movie_id: "13",
    name: "Gardians of the Galexy",
    imageSrc: "/thumbnails/gardiansofthegalexy.jpg",
  },
  {
    movie_id: "14",
    name: "Journey to the center of the Earth",
    imageSrc: "/thumbnails/journeytothecenteroftheearth.jpg",
  },
  {
    movie_id: "15",
    name: "Thor",
    imageSrc: "/thumbnails/thor.jpeg",
  },
  {
    movie_id: "16",
    name: "Spiderman",
    imageSrc: "/thumbnails/spiderman.webp",
  },
  {
    movie_id: "17",
    name: "The Croods",
    imageSrc: "/thumbnails/croods.jpg",
  },
  {
    movie_id: "18",
    name: "Dead pool",
    imageSrc: "/thumbnails/deadpool.jpeg",
  },
  {
    movie_id: "19",
    name: "Frozen",
    imageSrc: "/thumbnails/frozen.jpg",
  },
  {
    movie_id: "20",
    name: "Captain America the First Avenger",
    imageSrc: "/thumbnails/captainamerica.jpeg",
  },
];

const sequels = [
  {
    sequel_id:"1",
    sequel_name:"Avengers Age of Ultron",
    imageSrc:"/thumbnails/Avengers.webp"
  },
  {
    sequel_id:"2",
    sequel_name:"Avengers Infinity war",
    imageSrc:"/thumbnails/infinitywar.jpeg"
  },
  {
    sequel_id:"3",
    sequel_name:"Avengers Endgame",
    imageSrc:"/thumbnails/endgame.jpeg"
  },
  {
    sequel_id:"4",
    sequel_name:"Transformers Revenge of the Fallen",
    imageSrc:"/thumbnails/transformers2.jpg"
  },
  {
    sequel_id:"5",
    sequel_name:"Transformers Dark of the Moon",
    imageSrc:"/thubnails/transformers3.jpg"
  },
  {
    sequel_id:"6",
    sequel_name:"Transformers The Last Knight",
    imageSrc:"/thubnails/transformers4.jpeg"
  },
  {
    sequel_id:"7",
    sequel_name:"Bumblebee",
    imageSrc:"/thubnails/bumblebee.jpg"
  },
  {
    sequel_id:"8",
    sequel_name:"Transformers Rise of the Beasts",
    imageSrc:"/thubnails/transformers5.jpeg"
  },
  {
    sequel_id:"9",
    sequel_name:"Godzilla vs Kong",
    imageSrc:"/thubnails/godzillavskong.jpg"
  },
  {
    sequel_id:"10",
    sequel_name:"Dr Strange In The Multiverse of Madness",
    imageSrc:"/thubnails/drstrange2.jpeg"
  },
  {
    sequel_id:"11",
    sequel_name:"Transporter 2",
    imageSrc:"/thubnails/transporter2.jpg"
  },
  {
    sequel_id:"12",
    sequel_name:"Transporter 3",
    imageSrc:"/thubnails/transporter3.jpg"
  },
  {
    sequel_id:"13",
    sequel_name:"Transporter Refuled",
    imageSrc:"/thubnails/transporter4.jpeg"
  },
  {
    sequel_id:"14",
    sequel_name:"The Dark Knight",
    imageSrc:"/thubnails/batman2.jpeg"
  },
  {
    sequel_id:"15",
    sequel_name:"The Dark Knight Rises",
    imageSrc:"/thubnails/batman3.jpg"
  },
  {
    sequel_id:"16",
    sequel_name:"The Mummy Returns",
    imageSrc:"/thubnails/mummy2.jpeg"
  },
  {
    sequel_id:"17",
    sequel_name:"How to train your dragon 2",
    imageSrc:"/thubnails/httyd2.jpeg"
  },
  {
    sequel_id:"18",
    sequel_name:"How to train your dragon the Hidden World",
    imageSrc:"/thubnails/httyd3.jpeg"
  },
  {
    sequel_id:"19",
    sequel_name:"Gardians of the Galexy Vol 2",
    imageSrc:"/thubnails/gardiansofthegalexy2.jpg"
  },
  {
    sequel_id:"20",
    sequel_name:"Gardians of the Galexy Vol 3",
    imageSrc:"/thubnails/gardiansofthegalexy3.avif"
  },
  {
    sequel_id:"21",
    sequel_name:"Thor the Dark wold",
    imageSrc:"/thubnails/thor2.jpg"
  },
  {
    sequel_id:"22",
    sequel_name:"Thor Ragnarok",
    imageSrc:"/thubnails/thor3.jpeg"
  },
  {
    sequel_id:"23",
    sequel_name:"Spiderman 2",
    imageSrc:"/thubnails/spiderman2.jpg"
  },
  {
    sequel_id:"24",
    sequel_name:"Spiderman 3",
    imageSrc:"/thubnails/spierman3.jpg"
  },
  {
    sequel_id:"25",
    sequel_name:"Dead pool 2",
    imageSrc:"/thubnails/deadpool2.jpg"
  },
  {
    sequel_id:"26",
    sequel_name:"Frozen 2",
    imageSrc:"/thubnails/frozen2.jpeg"
  },
  {
    sequel_id:"27",
    sequel_name:"Captain America and the Winter Soldier",
    imageSrc:"/thubnails/captainamerica2.jpg"
  },
  {
    sequel_id:"28",
    sequel_name:"Captain America Civil War",
    imageSrc:"/thubnails/captainamerica3.jpeg"
  },
]

module.exports = {
  users,shows,movies,sequels
}