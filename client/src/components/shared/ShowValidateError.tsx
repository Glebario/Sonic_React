import React from 'react';
import { IValidateError } from '../../domain/models/interfaces/auth-interfaces';

export const ShowValidateError = ({ fieldName, errors }: { fieldName: string, errors: IValidateError[] }) => {
  const listErrors = errors.map((errorObject, index) => (
    errorObject.pathField === fieldName
    // eslint-disable-next-line react/no-array-index-key
      ? <li key={index}><small>{errorObject.message}</small></li>
      : undefined));
  return <ul>{listErrors}</ul>;
};
