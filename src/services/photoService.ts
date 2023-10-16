import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9'

export const fetchPhotos = () => {
  return axios.get(url)
}
