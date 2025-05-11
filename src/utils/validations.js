export const requiredRules = (value) => {
  if (value) return true;
  return "This field is required";
};

export const emailRules = (value) => {
  if (/.+@.+\..+/.test(value)) return true;
  return "Please enter a correct email." ;
};

export const passwordRules = (value) => {
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
    return true;
  }
  return "Password must be at least 6 characters and include a number";
};
