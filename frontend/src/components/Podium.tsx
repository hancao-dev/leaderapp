import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface PodiumProps {
  users: {
    name: string;
    avatarUrl: string;
    points: number;
    earnings: string;
    position: number;
  }[];
}

const Podium: React.FC<PodiumProps> = ({ users }) => {
  // Find the maximum points to determine the height proportions
  const maxPoints = Math.max(...users.map(user => user.points));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      sx={{ height: '400px', position: 'relative' }} // Adjust height for bigger bars
    >
      {users.map(user => {
        // Calculate height as a proportion of the maximum points
        const heightPercentage = (user.points / maxPoints) * 100; // Convert to percentage

        // Set background color based on the position (1st, 2nd, 3rd)
        const backgroundColor = user.position === 1 ? '#f5deb3' : user.position === 2 ? '#d3d3d3' : '#d2b48c';

        // Use the `order` property to visually reorder podium positions (1st in the center)
        const order = user.position === 1 ? 2 : user.position === 2 ? 1 : 3;

        return (
          <Box
            key={user.position}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
            mx={2}
            sx={{
              backgroundColor,
              borderRadius: '8px',
              width: '150px',
              height: `${heightPercentage}%`, // Height based on points
              transition: 'height 0.3s ease',
              position: 'relative',
              paddingBottom: '10px',
              order, // Apply order to visually reorder podium
            }}
          >
            {/* Avatar positioned outside the podium */}
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              sx={{
                width: 80,
                height: 80,
                position: 'absolute',
                top: '-50px',  // Move avatar further above
                border: '4px solid white',  // Optional border to make the avatar stand out
              }}
            />

            {/* Name and position directly under the avatar */}
            <Box mt={2} textAlign="center" display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6" sx={{ marginTop: '70px' }}> {/* Move the name up, right under the avatar */}
                {user.name}
              </Typography>
              <Typography variant="subtitle1">
                {user.position}st
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span style={{ color: '#FF4081' }}>{user.points} PTS</span>
                <span> · {user.earnings}</span>
              </Typography>
            </Box>

          </Box>
        );
      })}
    </Box>
  );
};

export default Podium;
