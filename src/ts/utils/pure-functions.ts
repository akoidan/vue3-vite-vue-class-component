export function uniqueOnly<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function uniqueOnlyById<T>(array: T[], getter: (value: T) => number | string): T[] {
  return array.filter((item, index) => array.findIndex((inner) => getter(inner) === getter(item)) === index);
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms)); // eslint-disable-line no-promise-executor-return
}

export function groupBy<T>(xs: T[], keyExtractor: (item: T) => string): Record<string, T[]> {
  return xs.reduce<Record<string, T[]>>((resVal, curVal) => {
    const key = keyExtractor(curVal);
    if (!resVal[key]) {
      resVal[key] = [];
    }
    resVal[key].push(curVal);
    return resVal;
  }, {});
}
