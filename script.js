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
      "https://uaserials.pro//8656.jpg",
  },
  {
    title: "banana",
    imageUrl:
      "https://uaserials.pro/posters/8662.jpg",
  },
  {
    title: "ananas",
    imageUrl:
      "https://uaserials.pro/posters/8666.jpg",
  },
  {
    title: "avocado",
    imageUrl:
      "https://uaserials.pro/posters/8663.jpg",
  },
  {
    title: "orange",
    imageUrl:
      "https://uaserials.pro/posters/8665.jpg",
  },
  {
    title: "strawberry",
    imageUrl:
      "https://uaserials.pro/posters/8664.jpg",
  },
  {
    title: "strawberry",
    imageUrl:
      "https://uaserials.pro/posters/7118.jpg",
  },

];

fruits.map((fruit) => {
  fruitElement = document.createElement("img");
  fruitElement.src = fruit.imageUrl;
  fruitElement.alt = fruit.title;
  gallery.append(fruitElement);
});
