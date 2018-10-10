import range from 'lodash/range';

let today = 2018
export const months = {
  'January': '01',
  'February': '02',
  'March': '03',
  'April': '04',
  'May': '05',
  'June': '06',
  'July': '07',
  'August': '08',
  'September': '09',
  'October': '10',
  'November': '11', 
  'December': '12'};
export const days = range(1, 31, 1);
export const years = range(today, today-100, -1);
