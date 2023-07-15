import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Fetures/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
