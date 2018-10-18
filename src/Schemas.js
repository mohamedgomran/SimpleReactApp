import SimpleSchema from 'simpl-schema';

export const registerSchema = {
  email: {
    type: SimpleSchema.oneOf({
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    }),
    label: 'Email',
    optional: false,
  },
  password: {
    type: String,
    label: 'Password',
    optional: false,
    uniforms: {
      type: 'password',
      placeholder: 'password',
    },
  },
};

export const loginSchema = registerSchema;
