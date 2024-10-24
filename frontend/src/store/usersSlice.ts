import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types';

// Initial state
interface UsersState {
  users: User[];
  topUsers: User[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
  users: [],
  topUsers: [],
  status: 'idle',
};

// Thunk to fetch users from the API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>('http://localhost:5000/users');
  return response.data;
});

// Thunk to fetch top 3 users
export const fetchTopUsers = createAsyncThunk('users/fetchTopUsers', async () => {
  const response = await axios.get<User[]>('http://localhost:5000/top-users');
  return response.data;
});

// Thunk to update user points
export const updateUserPoints = createAsyncThunk(
  'users/updateUserPoints',
  async ({ id, points }: { id: number; points: number }, { dispatch }) => {
    await axios.put(`http://localhost:5000/user/${id}`, { points });
    // Re-fetch users and top users to ensure everything is up to date
    dispatch(fetchUsers());
    dispatch(fetchTopUsers());
    return { id, points };
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetch users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });

    // Handle fetch top users
    builder
      .addCase(fetchTopUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.topUsers = action.payload;
      });

    // Handle updating user points
    builder.addCase(updateUserPoints.fulfilled, (state, action: PayloadAction<{ id: number; points: number }>) => {
      const { id, points } = action.payload;

      // Update points in the 'users' list
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.points = points;
      }

      // Update points in the 'topUsers' list if the user is in the topUsers
      const topUser = state.topUsers.find((user) => user.id === id);
      if (topUser) {
        topUser.points = points;
      }
    });
  },
});

export default usersSlice.reducer;
