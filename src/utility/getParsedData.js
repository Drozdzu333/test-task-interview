export default (data) => data.map((el) => {
  const incomeSort = el.incomes.sort((a, b) => {
    const i = new Date(a.date);
    const j = new Date(b.date);
    const date1 = Number(`${i.getFullYear()}${i.getMonth()}`);
    const date2 = Number(`${j.getFullYear()}${j.getMonth()}`);
    return date2 - date1;
  });
  const lastDate = new Date(incomeSort[0].date);
  const lastMonthString = `${lastDate.getFullYear()}-${
    lastDate.getMonth() < 9 ? '0' : ''
  }${lastDate.getMonth() + 1}`;
  const sumLastMonth = el.incomes.reduce((acc, c) => {
    let accumulator = 0;
    if (c.date.indexOf(lastMonthString)) {
      accumulator = acc + Number(c.value);
    }
    return accumulator;
  }, 0);
  const lastMonthSum = Number(sumLastMonth.toFixed(2));
  const incomesSum = Number((el.incomes.reduce((acc, c) => acc + Number(c.value), 0)).toFixed(2));
  const incomesAvg = Number((incomesSum / el.incomes.length).toFixed(2));
  return {
    ...el, lastMonthSum, incomesSum, incomesAvg,
  };
});
