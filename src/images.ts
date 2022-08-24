let IMAGES = [
  {
    id: 0,
    title: 'Garfield',
    src: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1250677517.jpg?w=2120',
  },
  {
    id: 1,
    title: 'Pancake',
    src: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg?w=2560',
  },
  {
    id: 2,
    title: 'Filaberta',
    src: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-146242247-scaled.jpg?w=2560',
  },
  {
    id: 3,
    title: 'Rocket',
    src: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-512271329-scaled.jpg?w=2560',
  },
];

function getImageById(id: number) {
  return IMAGES.find((image) => image.id === id);
}

export { IMAGES, getImageById };
