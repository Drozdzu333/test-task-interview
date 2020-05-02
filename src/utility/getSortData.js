export default (data, sortBy, direction) => {
  const arr = [...data];
  if (typeof sortBy === 'number') {
    arr.sort((a, b) => (direction ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]));
  } else {
    arr.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return direction ? 1 : -1;
      }
      if (b[sortBy] > a[sortBy]) {
        return direction ? -1 : 1;
      }
      return 0;
    });
  }
  return arr;
};
