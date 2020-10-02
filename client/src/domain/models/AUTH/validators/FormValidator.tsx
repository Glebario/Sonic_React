import React from "react";
import * as Yup from 'yup';
import {Schema, SchemaName, IValidateError} from "../interfaces/auth-interfaces";

export const RegistrationSchema = Yup.object().shape({
    userName: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    country: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    gender: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required')
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  password: Yup.string()
      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required')
});


export const isValid = (schemaName: SchemaName, formValue: Schema): boolean => {
    if(schemaName === 'loginSchema') {
        return LoginSchema.isValidSync( formValue )
    }
    else {
        return RegistrationSchema.isValidSync( formValue )
    }

}

export const validate = (schemaName: SchemaName, formValue: Schema): [] | IValidateError[] => {
    if(schemaName === 'loginSchema') {
        try {
            LoginSchema.validateSync(formValue, {abortEarly: false})
            return []
        }
        catch (errors) {
            const newArrayErrors = errors.inner.map((err: Yup.ValidationError) => {
                return {pathField: err.path, message: err.message}
            })

            return errors instanceof Yup.ValidationError ? newArrayErrors : []
        }
    }
    else {
        try {
            RegistrationSchema.validateSync(formValue, {abortEarly: false})
            return []
        }
        catch (errors) {
            const newArrayErrors = errors.inner.map((err: Yup.ValidationError) => {
                return {pathField: err.path, message: err.message}
            })

            return errors instanceof Yup.ValidationError ? newArrayErrors : []
        }
    }
}


