import React from "react";
import  {login} from "../../redux/auth-reducer"
import {connect} from "react-redux";
import { Formik } from "formik";
import {Redirect} from "react-router-dom/";
import loginFormSchema from "../../FormValidation/LoginFormSchema";


const Login = (props) => {
    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
   return ( <div>
        <h1>
            Login
        </h1>

        <Formik
            initialValues={{email: "", password: "", rememberMe: true}}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values)
                props.login(values.email, values.password, values.rememberMe)
            }}
            validationSchema={loginFormSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                    <p>
                        <label htmlFor={'email'}> Имя </label> <br/>
                        <input
                            type={'text'}
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}

                        />
                    </p>
                    {touched.name && errors.name && <p>{errors.name}</p>}

                    <p>
                        <label htmlFor={'password'}> Пароль </label> <br/>
                        <input
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

                        />
                    </p>
                    {touched.password && errors.password && <p>{errors.password}</p>}

                    <p>
                        <input
                            type={'checkbox'}
                            name={'rememberMe'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.rememberMe}

                        /><label htmlFor={'rememberMe'}> remember me </label>
                    </p>


                    <button disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}>Send
                    </button>
                </div>
            )}
        </Formik>
    </div>)

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);