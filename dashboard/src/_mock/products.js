import { faker } from '@faker-js/faker/locale/en_IND';
import { sample } from 'lodash';

const PRODUCT_NAME = [
  "Apka Aspatal 2",
  "Apka Aspatal 1",
  "Apka Aspatal 3",
  "Apka Aspatal 4",
  "Apka Aspatal 5",
  "Apka Aspatal 6",
  "Apka Aspatal 7",
  "Apka Aspatal 8",
  "Apka Aspatal 9",
  "Apka Aspatal 10",
  "Apka Aspatal 11",
  "Apka Aspatal 12",
];


const products = [...Array(12)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.address.city(),
  };
});

export default products;
