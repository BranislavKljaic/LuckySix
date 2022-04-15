import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import counterReducer from './counter-slice';
import todoReducer from '../features/todos/todoSlice';
import ticketsReducer from './tickets-slice';
import drawingReducer from './drawing-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    todos: todoReducer,
    tickets: ticketsReducer,
    draws: drawingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
