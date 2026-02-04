import api from './axios';

export const todoApi = {
  getAllTodos: async () => {
    const response = await api.get('/todos');
    return response.data;
  },

  getTodoById: async (id) => {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  },

  createTodo: async (todoData) => {
    const response = await api.post('/todos', todoData);
    return response.data;
  },

  updateTodo: async (id, todoData) => {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  },

  updateTodoStatus: async (id, status) => {
    const response = await api.patch(`/todos/${id}/status`, { status });
    return response.data;
  },

  deleteTodo: async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  },
};
