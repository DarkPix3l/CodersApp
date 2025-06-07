import User from '../models/userSchema.js';

export const signupCoder = async (req, res) => {
  try {
    let { name, surname, email, password } = req.body;
    let user = new User({
      name,
      surname,
      email,
      password,
      isManager: false
    });
   await user.save().catch(err => console.log('Mock save error:', err));
    // await User.create({
    //   name,
    //   email,
    //   password,
    // });
  res.json({ message: 'Coder signed up successfully' });
      } catch (error) {
    res.status(500).json({ error: "Server Error" });

  }
};

export const signupManager = async (req, res) => {
    try {
    let { name, surname, email, password } = req.body;
    let user = new User({
      name,
      surname,
      email,
      password,
      isManager: true
    });
    await user.save().catch(err => console.log('Mock save error:', err));
    // await User.create({
    //   name,
    //   email,
    //   password,
    // });
     res.json({ message: 'Manager signed up successfully' });
    } catch (error) {
    res.status(500).json({ error: "Server Error" });

   
  }
};

export const loginCoder = (req, res) => {
  const { email, password } = req.body;
  // Simulate login logic
  if (email === 'coder@test.com' && password === '1234nelSacco') {
    res.json({ token: 'coder-token' });
  } else {
    res.status(401).json({ error: 'Invalid coder credentials' });
  }
};

export const loginManager = (req, res) => {
  const { email, password } = req.body;
  if (email === 'manager@test.com' && password === '456booM') {
    res.json({ token: 'manager-token' });
  } else {
    res.status(401).json({ error: 'Invalid manager credentials' });
  }
};
