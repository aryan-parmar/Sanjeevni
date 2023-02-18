import { faker } from '@faker-js/faker/locale/en_IND';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: faker.image.avatar(),
  name: faker.name.firstName(),
  company: faker.address.city(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'unactive']),
  role: sample([
    '18+',
    'Senior Citizen',
    '18+',
    '13+',
    'Infant',
    '13+',
    '18+',
    '20-40',
    'Infant',
    'Teenager',
  ]),
}));

export default users;
