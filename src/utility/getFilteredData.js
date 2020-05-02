export default (date, filter) => {
  const arr = [...date];
  return arr.filter((el) => Object.values(el).some((x) => x === filter || x === Number(filter)));
};
