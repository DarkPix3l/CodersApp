import User from "../models/userSchema.js";

export const signupCoder = async (req, res) => {
  try {
    let { name, surname, email, password } = req.body;
    let user = new User({
      name,
      surname,
      email,
      password,
      isManager: false,
    });
    await user.save();
    res.json({ message: "Coder signed up successfully" });
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
      isManager: true,
    });
    await user.save();
    res.json({ message: "Manager signed up successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const loginCoder = async (req, res) => {
  //Extremely bad practice to store pwd in plain text and check it in this way.
  //I'm only testing the database connection and login logic, and authorization or hashing isn't required yet
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    res.json({ message: "Login successful", token: "mock-manager-token" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const loginManager = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    res.json({ message: "Login successful", token: "mock-manager-token" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
