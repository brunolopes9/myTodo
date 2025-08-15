import axios from 'axios';

export const loadTodos = () => async (dispatch) => {
  const response = await axios.get('/api/todos');
  cons todos = response.data;
}