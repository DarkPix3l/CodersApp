import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const loginUser = async (email, password) => {
  const res = await axios.get(`${BASE_URL}/users`, {
    params: { email, password },
  });
  if (res.data.length > 0) return res.data[0];
  else throw new Error("Invalid credentials");
};

