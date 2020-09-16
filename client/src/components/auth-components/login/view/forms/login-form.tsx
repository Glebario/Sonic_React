import React from 'react'
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Validate} from "../../../../../models/validations/AuthFormSchema";
import {AuthErrorResponse, UserLogin} from "../../../../../models/interfaces/authInterfaces";


interface Props{
    includeLoadingLogo: any
    login: any
    err: any
}


const LoginForm: React.FC<Props & InjectedFormProps<{}, Props>> = (props) => {
    //console.log(props)

    const submit = (values: any) => {
        if( props.valid ) {
            const user: UserLogin = {
                email: values.email,
                password: values.password
            }
            props.change('password', '')
            props.includeLoadingLogo(true)
            props.login(user)
                .then(
                    () => {
                        setTimeout(() => {
                            props.includeLoadingLogo(false)
                        }, 1500)
                    },
                    (err: AuthErrorResponse) => {
                        //console.log(err)
                        setTimeout(() => {
                            props.includeLoadingLogo(false)
                        }, 1500)
                    }
                )
        }
    }
    return (
        <div className="sign-in-form">
            <form className="contact-form" onSubmit={props.handleSubmit(submit)}>


                { props.err &&
                    <div className="error">
                        {props.err.message}
                    </div>
                }


                {/* ====================== EMAIL =========================== */}
                <div className="form-control-block">
                    <Field
                        name="email"
                        type="email"
                        label='Email'
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.email
                        ]}
                    />
                </div>
                {/* ========================= PASSWORD ======================== */}
                <div className="form-control-block">
                    <Field
                        name="password"
                        type="password"
                        label="Password"
                        component={Validate.renderField}
                        validate={[
                            Validate.required,
                            Validate.maxLength15,
                            Validate.minLength8
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
    form: 'loginForm',
})(LoginForm);

