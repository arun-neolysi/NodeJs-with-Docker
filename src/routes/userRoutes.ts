import express from 'express';
import { getUsers } from '../controllers/userController.ts';

const router = express.Router();

// Get all users
router.get('/', getUsers);

 export default router;