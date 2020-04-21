export default (date, filter) => {
  const arr = [...date];
  // eslint-disable-next-line eqeqeq
  return arr.filter((el) => Object.values(el).some((x) => x == filter));
};
