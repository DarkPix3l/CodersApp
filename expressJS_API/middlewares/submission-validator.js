import Joi from 'joi';

export const validateSubmission = (req, res, next) => {
  const schema = Joi.object({
    lang: Joi.string().valid('py', 'js').required(),
    code: Joi.string().required(),
    challenge_id: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
