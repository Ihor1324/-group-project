document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      const filmId = card.getAttribute('data-id');
      window.location.href = `details.html?id=${filmId}`;
    });
  });
});

const gallery = document.querySelector(".gallery");

const fruits = [
  {
    title: "kiwi",
    imageUrl:
      "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTY2MDV8&ixlib=rb-4.0.3&q=85",
  },
  {
    title: "banana",
    imageUrl:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTY2MDV8&ixlib=rb-4.0.3&q=85",
  },
  {
    title: "ananas",
    imageUrl:
      "https://images.unsplash.com/photo-1587883012610-e3df17d41270?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTY3MTl8&ixlib=rb-4.0.3&q=85",
  },
  {
    title: "avocado",
    imageUrl:
      "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTY3NDN8&ixlib=rb-4.0.3&q=85",
  },
  {
    title: "orange",
    imageUrl:
      "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTc5NTZ8&ixlib=rb-4.0.3&q=85",
  },
  {
    title: "strawberry",
    imageUrl:
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTgxNTl8&ixlib=rb-4.0.3&q=85",
  },
];

fruits.map((fruit) => {
  fruitElement = document.createElement("img");
  fruitElement.src = fruit.imageUrl;
  fruitElement.alt = fruit.title;
  gallery.append(fruitElement);
});
