import joi from "joi";

export const authorizationHeaderSchema = joi.object({
    authorization: joi.string().pattern(/^Bearer [a-zA-Z0-9\-]{36}/).required()
});

export const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required() ,
    confirmPassword: joi.string().required()
});

export const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const criarNovaUrlSchema = joi.object({
    url: joi.string().required()
});