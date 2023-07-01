export const bookList = [
  {
    id: 1,
    name: "Maus",
    author: "Art Spiegelman",
    price: 5300,
    category: "Comic",
    picture: "images/maus.jpg",
  },
  {
    id: 2,
    name: "Sandman 1",
    author: "Neil Gaiman",
    price: 4100,
    category: "Comic",
    picture: "images/sandman.jpg",
  },
  {
    id: 3,
    name: "Watchmen",
    author: "Alan Moore",
    price: 5500,
    category: "Comic",
    picture: "images/watchmen.jpg",
  },
  {
    id: 4,
    name: "Il deserto dei tartari",
    author: "Dino Buzzati",
    price: 5000,
    category: "Novela",
    picture: "images/deserto.jpg",
  },
  {
    id: 5,
    name: "El señor de los anillos",
    author: "J.R.R. Tolkien",
    price: 5000,
    category: "Fantasía",
    picture: "images/lotr.jpg",
  },
  {
    id: 6,
    name: "The Black Swan",
    author: "Nassim Taleb",
    price: 7900,
    category: "Filosofía",
    picture: "images/blackswan.jpg",
  },
  {
    id: 7,
    name: "Tractatus Logico-Philosophicus",
    author: "Ludwig Wittgenstein",
    price: 4100,
    category: "Filosofía",
    picture: "images/tractatus.jpg",
  },
];

const returnCatList = () => {
  let categories = bookList.map((element) => element.category);
  const catList = [];
  categories = ["Todos", ...new Set(categories)];
  categories.forEach((cat) => {
    catList.push({ value: cat, label: cat });
  });
  return catList;
};

export const categoryList = returnCatList();

// export default bookList;
