import React from 'react';
import {
    Form,
    Input,
    Button,

} from 'antd';
import 'react-day-picker/lib/style.css';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterPage = () => {

    const [form]=Form.useForm();
    const onFinish = (values) => {
        console.log('values',values);
    };

    return (
        <div >
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="nNombre"
                    tooltip="cuentanso como te llamas"
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
                </Form.Item><br/>

                <div >
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Registrarme
                        </Button>
                    </Form.Item>
                </div>

            </Form>

        </div>
    );
};

export default RegisterPage;
