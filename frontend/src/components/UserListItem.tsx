import React, { useState } from 'react';
import { Grid, ListItem, Avatar, ListItemText, Typography, Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icon for details
import { User } from '../types';
import UserDetailsModal from './UserDetailsModal';  // Import the new modal component

interface UserListItemProps {
  user: User;
  index: number;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, index }) => {
  const [openModal, setOpenModal] = useState(false);  // State to open/close the modal

  const renderRankChangeIcon = (rankChange: 'up' | 'down' | 'same' | undefined) => {
    if (rankChange === 'up') return <ArrowUpwardIcon style={{ color: 'green', marginLeft: '5px' }} />;
    if (rankChange === 'down') return <ArrowDownwardIcon style={{ color: 'red', marginLeft: '5px' }} />;
    return <RemoveIcon style={{ color: 'grey', marginLeft: '5px' }} />;
  };

  // Flag URL using 2-letter country code
  const flagUrl = `https://flagcdn.com/28x21/${user.countryCode.toLowerCase()}.png`;

  // Avatar URL generated dynamically based on user ID
  const avatarUrl = `https://randomuser.me/api/portraits/men/${user.id}.jpg`;

  return (
    <>
      <ListItem>
        <Grid container spacing={2}>
          {/* Rank */}
          <Grid item xs={1} display="flex" alignItems="center">
            <Typography variant="body1">{index + 1}st</Typography>
            {renderRankChangeIcon(user.rankChange)}
          </Grid>

          {/* User Name and Avatar */}
          <Grid item xs={3}>
            <Box display="flex" alignItems="center">
              <Avatar src={avatarUrl} alt={user.name} style={{ marginRight: '10px' }} />
              <ListItemText primary={user.name} />
            </Box>
          </Grid>

          {/* Predicted World Champion with Flag */}
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <img src={flagUrl} alt={`${user.predictedChampion} flag`} style={{ width: '28px', marginRight: '21px' }} />
              <Typography variant="body1">{user.predictedChampion}</Typography>
            </Box>
          </Grid>

          {/* Points */}
          <Grid item xs={2}>
            <Typography variant="body1">{user.points} PTS</Typography>
          </Grid>

          {/* View Details Icon Button */}
          <Grid item xs={2}>
            <IconButton color="primary" onClick={() => setOpenModal(true)}>
              <VisibilityIcon /> {/* Replacing the text button with an icon button */}
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>

      {/* Modal to show user details */}
      <UserDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={user}  // Pass only user object, not index
      />
    </>
  );
};

export default UserListItem;
