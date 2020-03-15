import { DateRange } from './DateRange';

export interface Schedule {
  id: number;
  bookId: number;
  begin: DateRange['begin'];
  end: DateRange['end'];
  expectedReturn: Date;
  actualReturn?: Date;
}
