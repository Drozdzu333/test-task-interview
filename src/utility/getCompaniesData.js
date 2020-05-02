export default async function getCompaniesDataAPI(dataUrl, incomesUrl) {
  const customersArray = await fetch(dataUrl)
    .then((response) => response.json())
    .then((resp) => resp);
  const requests = await customersArray.map(({ id }) => fetch(`${incomesUrl}${id}`).then((response) => response.json().then((respo) => respo)));
  const companiesData = await Promise.all(requests).then((arr) => customersArray.reduce(
    (array, element, index) => [...array, { ...element, ...arr[index] }],
    [],
  ));
  return companiesData;
}
