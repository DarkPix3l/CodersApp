import Joi from 'joi';


//joi schema
const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required(),
});

//actual middleware
export const validateSignin = (req, res, next) => {
  const { error } = signinSchema.validate(req.body);
  console.log("signini validation successfully");
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};