import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Validate} from "../../../../../models/validations/AuthFormSchema";
import {UserRegister} from "../../../../../models/interfaces/authInterfaces";


interface Props {
    includeLoadingLogo: any
    registration: any
    err: any
}


const RegistrationForm: React.FC<Props & InjectedFormProps<{}, Props>> = (props) => {
    //console.log(props)

    const submit = (values: any) => {
        if (props.valid) {
            const user: UserRegister = {
                email: values.email,
                password: values.password,
                profile: {
                    userName: values.userName,
                    gender: values.gender,
                    country: values.country
                }
            }
            props.reset()
            props.includeLoadingLogo(true)
            props.registration(user)
                .then(
                    () => {
                        setTimeout(() => {
                            props.includeLoadingLogo(false)
                        }, 1500)
                    },
                    (err: any) => {
                        console.log(err)
                        setTimeout(() => {
                            props.includeLoadingLogo(false)
                        }, 1500)
                    }
                )
        }
    }
    return (
        <div className="sign-up-form">
            <form className="contact-form" onSubmit={props.handleSubmit(submit)}>

                { props.err &&
                <div className="error">
                    {props.err.message}
                </div>
                }


                {/*===================================Name====================*/}
                <div className="form-control-block">
                    <Field
                        name="userName"
                        type="userName"
                        label='Name'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                        ]}
                    />
                </div>
                {/*===================================Country====================*/}
                <div className="form-control-block">
                    <Field
                        name="country"
                        type="country"
                        label='Country'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.minLength3
                        ]}
                    />
                </div>
                {/*===================================Gender====================*/}
                <div className="form-control-block">
                    <label className="required">Gender:</label>
                    <Field
                        component={Validate.RadioGroup}
                        name="gender"
                        validate={[
                            Validate.required,
                        ]}
                        options={[
                            { title: 'Male', value: 'male' },
                            { title: 'Female', value: 'female' }
                        ]}
                    />
                </div>
                {/*===================================EMAIL====================*/}
                <div className="form-control-block">
                    <Field
                        name="email"
                        type="email"
                        label='Email'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.email,
                        ]}
                    />
                </div>
                {/*===================================PASSWORD====================*/}
                <div className="form-control-block">
                    <Field
                        name="password"
                        type="password"
                        label='Password'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.maxLength15,
                            Validate.minLength8
                        ]}
                    />
                </div>
                {/*===================================ConfirmPASSWORD====================*/}
                <div className="form-control-block">
                    <Field
                        name="confirmPassword"
                        type="password"
                        label='Confirm Password'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.confirmPassword('password'),
                        ]}
                    />
                </div>


                {
                    props.valid
                    &&
                    <div className="submit-btn">
                        <button type="submit" disabled={props.submitting && !props.valid}>
                            Submit
                        </button>
                    </div>
                }
            </form>
        </div>
    )
}


export default reduxForm<{}, Props>({
    form: 'registrationForm',
})(RegistrationForm);
