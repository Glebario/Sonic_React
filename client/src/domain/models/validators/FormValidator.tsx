import * as Yup from 'yup';
import { Schema, SchemaName, IValidateError } from '../interfaces/auth-interfaces';

const messages = {
  tooShort: 'Too Short!',
  tooLong: 'Too Long!',
  required: 'required',
  invalidEmail: 'Invalid email',
  confirmPassword: 'Passwords must match',
};

export const RegistrationSchema = Yup.object().shape({

  userName: Yup.string()
    .min(3, messages.tooShort)
    .max(15, messages.tooLong)
    .required(messages.required),
  country: Yup.string()
    .min(3, messages.tooShort)
    .max(15, messages.tooLong)
    .required(messages.required),
  gender: Yup.string()
    .required(messages.required),
  email: Yup.string()
    .email(messages.invalidEmail)
    .required(messages.required),
  password: Yup.string()
    .min(8, messages.tooShort)
    .max(15, messages.tooLong)
    .required(messages.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], messages.confirmPassword)
    .required(messages.required),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.invalidEmail)
    .required(messages.required),
  password: Yup.string()
    .min(8, messages.tooShort)
    .max(15, messages.tooLong)
    .required(messages.required),
});

export const isValid = (schemaName: SchemaName, formValue: Schema): boolean => {
  if (schemaName === 'loginSchema') {
    return LoginSchema.isValidSync(formValue);
  }

  return RegistrationSchema.isValidSync(formValue);
};

export const validate = (schemaName: SchemaName, formValue: Schema): [] | IValidateError[] => {
  if (schemaName === 'loginSchema') {
    try {
      LoginSchema.validateSync(formValue, { abortEarly: false });
      return [];
    } catch (errors) {
      const newArrayErrors = errors.inner.map((err: Yup.ValidationError) => ({ pathField: err.path, message: err.message }));

      return errors instanceof Yup.ValidationError ? newArrayErrors : [];
    }
  } else {
    try {
      RegistrationSchema.validateSync(formValue, { abortEarly: false });
      return [];
    } catch (errors) {
      const newArrayErrors = errors.inner.map((err: Yup.ValidationError) => ({ pathField: err.path, message: err.message }));

      return errors instanceof Yup.ValidationError ? newArrayErrors : [];
    }
  }
};
