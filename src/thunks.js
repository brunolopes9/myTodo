import axios from 'axios';
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from '.loadingSlice';

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
 
  const response = await axios.get('/api/todos');
  cons todos = response.data;
  dispatch(loadingCompleted());
} catch(e)  {
  loadingFailed(e);
}
}