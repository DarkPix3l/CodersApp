import Joi from 'joi';

//joi schema
const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  surname: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required(),
  isManager: Joi.boolean().optional()
});

//actual middleware
export const validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  console.log("signini validation successfully");
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};