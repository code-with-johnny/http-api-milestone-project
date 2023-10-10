import { API_URL } from "../constants.js";

const fetchCatData = async () => {
  const response = await axios.get(`${API_URL}/cat-data`);
  return response.data;
};

fetchCatData().then((data) => {
  console.log(data);
});
