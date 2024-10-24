import express, { Request, Response } from 'express';
import cors from 'cors';
import { User, users } from './users';  // Import users

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Helper function to calculate ranks based on points
function calculateRanks(users: User[]): { id: number; rank: number }[] {
  return [...users]
    .sort((a, b) => b.points - a.points) // Sort users by points (descending)
    .map((user, index) => ({ id: user.id, rank: index + 1 })); // Assign ranks based on sorted position
}

// Get the top 30 users
app.get('/users', (req: Request, res: Response) => {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);
  res.json(sortedUsers);
});

// Update user points
app.put('/user/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { points }: { points: number } = req.body;
  const user = users.find(u => u.id === userId);

  if (user) {
    // Calculate initial ranks
    const initialRanks = calculateRanks(users);

    // Update the user's points
    user.points = points;

    // Calculate new ranks after the update
    const newRanks = calculateRanks(users);

    // Update the rankChange field for each user
    newRanks.forEach(newRank => {
      const initialRank = initialRanks.find(r => r.id === newRank.id)?.rank;
      const userToUpdate = users.find(u => u.id === newRank.id);
      if (userToUpdate && initialRank !== undefined) {
        if (initialRank > newRank.rank) {
          userToUpdate.rankChange = 'up';
        } else if (initialRank < newRank.rank) {
          userToUpdate.rankChange = 'down';
        } else {
          userToUpdate.rankChange = 'same';
        }
      }
    });

    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Get the top 3 users
app.get('/top-users', (req: Request, res: Response) => {
  const topUsers = [...users].sort((a, b) => b.points - a.points).slice(0, 3);
  res.json(topUsers);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
