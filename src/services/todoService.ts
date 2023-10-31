import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=9'

export const fetchTodos = () => {
  return axios.get(url)
}
