const fetchCompanies = (URL) => (fetch(URL)
  .then((response) => response.json())
  .then((data) => data)
);
export default fetchCompanies;
