import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser); // این خط باید درست کار کند

export default router;