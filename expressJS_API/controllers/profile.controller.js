export const updateInfo = async (req, res) => {
  try {
    let { firstname, lastname, about } = req.body;
    let { id } = req.params;

    await User.findByIdAndUpdate(id, { firstname, lastname, about });
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getCoderProfile = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch user by ID
    const user = await User.findById(id).select("-password"); // exclude sensitive info

    if (!user) {
      return res.status(404).json({ error: "Coder not found" });
    }

    if (user.isManager === true) {
      return res.status(403).json({ error: "Not a Coder profile" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getManagerProfile = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch user by ID
    const user = await User.findById(id).select("-password"); // exclude sensitive info

    if (!user) {
      return res.status(404).json({ error: "Coder not found" });
    }

    if (user.isManager !== true) {
      return res.status(403).json({ error: "Not a Manager profile" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

/* router.put("/forget-password", (request, response) => {
  let { email } = request.body;
  response.send(`Forget password for user with email: ${email}`);
}); */
