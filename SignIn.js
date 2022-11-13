
import { Formik, Form } from 'formik';
import {Link } from 'react-router-dom';
import './signin.css'
import TextField from './TextField';
import *  as Yup from "yup"


const SignIn = () => {
    const schema = Yup.object ({
            email: Yup.string().email('Email is invalid').required('Email is required'),
            password: Yup.string().min(4, 'password must be atleast 4 characters').max(15).required(),
            text: Yup.string().required()
        });
    return ( 
        <Formik
            initialValues={{
                email:"",
                password: "",
                text: ""

            }}
            validationSchema={schema}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h2> Have an account already</h2>
                    <h3> Sign in here!</h3>
                     {/* {console.log(formik.values)} */}

                    <Form>
                        <TextField label="Email" name="email" type ="email" />
                        <TextField label="Password" name="password" type ="password" />
                        <TextField label="Project Name" name="text" type ="text" />
                        <div className='form'>
                           <Link to='/signup'><button type='submit'> SIGN IN</button></Link>
                           {/* <button type='submit'> SIGN IN</button> */}

                            <p>Don't have an account <Link to='/signup'> SIGN UP</Link> </p>           
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
     );
}
 
export default SignIn;