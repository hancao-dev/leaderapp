import React from 'react';
import { List, Grid, Typography } from '@mui/material';
import UserListItem from './UserListItem';
import { User } from '../types';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      <Grid container spacing={2} style={{ fontWeight: 'bold', marginTop: '20px' }}>
        <Grid item xs={1}>Place</Grid>
        <Grid item xs={3}>Name</Grid>
        <Grid item xs={4}>Predicted World Champion</Grid>
        <Grid item xs={2}>Points</Grid>
        <Grid item xs={2}>Edit</Grid>
      </Grid>
      <List>
        {users.map((user, index) => (
          <UserListItem key={user.id} user={user} index={index} />
        ))}
      </List>
    </>
  );
};

export default UserList;
