import React, { useState } from 'react';
import { Modal, Box, Typography, Avatar, TextField, Button, Grid } from '@mui/material';
import { User } from '../types';
import { useDispatch } from 'react-redux';
import { updateUserPoints } from '../store/usersSlice';
import { AppDispatch } from '../store/store';

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ open, onClose, user }) => {
  const [points, setPoints] = useState<number>(user.points);
  const dispatch: AppDispatch = useDispatch();

  const handleConfirm = async () => {
    // Dispatch the updateUserPoints action to update points in the Redux store
    await dispatch(updateUserPoints({ id: user.id, points }));

    // Close the modal after successful update
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
          width: 400,
        }}
      >
        {/* User Information */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <Avatar src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} alt={user.name} sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">{user.predictedChampion}</Typography>
            <Typography variant="body2">{user.countryCode.toUpperCase()}</Typography>
          </Grid>
        </Grid>

        {/* Editable Points Input */}
        <Box mt={3}>
          <Typography variant="body2" gutterBottom>
            Edit Points:
          </Typography>
          <TextField
            fullWidth
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </Box>

        {/* Confirm and Cancel Buttons */}
        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UserDetailsModal;
