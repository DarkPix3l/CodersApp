import express from 'express';
import {
  signupCoder,
  signupManager,
  loginCoder,
  loginManager
} from '../controllers/auth.controller.js';
import {validateSignup} from '../middlewares/signup-validator.js';
import {validateSignin} from '../middlewares/signin-validator.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Auth root works!' });
});


//SignInRoutes
router.post('/signup/coder', validateSignup, signupCoder);
router.post('/signup/manager', validateSignup, signupManager);

router.post('/login/coder', validateSignin, loginCoder);
router.post('/login/manager', validateSignin, loginManager);

export default router;