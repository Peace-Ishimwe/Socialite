import joi from "joi";

const validator = (Schema) => (payload) => 
    Schema.validate(payload , {abortEarly: false})

const signupSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    tel: joi.string().required(),
    password: joi.string().min(3).required()
});

const validateSignup = validator(signupSchema)

export default validateSignup