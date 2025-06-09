import Joi from 'joi';

//joi schema
export const challengeValidator = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  level: Joi.string().required(),
  code: Joi.object({
    function_name: Joi.string().required(),
    code_text: Joi.array().items(
      Joi.object({
        language: Joi.string().required(),
        text: Joi.string().required()
      })
    ).required(),
    inputs: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required()
      })
    ).required()
  }).required(),
  tests: Joi.array().items(
    Joi.object({
      weight: Joi.number().required(),
      inputs: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          value: Joi.any().required()
        })
      ).required(),
      output: Joi.any().required()
    })
  ).required()
});

//middleware
export const validateChallenge = (req, res, next) => {
  const { error } = challengeValidator.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
