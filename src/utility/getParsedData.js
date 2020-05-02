export default (data) => data.map((el) => {
  const lastIncomesDate = new Date(
    el.incomes.sort((a, b) => {
      const date1 = Number(
        `${new Date(a.date).getFullYear()}${new Date(a.date).getMonth()}`,
      );
      const date2 = Number(
        `${new Date(b.date).getFullYear()}${new Date(b.date).getMonth()}`,
      );
      return date2 - date1;
    })[0].date,
  );

  const lastMonthString = `${lastIncomesDate.getFullYear()}-${
    lastIncomesDate.getMonth() < 9 ? '0' : ''
  }${lastIncomesDate.getMonth() + 1}`;

  const lastMonthSum = Number(
    el.incomes
      .reduce(
        (accumulator, current) => (current.date.indexOf(lastMonthString)
          ? accumulator + Number(current.value)
          : null),
        0,
      )
      .toFixed(2),
  );
  const incomesSum = Number(
    el.incomes.reduce((acc, c) => acc + Number(c.value), 0).toFixed(2),
  );
  const incomesAvg = Number((incomesSum / el.incomes.length).toFixed(2));

  return {
    ...el,
    lastMonthSum,
    incomesSum,
    incomesAvg,
  };
});
