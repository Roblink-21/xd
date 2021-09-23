
import React from 'react';
import { Button, Form, Input, message, Select } from "antd";

import {auth, db} from "../firebase";

import '../estyles/registro.css'
import translateMessage from "../utils/translateMessage";

import 'react-day-picker/lib/style.css';
import {Option} from "antd/es/mentions";
import {formItemLayout, prefixSelector, tailFormItemLayout} from "../utils/formLayout";



const Registro = () => {

    const [form]=Form.useForm();

    const onFinish = async ({email,password,name,year,month,phone, gender }) => {

        try {

            //console.log('values',values);
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            // Signed in
            const user = userCredential.user;
            console.log("user",user);
            await db.ref(`users/${user.uid}`).set({
                id:user.uid,
                name,
                email,
                password,
                year,
                month,
                phone,
                gender
            });

            message.success("usuario registardo correctamnete");
        } catch (error)  {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode", errorCode);
            console.log("errorMessage", errorMessage);
            message.error(translateMessage(errorCode));
        }
    };



    return (


        <div className="Ho d-flex justify-content-center">
            <div className=" d-flex container-fluid align-items-center h-90">
                <div className="container  w-75 mt-5 row rounded col-md-3 ">
                    <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                        <p> 1</p>
                    </div>
                    <div className="card col  col-md-6  ">
                        <div className=" card text-center ">
                            <Form.Item {...tailFormItemLayout}>

                                <h5>Registrate con </h5>
                                <div className="row">
                                    <div className="col-md-6  ">
                                        {/*<Form.Item {...tailFormItemLayout}>*/}
                                        {/*    <Button  type="primary" htmlType="submit" >*/}
                                        {/*        Facebook*/}
                                        {/*    </Button>*/}
                                        {/*</Form.Item >*/}
                                        <a href="https://www.facebook.com" className="btn btn-primary btn-lg active" role="button"
                                           aria-pressed="true">Facebook</a>

                                    </div >
                                    <div className="col-md-6">
                                        {/*<Form.Item {...tailFormItemLayout}>*/}
                                        {/*    <Button type="primary" htmlType="submit" >*/}
                                        {/*        Google*/}
                                        {/*    </Button>*/}
                                        {/*</Form.Item >*/}
                                        <a href="https://www.facebook.com" class="btn btn-secondary btn-lg" role="button"
                                           aria-pressed="true">Google</a>

                                    </div>


                                </div>


                            </Form.Item >
                            <Form
                                {...formItemLayout}
                                form={form}
                                name="register"
                                onFinish={onFinish}
                                scrollToFirstError
                            >
                                <Form.Item
                                    name="name"
                                    label="Nombre Completo "
                                    tooltip="Cuentanos  como te llamas"
                                    rules={[
                                        {
                                            required: true, message: 'Ingrese su nombre', whitespace: true
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Correo Electronico"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Ingresa un correo valido!',
                                        },
                                        {
                                            required: true,
                                            message: 'Este correo es obligatorio!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Contraseña"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese su contraseña!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="Confirmar contraseña"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Confirmar tu contraseña!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('las contraseñas no coinciden!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item label="Fecha de nacimiento " style={{ marginBottom: 0 }}>
                                    <Form.Item
                                        name="year"
                                        rules={[{ required: true }]}
                                        style={{ display: 'inline-block', width: 'calc(100% - 8px)' }}
                                    >
                                        <Input placeholder="Año AAAA" />
                                    </Form.Item>
                                    <Form.Item
                                        name="month"
                                        rules={[{ required: true }]}
                                        style={{ display: 'inline-block', width: 'calc(100% - 8px)' , margin: '0 0px' }}
                                    >
                                        <Input placeholder="Mes MM" />
                                    </Form.Item>

                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Telefono "
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item
                                    name="gender"
                                    label="Genero "
                                    rules={[{ required: true, message: 'Please select gender!' }]}
                                >
                                    <Select placeholder="select your gender">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                        <Option value="other">Other</Option>
                                    </Select>
                                </Form.Item>








                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" >
                                        Crear Cuenta
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Registro;
