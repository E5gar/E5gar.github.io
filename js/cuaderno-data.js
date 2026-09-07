const cuadernoWeeksData = {};
for (let i = 1; i <= 16; i++) {
  const num = String(i).padStart(2, '0');
  cuadernoWeeksData[i] = {
    left: {
      week: `Semana ${num}`,
      title: 'Lorem Ipsum Dolor Sit Amet',
      subtitle: 'Consectetur adipiscing elit sed do eiusmod',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: null,
    },
    right: {
      week: `Semana ${num}`,
      title: 'Sed Do Eiusmod Tempor',
      subtitle: 'Incididunt ut labore et dolore magna aliqua',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: {
        src: `https://picsum.photos/seed/cuaderno${num}/460/340`,
        alt: `Imagen de referencia semana ${num}`,
        side: 'right',
        tilt: -8,
      },
    },
  };
}
