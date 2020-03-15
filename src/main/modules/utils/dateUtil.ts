import { DateRange } from '../../domain/DateRange';

const DAY_MS = 86400000;

/** 日本時間の日付を返す */
export const jst = (date: string) => new Date(`${date}T00:00:00+09:00`);

/** n日後の時刻を求める */
export const nthLate = (date: Date, n: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + n);
  return result;
};

/**
 * 時間範囲から日数差を求める
 * @param range 時間範囲
 * @param f 丸め関数
 */
export const subDateToDays = (range: DateRange, f = Math.floor) =>
  f((range.end.getTime() - range.begin.getTime()) / DAY_MS);
