import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchTopUsers } from '../store/usersSlice';
import { RootState, AppDispatch } from '../store/store';
import UserList from '../components/UserList';
import Podium from '../components/Podium';
import { Box, Container, Typography } from '@mui/material';

const Leaderboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, topUsers, status } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTopUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Check if topUsers contains valid data
  const podiumUsers = topUsers.length === 3
    ? topUsers.map((user, index) => ({
        name: user.name,
        // Use randomuser.me for avatars or a placeholder if ID is missing
        avatarUrl: user.id ? `https://randomuser.me/api/portraits/men/${user.id}.jpg` : '/path-to-placeholder-avatar.jpg',
        points: user.points || 0,  // Default to 0 if points are undefined
        earnings: user.points ? `$${user.points * 2}` : '$0',  // Default earnings to $0 if points are missing
        position: index + 1,  // Assign position based on index (1st, 2nd, 3rd)
      }))
    : [];

  return (
    <Box mt={10} mb={8} sx={{ paddingBottom: '80px', minHeight: '100vh' }}>
      <Container>
        {/* Conditionally render Podium only when podiumUsers has data */}
        {podiumUsers.length === 3 && (
          <>
            <Typography variant="h4" gutterBottom>Top 3 Players</Typography>
            <Box mb={6}>
              <Podium users={podiumUsers} />
            </Box>
          </>
        )}

        {/* Full Leaderboard */}
        <Typography variant="h4" gutterBottom>Leaderboard</Typography>
        <UserList users={users} />
      </Container>
    </Box>
  );
};

export default Leaderboard;
