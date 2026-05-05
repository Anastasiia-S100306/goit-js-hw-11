import axios from 'axios';

const API_KEY = '55725059-8908e51e72a92ab5f64b0030c'; 
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`${BASE_URL}?${searchParams}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching images:", error);
      throw error;
    });
}