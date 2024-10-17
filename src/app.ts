import express from 'express';
import userRoutes from './routes/userRoutes';
// import { createTables } from './db2';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, async () => {
  // await createTables();
  console.log(`Server is running on port ${PORT}`);
});