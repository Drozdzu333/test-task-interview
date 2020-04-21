export default (data, sortBy, direction) => {
  const arr = [...data];
  if (!direction) {
    if (typeof sortBy === 'number') {
      arr.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      arr.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        if (b[sortBy] > a[sortBy]) {
          return -1;
        }
        return 0;
      });
    }
  } else if (typeof sortBy === 'number') {
    arr.sort((a, b) => b[sortBy] - a[sortBy]);
  } else {
    arr.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (b[sortBy] > a[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return arr;
};
