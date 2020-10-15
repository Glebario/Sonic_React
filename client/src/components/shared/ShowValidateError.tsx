import {IValidateError} from "../../domain/models/interfaces/auth-interfaces";
import React from "react";

export const ShowValidateError = ({fieldName, errors}: {fieldName: string, errors: IValidateError[]}) => {
    const listErrors = errors.map((errorObject,index) =>
        errorObject.pathField === fieldName ? <li key={index}><small>{errorObject.message}</small></li> : undefined
    )
    return <ul>{listErrors}</ul>
}
