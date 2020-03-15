import { Schedule } from '../domain/Schedule';
import { jst } from '../modules/utils/dateUtil';

export const schedules: Schedule[] = [
  {
    id: 1,
    bookId: 1,
    begin: jst('2020-01-01'),
    end: jst('2020-01-03'),
    expectedReturn: jst('2020-01-03'),
    actualReturn: jst('2020-01-03'),
  },
  {
    id: 1,
    bookId: 1,
    begin: jst('2020-01-05'),
    end: jst('2020-01-08'),
    expectedReturn: jst('2020-01-08'),
    actualReturn: jst('2020-01-08'),
  },
];
