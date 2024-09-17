import { faker } from '@faker-js/faker';

// Generating random articles
export const articles = [
  {
    name: faker.lorem.words(3), 
    description: faker.lorem.sentences(2), 
    rating: 5,
    author: faker.name.fullName(), 
    image: "https://picsum.photos/200/150",
  },
  {
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    rating: 4,
    author: faker.name.fullName(),
    image: "https://picsum.photos/240/150",
  },
  {
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    rating: 3,
    author: faker.name.fullName(),
    image: "https://picsum.photos/220/150",
  },

];

// Generating random tutorials
export const tutorials = [
  {
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    rating: 5,
    author: faker.name.fullName(),
    image: "https://picsum.photos/150/150",
  },
  {
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    rating: 4,
    author: faker.name.fullName(),
    image: "https://picsum.photos/300/150",
  },
  {
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    rating: 3,
    author: faker.name.fullName(),
    image: "https://picsum.photos/100/150",
  },
  
];