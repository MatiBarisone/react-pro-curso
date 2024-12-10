import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1> Register Formik Page </h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .min(2, 'Debe ser mayor a 2 caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El correo no tiene un formato valido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Debe tener 6 caracteres o más')
                            .required('Requerido'),
                        password2: Yup.string()
                        .oneOf( [Yup.ref('password1')], 'Las contraseñas no son iguales' )
                            .required('Requerido'),
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form noValidate>

                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Nombre"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="ejemplo@mail.com"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="******"
                            />

                            <MyTextInput
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="******"
                            />


                            <button type="submit"> Create </button>
                            <button type="button" onClick={ handleReset }> Reset Form </button>

                        </Form>
                    )
                }


            </Formik>

        </div>
    )
}

export default RegisterFormikPage
