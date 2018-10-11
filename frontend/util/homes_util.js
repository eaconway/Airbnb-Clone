import range from 'lodash/range';

export const fields = {
  city: 'cities',
  guests: 'guests',
  type: 'types'
}

export const cities = [
  'Konoha', 'Karakura Town', 'Whole Cake Island'
];

export const guests = range(1, 20, 1);

export const types = [
  'Entire Place', 'Private Room', 'Shared Room'
];


// const test = function() {
//   return "hi";
// }
//
// export default test;
