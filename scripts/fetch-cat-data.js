const fetchCatData = async () => {
  const response = await axios.get("http://localhost:8080/cat-data");
  return response.data;
};

fetchCatData().then((data) => {
  console.log(data);
});
