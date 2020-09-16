import React from 'react'


const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be at least ${min}` : undefined

export const Validate = {
    required: (value: string) => value ? undefined : 'Required',

    maxLength15: maxLength(15),

    minLength8: minLength(8),
    minLength3: minLength(3),

    email: (value: string) =>
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
            'Invalid email address' : undefined,

    renderField: ({ input, label, type, className, checked, value, meta: { touched, error, warning }}: any) => (
        <div>
            <label className="required">{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className={className} />
                <div className="validation">
                    {touched && ((error && <small>{error}</small>) || (warning && <small>{warning}</small>))}
                </div>
            </div>
        </div>
    ),

    RadioGroup: ({ input, options, meta: { touched, error }}: any) => {

        const hasError = touched && error;
        return (
            <div className="row">
                {options.map(
                    (option: { title: string, value: string }) =>
                        <div className="col-6" key={option.value}>
                            <div className="radio-btn">
                                <label className="radio-btn-label">
                                    <input type="radio" {...input} value={option.value} checked={option.value === input.value} />
                                    <span>{option.title}</span>
                                </label>
                            </div>
                        </div>
                )}
                <div className="validation" style={{marginTop: 10}}>
                    {hasError && <small>{error}</small>}
                </div>
            </div>
        );
    },


    confirmPassword: (matchName: string) => (value: any, allValues: any) =>
        value !== allValues[matchName]
            ? `This field must match with ${matchName} field`
            : undefined
}
