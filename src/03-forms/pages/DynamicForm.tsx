import { Formik, Form } from "formik";
import formJson from "../data/coustom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}; 

for (const input of formJson) {
    initialValues[input.name] = input.value
    
    if (!input.validations) continue;
    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }

        if (rule.type === 'minLenght'){
            schema = schema.min( (rule as any).value || 2 , `Minimo de ${(rule as any).value || 2 } caracteres`)
        }

        if (rule.type === 'email'){
            schema = schema.email('El correo no tiene un formato valido')
        }

        //... otras reglas
    }

    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {

    return (
        <div>
            <h1> Dynamic Form </h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(value) => {
                    console.log(value)
                }}
                validationSchema={validationSchema}

            >
                {
                    ({handleReset}) => (
                        <Form noValidate>
                            {
                                formJson.map(({ type, name, placeholder, lable, options}) => {

                                    if (type === 'input' || type === 'password' || type === 'email') {
                                        return <MyTextInput
                                            key={name}
                                            label={lable}
                                            name={name}
                                            placeholder={placeholder}
                                        />
                                    }
                                    else if (type === 'select') {
                                        return (
                                            <MySelect
                                                key={name}
                                                label={lable}
                                                name={name}
                                            >
                                                <option value=""> Selecciona una opción </option>
                                                {
                                                    options?.map( ({id, lable}) => (
                                                        <option key={id} value={id} > {lable} </option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }

                                })
                            }

                            <button type="submit"> Submit </button>
                            <button onClick={handleReset}> Reset </button>

                        </Form>

                    )
                }
            </Formik>

        </div>
    )
}

export default DynamicForm
