import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],

  activeTodo: [],
  completedTodo: [],

  filter: [
    { id: 1, text: 'All' },
    { id: 2, text: 'Active' },
    { id: 3, text: 'Completed' },
  ],
  test: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      if (state.todo.find((task) => payload.id === task.id)) return;

      state.todo.push(payload);
      localStorage.setItem('todo', JSON.stringify(state.todo));
    },
    deleteTodo: (state, { payload }) => {
      const elementToDelete = state.todo.filter((task) => payload !== task.id);

      state.todo = elementToDelete;
      localStorage.setItem('todo', JSON.stringify(state.todo));
    },
    setCompletedTask: (state, { payload }) => {
      const taskToComplete = state.todo.find((task) => payload === task.id);

      if (taskToComplete.isActive === true) {
        const todoWithoutTask = state.todo.filter((task) => payload !== task.id);

        const newTodo = {
          ...taskToComplete,
          isActive: false,
        };

        state.todo = [...todoWithoutTask, newTodo];
      } else {
        const todoWithoutTask = state.todo.filter((task) => payload !== task.id);

        const newTodo = {
          ...taskToComplete,
          isActive: true,
        };

        state.todo = [...todoWithoutTask, newTodo];
      }
      localStorage.setItem('todo', JSON.stringify(state.todo));
    },
    clearCompletedTask: (state) => {
      state.todo = state.todo.filter((task) => task.isActive !== false);
      localStorage.setItem('todo', JSON.stringify(state.todo));
    },
    setCompletedTodo: (state, { payload }) => {
      state.completedTodo = payload;
    },
    setActiveTodo: (state, { payload }) => {
      state.activeTodo = payload;
    },
    setTodo: (state, { payload }) => {
      state.todo = payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setCompletedTask,
  clearCompletedTask,
  setCompletedTodo,
  setActiveTodo,
  setTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
