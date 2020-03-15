import React, { FC } from 'react';
import { DateRange } from '../domain/DateRange';
import { Schedule } from '../domain/Schedule';
import { nthLate, subDateToDays } from '../modules/utils/dateUtil';

interface ScheduleTableProps {
  range: DateRange;
  schedules: Schedule[];
}

export const ScheduleTable: FC<ScheduleTableProps> = ({ range, schedules }) => {
  const targetDateList = [...Array(subDateToDays(range) + 1)].map((_, i) =>
    nthLate(range.begin, i)
  );
  const columns = targetDateList.map(date => (
    <th key={`st-th-${date}`}>{toDateStr(date)}</th>
  ));

  return (
    <table>
      <thead>{columns}</thead>
      <tbody>
        {targetDateList.flatMap(date => {
          const schedule = schedules.find(
            e => e.begin <= date && nthLate(date, 1) <= e.end
          );

          // FIXME:後で直す
          const key = `st-td-${Math.random()}`;

          if (!!schedule) {
            const isBeginDate = toDateStr(schedule.begin) === toDateStr(date);
            return isBeginDate
              ? [
                  <td key={key} colSpan={subDateToDays(schedule)}>
                    予定日
                  </td>,
                ]
              : [];
          }

          return [<td key={key}>空き</td>];
        })}
      </tbody>
    </table>
  );
};

const toDateStr = (date: Date) => date.toISOString().split('T')[0];
